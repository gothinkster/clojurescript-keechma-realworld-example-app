(ns realworld.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [realworld.datasources-test]))

(doo-tests 'realworld.datasources-test)
