(ns realworld.api
  (:require [keechma.toolbox.ajax :refer [GET POST DELETE PUT]]
            [realworld.settings :as settings] 
            [promesa.core :as p]))

(def default-request-config
  {:response-format :json
   :keywords? true
   :format :json})

(defn add-auth-header [req-params jwt] 
  (if jwt
    (assoc-in req-params [:headers :authorization] (str "Token " jwt))
    req-params))

(defn add-params [req-params params]
  (if params
    (assoc req-params :params params)
    req-params))

(defn req-params [& {:keys [jwt data]}]
  (-> default-request-config
      (add-auth-header jwt)
      (add-params data)))

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

(defn comment-create [jwt article-slug comment]
  (->> (POST (str settings/api-endpoint "/articles/" article-slug "/comments")
             (req-params :jwt jwt :data {:comment comment}))
       (p/map :comment)))

(defn article-create [jwt article]
  (->> (POST (str settings/api-endpoint "/articles")
             (req-params :jwt jwt :data {:article article}))
       (p/map process-article)))

(defn article-update [jwt article-slug article]
  (->> (PUT (str settings/api-endpoint "/articles/" article-slug)
            (req-params :jwt jwt :data {:article article}))
       (p/map process-article)))

(defn article-delete [jwt article-slug]
  (DELETE (str settings/api-endpoint "/articles/" article-slug)
          (req-params :jwt jwt)))

(defn login [user]
  (->> (POST (str settings/api-endpoint "/users/login")
             (req-params :data {:user user}))
       (p/map process-user)))

(defn register [user]
  (->> (POST (str settings/api-endpoint "/users")
             (req-params :data {:user user}))
       (p/map process-user)))

(defn user-update [jwt user]
  (->> (PUT (str settings/api-endpoint "/user")
            (req-params :jwt jwt :data {:user user}))
       (p/map process-user)))

(defn follow-create [jwt username]
  (->> (POST (str settings/api-endpoint "/profiles/" username "/follow")
             (req-params :jwt jwt))
       (p/map process-author)))

(defn follow-delete [jwt username]
  (->> (DELETE (str settings/api-endpoint "/profiles/" username "/follow")
               (req-params :jwt jwt))
       (p/map process-author)))

(defn favorite-create [jwt article-slug]
  (->> (POST (str settings/api-endpoint "/articles/" article-slug "/favorite")
             (req-params :jwt jwt))
       (p/map process-article)))

(defn favorite-delete [jwt article-slug]
  (->> (DELETE (str settings/api-endpoint "/articles/" article-slug "/favorite")
               (req-params :jwt jwt))
       (p/map process-article)))

(defn dataloader-req [req-params]
  (let [headers (:headers req-params)
        url (:url req-params)
        params (dissoc req-params :url :headers :get-from-app-db)]
    (GET (str settings/api-endpoint url)
         (assoc default-request-config
                :params params
                :headers headers))))
