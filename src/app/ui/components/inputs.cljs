(ns app.ui.components.inputs
  (:require [keechma.next.helix.core :refer
             [with-keechma use-meta-sub dispatch]]
            [keechma.next.helix.lib :refer [defnc]]
            [helix.core :as hx :refer [$ <> suspense]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            ["react" :as react]
            ["react-dom" :as rdom]
            [keechma.next.controllers.form :as form]
            [app.validators :refer [get-validator-message]]))

(defn get-element-props
  [default-props props]
  (let [element-props (into {} (filter (fn [[k v]] (simple-keyword? k)) props))]
    (reduce-kv
      (fn [m k v]
        (let [prev-v (get k m)
              val (cond (and (fn? prev-v) (fn? v))
                          (fn [& args] (apply prev-v args) (apply v args))
                        (and (= :class k) (:class m)) (flatten [v (:class m)])
                        :else v)]
          (assoc m k val)))
      default-props
      element-props)))

(defnc
  ErrorsRenderer
  [{:keechma.form/keys [controller], :input/keys [attr], :as props}]
  (let [errors-getter (hooks/use-callback [attr] #(form/get-errors-in % attr))
        errors (use-meta-sub props controller errors-getter)]
    (when-let [errors' (get-in errors [:$errors$ :failed])]
      (d/ul {:class "error-messages"}
            (map-indexed (fn [i e] (d/li {:key i} (get-validator-message e)))
                         errors')))))

(def Errors (with-keechma ErrorsRenderer))

(defnc TextAreaRenderer
       [{:keechma.form/keys [controller], :input/keys [attr], :as props}]
       (let [element-props (get-element-props {} props)
             value-getter (hooks/use-callback [attr] #(form/get-data-in % attr))
             value (use-meta-sub props controller value-getter)]
         (d/textarea
           {:value (str value),
            :on-change #(dispatch props
                                  controller
                                  :keechma.form.on/change
                                  {:value (.. % -target -value), :attr attr}),
            :on-blur #(dispatch props
                                controller
                                :keechma.form.on/blur
                                {:value (.. % -target -value), :attr attr}),
            & element-props})))

(def TextArea (with-keechma TextAreaRenderer))

(defnc
  TextInputRenderer
  [{:keechma.form/keys [controller], :input/keys [attr], :as props}]
  (let [element-props (get-element-props {} props)
        value-getter (hooks/use-callback [attr] #(form/get-data-in % attr))
        value (use-meta-sub props controller value-getter)]
    (d/input {:value (str value),
              :on-change #(dispatch props
                                    controller
                                    :keechma.form.on/change
                                    {:value (.. % -target -value), :attr attr}),
              :on-blur #(dispatch props
                                  controller
                                  :keechma.form.on/blur
                                  {:value (.. % -target -value), :attr attr}),
              & element-props})))

(def TextInput (with-keechma TextInputRenderer))

(defmulti input (fn [props] (:input/type props)))

(defmethod input :text [props] ($ TextInput {& props}))

(defmethod input :textarea [props] ($ TextArea {& props}))

(defmulti wrapped-input (fn [props] (:input/type props)))

(defmethod wrapped-input :default [props] (input props))

(defmethod wrapped-input :text
  [props]
  (d/fieldset {:class "form-group"}
              (input (assoc props :class "form-control form-control-lg"))
              ($ Errors {& props})))

(defmethod wrapped-input :textarea
  [props]
  (d/fieldset {:class "form-group"}
              (input (assoc props :class "form-control form-control-lg"))
              ($ Errors {& props})))