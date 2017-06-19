(ns realworld.ui.main
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route> sub>]]))

(defn render [ctx]
  (let [current-route (route> ctx)
        current-page  (:page current-route)]
    (when (sub> ctx :initialized?)
      [:div
       [(ui/component ctx :header)]
       (case current-page
         "home"     [(ui/component ctx :page-home)]
         "profile"  [(ui/component ctx :page-profile)]
         "article"  [(ui/component ctx :page-article)]
         "login"    [(ui/component ctx :page-login)]
         "settings" [(ui/component ctx :page-settings)]
         "register" [(ui/component ctx :page-register)]
         "editor"   [(ui/component ctx :page-editor)]
         [:div "404"])
       [(ui/component ctx :footer)]])))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:initialized?]
                   :component-deps [:header
                                    :footer
                                    :page-home
                                    :page-profile
                                    :page-article
                                    :page-login
                                    :page-settings
                                    :page-register
                                    :page-editor]}))
