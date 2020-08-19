(ns app.controllers.user.settings-form
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [keechma.next.controllers.form :as form]
            [keechma.next.controllers.entitydb :as edb]
            [keechma.next.controllers.router :as router]
            [app.api :as api]
            [promesa.core :as p]
            [app.validators :as v]
            [promesa.core :as p]))

(derive :user/settings-form ::pipelines/controller)

(def pipelines
  {:keechma.form/get-data (pipeline! [value {:keys [deps-state*], :as ctrl}]
                                     (:current-user @deps-state*)),
   :keechma.form/submit-data
     (pipeline!
       [value {:keys [meta-state* deps-state*], :as ctrl}]
       (pp/swap! meta-state* dissoc :submit-errors)
       (let [jwt (:jwt @deps-state*)
             user-data
               (if (seq (:password value)) value (dissoc value :password))]
         (api/user-update {:user user-data, :jwt jwt}))
       (edb/insert-named! ctrl :entitydb :user :user/current value)
       (router/redirect! ctrl
                         :router
                         {:page "profile", :user (:username value)})
       (rescue! [error] (pp/swap! meta-state* assoc :submit-errors error)))})

(defmethod ctrl/prep :user/settings-form
  [ctrl]
  (pipelines/register ctrl
                      (form/wrap pipelines
                                 (v/to-validator {:email [:email :not-empty],
                                                  :image [:url]}))))
