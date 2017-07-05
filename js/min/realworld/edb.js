// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.edb');
goog.require('cljs.core');
goog.require('keechma.toolbox.edb');
realworld.edb.edb_schema = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$username], null),cljs.core.cst$kw$tag,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$tag], null),cljs.core.cst$kw$comment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id,cljs.core.cst$kw$relations,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$author,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one,cljs.core.cst$kw$user], null)], null)], null),cljs.core.cst$kw$article,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$slug,cljs.core.cst$kw$relations,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$author,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one,cljs.core.cst$kw$user], null),cljs.core.cst$kw$tagList,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$many,cljs.core.cst$kw$tag], null)], null)], null)], null);
/**
 * @param {...*} var_args
 */
realworld.edb.get_collection = (function() { 
var realworld$edb$get_collection__delegate = function (db22344,rest22345){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1 ? entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1(entitydb.core.get_collection) : entitydb.util.ensure_layout.call(null,entitydb.core.get_collection)),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22344)], null),rest22345));
};
var realworld$edb$get_collection = function (db22344,var_args){
var rest22345 = null;
if (arguments.length > 1) {
var G__22378__i = 0, G__22378__a = new Array(arguments.length -  1);
while (G__22378__i < G__22378__a.length) {G__22378__a[G__22378__i] = arguments[G__22378__i + 1]; ++G__22378__i;}
  rest22345 = new cljs.core.IndexedSeq(G__22378__a,0);
} 
return realworld$edb$get_collection__delegate.call(this,db22344,rest22345);};
realworld$edb$get_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$get_collection.cljs$lang$applyTo = (function (arglist__22379){
var db22344 = cljs.core.first(arglist__22379);
var rest22345 = cljs.core.rest(arglist__22379);
return realworld$edb$get_collection__delegate(db22344,rest22345);
});
realworld$edb$get_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_collection__delegate;
return realworld$edb$get_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_item_by_id = (function() { 
var realworld$edb$get_item_by_id__delegate = function (db22346,rest22347){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_item_by_id,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22346)], null),rest22347));
};
var realworld$edb$get_item_by_id = function (db22346,var_args){
var rest22347 = null;
if (arguments.length > 1) {
var G__22380__i = 0, G__22380__a = new Array(arguments.length -  1);
while (G__22380__i < G__22380__a.length) {G__22380__a[G__22380__i] = arguments[G__22380__i + 1]; ++G__22380__i;}
  rest22347 = new cljs.core.IndexedSeq(G__22380__a,0);
} 
return realworld$edb$get_item_by_id__delegate.call(this,db22346,rest22347);};
realworld$edb$get_item_by_id.cljs$lang$maxFixedArity = 1;
realworld$edb$get_item_by_id.cljs$lang$applyTo = (function (arglist__22381){
var db22346 = cljs.core.first(arglist__22381);
var rest22347 = cljs.core.rest(arglist__22381);
return realworld$edb$get_item_by_id__delegate(db22346,rest22347);
});
realworld$edb$get_item_by_id.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_item_by_id__delegate;
return realworld$edb$get_item_by_id;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_named_item = (function() { 
var realworld$edb$get_named_item__delegate = function (db22348,rest22349){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_named_item,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22348)], null),rest22349));
};
var realworld$edb$get_named_item = function (db22348,var_args){
var rest22349 = null;
if (arguments.length > 1) {
var G__22382__i = 0, G__22382__a = new Array(arguments.length -  1);
while (G__22382__i < G__22382__a.length) {G__22382__a[G__22382__i] = arguments[G__22382__i + 1]; ++G__22382__i;}
  rest22349 = new cljs.core.IndexedSeq(G__22382__a,0);
} 
return realworld$edb$get_named_item__delegate.call(this,db22348,rest22349);};
realworld$edb$get_named_item.cljs$lang$maxFixedArity = 1;
realworld$edb$get_named_item.cljs$lang$applyTo = (function (arglist__22383){
var db22348 = cljs.core.first(arglist__22383);
var rest22349 = cljs.core.rest(arglist__22383);
return realworld$edb$get_named_item__delegate(db22348,rest22349);
});
realworld$edb$get_named_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_named_item__delegate;
return realworld$edb$get_named_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_item_meta = (function() { 
var realworld$edb$get_item_meta__delegate = function (db22350,rest22351){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_item_meta,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22350)], null),rest22351));
};
var realworld$edb$get_item_meta = function (db22350,var_args){
var rest22351 = null;
if (arguments.length > 1) {
var G__22384__i = 0, G__22384__a = new Array(arguments.length -  1);
while (G__22384__i < G__22384__a.length) {G__22384__a[G__22384__i] = arguments[G__22384__i + 1]; ++G__22384__i;}
  rest22351 = new cljs.core.IndexedSeq(G__22384__a,0);
} 
return realworld$edb$get_item_meta__delegate.call(this,db22350,rest22351);};
realworld$edb$get_item_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$get_item_meta.cljs$lang$applyTo = (function (arglist__22385){
var db22350 = cljs.core.first(arglist__22385);
var rest22351 = cljs.core.rest(arglist__22385);
return realworld$edb$get_item_meta__delegate(db22350,rest22351);
});
realworld$edb$get_item_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_item_meta__delegate;
return realworld$edb$get_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_named_item_meta = (function() { 
var realworld$edb$get_named_item_meta__delegate = function (db22352,rest22353){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_named_item_meta,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22352)], null),rest22353));
};
var realworld$edb$get_named_item_meta = function (db22352,var_args){
var rest22353 = null;
if (arguments.length > 1) {
var G__22386__i = 0, G__22386__a = new Array(arguments.length -  1);
while (G__22386__i < G__22386__a.length) {G__22386__a[G__22386__i] = arguments[G__22386__i + 1]; ++G__22386__i;}
  rest22353 = new cljs.core.IndexedSeq(G__22386__a,0);
} 
return realworld$edb$get_named_item_meta__delegate.call(this,db22352,rest22353);};
realworld$edb$get_named_item_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$get_named_item_meta.cljs$lang$applyTo = (function (arglist__22387){
var db22352 = cljs.core.first(arglist__22387);
var rest22353 = cljs.core.rest(arglist__22387);
return realworld$edb$get_named_item_meta__delegate(db22352,rest22353);
});
realworld$edb$get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_named_item_meta__delegate;
return realworld$edb$get_named_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_collection_meta = (function() { 
var realworld$edb$get_collection_meta__delegate = function (db22354,rest22355){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_collection_meta,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22354)], null),rest22355));
};
var realworld$edb$get_collection_meta = function (db22354,var_args){
var rest22355 = null;
if (arguments.length > 1) {
var G__22388__i = 0, G__22388__a = new Array(arguments.length -  1);
while (G__22388__i < G__22388__a.length) {G__22388__a[G__22388__i] = arguments[G__22388__i + 1]; ++G__22388__i;}
  rest22355 = new cljs.core.IndexedSeq(G__22388__a,0);
} 
return realworld$edb$get_collection_meta__delegate.call(this,db22354,rest22355);};
realworld$edb$get_collection_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$get_collection_meta.cljs$lang$applyTo = (function (arglist__22389){
var db22354 = cljs.core.first(arglist__22389);
var rest22355 = cljs.core.rest(arglist__22389);
return realworld$edb$get_collection_meta__delegate(db22354,rest22355);
});
realworld$edb$get_collection_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_collection_meta__delegate;
return realworld$edb$get_collection_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_item = (function() { 
var realworld$edb$insert_item__delegate = function (db22356,rest22357){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22356,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1 ? entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1(entitydb.core.insert_item) : entitydb.util.ensure_layout.call(null,entitydb.core.insert_item)),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22356)], null),rest22357)));
};
var realworld$edb$insert_item = function (db22356,var_args){
var rest22357 = null;
if (arguments.length > 1) {
var G__22390__i = 0, G__22390__a = new Array(arguments.length -  1);
while (G__22390__i < G__22390__a.length) {G__22390__a[G__22390__i] = arguments[G__22390__i + 1]; ++G__22390__i;}
  rest22357 = new cljs.core.IndexedSeq(G__22390__a,0);
} 
return realworld$edb$insert_item__delegate.call(this,db22356,rest22357);};
realworld$edb$insert_item.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_item.cljs$lang$applyTo = (function (arglist__22391){
var db22356 = cljs.core.first(arglist__22391);
var rest22357 = cljs.core.rest(arglist__22391);
return realworld$edb$insert_item__delegate(db22356,rest22357);
});
realworld$edb$insert_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_item__delegate;
return realworld$edb$insert_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_named_item = (function() { 
var realworld$edb$insert_named_item__delegate = function (db22358,rest22359){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22358,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1 ? entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1(entitydb.core.insert_named_item) : entitydb.util.ensure_layout.call(null,entitydb.core.insert_named_item)),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22358)], null),rest22359)));
};
var realworld$edb$insert_named_item = function (db22358,var_args){
var rest22359 = null;
if (arguments.length > 1) {
var G__22392__i = 0, G__22392__a = new Array(arguments.length -  1);
while (G__22392__i < G__22392__a.length) {G__22392__a[G__22392__i] = arguments[G__22392__i + 1]; ++G__22392__i;}
  rest22359 = new cljs.core.IndexedSeq(G__22392__a,0);
} 
return realworld$edb$insert_named_item__delegate.call(this,db22358,rest22359);};
realworld$edb$insert_named_item.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_named_item.cljs$lang$applyTo = (function (arglist__22393){
var db22358 = cljs.core.first(arglist__22393);
var rest22359 = cljs.core.rest(arglist__22393);
return realworld$edb$insert_named_item__delegate(db22358,rest22359);
});
realworld$edb$insert_named_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_named_item__delegate;
return realworld$edb$insert_named_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_collection = (function() { 
var realworld$edb$insert_collection__delegate = function (db22360,rest22361){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22360,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1 ? entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1(entitydb.core.insert_collection) : entitydb.util.ensure_layout.call(null,entitydb.core.insert_collection)),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22360)], null),rest22361)));
};
var realworld$edb$insert_collection = function (db22360,var_args){
var rest22361 = null;
if (arguments.length > 1) {
var G__22394__i = 0, G__22394__a = new Array(arguments.length -  1);
while (G__22394__i < G__22394__a.length) {G__22394__a[G__22394__i] = arguments[G__22394__i + 1]; ++G__22394__i;}
  rest22361 = new cljs.core.IndexedSeq(G__22394__a,0);
} 
return realworld$edb$insert_collection__delegate.call(this,db22360,rest22361);};
realworld$edb$insert_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_collection.cljs$lang$applyTo = (function (arglist__22395){
var db22360 = cljs.core.first(arglist__22395);
var rest22361 = cljs.core.rest(arglist__22395);
return realworld$edb$insert_collection__delegate(db22360,rest22361);
});
realworld$edb$insert_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_collection__delegate;
return realworld$edb$insert_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.append_collection = (function() { 
var realworld$edb$append_collection__delegate = function (db22362,rest22363){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22362,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1 ? entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1(entitydb.core.append_collection) : entitydb.util.ensure_layout.call(null,entitydb.core.append_collection)),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22362)], null),rest22363)));
};
var realworld$edb$append_collection = function (db22362,var_args){
var rest22363 = null;
if (arguments.length > 1) {
var G__22396__i = 0, G__22396__a = new Array(arguments.length -  1);
while (G__22396__i < G__22396__a.length) {G__22396__a[G__22396__i] = arguments[G__22396__i + 1]; ++G__22396__i;}
  rest22363 = new cljs.core.IndexedSeq(G__22396__a,0);
} 
return realworld$edb$append_collection__delegate.call(this,db22362,rest22363);};
realworld$edb$append_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$append_collection.cljs$lang$applyTo = (function (arglist__22397){
var db22362 = cljs.core.first(arglist__22397);
var rest22363 = cljs.core.rest(arglist__22397);
return realworld$edb$append_collection__delegate(db22362,rest22363);
});
realworld$edb$append_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$append_collection__delegate;
return realworld$edb$append_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.prepend_collection = (function() { 
var realworld$edb$prepend_collection__delegate = function (db22364,rest22365){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22364,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1 ? entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1(entitydb.core.prepend_collection) : entitydb.util.ensure_layout.call(null,entitydb.core.prepend_collection)),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22364)], null),rest22365)));
};
var realworld$edb$prepend_collection = function (db22364,var_args){
var rest22365 = null;
if (arguments.length > 1) {
var G__22398__i = 0, G__22398__a = new Array(arguments.length -  1);
while (G__22398__i < G__22398__a.length) {G__22398__a[G__22398__i] = arguments[G__22398__i + 1]; ++G__22398__i;}
  rest22365 = new cljs.core.IndexedSeq(G__22398__a,0);
} 
return realworld$edb$prepend_collection__delegate.call(this,db22364,rest22365);};
realworld$edb$prepend_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$prepend_collection.cljs$lang$applyTo = (function (arglist__22399){
var db22364 = cljs.core.first(arglist__22399);
var rest22365 = cljs.core.rest(arglist__22399);
return realworld$edb$prepend_collection__delegate(db22364,rest22365);
});
realworld$edb$prepend_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$prepend_collection__delegate;
return realworld$edb$prepend_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_item = (function() { 
var realworld$edb$remove_item__delegate = function (db22366,rest22367){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22366,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1 ? entitydb.util.ensure_layout.cljs$core$IFn$_invoke$arity$1(entitydb.core.remove_item) : entitydb.util.ensure_layout.call(null,entitydb.core.remove_item)),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22366)], null),rest22367)));
};
var realworld$edb$remove_item = function (db22366,var_args){
var rest22367 = null;
if (arguments.length > 1) {
var G__22400__i = 0, G__22400__a = new Array(arguments.length -  1);
while (G__22400__i < G__22400__a.length) {G__22400__a[G__22400__i] = arguments[G__22400__i + 1]; ++G__22400__i;}
  rest22367 = new cljs.core.IndexedSeq(G__22400__a,0);
} 
return realworld$edb$remove_item__delegate.call(this,db22366,rest22367);};
realworld$edb$remove_item.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_item.cljs$lang$applyTo = (function (arglist__22401){
var db22366 = cljs.core.first(arglist__22401);
var rest22367 = cljs.core.rest(arglist__22401);
return realworld$edb$remove_item__delegate(db22366,rest22367);
});
realworld$edb$remove_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_item__delegate;
return realworld$edb$remove_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_meta = (function() { 
var realworld$edb$insert_meta__delegate = function (db22368,rest22369){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22368,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.insert_meta,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22368)], null),rest22369)));
};
var realworld$edb$insert_meta = function (db22368,var_args){
var rest22369 = null;
if (arguments.length > 1) {
var G__22402__i = 0, G__22402__a = new Array(arguments.length -  1);
while (G__22402__i < G__22402__a.length) {G__22402__a[G__22402__i] = arguments[G__22402__i + 1]; ++G__22402__i;}
  rest22369 = new cljs.core.IndexedSeq(G__22402__a,0);
} 
return realworld$edb$insert_meta__delegate.call(this,db22368,rest22369);};
realworld$edb$insert_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_meta.cljs$lang$applyTo = (function (arglist__22403){
var db22368 = cljs.core.first(arglist__22403);
var rest22369 = cljs.core.rest(arglist__22403);
return realworld$edb$insert_meta__delegate(db22368,rest22369);
});
realworld$edb$insert_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_meta__delegate;
return realworld$edb$insert_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_meta = (function() { 
var realworld$edb$remove_meta__delegate = function (db22370,rest22371){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22370,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.remove_meta,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22370)], null),rest22371)));
};
var realworld$edb$remove_meta = function (db22370,var_args){
var rest22371 = null;
if (arguments.length > 1) {
var G__22404__i = 0, G__22404__a = new Array(arguments.length -  1);
while (G__22404__i < G__22404__a.length) {G__22404__a[G__22404__i] = arguments[G__22404__i + 1]; ++G__22404__i;}
  rest22371 = new cljs.core.IndexedSeq(G__22404__a,0);
} 
return realworld$edb$remove_meta__delegate.call(this,db22370,rest22371);};
realworld$edb$remove_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_meta.cljs$lang$applyTo = (function (arglist__22405){
var db22370 = cljs.core.first(arglist__22405);
var rest22371 = cljs.core.rest(arglist__22405);
return realworld$edb$remove_meta__delegate(db22370,rest22371);
});
realworld$edb$remove_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_meta__delegate;
return realworld$edb$remove_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_named_item = (function() { 
var realworld$edb$remove_named_item__delegate = function (db22372,rest22373){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22372,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.remove_named_item,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22372)], null),rest22373)));
};
var realworld$edb$remove_named_item = function (db22372,var_args){
var rest22373 = null;
if (arguments.length > 1) {
var G__22406__i = 0, G__22406__a = new Array(arguments.length -  1);
while (G__22406__i < G__22406__a.length) {G__22406__a[G__22406__i] = arguments[G__22406__i + 1]; ++G__22406__i;}
  rest22373 = new cljs.core.IndexedSeq(G__22406__a,0);
} 
return realworld$edb$remove_named_item__delegate.call(this,db22372,rest22373);};
realworld$edb$remove_named_item.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_named_item.cljs$lang$applyTo = (function (arglist__22407){
var db22372 = cljs.core.first(arglist__22407);
var rest22373 = cljs.core.rest(arglist__22407);
return realworld$edb$remove_named_item__delegate(db22372,rest22373);
});
realworld$edb$remove_named_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_named_item__delegate;
return realworld$edb$remove_named_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_collection = (function() { 
var realworld$edb$remove_collection__delegate = function (db22374,rest22375){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22374,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.remove_collection,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22374)], null),rest22375)));
};
var realworld$edb$remove_collection = function (db22374,var_args){
var rest22375 = null;
if (arguments.length > 1) {
var G__22408__i = 0, G__22408__a = new Array(arguments.length -  1);
while (G__22408__i < G__22408__a.length) {G__22408__a[G__22408__i] = arguments[G__22408__i + 1]; ++G__22408__i;}
  rest22375 = new cljs.core.IndexedSeq(G__22408__a,0);
} 
return realworld$edb$remove_collection__delegate.call(this,db22374,rest22375);};
realworld$edb$remove_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_collection.cljs$lang$applyTo = (function (arglist__22409){
var db22374 = cljs.core.first(arglist__22409);
var rest22375 = cljs.core.rest(arglist__22409);
return realworld$edb$remove_collection__delegate(db22374,rest22375);
});
realworld$edb$remove_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_collection__delegate;
return realworld$edb$remove_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.vacuum = (function() { 
var realworld$edb$vacuum__delegate = function (db22376,rest22377){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22376,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.vacuum,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22376)], null),rest22377)));
};
var realworld$edb$vacuum = function (db22376,var_args){
var rest22377 = null;
if (arguments.length > 1) {
var G__22410__i = 0, G__22410__a = new Array(arguments.length -  1);
while (G__22410__i < G__22410__a.length) {G__22410__a[G__22410__i] = arguments[G__22410__i + 1]; ++G__22410__i;}
  rest22377 = new cljs.core.IndexedSeq(G__22410__a,0);
} 
return realworld$edb$vacuum__delegate.call(this,db22376,rest22377);};
realworld$edb$vacuum.cljs$lang$maxFixedArity = 1;
realworld$edb$vacuum.cljs$lang$applyTo = (function (arglist__22411){
var db22376 = cljs.core.first(arglist__22411);
var rest22377 = cljs.core.rest(arglist__22411);
return realworld$edb$vacuum__delegate(db22376,rest22377);
});
realworld$edb$vacuum.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$vacuum__delegate;
return realworld$edb$vacuum;
})()
;
