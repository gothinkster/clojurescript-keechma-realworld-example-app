(ns realworld.subscriptions
  (:require [keechma.toolbox.dataloader.subscriptions :refer [make-subscriptions]]
            [realworld.datasources :refer [datasources]]
            [realworld.edb :refer [edb-schema]]
            [keechma.toolbox.forms.helpers :as forms-helpers]))

(def subscriptions
  (merge {:form-state forms-helpers/form-state-sub}
         (make-subscriptions datasources edb-schema)))
