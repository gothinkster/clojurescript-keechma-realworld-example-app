// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('entitydb.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('entitydb.util');
goog.require('entitydb.relations');
goog.require('clojure.set');
entitydb.core.meta_store = cljs.core.cst$kw$__meta_DASH_store__;
/**
 * Inserts an item into the EntityDB collection.
 * 
 *   ```clojure
 *   (def schema {:foos {:id :id}})
 *   (def entity-db-v1 {})
 * 
 *   (def item {:id 1 :name "Foo"})
 *   (def item-meta {:is-loading false})
 * 
 *   (def entity-db-v2 (insert-item schema entity-db-v1 :foos item item-meta))
 *   ;; Returns the new version of the entity-db with the item inserted
 *   ;; inserted into the store
 *   ```
 *   
 */
entitydb.core.insert_item = (function entitydb$core$insert_item(var_args){
var G__24177 = arguments.length;
switch (G__24177) {
case 4:
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4 = (function (schema,db,entity_kw,item){
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$5(schema,db,entity_kw,item,null);
});

entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,item,meta){
var id = entitydb.util.get_item_id(schema,entity_kw,item);
var relations = entitydb.relations.get_relations(schema,entity_kw);
var db_with_inserted_relations = (entitydb.core.insert_related.cljs$core$IFn$_invoke$arity$6 ? entitydb.core.insert_related.cljs$core$IFn$_invoke$arity$6(schema,db,relations,entity_kw,id,item) : entitydb.core.insert_related.call(null,schema,db,relations,entity_kw,id,item));
var processed_item = entitydb.relations.remove_related_from_item(cljs.core.keys(relations),(entitydb.util.call_middleware_set.cljs$core$IFn$_invoke$arity$3 ? entitydb.util.call_middleware_set.cljs$core$IFn$_invoke$arity$3(schema,entity_kw,item) : entitydb.util.call_middleware_set.call(null,schema,entity_kw,item)));
var merged_item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$store,id], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),processed_item], 0));
return cljs.core.assoc_in((entitydb.core.insert_meta.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.insert_meta.cljs$core$IFn$_invoke$arity$4(db_with_inserted_relations,entity_kw,id,meta) : entitydb.core.insert_meta.call(null,db_with_inserted_relations,entity_kw,id,meta)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$store,id], null),merged_item);
});

entitydb.core.insert_item.cljs$lang$maxFixedArity = 5;

/**
 * Inserts an entity into the EntityDB if the entity is not nil.
 */
entitydb.core.insert_item_when_not_nil = (function entitydb$core$insert_item_when_not_nil(schema,db,entity_kw,item){
if(!((item == null))){
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4(schema,db,entity_kw,item);
} else {
return db;
}
});
/**
 * Inserts an item into the EntityDB, and references it from the named item slot.
 * 
 *   Item will be stored in the internal store, and named item slot will contain only 
 *   the identity of the item.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def entity-db-v2 (insert-named-item schema entity-db-v1 :foos :current {:id 1 :name "foo"}))
 *   ;; Returns the new version of the entity-db with the entity saved in the store and
 *   ;; referenced from the `:current` named item slot.
 * 
 *   (get-named-item schema entity-db-v2 :foos :current)
 *   ;; Returns the entity referenced from the `:current` named slot.
 * 
 *   ```
 *   
 */
entitydb.core.insert_named_item = (function entitydb$core$insert_named_item(var_args){
var G__24180 = arguments.length;
switch (G__24180) {
case 5:
return entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,item){
return entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$6(schema,db,entity_kw,collection_key,item,null);
});

entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,item,meta){
if(((item == null)) && ((meta == null))){
return db;
} else {
var id = entitydb.util.get_item_id(schema,entity_kw,item);
var meta_key = (((item == null))?collection_key:id);
var G__24181 = (function (){var G__24186 = cljs.core.assoc_in((entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3 ? entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3(db,entity_kw,collection_key) : entitydb.core.remove_meta.call(null,db,entity_kw,collection_key)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_one,collection_key], null),id);
var G__24187 = entity_kw;
var G__24188 = item;
var fexpr__24185 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.insert_item_when_not_nil,schema);
return (fexpr__24185.cljs$core$IFn$_invoke$arity$3 ? fexpr__24185.cljs$core$IFn$_invoke$arity$3(G__24186,G__24187,G__24188) : fexpr__24185.call(null,G__24186,G__24187,G__24188));
})();
var G__24182 = entity_kw;
var G__24183 = meta_key;
var G__24184 = meta;
return (entitydb.core.insert_meta.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.insert_meta.cljs$core$IFn$_invoke$arity$4(G__24181,G__24182,G__24183,G__24184) : entitydb.core.insert_meta.call(null,G__24181,G__24182,G__24183,G__24184));
}
});

