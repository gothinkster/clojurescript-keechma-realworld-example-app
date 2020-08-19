(ns app.ui.pages.editor
  (:require [keechma.next.helix.core :refer
             [with-keechma dispatch call use-sub use-meta-sub]]
            [keechma.next.controllers.pipelines :refer [throw-promise!]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            ["react" :as react]
            ["react-dom" :as rdom]
            [app.ui.components.inputs :refer [wrapped-input]]
            [keechma.next.controllers.router :as router]
            [clojure.string :as str]
            [app.ui.components.form-errors :refer [FormErrors]]))


(defn tag-list
  [form-state]
  (let [tags (-> (get-in form-state [:data :tags])
                 (or "")
                 (str/split #","))]
    (set (filter (complement empty?) (map str/trim tags)))))

(defnc
  EditorRenderer
  [props]
  (throw-promise! (use-meta-sub props :editor-form) :keechma.on/start)
  (let [form-state (:keechma.next.controllers.form/form
                     (use-meta-sub props :editor-form))]
    (d/div
      {:class "auth-page"}
      (d/div
        {:class "container page"}
        (d/div
          {:class "row"}
          (d/div
            {:class "col-md-10 offset-md-1 col-xs-12"}
            ($ FormErrors {:controller :register-form})
            (d/form
              {:on-submit (fn [e]
                            (.preventDefault e)
                            (dispatch props :editor-form :keechma.form/submit))}
              (wrapped-input {:keechma.form/controller :editor-form,
                              :input/type :text,
                              :input/attr :title,
                              :placeholder "Article Title"})
              (wrapped-input {:keechma.form/controller :editor-form,
                              :input/type :text,
                              :input/attr :description,
                              :placeholder "What's this article about?"})
              (wrapped-input {:keechma.form/controller :editor-form,
                              :input/type :textarea,
                              :input/attr :body,
                              :rows 15,
                              :placeholder "Write your article (in markdown)"})
              (wrapped-input {:keechma.form/controller :editor-form,
                              :input/type :text,
                              :input/attr :tags,
                              :placeholder "Enter tags"})
              (d/div
                (d/ul {:class "tag-list"}
                      (doall
                        (map (fn [t]
                               (d/li {:class "tag-default tag-pill tag-outline",
                                      :key t}
                                     (str/trim t)))
                          (tag-list form-state)))))
              (d/button {:class "btn btn-lg btn-primary pull-xs-right"}
                        "Publish Article"))))))))

(def Editor (with-keechma EditorRenderer))
