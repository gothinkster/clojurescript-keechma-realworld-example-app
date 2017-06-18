(ns realworld.ui.components.comments
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub>]]
            [realworld.util :refer [format-date]]))

(defn render-comment [ctx c]
  (let [author ((:author c))]
    [:div.card
     [:div.card-block>p.card-text (:body c)]
     [:div.card-footer
      [:a.comment-author
       {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
       [:img.comment-author-img {:src (:image author)}]]
      " "
      [:a
       {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
       (:username author)] 
      [:span.date-posted (format-date (:createdAt c))]]]))

(defn render [ctx]
  (let [comments (sub> ctx :current-article-comments)]
    [:div
     (doall (map (fn [c] ^{:key (:id c)} [render-comment ctx c]) comments))]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-article-comments]}))
