// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.dataloader.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.stuartsierra.dependency');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('entitydb.core');
keechma.toolbox.dataloader.core.id_key = cljs.core.cst$kw$keechma$toolbox$dataloader$core_SLASH_dataloader;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.toolbox.dataloader.core.EntityDBWithRelations = (function (data,relations,__meta,__extmap,__hash){
this.data = data;
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k24235,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__24239 = k24235;
var G__24239__$1 = (((G__24239 instanceof cljs.core.Keyword))?G__24239.fqn:null);
switch (G__24239__$1) {
case "data":
return self__.data;

break;
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24235,else__12205__auto__);

}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.dataloader.core.EntityDBWithRelations{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relations,self__.relations],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24234){
var self__ = this;
var G__24234__$1 = this;
return (new cljs.core.RecordIter((0),G__24234__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$relations], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__24240 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (440975300 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__24240(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24236,other24237){
var self__ = this;
var this24236__$1 = this;
return (!((other24237 == null))) && ((this24236__$1.constructor === other24237.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24236__$1.data,other24237.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24236__$1.relations,other24237.relations)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24236__$1.__extmap,other24237.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$relations,null,cljs.core.cst$kw$data,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__24234){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__24241 = cljs.core.keyword_identical_QMARK_;
var expr__24242 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__24244 = cljs.core.cst$kw$data;
var G__24245 = expr__24242;
return (pred__24241.cljs$core$IFn$_invoke$arity$2 ? pred__24241.cljs$core$IFn$_invoke$arity$2(G__24244,G__24245) : pred__24241.call(null,G__24244,G__24245));
})())){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(G__24234,self__.relations,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24246 = cljs.core.cst$kw$relations;
var G__24247 = expr__24242;
return (pred__24241.cljs$core$IFn$_invoke$arity$2 ? pred__24241.cljs$core$IFn$_invoke$arity$2(G__24246,G__24247) : pred__24241.call(null,G__24246,G__24247));
})())){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,G__24234,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__24234),null));
}
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relations,self__.relations],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__24234){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,G__24234,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$relations], null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$type = true;

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.dataloader.core/EntityDBWithRelations");
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.dataloader.core/EntityDBWithRelations");
});

keechma.toolbox.dataloader.core.__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$__GT_EntityDBWithRelations(data,relations){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(data,relations,null,null,null));
});

keechma.toolbox.dataloader.core.map__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$map__GT_EntityDBWithRelations(G__24238){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__24238),cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(G__24238),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24238,cljs.core.cst$kw$data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$relations], 0))),null));
});

