(ns app.ui.components.comment-form
  (:require [keechma.next.helix.core :refer
             [with-keechma dispatch call use-sub use-meta-sub]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.ui.components.inputs :refer [wrapped-input]]
            [keechma.next.controllers.router :as router]
            [clojure.string :as str]))

(defnc
  CommentFormRenderer
  [props]
  (let [current-user (use-sub props :current-user)]
    (d/form
      {:class "card comment-form",
       :on-submit (fn [e]
                    (.preventDefault e)
                    (dispatch props :comment-form :keechma.form/submit))}
      (d/div {:class "card-block"}
             (wrapped-input {:keechma.form/controller :comment-form,
                             :input/type :textarea,
                             :input/attr :body,
                             :rows 3,
                             :placeholder "Write a comment ..."}))
      (d/div {:class "card-footer"}
             (d/img {:class "comment-author-img", :src (:image current-user)})
             (d/button {:class "btn btn-sm btn-primary"} "Post Comment")))))

(def CommentForm (with-keechma CommentFormRenderer))
