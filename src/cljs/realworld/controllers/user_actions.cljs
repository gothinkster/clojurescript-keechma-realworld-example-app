(ns realworld.controllers.user-actions
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.ajax :refer [POST DELETE]]
            [realworld.settings :as settings]
            [realworld.edb :refer [insert-item get-named-item remove-item]]
            [promesa.core :as p]
            [realworld.datasources :refer [process-article]]))

(defn make-req-params [jwt]
  {:keywords? true
   :response-format :json
   :format :json
   :headers {:authorization (str "Token " jwt)}})

(defn toggle-favorite [article app-db]
  (let [jwt (get-in app-db [:kv :jwt])
        slug (:slug article)
        endpoint (str settings/api-endpoint "/articles/" slug "/favorite")
        action (if (:favorited article) DELETE POST)]
    (when jwt
      (->> (action endpoint (make-req-params jwt))
           (p/map process-article)))))

(defn toggle-follow [user app-db]
  (let [jwt (get-in app-db [:kv :jwt])
        username (:username user)
        endpoint (str settings/api-endpoint "/profiles/" username "/follow")
        action (if (:following user) DELETE POST)]
    (when jwt
      (->> (action endpoint (make-req-params jwt))
           (p/map :profile)))))

(defn current-user-article-author? [article app-db]
  (let [author ((:author article))
        current-user (get-named-item app-db :user :current)]
    (= author current-user)))

(defn delete-article [article app-db]
  (let [slug (:slug article)
        jwt (get-in app-db [:kv :jwt])]
    (->> (DELETE (str settings/api-endpoint "/articles/" slug)
                 (make-req-params jwt))
         (p/map (fn [_] article)))))

(def controller
  (pp-controller/constructor
   (fn [_]
     true)
   {:toggle-favorite (pipeline! [value app-db]
                       (toggle-favorite value app-db)
                       (pp/commit! (insert-item app-db :article value)))
    :toggle-follow (pipeline! [value app-db]
                       (toggle-follow value app-db)
                       (pp/commit! (insert-item app-db :user value)))
    :delete (pipeline! [value app-db]
              (when (current-user-article-author? value app-db)
                (pipeline! [value app-db]
                  (delete-article value app-db)
                  (pp/commit! (remove-item app-db :article (:slug value)))
                  (pp/redirect! {:page "home"}))))}))
