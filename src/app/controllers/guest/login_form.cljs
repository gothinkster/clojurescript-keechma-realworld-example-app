(ns app.controllers.guest.login-form
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [app.api :as api]
            [promesa.core :as p]
            [keechma.next.controllers.form :as form]
            [app.validators :as v]
            [promesa.core :as p]
            [keechma.next.controllers.router :as router]))

(derive :guest/login-form ::pipelines/controller)

(def pipelines
  {:keechma.form/submit-data
     (pipeline!
       [value ctrl]
       (api/login value)
       (ctrl/broadcast ctrl :guest/login value)
       (router/redirect! ctrl :router {:page "home", :subpage "personal"}))})

(defmethod ctrl/prep :guest/login-form
  [ctrl]
  (pipelines/register ctrl
                      (form/wrap pipelines
                                 (v/to-validator {:email [:email :not-empty],
                                                  :password [:not-empty
                                                             :ok-password]}))))
