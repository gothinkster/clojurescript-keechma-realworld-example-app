(ns realworld.forms
  (:require [realworld.forms.login :as login]))

(def forms
  {:login (login/constructor)})

(def forms-ids
  {:login (fn [{:keys [page]}]
            (when (= "login" page)
              :form))})
