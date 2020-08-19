(ns app.ui.pages.settings
  (:require [keechma.next.helix.core :refer
             [with-keechma dispatch use-meta-sub]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.ui.components.inputs :refer [wrapped-input]]
            [keechma.next.controllers.router :as router]
            [app.ui.components.form-errors :refer [FormErrors]]))

(defnc
  SettingsRenderer
  [props]
  (d/div
    {:class "auth-page"}
    (d/div
      {:class "container page"}
      (d/div
        {:class "row"}
        (d/div
          {:class "col-md-6 offset-md-3 col-xs-12"}
          (d/h1 {:class "text-xs-center"} "Settings")
          ($ FormErrors {:controller :settings-form})
          (d/form
            {:class "clearfix",
             :on-submit (fn [e]
                          (.preventDefault e)
                          (dispatch props :settings-form :keechma.form/submit))}
            (wrapped-input {:keechma.form/controller :settings-form,
                            :input/type :text,
                            :input/attr :image,
                            :placeholder "URL of profile picture"})
            (wrapped-input {:keechma.form/controller :settings-form,
                            :input/type :text,
                            :input/attr :username,
                            :placeholder "Username"})
            (wrapped-input {:keechma.form/controller :settings-form,
                            :input/type :textarea,
                            :input/attr :bio,
                            :placeholder "Short bio about you"})
            (wrapped-input {:keechma.form/controller :settings-form,
                            :input/type :text,
                            :input/attr :email,
                            :placeholder "Email"})
            (wrapped-input {:keechma.form/controller :settings-form,
                            :input/type :text,
                            :input/attr [:password],
                            :type "password",
                            :placeholder "Password"})
            (d/button {:class "btn btn-lg btn-primary pull-xs-right"}
                      "Update Settings"))
          (d/hr)
          (d/button {:class "btn btn-outline-danger",
                     :on-click #(dispatch props :user-actions :logout)}
                    "Or click here to logout"))))))

(def Settings (with-keechma SettingsRenderer))
