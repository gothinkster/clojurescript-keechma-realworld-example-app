(ns app.controllers.user.comment-form
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

(derive :user/comment-form ::pipelines/controller)

(def pipelines
  {:keechma.form/submit-data
     (pipeline! [value {:keys [deps-state* meta-state*], :as ctrl}]
                (pp/swap! meta-state* dissoc :submit-errors)
                (let [jwt (:jwt @deps-state*)
                      slug (:keechma.controller/params ctrl)]
                  (api/comment-create {:jwt jwt,
                                       :article-slug slug,
                                       :comment (select-keys value [:body])}))
                (ctrl/broadcast ctrl :comment/created value)
                (pp/swap! meta-state* form/mount-form {})
                (rescue! [error]
                         (pp/swap! meta-state* assoc :submit-errors error)))})

(defmethod ctrl/prep :user/comment-form
  [ctrl]
  (pipelines/register ctrl
                      (form/wrap pipelines
                                 (v/to-validator {:body [:not-empty]}))))
