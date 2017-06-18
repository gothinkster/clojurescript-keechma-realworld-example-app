(ns realworld.ui.layout
  (:require [keechma.ui-component :as ui]))

(defn render [ctx]
  [:div
   [(ui/component ctx :header)]
   [:div "CONTENT"]
   [(ui/component ctx :footer)]])

(def component
  (ui/constructor {:renderer render
                   :component-deps [:header :footer]}))
