(ns app.ui.components.header
  (:require [keechma.next.helix.core :refer [with-keechma dispatch use-sub]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [keechma.next.controllers.router :as router]))

(def links
  {:user [{:route {:page "home"}, :title "Home"}
          {:route {:page "editor"}, :icon "ion-compose", :title "New Post"}
          {:route {:page "settings"}, :icon "ion-gear-a", :title "Settings"}],
   :guest [{:route {:page "home"}, :title "Home"}
           {:route {:page "login"}, :title "Sign in"}
           {:route {:page "register"}, :title "Sign up"}]})

(defnc NavItem
       [{:keys [link], :as props}]
       (let [{:keys [route title icon]} link
             current-page (:page (use-sub props :router))]
         (d/li {:class "nav-item"}
               (d/a {:class ["nav-link"
                             (when (= current-page (:page route)) "active")],
                     :href (router/get-url props :router route)}
                    (when icon (<> (d/i {:class icon}) " "))
                    title))))

(defnc
  HeaderRenderer
  [props]
  (let [role (use-sub props :role)
        current-user (use-sub props :current-user)
        home-route (if (= :guest role)
                     {:page "home"}
                     {:page "home", :subpage "personal"})]
    (d/nav
      {:class "navbar navbar-light"}
      (d/div {:class "container"}
             (d/a {:class "navbar-brand",
                   :href (router/get-url props :router home-route)}
                  "conduit")
             (d/ul {:class "nav navbar-nav pull-xs-right"}
                   (map (fn [link]
                          ($ NavItem {:key (:title link), :link link, & props}))
                     (get links role))
                   (when current-user
                     (let [username (:username current-user)
                           link {:route {:page "profile", :user username},
                                 :title username}]
                       ($ NavItem {:link link, & props}))))))))

(def Header (with-keechma HeaderRenderer))