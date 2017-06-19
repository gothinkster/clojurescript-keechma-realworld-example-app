(ns realworld.controllers
  (:require [keechma.toolbox.dataloader.controller :as dataloader-controller]
            [keechma.toolbox.forms.controller :as forms-controller]
            [keechma.toolbox.forms.mount-controller :as forms-mount-controller]
            [realworld.datasources :refer [datasources]]
            [realworld.edb :refer [edb-schema]]
            [realworld.forms :refer [forms forms-ids]]
            [realworld.controllers.register-login-redirect :as register-login-redirect]
            [realworld.controllers.initializer :as initializer]
            [realworld.controllers.logout :as logout]))

(def controllers
  (-> {:register-login-redirect register-login-redirect/controller
       :initializer initializer/controller
       :logout logout/controller}
      (forms-controller/register forms)
      (forms-mount-controller/register forms-ids)
      (dataloader-controller/register datasources edb-schema)))
