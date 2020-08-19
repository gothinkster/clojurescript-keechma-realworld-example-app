(ns app.controllers.guest.register-form
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [app.api :as api]
            [promesa.core :as p]
            [keechma.next.controllers.form :as form]
            [app.validators :as v]
            [promesa.core :as p]
            [keechma.next.controllers.router :as router]))

(derive :guest/register-form ::pipelines/controller)

(def pipelines
  {:keechma.form/submit-data
     (pipeline!
       [value {:keys [meta-state*], :as ctrl}]
       (pp/swap! meta-state* dissoc :submit-errors)
       (api/register value)
       (ctrl/broadcast ctrl :guest/login value)
       (router/redirect! ctrl :router {:page "home", :subpage "personal"})
       (rescue! [error] (pp/swap! meta-state* assoc :submit-errors error)))})

(defmethod ctrl/prep :guest/register-form
  [ctrl]
  (pipelines/register
    ctrl
    (form/wrap pipelines
               (v/to-validator {:username [:not-empty],
                                :email [:email :not-empty],
                                :password [:not-empty :ok-password]}))))
