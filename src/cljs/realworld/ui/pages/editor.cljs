(ns realworld.ui.pages.editor
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> route>]]
            [keechma.toolbox.forms.helpers :as forms-helpers]
            [keechma.toolbox.forms.core :as forms-core]
            [realworld.ui.components.pure.form-inputs :refer [controlled-input controlled-textarea]]
            [realworld.ui.components.pure.form-api-errors :as form-api-errors]
            [clojure.string :as str]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn tag-list [form-state]
  (let [tags (-> (get-in form-state [:data :tags])
                 (or "")
                 (str/split #","))]
    (set (filter (complement empty?) (map str/trim tags)))))

(defn render [ctx]
  (let [form-props [:editor (or (:subpage (route> ctx)) :new)]
        form-state (forms-ui/form-state> ctx form-props)]
    [:div.auth-page>div.container.page>div.row>div.col-md-10.offset-md-1.col-xs-12
     [form-api-errors/render form-state]
     [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
      [controlled-input ctx form-props :title {:placeholder "Article Title"}]
      [controlled-input ctx form-props :description {:placeholder "What's this article about?"}] 
      [controlled-textarea ctx form-props :body {:placeholder "Write your article (in markdown)"}]
      [controlled-input ctx form-props :tags {:placeholder "Enter tags"}]
      [:div
       [:ul.tag-list
        (doall (map (fn [t]
                      [:li.tag-default.tag-pill.tag-outline
                       {:key t} (str/trim t)])
                    (tag-list form-state)))]]
      [:button.btn.btn-lg.btn-primary.pull-xs-right "Publish Article"]]]))

(def component
  (ui/constructor {:renderer render}))
