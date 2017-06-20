(ns realworld.forms.comment
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [hodgepodge.core :refer [set-item local-storage]]
            [realworld.edb :refer [prepend-collection get-named-item]]
            [realworld.api :as api]))

(def validator (v/validator {:body [[:not-empty validators/not-empty?]]}))

(defrecord CommentForm [validator]
  forms-core/IForm
  (submit-data [_ app-db _ data]
    (let [current-article (get-named-item app-db :article :current)
          slug (:slug current-article)
          jwt (get-in app-db [:kv :jwt])]
      (api/comment-create jwt slug data)))
  (on-submit-success [this app-db form-id comment]
    (pipeline! [value app-db]
      (pp/send-command! [forms-core/id-key :mount-form] [:comment :form])
      (pp/commit! (prepend-collection app-db :comment :list [comment])))))

(defn constructor []
  (->CommentForm validator))
