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
(defonce root* (atom nil))

#_(defn render
    []
    (rdom/render ($ react/StrictMode
                    ($ KeechmaRoot {:keechma/app app} ($ Main)))
                 (js/document.getElementById "app")))

#_(defn ^:dev/after-load reload
    "Render the toplevel component for this app."
    []
    (rdom/unmountComponentAtNode (js/document.getElementById "app"))
    (render))

(defn render-app
  [root app-instance]
  (.render root
           ($ react/StrictMode
              ($ KeechmaRoot {:keechma/app app-instance} ($ Main)))))

(defn ^:dev/after-load render
  []
  (when-let [app-instance @app-instance*]
    (when-let [root @root*] (render-app root nil))
    (keechma/stop! app-instance))
  #_(when-let [root @root*] (.unmount root))
  (let [root (or @root*
                 (rdom/unstable_createRoot (js/document.getElementById "app")))
        app-instance (keechma/start! app)]
    (reset! root* root)
    (reset! app-instance* app-instance)
    (render-app root app-instance)))

(defn ^:export main "Run application startup logic." [] (render))