(ns forms.dirty
  (:require [clojure.data :refer [diff]]))

(defn ^:private analyze-diff
  ([data] (analyze-diff data [] {:results [] :lengths {}}))
  ([data path results]
   (reduce-kv (fn [m k v]
                (if (or (vector? v) (map? v))
                  (let [{:keys [results lengths]} m
                        new-path (conj path k)
                        child-diff (analyze-diff v new-path m)
                        new-results (:results child-diff)
                        new-lengths (:lengths child-diff)
                        lengths-with-current (if (vector? v)
                                               (assoc lengths new-path (count v))
                                               lengths)]
                    {:results (concat results new-results)
                     :lengths (merge new-lengths lengths-with-current)})
                  (if (nil? v)
                    m
                    (assoc m :results (conj (:results m) (conj path k)))))) results data)))

(defn calculate-dirty-fields
  "Calculates the key paths that are dirty by diffing the initial and current form data."
  [prev current]
  (let [[p-diff c-diff] (into [] (diff prev current))
        p-report (analyze-diff p-diff)
        c-report (analyze-diff c-diff) 
        [p-lengths-diff c-lengths-diff] (into [] (diff (:lengths p-report) (:lengths c-report)))]
    (set (concat (:results p-report)
                 (:results c-report)
                 (keys p-lengths-diff)
                 (keys c-lengths-diff)))))
