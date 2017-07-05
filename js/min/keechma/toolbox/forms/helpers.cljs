(ns keechma.toolbox.forms.helpers
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.forms.core :as forms-core]
            [reagent.ratom]
            [forms.util :as keechma-forms-util]
            [forms.core :as keechma-forms-core])
  (:require-macros
   [reagent.ratom :refer [reaction]]))

(defn form-state [ctx form-props]
  (ui/subscription ctx :form-state [form-props]))

(defn form-state-sub [app-db form-props]
  (reaction
   (get-in @app-db [:kv forms-core/id-key :states form-props])))

(defn attr-assoc-in [form-state path value]
  (assoc form-state :data
         (assoc-in (:data form-state) (keechma-forms-util/key-to-path path) value)))

(defn attr-get-in [form-state path]
  (get-in (:data form-state) (keechma-forms-util/key-to-path path)))

(defn attr-errors [form-state path]
  (let [path (keechma-forms-util/key-to-path path)
        is-dirty? (contains? (:dirty-paths form-state) path)]
    (when is-dirty?
      (get-in (:errors form-state) path))))

(defn attr-valid? [form-state path]
  (nil? (attr-errors form-state path)))

(defn form-errors [form-state]
  (:errors form-state))

(defn form-valid? [form-state]
  (empty? (:errors form-state)))

(defn form-invalid? [form-state]
  (not (form-valid? form-state)))

(defn form-submit-attempted? [form-state]
  (:submit-attempted? form-state))

(defn mark-dirty-paths
  ([form-state dirty-paths] (mark-dirty-paths form-state dirty-paths false))
  ([form-state dirty-paths cache?]
   (let [cached-dirty-paths (:cached-dirty-key-paths form-state)
         new-dirty-paths (set (concat dirty-paths cached-dirty-paths))
         new-cached-dirty-paths (if cache? new-dirty-paths cached-dirty-paths)]
     (assoc :dirty-paths new-dirty-paths
            :cached-dirty-paths new-cached-dirty-paths))))

(defn errors->paths [errors]
  (set (keechma-forms-core/errors-keypaths errors)))

(defn make-component-helpers [ctx form-props]
  {:on-change (fn [path]
                (let [path (keechma-forms-util/key-to-path path)]
                  (fn [e]
                    (let [el (.-target e)
                          value (.-value el)
                          caret-pos (if (= "text" (.-type el)) (.-selectionStart el) nil)]
                      (ui/send-command ctx :on-change [form-props path el value caret-pos])))))
   :on-blur (fn [path]
                (let [path (keechma-forms-util/key-to-path path)]
                  (fn [e]
                    (ui/send-command ctx :on-blur [form-props path]))))
   :validate (fn [& args]
               (let [dirty-only? (or (first args) false)]
                 (ui/send-command ctx :on-validate [form-props dirty-only?])))
   :set-value (fn [path value]
                (let [path (keechma-forms-util/key-to-path path)]
                  (ui/send-command ctx :on-change [form-props path nil value nil])))
   :submit (fn [e]
             (when e (.preventDefault e))
             (ui/send-command ctx :on-submit form-props))})
