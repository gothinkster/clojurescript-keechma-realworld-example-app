(ns app.controllers.jwt
  (:require [keechma.next.controller :as ctrl]
            [hodgepodge.core :refer
             [local-storage get-item set-item remove-item]]
            [app.settings :refer [jwt-ls-name]]))

(derive :jwt :keechma/controller)

(defmethod ctrl/start :jwt [_ _ _] (get-item local-storage jwt-ls-name))

(defmethod ctrl/handle :jwt
  [{:keys [state*]} cmd payload]
  (case cmd
    :set (do (set-item local-storage jwt-ls-name payload)
             (reset! state* payload))
    :clear (do (remove-item local-storage jwt-ls-name) (reset! state* nil))
    :guest/login (let [jwt (:token payload)]
                   (set-item local-storage jwt-ls-name jwt)
                   (reset! state* jwt))
    nil))