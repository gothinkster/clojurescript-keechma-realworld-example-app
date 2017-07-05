(ns forms.util
  (:require [clojure.string :as str]))

(defn keyword-or-integer [key]
  (cond
    (keyword? key) key
    (number? key) key
    (re-matches #"[0-9]+" key) (js/parseInt key 10)
    :else (keyword key)))

(defn key-to-path [key]
  (let [path (if (vector? key) key (str/split (name key) "."))]
    (vec (map keyword-or-integer path))))

(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))
