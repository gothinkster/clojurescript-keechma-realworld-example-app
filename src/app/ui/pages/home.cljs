(ns app.ui.pages.home
  (:require [keechma.next.helix.core :refer
             [with-keechma use-sub use-meta-sub dispatch call]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.ui.components.articles :refer [Articles]]
            [keechma.next.controllers.pipelines :refer [throw-promise!]]
            [keechma.next.controllers.router :as router]))

(defnc
  Tabs
  [props]
  (let [role (use-sub props :role)
        {:keys [tag subpage]} (use-sub props :router)
        is-global-feed (and (not tag) (not subpage))
        is-personal-feed (= "personal" subpage)]
    (d/div
      {:class "articles-toggle"}
      (d/ul
        {:class "nav nav-pills outline-active"}
        (when (= :user role)
          (d/li
            {:class "nav-item"}
            (d/a {:class ["nav-link" (when is-personal-feed "active")],
                  :href (router/get-url props
                                        :router
                                        {:page "home", :subpage "personal"})}
                 "Your Feed")))
        (d/li {:class "nav-item"}
              (d/a {:class ["nav-link" (when is-global-feed "active")],
                    :href (router/get-url props :router {:page "home"})}
                   "Global Feed"))
        (when tag
          (d/li {:class "nav-item"}
                (d/a {:class "nav-link active",
                      :href
                        (router/get-url props :router {:page "home", :tag tag})}
                     tag)))))))

(defnc
  TagList
  [props]
  (throw-promise! (use-meta-sub props :tags) :keechma.on/start)
  (let [tags (use-sub props :tags)]
    (<> (d/p "Popular Tags")
        (d/div {:class "tag-list"}
               (map (fn [{:keys [tag]}]
                      (d/a {:class "tag-pill tag-default",
                            :key tag,
                            :href (router/get-url props
                                                  :router
                                                  {:page "home", :tag tag})}
                           tag))
                 tags)))))

(defnc
  HomeRenderer
  [props]
  (let [jwt (use-sub props :jwt)]
    (d/div
      {:class "home-page"}
      (d/div {:class "banner"}
             (d/div {:class "container"}
                    (d/h1 {:class "logo-font"} "conduit")
                    (d/p "A place to share your knowledge")))
      (d/div
        {:class "container page"}
        (d/div {:class "row"}
               (d/div {:class "col-md-9"} ($ Tabs {& props}) ($ Articles))
               (d/div {:class "col-md-3"}
                      (d/div {:class "sidebar"}
                             (suspense {:fallback (d/div "Loading Tags...")}
                                       ($ TagList {& props})))))))))

(def Home (with-keechma HomeRenderer))