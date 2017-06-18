(ns realworld.ui.layout
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]))

(defn render [ctx]
  (let [current-route (route> ctx)
        current-page (:page current-route)]
    [:div
     [(ui/component ctx :header)]
     (case current-page
       "home" [(ui/component ctx :page-home)]
       "profile" [(ui/component ctx :page-profile)]
       [:div "404"])
     [(ui/component ctx :footer)]]))

(def component
  (ui/constructor {:renderer render
                   :component-deps [:header
                                    :footer
                                    :page-home
                                    :page-profile]}))
