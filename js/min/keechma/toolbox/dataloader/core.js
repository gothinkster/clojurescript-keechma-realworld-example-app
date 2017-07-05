// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.dataloader.core');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('entitydb.core');
keechma.toolbox.dataloader.core.id_key = cljs.core.cst$kw$keechma$toolbox$dataloader$core_SLASH_dataloader;
keechma.toolbox.dataloader.core.target__GT_edb = (function keechma$toolbox$dataloader$core$target__GT_edb(target){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(target)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(target))], null);
});
keechma.toolbox.dataloader.core.save_kv_data = (function keechma$toolbox$dataloader$core$save_kv_data(app_db,target,data){
return cljs.core.assoc_in(app_db,target,data);
});
keechma.toolbox.dataloader.core.save_edb_named_item = (function keechma$toolbox$dataloader$core$save_edb_named_item(app_db,edb_schema,target,data){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24341 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24341,(0),null);
var named_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24341,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_db,cljs.core.cst$kw$entity_DASH_db,(cljs.core.truth_(data)?entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$5(edb_schema,edb,entity,named_item,data):entitydb.core.remove_named_item(edb,entity,named_item)));
});
keechma.toolbox.dataloader.core.save_edb_collection = (function keechma$toolbox$dataloader$core$save_edb_collection(app_db,edb_schema,target,data){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24347 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24347,(0),null);
var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24347,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_db,cljs.core.cst$kw$entity_DASH_db,((cljs.core.seq(data))?entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$5(edb_schema,edb,entity,collection,data):entitydb.core.remove_collection(edb,entity,collection)));
});
keechma.toolbox.dataloader.core.get_edb_named_item = (function keechma$toolbox$dataloader$core$get_edb_named_item(app_db,edb_schema,target){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24353 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(0),null);
var named_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(1),null);
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$4(edb_schema,edb,entity,named_item);
});
keechma.toolbox.dataloader.core.get_edb_collection = (function keechma$toolbox$dataloader$core$get_edb_collection(app_db,edb_schema,target){
var edb = cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(app_db);
var vec__24359 = keechma.toolbox.dataloader.core.target__GT_edb(target);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(0),null);
var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(1),null);
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
var G__24363 = (((target_start instanceof cljs.core.Keyword))?target_start.fqn:null);
switch (G__24363) {
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
var G__24366 = (((target_start instanceof cljs.core.Keyword))?target_start.fqn:null);
switch (G__24366) {
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
var vec__24371 = cljs.core.first(ds);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24371,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24371,(1),null);
var prev = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,keechma.toolbox.dataloader.core.get_data(app_db,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val)),cljs.core.cst$kw$meta,keechma.toolbox.dataloader.core.get_meta(app_db,key)], null);
var params_fn = (function (){var or__9992__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return ((function (ds,loaders,or__9992__auto__,vec__24371,key,val,prev,route_params){
return (function() { 
var G__24374__delegate = function (args){
return null;
};
var G__24374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24375__i = 0, G__24375__a = new Array(arguments.length -  0);
while (G__24375__i < G__24375__a.length) {G__24375__a[G__24375__i] = arguments[G__24375__i + 0]; ++G__24375__i;}
  args = new cljs.core.IndexedSeq(G__24375__a,0);
} 
return G__24374__delegate.call(this,args);};
G__24374.cljs$lang$maxFixedArity = 0;
G__24374.cljs$lang$applyTo = (function (arglist__24376){
var args = cljs.core.seq(arglist__24376);
return G__24374__delegate(args);
});
G__24374.cljs$core$IFn$_invoke$arity$variadic = G__24374__delegate;
return G__24374;
})()
;
;})(ds,loaders,or__9992__auto__,vec__24371,key,val,prev,route_params))
}
})();
var deps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ds,loaders,vec__24371,key,val,prev,params_fn,route_params){
return (function (acc,dep_key){
var dep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_datasources,dep_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,dep_key,keechma.toolbox.dataloader.core.get_data(app_db,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(dep)));
});})(ds,loaders,vec__24371,key,val,prev,params_fn,route_params))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(val));
var params = (params_fn.cljs$core$IFn$_invoke$arity$3 ? params_fn.cljs$core$IFn$_invoke$arity$3(prev,route_params,deps) : params_fn.call(null,prev,route_params,deps));
var loader = (function (){var or__9992__auto__ = cljs.core.cst$kw$loader.cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.identity;
}
})();
var target = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val);
var current_loaders = (function (){var or__9992__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(loaders,loader);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var G__24377 = cljs.core.rest(ds);
var G__24378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loaders,loader,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_loaders,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$prev,prev,cljs.core.cst$kw$datasource,key,cljs.core.cst$kw$app_DASH_db,app_db,cljs.core.cst$kw$target,target], null)));
ds = G__24377;
loaders = G__24378;
continue;
}
break;
}
});
keechma.toolbox.dataloader.core.start_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema){
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var loaders = keechma.toolbox.dataloader.core.datasources__GT_loaders(app_datasources,datasources,app_db,results_chan,edb_schema);
var seq__24409 = cljs.core.seq(loaders);
var chunk__24410 = null;
var count__24411 = (0);
var i__24412 = (0);
while(true){
if((i__24412 < count__24411)){
var vec__24413 = chunk__24410.cljs$core$IIndexed$_nth$arity$2(null,i__24412);
var loader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24413,(0),null);
var pending_datasources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24413,(1),null);
var promises_24439 = (loader.cljs$core$IFn$_invoke$arity$1 ? loader.cljs$core$IFn$_invoke$arity$1(pending_datasources) : loader.call(null,pending_datasources));
var seq__24416_24440 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,promises_24439));
var chunk__24417_24441 = null;
var count__24418_24442 = (0);
var i__24419_24443 = (0);
while(true){
if((i__24419_24443 < count__24418_24442)){
var vec__24420_24444 = chunk__24417_24441.cljs$core$IIndexed$_nth$arity$2(null,i__24419_24443);
var idx_24445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24420_24444,(0),null);
var loader_promise_24446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24420_24444,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24420_24444,idx_24445,loader_promise_24446,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24445);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24420_24444,idx_24445,loader_promise_24446,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders))
,promesa.core.map(((function (seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24420_24444,idx_24445,loader_promise_24446,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24445);
var processor = (function (){var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24420_24444,idx_24445,loader_promise_24446,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders))
,promesa.core.promise(loader_promise_24446)));

var G__24447 = seq__24416_24440;
var G__24448 = chunk__24417_24441;
var G__24449 = count__24418_24442;
var G__24450 = (i__24419_24443 + (1));
seq__24416_24440 = G__24447;
chunk__24417_24441 = G__24448;
count__24418_24442 = G__24449;
i__24419_24443 = G__24450;
continue;
} else {
var temp__6753__auto___24451 = cljs.core.seq(seq__24416_24440);
if(temp__6753__auto___24451){
var seq__24416_24452__$1 = temp__6753__auto___24451;
if(cljs.core.chunked_seq_QMARK_(seq__24416_24452__$1)){
var c__10895__auto___24453 = cljs.core.chunk_first(seq__24416_24452__$1);
var G__24454 = cljs.core.chunk_rest(seq__24416_24452__$1);
var G__24455 = c__10895__auto___24453;
var G__24456 = cljs.core.count(c__10895__auto___24453);
var G__24457 = (0);
seq__24416_24440 = G__24454;
chunk__24417_24441 = G__24455;
count__24418_24442 = G__24456;
i__24419_24443 = G__24457;
continue;
} else {
var vec__24423_24458 = cljs.core.first(seq__24416_24452__$1);
var idx_24459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24423_24458,(0),null);
var loader_promise_24460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24423_24458,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24423_24458,idx_24459,loader_promise_24460,seq__24416_24452__$1,temp__6753__auto___24451,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24459);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24423_24458,idx_24459,loader_promise_24460,seq__24416_24452__$1,temp__6753__auto___24451,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders))
,promesa.core.map(((function (seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24423_24458,idx_24459,loader_promise_24460,seq__24416_24452__$1,temp__6753__auto___24451,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24459);
var processor = (function (){var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24416_24440,chunk__24417_24441,count__24418_24442,i__24419_24443,seq__24409,chunk__24410,count__24411,i__24412,vec__24423_24458,idx_24459,loader_promise_24460,seq__24416_24452__$1,temp__6753__auto___24451,promises_24439,vec__24413,loader,pending_datasources,app_db,loaders))
,promesa.core.promise(loader_promise_24460)));

var G__24461 = cljs.core.next(seq__24416_24452__$1);
var G__24462 = null;
var G__24463 = (0);
var G__24464 = (0);
seq__24416_24440 = G__24461;
chunk__24417_24441 = G__24462;
count__24418_24442 = G__24463;
i__24419_24443 = G__24464;
continue;
}
} else {
}
}
break;
}

