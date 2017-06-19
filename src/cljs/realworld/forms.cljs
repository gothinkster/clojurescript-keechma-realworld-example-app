(ns realworld.forms
  (:require [realworld.forms.login :as login]
            [realworld.forms.register :as register]
            [realworld.forms.settings :as settings]))

(def forms
  {:login (login/constructor)
   :settings (settings/constructor)
   :register (register/constructor)})

(def forms-ids
  {:login (fn [{:keys [page]}]
            (when (= "login" page)
              :form))
   :register (fn [{:keys [page]}]
               (when (= "register" page)
                 :form))
   :settings (fn [{:keys [page]}]
            (when (= "settings" page)
              :form))})
