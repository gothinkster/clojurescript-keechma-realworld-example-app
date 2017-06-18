(ns realworld.datasources
  (:require [keechma.toolbox.ajax :refer [GET]]
            [keechma.toolbox.dataloader.subscriptions :refer [map-loader]]))

(def api-endpoint "https://conduit.productionready.io/api")
(def articles-per-page 20)

(def api-loader
  (map-loader
   (fn [req]
     (when-let [params (:params req)]
       (GET (str api-endpoint (:url params))
            {:params (dissoc params :url)
             :response-format :json
             :keywords? true})))))

(defn tag->entity [tag]
  {:tag tag})

(defn process-articles [data] 
  {:data (map (fn [article]
                (assoc article :tagList (map tag->entity (:tagList article))))
              (:articles data))
   :meta {:count (:articlesCount data)}})

(defn process-tags [data]
  (map tag->entity (:tags data)))

(defn process-author [data]
  (:profile data))


(defn add-articles-pagination-param [params {:keys [tag]}]
  (if tag
    (assoc params :tag tag)
    params))

(defn add-articles-tag-params [params {:keys [list-page]}]
  (if list-page
    (let [offset (* (dec (js/parseInt list-page 10)) articles-per-page)]
     (assoc params :offset offset))
    params))

(defn add-articles-author-params [params {:keys [page subpage detail]}]
  (println "PAGE" page subpage detail)
  (if (and (= "profile" page) subpage)
    (if (= "favorites" detail)
      (assoc params :favorited subpage)
      (assoc params :author subpage))
    params))

(def datasources
  {:articles     {:target    [:edb/collection :article/list]
                  :params    (fn [_ route _]
                               (-> {:url "/articles"}
                                   (add-articles-author-params route)
                                   (add-articles-pagination-param route)
                                   (add-articles-tag-params route)))
                  :processor process-articles
                  :loader    api-loader}
   :profile-user {:target    [:edb/named-item :user/profile-user]
                  :params    (fn [_ {:keys [page subpage]} _]
                               (when (and (= "profile" page) subpage)
                                 {:url (str "/profiles/" subpage)}))
                  :processor process-author
                  :loader    api-loader}
   :tags         {:target    [:edb/collection :tag/list]
                  :params    (fn [_ _ _]
                               {:url "/tags"})
                  :processor process-tags
                  :loader    api-loader}})
