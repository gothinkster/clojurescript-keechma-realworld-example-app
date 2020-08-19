(ns app.util
  (:require ["moment" :as moment]
            ["marked" :as marked]))

(defn format-date
  ([date] (format-date date "MMMM D, YYYY"))
  ([date format] (.format (moment date) format)))

(defn render-markdown [markdown] (marked (or markdown "")))