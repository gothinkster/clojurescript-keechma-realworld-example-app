(ns realworld.forms.settings
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [hodgepodge.core :refer [set-item local-storage]]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [insert-named-item get-named-item]]
            [realworld.settings :as settings]
            [realworld.api :as api]))

(def validator (v/validator {:image [[:url validators/url?]]
                             :email [[:not-empty validators/not-empty?]
                                     [:email validators/email?]]}))

(defrecord SettingsForm [validator])

(defmethod forms-core/get-data SettingsForm [this app-db form-id]
  (pipeline! [value app-db]
    (dataloader-controller/wait-dataloader-pipeline!)
    (get-named-item app-db :user :current)))

(defmethod forms-core/submit-data SettingsForm [_ app-db _ data]
  (let [user-data (if (seq (:password data)) data (dissoc data :password))
        jwt (get-in app-db [:kv :jwt])]
    (api/user-update jwt user-data)))

(defmethod forms-core/on-submit-success SettingsForm [this app-db form-id user]
  (let [jwt (:token user)]
    (pipeline! [value app-db]
      (set-item local-storage settings/jwt-local-storage-name jwt)
      (pp/commit! (-> app-db
                      (assoc-in [:kv :jwt] jwt)
                      (insert-named-item :user :current user)))
      (pp/redirect! {:page "profile" :subpage (:username user)}))))

(defn constructor []
  (->SettingsForm validator))
