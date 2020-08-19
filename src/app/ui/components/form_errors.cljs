(ns app.ui.components.form-errors
  (:require [keechma.next.helix.core :refer
             [with-keechma use-sub use-meta-sub dispatch call]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.dom :as d]
            [clojure.string :as str]))

(defn get-errors
  [controller-meta]
  (when-let [submit-errors (:submit-errors controller-meta)]
    (get-in (ex-data submit-errors) [:value :response :errors])))

(defnc FormErrorsRenderer
       [{:keys [controller], :as props}]
       (let [errors (use-meta-sub props controller get-errors)]
         (when (seq errors)
           (d/ul {:class "error-messages"}
                 (map (fn [[k v]]
                        (d/li {:key k} (str (name k) " " (str/join ", " v))))
                   errors)))))

(def FormErrors (with-keechma FormErrorsRenderer))