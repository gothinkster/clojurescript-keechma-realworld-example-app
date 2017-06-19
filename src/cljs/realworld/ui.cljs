(ns realworld.ui
  (:require [realworld.ui.components.articles :as articles]
            [realworld.ui.components.comments :as comments]
            [realworld.ui.components.footer :as footer]
            [realworld.ui.components.header :as header]
            [realworld.ui.components.favorite-button :as favorite-button]
            [realworld.ui.components.follow-button :as follow-button]
            [realworld.ui.components.delete-button :as delete-button]
            [realworld.ui.components.comment-form :as comment-form]
            [realworld.ui.pages.article :as page-article]
            [realworld.ui.pages.home :as page-home]
            [realworld.ui.pages.login :as page-login]
            [realworld.ui.pages.profile :as page-profile]
            [realworld.ui.pages.settings :as page-settings]
            [realworld.ui.pages.register :as page-register]
            [realworld.ui.pages.editor :as page-editor]
            [realworld.ui.main :as main]))

(def ui
  {:main            main/component
   :header          header/component
   :footer          footer/component
   :articles        articles/component
   :comments        comments/component
   :favorite-button favorite-button/component
   :follow-button   follow-button/component
   :delete-button   delete-button/component
   :comment-form    comment-form/component
   :page-home       page-home/component
   :page-profile    page-profile/component
   :page-article    page-article/component
   :page-login      page-login/component
   :page-register   page-register/component
   :page-settings   page-settings/component
   :page-editor     page-editor/component})
