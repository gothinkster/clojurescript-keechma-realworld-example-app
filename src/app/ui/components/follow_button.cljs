(ns app.ui.components.follow-button
  (:require [keechma.next.helix.core :refer [with-keechma dispatch]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.util :refer [format-date]]
            [keechma.next.controllers.pipelines :refer [throw-promise!]]
            [app.settings :as settings]))

(defnc
  FollowButtonRenderer
  [{:keys [user], :as props}]
  (d/button
    {:class ["btn btn-sm"
             (if (:following user) "btn-secondary" "btn-outline-secondary")],
     :on-click #(dispatch props :user-actions :toggle-follow user)}
    (d/i {:class "ion-plus-round"})
    (str " " (if (:following user) "Unfollow" "Follow") " " (:username user))))

(def FollowButton (with-keechma FollowButtonRenderer))