(ns realworld.forms.comment
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [promesa.core :as p]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.forms.core :as forms-core]
            [hodgepodge.core :refer [set-item local-storage]]
            [keechma.toolbox.dataloader.core :as dataloader]
            [keechma.toolbox.ajax :refer [POST]]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [prepend-collection get-named-item]]
            [realworld.settings :as settings]))

(def validator (v/validator {:body [[:not-empty validators/not-empty?]]}))

(defrecord CommentForm [validator]
  forms-core/IForm
  (submit-data [_ app-db _ data]
    (let [current-article (get-named-item app-db :article :current)
          slug (:slug current-article)
          jwt (get-in app-db [:kv :jwt])]
      (POST (str settings/api-endpoint "/articles/" slug "/comments")
          {:params {:comment data}
           :response-format :json
           :keywords? true
           :format :json
           :headers {:authorization (str "Token " jwt)}})))
  (on-submit-success [this app-db form-id data]
    (let [comment (:comment data)]
      (pipeline! [value app-db]
        (pp/send-command! [forms-core/id-key :mount-form] [:comment :form])
        (pp/commit! (prepend-collection app-db :comment :list [comment]))))))

(defn constructor []
  (->CommentForm validator))
