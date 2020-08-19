(ns app.ui.main
  (:require [keechma.next.helix.core :refer [with-keechma use-sub use-meta-sub]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <>]]
            ["react" :as react]
            ["react-dom" :as rdom]
            [helix.dom :as d]
            [app.ui.components.header :refer [Header]]
            [app.ui.components.footer :refer [Footer]]
            [app.ui.pages.home :refer [Home]]
            [app.ui.pages.login :refer [Login]]
            [app.ui.pages.article :refer [Article]]
            [app.ui.pages.profile :refer [Profile]]
            [app.ui.pages.settings :refer [Settings]]
            [app.ui.pages.register :refer [Register]]
            [app.ui.pages.editor :refer [Editor]]
            [helix.core :as hx :refer [$ <> suspense]]
            [keechma.next.controllers.pipelines :refer [throw-promise!]]))

(defnc InnerMain
       [props]
       (throw-promise! (use-meta-sub props :current-user) :keechma.on/start)
       (let [{:keys [page]} (use-sub props :router)]
         (d/div ($ Header)
                (suspense {:fallback (d/div {:class "container"} "Loading ...")}
                          (case page
                            "home" ($ Home)
                            "login" ($ Login)
                            "article" ($ Article)
                            "profile" ($ Profile)
                            "settings" ($ Settings)
                            "register" ($ Register)
                            "editor" ($ Editor)
                            (d/div "404")))
                ($ Footer))))

(defnc MainRenderer
       [props]
       (suspense {:fallback (d/div)} ($ InnerMain {& props})))

(def Main (with-keechma MainRenderer))