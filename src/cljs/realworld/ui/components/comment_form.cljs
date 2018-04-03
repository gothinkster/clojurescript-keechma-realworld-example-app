(ns realworld.ui.components.comment-form
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-textarea]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]
            [keechma.toolbox.forms.ui :as forms-ui]))


(defn render [ctx]
  (let [form-props [:comment :form]
        form-state (forms-ui/form-state> ctx form-props)
        current-user (sub> ctx :current-user)]
    [:form.card.comment-form {:on-submit #(forms-ui/<submit ctx form-props %)}
     [:div.card-block
      [form-api-errors/render form-state]
      [controlled-textarea ctx form-props :body {:placeholder "Write a comment..." :rows 3}]] 
     [:div.card-footer
      [:img.comment-author-img {:src (:image current-user)}]
      [:button.btn.btn-sm.btn-primary "Post Comment"]]]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:current-user]}))
