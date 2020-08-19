(ns app.ui.pages.register
  (:require [keechma.next.helix.core :refer [with-keechma dispatch call]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.ui.components.inputs :refer [wrapped-input]]
            [keechma.next.controllers.router :as router]
            [app.ui.components.form-errors :refer [FormErrors]]))

(defnc
  RegisterRenderer
  [props]
  (d/div
    {:class "auth-page"}
    (d/div
      {:class "container page"}
      (d/div
        {:class "row"}
        (d/div
          {:class "col-md-6 offset-md-3 col-xs-12"}
          (d/h1 {:class "text-xs-center"} "Sign up")
          (d/p {:class "text-xs-center"}
               (d/a {:href (router/get-url props :router {:page "login"})}
                    "Have an account?"))
          ($ FormErrors {:controller :register-form})
          (d/form
            {:on-submit (fn [e]
                          (.preventDefault e)
                          (dispatch props :register-form :keechma.form/submit))}
            (wrapped-input {:keechma.form/controller :register-form,
                            :input/type :text,
                            :input/attr :username,
                            :placeholder "Username"})
            (wrapped-input {:keechma.form/controller :register-form,
                            :input/type :text,
                            :input/attr :email,
                            :placeholder "Email"})
            (wrapped-input {:keechma.form/controller :register-form,
                            :input/type :text,
                            :input/attr [:password],
                            :type "password",
                            :placeholder "Password"})
            (d/button {:class "btn btn-lg btn-primary pull-xs-right"}
                      "Sign Up")))))))

(def Register (with-keechma RegisterRenderer))
