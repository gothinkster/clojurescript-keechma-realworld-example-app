(ns realworld.controllers.initializer
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :as dataloader-controller]))

(def controller
  (pp-controller/constructor
   (fn [_]
     true)
   {:start (pipeline! [value app-db]
             (dataloader-controller/wait-dataloader-pipeline!)
             (pp/commit! (assoc-in app-db [:kv :initialized?] true)))}))
