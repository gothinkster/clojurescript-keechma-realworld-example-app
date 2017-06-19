(ns realworld.forms.editor
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [promesa.core :as p]
            [keechma.toolbox.pipeline.core :as pp]
            [keechma.toolbox.forms.core :as forms-core]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [keechma.toolbox.ajax :refer [POST PUT]]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [insert-named-item insert-item get-item-by-id]]
            [realworld.settings :as settings]))

(def validator (v/validator {:title [[:not-empty validators/not-empty?]]
                             :description [[:not-empty validators/not-empty?]]
                             :body [[:not-empty validators/not-empty?]]}))

(defn prepare-req-params [article jwt]
  {:params {:article article}
   :response-format :json
   :keywords? true
   :format :json
   :headers {:authorization (str "Token " jwt)}})

(defrecord EditorForm [validator]
  forms-core/IForm
  (get-data [_ app-db form-id]
    (let [id (last form-id)]
      (when (not= :new id)
        (pipeline! [value app-db]
          (dataloader-controller/wait-dataloader-pipeline!)
          (get-item-by-id app-db :article id)))))
  (submit-data [_ app-db _ data]
    (let [slug (:slug data)
          new? (not (boolean slug))
          jwt (get-in app-db [:kv :jwt])]
      (if new?
        (POST (str settings/api-endpoint "/articles")
              (prepare-req-params data jwt))
        (PUT (str settings/api-endpoint "/articles/" slug)
             (prepare-req-params data jwt)))))
  (on-submit-success [this app-db form-id data]
    (let [article (:article data)
          slug (:slug article)]
      (pipeline! [value app-db]
        (pp/commit! (insert-item app-db :article article))
        (pp/redirect! {:page "article" :subpage slug})))))

(defn constructor []
  (->EditorForm validator))
