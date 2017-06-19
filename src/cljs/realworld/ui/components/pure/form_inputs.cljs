(ns realworld.ui.components.pure.form-inputs
  (:require [keechma.toolbox.forms.helpers :as forms-helpers]
            [realworld.forms.validators :as validators]))

(defn render-errors [attr-errors]
  (when-let [errors (get-in attr-errors [:$errors$ :failed])]
    (into [:ul.error-messages]
          (doall (map (fn [e]
                        [:li (validators/get-validator-message e)])
                      errors)))))

(defn controlled-input [{:keys [form-state helpers placeholder label attr input-type]}]
  (let [{:keys [on-change on-blur]} helpers]
    [:fieldset.form-group
     [:input.form-control.form-control-lg
      {:placeholder placeholder
       :on-change (on-change attr)
       :on-blur (on-blur attr)
       :type (or input-type :text)
       :value (forms-helpers/attr-get-in form-state attr)}]
     (render-errors (forms-helpers/attr-errors form-state attr))]))

(defn controlled-textarea [{:keys [form-state helpers placeholder label attr rows]}]
  (let [{:keys [on-change on-blur]} helpers]
    [:fieldset.form-group
     [:textarea.form-control.form-control-lg
      {:placeholder placeholder
       :rows (or rows 8)
       :on-change (on-change attr)
       :on-blur (on-blur attr)
       :value (forms-helpers/attr-get-in form-state attr)}]
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
