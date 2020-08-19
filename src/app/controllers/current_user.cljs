(ns app.controllers.current-user
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.next.controllers.entitydb :as edb]
            [keechma.next.controllers.dataloader :as dl]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [app.api :as api]
            [app.settings :as settings]
            [keechma.next.protocols :as pt]))

(derive :current-user ::pipelines/controller)

(def load-user
  (-> (pipeline!
        [value {:keys [deps-state* meta-state*], :as ctrl}]
        (let [jwt (:jwt @deps-state*)]
          (when (and jwt (not= (:jwt @meta-state*) jwt))
            (pipeline!
              [value {:keys [meta-state*], :as ctrl}]
              (pp/swap! meta-state* assoc :jwt jwt)
              (dl/req ctrl :dataloader api/current-user-get {:jwt jwt})
              (edb/insert-named! ctrl :entitydb :user :user/current value)))))
      pp/use-existing
      pp/restartable))

(def pipelines
  {:keechma.on/start load-user,
   :keechma.on/deps-change
     (pipeline! [value ctrl]
                (when (contains? value :jwt)
                  (if (:jwt value)
                    load-user
                    (edb/remove-named! ctrl :entitydb :user/current)))),
   :guest/login (pipeline!
                  [value {:keys [meta-state*], :as ctrl}]
                  (pp/swap! meta-state* assoc :jwt (:token value))
                  (edb/insert-named! ctrl :entitydb :user :user/current value)),
   :keechma.on/stop
     (pipeline! [_ ctrl] (edb/remove-named! ctrl :entitydb :user/current))})

(defmethod ctrl/prep :current-user [ctrl] (pipelines/register ctrl pipelines))

(defmethod ctrl/derive-state :current-user
  [_ state {:keys [entitydb]}]
  (edb/get-named entitydb :user/current))