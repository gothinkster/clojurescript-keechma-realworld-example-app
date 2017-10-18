// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.edb');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.edb');
realworld.edb.edb_schema = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$username], null),cljs.core.cst$kw$tag,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$tag], null),cljs.core.cst$kw$comment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$id,cljs.core.cst$kw$relations,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$author,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one,cljs.core.cst$kw$user], null)], null)], null),cljs.core.cst$kw$article,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$slug,cljs.core.cst$kw$relations,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$author,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one,cljs.core.cst$kw$user], null),cljs.core.cst$kw$tagList,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$many,cljs.core.cst$kw$tag], null)], null)], null)], null);
/**
 * @param {...*} var_args
 */
realworld.edb.get_collection = (function() { 
var realworld$edb$get_collection__delegate = function (db22625,rest22626){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.get_collection),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22625)], null),rest22626));
};
var realworld$edb$get_collection = function (db22625,var_args){
var rest22626 = null;
if (arguments.length > 1) {
var G__22659__i = 0, G__22659__a = new Array(arguments.length -  1);
while (G__22659__i < G__22659__a.length) {G__22659__a[G__22659__i] = arguments[G__22659__i + 1]; ++G__22659__i;}
  rest22626 = new cljs.core.IndexedSeq(G__22659__a,0,null);
} 
return realworld$edb$get_collection__delegate.call(this,db22625,rest22626);};
realworld$edb$get_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$get_collection.cljs$lang$applyTo = (function (arglist__22660){
var db22625 = cljs.core.first(arglist__22660);
var rest22626 = cljs.core.rest(arglist__22660);
return realworld$edb$get_collection__delegate(db22625,rest22626);
});
realworld$edb$get_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_collection__delegate;
return realworld$edb$get_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_item_by_id = (function() { 
var realworld$edb$get_item_by_id__delegate = function (db22627,rest22628){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_item_by_id,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22627)], null),rest22628));
};
var realworld$edb$get_item_by_id = function (db22627,var_args){
var rest22628 = null;
if (arguments.length > 1) {
var G__22661__i = 0, G__22661__a = new Array(arguments.length -  1);
while (G__22661__i < G__22661__a.length) {G__22661__a[G__22661__i] = arguments[G__22661__i + 1]; ++G__22661__i;}
  rest22628 = new cljs.core.IndexedSeq(G__22661__a,0,null);
} 
return realworld$edb$get_item_by_id__delegate.call(this,db22627,rest22628);};
realworld$edb$get_item_by_id.cljs$lang$maxFixedArity = 1;
realworld$edb$get_item_by_id.cljs$lang$applyTo = (function (arglist__22662){
var db22627 = cljs.core.first(arglist__22662);
var rest22628 = cljs.core.rest(arglist__22662);
return realworld$edb$get_item_by_id__delegate(db22627,rest22628);
});
realworld$edb$get_item_by_id.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_item_by_id__delegate;
return realworld$edb$get_item_by_id;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_named_item = (function() { 
var realworld$edb$get_named_item__delegate = function (db22629,rest22630){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_named_item,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22629)], null),rest22630));
};
var realworld$edb$get_named_item = function (db22629,var_args){
var rest22630 = null;
if (arguments.length > 1) {
var G__22663__i = 0, G__22663__a = new Array(arguments.length -  1);
while (G__22663__i < G__22663__a.length) {G__22663__a[G__22663__i] = arguments[G__22663__i + 1]; ++G__22663__i;}
  rest22630 = new cljs.core.IndexedSeq(G__22663__a,0,null);
} 
return realworld$edb$get_named_item__delegate.call(this,db22629,rest22630);};
realworld$edb$get_named_item.cljs$lang$maxFixedArity = 1;
realworld$edb$get_named_item.cljs$lang$applyTo = (function (arglist__22664){
var db22629 = cljs.core.first(arglist__22664);
var rest22630 = cljs.core.rest(arglist__22664);
return realworld$edb$get_named_item__delegate(db22629,rest22630);
});
realworld$edb$get_named_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_named_item__delegate;
return realworld$edb$get_named_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_item_meta = (function() { 
var realworld$edb$get_item_meta__delegate = function (db22631,rest22632){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_item_meta,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22631)], null),rest22632));
};
var realworld$edb$get_item_meta = function (db22631,var_args){
var rest22632 = null;
if (arguments.length > 1) {
var G__22665__i = 0, G__22665__a = new Array(arguments.length -  1);
while (G__22665__i < G__22665__a.length) {G__22665__a[G__22665__i] = arguments[G__22665__i + 1]; ++G__22665__i;}
  rest22632 = new cljs.core.IndexedSeq(G__22665__a,0,null);
} 
return realworld$edb$get_item_meta__delegate.call(this,db22631,rest22632);};
realworld$edb$get_item_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$get_item_meta.cljs$lang$applyTo = (function (arglist__22666){
var db22631 = cljs.core.first(arglist__22666);
var rest22632 = cljs.core.rest(arglist__22666);
return realworld$edb$get_item_meta__delegate(db22631,rest22632);
});
realworld$edb$get_item_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_item_meta__delegate;
return realworld$edb$get_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_named_item_meta = (function() { 
var realworld$edb$get_named_item_meta__delegate = function (db22633,rest22634){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_named_item_meta,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22633)], null),rest22634));
};
var realworld$edb$get_named_item_meta = function (db22633,var_args){
var rest22634 = null;
if (arguments.length > 1) {
var G__22667__i = 0, G__22667__a = new Array(arguments.length -  1);
while (G__22667__i < G__22667__a.length) {G__22667__a[G__22667__i] = arguments[G__22667__i + 1]; ++G__22667__i;}
  rest22634 = new cljs.core.IndexedSeq(G__22667__a,0,null);
} 
return realworld$edb$get_named_item_meta__delegate.call(this,db22633,rest22634);};
realworld$edb$get_named_item_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$get_named_item_meta.cljs$lang$applyTo = (function (arglist__22668){
var db22633 = cljs.core.first(arglist__22668);
var rest22634 = cljs.core.rest(arglist__22668);
return realworld$edb$get_named_item_meta__delegate(db22633,rest22634);
});
realworld$edb$get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_named_item_meta__delegate;
return realworld$edb$get_named_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.get_collection_meta = (function() { 
var realworld$edb$get_collection_meta__delegate = function (db22635,rest22636){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.core.get_collection_meta,realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22635)], null),rest22636));
};
var realworld$edb$get_collection_meta = function (db22635,var_args){
var rest22636 = null;
if (arguments.length > 1) {
var G__22669__i = 0, G__22669__a = new Array(arguments.length -  1);
while (G__22669__i < G__22669__a.length) {G__22669__a[G__22669__i] = arguments[G__22669__i + 1]; ++G__22669__i;}
  rest22636 = new cljs.core.IndexedSeq(G__22669__a,0,null);
} 
return realworld$edb$get_collection_meta__delegate.call(this,db22635,rest22636);};
realworld$edb$get_collection_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$get_collection_meta.cljs$lang$applyTo = (function (arglist__22670){
var db22635 = cljs.core.first(arglist__22670);
var rest22636 = cljs.core.rest(arglist__22670);
return realworld$edb$get_collection_meta__delegate(db22635,rest22636);
});
realworld$edb$get_collection_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$get_collection_meta__delegate;
return realworld$edb$get_collection_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_item = (function() { 
var realworld$edb$insert_item__delegate = function (db22637,rest22638){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22637,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.insert_item),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22637)], null),rest22638)));
};
var realworld$edb$insert_item = function (db22637,var_args){
var rest22638 = null;
if (arguments.length > 1) {
var G__22671__i = 0, G__22671__a = new Array(arguments.length -  1);
while (G__22671__i < G__22671__a.length) {G__22671__a[G__22671__i] = arguments[G__22671__i + 1]; ++G__22671__i;}
  rest22638 = new cljs.core.IndexedSeq(G__22671__a,0,null);
} 
return realworld$edb$insert_item__delegate.call(this,db22637,rest22638);};
realworld$edb$insert_item.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_item.cljs$lang$applyTo = (function (arglist__22672){
var db22637 = cljs.core.first(arglist__22672);
var rest22638 = cljs.core.rest(arglist__22672);
return realworld$edb$insert_item__delegate(db22637,rest22638);
});
realworld$edb$insert_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_item__delegate;
return realworld$edb$insert_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_named_item = (function() { 
var realworld$edb$insert_named_item__delegate = function (db22639,rest22640){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22639,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.insert_named_item),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22639)], null),rest22640)));
};
var realworld$edb$insert_named_item = function (db22639,var_args){
var rest22640 = null;
if (arguments.length > 1) {
var G__22673__i = 0, G__22673__a = new Array(arguments.length -  1);
while (G__22673__i < G__22673__a.length) {G__22673__a[G__22673__i] = arguments[G__22673__i + 1]; ++G__22673__i;}
  rest22640 = new cljs.core.IndexedSeq(G__22673__a,0,null);
} 
return realworld$edb$insert_named_item__delegate.call(this,db22639,rest22640);};
realworld$edb$insert_named_item.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_named_item.cljs$lang$applyTo = (function (arglist__22674){
var db22639 = cljs.core.first(arglist__22674);
var rest22640 = cljs.core.rest(arglist__22674);
return realworld$edb$insert_named_item__delegate(db22639,rest22640);
});
realworld$edb$insert_named_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_named_item__delegate;
return realworld$edb$insert_named_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_collection = (function() { 
var realworld$edb$insert_collection__delegate = function (db22641,rest22642){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22641,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.insert_collection),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22641)], null),rest22642)));
};
var realworld$edb$insert_collection = function (db22641,var_args){
var rest22642 = null;
if (arguments.length > 1) {
var G__22675__i = 0, G__22675__a = new Array(arguments.length -  1);
while (G__22675__i < G__22675__a.length) {G__22675__a[G__22675__i] = arguments[G__22675__i + 1]; ++G__22675__i;}
  rest22642 = new cljs.core.IndexedSeq(G__22675__a,0,null);
} 
return realworld$edb$insert_collection__delegate.call(this,db22641,rest22642);};
realworld$edb$insert_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_collection.cljs$lang$applyTo = (function (arglist__22676){
var db22641 = cljs.core.first(arglist__22676);
var rest22642 = cljs.core.rest(arglist__22676);
return realworld$edb$insert_collection__delegate(db22641,rest22642);
});
realworld$edb$insert_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_collection__delegate;
return realworld$edb$insert_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.append_collection = (function() { 
var realworld$edb$append_collection__delegate = function (db22643,rest22644){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22643,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.append_collection),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22643)], null),rest22644)));
};
var realworld$edb$append_collection = function (db22643,var_args){
var rest22644 = null;
if (arguments.length > 1) {
var G__22677__i = 0, G__22677__a = new Array(arguments.length -  1);
while (G__22677__i < G__22677__a.length) {G__22677__a[G__22677__i] = arguments[G__22677__i + 1]; ++G__22677__i;}
  rest22644 = new cljs.core.IndexedSeq(G__22677__a,0,null);
} 
return realworld$edb$append_collection__delegate.call(this,db22643,rest22644);};
realworld$edb$append_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$append_collection.cljs$lang$applyTo = (function (arglist__22678){
var db22643 = cljs.core.first(arglist__22678);
var rest22644 = cljs.core.rest(arglist__22678);
return realworld$edb$append_collection__delegate(db22643,rest22644);
});
realworld$edb$append_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$append_collection__delegate;
return realworld$edb$append_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.prepend_collection = (function() { 
var realworld$edb$prepend_collection__delegate = function (db22645,rest22646){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22645,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.prepend_collection),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22645)], null),rest22646)));
};
var realworld$edb$prepend_collection = function (db22645,var_args){
var rest22646 = null;
if (arguments.length > 1) {
var G__22679__i = 0, G__22679__a = new Array(arguments.length -  1);
while (G__22679__i < G__22679__a.length) {G__22679__a[G__22679__i] = arguments[G__22679__i + 1]; ++G__22679__i;}
  rest22646 = new cljs.core.IndexedSeq(G__22679__a,0,null);
} 
return realworld$edb$prepend_collection__delegate.call(this,db22645,rest22646);};
realworld$edb$prepend_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$prepend_collection.cljs$lang$applyTo = (function (arglist__22680){
var db22645 = cljs.core.first(arglist__22680);
var rest22646 = cljs.core.rest(arglist__22680);
return realworld$edb$prepend_collection__delegate(db22645,rest22646);
});
realworld$edb$prepend_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$prepend_collection__delegate;
return realworld$edb$prepend_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_item = (function() { 
var realworld$edb$remove_item__delegate = function (db22647,rest22648){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22647,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(entitydb.util.ensure_layout(entitydb.core.remove_item),realworld.edb.edb_schema),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22647)], null),rest22648)));
};
var realworld$edb$remove_item = function (db22647,var_args){
var rest22648 = null;
if (arguments.length > 1) {
var G__22681__i = 0, G__22681__a = new Array(arguments.length -  1);
while (G__22681__i < G__22681__a.length) {G__22681__a[G__22681__i] = arguments[G__22681__i + 1]; ++G__22681__i;}
  rest22648 = new cljs.core.IndexedSeq(G__22681__a,0,null);
} 
return realworld$edb$remove_item__delegate.call(this,db22647,rest22648);};
realworld$edb$remove_item.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_item.cljs$lang$applyTo = (function (arglist__22682){
var db22647 = cljs.core.first(arglist__22682);
var rest22648 = cljs.core.rest(arglist__22682);
return realworld$edb$remove_item__delegate(db22647,rest22648);
});
realworld$edb$remove_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_item__delegate;
return realworld$edb$remove_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.insert_meta = (function() { 
var realworld$edb$insert_meta__delegate = function (db22649,rest22650){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22649,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.insert_meta,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22649)], null),rest22650)));
};
var realworld$edb$insert_meta = function (db22649,var_args){
var rest22650 = null;
if (arguments.length > 1) {
var G__22683__i = 0, G__22683__a = new Array(arguments.length -  1);
while (G__22683__i < G__22683__a.length) {G__22683__a[G__22683__i] = arguments[G__22683__i + 1]; ++G__22683__i;}
  rest22650 = new cljs.core.IndexedSeq(G__22683__a,0,null);
} 
return realworld$edb$insert_meta__delegate.call(this,db22649,rest22650);};
realworld$edb$insert_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$insert_meta.cljs$lang$applyTo = (function (arglist__22684){
var db22649 = cljs.core.first(arglist__22684);
var rest22650 = cljs.core.rest(arglist__22684);
return realworld$edb$insert_meta__delegate(db22649,rest22650);
});
realworld$edb$insert_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$insert_meta__delegate;
return realworld$edb$insert_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_meta = (function() { 
var realworld$edb$remove_meta__delegate = function (db22651,rest22652){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22651,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.remove_meta,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22651)], null),rest22652)));
};
var realworld$edb$remove_meta = function (db22651,var_args){
var rest22652 = null;
if (arguments.length > 1) {
var G__22685__i = 0, G__22685__a = new Array(arguments.length -  1);
while (G__22685__i < G__22685__a.length) {G__22685__a[G__22685__i] = arguments[G__22685__i + 1]; ++G__22685__i;}
  rest22652 = new cljs.core.IndexedSeq(G__22685__a,0,null);
} 
return realworld$edb$remove_meta__delegate.call(this,db22651,rest22652);};
realworld$edb$remove_meta.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_meta.cljs$lang$applyTo = (function (arglist__22686){
var db22651 = cljs.core.first(arglist__22686);
var rest22652 = cljs.core.rest(arglist__22686);
return realworld$edb$remove_meta__delegate(db22651,rest22652);
});
realworld$edb$remove_meta.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_meta__delegate;
return realworld$edb$remove_meta;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_named_item = (function() { 
var realworld$edb$remove_named_item__delegate = function (db22653,rest22654){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22653,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.remove_named_item,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22653)], null),rest22654)));
};
var realworld$edb$remove_named_item = function (db22653,var_args){
var rest22654 = null;
if (arguments.length > 1) {
var G__22687__i = 0, G__22687__a = new Array(arguments.length -  1);
while (G__22687__i < G__22687__a.length) {G__22687__a[G__22687__i] = arguments[G__22687__i + 1]; ++G__22687__i;}
  rest22654 = new cljs.core.IndexedSeq(G__22687__a,0,null);
} 
return realworld$edb$remove_named_item__delegate.call(this,db22653,rest22654);};
realworld$edb$remove_named_item.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_named_item.cljs$lang$applyTo = (function (arglist__22688){
var db22653 = cljs.core.first(arglist__22688);
var rest22654 = cljs.core.rest(arglist__22688);
return realworld$edb$remove_named_item__delegate(db22653,rest22654);
});
realworld$edb$remove_named_item.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_named_item__delegate;
return realworld$edb$remove_named_item;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.remove_collection = (function() { 
var realworld$edb$remove_collection__delegate = function (db22655,rest22656){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22655,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.remove_collection,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22655)], null),rest22656)));
};
var realworld$edb$remove_collection = function (db22655,var_args){
var rest22656 = null;
if (arguments.length > 1) {
var G__22689__i = 0, G__22689__a = new Array(arguments.length -  1);
while (G__22689__i < G__22689__a.length) {G__22689__a[G__22689__i] = arguments[G__22689__i + 1]; ++G__22689__i;}
  rest22656 = new cljs.core.IndexedSeq(G__22689__a,0,null);
} 
return realworld$edb$remove_collection__delegate.call(this,db22655,rest22656);};
realworld$edb$remove_collection.cljs$lang$maxFixedArity = 1;
realworld$edb$remove_collection.cljs$lang$applyTo = (function (arglist__22690){
var db22655 = cljs.core.first(arglist__22690);
var rest22656 = cljs.core.rest(arglist__22690);
return realworld$edb$remove_collection__delegate(db22655,rest22656);
});
realworld$edb$remove_collection.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$remove_collection__delegate;
return realworld$edb$remove_collection;
})()
;

