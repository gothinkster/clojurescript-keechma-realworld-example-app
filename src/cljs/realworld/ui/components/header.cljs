(ns realworld.ui.components.header
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route> sub>]]
            [keechma.toolbox.util :refer [class-names]]))

(def user-pages
  [{:route {:page "home"}
    :title "Home"}
   {:route {:page "editor"}
    :icon "ion-compose"
    :title "New Post"}
   {:route {:page "settings"}
    :icon "ion-gear-a"
    :title "Settings"}])

(def anon-pages
  [{:route {:page "home"}
    :title "Home"}
   {:route {:page "login"}
    :title "Sign in"}
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
  (let [current-user-meta (sub> ctx :current-user-meta)
        current-user (sub> ctx :current-user)
        pages (when (= :completed (:status current-user-meta))
                (if current-user
                  (conj user-pages {:route {:page "profile" :subpage (:username current-user)}
                                    :title (:username current-user)})
                  anon-pages))]
    [:ul.nav.navbar-nav.pull-xs-right
     (doall (map #(render-nav-item ctx %) pages))]))

(defn render [ctx]
  (let [current-user (sub> ctx :current-user)
        home-route (if current-user {:page "home" :subpage "personal"} {:page "home"})]
    [:nav.navbar.navbar-light
     [:div.container
      [:a.navbar-brand {:href (ui/url ctx home-route)} "conduit"]
      [render-nav ctx]]]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-user :current-user-meta]}))
