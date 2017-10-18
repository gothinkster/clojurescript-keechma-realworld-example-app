(ns keechma.toolbox.dataloader.core
  (:require [com.stuartsierra.dependency :as dep]
            [cljs.core.async :refer [<! chan put!]]
            [promesa.core :as p]
            [entitydb.core :as edb])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(def id-key ::dataloader)

(defrecord EntityDBWithRelations [data relations])

(defn target->edb [target]
  [(keyword (namespace target))
   (keyword (name target))])

(defn save-kv-data [app-db target data]
  (assoc-in app-db target data))

(defn insert-relations [edb-schema edb relations]
  (reduce-kv (fn [acc k v]
               (let [items (if (map? v) [v] v)]
                 (reduce (fn [acc2 item]
                           (edb/insert-item edb-schema acc2 k item))
                         acc items))) edb relations))

(defn save-edb-named-item [app-db edb-schema target data]
  (let [edb (:entity-db app-db)
        [entity named-item] (target->edb target)
        insert-named-item (partial edb/insert-named-item edb-schema)
        [data relations] (if (= EntityDBWithRelations (type data))
                           [(:data data) (:relations data)]
                           [data nil])]
    (assoc app-db :entity-db
           (if data
             (-> (insert-relations edb-schema edb relations)
                 (insert-named-item entity named-item data))
             (edb/remove-named-item edb entity named-item)))))

(defn save-edb-collection [app-db edb-schema target data]
  (let [edb (:entity-db app-db)
        [entity collection] (target->edb target)
        insert-collection (partial edb/insert-collection edb-schema)
        [data relations] (if (= EntityDBWithRelations (type data))
                           [(:data data) (:relations data)]
                           [data nil])]
    (assoc app-db :entity-db
           (if (seq data)
             (-> (insert-relations edb-schema edb relations)
                 (insert-collection entity collection data))
             (edb/remove-collection edb entity collection)))))

(defn get-edb-named-item [app-db edb-schema target]
  (let [edb (:entity-db app-db)
        [entity named-item] (target->edb target)]
    (edb/get-named-item edb-schema edb entity named-item)))

(defn get-edb-collection [app-db edb-schema target]
  (let [edb (:entity-db app-db)
        [entity collection] (target->edb target)]
    (edb/get-collection edb-schema edb entity collection)))

(defn get-kv-data [app-db target]
  (get-in app-db target))

(defn get-meta [app-db datasource-key]
  (get-in app-db [:kv id-key datasource-key]))

(defn save-meta [app-db datasource-key meta]
  (assoc-in app-db [:kv id-key datasource-key] meta))

(defn save-data [app-db edb-schema target data]
  (let [target-start (first target)]
    (case target-start
      :edb/named-item (save-edb-named-item app-db edb-schema (last target) data)
      :edb/collection (save-edb-collection app-db edb-schema (last target) data)
      (save-kv-data app-db target data))))

(defn get-data [app-db edb-schema target]
  (let [target-start (first target)]
    (case target-start
      :edb/named-item (get-edb-named-item app-db edb-schema (last target))
      :edb/collection (get-edb-collection app-db edb-schema (last target))
      (get-kv-data app-db target))))

(defn datasources->loaders [app-datasources datasources app-db results-chan edb-schema]
  (let [route-params (get-in app-db [:route :data])]
    (loop [ds datasources
           loaders {}]
      (if (not (seq ds))
        loaders
        (let [[key val] (first ds)
              prev {:data (get-data app-db edb-schema (:target val))
                    :meta (get-meta app-db key)}
              params-fn (or (:params val) (fn [& args]))
              deps (reduce
                    (fn [acc dep-key]
                      (let [dep (get app-datasources dep-key)]
                        (assoc acc dep-key (get-data app-db edb-schema (:target dep))))) {} (:deps val))
              params (params-fn prev route-params deps)
              loader (or (:loader val) identity)
              target (:target val)]
          (let [current-loaders (or (get loaders loader) [])]
            (recur (rest ds)
                   (assoc loaders loader
                          (conj current-loaders
                                {:params params
                                 :prev prev
                                 :datasource key
                                 :app-db app-db
                                 :target target})))))))))

(defn start-loaders! [app-db-atom app-datasources datasources results-chan edb-schema context]
  (let [app-db @app-db-atom
        loaders (datasources->loaders app-datasources datasources app-db results-chan edb-schema)]
    (doseq [[loader pending-datasources] loaders]
      (let [promises (loader pending-datasources context)]
        (doseq [[idx loader-promise] (map-indexed vector promises)]
          (->> (p/promise loader-promise)
               (p/map (fn [value]
                        (let [pending-datasource (get pending-datasources idx)
                              processor (or (get-in datasources [(:datasource pending-datasource) :processor]) identity)]
                          (put! results-chan [:ok (assoc pending-datasource
                                                         :value (processor value pending-datasource))]))))
               (p/error (fn [error]
                          (let [pending-datasource (get pending-datasources idx)]                            
                            (put! results-chan [:error (assoc pending-datasource :error error)]))))))))))

(defn has-pending-datasources? [app-db]
  (let [statuses (map (fn [[_ val]] (get val :status)) (get-in app-db [:kv id-key]))]
    (boolean (some #(= :pending %) statuses))))

(defn store-datasource! [app-db-atom edb-schema payload]
  (let [app-db @app-db-atom
        datasource-key (:datasource payload)
        value (:value payload)
        value-keys (if (map? value) (set (keys value)) #{})
        [res-data res-meta] (if (= #{:data :meta} value-keys) [(:data value) (:meta value)] [value {}])]
    (reset! app-db-atom
            (-> app-db
                (save-meta datasource-key
                           {:status :completed
                            :params (:params payload)
                            :error nil
                            :meta res-meta
                            :prev (merge {:value nil :status nil :error nil :params nil} (:prev payload))})
                (save-data edb-schema (:target payload) res-data)))))

(defn start-dependent-loaders! [app-db-atom app-datasources datasources results-chan edb-schema context]
  (let [app-db @app-db-atom
        statuses (reduce (fn [acc datasource-key]
                           (assoc acc datasource-key (:status (get-meta app-db datasource-key))))
                         {} (keys app-datasources))
        fulfilled  (reduce (fn [acc [datasource-key val]]
                             (if (and
                                  (= :pending (:status (get-meta app-db datasource-key)))
                                  (every? #(= :completed %) (vals (select-keys statuses (:deps val)))))
                               (assoc acc datasource-key val)
                               acc))
                           {} datasources)]
    (start-loaders! app-db-atom app-datasources fulfilled results-chan edb-schema context)))

(defn store-datasource-error! [app-db edb-schema payload]
  (let [datasource-key (:datasource payload)]
    (-> app-db
        (save-meta datasource-key
                   {:status :error
                    :prev nil
                    :params (:params payload)
                    :error (:error payload)})
        (save-data edb-schema (:target payload) nil))))

(defn mark-dependent-errors! [app-db app-datasources datasources edb-schema payload]
  (reduce (fn [acc [datasource-key val]]
            (-> app-db
                (save-meta datasource-key
                           {:status :error
                            :prev nil
                            :params nil
                            :error (:error payload)})
                (save-data edb-schema (:target val) nil)))
          app-db datasources))

(defn mark-pending! [app-db-atom edb-schema datasources]
  (let [app-db @app-db-atom]
    (reset! app-db-atom
            (reduce
             (fn [acc [datasource-key val]]
               (let [prev-value (get-data acc edb-schema (:target val))
                     prev-datasource (get-meta app-db datasource-key)]
                 (save-meta acc datasource-key
                            {:status :pending
                             :prev (-> prev-datasource
                                       (dissoc :prev)
                                       (assoc :value prev-value))})))
             app-db datasources))))

(defn datasource-params [datasources datasource-key datasource app-db edb-schema]
  (let [params-fn (or (:params datasource) (fn [& args]))
        prev {:meta (get-meta app-db datasource-key)
              :data (get-data app-db edb-schema (:target datasource))}
        route (get-in app-db [:route :data])
        deps (reduce (fn [acc dep-key]
                       (assoc acc dep-key (get-data app-db edb-schema (:target (get datasources dep-key)) )))
                     {} (:deps datasource))]
    (params-fn prev route deps)))

(defn deps-fulfilled? [app-db datasources-plan datasource]
  (reduce (fn [fulfilled? dep-key]
            (let [dep (get datasources-plan dep-key)]
              (and fulfilled?
                   (:deps-fulfilled? dep)
                   (not (:reload? dep)))))
          true (:deps datasource)))

(defn datasources-load-plan [app-db datasources datasources-order edb-schema]
  (loop [datasources-plan {}
         datasources-order datasources-order]
    (if (seq datasources-order)
      (let [datasource-key (first datasources-order)
            datasource (get datasources datasource-key)
            datasource-meta (get-meta app-db datasource-key)
            datasource-deps-fulfilled? (deps-fulfilled? app-db datasources-plan datasource)
            new-datasource-params (datasource-params datasources datasource-key datasource app-db edb-schema)
            reload? (if (not datasource-deps-fulfilled?)
                      true
                      (not (and (or (= (:params datasource-meta)
                                       new-datasource-params)
                                    (= ::ignore new-datasource-params))
                                (= :completed (:status datasource-meta)))))]
        (recur (assoc datasources-plan datasource-key
                      {:deps-fulfilled? datasource-deps-fulfilled?
                       :reload? reload?})
               (rest datasources-order)))
      datasources-plan)))

(defn make-dataloader
  ([datasources] (make-dataloader datasources {}))
  ([datasources edb-schema]
   (let [g (reduce
            (fn [acc [key val]]
              (let [deps (:deps val)]
                (reduce #(dep/depend %1 key %2) acc deps)))
            (dep/graph) datasources)
         g-nodes (dep/nodes g)
         independent (filter #(not (contains? g-nodes %)) (keys datasources))]
     (fn [app-db-atom context]
       (p/promise
        (fn [resolve reject on-cancel]
          (let [running? (atom true) 
                results-chan (chan)
                plan (datasources-load-plan @app-db-atom datasources (concat independent (dep/topo-sort g)) edb-schema)
                start-nodes (filter #(and (:reload? (get plan %)) (:deps-fulfilled? (get plan %))) (keys plan))]

            (when (fn? on-cancel) (on-cancel #(swap! running? not)))

            (mark-pending! app-db-atom  edb-schema (select-keys datasources (filter #(:reload? (get plan %)) (keys plan))))
            (start-loaders! app-db-atom datasources (select-keys datasources start-nodes) results-chan edb-schema context)
            (go-loop []
              (if @running?
                (if (has-pending-datasources? @app-db-atom)
                  (let [[status payload] (<! results-chan)
                        t-dependents (dep/transitive-dependents g (:datasource payload))]
                    (case status
                      :ok (do
                            (store-datasource! app-db-atom edb-schema payload)
                            (start-dependent-loaders! app-db-atom datasources (select-keys datasources t-dependents) results-chan edb-schema context))
                      :error (reset! app-db-atom
                                     (-> @app-db-atom
                                         (store-datasource-error! edb-schema payload)
                                         (mark-dependent-errors!
                                          datasources (select-keys datasources t-dependents) edb-schema payload)))
                      nil)
                    (recur))
                  (resolve @app-db-atom))
                (reject (js/Error. "Dataloader Rejected")))))))))))
