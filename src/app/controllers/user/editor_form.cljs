(ns app.controllers.user.editor-form
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [app.api :as api]
            [promesa.core :as p]
            [keechma.next.controllers.form :as form]
            [app.validators :as v]
            [promesa.core :as p]
            [clojure.string :as str]
            [keechma.next.controllers.entitydb :as edb]
            [keechma.next.controllers.dataloader :as dl]
            [keechma.next.controllers.router :as router]))

(derive :user/editor-form ::pipelines/controller)

(defn process-tag-list-out
  [value]
  (let [tag-list (map str/trim (str/split (:tags value) #","))]
    (-> value
        (dissoc :tags)
        (assoc :tagList tag-list))))

(defn process-tag-list-in
  [value]
  (let [tags (str/join ", " (map :tag (:tagList value)))]
    (assoc value :tags tags)))

(defn store-article
  [article jwt]
  (let [slug (:slug article)
        new? (not (boolean slug))]
    (if new?
      (api/article-create {:jwt jwt, :article (process-tag-list-out article)})
      (api/article-update {:jwt jwt,
                           :article-slug slug,
                           :article (process-tag-list-out article)}))))

(def pipelines
  {:keechma.form/get-data
     (pipeline!
       [value {:keys [deps-state*], :as ctrl}]
       (let [slug (:keechma.controller/params ctrl)
             {:keys [jwt article router]} @deps-state*]
         (pipeline! [value ctrl]
                    (if (= :new slug)
                      {}
                      (or article
                          (dl/req ctrl
                                  :dataloader
                                  api/article-get
                                  {:article-slug (:slug router), :jwt jwt})))
                    (process-tag-list-in value)))),
   :keechma.form/submit-data
     (pipeline!
       [value {:keys [meta-state* deps-state*], :as ctrl}]
       (pp/swap! meta-state* dissoc :submit-errors)
       (store-article value (:jwt @deps-state*))
       (edb/insert-named! ctrl :entitydb :article :article/current value)
       (router/redirect! ctrl :router {:page "article", :subpage (:slug value)})
       (rescue! [error] (pp/swap! meta-state* assoc :submit-errors error)))})

(defmethod ctrl/prep :user/editor-form
  [ctrl]
  (pipelines/register ctrl
                      (form/wrap pipelines
                                 (v/to-validator {:title [:not-empty],
                                                  :description [:not-empty],
                                                  :body [:not-empty]}))))
