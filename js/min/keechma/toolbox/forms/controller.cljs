(ns keechma.toolbox.forms.controller
  (:require [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.forms.core :as core]
            [keechma.toolbox.forms.helpers :as helpers]
            [keechma.toolbox.forms.cursor :as cursor]
            [forms.dirty :refer [calculate-dirty-fields]]
            [forms.core :as keechma-core]
            [forms.util :as keechma-forms-util]
            [promesa.core :as p]
            [reagent.core :as reagent]))

(defn get-form-record [forms-config [form-type _]]
  (get forms-config form-type))

(defn get-form-state [app-db form-props]
  (get-in app-db [:kv core/id-key :states form-props]))

(defn get-forms [app-db]
  (or (get-in app-db [:kv core/id-key]) {:order [] :states {}}))

(defn add-form-to-app-db [app-db form-props form-state]
  (let [forms (get-forms app-db)
        forms-order (vec (filter #(not= form-props %1) (:order forms)))
        forms-states (:states forms)]
    (assoc-in app-db [:kv core/id-key]
              (assoc forms
                     :states (assoc forms-states form-props form-state)
                     :order (conj forms-order form-props)))))

(defn promise-or-pipeline
  ([res] (promise-or-pipeline res identity))
  ([res processor]
   (let [res-meta (meta res)]
     (if (:pipeline? res-meta)
       (with-meta
         (fn [& args]
           (->> (apply res args)
                (p/map processor)))
         res-meta)
       (->> (p/promise res)
            (p/map processor))))))

(defn get-initial-state [app-db forms-config value]
  (let [form-props (:form-props value)
        form-record (get-form-record forms-config form-props)]
    (promise-or-pipeline
     (core/get-data form-record app-db form-props)
     #(assoc value :initial-data %1))))

(defn should-immediately-validate? [attr-valid? element]
  (cond
    (not attr-valid?) true
    (nil? element) true
    (= "text" (.-type element)) false
    (= "textarea" (.-tagName element)) false
    :else true))

(defn premount-form [app-db {:keys [form-props]}]
  (add-form-to-app-db app-db form-props
                      {:submit-attempted? false
                       :dirty-paths (set {})
                       :cached-dirty-paths (set {})
                       :data {}
                       :initial-data {}
                       :errors {}
                       :state {:type :mounting}}))

(defn mount-form [app-db forms-config {:keys [form-props initial-data]}]
  (let [form-record (get-form-record forms-config form-props)
        processed-data (core/process-in form-record app-db form-props initial-data)
        form-state (get-form-state app-db form-props)]
    (assoc-in app-db [:kv core/id-key :states form-props]
              (assoc form-state
                     :initial-data processed-data
                     :data processed-data
                     :state {:type :mounted}))))

(defn unmount-form [app-db {:keys [form-props]}]
  (let [forms (get-forms app-db)
        forms-order (vec (filter #(not= form-props %1) (:order forms)))
        form-states (dissoc (:states forms) form-props)]
    (assoc-in app-db [:kv core/id-key] (assoc forms :order forms-order :states form-states))))

(defn update-form-state [app-db forms-config type cause {:keys [form-props]}]
  (let [form-state (get-form-state app-db form-props)]
    (assoc-in app-db [:kv core/id-key :states form-props :state]
              (if cause
                {:type type :cause cause}
                {:type type}))))

(defn update-form-data [app-db forms-config {:keys [form-props data]}]
  (let [form-state (get-form-state app-db form-props)]
    (assoc-in app-db [:kv core/id-key :states form-props :data] data)))

(defn mark-dirty-and-validate
  ([form-record form-state] (mark-dirty-and-validate form-record form-state true))
  ([form-record form-state dirty-only?]
   (if dirty-only?
     (let [errors (core/validate form-record (:data form-state))
           dirty-paths (calculate-dirty-fields (:initial-data form-state) (:data form-state))]
       (assoc form-state
              :errors errors
              :dirty-paths (set dirty-paths)))
     (let [errors (core/validate form-record (:data form-state))
           cached-dirty-paths (:cached-dirty-paths form-state)
           dirty-paths (keechma-core/errors-keypaths errors)]
       (assoc form-state
              :errors errors
              :dirty-paths (set dirty-paths)
              :cached-dirty-paths (set (concat cached-dirty-paths dirty-paths)))))))

(defn handle-on-change [app-db forms-config [form-props path element value caret-pos]]
  (let [path (keechma-forms-util/key-to-path path)
        form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)
        old-value (helpers/attr-get-in form-state path)
        formatter (core/format-attr-with form-record path)
        formatted-value (if formatter (formatter value old-value) value)
        processor (core/process-attr-with form-record path)
        new-state (if processor
                    (processor app-db form-props form-state path formatted-value)
                    (helpers/attr-assoc-in form-state path formatted-value))
        attr-valid? (helpers/attr-valid? form-state path)
        current-form-state (get-in app-db [:kv core/id-key :states form-props])]

    (when (nil? current-form-state)
      (throw (ex-info "Form is not mounted" form-props)))
 
    [(assoc-in app-db [:kv core/id-key :states form-props]
                (if (should-immediately-validate? attr-valid? element)
                  (mark-dirty-and-validate form-record new-state)
                  new-state))
     (when (and element formatter caret-pos)
       (fn []
         (cursor/set-caret-pos! element
                                (:format-chars (meta formatter))
                                value
                                formatted-value
                                (formatter old-value nil)
                                caret-pos)
         (reagent/flush)))]))

(defn handle-on-blur [app-db forms-config [form-props path]]
  (let [form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)]
    (assoc-in app-db [:kv core/id-key :states form-props]
              (mark-dirty-and-validate form-record form-state))))

(defn handle-on-validate [app-db forms-config [form-props dirty-only?]]
  (let [form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)]
    (assoc-in app-db [:kv core/id-key :states form-props]
              (mark-dirty-and-validate form-record form-state dirty-only?))))

(defn handle-on-submit [app-db forms-config data]
  (let [form-props (:form-props data)
        form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)
        new-form-state (assoc (mark-dirty-and-validate form-record form-state false)
                              :submit-attempted? true)
        new-app-db (assoc-in app-db [:kv core/id-key :states form-props] new-form-state)]
    (if (helpers/form-invalid? new-form-state)
      (pp/commit! new-app-db)
      (pp/do!
       (pp/commit! new-app-db)
       (pp/execute! :submit-form data)))))

(defn submit-form [app-db forms-config data]
  (let [form-props (:form-props data)
        form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)
        processed-data (core/process-out form-record app-db form-props (:data form-state))]
    (promise-or-pipeline
     (core/submit-data form-record app-db form-props processed-data)
     #(assoc data :result %1))))

(defn update-form [app-db forms-config data]
  (let [form-props (:form-props data)
        form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)
        processed-data (core/process-out form-record app-db form-props (:data form-state))]
    (promise-or-pipeline
     (core/submit-data form-record app-db form-props processed-data)
     #(assoc data :result %1))))

(defn handle-on-update-success [app-db forms-config value]
  (let [{:keys [form-props result]} value
        form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)]
    (assoc value :data (core/on-update-success form-record app-db form-props (:data form-state) result))))

(defn handle-on-update-error [app-db forms-config error value]
  (let [{:keys [form-props result]} value
        form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)]
    (assoc value :data (core/on-update-error form-record app-db form-props result error))))

(defn handle-on-submit-success [app-db forms-config {:keys [form-props result]}]
  (let [form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)]
    (core/on-submit-success form-record app-db form-props result)))

(defn handle-on-submit-error [app-db forms-config error {:keys [form-props result]}]
  (let [form-state (get-form-state app-db form-props)
        form-record (get-form-record forms-config form-props)]
    (core/on-submit-error form-record app-db form-props result error)))

(defn actions [forms-config]
  {:mount-form  (pipeline! [value app-db]
                  {:form-props value}
                  (pp/commit! (premount-form app-db value))
                  (get-initial-state app-db forms-config value)
                  (pp/commit! (mount-form app-db forms-config value))
                  (rescue! [error]
                    (pp/commit! (update-form-state app-db forms-config
                                                   :mount-failed (:payload error) value))))

   :unmount-form (pipeline! [value app-db]
                   (pp/commit! (unmount-form app-db {:form-props value})))

   :submit-form (pipeline! [value app-db]
                  (pp/commit! (update-form-state app-db forms-config :submitting nil value))
                  (submit-form app-db forms-config value)
                  (pp/commit! (update-form-state app-db forms-config
                                                 :submitted nil value))
                  (handle-on-submit-success app-db forms-config value)
                  (rescue! [error]
                    (pp/commit! (update-form-state app-db forms-config
                                                   :submit-failed (:payload error) value))
                    (handle-on-submit-error app-db forms-config error value)))

   :update-form   (pipeline! [value app-db]
                    {:form-props value}
                    (pp/commit! (update-form-state app-db forms-config :updating nil value))
                    (update-form app-db forms-config value)
                    (pp/commit!
                       (-> app-db
                           (update-form-data forms-config (handle-on-update-success app-db forms-config value))
                           (update-form-state forms-config :updated nil value)))
                    (pp/send-command! [core/id-key :updated-form] (:form-props value))
                    (rescue! [error]
                      (pp/commit!
                       (-> app-db
                           (update-form-data forms-config (handle-on-update-error app-db forms-config error value))
                           (update-form-state forms-config :update-failed (:payload error) value)))))

   :on-change   (pipeline! [value app-db]
                  (apply pp/commit! (handle-on-change app-db forms-config value)))

   :on-blur     (pipeline! [value app-db]
                  (pp/commit! (handle-on-blur app-db forms-config value)))

   :on-validate (pipeline! [value app-db]
                  (pp/commit! (handle-on-validate app-db forms-config value)))

   :on-submit   (pipeline! [value app-db]
                  {:form-props value}
                  (handle-on-submit app-db forms-config value))})


(defn make-controller [forms-config]
  (pp-controller/constructor (fn [] true) (actions forms-config)))

(defn register
  ([forms-config] (register {} forms-config))
  ([controllers forms-config]
   (assoc controllers core/id-key (make-controller forms-config))))
