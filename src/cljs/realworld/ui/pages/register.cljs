(ns realworld.ui.pages.register
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-input]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]))


(defn render [ctx]
  (let [form-id [:register :form]
        form-state @(forms-helpers/form-state ctx form-id)
        helpers (forms-helpers/make-component-helpers ctx form-id)]
    [:div.auth-page>div.container.page>div.row>div.col-md-6.offset-md-3.col-xs-12
     [:h1.text-xs-center "Sign up"]
     [:p.text-xs-center
      [:a {:href (ui/url ctx {:page "login"})} "Have an account?"]]
     [form-api-errors/render form-state]
     [:form {:on-submit (:submit helpers)}
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "Username" :attr :username}]
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "Email" :attr :email}]
      [controlled-input
       {:form-state form-state :helpers helpers :placeholder "Password" :attr :password :input-type :password}]
      [:button.btn.btn-lg.btn-primary.pull-xs-right "Sign up"]]]))

(def component
  (ui/constructor {:renderer render
                   :topic forms-core/id-key
                   :subscription-deps [:form-state]}))
