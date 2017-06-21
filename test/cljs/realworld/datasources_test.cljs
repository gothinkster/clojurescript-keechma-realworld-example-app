(ns realworld.datasources-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [realworld.datasources :as d]))

(deftest tags-datasource-params
  (let [params (:params d/tags-datasource)]
    (is (nil? (params nil {:page "article"} nil)))
    (is (= {:url "/tags"} (params nil {:page "home"} nil)))))

(deftest profile-user-datasource-params
  (let [params (:params d/profile-user-datasource)]
    (is (nil? (params nil {:page "home"} {})))
    (is (nil? (params nil {:page "profile"} {})))
    (let [profile-params (params nil {:page "profile" :subpage "retro"} {:jwt "jwt"})]
      (is (= "/profiles/retro" (:url profile-params)))
      (is (fn? (:get-from-app-db profile-params)))
      (is (= {:authorization "Token jwt"} (:headers profile-params))))))