entitydb.core.insert_named_item.cljs$lang$maxFixedArity = 6;

/**
 * Inserts a collection of items into the EntityDB. Each item will be
 *   stored in the internal store map, and the collection will be stored as a vector
 *   of entity identities.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 *   
 *   ```
 *   
 */
entitydb.core.insert_collection = (function entitydb$core$insert_collection(var_args){
var G__24191 = arguments.length;
switch (G__24191) {
case 5:
return entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,data){
return entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$6(schema,db,entity_kw,collection_key,data,null);
});

entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,data,meta){
if((cljs.core.empty_QMARK_(data)) && ((meta == null))){
return db;
} else {
var id_fn = entitydb.util.get_id_fn(schema,entity_kw);
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,data));
var G__24193 = (function (){var G__24195 = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_many,collection_key], null),ids);
var G__24196 = entity_kw;
var G__24197 = collection_key;
var G__24198 = meta;
return (entitydb.core.insert_meta.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.insert_meta.cljs$core$IFn$_invoke$arity$4(G__24195,G__24196,G__24197,G__24198) : entitydb.core.insert_meta.call(null,G__24195,G__24196,G__24197,G__24198));
})();
var G__24194 = data;
var fexpr__24192 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,((function (G__24193,G__24194,id_fn,ids){
return (function (db__$1,item){
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4(schema,db__$1,entity_kw,item);
});})(G__24193,G__24194,id_fn,ids))
);
return (fexpr__24192.cljs$core$IFn$_invoke$arity$2 ? fexpr__24192.cljs$core$IFn$_invoke$arity$2(G__24193,G__24194) : fexpr__24192.call(null,G__24193,G__24194));
}
});

entitydb.core.insert_collection.cljs$lang$maxFixedArity = 6;

/**
 * Appends items to an existing collection.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 * 
 *   
 *   (def entity-db-v3 (append-collection schema entity-db-v2 :foos :list [{:id 3 :name "baz}]))
 *   
 *   (get-collection schema entity-db-v3 :foos :list)
 *   ;; Returns [{:id 1 :name "foo"} {:id 2 :name "bar} {:id 3 :name "baz"}]
 *   
 *   ```
 *   
 */
entitydb.core.append_collection = (function entitydb$core$append_collection(var_args){
var G__24201 = arguments.length;
switch (G__24201) {
case 5:
return entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,data){
var current_meta = (entitydb.core.get_collection_meta.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.get_collection_meta.cljs$core$IFn$_invoke$arity$4(schema,db,entity_kw,collection_key) : entitydb.core.get_collection_meta.call(null,schema,db,entity_kw,collection_key));
return entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$6(schema,db,entity_kw,collection_key,data,current_meta);
});

entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,data,meta){
var c_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_many,collection_key], null);
var current_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,c_path);
var db_with_items = entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$6(schema,db,entity_kw,collection_key,data,meta);
var new_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db_with_items,c_path);
return cljs.core.assoc_in(db_with_items,c_path,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_ids,new_ids], null))));
});

entitydb.core.append_collection.cljs$lang$maxFixedArity = 6;

/**
 * Prepends items to an existing collection.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 * 
 *   
 *   (def entity-db-v3 (prepend-collection schema entity-db-v2 :foos :list [{:id 3 :name "baz"}]))
 *   
 *   (get-collection schema entity-db-v3 :foos :list)
 *   ;; Returns [{:id 3 :name "baz"} {:id 1 :name "foo"} {:id 2 :name "bar"}]
 *   
 *   ```
 *   
 */
