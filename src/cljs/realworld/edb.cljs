(ns realworld.edb
  (:require [keechma.toolbox.edb :refer-macros [defentitydb]]))

(def edb-schema
  {:user {:id :username}
   :tag {:id :tag}
   :article {:id :slug
             :relations {:author [:one :user]}}})

(defentitydb edb-schema)
