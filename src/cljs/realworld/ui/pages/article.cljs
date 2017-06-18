(ns realworld.ui.pages.article
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [realworld.util :refer [format-date render-markdown]]))

(defn render-article-meta [ctx article]
  (let [author ((:author article))]
    [:div.article-meta
     [:a {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
      [:img {:src (:image author)}]]
     [:div.info
      [:a.author
       {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
       (:username author)]
      [:span.date (format-date (:createdAt article))]]
     [:button.btn.btn-sm.btn-outline-secondary
      [:i.ion-plus-round]
      " Follow " (:username author)]
     " "
     [:button.btn.btn-sm.btn-outline-primary
      [:i.ion-heart]
      " Favorite Post (" (:favoritesCount article) ")"]]))

(defn render-banner [ctx article]
  [:div.banner>div.container
   [:h1 (:title article)]
   [render-article-meta ctx article]])

(defn render-tags [ctx article]
  [:ul.tag-list
   (doall (map (fn [t]
                 (let [tag (:tag t)]
                   ^{:key tag} [:li.tag-default.tag-pill.tag-outline
                                [:a {:href (ui/url ctx {:page "home" :tag tag})} tag]]))
               ((:tagList article))))])

(defn render [ctx]
  (let [article (sub> ctx :current-article)]
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
         [(ui/component ctx :comments)]]]])))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-article]
                   :component-deps [:comments]}))
