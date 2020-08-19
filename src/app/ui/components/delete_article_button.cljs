(ns app.ui.components.delete-article-button
  (:require [keechma.next.helix.core :refer [with-keechma dispatch]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.util :refer [format-date]]
            [keechma.next.controllers.pipelines :refer [throw-promise!]]
            [app.settings :as settings]))

(defnc DeleteButtonRenderer
       [{:keys [article], :as props}]
       (d/button {:class "btn btn-sm btn-outline-danger",
                  :on-click
                    #(dispatch props :user-actions :delete-article article)}
                 (d/i {:class "ion-trash-a"})
                 " Delete Article"))

(def DeleteButton (with-keechma DeleteButtonRenderer))