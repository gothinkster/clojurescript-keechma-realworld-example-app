(ns realworld.controllers.register-login-redirect
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [promesa.core :as p]))

(def controller
  (pp-controller/constructor
   (fn [{:keys [data]}]
     (let [page (:page data)]
       (when (or (= "login" page)
                 (= "register" page))
         true)))
   {:start (pipeline! [value app-db]
             (dataloader-controller/wait-dataloader-pipeline!)
             (when (get-in app-db [:kv :jwt])
               (pp/redirect! {:page "home"})))}))
