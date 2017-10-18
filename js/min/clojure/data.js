// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__21277){
var vec__21278 = p__21277;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21278,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__21281 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21281,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__21285 = arguments.length;
switch (G__21285) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__11866__auto__ = cljs.core.count(a);
var y__11867__auto__ = cljs.core.count(b);
return ((x__11866__auto__ > y__11867__auto__) ? x__11866__auto__ : y__11867__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__12247__auto__ = (((x == null))?null:x);
var m__12248__auto__ = (clojure.data.equality_partition[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__12248__auto__.call(null,x));
} else {
var m__12248__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__12248__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__12247__auto__ = (((a == null))?null:a);
var m__12248__auto__ = (clojure.data.diff_similar[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__12248__auto__.call(null,a,b));
} else {
var m__12248__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__12248__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__21287_21311 = clojure.data.equality_partition;
var G__21288_21312 = "null";
var G__21289_21313 = ((function (G__21287_21311,G__21288_21312){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__21287_21311,G__21288_21312))
;
goog.object.set(G__21287_21311,G__21288_21312,G__21289_21313);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__21290_21314 = clojure.data.equality_partition;
var G__21291_21315 = "string";
var G__21292_21316 = ((function (G__21290_21314,G__21291_21315){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__21290_21314,G__21291_21315))
;
goog.object.set(G__21290_21314,G__21291_21315,G__21292_21316);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__21293_21317 = clojure.data.equality_partition;
var G__21294_21318 = "number";
var G__21295_21319 = ((function (G__21293_21317,G__21294_21318){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__21293_21317,G__21294_21318))
;
goog.object.set(G__21293_21317,G__21294_21318,G__21295_21319);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__21296_21320 = clojure.data.equality_partition;
var G__21297_21321 = "array";
var G__21298_21322 = ((function (G__21296_21320,G__21297_21321){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__21296_21320,G__21297_21321))
;
goog.object.set(G__21296_21320,G__21297_21321,G__21298_21322);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__21299_21323 = clojure.data.equality_partition;
var G__21300_21324 = "function";
var G__21301_21325 = ((function (G__21299_21323,G__21300_21324){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__21299_21323,G__21300_21324))
;
goog.object.set(G__21299_21323,G__21300_21324,G__21301_21325);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__21302_21326 = clojure.data.equality_partition;
var G__21303_21327 = "boolean";
var G__21304_21328 = ((function (G__21302_21326,G__21303_21327){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__21302_21326,G__21303_21327))
;
goog.object.set(G__21302_21326,G__21303_21327,G__21304_21328);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__21305_21329 = clojure.data.equality_partition;
var G__21306_21330 = "_";
var G__21307_21331 = ((function (G__21305_21329,G__21306_21330){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__21305_21329,G__21306_21330))
;
goog.object.set(G__21305_21329,G__21306_21330,G__21307_21331);
goog.object.set(clojure.data.Diff,"null",true);

var G__21332_21356 = clojure.data.diff_similar;
var G__21333_21357 = "null";
var G__21334_21358 = ((function (G__21332_21356,G__21333_21357){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__21332_21356,G__21333_21357))
;
goog.object.set(G__21332_21356,G__21333_21357,G__21334_21358);

goog.object.set(clojure.data.Diff,"string",true);

var G__21335_21359 = clojure.data.diff_similar;
var G__21336_21360 = "string";
var G__21337_21361 = ((function (G__21335_21359,G__21336_21360){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__21335_21359,G__21336_21360))
;
goog.object.set(G__21335_21359,G__21336_21360,G__21337_21361);

goog.object.set(clojure.data.Diff,"number",true);

var G__21338_21362 = clojure.data.diff_similar;
var G__21339_21363 = "number";
var G__21340_21364 = ((function (G__21338_21362,G__21339_21363){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__21338_21362,G__21339_21363))
;
goog.object.set(G__21338_21362,G__21339_21363,G__21340_21364);

goog.object.set(clojure.data.Diff,"array",true);

var G__21341_21365 = clojure.data.diff_similar;
var G__21342_21366 = "array";
var G__21343_21367 = ((function (G__21341_21365,G__21342_21366){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__21341_21365,G__21342_21366))
;
goog.object.set(G__21341_21365,G__21342_21366,G__21343_21367);

goog.object.set(clojure.data.Diff,"function",true);

var G__21344_21368 = clojure.data.diff_similar;
var G__21345_21369 = "function";
var G__21346_21370 = ((function (G__21344_21368,G__21345_21369){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__21344_21368,G__21345_21369))
;
goog.object.set(G__21344_21368,G__21345_21369,G__21346_21370);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__21347_21371 = clojure.data.diff_similar;
var G__21348_21372 = "boolean";
var G__21349_21373 = ((function (G__21347_21371,G__21348_21372){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__21347_21371,G__21348_21372))
;
goog.object.set(G__21347_21371,G__21348_21372,G__21349_21373);

goog.object.set(clojure.data.Diff,"_",true);

var G__21350_21374 = clojure.data.diff_similar;
var G__21351_21375 = "_";
var G__21352_21376 = ((function (G__21350_21374,G__21351_21375){
return (function (a,b){
var fexpr__21354 = (function (){var G__21355 = clojure.data.equality_partition(a);
var G__21355__$1 = (((G__21355 instanceof cljs.core.Keyword))?G__21355.fqn:null);
switch (G__21355__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21355__$1)].join('')));

}
})();
return (fexpr__21354.cljs$core$IFn$_invoke$arity$2 ? fexpr__21354.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__21354.call(null,a,b));
});})(G__21350_21374,G__21351_21375))
;
goog.object.set(G__21350_21374,G__21351_21375,G__21352_21376);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
