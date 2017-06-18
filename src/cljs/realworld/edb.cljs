(ns realworld.edb
  (:require [keechma.toolbox.edb :refer-macros [defentitydb]]))

(def edb-schema
  {:user    {:id :username}
   :tag     {:id :tag}
   :comment {:id        :id
             :relations {:author [:one :user]}}
   :article {:id        :slug
             :relations {:author  [:one :user]
                         :tagList [:many :tag]}}})

(defentitydb edb-schema)
