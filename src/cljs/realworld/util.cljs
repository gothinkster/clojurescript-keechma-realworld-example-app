(ns realworld.util
  (:require [cljsjs.moment]
            [cljsjs.marked]))

(defn format-date
  ([date] (format-date date "MMMM D, YYYY"))
  ([date format] (.format (js/moment date) format)))

(defn render-markdown [markdown]
  (js/marked (or markdown "")))
