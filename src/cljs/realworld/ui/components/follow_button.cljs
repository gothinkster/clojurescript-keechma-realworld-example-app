(ns realworld.ui.components.follow-button
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> <cmd]]
            [keechma.toolbox.util :refer [class-names]]))

(defn render
  ([ctx user]
   (let [current-user (sub> ctx :current-user)
         following? (:following user)
         action (if current-user
                  #(<cmd ctx :toggle-follow user)
                  #(ui/redirect ctx {:page "register"}))]
     (if (= current-user user)
       [:a.btn.btn-sm.btn-outline-secondary
        {:href (ui/url ctx {:page "settings"})}
        [:i.ion-gear-a] " Edit Profile Settings"]
       [:button.btn.btn-sm
        {:on-click action
         :class (class-names {:btn-outline-secondary (not following?)
                              :btn-secondary following?})}
        [:i.ion-plus-round] (str (if following? " Unfollow " " Follow ") (:username user))]))))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-user]
                   :topic :user-actions}))
