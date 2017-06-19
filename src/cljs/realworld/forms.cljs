(ns realworld.forms
  (:require [realworld.forms.login :as login]
            [realworld.forms.settings :as settings]))

(def forms
  {:login (login/constructor)
   :settings (settings/constructor)})

(def forms-ids
  {:login (fn [{:keys [page]}]
            (when (= "login" page)
              :form))
   :settings (fn [{:keys [page]}]
            (when (= "settings" page)
              :form))})
