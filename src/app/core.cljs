(ns app.core
  (:require [keechma.next.helix.core :refer [KeechmaRoot]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <>]]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.app :refer [app]]
            [app.ui.main :refer [Main]]
            [keechma.next.core :as keechma]))

(defonce app-instance* (atom nil))

(defn render
  []
  (when-let [app-instance @app-instance*] (keechma/stop! app-instance))
  (let [app-instance (keechma/start! app)]
    (reset! app-instance* app-instance)
    (rdom/render ($ react/StrictMode
                    ($ KeechmaRoot {:keechma/app app-instance} ($ Main)))
                 (js/document.getElementById "app"))))

(defn ^:dev/after-load reload
  "Render the toplevel component for this app."
  []
  (rdom/unmountComponentAtNode (js/document.getElementById "app"))
  (render))

(defn ^:export main "Run application startup logic." [] (render))