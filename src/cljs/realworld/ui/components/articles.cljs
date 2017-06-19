(ns realworld.ui.components.articles
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route> sub>]]
            [realworld.util :refer [format-date]]
            [keechma.toolbox.util :refer [class-names]]
            [realworld.settings :as settings]))

(defn render-article [ctx article]
  (let [author ((:author article))
        tag-list ((:tagList article))]
    [:div.article-preview
     [:div.article-meta
      [:a {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
       [:img {:src (:image author)}]]
      [:div.info
       [:a {:href (ui/url ctx {:page "profile" :subpage (:username author)})}
        (:username author)]
       [:span.date (format-date (:createdAt article))]]
      [(ui/component ctx :favorite-button) article]]
     [:a.preview-link
      {:href (ui/url ctx {:page "article" :subpage (:slug article)})}
      [:h1 (:title article)]
      [:p (:description article)]
      [:span "Read more..."]
      (when (seq tag-list)
        [:ul.tag-list
         (doall (map (fn [t] [:li.tag-default.tag-pill.tag-outline {:key (:tag t)} (:tag t)]) tag-list))])]]))

(defn render-pagination [ctx]
  (let [articles-meta (sub> ctx :articles-meta)
        current-route (route> ctx)
        current-page (js/parseInt (or (:p current-route) "1") 10)
        page-count (.ceil js/Math (/ (get-in articles-meta [:meta :count]) settings/articles-per-page))]
    (when (< 1 page-count)
      [:nav>ul.pagination
       (doall (map (fn [p]
                     [:li.page-item
                      {:key p
                       :class (class-names {:active (= p current-page)})}
                      [:a.page-link {:href (ui/url ctx (assoc current-route :p p))} p]])
                   (range 1 (inc page-count))))])))

(defn render [ctx]
  (let [articles (sub> ctx :articles)
        articles-meta (sub> ctx :articles-meta)]
    (if (= :pending (:status articles-meta))
      [:div.article-preview "Loading Articles..."]
      (if (zero? (count articles))
        [:div.article-preview "No articles are here... yet."]
        [:div
         (doall (map (fn [a] ^{:key (:slug a)} [render-article ctx a]) articles))
         [render-pagination ctx]]))))

(def component
  (ui/constructor {:renderer render
                   :component-deps [:favorite-button]
                   :subscription-deps [:articles :articles-meta]}))