keechma.toolbox.dataloader.core.target__GT_edb = (function keechma$toolbox$dataloader$core$target__GT_edb(target){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(target)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(target))], null);
});
keechma.toolbox.dataloader.core.save_kv_data = (function keechma$toolbox$dataloader$core$save_kv_data(app_db,target,data){
return cljs.core.assoc_in(app_db,target,data);
});
keechma.toolbox.dataloader.core.insert_relations = (function keechma$toolbox$dataloader$core$insert_relations(edb_schema,edb,relations){
return cljs.core.reduce_kv((function (acc,k,v){
var items = ((cljs.core.map_QMARK_(v))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null):v);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (items){
return (function (acc2,item){
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4(edb_schema,acc2,k,item);
});})(items))
,acc,items);
}),edb,relations);
});
keechma.toolbox.dataloader.core.save_edb_named_item = (function keechma$toolbox$dataloader$core$save_edb_named_item(app_db,edb_schema,target,data){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24249 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24249,(0),null);
var named_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24249,(1),null);
var insert_named_item = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.insert_named_item,edb_schema);
var vec__24252 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type(data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24252,(0),null);
var relations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24252,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_db,cljs.core.cst$kw$entity_DASH_db,(cljs.core.truth_(data__$1)?(function (){var G__24255 = keechma.toolbox.dataloader.core.insert_relations(edb_schema,edb,relations);
var G__24256 = entity;
var G__24257 = named_item;
var G__24258 = data__$1;
return (insert_named_item.cljs$core$IFn$_invoke$arity$4 ? insert_named_item.cljs$core$IFn$_invoke$arity$4(G__24255,G__24256,G__24257,G__24258) : insert_named_item.call(null,G__24255,G__24256,G__24257,G__24258));
})():entitydb.core.remove_named_item(edb,entity,named_item)));
});
keechma.toolbox.dataloader.core.save_edb_collection = (function keechma$toolbox$dataloader$core$save_edb_collection(app_db,edb_schema,target,data){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24259 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(0),null);
var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(1),null);
var insert_collection = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.insert_collection,edb_schema);
var vec__24262 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type(data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24262,(0),null);
var relations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24262,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_db,cljs.core.cst$kw$entity_DASH_db,((cljs.core.seq(data__$1))?(function (){var G__24265 = keechma.toolbox.dataloader.core.insert_relations(edb_schema,edb,relations);
var G__24266 = entity;
var G__24267 = collection;
var G__24268 = data__$1;
return (insert_collection.cljs$core$IFn$_invoke$arity$4 ? insert_collection.cljs$core$IFn$_invoke$arity$4(G__24265,G__24266,G__24267,G__24268) : insert_collection.call(null,G__24265,G__24266,G__24267,G__24268));
})():entitydb.core.remove_collection(edb,entity,collection)));
});
keechma.toolbox.dataloader.core.get_edb_named_item = (function keechma$toolbox$dataloader$core$get_edb_named_item(app_db,edb_schema,target){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24269 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(0),null);
var named_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(1),null);
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$4(edb_schema,edb,entity,named_item);
});
keechma.toolbox.dataloader.core.get_edb_collection = (function keechma$toolbox$dataloader$core$get_edb_collection(app_db,edb_schema,target){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24272 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24272,(0),null);
var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24272,(1),null);
return entitydb.core.get_collection(edb_schema,edb,entity,collection);
});
keechma.toolbox.dataloader.core.get_kv_data = (function keechma$toolbox$dataloader$core$get_kv_data(app_db,target){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,target);
});
keechma.toolbox.dataloader.core.get_meta = (function keechma$toolbox$dataloader$core$get_meta(app_db,datasource_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.dataloader.core.id_key,datasource_key], null));
});
keechma.toolbox.dataloader.core.save_meta = (function keechma$toolbox$dataloader$core$save_meta(app_db,datasource_key,meta){
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.dataloader.core.id_key,datasource_key], null),meta);
});
keechma.toolbox.dataloader.core.save_data = (function keechma$toolbox$dataloader$core$save_data(app_db,edb_schema,target,data){
var target_start = cljs.core.first(target);
var G__24275 = target_start;
var G__24275__$1 = (((G__24275 instanceof cljs.core.Keyword))?G__24275.fqn:null);
switch (G__24275__$1) {
case "edb/named-item":
return keechma.toolbox.dataloader.core.save_edb_named_item(app_db,edb_schema,cljs.core.last(target),data);

break;
case "edb/collection":
return keechma.toolbox.dataloader.core.save_edb_collection(app_db,edb_schema,cljs.core.last(target),data);

break;
default:
return keechma.toolbox.dataloader.core.save_kv_data(app_db,target,data);

}
});
keechma.toolbox.dataloader.core.get_data = (function keechma$toolbox$dataloader$core$get_data(app_db,edb_schema,target){
var target_start = cljs.core.first(target);
var G__24277 = target_start;
var G__24277__$1 = (((G__24277 instanceof cljs.core.Keyword))?G__24277.fqn:null);
switch (G__24277__$1) {
case "edb/named-item":
return keechma.toolbox.dataloader.core.get_edb_named_item(app_db,edb_schema,cljs.core.last(target));

break;
case "edb/collection":
return keechma.toolbox.dataloader.core.get_edb_collection(app_db,edb_schema,cljs.core.last(target));

break;
default:
return keechma.toolbox.dataloader.core.get_kv_data(app_db,target);

}
});
keechma.toolbox.dataloader.core.datasources__GT_loaders = (function keechma$toolbox$dataloader$core$datasources__GT_loaders(app_datasources,datasources,app_db,results_chan,edb_schema){
var route_params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route,cljs.core.cst$kw$data], null));
var ds = datasources;
var loaders = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(cljs.core.seq(ds))){
return loaders;
} else {
var vec__24279 = cljs.core.first(ds);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24279,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24279,(1),null);
var prev = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,keechma.toolbox.dataloader.core.get_data(app_db,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val)),cljs.core.cst$kw$meta,keechma.toolbox.dataloader.core.get_meta(app_db,key)], null);
var params_fn = (function (){var or__11514__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return ((function (ds,loaders,or__11514__auto__,vec__24279,key,val,prev,route_params){
return (function() { 
var G__24282__delegate = function (args){
return null;
};
var G__24282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24283__i = 0, G__24283__a = new Array(arguments.length -  0);
while (G__24283__i < G__24283__a.length) {G__24283__a[G__24283__i] = arguments[G__24283__i + 0]; ++G__24283__i;}
  args = new cljs.core.IndexedSeq(G__24283__a,0,null);
} 
return G__24282__delegate.call(this,args);};
G__24282.cljs$lang$maxFixedArity = 0;
G__24282.cljs$lang$applyTo = (function (arglist__24284){
var args = cljs.core.seq(arglist__24284);
return G__24282__delegate(args);
});
G__24282.cljs$core$IFn$_invoke$arity$variadic = G__24282__delegate;
return G__24282;
})()
;
;})(ds,loaders,or__11514__auto__,vec__24279,key,val,prev,route_params))
}
})();
var deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ds,loaders,vec__24279,key,val,prev,params_fn,route_params){
return (function (acc,dep_key){
var dep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_datasources,dep_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,dep_key,keechma.toolbox.dataloader.core.get_data(app_db,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(dep)));
});})(ds,loaders,vec__24279,key,val,prev,params_fn,route_params))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(val));
var params = (params_fn.cljs$core$IFn$_invoke$arity$3 ? params_fn.cljs$core$IFn$_invoke$arity$3(prev,route_params,deps) : params_fn.call(null,prev,route_params,deps));
var loader = (function (){var or__11514__auto__ = cljs.core.cst$kw$loader.cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.identity;
}
})();
var target = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val);
var current_loaders = (function (){var or__11514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(loaders,loader);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var G__24285 = cljs.core.rest(ds);
var G__24286 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loaders,loader,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_loaders,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$prev,prev,cljs.core.cst$kw$datasource,key,cljs.core.cst$kw$app_DASH_db,app_db,cljs.core.cst$kw$target,target], null)));
ds = G__24285;
loaders = G__24286;
continue;
}
break;
}
});
keechma.toolbox.dataloader.core.start_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema,context){
var app_db = cljs.core.deref(app_db_atom);
var loaders = keechma.toolbox.dataloader.core.datasources__GT_loaders(app_datasources,datasources,app_db,results_chan,edb_schema);
var seq__24287 = cljs.core.seq(loaders);
var chunk__24288 = null;
var count__24289 = (0);
var i__24290 = (0);
while(true){
if((i__24290 < count__24289)){
var vec__24291 = chunk__24288.cljs$core$IIndexed$_nth$arity$2(null,i__24290);
var loader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24291,(0),null);
var pending_datasources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24291,(1),null);
var promises_24317 = (loader.cljs$core$IFn$_invoke$arity$2 ? loader.cljs$core$IFn$_invoke$arity$2(pending_datasources,context) : loader.call(null,pending_datasources,context));
var seq__24294_24318 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,promises_24317));
var chunk__24295_24319 = null;
var count__24296_24320 = (0);
var i__24297_24321 = (0);
while(true){
if((i__24297_24321 < count__24296_24320)){
var vec__24298_24322 = chunk__24295_24319.cljs$core$IIndexed$_nth$arity$2(null,i__24297_24321);
var idx_24323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24298_24322,(0),null);
var loader_promise_24324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24298_24322,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24298_24322,idx_24323,loader_promise_24324,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24323);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24298_24322,idx_24323,loader_promise_24324,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders))
,promesa.core.map(((function (seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24298_24322,idx_24323,loader_promise_24324,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24323);
var processor = (function (){var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24298_24322,idx_24323,loader_promise_24324,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders))
,promesa.core.promise(loader_promise_24324)));

var G__24325 = seq__24294_24318;
var G__24326 = chunk__24295_24319;
var G__24327 = count__24296_24320;
var G__24328 = (i__24297_24321 + (1));
seq__24294_24318 = G__24325;
chunk__24295_24319 = G__24326;
count__24296_24320 = G__24327;
i__24297_24321 = G__24328;
continue;
} else {
var temp__5278__auto___24329 = cljs.core.seq(seq__24294_24318);
if(temp__5278__auto___24329){
var seq__24294_24330__$1 = temp__5278__auto___24329;
if(cljs.core.chunked_seq_QMARK_(seq__24294_24330__$1)){
var c__12440__auto___24331 = cljs.core.chunk_first(seq__24294_24330__$1);
var G__24332 = cljs.core.chunk_rest(seq__24294_24330__$1);
var G__24333 = c__12440__auto___24331;
var G__24334 = cljs.core.count(c__12440__auto___24331);
var G__24335 = (0);
seq__24294_24318 = G__24332;
chunk__24295_24319 = G__24333;
count__24296_24320 = G__24334;
i__24297_24321 = G__24335;
continue;
} else {
var vec__24301_24336 = cljs.core.first(seq__24294_24330__$1);
var idx_24337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24301_24336,(0),null);
var loader_promise_24338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24301_24336,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24301_24336,idx_24337,loader_promise_24338,seq__24294_24330__$1,temp__5278__auto___24329,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24337);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24301_24336,idx_24337,loader_promise_24338,seq__24294_24330__$1,temp__5278__auto___24329,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders))
,promesa.core.map(((function (seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24301_24336,idx_24337,loader_promise_24338,seq__24294_24330__$1,temp__5278__auto___24329,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24337);
var processor = (function (){var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24294_24318,chunk__24295_24319,count__24296_24320,i__24297_24321,seq__24287,chunk__24288,count__24289,i__24290,vec__24301_24336,idx_24337,loader_promise_24338,seq__24294_24330__$1,temp__5278__auto___24329,promises_24317,vec__24291,loader,pending_datasources,app_db,loaders))
,promesa.core.promise(loader_promise_24338)));

var G__24339 = cljs.core.next(seq__24294_24330__$1);
var G__24340 = null;
var G__24341 = (0);
var G__24342 = (0);
seq__24294_24318 = G__24339;
chunk__24295_24319 = G__24340;
count__24296_24320 = G__24341;
i__24297_24321 = G__24342;
continue;
}
} else {
}
}
break;
}

