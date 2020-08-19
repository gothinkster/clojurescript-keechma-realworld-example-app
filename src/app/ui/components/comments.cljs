(ns app.ui.components.comments
  (:require [keechma.next.helix.core :refer
             [with-keechma dispatch use-sub use-meta-sub]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.util :refer [format-date]]
            [app.settings :as settings]
            [keechma.next.controllers.router :as router]))

(defnc Comment
       [{:keys [comment], :as props}]
       (let [author (:author comment)]
         (d/div {:class "card"}
                (d/div {:class "card-block"}
                       (d/p {:class "card-text"} (:body comment)))
                (d/div {:class "card-footer"}
                       (d/a {:class "comment-author",
                             :href (router/get-url props
                                                   :router
                                                   {:page "profile",
                                                    :user (:username author)})}
                            (:username author))
                       (d/span {:class "date-posted"}
                               (format-date (:createdAt comment)))))))

(defnc CommentsRenderer
       [props]
       (let [comments (use-sub props :comments)]
         (<> (map (fn [c] ($ Comment {:key (:id c), :comment c, & props}))
               comments))))

(def Comments (with-keechma CommentsRenderer))