entitydb.core.prepend_collection = (function entitydb$core$prepend_collection(var_args){
var G__24204 = arguments.length;
switch (G__24204) {
case 5:
return entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,data){
var current_meta = (entitydb.core.get_collection_meta.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.get_collection_meta.cljs$core$IFn$_invoke$arity$4(schema,db,entity_kw,collection_key) : entitydb.core.get_collection_meta.call(null,schema,db,entity_kw,collection_key));
return entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$6(schema,db,entity_kw,collection_key,data,current_meta);
});

entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,data,meta){
var c_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_many,collection_key], null);
var current_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,c_path);
var db_with_items = entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$6(schema,db,entity_kw,collection_key,data,meta);
var new_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db_with_items,c_path);
return cljs.core.assoc_in(db_with_items,c_path,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_ids,current_ids], null))));
});

entitydb.core.prepend_collection.cljs$lang$maxFixedArity = 6;

entitydb.core.insert_related = (function entitydb$core$insert_related(schema,db,relations,entity_kw,id,item){
return cljs.core.reduce_kv((function (db__$1,relation_kw,p__24206){
var vec__24207 = p__24206;
var relation_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24207,(0),null);
var related_entity_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24207,(1),null);
var collection_key = entitydb.relations.get_related_collection_key(entity_kw,id,relation_kw);
var relation_data = (relation_kw.cljs$core$IFn$_invoke$arity$1 ? relation_kw.cljs$core$IFn$_invoke$arity$1(item) : relation_kw.call(null,item));
var remove_collection_type_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$one,cljs.core.cst$kw$c_DASH_one,cljs.core.cst$kw$many,cljs.core.cst$kw$c_DASH_many], null);
var insert_collection_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relation_type,cljs.core.cst$kw$one))?entitydb.core.insert_named_item:entitydb.core.insert_collection);
if(cljs.core.fn_QMARK_(relation_data)){
return db__$1;
} else {
if((cljs.core.contains_QMARK_(item,relation_kw)) && ((relation_data == null))){
var G__24210 = db__$1;
var G__24211 = related_entity_kw;
var G__24212 = (relation_type.cljs$core$IFn$_invoke$arity$1 ? relation_type.cljs$core$IFn$_invoke$arity$1(remove_collection_type_map) : relation_type.call(null,remove_collection_type_map));
var G__24213 = collection_key;
return (entitydb.core.remove_collection_or_named_item.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.remove_collection_or_named_item.cljs$core$IFn$_invoke$arity$4(G__24210,G__24211,G__24212,G__24213) : entitydb.core.remove_collection_or_named_item.call(null,G__24210,G__24211,G__24212,G__24213));
} else {
return (insert_collection_fn.cljs$core$IFn$_invoke$arity$5 ? insert_collection_fn.cljs$core$IFn$_invoke$arity$5(schema,db__$1,related_entity_kw,collection_key,relation_data) : insert_collection_fn.call(null,schema,db__$1,related_entity_kw,collection_key,relation_data));
}
}
}),db,relations);
});
/**
 * Inserts meta data for an entity or collection into the store.
 */
