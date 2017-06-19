(ns realworld.controllers
  (:require [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [keechma.toolbox.forms.controller :as forms-controller]
            [keechma.toolbox.forms.mount-controller :as forms-mount-controller]
            [realworld.datasources :refer [datasources]]
            [realworld.edb :refer [edb-schema]]
            [realworld.forms :refer [forms forms-ids]]
            [realworld.controllers.redirect :as redirect]
            [realworld.controllers.initializer :as initializer]
            [realworld.controllers.logout :as logout]
            [realworld.controllers.user-actions :as user-actions]))

(def controllers
  (-> {:redirect redirect/controller
       :initializer initializer/controller
       :logout logout/controller
       :user-actions user-actions/controller}
      (forms-controller/register forms)
      (forms-mount-controller/register forms-ids)
      (dataloader-controller/register datasources edb-schema)))
