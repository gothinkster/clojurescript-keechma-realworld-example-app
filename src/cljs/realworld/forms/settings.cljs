(ns realworld.forms.settings
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [promesa.core :as p]
            [keechma.toolbox.forms.core :as forms-core]
            [hodgepodge.core :refer [set-item local-storage]]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [keechma.toolbox.ajax :refer [PUT]]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [insert-named-item get-named-item]]
            [realworld.settings :as settings]))

(def validator (v/validator {:image [[:url validators/url?]]
                             :email [[:not-empty validators/not-empty?]
                                     [:email validators/email?]]}))

(defrecord SettingsForm [validator]
  forms-core/IForm
  (get-data [this app-db form-id]
    (pipeline! [value app-db]
      (dataloader-controller/wait-dataloader-pipeline!)
      (get-named-item app-db :user :current)))
  (submit-data [_ app-db _ data]
    (let [user-data (if (seq (:password data)) data (dissoc data :password))
          jwt (get-in app-db [:kv :jwt])]
      (PUT (str settings/api-endpoint "/user")
            {:params {:user data}
             :response-format :json
             :keywords? true
             :headers {:authorization (str "Token " jwt)}
             :format :json})))
  (on-submit-success [this app-db form-id data]
    (let [user (:user data)
          jwt (:token user)]
      (pipeline! [value app-db]
        (set-item local-storage settings/jwt-local-storage-name jwt)
        (pp/commit! (-> app-db
                        (assoc-in [:kv :jwt] jwt)
                        (insert-named-item :user :current user)))
        (pp/redirect! {:page "profile" :subpage (:username user)})))))

(defn constructor []
  (->SettingsForm validator))
