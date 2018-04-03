(ns realworld.core
  (:require [reagent.core :as reagent]
            [keechma.app-state :as app-state]
            [realworld.controllers :refer [controllers]]
            [realworld.ui :refer [ui]]
            [realworld.subscriptions :refer [subscriptions]]
            [keechma.toolbox.dataloader.app :as dataloader]
            [realworld.datasources :refer [datasources]]
            [realworld.edb :refer [edb-schema]]
            [realworld.forms :as realworld-forms]
            [keechma.toolbox.forms.app :as forms]))

(def app-definition
  (-> {:components    ui
       :controllers   controllers 
       :subscriptions subscriptions
       :routes        [["" {:page "home"}]
                       ":page"
                       ":page/:subpage"
                       ":page/:subpage/:detail"]
       :html-element  (.getElementById js/document "app")}
      (dataloader/install datasources edb-schema)
      (forms/install realworld-forms/forms realworld-forms/forms-automount-fns)))

(defonce running-app (clojure.core/atom nil))

(defn start-app! []
  (reset! running-app (app-state/start! app-definition)))

(defn dev-setup []
  (when ^boolean js/goog.DEBUG
    (enable-console-print!)
    (println "dev mode")))

(defn reload []
  (let [current @running-app]
    (if current
      (app-state/stop! current start-app!)
      (start-app!))))

(defn ^:export main []
  (dev-setup)
  (start-app!))
