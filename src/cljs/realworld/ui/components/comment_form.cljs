(ns realworld.ui.components.comment-form
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-textarea]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]))


(defn render [ctx]
  (let [form-id [:comment :form]
        form-state @(forms-helpers/form-state ctx form-id)
        helpers (forms-helpers/make-component-helpers ctx form-id)
        current-user (sub> ctx :current-user)]
    [:form.card.comment-form {:on-submit (:submit helpers)}
     [:div.card-block
      [form-api-errors/render form-state]
      [controlled-textarea
       {:form-state form-state :helpers helpers :placeholder "Write a comment..." :rows 3 :attr :body}]] 
     [:div.card-footer
      [:img.comment-author-img {:src (:image current-user)}]
      [:button.btn.btn-sm.btn-primary "Post Comment"]]]))

(def component
  (ui/constructor {:renderer render
                   :topic forms-core/id-key
                   :subscription-deps [:form-state :current-user]}))
