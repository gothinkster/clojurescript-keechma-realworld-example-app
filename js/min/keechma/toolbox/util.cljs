(ns keechma.toolbox.util
  (:require [clojure.string :as str]))

(defn ^:private class-name->string [class-name]
  (if (vector? class-name)
    (str/join " " (map (fn [c] (name (or c ""))) class-name))
    (name (or class-name ""))))

(defn class-names [checks]
  (str/join " " (filter (complement nil?)
                    (map (fn [[k v]]
                           (when (if (fn? v) (v) v) (class-name->string k))) checks))))