entitydb.core.insert_meta = (function entitydb$core$insert_meta(db,entity_kw,meta_key,meta){
var schema = cljs.core.PersistentArrayMap.createAsIfByAssoc([entitydb.core.meta_store,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(entitydb.util.get_meta_id,entity_kw,meta_key)], null)]);
if((meta == null)){
return (entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3 ? entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3(db,entity_kw,meta_key) : entitydb.core.remove_meta.call(null,db,entity_kw,meta_key));
} else {
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4(schema,entitydb.util.add_empty_layout(db,entitydb.core.meta_store),entitydb.core.meta_store,meta);
}
});
entitydb.core.remove_item_id_from_named_items = (function entitydb$core$remove_item_id_from_named_items(collections,id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__24214){
var vec__24215 = p__24214;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24215,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24215,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,id);
}),collections));
});
entitydb.core.remove_item_id_from_collections = (function entitydb$core$remove_item_id_from_collections(collections,id){
return entitydb.util.update_values(collections,(function (val){
return cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,id),val);
}));
});
/**
 * Removes item from the store. It will also remove it from any named-item slots or collections.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def foo-entity {:id 1 :name "Bar"})
 *   
 *   ;; insert `foo-entity` in the `:current` named item slot
 *   (def entity-db-v2 (insert-named-item schema entity-db-v1 :foos :current foo-entity))
 * 
 *   ;; insert `foo-entity` as a part of the `:list` collection
 *   (def entity-db-v3 (insert-collection schema entity-db-v2 :foos :list [foo-entity]))
 * 
 *   ;; get `foo-entity` from the entity-db
 *   (get-item-by-id schema entity-db-v3 :foos 1)
 *   ;; returns `foo-entity`
 * 
 *   (def entity-db-v4 (remove-item schema entity-db :foos 1))
 * 
 *   (get-named-item schema entity-db-v4 :foos :current)
 *   ;; returns `nil`
 * 
 *   (get-collection schema entity-db-v4 :foos :list)
 *   ;; returns []
 *   ```
 *   
 */
entitydb.core.remove_item = (function entitydb$core$remove_item(schema,db,entity_kw,id){
var c_one_without_item_id = entitydb.core.remove_item_id_from_named_items(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_one], null)),id);
var c_many_without_item_id = entitydb.core.remove_item_id_from_collections(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_many], null)),id);
var store_without_item = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$store], null)),id);
var db__$1 = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in((entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3 ? entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3(db,entity_kw,id) : entitydb.core.remove_meta.call(null,db,entity_kw,id)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$store], null),store_without_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_one], null),c_one_without_item_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_many], null),c_many_without_item_id);
var relations = entitydb.relations.get_relations(schema,entity_kw);
return cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(entitydb.relations.remove_related_collections,entity_kw,id),db__$1,relations);
});
entitydb.core.remove_collection_or_named_item = (function entitydb$core$remove_collection_or_named_item(db,entity_kw,collection_type,collection_key){
var collections_without = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,collection_type], null)),collection_key);
return cljs.core.assoc_in((entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3 ? entitydb.core.remove_meta.cljs$core$IFn$_invoke$arity$3(db,entity_kw,collection_key) : entitydb.core.remove_meta.call(null,db,entity_kw,collection_key)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,collection_type], null),collections_without);
});
/**
 * Removes the named-item slot. Entity will still be stored in the internal store, but
 *   won't be available through the named-item slot.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def foo-entity {:id 1 :name "bar"})
 * 
 *   (def entity-db-v2 (insert-named-item schema entity-db-v1 :foos :current foo-entity))
 *   
 *   (get-named-item schema entity-db-v1 :foos :current)
 *   ;; Returns `{:id 1 :name "bar"}`
 * 
 *   (def entity-db-v3 (remove-named-item schema entity-db-v2 :foos :current))
 * 
 *   (get-named-item schema entity-db-v2 :foos :current)
 *   ;; Returns `nil`
 * 
 *   (get-item-by-id schema entity-db-v2 :foos 1)
 *   ;; Returns `{:id 1 :name "bar"}`
 *   ```
 *   
 */
entitydb.core.remove_named_item = (function entitydb$core$remove_named_item(db,entity_kw,collection_key){
return entitydb.core.remove_collection_or_named_item(db,entity_kw,cljs.core.cst$kw$c_DASH_one,collection_key);
});
/**
 * Removes the collection. Entities referenced from the collection will still be stored in
 *   the internal store, but won't be available through the collection API.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def foo-entity {:id 1 :name "bar"})
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list [foo-entity]))
 *   
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns `[{:id 1 :name "bar"}]`
 * 
 *   (def entity-db-v3 (remove-collection schema entity-db-v2 :foos :list))
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns `nil`
 * 
 *   (get-item-by-id schema entity-db-v2 :foos 1)
 *   ;; Returns `{:id 1 :name "bar"}`
 *   ```
 *   
 */
