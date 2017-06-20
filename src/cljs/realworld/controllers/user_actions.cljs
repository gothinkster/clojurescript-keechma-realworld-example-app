(ns realworld.controllers.user-actions
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [realworld.edb :refer [insert-item get-named-item remove-item]]
            [promesa.core :as p]
            [realworld.api :as api]))

(defn toggle-favorite [article app-db]
  (let [jwt (get-in app-db [:kv :jwt])
        slug (:slug article)]
    (when jwt
      (if (:favorited article)
        (api/favorite-delete jwt slug)
        (api/favorite-create jwt slug)))))

(defn toggle-follow [user app-db]
  (let [jwt (get-in app-db [:kv :jwt])
        username (:username user)]
    (when jwt
      (if (:following user)
        (api/follow-delete jwt username)
        (api/follow-create jwt username)))))

(defn current-user-article-author? [article app-db]
  (let [author ((:author article))
        current-user (get-named-item app-db :user :current)]
    (= author current-user)))

(defn delete-article [article app-db]
  (let [slug (:slug article)
        jwt (get-in app-db [:kv :jwt])]
    (->> (api/article-delete jwt slug)
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
