(ns realworld.forms.editor
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [insert-item get-item-by-id]]
            [clojure.string :as str]
            [realworld.api :as api]))

(def validator (v/validator {:title [[:not-empty validators/not-empty?]]
                             :description [[:not-empty validators/not-empty?]]
                             :body [[:not-empty validators/not-empty?]]}))

(defrecord EditorForm [validator]
  forms-core/IForm
  (get-data [_ app-db form-id]
    (let [id (last form-id)]
      (when (not= :new id)
        (pipeline! [value app-db]
          (dataloader-controller/wait-dataloader-pipeline!)
          (get-item-by-id app-db :article id)))))
  (process-in [this app-db form-id data]
    (let [tags (str/join ", " (map :tag ((:tagList data))))]
      (assoc data :tags tags)))
  (process-out [this app-db form-id data]
    (let [tag-list (map str/trim (str/split (:tags data) #","))]
      (-> data
          (dissoc :tags)
          (assoc :tagList tag-list))))
  (submit-data [_ app-db _ data]
    (let [slug (:slug data)
          new? (not (boolean slug))
          jwt (get-in app-db [:kv :jwt])]
      (if new?
        (api/article-create jwt data)
        (api/article-update jwt slug data))))
  (on-submit-success [this app-db form-id article]
    (let [slug (:slug article)]
      (pipeline! [value app-db]
        (pp/commit! (insert-item app-db :article article))
        (pp/redirect! {:page "article" :subpage slug})))))

(defn constructor []
  (->EditorForm validator))
