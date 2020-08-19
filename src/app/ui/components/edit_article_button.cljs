(ns app.ui.components.edit-article-button
  (:require [keechma.next.helix.core :refer [with-keechma dispatch]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [keechma.next.controllers.router :as router]))

(defnc EditArticleButtonRenderer
       [{:keys [article], :as props}]
       (d/a {:class "btn btn-outline-secondary btn-sm",
             :href (router/get-url props
                                   :router
                                   {:page "editor", :slug (:slug article)})}
            (d/i {:class "ion-edit"})
            " Edit Article"))

(def EditArticleButton (with-keechma EditArticleButtonRenderer))