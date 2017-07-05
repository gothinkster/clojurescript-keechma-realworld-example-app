(ns keechma.toolbox.dataloader.subscriptions
  (:require [keechma.toolbox.dataloader.core :refer [get-data get-meta]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn map-loader [loader]
  (fn [reqs]
    (map loader reqs)))

(defn make-subscriptions
  "Returns a map with subscriptions based on the datasources"
  [datasources edb-schema]
  (reduce (fn [acc [datasource-key datasource]]
            (-> acc
                (assoc (keyword (str (name datasource-key) "-meta"))
                       (fn [app-db-atom]
                         (reaction
                          (let [app-db @app-db-atom]
                            (get-meta app-db datasource-key)))))
                (assoc datasource-key
                       (fn [app-db-atom]
                         (reaction
                          (let [app-db @app-db-atom]
                            (get-data app-db edb-schema (:target datasource)))))))) {} datasources))
