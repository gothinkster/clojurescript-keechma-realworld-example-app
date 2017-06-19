(ns realworld.ui.components.delete-button
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> <cmd]]
            [keechma.toolbox.util :refer [class-names]]))

(defn render
  ([ctx article]
   (let [author ((:author article))
         current-user (sub> ctx :current-user)]
     (when (and current-user (= author current-user))
       [:button.btn.btn-sm.btn-outline-danger
        {:on-click #(<cmd ctx :delete article)}
        [:i.ion-trash-a] " Delete Article"]))))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-user]
                   :topic :user-actions}))