var G__24465 = seq__24409;
var G__24466 = chunk__24410;
var G__24467 = count__24411;
var G__24468 = (i__24412 + (1));
seq__24409 = G__24465;
chunk__24410 = G__24466;
count__24411 = G__24467;
i__24412 = G__24468;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__24409);
if(temp__6753__auto__){
var seq__24409__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24409__$1)){
var c__10895__auto__ = cljs.core.chunk_first(seq__24409__$1);
var G__24469 = cljs.core.chunk_rest(seq__24409__$1);
var G__24470 = c__10895__auto__;
var G__24471 = cljs.core.count(c__10895__auto__);
var G__24472 = (0);
seq__24409 = G__24469;
chunk__24410 = G__24470;
count__24411 = G__24471;
i__24412 = G__24472;
continue;
} else {
var vec__24426 = cljs.core.first(seq__24409__$1);
var loader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24426,(0),null);
var pending_datasources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24426,(1),null);
var promises_24473 = (loader.cljs$core$IFn$_invoke$arity$1 ? loader.cljs$core$IFn$_invoke$arity$1(pending_datasources) : loader.call(null,pending_datasources));
var seq__24429_24474 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,promises_24473));
var chunk__24430_24475 = null;
var count__24431_24476 = (0);
var i__24432_24477 = (0);
while(true){
if((i__24432_24477 < count__24431_24476)){
var vec__24433_24478 = chunk__24430_24475.cljs$core$IIndexed$_nth$arity$2(null,i__24432_24477);
var idx_24479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433_24478,(0),null);
var loader_promise_24480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433_24478,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24433_24478,idx_24479,loader_promise_24480,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24479);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24433_24478,idx_24479,loader_promise_24480,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders))
,promesa.core.map(((function (seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24433_24478,idx_24479,loader_promise_24480,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24479);
var processor = (function (){var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24433_24478,idx_24479,loader_promise_24480,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders))
,promesa.core.promise(loader_promise_24480)));

var G__24481 = seq__24429_24474;
var G__24482 = chunk__24430_24475;
var G__24483 = count__24431_24476;
var G__24484 = (i__24432_24477 + (1));
seq__24429_24474 = G__24481;
chunk__24430_24475 = G__24482;
count__24431_24476 = G__24483;
i__24432_24477 = G__24484;
continue;
} else {
var temp__6753__auto___24485__$1 = cljs.core.seq(seq__24429_24474);
if(temp__6753__auto___24485__$1){
var seq__24429_24486__$1 = temp__6753__auto___24485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24429_24486__$1)){
var c__10895__auto___24487 = cljs.core.chunk_first(seq__24429_24486__$1);
var G__24488 = cljs.core.chunk_rest(seq__24429_24486__$1);
var G__24489 = c__10895__auto___24487;
var G__24490 = cljs.core.count(c__10895__auto___24487);
var G__24491 = (0);
seq__24429_24474 = G__24488;
chunk__24430_24475 = G__24489;
count__24431_24476 = G__24490;
i__24432_24477 = G__24491;
continue;
} else {
var vec__24436_24492 = cljs.core.first(seq__24429_24486__$1);
var idx_24493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436_24492,(0),null);
var loader_promise_24494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24436_24492,(1),null);
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24436_24492,idx_24493,loader_promise_24494,seq__24429_24486__$1,temp__6753__auto___24485__$1,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24493);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$error,error)], null));
});})(seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24436_24492,idx_24493,loader_promise_24494,seq__24429_24486__$1,temp__6753__auto___24485__$1,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders))
,promesa.core.map(((function (seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24436_24492,idx_24493,loader_promise_24494,seq__24429_24486__$1,temp__6753__auto___24485__$1,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pending_datasources,idx_24493);
var processor = (function (){var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(pending_datasource),cljs.core.cst$kw$processor], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending_datasource,cljs.core.cst$kw$value,(processor.cljs$core$IFn$_invoke$arity$2 ? processor.cljs$core$IFn$_invoke$arity$2(value,pending_datasource) : processor.call(null,value,pending_datasource)))], null));
});})(seq__24429_24474,chunk__24430_24475,count__24431_24476,i__24432_24477,seq__24409,chunk__24410,count__24411,i__24412,vec__24436_24492,idx_24493,loader_promise_24494,seq__24429_24486__$1,temp__6753__auto___24485__$1,promises_24473,vec__24426,loader,pending_datasources,seq__24409__$1,temp__6753__auto__,app_db,loaders))
,promesa.core.promise(loader_promise_24494)));

