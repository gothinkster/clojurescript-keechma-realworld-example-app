(ns realworld.ui.components.favorite-button
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> <cmd]]
            [keechma.toolbox.util :refer [class-names]]))

(defn render
  ([ctx article] (render ctx article :small))
  ([ctx article size]
   (let [favorited? (:favorited article)
         fav-count (:favoritesCount article)
         current-user (sub> ctx :current-user)
         action (if current-user
                  #(<cmd ctx :toggle-favorite article)
                  #(ui/redirect ctx {:page "register"}))]
     [:button.btn.btn-sm
      {:on-click action
       :class (class-names {:btn-outline-primary (not favorited?)
                            :btn-primary favorited?
                            :pull-xs-right (= :small size)})}
      [:i.ion-heart] " "
      (if (= :small size)
        fav-count
        (str (if favorited? "Unfavorite" "Favorite") " Post (" fav-count ")"))]
       )))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-user]
                   :topic :user-actions}))
