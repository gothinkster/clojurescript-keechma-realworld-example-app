(ns keechma.toolbox.pipeline.core
  (:require [cljs.core.async :refer [<! chan put!]]
            [promesa.core :as p]
            [promesa.impl :refer [Promise]]
            [keechma.controller :as controller])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defrecord Error [type message payload cause])

(defn ^:private error! [type payload]
  (->Error type nil payload nil))

(defprotocol ISideffect
  (call! [this controller app-db-atom]))

(defrecord CommitSideffect [value cb]
  ISideffect
  (call! [this _ app-db-atom]
    (let [cb (:cb this)]
      (reset! app-db-atom (:value this))
      (when cb (cb)))))

(defrecord SendCommandSideffect [command payload]
  ISideffect
  (call! [this controller _]
    (controller/send-command controller (:command this) (:payload this))))

(defrecord ExecuteSideffect [command payload]
  ISideffect
  (call! [this controller _]
    (controller/execute controller (:command this) (:payload this))))

(defrecord RedirectSideffect [params]
  ISideffect
  (call! [this controller _]
    (controller/redirect controller (:params this))))

(defrecord DoSideffect [sideffects]
  ISideffect
  (call! [this controller app-db-atom]
    (let [sideffects (:sideffects this)]
      (doseq [s sideffects]
        (call! s controller app-db-atom)))))

(defn commit!
  "
Commit pipeline sideffect.

Accepts `value` or `value` and `callback` as arguments. Value should be a new version of app-db.

```clojure
(commit! (assoc-in app-db [:kv :user] {:username \"retro\"}))

```

If the callback argument is present, this function will be called immediately after the app-db-atom is updated.
This is useful if you want to force Reagent to re-render the screen.
"
  ([value] (commit! value nil))
  ([value cb]
   (->CommitSideffect value cb)))

(defn execute!
  "
Execute pipeline sideffect.

Accepts `command` and `payload` arguments. Use this if you want to execute a command on the current controller.
"
  [command payload]
  (->ExecuteSideffect command payload))

(defn send-command!
  "
Send command pipeline sideffect.

Accepts `command` and `payload` arguments. Command should be a vector where first element is the controller topic, and the second
element is the command name. 
"
  [command payload]
  (->SendCommandSideffect command payload))

(defn redirect!
  "
Redirect pipeline sideffect.

Accepts `params` argument. Page will be redirected to a new URL which will be generated from the passed in params argument. If you need to 
access the current route data, it is present in the pipeline `app-db` argument under the `[:route :data]` path.
"
  [params]
  (->RedirectSideffect params))

(defn do!
  "
Runs multiple sideffects sequentially:

```clojure
(do!
  (commit! (assoc-in app-db [:kv :current-user] value))
  (redirect! {:page \"user\" :id (:id user)}))
```
"
  [& sideffects]
  (->DoSideffect sideffects))

(defn ^:private process-error [err]
  (cond
    (instance? Error err) err
    :else (->Error :default nil err nil)))

(defn ^:private is-promise? [val]
  (= Promise (type val)))

(defn ^:private promise->chan [promise]
  (let [promise-chan (chan)]
    (->> promise
         (p/map (fn [v] (put! promise-chan (if (nil? v) ::nil v))))
         (p/error (fn [e] (put! promise-chan (process-error e)))))
    promise-chan))

(def pipeline-errors
  {:async-sideffect "Returning sideffects from promises is not permitted. It is possible that application state was modified in the meantime"})

(declare run-pipeline)

(defn ^:private action-ret-val [action ctrl app-db-atom value error]
  (try
    (let [ret-val (if (nil? error) (action value @app-db-atom) (action value @app-db-atom error))]
      (if (:pipeline? (meta ret-val))
        {:value (ret-val ctrl app-db-atom value)
         :promise? true}
        {:value ret-val
         :promise? (is-promise? ret-val)}))
    (catch :default err
      (if (= ::pipeline-error (:type (.-data err)))
        (throw err)
        {:value (process-error err)
         :promise? false}))))

(defn ^:private extract-nil [value]
  (if (= ::nil value) nil value))

(defn ^:private pending-and-cancelable? [promise]
  (and (p/pending? promise) (fn? (.-cancel promise))))

(defn ^:private run-pipeline [pipeline ctrl app-db-atom value]
  (let [{:keys [begin rescue]} pipeline
        current-promise (atom nil)]
    (p/promise
     (fn [resolve reject on-cancel]
       (when (fn? on-cancel)
         (on-cancel (fn []
                      (let [c @current-promise]
                        (when (pending-and-cancelable? c)
                          (.cancel c))))))
       (go-loop [block :begin
                 actions begin
                 prev-value value
                 error nil]
         (if (not (seq actions))
           (resolve prev-value)
           (let [next (first actions)
                 {:keys [value promise?]} (action-ret-val next ctrl app-db-atom prev-value error)]

             (when promise?
               (reset! current-promise value))
             (let [sideffect? (satisfies? ISideffect value)
                   resolved-value (if promise? (extract-nil (<! (promise->chan value))) value)
                   error? (instance? Error resolved-value)]
               (when (and promise? sideffect?)
                 (throw (ex-info (:async-sideffect pipeline-errors) {:type ::pipeline-error})))
               (when sideffect?
                 (call! resolved-value ctrl app-db-atom))
               (cond
                 (and error? (= block :begin))
                 (if (seq rescue)
                   (recur :rescue rescue prev-value resolved-value)
                   (reject resolved-value))

                 (and error? (= block :rescue))
                 (reject error)

                 sideffect?
                 (recur block (rest actions) prev-value error)

                 :else
                 (recur block
                        (rest actions)
                        (if (nil? resolved-value) prev-value resolved-value)
                        error))))))))))

(defn ^:private make-pipeline [pipeline]
  (with-meta (partial run-pipeline pipeline) {:pipeline? true}))

(defn ^:private exclusive [pipeline]
  (let [current (atom nil)]
    (fn [ctrl app-db-atom value]
      (when-let [c @current]
        (when (pending-and-cancelable? c)
          (.cancel c)))
      (reset! current (pipeline ctrl app-db-atom value)))))
