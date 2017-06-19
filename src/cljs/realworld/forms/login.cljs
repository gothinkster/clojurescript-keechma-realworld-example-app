(ns realworld.forms.login
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [promesa.core :as p]
            [keechma.toolbox.pipeline.core :as pp]
            [keechma.toolbox.forms.core :as forms-core]
            [hodgepodge.core :refer [set-item local-storage]]
            [keechma.toolbox.dataloader.core :as dataloader]
            [keechma.toolbox.ajax :refer [POST]]
            [realworld.datasources :refer [api-endpoint]]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [insert-named-item]]))

(def validator (v/validator {:email [[:not-empty validators/not-empty?]
                                     [:email validators/email?]]
                             :password [[:not-empty validators/not-empty?]]}))

(defrecord LoginForm [validator]
  forms-core/IForm
  (submit-data [_ app-db _ data]
    (->> (POST (str api-endpoint "/users/login")
               {:params {:user data}
                :response-format :json
                :keywords? true
                :format :json})
         (p/error (fn [error]
                    (println error)
                    (throw (ex-info "Errors" error))))))
  (on-submit-success [this app-db form-id data]
    (let [user (:user data)
          jwt (:token user)]
      (pipeline! [value app-db]
        (set-item local-storage "conduit-jwt-token" jwt)
        (pp/commit! (-> app-db
                        (assoc-in [:kv :jwt] jwt)
                        (insert-named-item :user :current user)))
        (pp/redirect! {:page "home"})))))

(defn constructor []
  (->LoginForm validator))