/**
 * @param {...*} var_args
 */
realworld.edb.vacuum = (function() { 
var realworld$edb$vacuum__delegate = function (db22657,rest22658){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db22657,cljs.core.cst$kw$entity_DASH_db,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(entitydb.core.vacuum,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_db.cljs$core$IFn$_invoke$arity$1(db22657)], null),rest22658)));
};
var realworld$edb$vacuum = function (db22657,var_args){
var rest22658 = null;
if (arguments.length > 1) {
var G__22691__i = 0, G__22691__a = new Array(arguments.length -  1);
while (G__22691__i < G__22691__a.length) {G__22691__a[G__22691__i] = arguments[G__22691__i + 1]; ++G__22691__i;}
  rest22658 = new cljs.core.IndexedSeq(G__22691__a,0,null);
} 
return realworld$edb$vacuum__delegate.call(this,db22657,rest22658);};
realworld$edb$vacuum.cljs$lang$maxFixedArity = 1;
realworld$edb$vacuum.cljs$lang$applyTo = (function (arglist__22692){
var db22657 = cljs.core.first(arglist__22692);
var rest22658 = cljs.core.rest(arglist__22692);
return realworld$edb$vacuum__delegate(db22657,rest22658);
});
realworld$edb$vacuum.cljs$core$IFn$_invoke$arity$variadic = realworld$edb$vacuum__delegate;
return realworld$edb$vacuum;
})()
;
