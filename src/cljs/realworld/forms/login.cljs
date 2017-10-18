(ns realworld.forms.login
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [hodgepodge.core :refer [set-item local-storage]]
            [keechma.toolbox.dataloader.core :as dataloader]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [insert-named-item]]
            [realworld.api :as api]
            [realworld.settings :as settings]))

(def validator (v/validator {:email [[:not-empty validators/not-empty?]
                                     [:email validators/email?]]
                             :password [[:not-empty validators/not-empty?]]}))

(defrecord LoginForm [validator])

(defmethod forms-core/submit-data LoginForm [_ app-db _ data]
  (api/login data))

(defmethod forms-core/on-submit-success LoginForm [this app-db form-id user]
  (let [jwt (:token user)]
    (pipeline! [value app-db]
      (set-item local-storage settings/jwt-local-storage-name jwt)
      (pp/commit! (-> app-db
                      (assoc-in [:kv :jwt] jwt)
                      (insert-named-item :user :current user)))
      (pp/redirect! {:page "home" :subpage "personal"}))))

(defn constructor []
  (->LoginForm validator))
