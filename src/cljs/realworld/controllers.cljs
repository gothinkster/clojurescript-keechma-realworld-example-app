(ns realworld.controllers
  (:require [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [realworld.datasources :refer [datasources]]
            [realworld.edb :refer [edb-schema]]))

(def controllers
  (-> {}
      (dataloader-controller/register datasources edb-schema)))
