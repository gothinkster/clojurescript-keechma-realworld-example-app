(ns realworld.ui.pages.settings
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-input controlled-textarea]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]))


(defn render [ctx]
  (let [form-id [:settings :form]
        form-state @(forms-helpers/form-state ctx form-id)
        helpers (forms-helpers/make-component-helpers ctx form-id)]
    [:div.settings-page>div.container.page>div.row>div.col-md-6.offset-md-3.col-xs-12
     [:h1.text-xs-center "Your Settings"]
     [:p.text-xs-center
      [:a {:href (ui/url ctx {:page "register"})} "Need an account?"]]
     [form-api-errors/render form-state]
     [:form.clearfix {:on-submit (:submit helpers)}
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "URL of profile picture" :attr :image}]
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "Username" :attr :username}]
      [controlled-textarea
       {:form-state form-state :helpers helpers :placeholder "Short bio about you" :attr :bio}]
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "Email" :attr :email}]
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "Password" :attr :password :input-type :password}]
      [:button.btn.btn-lg.btn-primary.pull-xs-right "Update Settings"]]
     [:hr]
     [:a.btn.btn-outline-danger {:href (ui/url ctx {:page "logout"})} "Or click here to logout."]]))

(def component
  (ui/constructor {:renderer render
                   :topic forms-core/id-key
                   :subscription-deps [:form-state]}))
