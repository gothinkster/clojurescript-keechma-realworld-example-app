(ns realworld.ui.pages.login
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-input]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]
            [keechma.toolbox.forms.ui :as forms-ui]))


(defn render [ctx]
  (let [form-props [:login :form]
        form-state (forms-ui/form-state> ctx form-props)]
    [:div.auth-page>div.container.page>div.row>div.col-md-6.offset-md-3.col-xs-12
     [:h1.text-xs-center "Sign in"]
     [:p.text-xs-center
      [:a {:href (ui/url ctx {:page "register"})} "Need an account?"]]
     [form-api-errors/render form-state]
     [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
      [controlled-input ctx form-props :email {:placeholder "Email"}]
      [controlled-input ctx form-props :password {:placeholder "Password" :input-type :password}]
      [:button.btn.btn-lg.btn-primary.pull-xs-right "Sign in"]]]))

(def component
  (ui/constructor {:renderer render}))
