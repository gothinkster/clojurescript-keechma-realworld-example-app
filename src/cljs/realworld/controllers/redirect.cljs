(ns realworld.controllers.redirect
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [realworld.edb :refer [get-named-item]]))

(defn get-redirect [route app-db]
  (let [page                   (:page route)
        subpage                (:subpage route)
        current-user           (get-named-item app-db :user :current)
        current-article        (get-named-item app-db :article :current)
        current-article-author (if current-article ((:author current-article)) nil)
        personal-page          {:page "home" :subpage "personal"}
        home-page              {:page "home"}]
    (cond
      (and (= "login" page) current-user)                                        personal-page 
      (and (= "register" page) current-user)                                     personal-page 
      (and (= "home" page) (= "personal" subpage) (not current-user))            home-page 
      (and (= "editor" page) (not current-user))                                 home-page 
      (and (= "settings" page) (not current-user))                               home-page 
      (and (= "article" page) (not current-article))                             home-page 
      (and (= "editor" page) (not current-article))                              home-page 
      (and (= "editor" page) subpage (not= current-user current-article-author)) home-page 
      :else                                                                      nil)))

(defn redirect! [route app-db]
  (let [redirect-to (get-redirect route app-db)]
    (when redirect-to
      (pp/redirect! redirect-to))))

(def controller
  (pp-controller/constructor
   (fn [{:keys [data]}]
     data)
   {:start (pipeline! [value app-db]
             (dataloader-controller/wait-dataloader-pipeline!)
             (redirect! value app-db))}))
