(ns realworld.controllers.redirect
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [realworld.edb :refer [get-named-item]]
            [promesa.core :as p]))

(defn get-redirect [route app-db]
  (let [page            (:page route)
        subpage         (:subpage route)
        current-user    (get-named-item app-db :user :current)
        current-article (get-named-item app-db :article :current)]
    (cond
      (and (= "login" page) current-user)                             {:page "home" :subpage "personal"}
      (and (= "register" page) current-user)                          {:page "home" :subpage "personal"}
      (and (= "home" page) (= "personal" subpage) (not current-user)) {:page "home"}
      (and (= "editor" page) (not current-user))                      {:page "home"}
      (and (= "settings" page) (not current-user))                    {:page "home"}
      (and (= "article" page) (not current-article))                  {:page "home"}
      (and (= "editor" page) (not current-article))                   {:page "home"}
      :else                                                           nil)))

(def controller
  (pp-controller/constructor
   (fn [{:keys [data]}]
     data)
   {:start (pipeline! [value app-db]
             (dataloader-controller/wait-dataloader-pipeline!)
             (get-redirect value app-db)
             (when value
               (pp/redirect! value)))}))
