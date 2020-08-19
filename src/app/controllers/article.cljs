(ns app.controllers.article
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.next.controllers.entitydb :as edb]
            [keechma.next.controllers.dataloader :as dl]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [app.api :as api]
            [app.settings :as settings]))

(derive :article ::pipelines/controller)

(def load-article
  (-> (pipeline!
        [value {:keys [state* deps-state*], :as ctrl}]
        (let [{:keys [router jwt]} @deps-state*]
          {:article-slug (:slug router), :jwt jwt})
        (dl/req ctrl :dataloader api/article-get value)
        (edb/insert-named! ctrl :entitydb :article :article/current value))
      (pp/set-queue :load-article)
      pp/restartable))

(def pipelines
  {:keechma.on/start
     (pipeline! [value {:keys [deps-state*]}]
                (let [{:keys [entitydb router]} @deps-state*
                      article-slug (:slug router)
                      article (edb/get-entity entitydb :article article-slug)]
                  (if article
                    (pipeline! [value ctrl]
                               (edb/insert-named! ctrl
                                                  :entitydb :article
                                                  :article/current article)
                               (pp/detached load-article))
                    load-article))),
   :keechma.on/stop
     (pipeline! [_ ctrl] (edb/remove-named! ctrl :entitydb :article/current))})

(defmethod ctrl/prep :article [ctrl] (pipelines/register ctrl pipelines))

(defmethod ctrl/derive-state :article
  [_ state {:keys [entitydb]}]
  (edb/get-named entitydb :article/current [(edb/include :author)]))