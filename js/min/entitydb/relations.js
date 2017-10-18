// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('entitydb.relations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('entitydb.util');
entitydb.relations.get_relations = (function entitydb$relations$get_relations(schema,entity_kw){
var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$relations], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
entitydb.relations.get_related_collection_key = (function entitydb$relations$get_related_collection_key(entity_kw,id,relation_kw){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,id,relation_kw], null);
});
entitydb.relations.remove_related_from_item = (function entitydb$relations$remove_related_from_item(related_entity_kws,item){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (item__$1,related_entity_kw){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item__$1,related_entity_kw);
}),item,related_entity_kws);
});
entitydb.relations.remove_related_collections = (function entitydb$relations$remove_related_collections(entity_kw,id,db,relation_kw,p__24170){
var vec__24171 = p__24170;
var relation_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24171,(0),null);
var related_entity_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24171,(1),null);
var collection_key = entitydb.relations.get_related_collection_key(entity_kw,id,relation_kw);
var collection_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relation_type,cljs.core.cst$kw$one))?cljs.core.cst$kw$c_DASH_one:cljs.core.cst$kw$c_DASH_many);
var collections_without_related = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [related_entity_kw,collection_type], null)),collection_key);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [related_entity_kw,collection_type], null),collections_without_related);
});
