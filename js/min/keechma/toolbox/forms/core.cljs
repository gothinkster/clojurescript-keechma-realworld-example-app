(ns keechma.toolbox.forms.core
  (:require [forms.dirty :as keechma-forms-dirty]))

(def id-key ::forms)

(defn form-type [form & args] (type form))

(defmulti get-data
  "This function should return either the initial form data or a promise that will resolve to the inital form data."
  form-type)
(defmulti submit-data
  "This function should return either the saved form data or a promise that will resolve to the saved form data"
  form-type)
(defmulti update-data
  "This function should return either the updated form data or a promise that will resolve to the updated form data"
  form-type)
(defmulti process-in
  "This function should return the processed incoming data (returned from the `get-data`) function. Use it to prepare the incoming data for the form."
  form-type)
(defmulti process-out
  "This function should return the processed outgoing data that will be passed to the `submit-data` function."
  form-type)
(defmulti process-attr-with
  "This function should return a processing function that can process the new value and return the new form state. If the processing function is returned, data will not be set in the `form-state` `:data` map. It should be done manually.

    Processor functions should look like this, and they should return a new version of a form-state:
  
    ```
    (fn [app-db form-props form-state path value]
      form-state)
    ```"
  form-type)
(defmulti format-attr-with
  "This function should return a formatting function that can be used to format the value if applicable.
     
     Formatting functions should look like this:

    ```clojure
    (def format-percentage
      ^{:format-chars #{\"%\"}}
      (fn [value old-value]
        value))
    ```
    
    Formatting funtion should have a `format-chars` meta-data entry, which will be used to correctly position the cursor after formatting. Formatting function should be able to take in the formatted data, extract the value and format the data again. It should also handle corner cases like `nil` or empty string.
    "
  form-type)
(defmulti on-submit-error
  "This function will be called if the `submit-data` function throws or rejects the returned promise. It should return a pipeline sideffect or a pipeline."
  form-type)
(defmulti on-submit-success
  "This function will be called if the `submit-data` function returns a value or resolves a returned promise. It should return a pipeline sideffect or a pipeline."
  form-type)
(defmulti on-update-error
  "This function will be called if the `update-data` function throws or rejects the returned promise. It should return a new form data state."
  form-type)
(defmulti on-update-success
  "This function will be called if the `update-data` function returns a value or resolves a returned promise. It should return a new form data state."
  form-type)
(defmulti validate form-type)

(defmethod get-data :default [this app-db form-props] {})
(defmethod submit-data :default [this app-db form-props data] data)
(defmethod update-data :default [this app-db form-props data] data)
(defmethod process-in :default [this app-db form-props data] data)
(defmethod process-out :default [this app-db form-props data] data)
(defmethod process-attr-with :default [this path])
(defmethod format-attr-with :default [this path])
(defmethod on-submit-error :default [this app-db form-props data error])
(defmethod on-submit-success :default [this app-db form-props data])
(defmethod on-update-error :default [this app-db form-props data error] data)
(defmethod on-update-success :default [this app-db form-props data new-data] new-data)
(defmethod validate :default [this data]
  (let [validator (:validator this)]
    (if validator
      (validator data)
      {})))
