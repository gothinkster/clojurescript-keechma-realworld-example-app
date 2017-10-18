(ns keechma.toolbox.forms.mount-controller
  (:require [keechma.controller :as controller]
            [keechma.toolbox.forms.core :refer [id-key]]
            [cljs.core.async :refer (<! put!)]
            [clojure.set :as set])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defrecord Controller [forms-params])

(defn forms-for-route [route forms-params]
  (map (fn [[form params-fn]]
         (when-let [id (params-fn route)]
           [form id]))
       forms-params))

(defn mount-forms [controller route mounted-forms]
  (let [forms-params (:forms-params controller)
        should-be-mounted-forms (set (remove nil? (forms-for-route route forms-params)))
        forms-to-unmount (set/difference mounted-forms should-be-mounted-forms)
        forms-to-mount (set/difference should-be-mounted-forms mounted-forms)]
    
    (doseq [f forms-to-unmount]
      (controller/send-command controller [id-key :unmount-form] f))
    (doseq [f forms-to-mount]
      (controller/send-command controller [id-key :mount-form] f))))

(defn get-mounted-forms [app-db]
  (set (get-in app-db [:kv id-key :order])))

(defmethod controller/params Controller [this route]
  (:data route))
(defmethod controller/start Controller [this params app-db]
  (controller/execute this :mount-forms params)
  app-db)
(defmethod controller/handler Controller [this app-db-atom in-chan out-chan]
  (go-loop []
    (let [[command args] (<! in-chan)]
      (case command
        :mount-forms (mount-forms this args (get-mounted-forms @app-db-atom))
        :route-changed (mount-forms this (:data args) (get-mounted-forms @app-db-atom))
        nil)
      (when command
        (recur)))))

(defn constructor [form-params]
  (->Controller form-params))

(defn register
  ([form-params] (register {} form-params))
  ([controllers form-params]
   (assoc controllers ::id (constructor form-params))))
