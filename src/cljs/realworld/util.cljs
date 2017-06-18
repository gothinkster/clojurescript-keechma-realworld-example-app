(ns realworld.util
  (:require [cljsjs.moment]))

(defn format-date
  ([date] (format-date date "MMMM D, YYYY"))
  ([date format] (.format (js/moment date) format)))
