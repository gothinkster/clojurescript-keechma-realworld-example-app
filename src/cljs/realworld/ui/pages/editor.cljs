(ns realworld.ui.pages.editor
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-input controlled-textarea]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]))


(defn render [ctx]
  (let [form-id [:editor (or (:subpage (route> ctx)) :new)]
        form-state @(forms-helpers/form-state ctx form-id)
        helpers (forms-helpers/make-component-helpers ctx form-id)]
    [:div.auth-page>div.container.page>div.row>div.col-md-10.offset-md-1.col-xs-12
     [form-api-errors/render form-state]
     [:form {:on-submit (:submit helpers)}
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "Article Title" :attr :title}]
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "What's this article about?" :attr :description}] 
      [controlled-textarea
       {:form-state form-state :helpers helpers :placeholder "Write your article (in markdown)" :attr :body}]
      [:button.btn.btn-lg.btn-primary.pull-xs-right "Publish Article"]]]))

(def component
  (ui/constructor {:renderer render
                   :topic forms-core/id-key
                   :subscription-deps [:form-state]}))
