(ns realworld.ui.components.pure.form-inputs
  (:require [keechma.toolbox.forms.helpers :as forms-helpers]
            [realworld.forms.validators :as validators]
            [reagent.core :as r]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn make-input-with-composition-support [tag]
  ;; This function implements input fields that handle composition based inputs correctly
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

(defn controlled-input [ctx form-props attr {:keys [placeholder label input-type]}]
  [:fieldset.form-group
   [input-with-composition-support
    {:placeholder placeholder
     :on-change #(forms-ui/<on-change ctx form-props attr %)
     :on-blur #(forms-ui/<on-blur ctx form-props attr %)
     :value (forms-ui/value-in> ctx form-props attr)
     :type (or input-type :text)
     :class "form-control form-control-lg"}]
   [render-errors (forms-ui/errors-in> ctx form-props attr)]])

(defn controlled-textarea [ctx form-props attr {:keys [placeholder label rows]}]
  [:fieldset.form-group
   [textarea-with-composition-support
    {:placeholder placeholder
     :rows (or rows 8)
     :on-change #(forms-ui/<on-change ctx form-props attr %)
     :on-blur #(forms-ui/<on-blur ctx form-props attr %)
     :value (forms-ui/value-in> ctx form-props attr)
     :class "form-control form-control-lg"}]
   [render-errors (forms-ui/errors-in> ctx form-props attr)]])

(defn controlled-select [ctx form-props attr {:keys [placeholder label options]}]
  (let []
    [:fieldset.form-group
     [:select.form-control.form-control-lg
      {:on-change #(forms-ui/<on-change ctx form-props attr %)
       :value (or (forms-ui/value-in> ctx form-props attr) "")}
      [:option {:value ""} (or label placeholder)]
      (doall (map (fn [[value label]]
                    [:option {:value value :key value} label]) options))]
     [render-errors (forms-ui/errors-in> ctx form-props attr)]]))
