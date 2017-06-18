(ns realworld.ui
  (:require [realworld.ui.layout :as layout]
            [realworld.ui.header :as header]
            [realworld.ui.footer :as footer]))

(def ui
  {:main   layout/component
   :header header/component
   :footer footer/component})
