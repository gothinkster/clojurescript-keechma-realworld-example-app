(ns forms.validator
  (:require [forms.util :refer [key-to-path]]))

(enable-console-print!)

(defn ^:private get-by-key [key next parent-data parent-errors full-data prev-path]
  (let [data (get parent-data key)
        errors (or (get parent-errors key) {})
        res (next data errors full-data (conj prev-path key))]
    (if (not (or (nil? res) (= {} res)))
      (assoc parent-errors key res)
      parent-errors)))

(defn ^:private get-list [next parent-data parent-errors full-data prev-path]
  (let [data (reduce-kv (fn [m k v] 
                          (let [errors (or (get m k) {})
                                res (next v errors full-data (conj prev-path k))]
                            (if (not (or (nil? res) (= {} res)))
                              (assoc m k res)
                              m))) parent-errors parent-data)]
    (if (= data {}) nil data)))

(defn ^:private validate-attr [validators value full-data path]
  (reduce (fn [failed v]
            (let [[name validator] v]
                (if (not (validator value full-data path))
                  (conj failed name)
                  failed))) [] validators))

(defn ^:private validate-with-nested-validators [nested-validators value errors full-data path]
  (if (not (empty? nested-validators))
    (reduce (fn [acc v]
              (v value acc full-data path)) errors nested-validators)
    errors))

(defn ^:private attr-errors [validators value errors full-data path]
  (let [nested-validators (vec (filter fn? validators))
        normal-validators (vec (filter (complement fn?) validators))
        with-nested-errors (validate-with-nested-validators nested-validators value errors full-data path)
        failed (validate-attr normal-validators value full-data path)]
    (if (pos? (count failed))
      {:$errors$ {:value value
                  :failed (concat (or (get-in with-nested-errors [:$errors$ :failed]) []) failed)}}
      with-nested-errors)))

(defn ^:private key-to-getter [key]
  (if (= key :*) get-list (partial get-by-key key)))

(defn ^:private make-validator [path validators]
  (let [iterator (reverse (map key-to-getter path))]
    (reduce (fn [acc v]
              (if (nil? acc)
                (partial v (partial attr-errors validators))
                (partial v acc))) nil iterator)))

(defn ^:private validate-map
  ([input errors key attr-validators] (validate-map input errors key attr-validators nil nil))
  ([input errors key attr-validators full-data prev-path]
   (let [path (key-to-path key)
         validator (make-validator path attr-validators)]
     (validator input errors (or full-data input) (or prev-path [])))))

(defn ^:private validator-runner
  ([validators input] (validator-runner validators input {}))
  ([validators input errors] (validator-runner validators input errors nil nil))
  ([validators input errors full-data prev-path]
   (reduce-kv (fn [errors key attr-validators]
                (validate-map input errors key attr-validators full-data prev-path))
              errors validators)))

(defn validator
  "Creates a form validator. Validator is a map where keys represent the path
  to data that will be validated and the value is a vector of attribute validators.

  Attribute validators are tuples where the first element is the attribute validator name
  and the second one is the validation function. Validation function receives the value for
  the key path and returns a boolean. It should return `true` if the attribute is valid and 
  `false` if it's invalid. Attribute validators receive `full-data` (whole object that is
  being validated) and the attribute `path` as the second and third arguments.

  **Example attribute validator**

  ```clojure
  (def not-empty [:not-empty ;; Name of the attribute validator
                  (fn [value _ _]
                    (not (empty? v)))]
  ```

  If you want to build more complex validators `full-data` and `path` arguments allow you
  to do so. For instance, let's say we're writing the validator that can check if the email
  confirmation is the same as the email:

  ```clojure
  (def email-confirmation [:confirmed-email?
                           (fn [value full-data path]
                             (let [email (:email full-data)
                                   email-confirmation (:email-confirmation full-data)]
                               (= email email-confirmation)))]
  ```


  `validator` returns the function that accepts the data and returns the map of validation
  errors.

  **Simple example:**

  ```clojure
  (def not-empty [:not-empty (fn [v _ _] (not (empty? v)))])
  (def form-validator-1 (validator {:username [not-empty]}))
  
  (form-validator-1 {:username \"\"})
  ;; returns {:username {:$errors$ {:value \"\" :failed [:not-empty]}}}
  ```

  **Validators can validate nested paths:**

  ```clojure
  (def form-validator-2 (validator {:user.name [not-empty]}))
  (form-validator-2 {:user {:username \"\"}})
  ;; returns {:user {:username {:$errors$ {:value \"\" :failed [:not-empty]}}}}
  ```

  **Validators can validate objects in the list:**

  ```clojure
  (def form-validator-3 (validator {:user.accounts.*.network [not-empty]}))
  (form-validator-3 {:user {:accounts [{:network \"\"}]}})
  ;; returns {:user {:accounts {0 {:network {:$errors$ {:value \"\" :failed [:not-empty]}}}}}}
  ```

  **Validators can validate values in the list:**

  ```clojure
  (def form-validator-4 (validator {:user.phone-numbers.* [not-empty]}))
  (form-validator-3 {:user {:phone-numbers [\"\"]}})
  ;; returns {:user {:phone-numbers {0 {:$errors$ {:value \"\" :failed [:not-empty]}}}}}
  ```

  **Validators can be nested inside other validators:**

  ```clojure
  (def user-validator (validator {:username [not-empty]}))
  (def article-validator (validator {:title [not-empty]
                                     :user [user-validator]}))

  (article-validator {:title \"\" :user {:username \"\"}})
  ;; returns {:title {:$errors {:value \"\" :failed [:not-empty]}}
  ;;          :user {:username {:$errors$ {:value \"\" :failed [:not-nil]}}}}
  ```

  Features provided by the validator ensure that you can validate any data structure, no matter how deeply nested it is. You can also create small focused validators that can be nested or composed which ensures
  that your validation logic stays DRY and allows reuse of the validators.
  "
  [validators]
  (partial validator-runner validators))

(defn comp-validators
  "Creates a validator that is a composition of the validators passed as the arguments:

  ```clojure
  (def not-empty [:not-empty (fn [v] (not (empty? v)))])

  (def username-validator (validator {:username [not-empty]}))
  (def password-validator (validator {:password [not-empty]}))

  (def user-validator (comp-validators username-validator password-validator))

  (user-validator {:username \"\" :password \"\"})
  ;; returns {:username {:$errors$ {:value \"\" :failed [:not-empty]}}
  ;;          :password {:$errors$ {:value \"\" :failed [:not-empty]}}}
  ```"  
  [& validators]
  (fn [input]
    (reduce (fn [acc v] (or (v input acc) {})) {} validators)))
