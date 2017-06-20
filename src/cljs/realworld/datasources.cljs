(ns realworld.datasources
  (:require [keechma.toolbox.ajax :refer [GET]]
            [keechma.toolbox.dataloader.subscriptions :refer [map-loader]]
            [realworld.edb :refer [get-item-by-id]]
            [hodgepodge.core :refer [get-item local-storage]]
            [realworld.settings :as settings]
            [realworld.api :as api]))

(def api-loader
  (map-loader
   (fn [req]
     (when-let [params (:params req)]
       (let [app-db (:app-db req)
             get-from-app-db (or (:get-from-app-db params) (fn [_] nil))]
         (or (get-from-app-db app-db)
             (api/dataloader-req params)))))))

(defn add-articles-tag-param [params {:keys [subpage detail]}]
  (let [tag (when (= "tag" subpage) detail)]
    (if tag
      (assoc params :tag tag)
      params)))

(defn add-articles-pagination-param [params {:keys [p]}]
  (if p
    (let [offset (* (dec (js/parseInt p 10)) settings/articles-per-page)]
      (assoc params :offset offset))
    params))

(defn add-articles-author-param [params {:keys [page subpage detail]}]
  (if (and (= "profile" page) subpage)
    (if (= "favorites" detail)
      (assoc params :favorited subpage)
      (assoc params :author subpage))
    params))

(defn auth-header
  ([jwt] (auth-header {} jwt))
  ([headers jwt]
   (if jwt
     (assoc headers :authorization (str "Token " jwt))
     headers)))

(def ignore-datasource-check :keechma.toolbox.dataloader.core/ignore)

(def jwt-datasource
  {:target [:kv :jwt]
   :loader (map-loader #(get-item local-storage "conduit-jwt-token"))
   :params (fn [prev _ _]
             (when (:data prev) ignore-datasource-check))})

(def current-user-datasource
  {:target [:edb/named-item :user/current]
   :loader api-loader
   :deps [:jwt]
   :processor api/process-user
   :params (fn [prev _ {:keys [jwt]}]
             (when jwt
               (if (:data prev)
                 ignore-datasource-check
                 {:url "/user"
                  :headers (auth-header jwt)})))})

(def articles-datasource
  {:target [:edb/collection :article/list]
   :deps [:jwt]
   :params (fn [_ route {:keys [jwt]}]
             (let [page (:page route)
                   subpage (:subpage route)
                   personal-feed? (and (= "home" page) (= "personal" subpage))]
               (when (or (= "home" page)
                         (= "profile" page))
                 (-> {:url (if personal-feed? "/articles/feed" "/articles")}
                     (assoc :headers (auth-header jwt))
                     (add-articles-author-param route)
                     (add-articles-pagination-param route)
                     (add-articles-tag-param route)))))
   :processor api/process-articles
   :loader api-loader})

(def current-article-datasource
  {:target [:edb/named-item :article/current]
   :deps [:jwt]
   :params (fn [_ {:keys [page subpage]} {:keys [jwt]}]
             (when (and (or (= "editor" page)
                            (= "article" page))
                        subpage)
               {:url (str "/articles/" subpage)
                :headers (auth-header jwt)
                :get-from-app-db (fn [app-db]
                                   (when-let [article (get-item-by-id app-db :article subpage)]
                                     {:article article}))}))
   :processor api/process-article
   :loader api-loader})

(def current-article-comments-datasource
  {:target [:edb/collection :comment/list]
   :params (fn [_ {:keys [page subpage]} _]
             (when (and (= "article" page) subpage)
               {:url (str "/articles/" subpage "/comments")}))
   :loader api-loader
   :processor api/process-comments})

(def profile-user-datasource
  {:target [:edb/named-item :user/profile-user]
   :deps [:jwt]
   :params (fn [_ {:keys [page subpage]} {:keys [jwt]}]
             (when (and (= "profile" page) subpage)
               {:url (str "/profiles/" subpage)
                :headers (auth-header jwt)
                :get-from-app-db (fn [app-db]
                                   (when-let [user (get-item-by-id app-db :user subpage)]
                                     {:profile user}))}))
   :processor api/process-author
   :loader    api-loader})

(def tags-datasource
  {:target [:edb/collection :tag/list]
   :params (fn [_ {:keys [page]} _]
             (when (= "home" page)
               {:url "/tags"}))
   :processor api/process-tags
   :loader api-loader})

(def datasources
  {:jwt                      jwt-datasource
   :current-user             current-user-datasource
   :articles                 articles-datasource
   :current-article          current-article-datasource
   :current-article-comments current-article-comments-datasource
   :profile-user             profile-user-datasource
   :tags                     tags-datasource})
