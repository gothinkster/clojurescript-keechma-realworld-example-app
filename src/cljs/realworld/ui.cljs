(ns realworld.ui
  (:require [realworld.ui.layout :as layout]
            [realworld.ui.header :as header]
            [realworld.ui.footer :as footer]
            [realworld.ui.pages.home :as page-home]
            [realworld.ui.components.articles :as articles]))

(def ui
  {:main      layout/component
   :header    header/component
   :footer    footer/component
   :articles  articles/component
   :page-home page-home/component})
