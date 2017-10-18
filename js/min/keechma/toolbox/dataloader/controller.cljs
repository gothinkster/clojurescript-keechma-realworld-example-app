(ns keechma.toolbox.dataloader.controller
  (:require [keechma.controller :as controller]
            [cljs.core.async :refer [<! close! put! chan]]
            [keechma.toolbox.dataloader.core :as dataloader]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [promesa.core :as p])
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]))

(defn ^:private chan->promise [wait-chan value]
  (p/promise (fn [resolve reject]
               (go
                 (<! wait-chan)
                 (resolve)))))

(defn wait-dataloader-pipeline! []
  (let [wait-chan (chan)]
    (pipeline! [value app-db]
      (pp/send-command! [dataloader/id-key :waits] wait-chan)
      (chan->promise wait-chan value))))

(defrecord Controller [dataloader])

(defmethod controller/params Controller [this route-params]
  (:data route-params))

(defmethod controller/start Controller [this route-params app-db]
  (controller/execute this :load-data)
  app-db)

(defmethod controller/handler Controller [this app-db-atom in-chan out-chan]
  (go-loop [waits []]
    (let [[command args] (<! in-chan)]
      (when command
        (case command
          :load-data (do (->> ((:dataloader this) app-db-atom (controller/context this))
                              (p/map #(controller/execute this :loaded-data)))
                         (recur waits))
          :loaded-data (do
                         (doseq [c waits] (close! c))
                         (recur []))
          :waits (recur (conj waits args))
          (recur waits))))))

(defn constructor
  "Dataloader controller constructor"
  [datasources edb-schema]
  (->Controller (dataloader/make-dataloader datasources edb-schema)))

(defn register "

Registers dataloader controller to the controller map

```clojure
 (def app
  {:controllers (-> {}
                    (keechma.toolbox.dataloader.controller/register datasources-map edb-schema))})
```

  `keechma.toolbox.dataloader.controller/register` function expects three arguments:

- controller map
- datasources map
- EDB schema

It returns a new version of the controller map with the dataloader controller registered.

**Datasources**

Datasource is an abstraction of any data that is loaded from the \"outside\" world. It can be an API endpoint, local storage value or any other data that is not present in the application state.

Dataloader allows you to declaratively list your datasources. It then determines when and how the datasources should be loaded. Datasources can be defined as a graph, where datasources can depend on other datasources. This removes any need to manually load data in the correct order. When datasources params or depenedencies change, dataloader will invalidate that datasource and reload it.

Dataloader checks it's datasources on each route change. If the datasource `params` function returns a result different from the previous result, this datasource (and any datasources that depend on it) will be reloaded.

Dataloader can be manually triggered by sending the `:load-data` command to the dataloader controller.

**Example**

```clojure

(defn promised-datasource
 ([] (promised-datasource nil))
 ([data]
  (fn [params]
    (map (fn [loader-params]
           (p/promise (fn [resolve reject]
                        (let [value (or data (:params loader-params))]
                          (js/setTimeout #(resolve value) 1)))))
         params))))

(def simple-promised-datasource (promised-datasource))

(def simple-datasources
 {:jwt
  {:target [:kv :jwt]
   :loader (promised-datasource)
   :processor (fn [value datasource]
                (str value \"!\"))
   :params (fn [prev route _]
             (or (:jwt route) \"JWT\"))}

  :current-user
  {:target [:kv :user :current]
   :deps   [:jwt]
   :loader simple-promised-datasource
   :params (fn [prev route {:keys [jwt]}]
             {:jwt jwt
              :current-user-id 1})}

  :users
  {:target [:kv :user :list]
   :deps   [:jwt]
   :loader simple-promised-datasource
   :params (fn [prev route {:keys [jwt]}]
             {:jwt jwt
              :users [{:id 1} {:id 2}]})}

  :current-user-favorites
  {:target [:kv :favorites :current]
   :deps   [:jwt :current-user]
   :loader simple-promised-datasource
   :params (fn [prev route {:keys [jwt current-user]}]
             {:jwt jwt
              :current-user current-user
              :favorites [{:id 3} {:id 4}]})}})
```

A lot of stuff is happening in this example, so let's explain them one by one.

`promised-datasource` function is used as an example loader. The important thing to note here is that loader functions accept an array of requests. This means that you can use this function as an optimization point, a place where you can optimize the requests - remove duplicates or combine them into one request. Loader function should return a list of promises or results (these can be combined). Dataloader will wait for each promise to resolve, and then continue loading the dependent datasources.

Datasources are registered in the map, and the key under which the datasource is registered can be used by the other datasources to depend on it.

Each datasource map can have the following attributes:

- `:target` - where to store the returned data
- `:params` - function that returns the params needed to load the data
- `:loader` - function that is used to load the data, this function gets a list of requests
- `:deps` - list of datasources that the datasource depends on
- `:processor` - function that processes the result data before it gets stored in the app-db

**`:target` attribute**

Target attribute tells dataloader where it should store the loaded data. It has three different forms:

- general path - `[:kv :user]` - it will be stored under this path in the app-db
- EntityDB collection path - `[:edb/collection :user/list]` - If the first element of the target vector is `:edb/collection` keyword, the results will be treated as the EntityDB collection and the second element of the vector will be split on `/` to determine where this collection should be stored. If the second element of the target vector looked like `:user/list` the data would be stored in the collection named `:list` for the entity named `:user`.
- EntityDB named item - `[:edb/named-item :user/current]` - this will store the EntityDB named item, using the same rules like the EntityDB collection target to determine where the item should be stored.

**`:params` attribute**

Params function returns the params needed to load the datasource. It receives three arguments:

- previously loaded value
- current route
- datasource dependencies

This function is called to determine the current datasource state. If the returned value is different from the previously returned value, the datasource will be reloaded. Loader function receives the params, and it has to make sense of it. Even if your params fn returns `nil`, loader function will be called. It is loader function's responsobility to decide what the returned params mean.

**`:loader`** attribute:

Loader function is responsible for the data loading. This is where you should place your AJAX request functions. Loader function will receive a vector of requests (one element for each \"triggered\" datasource). Each request comes from a datasource, and it contains the following attributes:

- `:params` - value returned from the \"params\" function
- `:prev` - previously loaded value
- `:datasource` - key under which the datasource is registered
- `:app-db` - current app-db state
- `:target` - path where data will be stored in the app-db

Loader function should return a vector (one item for each request). Values in the returned vector can be either promises or resolved values.


**Manually triggering the Dataloader**

In some cases you will want to manually trigger the dataloader without the route change. For instance you might obtain a JWT token as a result of some user's action, and then reload all datasources that depend on it. Dataloader controller can manually trigger the dataloader. You can achieve this by sending the `:load-data` command to the dataloader controller:

```clojure
(ns some.namespace
  (:require [keechma.toolbox.dataloader.core :as dataloader]
        [keechma.controller :as controller]))

(defn trigger-dataloader [ctrl]
  (controller/send-command ctrl [dataloader/id-key :load-data])) ;; dataloader controller will be registered under the dataloader/id-key keyword
```

This will reload all invalidated datasources.
"

  ([datasources edb-schema] (register {} datasources edb-schema))
  ([controllers datasources edb-schema]
   (assoc controllers dataloader/id-key (constructor datasources edb-schema))))
