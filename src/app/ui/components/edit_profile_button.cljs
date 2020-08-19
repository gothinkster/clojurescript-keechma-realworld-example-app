(ns app.ui.components.edit-profile-button
  (:require [keechma.next.helix.core :refer [with-keechma dispatch]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [keechma.next.controllers.router :as router]))

(defnc EditProfileButtonRenderer
       [props]
       (d/a {:class "btn btn-sm btn-outline-secondary",
             :href (router/get-url props :router {:page "settings"})}
            (d/i {:class "ion-gear-a"} " Edit Profile Settings")))

(def EditProfileButton (with-keechma EditProfileButtonRenderer))