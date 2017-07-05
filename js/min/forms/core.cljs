(ns forms.core
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [forms.util :refer [key-to-path]]
            [forms.dirty :refer [calculate-dirty-fields]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(declare init-state)

(defn errors-keypaths
  "Calculates the error key paths from the error map. It is used to mark
  all invalid key paths as dirty"
  ([data] (distinct (:results (errors-keypaths data [] {:results []}))))
  ([data path results]
   (reduce-kv (fn [m k v]
                (if (= k :$errors$)
                  (assoc m :results (conj (:results m) path))
                  (if (or (vector? v) (map? v))
                    (let [{:keys [results lengths]} m
                          new-path (conj path k)
                          child-paths (errors-keypaths v new-path m)
                          new-results (:results child-paths)]
                      {:results (concat results new-results)})
                    (if (nil? v)
                      m
                      (assoc m :results (conj (:results m) (conj path k))))))) results data)))

(defprotocol IForm
  "IForm protocol defines the form behavior"
  (init! [this]
    "Initializes the form. If the form constructor was called with the
     `auto-validate?` option set to `true` it will add a watch to the
     internal state atom and validate the form every time data was changed")
  (state [this]
    "Returns inner state atom. The state map holds the following properties:
    
    - `:errors` - map of the current form errors
    - `:init-data` - initial form data that was passed to the constructor
    - `:data` - current form data
    - `:cached-dirty-key-paths` - set of the key paths that were dirty when
       the whole form was validated
    - `:dirty-key-paths` - set of the dirty key paths")
  (errors [this]
    "Returns the atom that holds the current error map. This map holds all
     errors, regardless of the key path `dirty` state.")
  (errors-for-path [this key-path]
    "Returns errors for the key path. It is possible that this function will
     return `nil` even though the errors exist in the `:errors` map because
     this function accounts for the key path `dirty` state. If the field has
     errors, but it's not dirty this function will return `nil`")
  (data [this]
    "Returns the atom that holds the current data map.")
  (data-for-path [this key-path]
    "Returns data for the key path")
  (validate! [this] [this dirty-only?]
    "Validates the form.

    When called without the second argument - `(validate! form)` it will validate
    the whole form and mark all invalid fields as `dirty` This should happen on
    `submit` so you can show all form errors to the user.

    When called with `true` as the second argument - `(validate! form true)` it wil
    validate only the fields that are marked as dirty - fields that are not `nil` and
    that have a different value than in the `:init-data`. This can be called on `change`
    or `blur` events.")
  (commit! [this]
    "Commits the form. It will validate the form and mark dirty key paths. After that
     it will call the `:on-commit` function that can be used to persist the form.")
  (update! [this data]
    "Updates the data, marks dirty key paths and validates the form")
  (mark-dirty! [this]
    "Mark all invalid key paths as dirty. It will validate the whole form and
     cache any key paths that have errors.")
  (mark-dirty-paths! [this]
    "Creates a diff between the initial data and the current data. Based on that diff
     it marks the key paths that are dirty.")
  (clear-cached-dirty-key-paths! [this]
    "Clear dirty key paths that are cached after caling the `mark-dirty!` function")
  (is-valid? [this]
    "Is the form in the valid state")
  (is-valid-path? [this key-path]
    "Is the key path in the valid state")
  (dirty-paths-valid? [this]
    "Are the dirty key paths in the valid state")
  (reset-form! [this] [this init-data]
    "Reset form to the initial state"))

(defrecord Form [state-atom validator opts]
  IForm
  (init! [this]
    (let [auto-validate? (get-in this [:opts :auto-validate?])]
      (remove-watch (state this) :__form__) 
      (when auto-validate?
        (add-watch (state this) :__form__
                   (fn [_ _ old-val new-val]
                     (let [old-data (:data old-val)
                           new-data (:data new-val)]
                       (when (not= old-data new-data)
                         (mark-dirty-paths! this)
                         (validate! this true))))))
      this))

  (state [this]
    (:state-atom this))

  (errors [this]
    (r/cursor (state this) [:errors]))

  (errors-for-path [this key-path]
    (reaction
     (let [path (key-to-path key-path)
           current-state @(state this)
           is-dirty? (contains? (:dirty-key-paths current-state) path)]
       (when is-dirty? (get-in @(errors this) (conj path :$errors$))))))

  (data [this]
    (r/cursor (state this) [:data]))

  (data-for-path [this key-path]
    (reaction
     (get-in @(data this) (key-to-path key-path))))

  (validate! [this]
    (validate! this false))

  (validate! [this dirty-only?]
    (if dirty-only?
      (mark-dirty-paths! this)
      (mark-dirty! this))
    (let [validator (:validator this)]
      (swap! (state this) assoc :errors (validator @(data this)))))

  (commit! [this]
    (let [commit-fn (get-in this [:opts :on-commit])]
      (mark-dirty! this)
      (validate! this)
      (commit-fn this)))

  (update! [this data]
    (swap! (state this) assoc :data data)
    (mark-dirty-paths! this)
    (validate! this true))

  (mark-dirty! [this]
    (let [errors (validator @(data this))
          errors-keypaths (errors-keypaths errors)
          current-state @(state this)
          current-dirty-paths (:dirty-key-paths state)]
      (reset! (state this)
              (assoc current-state
                     :cached-dirty-key-paths (set (concat (:cached-dirty-key-paths state) errors-keypaths))
                     :dirty-key-paths (set errors-keypaths)))))

  (mark-dirty-paths! [this]
    (let [current-state @(state this)
          dirty-paths (calculate-dirty-fields (:init-data current-state) (:data current-state))]
      (swap! (state this) assoc :dirty-key-paths (set (concat dirty-paths
                                                              (:cached-dirty-key-paths current-state))))))

  (dirty-paths-valid? [this]
    (reaction
     (let [current-state @(state this)
           current-errors (:errors current-state)]
       (let [dirty-paths (:dirty-key-paths current-state)
             valid-paths (take-while
                          (fn [path]
                            (nil? (get-in current-errors path))) dirty-paths)]
         (= (count valid-paths) (count dirty-paths))))))

  (clear-cached-dirty-key-paths! [this]
    (swap! (state this) assoc :cached-dirty-key-paths (set {})))

  (is-valid? [this]
    (reaction
     (= {} @(errors this))))

  (is-valid-path? [this key-path]
    (reaction 
     (nil? @(errors-for-path this key-path))))

  (reset-form! [this]
    (reset-form! this (:init-data @(state this))))

  (reset-form! [this init-data]
    (reset! (state this) (init-state init-data))))

(defn ^:private init-state [data]
  {:errors {}
   :init-data data
   :data (or data {})
   :cached-dirty-key-paths (set {})
   :dirty-key-paths (set {})})

(defn ^:private with-default-opts [opts]
  (merge {:on-commit (fn [_])
          :auto-validate? false} opts))

(defn constructor
  "Form constructor. It accepts the following arguments:

  - `validator` - returned either by the `form.validator/validator` or `form.validator/comp-validators` function
  - `data` - initial data map
  - `opts` - map with the form options:
      + `:on-commit` - function to be called when the form is commited (by calling `(commit! form)`)
      + `:auto-validate?` - should the form be validated on any data change"

  ([validator] (partial constructor validator))
  ([validator data] (constructor validator data {}))
  ([validator data opts]
   (init! (->Form (r/atom (init-state data)) validator (with-default-opts opts)))))
