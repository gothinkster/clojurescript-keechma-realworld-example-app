(ns app.ui.components.footer
  (:require [keechma.next.helix.core :refer [with-keechma dispatch]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [keechma.next.controllers.router :as router]))

(defnc
  FooterRenderer
  [props]
  (d/footer (d/div {:class "container"}
                   (d/a {:class "logo-font",
                         :href (router/get-url props :router {:page "home"})}
                        "conduit")
                   (d/span {:class "attribution"}
                           "An interactive learning project "
                           (d/a {:href "https://thinkster.io"} "Thinkster")
                           ". Code & design licensed under MIT."))))

(def Footer (with-keechma FooterRenderer))