(ns realworld.forms.editor
  (:require [keechma.toolbox.forms.core :as forms-core]
            [forms.validator :as v]
            [realworld.forms.validators :as validators]
            [promesa.core :as p]
            [keechma.toolbox.pipeline.core :as pp]
            [keechma.toolbox.forms.core :as forms-core]
            [keechma.toolbox.dataloader.core :as dataloader]
            [keechma.toolbox.ajax :refer [POST PUT]]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [realworld.edb :refer [insert-named-item]]
            [realworld.settings :as settings]))

(def validator (v/validator {:title [[:not-empty validators/not-empty?]]
                             :description [[:not-empty validators/not-empty?]]
                             :body [[:not-empty validators/not-empty?]]}))

(defrecord EditorForm [validator]
  forms-core/IForm
  (submit-data [_ app-db _ data]
    (let [slug (:slug data)
          new? (not (boolean slug))
          jwt (get-in app-db [:kv :jwt])]
      (if new?
        (POST (str settings/api-endpoint "/articles")
              {:params {:article data}
               :response-format :json
               :keywords? true
               :format :json
               :headers {:authorization (str "Token " jwt)}})
        (PUT (str settings/api-endpoint "/articles/" slug)
             {:params {:article (dissoc data :slug)}
              :response-format :json
              :keywords? true
              :format :json
              :headers {:authorization (str "Token " jwt)}}))))
  (on-submit-success [this app-db form-id data]
    (let [article (:article data)
          slug (:slug article)]
      (pipeline! [value app-db]
        (pp/redirect! {:page "article" :subpage slug})))))

(defn constructor []
  (->EditorForm validator))