var G__24495 = cljs.core.next(seq__24429_24486__$1);
var G__24496 = null;
var G__24497 = (0);
var G__24498 = (0);
seq__24429_24474 = G__24495;
chunk__24430_24475 = G__24496;
count__24431_24476 = G__24497;
i__24432_24477 = G__24498;
continue;
}
} else {
}
}
break;
}

var G__24499 = cljs.core.next(seq__24409__$1);
var G__24500 = null;
var G__24501 = (0);
var G__24502 = (0);
seq__24409 = G__24499;
chunk__24410 = G__24500;
count__24411 = G__24501;
i__24412 = G__24502;
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
var statuses = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24508){
var vec__24509 = p__24508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24509,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,cljs.core.cst$kw$status);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.dataloader.core.id_key], null)));
return cljs.core.boolean$(cljs.core.some(((function (statuses){
return (function (p1__24503_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,p1__24503_SHARP_);
});})(statuses))
,statuses));
});
keechma.toolbox.dataloader.core.store_datasource_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_BANG_(app_db_atom,edb_schema,payload){
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var datasource_key = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(payload);
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(payload);
var value_keys = ((cljs.core.map_QMARK_(value))?cljs.core.set(cljs.core.keys(value)):cljs.core.PersistentHashSet.EMPTY);
var vec__24517 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$meta,null,cljs.core.cst$kw$data,null], null), null),value_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(value),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(value)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,cljs.core.PersistentArrayMap.EMPTY], null));
var res_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24517,(0),null);
var res_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24517,(1),null);
var G__24520 = app_db_atom;
var G__24521 = keechma.toolbox.dataloader.core.save_data(keechma.toolbox.dataloader.core.save_meta(app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$completed,cljs.core.cst$kw$params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(payload),cljs.core.cst$kw$error,null,cljs.core.cst$kw$meta,res_meta,cljs.core.cst$kw$prev,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$status,null,cljs.core.cst$kw$error,null,cljs.core.cst$kw$params,null], null),cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(payload)], 0))], null)),edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(payload),res_data);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24520,G__24521) : cljs.core.reset_BANG_.call(null,G__24520,G__24521));
});
keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_dependent_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema){
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var statuses = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (app_db){
return (function (acc,datasource_key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,datasource_key,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key)));
});})(app_db))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(app_datasources));
var fulfilled = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (app_db,statuses){
return (function (acc,p__24527){
var vec__24528 = p__24527;
var datasource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24528,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24528,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key)))) && (cljs.core.every_QMARK_(((function (vec__24528,datasource_key,val,app_db,statuses){
return (function (p1__24522_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$completed,p1__24522_SHARP_);
});})(vec__24528,datasource_key,val,app_db,statuses))
,cljs.core.vals(cljs.core.select_keys(statuses,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(val)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,datasource_key,val);
} else {
return acc;
}
});})(app_db,statuses))
,cljs.core.PersistentArrayMap.EMPTY,datasources);
return keechma.toolbox.dataloader.core.start_loaders_BANG_(app_db_atom,app_datasources,fulfilled,results_chan,edb_schema);
});
keechma.toolbox.dataloader.core.store_datasource_error_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_error_BANG_(app_db,edb_schema,payload){
var datasource_key = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(payload);
return keechma.toolbox.dataloader.core.save_data(keechma.toolbox.dataloader.core.save_meta(app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$error,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(payload),cljs.core.cst$kw$error,cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(payload),null);
});
keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_ = (function keechma$toolbox$dataloader$core$mark_dependent_errors_BANG_(app_db,app_datasources,datasources,edb_schema,payload){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24535){
var vec__24536 = p__24535;
var datasource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24536,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24536,(1),null);
return keechma.toolbox.dataloader.core.save_data(keechma.toolbox.dataloader.core.save_meta(app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$error,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$error,cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val),null);
}),app_db,datasources);
});
keechma.toolbox.dataloader.core.mark_pending_BANG_ = (function keechma$toolbox$dataloader$core$mark_pending_BANG_(app_db_atom,edb_schema,datasources){
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var G__24545 = app_db_atom;
var G__24546 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__24545,app_db){
return (function (acc,p__24547){
var vec__24548 = p__24547;
var datasource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24548,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24548,(1),null);
var prev_value = keechma.toolbox.dataloader.core.get_data(acc,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(val));
var prev_datasource = keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key);
return keechma.toolbox.dataloader.core.save_meta(acc,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$pending,cljs.core.cst$kw$prev,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(prev_datasource,cljs.core.cst$kw$prev),cljs.core.cst$kw$value,prev_value)], null));
});})(G__24545,app_db))
,app_db,datasources);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24545,G__24546) : cljs.core.reset_BANG_.call(null,G__24545,G__24546));
});
keechma.toolbox.dataloader.core.datasource_params = (function keechma$toolbox$dataloader$core$datasource_params(datasources,datasource_key,datasource,app_db,edb_schema){
var params_fn = (function (){var or__9992__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(datasource);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return ((function (or__9992__auto__){
return (function() { 
var G__24551__delegate = function (args){
return null;
};
var G__24551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24552__i = 0, G__24552__a = new Array(arguments.length -  0);
while (G__24552__i < G__24552__a.length) {G__24552__a[G__24552__i] = arguments[G__24552__i + 0]; ++G__24552__i;}
  args = new cljs.core.IndexedSeq(G__24552__a,0);
} 
return G__24551__delegate.call(this,args);};
G__24551.cljs$lang$maxFixedArity = 0;
G__24551.cljs$lang$applyTo = (function (arglist__24553){
var args = cljs.core.seq(arglist__24553);
return G__24551__delegate(args);
});
G__24551.cljs$core$IFn$_invoke$arity$variadic = G__24551__delegate;
return G__24551;
})()
;
;})(or__9992__auto__))
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
var and__9980__auto__ = fulfilled_QMARK_;
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = cljs.core.cst$kw$deps_DASH_fulfilled_QMARK_.cljs$core$IFn$_invoke$arity$1(dep);
if(cljs.core.truth_(and__9980__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$reload_QMARK_.cljs$core$IFn$_invoke$arity$1(dep));
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
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
var G__24554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datasources_plan,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$deps_DASH_fulfilled_QMARK_,datasource_deps_fulfilled_QMARK_,cljs.core.cst$kw$reload_QMARK_,reload_QMARK_], null));
var G__24555 = cljs.core.rest(datasources_order__$1);
datasources_plan = G__24554;
datasources_order__$1 = G__24555;
continue;
} else {
return datasources_plan;
}
break;
}
});
keechma.toolbox.dataloader.core.make_dataloader = (function keechma$toolbox$dataloader$core$make_dataloader(var_args){
var args24561 = [];
var len__11171__auto___24640 = arguments.length;
var i__11172__auto___24641 = (0);
while(true){
if((i__11172__auto___24641 < len__11171__auto___24640)){
args24561.push((arguments[i__11172__auto___24641]));

var G__24642 = (i__11172__auto___24641 + (1));
i__11172__auto___24641 = G__24642;
continue;
} else {
}
break;
}

var G__24563 = args24561.length;
switch (G__24563) {
case 1:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24561.length)].join('')));

}
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1 = (function (datasources){
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2(datasources,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
var g = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24564){
var vec__24565 = p__24564;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565,(1),null);
var deps = cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(val);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (deps,vec__24565,key,val){
return (function (p1__24556_SHARP_,p2__24557_SHARP_){
return com.stuartsierra.dependency.depend(p1__24556_SHARP_,key,p2__24557_SHARP_);
});})(deps,vec__24565,key,val))
,acc,deps);
}),com.stuartsierra.dependency.graph(),datasources);
var g_nodes = com.stuartsierra.dependency.nodes(g);
var independent = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (g,g_nodes){
return (function (p1__24558_SHARP_){
return !(cljs.core.contains_QMARK_(g_nodes,p1__24558_SHARP_));
});})(g,g_nodes))
,cljs.core.keys(datasources));
return ((function (g,g_nodes,independent){
return (function (app_db_atom){
return promesa.core.promise(((function (g,g_nodes,independent){
return (function (resolve,reject,on_cancel){
var running_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
var results_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var plan = keechma.toolbox.dataloader.core.datasources_load_plan((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),datasources,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(independent,com.stuartsierra.dependency.topo_sort(g)),edb_schema);
var start_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (running_QMARK_,results_chan,plan,g,g_nodes,independent){
return (function (p1__24559_SHARP_){
var and__9980__auto__ = cljs.core.cst$kw$reload_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(plan,p1__24559_SHARP_));
if(cljs.core.truth_(and__9980__auto__)){
return cljs.core.cst$kw$deps_DASH_fulfilled_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(plan,p1__24559_SHARP_));
} else {
return and__9980__auto__;
}
});})(running_QMARK_,results_chan,plan,g,g_nodes,independent))
,cljs.core.keys(plan));
if(cljs.core.fn_QMARK_(on_cancel)){
var G__24568_24644 = ((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(running_QMARK_,cljs.core.not);
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
;
(on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(G__24568_24644) : on_cancel.call(null,G__24568_24644));
} else {
}

keechma.toolbox.dataloader.core.mark_pending_BANG_(app_db_atom,edb_schema,cljs.core.select_keys(datasources,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (p1__24560_SHARP_){
return cljs.core.cst$kw$reload_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(plan,p1__24560_SHARP_));
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
,cljs.core.keys(plan))));

keechma.toolbox.dataloader.core.start_loaders_BANG_(app_db_atom,datasources,cljs.core.select_keys(datasources,start_nodes),results_chan,edb_schema);

var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (state_24611){
var state_val_24612 = (state_24611[(1)]);
if((state_val_24612 === (7))){
var state_24611__$1 = state_24611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24611__$1,(10),results_chan);
} else {
if((state_val_24612 === (1))){
var state_24611__$1 = state_24611;
var statearr_24613_24645 = state_24611__$1;
(statearr_24613_24645[(2)] = null);

(statearr_24613_24645[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (4))){
var inst_24572 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_24573 = keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_(inst_24572);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24573)){
var statearr_24614_24646 = state_24611__$1;
(statearr_24614_24646[(1)] = (7));

} else {
var statearr_24615_24647 = state_24611__$1;
(statearr_24615_24647[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (13))){
var inst_24581 = (state_24611[(7)]);
var inst_24583 = (state_24611[(8)]);
var inst_24588 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_24589 = keechma.toolbox.dataloader.core.store_datasource_error_BANG_(inst_24588,edb_schema,inst_24581);
var inst_24590 = cljs.core.select_keys(datasources,inst_24583);
var inst_24591 = keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_(inst_24589,datasources,inst_24590,edb_schema,inst_24581);
var inst_24592 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(app_db_atom,inst_24591) : cljs.core.reset_BANG_.call(null,app_db_atom,inst_24591));
var state_24611__$1 = state_24611;
var statearr_24616_24648 = state_24611__$1;
(statearr_24616_24648[(2)] = inst_24592);

(statearr_24616_24648[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (6))){
var inst_24607 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24617_24649 = state_24611__$1;
(statearr_24617_24649[(2)] = inst_24607);

(statearr_24617_24649[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (3))){
var inst_24609 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24611__$1,inst_24609);
} else {
if((state_val_24612 === (12))){
var inst_24581 = (state_24611[(7)]);
var inst_24583 = (state_24611[(8)]);
var inst_24584 = keechma.toolbox.dataloader.core.store_datasource_BANG_(app_db_atom,edb_schema,inst_24581);
var inst_24585 = cljs.core.select_keys(datasources,inst_24583);
var inst_24586 = keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_(app_db_atom,datasources,inst_24585,results_chan,edb_schema);
var state_24611__$1 = (function (){var statearr_24618 = state_24611;
(statearr_24618[(9)] = inst_24584);

return statearr_24618;
})();
var statearr_24619_24650 = state_24611__$1;
(statearr_24619_24650[(2)] = inst_24586);

(statearr_24619_24650[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (2))){
var inst_24570 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(running_QMARK_) : cljs.core.deref.call(null,running_QMARK_));
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24570)){
var statearr_24620_24651 = state_24611__$1;
(statearr_24620_24651[(1)] = (4));

} else {
var statearr_24621_24652 = state_24611__$1;
(statearr_24621_24652[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (11))){
var inst_24596 = (state_24611[(2)]);
var state_24611__$1 = (function (){var statearr_24622 = state_24611;
(statearr_24622[(10)] = inst_24596);

return statearr_24622;
})();
var statearr_24623_24653 = state_24611__$1;
(statearr_24623_24653[(2)] = null);

(statearr_24623_24653[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (9))){
var inst_24602 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24624_24654 = state_24611__$1;
(statearr_24624_24654[(2)] = inst_24602);

(statearr_24624_24654[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (5))){
var inst_24604 = (new Error("Dataloader Rejected"));
var inst_24605 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_24604) : reject.call(null,inst_24604));
var state_24611__$1 = state_24611;
var statearr_24625_24655 = state_24611__$1;
(statearr_24625_24655[(2)] = inst_24605);

(statearr_24625_24655[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (14))){
var state_24611__$1 = state_24611;
var statearr_24626_24656 = state_24611__$1;
(statearr_24626_24656[(2)] = null);

(statearr_24626_24656[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (10))){
var inst_24581 = (state_24611[(7)]);
var inst_24579 = (state_24611[(2)]);
var inst_24580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24579,(0),null);
var inst_24581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24579,(1),null);
var inst_24582 = cljs.core.cst$kw$datasource.cljs$core$IFn$_invoke$arity$1(inst_24581__$1);
var inst_24583 = com.stuartsierra.dependency.transitive_dependents(g,inst_24582);
var state_24611__$1 = (function (){var statearr_24627 = state_24611;
(statearr_24627[(7)] = inst_24581__$1);

(statearr_24627[(8)] = inst_24583);

return statearr_24627;
})();
var G__24628_24657 = (((inst_24580 instanceof cljs.core.Keyword))?inst_24580.fqn:null);
switch (G__24628_24657) {
case "ok":
var statearr_24629_24659 = state_24611__$1;
(statearr_24629_24659[(1)] = (12));


break;
case "error":
var statearr_24630_24660 = state_24611__$1;
(statearr_24630_24660[(1)] = (13));


break;
default:
var statearr_24631_24661 = state_24611__$1;
(statearr_24631_24661[(1)] = (14));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24612 === (8))){
var inst_24599 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_24600 = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(inst_24599) : resolve.call(null,inst_24599));
var state_24611__$1 = state_24611;
var statearr_24632_24662 = state_24611__$1;
(statearr_24632_24662[(2)] = inst_24600);

(statearr_24632_24662[(1)] = (9));


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
});})(c__17677__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
;
return ((function (switch__17551__auto__,c__17677__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function() {
var keechma$toolbox$dataloader$core$state_machine__17552__auto__ = null;
var keechma$toolbox$dataloader$core$state_machine__17552__auto____0 = (function (){
var statearr_24636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24636[(0)] = keechma$toolbox$dataloader$core$state_machine__17552__auto__);

(statearr_24636[(1)] = (1));

return statearr_24636;
});
var keechma$toolbox$dataloader$core$state_machine__17552__auto____1 = (function (state_24611){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_24611);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e24637){if((e24637 instanceof Object)){
var ex__17555__auto__ = e24637;
var statearr_24638_24663 = state_24611;
(statearr_24638_24663[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24611);

return cljs.core.cst$kw$recur;
} else {
throw e24637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__24664 = state_24611;
state_24611 = G__24664;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$toolbox$dataloader$core$state_machine__17552__auto__ = function(state_24611){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$core$state_machine__17552__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$core$state_machine__17552__auto____1.call(this,state_24611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$dataloader$core$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$core$state_machine__17552__auto____0;
keechma$toolbox$dataloader$core$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$core$state_machine__17552__auto____1;
return keechma$toolbox$dataloader$core$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
})();
var state__17679__auto__ = (function (){var statearr_24639 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_24639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_24639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
);

return c__17677__auto__;
});})(g,g_nodes,independent))
);
});
;})(g,g_nodes,independent))
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$lang$maxFixedArity = 2;

