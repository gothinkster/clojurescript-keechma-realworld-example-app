(ns realworld.ui.components.pure.form-inputs
  (:require [keechma.toolbox.forms.helpers :as forms-helpers]
            [realworld.forms.validators :as validators]
            [reagent.core :as r]))

(defn make-input-with-composition-support [tag]
  (fn [props]
    (let [el-ref-atom (atom nil)
          composition-atom? (atom false)]
      (r/create-class
       {:reagent-render (fn [props]
                          (let [props-ref  (or (:ref props) identity)
                                props-on-change (or (:on-change props) identity)
                                props-value (:value props)
                                props-without-value (dissoc props :value)]
                            [tag (merge props-without-value
                                        {:on-change (fn [e]
                                                      (when-not @composition-atom?
                                                        (props-on-change e)))
                                         :on-composition-start #(reset! composition-atom? true)
                                         :on-composition-update #(reset! composition-atom? true)
                                         :on-composition-end (fn [e]
                                                               (reset! composition-atom? false)
                                                               (props-on-change e))
                                         :default-value props-value
                                         :ref (fn [el]
                                                (reset! el-ref-atom el)
                                                (props-ref el))})]))
        :component-will-update (fn [comp [_ new-props _]]
                                 (let [el @el-ref-atom
                                       composition? @composition-atom?]
                                   (when (and el (not composition?))
                                     (set! (.-value el) (or (:value new-props) "")))))}))))

(def input-with-composition-support (make-input-with-composition-support :input))
(def textarea-with-composition-support (make-input-with-composition-support :textarea))

(defn render-errors [attr-errors]
  (when-let [errors (get-in attr-errors [:$errors$ :failed])]
    (into [:ul.error-messages]
          (doall (map (fn [e]
                        [:li (validators/get-validator-message e)])
                      errors)))))

(defn controlled-input [{:keys [form-state helpers placeholder label attr input-type]}]
  (let [{:keys [on-change on-blur]} helpers]
    [:fieldset.form-group
     [input-with-composition-support
      {:placeholder placeholder
       :on-change (on-change attr)
       :on-blur (on-blur attr)
       :type (or input-type :text)
       :value (forms-helpers/attr-get-in form-state attr)
       :class "form-control form-control-lg"}]
     (render-errors (forms-helpers/attr-errors form-state attr))]))

(defn controlled-textarea [{:keys [form-state helpers placeholder label attr rows]}]
  (let [{:keys [on-change on-blur]} helpers]
    [:fieldset.form-group
     [textarea-with-composition-support
      {:placeholder placeholder
       :rows (or rows 8)
       :on-change (on-change attr)
       :on-blur (on-blur attr)
       :value (forms-helpers/attr-get-in form-state attr)
       :class "form-control form-control-lg"}]
     (render-errors (forms-helpers/attr-errors form-state attr))]))

(defn controlled-select [{:keys [form-state helpers placeholder label attr options]}]
  (let [{:keys [on-change select]} helpers]
    [:fieldset.form-group
     [:select.form-control.form-control-lg
      {:on-change (on-change attr)
       :value (or (forms-helpers/attr-get-in form-state attr) "")}
      [:option {:value ""} (or label placeholder)]
      (doall (map (fn [[value label]]
                    [:option {:value value :key value} label]) options))]
     (render-errors (forms-helpers/attr-errors form-state attr))]))
