// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20921__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20922__i = 0, G__20922__a = new Array(arguments.length -  0);
while (G__20922__i < G__20922__a.length) {G__20922__a[G__20922__i] = arguments[G__20922__i + 0]; ++G__20922__i;}
  args = new cljs.core.IndexedSeq(G__20922__a,0);
} 
return G__20921__delegate.call(this,args);};
G__20921.cljs$lang$maxFixedArity = 0;
G__20921.cljs$lang$applyTo = (function (arglist__20923){
var args = cljs.core.seq(arglist__20923);
return G__20921__delegate(args);
});
G__20921.cljs$core$IFn$_invoke$arity$variadic = G__20921__delegate;
return G__20921;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20924__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20925__i = 0, G__20925__a = new Array(arguments.length -  0);
while (G__20925__i < G__20925__a.length) {G__20925__a[G__20925__i] = arguments[G__20925__i + 0]; ++G__20925__i;}
  args = new cljs.core.IndexedSeq(G__20925__a,0);
} 
return G__20924__delegate.call(this,args);};
G__20924.cljs$lang$maxFixedArity = 0;
G__20924.cljs$lang$applyTo = (function (arglist__20926){
var args = cljs.core.seq(arglist__20926);
return G__20924__delegate(args);
});
G__20924.cljs$core$IFn$_invoke$arity$variadic = G__20924__delegate;
return G__20924;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
