(ns realworld.ui.pages.settings
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-input controlled-textarea]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn render [ctx]
  (let [form-props [:settings :form]
        form-state (forms-ui/form-state> ctx form-props)]
    [:div.settings-page>div.container.page>div.row>div.col-md-6.offset-md-3.col-xs-12
     [:h1.text-xs-center "Your Settings"]
     [:p.text-xs-center
      [:a {:href (ui/url ctx {:page "register"})} "Need an account?"]]
     [form-api-errors/render form-state]
     [:form.clearfix {:on-submit #(forms-ui/<submit ctx form-props %)}
      [controlled-input ctx form-props :image {:placeholder "URL of profile picture"}]
      [controlled-input ctx form-props :username {:placeholder "Username"}]
      [controlled-textarea ctx form-props :bio {:placeholder "Short bio about you"}]
      [controlled-input ctx form-props :email {:placeholder "Email"}]
      [controlled-input ctx form-props :password {:placeholder "Password" :input-type :password}]
      [:button.btn.btn-lg.btn-primary.pull-xs-right "Update Settings"]]
     [:hr]
     [:a.btn.btn-outline-danger {:href (ui/url ctx {:page "logout"})} "Or click here to logout."]]))

(def component
  (ui/constructor {:renderer render}))
