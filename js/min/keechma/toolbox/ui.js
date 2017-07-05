// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.ui');
goog.require('cljs.core');
goog.require('keechma.ui_component');
/**
 * Read and defer a component subscription
 */
keechma.toolbox.ui.sub_GT_ = (function keechma$toolbox$ui$sub_GT_(var_args){
var args__11178__auto__ = [];
var len__11171__auto___20789 = arguments.length;
var i__11172__auto___20790 = (0);
while(true){
if((i__11172__auto___20790 < len__11171__auto___20789)){
args__11178__auto__.push((arguments[i__11172__auto___20790]));

var G__20791 = (i__11172__auto___20790 + (1));
i__11172__auto___20790 = G__20791;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((2) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11179__auto__);
});

keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,subscription,args){
var G__20788 = keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3(ctx,subscription,args);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20788) : cljs.core.deref.call(null,G__20788));
});

keechma.toolbox.ui.sub_GT_.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui.sub_GT_.cljs$lang$applyTo = (function (seq20785){
var G__20786 = cljs.core.first(seq20785);
var seq20785__$1 = cljs.core.next(seq20785);
var G__20787 = cljs.core.first(seq20785__$1);
var seq20785__$2 = cljs.core.next(seq20785__$1);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic(G__20786,G__20787,seq20785__$2);
});

/**
 * Send a command to the controller
 */
keechma.toolbox.ui._LT_cmd = (function keechma$toolbox$ui$_LT_cmd(var_args){
var args__11178__auto__ = [];
var len__11171__auto___20795 = arguments.length;
var i__11172__auto___20796 = (0);
while(true){
if((i__11172__auto___20796 < len__11171__auto___20795)){
args__11178__auto__.push((arguments[i__11172__auto___20796]));

var G__20797 = (i__11172__auto___20796 + (1));
i__11172__auto___20796 = G__20797;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((2) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11179__auto__);
});

keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,command,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(keechma.ui_component.send_command,ctx,command,args);
});

keechma.toolbox.ui._LT_cmd.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui._LT_cmd.cljs$lang$applyTo = (function (seq20792){
var G__20793 = cljs.core.first(seq20792);
var seq20792__$1 = cljs.core.next(seq20792);
var G__20794 = cljs.core.first(seq20792__$1);
var seq20792__$2 = cljs.core.next(seq20792__$1);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic(G__20793,G__20794,seq20792__$2);
});

/**
 * Read current route data. Derefs the route subscription
 */
keechma.toolbox.ui.route_GT_ = (function keechma$toolbox$ui$route_GT_(ctx){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1((function (){var G__20799 = keechma.ui_component.current_route(ctx);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20799) : cljs.core.deref.call(null,G__20799));
})());
});
