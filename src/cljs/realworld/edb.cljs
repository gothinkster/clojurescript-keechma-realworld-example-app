(ns realworld.edb
  (:require [keechma.toolbox.edb :refer-macros [defentitydb]]))

(def edb-schema
  {:user {:id :username}
   :tag {:id :tag}
   :article {:id :slug
             :relations {:author [:one :user]
                         :tagList [:many :tag]}}})

(defentitydb edb-schema)
