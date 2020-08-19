(ns app.ui.pages.article
  (:require [keechma.next.helix.core :refer
             [with-keechma use-sub use-meta-sub dispatch call]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [keechma.next.controllers.pipelines :refer [throw-promise!]]
            [keechma.next.controllers.router :as router]
            [app.util :refer [format-date render-markdown]]
            [app.ui.components.comments :refer [Comments]]
            [app.ui.components.follow-button :refer [FollowButton]]
            [app.ui.components.favorite-button :refer [FavoriteButton]]
            [app.ui.components.delete-article-button :refer [DeleteButton]]
            [app.ui.components.edit-article-button :refer [EditArticleButton]]
            [app.ui.components.edit-profile-button :refer [EditProfileButton]]
            [app.ui.components.comment-form :refer [CommentForm]]))

(defnc
  ArticleMeta
  [{:keys [article], :as props}]
  (let [author (:author article)
        current-user (use-sub props :current-user)
        is-current-user-author (= author current-user)
        author-profile-url (router/get-url props
                                           :router
                                           {:page "profile",
                                            :user (:username author)})]
    (d/div {:class "article-meta"}
           (d/a {:href author-profile-url} (d/img {:src (:image author)}))
           (d/div {:class "info"}
                  (d/a {:class "author", :href author-profile-url}
                       (:username author))
                  (d/span {:class "date"} (format-date (:createdAt article))))
           (if is-current-user-author
             (<> ($ EditArticleButton {:article article})
                 " "
                 ($ DeleteButton {:article article}))
             (<> ($ FollowButton {:user author})
                 " "
                 ($ FavoriteButton {:article article}))))))

(defnc Banner
       [{:keys [article], :as props}]
       (d/div {:class "banner"}
              (d/div {:class "container"}
                     (d/h1 (:title article))
                     ($ ArticleMeta {& props}))))

(defnc Tags
       [{:keys [article], :as props}]
       (d/ul {:class "tag-list"}
             (map (fn [{:keys [tag]}]
                    (d/li {:key tag, :class "tag-default tag-pill tag-outline"}
                          (d/a {:href (router/get-url props
                                                      :router
                                                      {:page "home", :tag tag})}
                               tag)))
               (:tagList article))))

(defnc
  ArticleRenderer
  [props]
  (throw-promise! (use-meta-sub props :article) :keechma.on/start)
  (let [article (use-sub props :article)
        role (use-sub props :role)]
    (d/div
      {:class "article-page"}
      ($ Banner {:article article, & props})
      (d/div
        {:class "container page"}
        (d/div
          {:class "row article-content"}
          (d/div {:class "col-md-12"}
                 (d/div {:dangerouslySetInnerHTML
                           #js {:__html (render-markdown (:body article))}})
                 ($ Tags {:article article, & props})))
        (d/hr)
        (d/div {:class "article-actions"}
               ($ ArticleMeta {:article article, & props}))
        (d/div
          {:class "row"}
          (d/div
            {:class "col-xs-12 col-md-8 offset-md-2"}
            (if (= :guest role)
              (d/p (d/a {:href (router/get-url props :router {:page "login"})}
                        "Sign in")
                   " or "
                   (d/a {:href
                           (router/get-url props :router {:page "register"})}
                        "sign up")
                   " to add comments on this article")
              ($ CommentForm {:article article}))
            ($ Comments)))))))

(def Article (with-keechma ArticleRenderer))