(ns realworld.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [realworld.core-test]))

(doo-tests 'realworld.core-test)