entitydb.core.remove_collection = (function entitydb$core$remove_collection(db,entity_kw,collection_key){
return entitydb.core.remove_collection_or_named_item(db,entity_kw,cljs.core.cst$kw$c_DASH_many,collection_key);
});
/**
 * Removes any meta data stored on the entity or collection
 */
entitydb.core.remove_meta = (function entitydb$core$remove_meta(db,entity_kw,id){
var meta_key = entitydb.util.get_meta_id(entity_kw,id);
var current_meta = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.core.meta_store,cljs.core.cst$kw$store,meta_key], null));
if((current_meta == null)){
return db;
} else {
var store = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.core.meta_store,cljs.core.cst$kw$store], null));
var store_without_item = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(store,meta_key);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.core.meta_store,cljs.core.cst$kw$store], null),(function (){var or__11514__auto__ = store_without_item;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}
});
/**
 * Gets meta data for an entity.
 */
entitydb.core.get_item_meta = (function entitydb$core$get_item_meta(schema,db,entity_kw,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(entity_kw,entitydb.core.meta_store)){
return null;
} else {
var G__24218 = schema;
var G__24219 = db;
var G__24220 = entitydb.core.meta_store;
var G__24221 = entitydb.util.get_meta_id(entity_kw,id);
return (entitydb.core.get_item_by_id.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.get_item_by_id.cljs$core$IFn$_invoke$arity$4(G__24218,G__24219,G__24220,G__24221) : entitydb.core.get_item_by_id.call(null,G__24218,G__24219,G__24220,G__24221));
}
});
/**
 * Returns the meta data for an entity referenced in the named item slot.
 */
entitydb.core.get_named_item_meta = (function entitydb$core$get_named_item_meta(schema,db,entity_kw,collection_key){
var item = (entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$5 ? entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$5(schema,db,entity_kw,collection_key,false) : entitydb.core.get_named_item.call(null,schema,db,entity_kw,collection_key,false));
var meta_key = (((item == null))?collection_key:entitydb.util.get_item_id(schema,entity_kw,item));
return entitydb.core.get_item_meta(schema,db,entity_kw,meta_key);
});
/**
 * Returns the meta data for a collection.
 */
entitydb.core.get_collection_meta = entitydb.core.get_item_meta;
entitydb.core.get_related_items_fn = (function entitydb$core$get_related_items_fn(schema,db,entity_kw,id){
return (function (item,relation_kw,p__24222){
var vec__24223 = p__24222;
var relation_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24223,(0),null);
var related_entity_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24223,(1),null);
var collection_key = entitydb.relations.get_related_collection_key(entity_kw,id,relation_kw);
var get_collection_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relation_type,cljs.core.cst$kw$one))?entitydb.core.get_named_item:entitydb.core.get_collection);
var data_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(get_collection_fn,schema,db,related_entity_kw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([collection_key], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,relation_kw,data_fn);
});
});
/**
 * Gets an entity from the store by the id
 */
entitydb.core.get_item_by_id = (function entitydb$core$get_item_by_id(schema,db,entity_kw,id){
var relations = entitydb.relations.get_relations(schema,entity_kw);
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$store,id], null));
if((item == null)){
return null;
} else {
var G__24227 = cljs.core.with_meta(item,entitydb.core.get_item_meta(schema,db,entity_kw,id));
var G__24228 = relations;
var fexpr__24226 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,entitydb.core.get_related_items_fn(schema,db,entity_kw,id));
return (fexpr__24226.cljs$core$IFn$_invoke$arity$2 ? fexpr__24226.cljs$core$IFn$_invoke$arity$2(G__24227,G__24228) : fexpr__24226.call(null,G__24227,G__24228));
}
});
/**
 * Gets collection by it's key. Internally collections store only entity ids, but
 *   this function will return a collection of entities based on the ids stored in the collection
 * 
 *   
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 *   ```
 *   
 */
entitydb.core.get_collection = (function entitydb$core$get_collection(schema,db,entity_kw,collection_key){
var ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_many,collection_key], null));
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(entitydb.core.get_item_by_id,schema,db,entity_kw),ids)),(entitydb.core.get_collection_meta.cljs$core$IFn$_invoke$arity$4 ? entitydb.core.get_collection_meta.cljs$core$IFn$_invoke$arity$4(schema,db,entity_kw,collection_key) : entitydb.core.get_collection_meta.call(null,schema,db,entity_kw,collection_key)));
});
/**
 * Gets an entity referenced from the named item slot. Internally named slots store
 *   only entity ids but this function will return an entity based on the id.
 */
