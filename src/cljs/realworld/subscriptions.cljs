(ns realworld.subscriptions
  (:require [keechma.toolbox.dataloader.subscriptions :refer [make-subscriptions]]
            [realworld.datasources :refer [datasources]]
            [realworld.edb :refer [edb-schema]]))

(def subscriptions
  (merge {}
         (make-subscriptions datasources edb-schema)))
