(ns app.api
  (:require [keechma.next.toolbox.ajax :refer [GET POST DELETE PUT]]
            [app.settings :as settings]
            [promesa.core :as p]))

(def default-request-config
  {:response-format :json, :keywords? true, :format :json})

(defn add-auth-header
  [req-params jwt]
  (if jwt
    (assoc-in req-params [:headers :authorization] (str "Token " jwt))
    req-params))

(defn add-params
  [req-params params]
  (if params (assoc req-params :params params) req-params))

(defn req-params
  [& {:keys [jwt data]}]
  (-> default-request-config
      (add-auth-header jwt)
      (add-params data)))

(defn tag->entity [tag] (if (string? tag) {:tag tag} tag))

(defn process-articles
  [data]
  {:data (map (fn [article]
                (assoc article :tagList (map tag->entity (:tagList article))))
           (:articles data)),
   :meta {:count (:articlesCount data)}})

(defn process-article
  [data]
  (let [article (:article data)
        tag-list (:tagList article)]
    (assoc article
      :tagList (map tag->entity (if (fn? tag-list) (tag-list) tag-list)))))

(defn process-tags [data] (map tag->entity (:tags data)))

(defn process-author [data] (:profile data))

(defn process-comments [data] (:comments data))

(defn process-user [data] (:user data))

(defn comment-create
  [{:keys [jwt article-slug comment]}]
  (->> (POST (str settings/api-endpoint "/articles/" article-slug "/comments")
             (req-params :jwt jwt :data {:comment comment}))
       (p/map :comment)))

(defn comments-get
  [{:keys [article-slug]}]
  (->> (GET (str settings/api-endpoint "/articles/" article-slug "/comments")
            (req-params))
       (p/map process-comments)))

(defn article-create
  [{:keys [jwt article]}]
  (->> (POST (str settings/api-endpoint "/articles")
             (req-params :jwt jwt :data {:article article}))
       (p/map process-article)))

(defn article-update
  [{:keys [jwt article-slug article]}]
  (->> (PUT (str settings/api-endpoint "/articles/" article-slug)
            (req-params :jwt jwt :data {:article article}))
       (p/map process-article)))

(defn article-delete
  [{:keys [jwt article-slug]}]
  (DELETE (str settings/api-endpoint "/articles/" article-slug)
          (req-params :jwt jwt)))

(defn article-get
  [{:keys [article-slug jwt]}]
  (->> (GET (str settings/api-endpoint "/articles/" article-slug)
            (req-params :jwt jwt))
       (p/map process-article)))

(defn articles-get
  [{:keys [feed-type params jwt]}]
  (let [url (if (and jwt (= :personal feed-type)) "/articles/feed" "/articles")]
    (->> (GET (str settings/api-endpoint url)
              (req-params :data params :jwt jwt))
         (p/map process-articles))))

(defn login
  [user]
  (->> (POST (str settings/api-endpoint "/users/login")
             (req-params :data {:user user}))
       (p/map process-user)))

(defn register
  [user]
  (->> (POST (str settings/api-endpoint "/users")
             (req-params :data {:user user}))
       (p/map process-user)))

(defn user-update
  [{:keys [jwt user]}]
  (->> (PUT (str settings/api-endpoint "/user")
            (req-params :jwt jwt :data {:user user}))
       (p/map process-user)))

(defn current-user-get
  [{:keys [jwt]}]
  (->> (GET (str settings/api-endpoint "/user") (req-params :jwt jwt))
       (p/map process-user)))

(defn user-get
  [{:keys [jwt user]}]
  (->> (GET (str settings/api-endpoint "/profiles/" user) (req-params :jwt jwt))
       (p/map process-author)))

(defn follow-create
  [{:keys [jwt username]}]
  (->> (POST (str settings/api-endpoint "/profiles/" username "/follow")
             (req-params :jwt jwt))
       (p/map process-author)))

(defn follow-delete
  [{:keys [jwt username]}]
  (->> (DELETE (str settings/api-endpoint "/profiles/" username "/follow")
               (req-params :jwt jwt))
       (p/map process-author)))

(defn favorite-create
  [{:keys [jwt article-slug]}]
  (->> (POST (str settings/api-endpoint "/articles/" article-slug "/favorite")
             (req-params :jwt jwt))
       (p/map process-article)))

(defn favorite-delete
  [{:keys [jwt article-slug]}]
  (->> (DELETE (str settings/api-endpoint "/articles/" article-slug "/favorite")
               (req-params :jwt jwt))
       (p/map process-article)))

(defn tags-get
  [_]
  (->> (GET (str settings/api-endpoint "/tags") (req-params))
       (p/map process-tags)))