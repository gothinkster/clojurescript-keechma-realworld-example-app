(ns app.controllers.user.user-actions
  (:require [keechma.next.controller :as ctrl]
            [keechma.next.controllers.pipelines :as pipelines]
            [keechma.pipelines.core :as pp :refer-macros [pipeline!]]
            [app.api :as api]
            [promesa.core :as p]
            [app.settings :as settings]
            [keechma.next.controllers.entitydb :as edb]
            [keechma.next.controllers.router :as router]))

(derive :user/user-actions ::pipelines/controller)

(defn optimistic-toggle-favorite
  [value]
  (if (:favorited value)
    (-> value
        (assoc :favorited false)
        (update :favoritesCount dec))
    (-> value
        (assoc :favorited true)
        (update :favoritesCount inc))))

(defn optimistic-toggle-follow [value] (update value :following not))

(def pipelines
  {:logout (pipeline! [value ctrl]
                      (ctrl/dispatch ctrl :jwt :clear)
                      (router/redirect! ctrl :router {:page "home"})),
   :toggle-favorite
     (-> (pipeline!
           [value {:keys [deps-state*], :as ctrl}]
           (edb/insert-entity! ctrl
                               :entitydb
                               :article
                               (optimistic-toggle-favorite value))
           (let [api-fn (if (:favorited value)
                          api/favorite-delete
                          api/favorite-create)]
             (api-fn {:article-slug (:slug value), :jwt (:jwt @deps-state*)}))
           (edb/insert-entity! ctrl :entitydb :article value))
         (pp/set-queue #(:slug %))
         pp/enqueued),
   :toggle-follow
     (-> (pipeline!
           [value {:keys [deps-state*], :as ctrl}]
           (edb/insert-entity! ctrl
                               :entitydb
                               :user
                               (optimistic-toggle-follow value))
           (let [api-fn
                   (if (:following value) api/follow-delete api/follow-create)]
             (api-fn {:username (:username value), :jwt (:jwt @deps-state*)}))
           (edb/insert-entity! ctrl :entitydb :user value))
         (pp/set-queue #(:username %))
         pp/enqueued),
   :delete-article (pipeline!
                     [value _]
                     (when (js/confirm "Are your sure?")
                       (let [slug (:slug value)]
                         (pipeline!
                           [value {:keys [deps-state*], :as ctrl}]
                           (api/article-delete {:article-slug slug,
                                                :jwt (:jwt @deps-state*)})
                           (edb/remove-entity! ctrl :entitydb :article slug)
                           (router/redirect! ctrl :router {:page "home"})))))})

(defmethod ctrl/prep :user/user-actions
  [ctrl]
  (pipelines/register ctrl pipelines))
