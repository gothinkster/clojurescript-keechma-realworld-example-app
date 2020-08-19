(ns app.controllers.guest.user-actions
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.pipelines.core :refer-macros [pipeline!]]
            [keechma.next.controllers.router :as router]))

(derive :guest/user-actions ::pipelines/controller)

(def redirect-to-register
  (pipeline! [_ {:keys [], :as ctrl}]
             (router/redirect! ctrl :router {:page "register"})))

(def pipelines
  {:toggle-favorite redirect-to-register, :toggle-follow redirect-to-register})

(defmethod ctrl/prep :guest/user-actions
  [ctrl]
  (pipelines/register ctrl pipelines))
