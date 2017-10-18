// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
keechma.util.update_values = (function keechma$util$update_values(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21125 = arguments.length;
var i__12776__auto___21126 = (0);
while(true){
if((i__12776__auto___21126 < len__12775__auto___21125)){
args__12782__auto__.push((arguments[i__12776__auto___21126]));

var G__21127 = (i__12776__auto___21126 + (1));
i__12776__auto___21126 = G__21127;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__21121){
var vec__21122 = p__21121;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

keechma.util.update_values.cljs$lang$maxFixedArity = (2);

keechma.util.update_values.cljs$lang$applyTo = (function (seq21118){
var G__21119 = cljs.core.first(seq21118);
var seq21118__$1 = cljs.core.next(seq21118);
var G__21120 = cljs.core.first(seq21118__$1);
var seq21118__$2 = cljs.core.next(seq21118__$1);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic(G__21119,G__21120,seq21118__$2);
});

/**
 * true if seq contains elm
 */
keechma.util.in_QMARK_ = (function keechma$util$in_QMARK_(seq,elm){
return cljs.core.some((function (p1__21128_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__21128_SHARP_);
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
var G__21130 = arguments.length;
switch (G__21130) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((1));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1 = (function (n){
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2(n,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1)));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2 = (function (n,out){
var G__21131_21133 = (function (timestamp){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,timestamp);

return cljs.core.async.close_BANG_(out);
} else {
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((n - (1)),out);
}
});
window.requestAnimationFrame(G__21131_21133);

return out;
});

keechma.util.animation_frame.cljs$lang$maxFixedArity = 2;

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
keechma.util.dissoc_in = (function keechma$util$dissoc_in(m,p__21134){
var vec__21135 = p__21134;
var seq__21136 = cljs.core.seq(vec__21135);
var first__21137 = cljs.core.first(seq__21136);
var seq__21136__$1 = cljs.core.next(seq__21136);
var k = first__21137;
var ks = seq__21136__$1;
var keys = vec__21135;
if(ks){
var temp__5276__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5276__auto__)){
var nextmap = temp__5276__auto__;
var newmap = (keechma.util.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? keechma.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : keechma.util.dissoc_in.call(null,nextmap,ks));
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
