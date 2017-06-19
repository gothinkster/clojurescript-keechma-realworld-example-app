(ns realworld.subscriptions
  (:require [keechma.toolbox.dataloader.subscriptions :refer [make-subscriptions]]
            [realworld.datasources :refer [datasources]]
            [realworld.edb :refer [edb-schema]]
            [keechma.toolbox.forms.helpers :as forms-helpers])
   (:require-macros [reagent.ratom :refer [reaction]]))

(defn get-kv [key]
  (fn [app-db-atom]
    (reaction
     (get-in @app-db-atom (flatten [:kv key])))))

(def subscriptions
  (merge {:form-state forms-helpers/form-state-sub
          :initialized? (get-kv :initialized?)}
         (make-subscriptions datasources edb-schema)))
