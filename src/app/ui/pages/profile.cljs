(ns app.ui.pages.profile
  (:require [keechma.next.helix.core :refer
             [with-keechma use-sub use-meta-sub dispatch call]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [keechma.next.controllers.pipelines :refer [throw-promise!]]
            [keechma.next.controllers.router :as router]
            [app.ui.components.articles :refer [Articles]]
            [app.ui.components.follow-button :refer [FollowButton]]))

(defnc
  Tabs
  [props]
  (let [{:keys [user detail]} (use-sub props :router)]
    (d/div
      {:class "articles-toggle"}
      (d/ul
        {:class "nav nav-pills outline-active"}
        (d/li {:class "nav-item"}
              (d/a {:class ["nav-link" (when (= "author" detail) "active")],
                    :href (router/get-url
                            props
                            :router
                            {:page "profile", :user user, :detail "author"})}
                   "My Articles"))
        (d/li {:class "nav-item"}
              (d/a {:class ["nav-link" (when (= "favorites" detail) "active")],
                    :href (router/get-url
                            props
                            :router
                            {:page "profile", :user user, :detail "favorites"})}
                   "Favorited articles"))))))

(defnc
  ProfileRenderer
  [props]
  (throw-promise! (use-meta-sub props :profile-user) :keechma.on/start)
  (let [user (use-sub props :profile-user)
        current-user (use-sub props :current-user)]
    (d/div
      {:class "profile-page"}
      (d/div
        {:class "user-info"}
        (d/div {:class "container"}
               (d/div {:class "row"}
                      (d/div {:class "col-xs-12 col-md-10 offset-md-1"}
                             (d/img {:class "user-img", :src (:image user)})
                             (d/h4 (:username user))
                             (d/p (:bio user))
                             (when (not= user current-user)
                               (d/div {:class "pull-xs-right"}
                                      ($ FollowButton {:user user})))))))
      (d/div {:class "container"}
             (d/div {:class "row"}
                    (d/div {:class "col-xs-12 col-md-10 offset-md-1"}
                           ($ Tabs {& props})
                           ($ Articles)))))))

(def Profile (with-keechma ProfileRenderer))