entitydb.core.get_named_item = (function entitydb$core$get_named_item(var_args){
var G__24230 = arguments.length;
switch (G__24230) {
case 4:
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$4 = (function (schema,db,entity_kw,collection_key){
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$5(schema,db,entity_kw,collection_key,true);
});

entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,include_meta){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_one,collection_key], null));
var item = entitydb.core.get_item_by_id(schema,db,entity_kw,id);
if(cljs.core.truth_(include_meta)){
return cljs.core.with_meta(item,entitydb.core.get_named_item_meta(schema,db,entity_kw,collection_key));
} else {
return item;
}
});

entitydb.core.get_named_item.cljs$lang$maxFixedArity = 5;

entitydb.core.vacuum_entity_db = (function entitydb$core$vacuum_entity_db(db,entity_kw){
var store = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$store], null));
var ids = cljs.core.keys(store);
var locked_one_ids = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_one], null)));
var locked_many_ids = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$c_DASH_many], null)));
var locked_ids = cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locked_one_ids,locked_many_ids], null));
var to_remove_ids = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ids),cljs.core.set(locked_ids));
var db_without_meta = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (store,ids,locked_one_ids,locked_many_ids,locked_ids,to_remove_ids){
return (function (db__$1,id){
return entitydb.core.remove_meta(db__$1,entity_kw,id);
});})(store,ids,locked_one_ids,locked_many_ids,locked_ids,to_remove_ids))
,db,to_remove_ids);
return cljs.core.assoc_in(db_without_meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$store], null),cljs.core.select_keys(store,locked_ids));
});
/**
 * Removes orphaned entities from the EntityDB. Any entity that is not referenced
 *   in a collection or in a named item slot will be removed from the EntityDB
 */
entitydb.core.vacuum = (function entitydb$core$vacuum(db){
var entity_kws = cljs.core.keys(db);
var entity_kws_without_meta = cljs.core.filterv(((function (entity_kws){
return (function (k){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,entitydb.core.meta_store));
});})(entity_kws))
,entity_kws);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(entitydb.core.vacuum_entity_db,db,entity_kws_without_meta);
});
/**
 * Returns a map with all public functions. These functions will have `schema`
 *   partially applied to them so you don't have to pass the schema around.
 */
entitydb.core.make_dbal = (function entitydb$core$make_dbal(schema){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$vacuum,cljs.core.cst$kw$get_DASH_item_DASH_meta,cljs.core.cst$kw$get_DASH_collection_DASH_meta,cljs.core.cst$kw$remove_DASH_named_DASH_item,cljs.core.cst$kw$get_DASH_collection,cljs.core.cst$kw$insert_DASH_named_DASH_item,cljs.core.cst$kw$insert_DASH_meta,cljs.core.cst$kw$remove_DASH_item,cljs.core.cst$kw$prepend_DASH_collection,cljs.core.cst$kw$append_DASH_collection,cljs.core.cst$kw$remove_DASH_meta,cljs.core.cst$kw$get_DASH_named_DASH_item,cljs.core.cst$kw$get_DASH_item_DASH_by_DASH_id,cljs.core.cst$kw$insert_DASH_item,cljs.core.cst$kw$remove_DASH_collection,cljs.core.cst$kw$insert_DASH_collection,cljs.core.cst$kw$get_DASH_named_DASH_item_DASH_meta],[entitydb.core.vacuum,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_item_meta,schema),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_collection_meta,schema),entitydb.core.remove_named_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.get_collection),schema),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.insert_named_item),schema),entitydb.core.insert_meta,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.remove_item),schema),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.prepend_collection),schema),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.append_collection),schema),entitydb.core.remove_meta,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_named_item,schema),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_item_by_id,schema),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.insert_item),schema),entitydb.core.remove_collection,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.insert_collection),schema),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_named_item_meta,schema)]);
});