var G__24343 = seq__24287;
var G__24344 = chunk__24288;
var G__24345 = count__24289;
var G__24346 = (i__24290 + (1));
seq__24287 = G__24343;
chunk__24288 = G__24344;
count__24289 = G__24345;
i__24290 = G__24346;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__24287);
if(temp__5278__auto__){
var seq__24287__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24287__$1)){
var c__12440__auto__ = cljs.core.chunk_first(seq__24287__$1);
var G__24347 = cljs.core.chunk_rest(seq__24287__$1);
var G__24348 = c__12440__auto__;
var G__24349 = cljs.core.count(c__12440__auto__);
var G__24350 = (0);
seq__24287 = G__24347;
chunk__24288 = G__24348;
count__24289 = G__24349;
i__24290 = G__24350;
continue;
} else {
var vec__24304 = cljs.core.first(seq__24287__$1);
var loader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24304,(0),null);
var pending_datasources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24304,(1),null);
var promises_24351 = (loader.cljs$core$IFn$_invoke$arity$2 ? loader.cljs$core$IFn$_invoke$arity$2(pending_datasources,context) : loader.call(null,pending_datasources,context));
var seq__24307_24352 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,promises_24351));
var chunk__24308_24353 = null;
var count__24309_24354 = (0);
var i__24310_24355 = (0);
while(true){
if((i__24310_24355 < count__24309_24354)){
var vec__24311_24356 = chunk__24308_24353.cljs$core$IIndexed$_nth$arity$2(null,i__24310_24355);
var idx_24357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24311_24356,(0),null);
var loader_promise_24358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24311_24356,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24311_24356,idx_24357,loader_promise_24358,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24357);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24311_24356,idx_24357,loader_promise_24358,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders))
,promesa.core.map(((function (seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24311_24356,idx_24357,loader_promise_24358,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24357);
var processor = (function (){var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24311_24356,idx_24357,loader_promise_24358,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders))
,promesa.core.promise(loader_promise_24358)));

var G__24359 = seq__24307_24352;
var G__24360 = chunk__24308_24353;
var G__24361 = count__24309_24354;
var G__24362 = (i__24310_24355 + (1));
seq__24307_24352 = G__24359;
chunk__24308_24353 = G__24360;
count__24309_24354 = G__24361;
i__24310_24355 = G__24362;
continue;
} else {
var temp__5278__auto___24363__$1 = cljs.core.seq(seq__24307_24352);
if(temp__5278__auto___24363__$1){
var seq__24307_24364__$1 = temp__5278__auto___24363__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24307_24364__$1)){
var c__12440__auto___24365 = cljs.core.chunk_first(seq__24307_24364__$1);
var G__24366 = cljs.core.chunk_rest(seq__24307_24364__$1);
var G__24367 = c__12440__auto___24365;
var G__24368 = cljs.core.count(c__12440__auto___24365);
var G__24369 = (0);
seq__24307_24352 = G__24366;
chunk__24308_24353 = G__24367;
count__24309_24354 = G__24368;
i__24310_24355 = G__24369;
continue;
} else {
var vec__24314_24370 = cljs.core.first(seq__24307_24364__$1);
var idx_24371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24314_24370,(0),null);
var loader_promise_24372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24314_24370,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24314_24370,idx_24371,loader_promise_24372,seq__24307_24364__$1,temp__5278__auto___24363__$1,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24371);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24314_24370,idx_24371,loader_promise_24372,seq__24307_24364__$1,temp__5278__auto___24363__$1,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders))
,promesa.core.map(((function (seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24314_24370,idx_24371,loader_promise_24372,seq__24307_24364__$1,temp__5278__auto___24363__$1,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24371);
var processor = (function (){var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24307_24352,chunk__24308_24353,count__24309_24354,i__24310_24355,seq__24287,chunk__24288,count__24289,i__24290,vec__24314_24370,idx_24371,loader_promise_24372,seq__24307_24364__$1,temp__5278__auto___24363__$1,promises_24351,vec__24304,loader,pending_datasources,seq__24287__$1,temp__5278__auto__,app_db,loaders))
,promesa.core.promise(loader_promise_24372)));

var G__24373 = cljs.core.next(seq__24307_24364__$1);
var G__24374 = null;
var G__24375 = (0);
var G__24376 = (0);
seq__24307_24352 = G__24373;
chunk__24308_24353 = G__24374;
count__24309_24354 = G__24375;
i__24310_24355 = G__24376;
continue;
}
} else {
}
}
break;
}

