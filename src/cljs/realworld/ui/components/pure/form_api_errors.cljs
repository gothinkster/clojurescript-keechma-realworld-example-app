(ns realworld.ui.components.pure.form-api-errors
  (:require [clojure.string :as str]))

(defn render [form-state]
  (let [state (:state form-state)]
    (when (= :submit-failed (:type state))
      (let [cause (.-data (:cause state))
            errors (get-in cause [:response :errors])]
        [:ul.error-messages
         (doall (map (fn [[k v]]
                       [:li {:key k}
                        (str (name k) " " (str/join ", " v))]) errors))]))))
