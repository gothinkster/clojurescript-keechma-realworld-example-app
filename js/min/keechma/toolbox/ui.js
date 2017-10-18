// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.ui');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.ui_component');
/**
 * Read and defer a component subscription
 */
keechma.toolbox.ui.sub_GT_ = (function keechma$toolbox$ui$sub_GT_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21645 = arguments.length;
var i__12776__auto___21646 = (0);
while(true){
if((i__12776__auto___21646 < len__12775__auto___21645)){
args__12782__auto__.push((arguments[i__12776__auto___21646]));

var G__21647 = (i__12776__auto___21646 + (1));
i__12776__auto___21646 = G__21647;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,subscription,args){
return cljs.core.deref(keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3(ctx,subscription,args));
});

keechma.toolbox.ui.sub_GT_.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui.sub_GT_.cljs$lang$applyTo = (function (seq21642){
var G__21643 = cljs.core.first(seq21642);
var seq21642__$1 = cljs.core.next(seq21642);
var G__21644 = cljs.core.first(seq21642__$1);
var seq21642__$2 = cljs.core.next(seq21642__$1);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic(G__21643,G__21644,seq21642__$2);
});

/**
 * Send a command to the controller
 */
keechma.toolbox.ui._LT_cmd = (function keechma$toolbox$ui$_LT_cmd(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21651 = arguments.length;
var i__12776__auto___21652 = (0);
while(true){
if((i__12776__auto___21652 < len__12775__auto___21651)){
args__12782__auto__.push((arguments[i__12776__auto___21652]));

var G__21653 = (i__12776__auto___21652 + (1));
i__12776__auto___21652 = G__21653;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,command,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(keechma.ui_component.send_command,ctx,command,args);
});

keechma.toolbox.ui._LT_cmd.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui._LT_cmd.cljs$lang$applyTo = (function (seq21648){
var G__21649 = cljs.core.first(seq21648);
var seq21648__$1 = cljs.core.next(seq21648);
var G__21650 = cljs.core.first(seq21648__$1);
var seq21648__$2 = cljs.core.next(seq21648__$1);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic(G__21649,G__21650,seq21648__$2);
});

/**
 * Read current route data. Derefs the route subscription
 */
keechma.toolbox.ui.route_GT_ = (function keechma$toolbox$ui$route_GT_(ctx){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(keechma.ui_component.current_route(ctx)));
});
