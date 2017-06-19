(ns realworld.ui.pages.home
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.util :refer [class-names]]))

(defn render-tabs [ctx]
  (let [current-route (route> ctx)
        current-tab (:subpage current-route)
        current-tag (when (= "tag" current-tab) (:detail current-route))
        current-user (sub> ctx :current-user)]
    [:ul.nav.nav-pills.outline-active
     (when current-user
       [:li.nav-item
        [:a.nav-link
         {:href (ui/url ctx {:page "home" :subpage "personal"})
          :class (class-names {:active (= "personal" current-tab)})}
         "Your Feed"]])
     [:li.nav-item
      [:a.nav-link
       {:href (ui/url ctx {:page "home"})
        :class (class-names {:active (and (nil? current-tab) (not current-tag))})}
       "Global Feed"]]
     (when current-tag
       [:li.nav-item
        [:a.nav-link.active {:href (ui/url ctx {:page "home" :tag current-tag})} [:i.ion-pound] " " current-tag]])]))

(defn render-taglist [ctx]
  (let [tags (sub> ctx :tags)
        current-route (route> ctx)]
    [:div.tag-list
     (doall (map (fn [t]
                   (let [tag (:tag t)
                         url (ui/url ctx {:page "home" :subpage "tag" :detail tag})]
                     [:a.tag-pill.tag-default {:href url :key tag} tag])) tags))]))

(defn render [ctx]
  [:div.home-page
   [:div.banner>div.container
    [:h1.logo-font "conduit"]
    [:p "A place to share your knowledge."]]
   [:div.container.page>div.row
    [:div.col-md-9 
     [render-tabs ctx]
     [(ui/component ctx :articles)]
     ]
    [:div.col-md-3>div.sidebar
     [:p "Popular Tags"]
     [render-taglist ctx]]]])

(def component
  (ui/constructor {:renderer render
                   :component-deps [:articles]
                   :subscription-deps [:tags :current-user]}))