var G__24377 = cljs.core.next(seq__24287__$1);
var G__24378 = null;
var G__24379 = (0);
var G__24380 = (0);
seq__24287 = G__24377;
chunk__24288 = G__24378;
count__24289 = G__24379;
i__24290 = G__24380;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_ = (function keechma$toolbox$dataloader$core$has_pending_datasources_QMARK_(app_db){
var statuses = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24382){
var vec__24383 = p__24382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24383,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24383,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,cljs.core.cst$kw$status);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.dataloader.core.id_key], null)));
return cljs.core.boolean$(cljs.core.some(((function (statuses){
return (function (p1__24381_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,p1__24381_SHARP_);
});})(statuses))
,statuses));
});
keechma.toolbox.dataloader.core.store_datasource_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_BANG_(app_db_atom,edb_schema,payload){
var app_db = cljs.core.deref(app_db_atom);
var datasource_key = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(payload);
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(payload);
var value_keys = ((cljs.core.map_QMARK_(value))?cljs.core.set(cljs.core.keys(value)):cljs.core.PersistentHashSet.EMPTY);
var vec__24386 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,null,cljs.core.cst$kw$data,null], null), null),value_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(value),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(value)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,cljs.core.PersistentArrayMap.EMPTY], null));
var res_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24386,(0),null);
var res_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24386,(1),null);
return cljs.core.reset_BANG_(app_db_atom,keechma.toolbox.dataloader.core.save_data(keechma.toolbox.dataloader.core.save_meta(app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$completed,cljs.core.cst$kw$params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(payload),cljs.core.cst$kw$error,null,cljs.core.cst$kw$meta,res_meta,cljs.core.cst$kw$prev,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$status,null,cljs.core.cst$kw$error,null,cljs.core.cst$kw$params,null], null),cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(payload)], 0))], null)),edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(payload),res_data));
});
keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_dependent_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema,context){
var app_db = cljs.core.deref(app_db_atom);
var statuses = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (app_db){
return (function (acc,datasource_key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,datasource_key,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key)));
});})(app_db))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(app_datasources));
var fulfilled = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (app_db,statuses){
return (function (acc,p__24390){
var vec__24391 = p__24390;
var datasource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key)))) && (cljs.core.every_QMARK_(((function (vec__24391,datasource_key,val,app_db,statuses){
return (function (p1__24389_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$completed,p1__24389_SHARP_);
});})(vec__24391,datasource_key,val,app_db,statuses))
,cljs.core.vals(cljs.core.select_keys(statuses,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(val)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,datasource_key,val);
} else {
return acc;
}
});})(app_db,statuses))
,cljs.core.PersistentArrayMap.EMPTY,datasources);
return keechma.toolbox.dataloader.core.start_loaders_BANG_(app_db_atom,app_datasources,fulfilled,results_chan,edb_schema,context);
});
keechma.toolbox.dataloader.core.store_datasource_error_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_error_BANG_(app_db,edb_schema,payload){
var datasource_key = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(payload);
return keechma.toolbox.dataloader.core.save_data(keechma.toolbox.dataloader.core.save_meta(app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$error,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(payload),cljs.core.cst$kw$error,cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(payload),null);
});
keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_ = (function keechma$toolbox$dataloader$core$mark_dependent_errors_BANG_(app_db,app_datasources,datasources,edb_schema,payload){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24394){
var vec__24395 = p__24394;
var datasource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395,(1),null);
return keechma.toolbox.dataloader.core.save_data(keechma.toolbox.dataloader.core.save_meta(app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$error,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$error,cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val),null);
}),app_db,datasources);
});
keechma.toolbox.dataloader.core.mark_pending_BANG_ = (function keechma$toolbox$dataloader$core$mark_pending_BANG_(app_db_atom,edb_schema,datasources){
var app_db = cljs.core.deref(app_db_atom);
return cljs.core.reset_BANG_(app_db_atom,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (app_db){
return (function (acc,p__24398){
var vec__24399 = p__24398;
var datasource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(1),null);
var prev_value = keechma.toolbox.dataloader.core.get_data(acc,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val));
var prev_datasource = keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key);
return keechma.toolbox.dataloader.core.save_meta(acc,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$pending,cljs.core.cst$kw$prev,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(prev_datasource,cljs.core.cst$kw$prev),cljs.core.cst$kw$value,prev_value)], null));
});})(app_db))
,app_db,datasources));
});
keechma.toolbox.dataloader.core.datasource_params = (function keechma$toolbox$dataloader$core$datasource_params(datasources,datasource_key,datasource,app_db,edb_schema){
var params_fn = (function (){var or__11514__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(datasource);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return ((function (or__11514__auto__){
return (function() { 
var G__24402__delegate = function (args){
return null;
};
var G__24402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24403__i = 0, G__24403__a = new Array(arguments.length -  0);
while (G__24403__i < G__24403__a.length) {G__24403__a[G__24403__i] = arguments[G__24403__i + 0]; ++G__24403__i;}
  args = new cljs.core.IndexedSeq(G__24403__a,0,null);
} 
return G__24402__delegate.call(this,args);};
G__24402.cljs$lang$maxFixedArity = 0;
G__24402.cljs$lang$applyTo = (function (arglist__24404){
var args = cljs.core.seq(arglist__24404);
return G__24402__delegate(args);
});
G__24402.cljs$core$IFn$_invoke$arity$variadic = G__24402__delegate;
return G__24402;
})()
;
;})(or__11514__auto__))
}
})();
var prev = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key),cljs.core.cst$kw$data,keechma.toolbox.dataloader.core.get_data(app_db,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(datasource))], null);
var route = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route,cljs.core.cst$kw$data], null));
var deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (params_fn,prev,route){
return (function (acc,dep_key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,dep_key,keechma.toolbox.dataloader.core.get_data(app_db,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasources,dep_key))));
});})(params_fn,prev,route))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(datasource));
return (params_fn.cljs$core$IFn$_invoke$arity$3 ? params_fn.cljs$core$IFn$_invoke$arity$3(prev,route,deps) : params_fn.call(null,prev,route,deps));
});
keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_ = (function keechma$toolbox$dataloader$core$deps_fulfilled_QMARK_(app_db,datasources_plan,datasource){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (fulfilled_QMARK_,dep_key){
var dep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasources_plan,dep_key);
var and__11502__auto__ = fulfilled_QMARK_;
if(cljs.core.truth_(and__11502__auto__)){
var and__11502__auto____$1 = cljs.core.cst$kw$deps_DASH_fulfilled_QMARK_.cljs$core$IFn$_invoke$arity$1(dep);
if(cljs.core.truth_(and__11502__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$reload_QMARK_.cljs$core$IFn$_invoke$arity$1(dep));
} else {
return and__11502__auto____$1;
}
} else {
return and__11502__auto__;
}
}),true,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(datasource));
});
keechma.toolbox.dataloader.core.datasources_load_plan = (function keechma$toolbox$dataloader$core$datasources_load_plan(app_db,datasources,datasources_order,edb_schema){
var datasources_plan = cljs.core.PersistentArrayMap.EMPTY;
var datasources_order__$1 = datasources_order;
while(true){
if(cljs.core.seq(datasources_order__$1)){
var datasource_key = cljs.core.first(datasources_order__$1);
var datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasources,datasource_key);
var datasource_meta = keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key);
var datasource_deps_fulfilled_QMARK_ = keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_(app_db,datasources_plan,datasource);
var new_datasource_params = keechma.toolbox.dataloader.core.datasource_params(datasources,datasource_key,datasource,app_db,edb_schema);
var reload_QMARK_ = ((cljs.core.not(datasource_deps_fulfilled_QMARK_))?true:!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(datasource_meta),new_datasource_params)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$keechma$toolbox$dataloader$core_SLASH_ignore,new_datasource_params))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$completed,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(datasource_meta)))));
var G__24405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datasources_plan,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$deps_DASH_fulfilled_QMARK_,datasource_deps_fulfilled_QMARK_,cljs.core.cst$kw$reload_QMARK_,reload_QMARK_], null));
var G__24406 = cljs.core.rest(datasources_order__$1);
datasources_plan = G__24405;
datasources_order__$1 = G__24406;
continue;
} else {
return datasources_plan;
}
break;
}
});
keechma.toolbox.dataloader.core.make_dataloader = (function keechma$toolbox$dataloader$core$make_dataloader(var_args){
var G__24413 = arguments.length;
switch (G__24413) {
case 1:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1 = (function (datasources){
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2(datasources,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
var g = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24414){
var vec__24415 = p__24414;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24415,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24415,(1),null);
var deps = cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(val);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (deps,vec__24415,key,val){
return (function (p1__24407_SHARP_,p2__24408_SHARP_){
return com.stuartsierra.dependency.depend(p1__24407_SHARP_,key,p2__24408_SHARP_);
});})(deps,vec__24415,key,val))
,acc,deps);
}),com.stuartsierra.dependency.graph(),datasources);
var g_nodes = com.stuartsierra.dependency.nodes(g);
var independent = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (g,g_nodes){
return (function (p1__24409_SHARP_){
return !(cljs.core.contains_QMARK_(g_nodes,p1__24409_SHARP_));
});})(g,g_nodes))
,cljs.core.keys(datasources));
return ((function (g,g_nodes,independent){
return (function (app_db_atom,context){
return promesa.core.promise(((function (g,g_nodes,independent){
return (function (resolve,reject,on_cancel){
var running_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var results_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var plan = keechma.toolbox.dataloader.core.datasources_load_plan(cljs.core.deref(app_db_atom),datasources,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(independent,com.stuartsierra.dependency.topo_sort(g)),edb_schema);
var start_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (running_QMARK_,results_chan,plan,g,g_nodes,independent){
return (function (p1__24410_SHARP_){
var and__11502__auto__ = cljs.core.cst$kw$reload_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(plan,p1__24410_SHARP_));
if(cljs.core.truth_(and__11502__auto__)){
return cljs.core.cst$kw$deps_DASH_fulfilled_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(plan,p1__24410_SHARP_));
} else {
return and__11502__auto__;
}
});})(running_QMARK_,results_chan,plan,g,g_nodes,independent))
,cljs.core.keys(plan));
if(cljs.core.fn_QMARK_(on_cancel)){
var G__24418_24488 = ((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(running_QMARK_,cljs.core.not);
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
;
(on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(G__24418_24488) : on_cancel.call(null,G__24418_24488));
} else {
}

keechma.toolbox.dataloader.core.mark_pending_BANG_(app_db_atom,edb_schema,cljs.core.select_keys(datasources,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (p1__24411_SHARP_){
return cljs.core.cst$kw$reload_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(plan,p1__24411_SHARP_));
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
,cljs.core.keys(plan))));

keechma.toolbox.dataloader.core.start_loaders_BANG_(app_db_atom,datasources,cljs.core.select_keys(datasources,start_nodes),results_chan,edb_schema,context);

var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (state_24461){
var state_val_24462 = (state_24461[(1)]);
if((state_val_24462 === (7))){
var state_24461__$1 = state_24461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24461__$1,(10),results_chan);
} else {
if((state_val_24462 === (1))){
var state_24461__$1 = state_24461;
var statearr_24463_24489 = state_24461__$1;
(statearr_24463_24489[(2)] = null);

(statearr_24463_24489[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (4))){
var inst_24422 = cljs.core.deref(app_db_atom);
var inst_24423 = keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_(inst_24422);
var state_24461__$1 = state_24461;
if(cljs.core.truth_(inst_24423)){
var statearr_24464_24490 = state_24461__$1;
(statearr_24464_24490[(1)] = (7));

} else {
var statearr_24465_24491 = state_24461__$1;
(statearr_24465_24491[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (13))){
var inst_24431 = (state_24461[(7)]);
var inst_24433 = (state_24461[(8)]);
var inst_24438 = cljs.core.deref(app_db_atom);
var inst_24439 = keechma.toolbox.dataloader.core.store_datasource_error_BANG_(inst_24438,edb_schema,inst_24431);
var inst_24440 = cljs.core.select_keys(datasources,inst_24433);
var inst_24441 = keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_(inst_24439,datasources,inst_24440,edb_schema,inst_24431);
var inst_24442 = cljs.core.reset_BANG_(app_db_atom,inst_24441);
var state_24461__$1 = state_24461;
var statearr_24466_24492 = state_24461__$1;
(statearr_24466_24492[(2)] = inst_24442);

(statearr_24466_24492[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (6))){
var inst_24457 = (state_24461[(2)]);
var state_24461__$1 = state_24461;
var statearr_24467_24493 = state_24461__$1;
(statearr_24467_24493[(2)] = inst_24457);

(statearr_24467_24493[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (3))){
var inst_24459 = (state_24461[(2)]);
var state_24461__$1 = state_24461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24461__$1,inst_24459);
} else {
if((state_val_24462 === (12))){
var inst_24431 = (state_24461[(7)]);
var inst_24433 = (state_24461[(8)]);
var inst_24434 = keechma.toolbox.dataloader.core.store_datasource_BANG_(app_db_atom,edb_schema,inst_24431);
var inst_24435 = cljs.core.select_keys(datasources,inst_24433);
var inst_24436 = keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_(app_db_atom,datasources,inst_24435,results_chan,edb_schema,context);
var state_24461__$1 = (function (){var statearr_24468 = state_24461;
(statearr_24468[(9)] = inst_24434);

return statearr_24468;
})();
var statearr_24469_24494 = state_24461__$1;
(statearr_24469_24494[(2)] = inst_24436);

(statearr_24469_24494[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (2))){
var inst_24420 = cljs.core.deref(running_QMARK_);
var state_24461__$1 = state_24461;
if(cljs.core.truth_(inst_24420)){
var statearr_24470_24495 = state_24461__$1;
(statearr_24470_24495[(1)] = (4));

} else {
var statearr_24471_24496 = state_24461__$1;
(statearr_24471_24496[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (11))){
var inst_24446 = (state_24461[(2)]);
var state_24461__$1 = (function (){var statearr_24472 = state_24461;
(statearr_24472[(10)] = inst_24446);

return statearr_24472;
})();
var statearr_24473_24497 = state_24461__$1;
(statearr_24473_24497[(2)] = null);

(statearr_24473_24497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (9))){
var inst_24452 = (state_24461[(2)]);
var state_24461__$1 = state_24461;
var statearr_24474_24498 = state_24461__$1;
(statearr_24474_24498[(2)] = inst_24452);

(statearr_24474_24498[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (5))){
var inst_24454 = (new Error("Dataloader Rejected"));
var inst_24455 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_24454) : reject.call(null,inst_24454));
var state_24461__$1 = state_24461;
var statearr_24475_24499 = state_24461__$1;
(statearr_24475_24499[(2)] = inst_24455);

(statearr_24475_24499[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (14))){
var state_24461__$1 = state_24461;
var statearr_24476_24500 = state_24461__$1;
(statearr_24476_24500[(2)] = null);

(statearr_24476_24500[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (10))){
var inst_24431 = (state_24461[(7)]);
var inst_24429 = (state_24461[(2)]);
var inst_24430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24429,(0),null);
var inst_24431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24429,(1),null);
var inst_24432 = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(inst_24431__$1);
var inst_24433 = com.stuartsierra.dependency.transitive_dependents(g,inst_24432);
var state_24461__$1 = (function (){var statearr_24477 = state_24461;
(statearr_24477[(7)] = inst_24431__$1);

(statearr_24477[(8)] = inst_24433);

return statearr_24477;
})();
var G__24478_24501 = inst_24430;
var G__24478_24502__$1 = (((G__24478_24501 instanceof cljs.core.Keyword))?G__24478_24501.fqn:null);
switch (G__24478_24502__$1) {
case "ok":
var statearr_24479_24504 = state_24461__$1;
(statearr_24479_24504[(1)] = (12));


break;
case "error":
var statearr_24480_24505 = state_24461__$1;
(statearr_24480_24505[(1)] = (13));


break;
default:
var statearr_24481_24506 = state_24461__$1;
(statearr_24481_24506[(1)] = (14));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24462 === (8))){
var inst_24449 = cljs.core.deref(app_db_atom);
var inst_24450 = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(inst_24449) : resolve.call(null,inst_24449));
var state_24461__$1 = state_24461;
var statearr_24482_24507 = state_24461__$1;
(statearr_24482_24507[(2)] = inst_24450);

(statearr_24482_24507[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19193__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
;
return ((function (switch__19091__auto__,c__19193__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function() {
var keechma$toolbox$dataloader$core$state_machine__19092__auto__ = null;
var keechma$toolbox$dataloader$core$state_machine__19092__auto____0 = (function (){
var statearr_24483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24483[(0)] = keechma$toolbox$dataloader$core$state_machine__19092__auto__);

(statearr_24483[(1)] = (1));

return statearr_24483;
});
var keechma$toolbox$dataloader$core$state_machine__19092__auto____1 = (function (state_24461){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_24461);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e24484){if((e24484 instanceof Object)){
var ex__19095__auto__ = e24484;
var statearr_24485_24508 = state_24461;
(statearr_24485_24508[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24461);

return cljs.core.cst$kw$recur;
} else {
throw e24484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__24509 = state_24461;
state_24461 = G__24509;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$toolbox$dataloader$core$state_machine__19092__auto__ = function(state_24461){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$core$state_machine__19092__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$core$state_machine__19092__auto____1.call(this,state_24461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$core$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$core$state_machine__19092__auto____0;
keechma$toolbox$dataloader$core$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$core$state_machine__19092__auto____1;
return keechma$toolbox$dataloader$core$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
})();
var state__19195__auto__ = (function (){var statearr_24486 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_24486[(6)] = c__19193__auto__);

return statearr_24486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
);

return c__19193__auto__;
});})(g,g_nodes,independent))
);
});
;})(g,g_nodes,independent))
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$lang$maxFixedArity = 2;

