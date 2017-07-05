(ns keechma.toolbox.ui
  (:require [keechma.ui-component :as ui]))

(defn sub>
  "Read and defer a component subscription"
  [ctx subscription & args]
  (deref (ui/subscription ctx subscription args)))

(defn <cmd
  "Send a command to the controller"
  [ctx command & args]
  (apply ui/send-command ctx command args))

(defn route>
  "Read current route data. Derefs the route subscription"
  [ctx]
  (:data (deref (ui/current-route ctx))))
