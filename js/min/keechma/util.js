// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.util.update_values = (function keechma$util$update_values(var_args){
var args__11178__auto__ = [];
var len__11171__auto___20598 = arguments.length;
var i__11172__auto___20599 = (0);
while(true){
if((i__11172__auto___20599 < len__11171__auto___20598)){
args__11178__auto__.push((arguments[i__11172__auto___20599]));

var G__20600 = (i__11172__auto___20599 + (1));
i__11172__auto___20599 = G__20600;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((2) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((2)),(0),null)):null);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11179__auto__);
});

keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__20594){
var vec__20595 = p__20594;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

keechma.util.update_values.cljs$lang$maxFixedArity = (2);

keechma.util.update_values.cljs$lang$applyTo = (function (seq20591){
var G__20592 = cljs.core.first(seq20591);
var seq20591__$1 = cljs.core.next(seq20591);
var G__20593 = cljs.core.first(seq20591__$1);
var seq20591__$2 = cljs.core.next(seq20591__$1);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic(G__20592,G__20593,seq20591__$2);
});

/**
 * true if seq contains elm
 */
keechma.util.in_QMARK_ = (function keechma$util$in_QMARK_(seq,elm){
return cljs.core.some((function (p1__20601_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__20601_SHARP_);
}),seq);
});
keechma.util.without = (function keechma$util$without(list,val){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (ls_val){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,ls_val);
}),list));
});
/**
 * Return a channel which will close on the nth next animation frame.
 */
keechma.util.animation_frame = (function keechma$util$animation_frame(var_args){
var args20602 = [];
var len__11171__auto___20606 = arguments.length;
var i__11172__auto___20607 = (0);
while(true){
if((i__11172__auto___20607 < len__11171__auto___20606)){
args20602.push((arguments[i__11172__auto___20607]));

var G__20608 = (i__11172__auto___20607 + (1));
i__11172__auto___20607 = G__20608;
continue;
} else {
}
break;
}

var G__20604 = args20602.length;
switch (G__20604) {
case 0:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20602.length)].join('')));

}
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((1));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1 = (function (n){
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2(n,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1)));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2 = (function (n,out){
var G__20605_20610 = (function (timestamp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,timestamp);

return cljs.core.async.close_BANG_(out);
} else {
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((n - (1)),out);
}
});
window.requestAnimationFrame(G__20605_20610);

return out;
});

keechma.util.animation_frame.cljs$lang$maxFixedArity = 2;

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
keechma.util.dissoc_in = (function keechma$util$dissoc_in(m,p__20611){
var vec__20615 = p__20611;
var seq__20616 = cljs.core.seq(vec__20615);
var first__20617 = cljs.core.first(seq__20616);
var seq__20616__$1 = cljs.core.next(seq__20616);
var k = first__20617;
var ks = seq__20616__$1;
var keys = vec__20615;
if(ks){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__6751__auto__)){
var nextmap = temp__6751__auto__;
var newmap = keechma$util$dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
