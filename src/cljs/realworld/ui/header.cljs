(ns realworld.ui.header
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [keechma.toolbox.util :refer [class-names]]))

(def pages
  [{:route {:page "home"}
    :title "Home"}
   {:route {:page "editor"}
    :icon "ion-compose"
    :title "New Post"}
   {:route {:page "settings"}
    :icon "ion-gear-a"
    :title "Settings"}
   {:route {:page "register"}
    :title "Sign up"}])

(defn render-nav-item [ctx {:keys [route title icon]}]
  (let [current-page (:page (route> ctx))]
    [:li.nav-item {:key title}
     [:a.nav-link
      {:href (ui/url ctx route)
       :class (class-names {:active (= current-page (:page route))})}
      (when icon
        [:i {:class icon}])
      (if icon (str " " title) title)]]))

(defn render-nav [ctx]
  [:ul.nav.navbar-nav.pull-xs-right
   (doall (map #(render-nav-item ctx %) pages))])

(defn render [ctx]
  [:nav.navbar.navbar-light
   [:div.container
    [:a.navbar-brand {:href (ui/url ctx {:page "home"})} "conduit"]
    [render-nav ctx]]])

(def component
  (ui/constructor {:renderer render}))
