// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('entitydb.util');
goog.require('cljs.core');
entitydb.util.passthrough_item = (function entitydb$util$passthrough_item(item){
return item;
});
entitydb.util.add_empty_layout = (function entitydb$util$add_empty_layout(db,entity_kw){
if(((entity_kw.cljs$core$IFn$_invoke$arity$1 ? entity_kw.cljs$core$IFn$_invoke$arity$1(db) : entity_kw.call(null,db)) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,entity_kw,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$store,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$c_DASH_one,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$c_DASH_many,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return db;
}
});
entitydb.util.ensure_layout = (function entitydb$util$ensure_layout(dbal_fn){
return (function() { 
var G__24222__delegate = function (schema,db,entity_kw,args){
var db_with_layout = entitydb.util.add_empty_layout(db,entity_kw);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dbal_fn,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema,db_with_layout,entity_kw], null),args));
};
var G__24222 = function (schema,db,entity_kw,var_args){
var args = null;
if (arguments.length > 3) {
var G__24223__i = 0, G__24223__a = new Array(arguments.length -  3);
while (G__24223__i < G__24223__a.length) {G__24223__a[G__24223__i] = arguments[G__24223__i + 3]; ++G__24223__i;}
  args = new cljs.core.IndexedSeq(G__24223__a,0);
} 
return G__24222__delegate.call(this,schema,db,entity_kw,args);};
G__24222.cljs$lang$maxFixedArity = 3;
G__24222.cljs$lang$applyTo = (function (arglist__24224){
var schema = cljs.core.first(arglist__24224);
arglist__24224 = cljs.core.next(arglist__24224);
var db = cljs.core.first(arglist__24224);
arglist__24224 = cljs.core.next(arglist__24224);
var entity_kw = cljs.core.first(arglist__24224);
var args = cljs.core.rest(arglist__24224);
return G__24222__delegate(schema,db,entity_kw,args);
});
G__24222.cljs$core$IFn$_invoke$arity$variadic = G__24222__delegate;
return G__24222;
})()
;
});
entitydb.util.call_middleware = (function entitydb$util$call_middleware(get_or_set,schema,entity_kw,item){
var middlewares = (function (){var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$middleware,get_or_set], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.util.passthrough_item], null);
}
})();
var pipeline = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,middlewares);
return (pipeline.cljs$core$IFn$_invoke$arity$1 ? pipeline.cljs$core$IFn$_invoke$arity$1(item) : pipeline.call(null,item));
});
entitydb.util.call_middleware_set = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.call_middleware,cljs.core.cst$kw$set);
entitydb.util.call_middleware_get = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.call_middleware,cljs.core.cst$kw$get);
entitydb.util.get_id_fn = (function entitydb$util$get_id_fn(schema,entity_kw){
var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,cljs.core.cst$kw$id], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.cst$kw$id;
}
});
entitydb.util.get_item_id = (function entitydb$util$get_item_id(schema,entity_kw,item){
var id_fn = entitydb.util.get_id_fn(schema,entity_kw);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
});
entitydb.util.get_meta_id = (function entitydb$util$get_meta_id(entity_kw,id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,id], null);
});
entitydb.util.update_values = (function entitydb$util$update_values(var_args){
var args__11178__auto__ = [];
var len__11171__auto___24232 = arguments.length;
var i__11172__auto___24233 = (0);
while(true){
if((i__11172__auto___24233 < len__11171__auto___24232)){
args__11178__auto__.push((arguments[i__11172__auto___24233]));

var G__24234 = (i__11172__auto___24233 + (1));
i__11172__auto___24233 = G__24234;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((2) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((2)),(0),null)):null);
return entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11179__auto__);
});

entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__24228){
var vec__24229 = p__24228;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24229,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24229,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

entitydb.util.update_values.cljs$lang$maxFixedArity = (2);

entitydb.util.update_values.cljs$lang$applyTo = (function (seq24225){
var G__24226 = cljs.core.first(seq24225);
var seq24225__$1 = cljs.core.next(seq24225);
var G__24227 = cljs.core.first(seq24225__$1);
var seq24225__$2 = cljs.core.next(seq24225__$1);
return entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic(G__24226,G__24227,seq24225__$2);
});

