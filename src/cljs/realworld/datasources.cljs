(ns realworld.datasources
  (:require [keechma.toolbox.ajax :refer [GET]]
            [keechma.toolbox.dataloader.subscriptions :refer [map-loader]]
            [realworld.edb :refer [get-item-by-id]]
            [hodgepodge.core :refer [get-item local-storage]]
            [realworld.settings :as settings]))

(def api-loader
  (map-loader
   (fn [req]
     (when-let [params (:params req)]
       (let [app-db (:app-db req)
             headers (:headers params)
             get-from-app-db (or (:get-from-app-db params) (fn [_] nil))]
         (or (get-from-app-db app-db)
             (GET (str settings/api-endpoint (:url params))
                  {:params (dissoc params :url :headers)
                   :headers headers
                   :response-format :json
                   :keywords? true})))))))

(defn tag->entity [tag]
  (if (string? tag)
    {:tag tag}
    tag))

(defn process-articles [data] 
  {:data (map (fn [article]
                (assoc article :tagList (map tag->entity (:tagList article))))
              (:articles data))
   :meta {:count (:articlesCount data)}})

(defn process-article [data]
  (let [article (:article data)
        tag-list (:tagList article)] 
    (assoc article :tagList (map tag->entity (if (fn? tag-list) (tag-list) tag-list)))))

(defn process-tags [data]
  (map tag->entity (:tags data)))

(defn process-author [data]
  (:profile data))

(defn process-comments [data]
  (:comments data))

(defn process-user [data]
  (:user data))

(defn add-articles-pagination-param [params {:keys [tag]}]
  (if tag
    (assoc params :tag tag)
    params))

(defn add-articles-tag-params [params {:keys [p]}]
  (if p
    (let [offset (* (dec (js/parseInt p 10)) settings/articles-per-page)]
      (assoc params :offset offset))
    params))

(defn add-articles-author-params [params {:keys [page subpage detail]}]
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

(def ignore-datasource :keechma.toolbox.dataloader.core/ignore)

(def datasources
  {:jwt {:target [:kv :jwt]
         :loader (map-loader
                  (fn []
                    (get-item local-storage "conduit-jwt-token")))
         :params (fn [prev _ _]
                   (when (:data prev)
                     ignore-datasource))}
   :current-user {:target [:edb/named-item :user/current]
                  :loader api-loader
                  :deps [:jwt]
                  :processor process-user
                  :params (fn [prev _ {:keys [jwt]}]
                            (when jwt
                              (if (:data prev)
                                ignore-datasource
                                {:url "/user"
                                 :headers (auth-header jwt)})))}
   :articles {:target [:edb/collection :article/list]
              :deps [:jwt]
              :params (fn [_ route {:keys [jwt]}]
                        (let [page (:page route)]
                          (when (or (= "home" page)
                                    (= "profile" page))
                            (-> {:url "/articles"}
                                (assoc :headers (auth-header jwt))
                                (add-articles-author-params route)
                                (add-articles-pagination-param route)
                                (add-articles-tag-params route)))))
              :processor process-articles
              :loader api-loader}

   :current-article {:target [:edb/named-item :article/current]
                     :deps [:jwt]
                     :params (fn [_ {:keys [page subpage]} {:keys [jwt]}]
                               (when (and (or (= "editor" page)
                                              (= "article" page))
                                          subpage)
                                 {:url (str "/articles/" subpage)
                                  :headers (auth-header jwt)
                                  :get-from-app-db (fn [app-db]
                                                     (let [article (get-item-by-id app-db :article subpage)]
                                                       (when (:slug article)
                                                         {:article article}))
                                                     )}))
                     :processor process-article
                     :loader api-loader}

   :current-article-comments {:target [:edb/collection :comment/list]
                              :params (fn [_ {:keys [page subpage]} _]
                               (when (and (= "article" page) subpage)
                                 {:url (str "/articles/" subpage "/comments")}))
                              :loader api-loader
                              :processor process-comments}

   :profile-user {:target [:edb/named-item :user/profile-user]
                  :deps [:jwt]
                  :params (fn [_ {:keys [page subpage]} {:keys [jwt]}]
                            (when (and (= "profile" page) subpage)
                              {:url (str "/profiles/" subpage)
                               :headers (auth-header jwt)
                               :get-from-app-db (fn [app-db]
                                                  (when-let [user (get-item-by-id app-db :user subpage)]
                                                    {:profile user}))}))
                  :processor process-author
                  :loader    api-loader}

   :tags {:target [:edb/collection :tag/list]
          :params (fn [_ {:keys [page]} _]
                    (when (= "home" page)
                      {:url "/tags"}))
          :processor process-tags
          :loader api-loader}})
