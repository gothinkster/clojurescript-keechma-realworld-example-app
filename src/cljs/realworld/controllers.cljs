(ns realworld.controllers
  (:require [realworld.controllers.redirect :as redirect]
            [realworld.controllers.initializer :as initializer]
            [realworld.controllers.logout :as logout]
            [realworld.controllers.user-actions :as user-actions]))

(def controllers
  {:redirect redirect/controller
   :initializer initializer/controller
   :logout logout/controller
   :user-actions user-actions/controller})
