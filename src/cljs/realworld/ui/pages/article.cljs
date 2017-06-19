(ns realworld.ui.pages.article
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [realworld.util :refer [format-date render-markdown]]))

(defn render-article-meta [ctx article]
  (let [author ((:author article))
        current-user (sub> ctx :current-user)
        current-user-author? (= author current-user)]
    [:div.article-meta
     [:a {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
      [:img {:src (:image author)}]]
     [:div.info
      [:a.author
       {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
       (:username author)]
      [:span.date (format-date (:createdAt article))]]
     (if current-user-author?
       [:a.btn.btn-outline-secondary.btn-sm
        {:href (ui/url ctx {:page "editor" :subpage (:slug article)})}
        [:i.ion-edit] " Edit Article"]
       [(ui/component ctx :follow-button) author])
     " "
     (if current-user-author?
       [(ui/component ctx :delete-button) article]
       [(ui/component ctx :favorite-button) article :big])]))

(defn render-banner [ctx article]
  [:div.banner>div.container
   [:h1 (:title article)]
   [render-article-meta ctx article]])

(defn render-tags [ctx article]
  [:ul.tag-list
   (doall (map (fn [t]
                 (let [tag (:tag t)]
                   ^{:key tag} [:li.tag-default.tag-pill.tag-outline
                                [:a {:href (ui/url ctx {:page "home" :subpage "tag" :detail tag})} tag]]))
               ((:tagList article))))])

(defn render [ctx]
  (let [article (sub> ctx :current-article)
        current-user (sub> ctx :current-user)]
    (when article
      [:div.article-page
       [render-banner ctx article]
       [:div.container.page
        [:div.row.article-content
         [:div.col-md-12
          [:div
           {:dangerouslySetInnerHTML {:__html (render-markdown (:body article))}}]
          [render-tags ctx article]]]
        [:hr]
        [:div.article-actions
         [render-article-meta ctx article]]
        [:div.row>div.col-xs-12.col-md-8.offset-md-2
         (if current-user
           [(ui/component ctx :comment-form)]
           [:p
            [:a {:href (ui/url ctx {:page "login"})} "Sign in"]
            " or "
            [:a {:href (ui/url ctx {:page "register"})} "sign up"]
            " to add comments on this article."])
         [(ui/component ctx :comments)]]]])))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-article :current-user]
                   :component-deps [:comments
                                    :comment-form
                                    :favorite-button
                                    :follow-button
                                    :delete-button]}))
