// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__17161__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17162__i = 0, G__17162__a = new Array(arguments.length -  0);
while (G__17162__i < G__17162__a.length) {G__17162__a[G__17162__i] = arguments[G__17162__i + 0]; ++G__17162__i;}
  args = new cljs.core.IndexedSeq(G__17162__a,0,null);
} 
return G__17161__delegate.call(this,args);};
G__17161.cljs$lang$maxFixedArity = 0;
G__17161.cljs$lang$applyTo = (function (arglist__17163){
var args = cljs.core.seq(arglist__17163);
return G__17161__delegate(args);
});
G__17161.cljs$core$IFn$_invoke$arity$variadic = G__17161__delegate;
return G__17161;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__17164__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17165__i = 0, G__17165__a = new Array(arguments.length -  0);
while (G__17165__i < G__17165__a.length) {G__17165__a[G__17165__i] = arguments[G__17165__i + 0]; ++G__17165__i;}
  args = new cljs.core.IndexedSeq(G__17165__a,0,null);
} 
return G__17164__delegate.call(this,args);};
G__17164.cljs$lang$maxFixedArity = 0;
G__17164.cljs$lang$applyTo = (function (arglist__17166){
var args = cljs.core.seq(arglist__17166);
return G__17164__delegate(args);
});
G__17164.cljs$core$IFn$_invoke$arity$variadic = G__17164__delegate;
return G__17164;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
