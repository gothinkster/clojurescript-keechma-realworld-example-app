(ns app.controllers.profile-user
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.next.controllers.entitydb :as edb]
            [keechma.next.controllers.dataloader :as dl]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [app.api :as api]
            [app.settings :as settings]
            [keechma.next.protocols :as pt]))

(derive :profile-user ::pipelines/controller)

(def load-user
  (-> (pipeline! [value {:keys [state* deps-state*], :as ctrl}]
                 (let [{:keys [router jwt]} @deps-state*]
                   {:user (:user router), :jwt jwt})
                 (dl/req ctrl :dataloader api/user-get value)
                 (edb/insert-named! ctrl :entitydb :user :user/profile value))
      (pp/set-queue :load-user)
      pp/restartable))

(def pipelines
  {:keechma.on/start (pipeline!
                       [value {:keys [deps-state*]}]
                       (let [{:keys [entitydb router]} @deps-state*
                             username (:user router)
                             user (edb/get-entity entitydb :user username)]
                         (if user
                           (pipeline! [value ctrl]
                                      (edb/insert-named! ctrl
                                                         :entitydb :user
                                                         :user/profile user)
                                      (pp/detached load-user))
                           load-user))),
   :keechma.on/stop
     (pipeline! [_ ctrl] (edb/remove-named! ctrl :entitydb :user/profile))})

(defmethod ctrl/prep :profile-user [ctrl] (pipelines/register ctrl pipelines))

(defmethod ctrl/derive-state :profile-user
  [_ state {:keys [entitydb]}]
  (edb/get-named entitydb :user/profile [(edb/include :author)]))