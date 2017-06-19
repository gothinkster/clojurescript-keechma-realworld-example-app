(ns realworld.forms
  (:require [realworld.forms.login :as login]
            [realworld.forms.register :as register]
            [realworld.forms.settings :as settings]
            [realworld.forms.editor :as editor]))

(def forms
  {:login    (login/constructor)
   :settings (settings/constructor)
   :register (register/constructor)
   :editor   (editor/constructor)})

(def forms-ids
  {:login (fn [{:keys [page]}]
            (when (= "login" page)
              :form))
   :register (fn [{:keys [page]}]
               (when (= "register" page)
                 :form))
   :editor (fn [{:keys [page subpage]}]
             (when (= "editor" page)
               (or subpage :new)))
   :settings (fn [{:keys [page]}]
            (when (= "settings" page)
              :form))})
