(ns realworld.forms.validators
  (:require [clojure.string :as str]))

(def email-regex #"^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$")

(def url-regex #"https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)")

(defn zero-count? [v]
  (if (satisfies? ICounted v)
    (zero? (count v))
    false))

(defn not-empty? [v _ _]
  (cond
    (nil? v) false
    (= "" v) false
    (zero-count? v) false
    :else true))

(defn url? [v _ _]
  (if (or (nil? v) (empty? v))
    true
    (not (nil? (re-matches url-regex (str v))))))

(defn email? [v _ _] 
  (not (nil? (re-matches email-regex (str v)))))

(defn number0>100? [v _ _]
  (if (not (not-empty? v nil nil))
    true
    (let [n (js/parseFloat v 10)]
      (and (< 0 n) (>= 100 n)))))

(defn bool? [v _ _]
  (if (nil? v)
    true
    (or (= true v) (= false v))))

(defn numeric? [v _ _]
  (if (nil? v)
    true
    (re-matches #"^\d+$" v)))

(defn ok-password? [v _ _]
  (if (seq v)
    (< 7 (count v))
    true))

(def types
  {:not-empty {:message "Value can't be empty"
               :validator not-empty?}
   :bool {:message "Value must be true or false"
          :validator bool?}
   :url {:message "Value is not a valid URL"
         :validator url?}
   :email {:message "Value is not a valid email"
           :validator email?} 
   :email-confirmation {:message "Email doesn't match email confirmation"
                        :validator (fn [_ data _]
                                     (let [email (:email data)
                                           email-confirmation (:email-confirmation data)]
                                       (if (some nil? [email email-confirmation])
                                         true
                                         (= email email-confirmation))))}
   :ok-password {:message "Password must have at least 8 characters"
                 :validator ok-password?}
   :numeric {:message "Value is not a number"
             :validator numeric?}
  })

(defn get-validator-message [type]
  (or (get-in types [type :message])
      "Value failed validation."))

(defn to-validator
  "Helper function that extracts the validator definitions."
  [validations config]
  (reduce-kv (fn [m attr v]
               (assoc m attr
                      (map (fn [k] [k (get-in validations [k :validator])]) v))) {} config))


