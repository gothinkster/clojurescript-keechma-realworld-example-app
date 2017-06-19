(ns realworld.ui.pages.profile
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.util :refer [class-names]]))

(defn render-tabs [ctx]
  (let [current-route (route> ctx)
        favorites? (= "favorites" (:detail current-route))
        user (sub> ctx :profile-user)]
    [:div.articles-toggle>ul.nav.nav-pills.outline-active
     [:li.nav-item
      [:a.nav-link
       {:href (ui/url ctx {:page "profile" :subpage (:username user)})
        :class (class-names {:active (not favorites?)})}
       "My Articles"]]
     [:li.nav-item
      [:a.nav-link
       {:href (ui/url ctx {:page "profile" :subpage (:username user) :detail "favorites"})
        :class (class-names {:active favorites?})}
       "Favorited Articles"]]]))

(defn render [ctx]
  (let [user (sub> ctx :profile-user)]
    [:div.profile-page
     [:div.user-info>div.container>div.row>div.col-xs-12.col-md-10.offset-md-1
      [:img.user-img {:src (:image user)}]
      [:h4 (:username user)]
      [:p (:bio user)]
      [:div.pull-xs-right
       [(ui/component ctx :follow-button) user]]]
     [:div.container>div.row>div.col-xs-12.col-md-10.offset-md-1
      [render-tabs ctx]
      [(ui/component ctx :articles)]]]))

(def component
  (ui/constructor {:renderer render
                   :component-deps [:articles :follow-button]
                   :subscription-deps [:profile-user :current-user]}))
