(ns realworld.ui
  (:require [realworld.ui.layout :as layout]
            [realworld.ui.header :as header]
            [realworld.ui.footer :as footer]
            [realworld.ui.pages.home :as page-home]
            [realworld.ui.components.articles :as articles]
            [realworld.ui.pages.profile :as page-profile]))

(def ui
  {:main         layout/component
   :header       header/component
   :footer       footer/component
   :articles     articles/component
   :page-home    page-home/component
   :page-profile page-profile/component})
