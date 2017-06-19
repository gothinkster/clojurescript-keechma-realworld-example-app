(ns realworld.ui.components.footer
  (:require [keechma.ui-component :as ui]))

(defn render [ctx]
  [:footer
   [:div.container
    [:a.logo-font {:href (ui/url ctx {:page "home"})} "conduit"]
    [:span.attribution
     "An interactive learning project "
     [:a {:href "https://thinkster.io"} "Thinkster"]
     ". Code & design licensed under MIT."]]])

(def component
  (ui/constructor {:renderer render}))
