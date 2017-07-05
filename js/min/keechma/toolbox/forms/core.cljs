(ns keechma.toolbox.forms.core
  (:require [forms.dirty :as keechma-forms-dirty]))

(def id-key ::forms)

(defprotocol IForm
  (get-data [this app-db form-props]
    "This function should return either the initial form data or a promise that will resolve to the inital form data.")
  (submit-data [this app-db form-props data]
    "This function should return either the saved form data or a promise that will resolve to the saved form data")
  (update-data [this app-db form-props data]
    "This function should return either the updated form data or a promise that will resolve to the updated form data")
  (process-in [this app-db form-props data]
    "This function should return the processed incoming data (returned from the `get-data`) function. Use it to prepare the incoming data for the form.")
  (process-out [this app-db form-props data]
    "This function should return the processed outgoing data that will be passed to the `submit-data` function.")
  (process-attr-with [this path]
    "This function should return a processing function that can process the new value and return the new form state. If the processing function is returned, data will not be set in the `form-state` `:data` map. It should be done manually.

    Processor functions should look like this, and they should return a new version of a form-state:

    ```
    (fn [app-db form-props form-state path value]
      form-state)
    ```")
  (format-attr-with [this path]
    "This function should return a formatting function that can be used to format the value if applicable.
     
     Formatting functions should look like this:

    ```clojure
    (def format-percentage
      ^{:format-chars #{\"%\"}}
      (fn [value old-value]
        value))
    ```
    
    Formatting funtion should have a `format-chars` meta-data entry, which will be used to correctly position the cursor after formatting. Formatting function should be able to take in the formatted data, extract the value and format the data again. It should also handle corner cases like `nil` or empty string.
    ")
  (on-submit-error [this app-db form-props data error]
    "This function will be called if the `submit-data` function throws or rejects the returned promise. It should return a pipeline sideffect or a pipeline.")
  (on-submit-success [this app-db form-props data]
    "This function will be called if the `submit-data` function returns a value or resolves a returned promise. It should return a pipeline sideffect or a pipeline.")

  (on-update-error [this app-db form-props data error]
    "This function will be called if the `update-data` function throws or rejects the returned promise. It should return a new form data state.")
  (on-update-success [this app-db form-props data new-data]
    "This function will be called if the `update-data` function returns a value or resolves a returned promise. It should return a new form data state.")
  (validate [this data]))

(extend-type default
  IForm
  (get-data [_ _ _] {})
  (submit-data [_ _ _ data] data)
  (update-data [_ _ _ data] data)
  (process-in [_ _ _ data] data)
  (process-out [_ _ _ data] data)
  (process-attr-with [_ _])
  (format-attr-with [_ _])
  (on-submit-error [_ _ _ _ _])
  (on-submit-success [_ _ _ _])
  (on-update-error [_ _ _ data _] data)
  (on-update-success [_ _ _ data new-data] new-data)

  (validate [this data]
    (let [validator (:validator this)]
      (if validator
        (validator data)
        {}))))
