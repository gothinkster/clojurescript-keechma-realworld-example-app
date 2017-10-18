// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.reporter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
keechma.reporter.now = (function keechma$reporter$now(){
return (new Date()).getTime();
});
keechma.reporter.cmd_info = (function keechma$reporter$cmd_info(var_args){
var G__21108 = arguments.length;
switch (G__21108) {
case 0:
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1 = (function (info){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cmd),cljs.core.cst$kw$created_DASH_at,keechma.reporter.now(),cljs.core.cst$kw$duration,(0),cljs.core.cst$kw$status,cljs.core.cst$kw$done], null),info], 0));
});

keechma.reporter.cmd_info.cljs$lang$maxFixedArity = 1;

keechma.reporter.update_duration = (function keechma$reporter$update_duration(info){
var now_time = keechma.reporter.now();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info,cljs.core.cst$kw$duration,(now_time - cljs.core.cst$kw$created_DASH_at.cljs$core$IFn$_invoke$arity$1(info)));
});
keechma.reporter.with_origin = (function keechma$reporter$with_origin(var_args){
var G__21111 = arguments.length;
switch (G__21111) {
case 1:
return keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$1 = (function (origin){
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$origin_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(origin)], null));
});

keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$2 = (function (origin,payload){
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(payload,cljs.core.cst$kw$origin_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(origin)));
});

keechma.reporter.with_origin.cljs$lang$maxFixedArity = 2;

keechma.reporter.with_parent = (function keechma$reporter$with_parent(var_args){
var G__21114 = arguments.length;
switch (G__21114) {
case 1:
return keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(parent)], null));
});

keechma.reporter.with_parent.cljs$core$IFn$_invoke$arity$2 = (function (parent,payload){
return keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(payload,cljs.core.cst$kw$parent_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(parent)));
});

keechma.reporter.with_parent.cljs$lang$maxFixedArity = 2;

