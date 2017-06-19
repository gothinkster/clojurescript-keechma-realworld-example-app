(ns realworld.controllers.logout
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [realworld.settings :as settings]
            [hodgepodge.core :refer [remove-item local-storage]]
            [realworld.edb :refer [remove-named-item]]))

(def controller
  (pp-controller/constructor
   (fn [{:keys [data]}]
     (when (= "logout" (:page data))
       true))
   {:start (pipeline! [value app-db]
             (remove-item local-storage settings/jwt-local-storage-name)
             (pp/commit! (-> app-db
                             (assoc-in [:kv :jwt] nil)
                             (remove-named-item :user :current)))
             (pp/redirect! {:page "home"}))}))
