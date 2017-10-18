// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.controller_manager');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('keechma.util');
goog.require('keechma.controller');
goog.require('keechma.reporter');
keechma.controller_manager.send_command_to = (function keechma$controller_manager$send_command_to(var_args){
var G__25298 = arguments.length;
switch (G__25298) {
case 4:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4 = (function (reporter,controller,command_name,args){
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5(reporter,controller,command_name,args,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$route_DASH_changed,command_name))?keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0():null));
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5 = (function (reporter,controller,command_name,args,origin){
var cmd_info = keechma.reporter.with_origin.cljs$core$IFn$_invoke$arity$1(origin);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$route_DASH_changed,command_name)){
var G__25299_25320 = cljs.core.cst$kw$app;
var G__25300_25321 = cljs.core.cst$kw$out;
var G__25301_25322 = cljs.core.cst$kw$controller;
var G__25302_25323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(controller),command_name], null);
var G__25303_25324 = args;
var G__25304_25325 = origin;
var G__25305_25326 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25299_25320,G__25300_25321,G__25301_25322,G__25302_25323,G__25303_25324,G__25304_25325,G__25305_25326) : reporter.call(null,G__25299_25320,G__25300_25321,G__25301_25322,G__25302_25323,G__25303_25324,G__25304_25325,G__25305_25326));

var G__25306_25327 = cljs.core.cst$kw$controller;
var G__25307_25328 = cljs.core.cst$kw$in;
var G__25308_25329 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(controller);
var G__25309_25330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keechma_SLASH_lifecycle,command_name], null);
var G__25310_25331 = cmd_info;
var G__25311_25332 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25306_25327,G__25307_25328,G__25308_25329,G__25309_25330,G__25310_25331,G__25311_25332) : reporter.call(null,G__25306_25327,G__25307_25328,G__25308_25329,G__25309_25330,G__25310_25331,G__25311_25332));
} else {
var G__25312_25333 = cljs.core.cst$kw$controller;
var G__25313_25334 = cljs.core.cst$kw$in;
var G__25314_25335 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(controller);
var G__25315_25336 = command_name;
var G__25316_25337 = args;
var G__25317_25338 = cmd_info;
var G__25318_25339 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25312_25333,G__25313_25334,G__25314_25335,G__25315_25336,G__25316_25337,G__25317_25338,G__25318_25339) : reporter.call(null,G__25312_25333,G__25313_25334,G__25314_25335,G__25315_25336,G__25316_25337,G__25317_25338,G__25318_25339));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});

keechma.controller_manager.send_command_to.cljs$lang$maxFixedArity = 5;

keechma.controller_manager.route_command_to_controller = (function keechma$controller_manager$route_command_to_controller(reporter,controllers,command_name,command_args,cmd_info){
var vec__25340 = command_name;
var controller_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25340,(0),null);
var command_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25340,(1),null);
var controller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controllers,controller_name);
if(cljs.core.truth_(controller)){
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5(reporter,controller,command_name__$1,command_args,cmd_info);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trying to send command to a controller that is not running",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$controller,controller_name,cljs.core.cst$kw$command,command_name__$1,cljs.core.cst$kw$args,command_args], null));
}
});
keechma.controller_manager.report_running_controllers = (function keechma$controller_manager$report_running_controllers(app_db_atom){
var running_controllers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (running_controllers){
return (function (acc,p__25343){
var vec__25344 = p__25343;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25344,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(v));
});})(running_controllers))
,cljs.core.PersistentArrayMap.EMPTY,running_controllers);
});
keechma.controller_manager.route_change_execution_plan = (function keechma$controller_manager$route_change_execution_plan(route_params,running_controllers,controllers){
var plan = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$stop,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$start,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$wake,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$route_DASH_changed,cljs.core.PersistentVector.EMPTY], null);
var running_controller_keys_set = cljs.core.set(cljs.core.keys(running_controllers));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (plan,running_controller_keys_set){
return (function (acc,p__25347){
var vec__25348 = p__25347;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(1),null);
var map__25351 = acc;
var map__25351__$1 = ((((!((map__25351 == null)))?((((map__25351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25351):map__25351);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,cljs.core.cst$kw$stop);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,cljs.core.cst$kw$start);
var wake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,cljs.core.cst$kw$wake);
var route_changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25351__$1,cljs.core.cst$kw$route_DASH_changed);
var new_params = (keechma.controller.params.cljs$core$IFn$_invoke$arity$2 ? keechma.controller.params.cljs$core$IFn$_invoke$arity$2(controller,route_params) : keechma.controller.params.call(null,controller,route_params));
var running_controller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(running_controllers,topic);
var prev_params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(running_controller);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.controller.SerializedController,cljs.core.type(running_controller))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$wake,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wake,topic,new_params));
} else {
if(((prev_params == null)) && ((new_params == null))){
return acc;
} else {
if(((prev_params == null)) && (!((new_params == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start,topic,new_params));
} else {
if((!((prev_params == null))) && ((new_params == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$stop,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stop,topic,new_params));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_params,prev_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$stop,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stop,topic,new_params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start,topic,new_params)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_params,prev_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$route_DASH_changed,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(route_changed,topic));
} else {
return acc;

}
}
}
}
}
}
});})(plan,running_controller_keys_set))
,plan,controllers);
});
keechma.controller_manager.apply_stop_controllers = (function keechma$controller_manager$apply_stop_controllers(app_db,reporter,stop){
var running_controllers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null));
var stop__$1 = stop;
var app_db__$1 = app_db;
while(true){
var temp__5276__auto__ = cljs.core.first(stop__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var s = temp__5276__auto__;
var vec__25353 = s;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25353,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25353,(1),null);
var G__25356_25373 = cljs.core.cst$kw$app;
var G__25357_25374 = cljs.core.cst$kw$out;
var G__25358_25375 = cljs.core.cst$kw$controller;
var G__25359_25376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$stop], null);
var G__25360_25377 = params;
var G__25361_25378 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25362_25379 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25356_25373,G__25357_25374,G__25358_25375,G__25359_25376,G__25360_25377,G__25361_25378,G__25362_25379) : reporter.call(null,G__25356_25373,G__25357_25374,G__25358_25375,G__25359_25376,G__25360_25377,G__25361_25378,G__25362_25379));

var controller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(running_controllers,topic);
var _ = (function (){var G__25363 = cljs.core.cst$kw$controller;
var G__25364 = cljs.core.cst$kw$in;
var G__25365 = topic;
var G__25366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lifecycle,cljs.core.cst$kw$stop], null);
var G__25367 = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(controller);
var G__25368 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25369 = cljs.core.cst$kw$info;
return (reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25363,G__25364,G__25365,G__25366,G__25367,G__25368,G__25369) : reporter.call(null,G__25363,G__25364,G__25365,G__25366,G__25367,G__25368,G__25369));
})();
var new_app_db = keechma.util.dissoc_in((function (){var G__25370 = controller;
var G__25371 = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(controller);
var G__25372 = app_db__$1;
return (keechma.controller.stop.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.stop.cljs$core$IFn$_invoke$arity$3(G__25370,G__25371,G__25372) : keechma.controller.stop.call(null,G__25370,G__25371,G__25372));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
cljs.core.async.close_BANG_(cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller));

var G__25380 = cljs.core.rest(stop__$1);
var G__25381 = new_app_db;
stop__$1 = G__25380;
app_db__$1 = G__25381;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_or_wake_controllers = (function keechma$controller_manager$apply_start_or_wake_controllers(action,reporter_action,app_db,reporter,controllers,commands_chan,get_running,start_or_wake){
var start_or_wake__$1 = start_or_wake;
var app_db__$1 = app_db;
while(true){
var temp__5276__auto__ = cljs.core.first(start_or_wake__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var s = temp__5276__auto__;
var vec__25382 = s;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25382,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25382,(1),null);
var G__25385_25399 = cljs.core.cst$kw$app;
var G__25386_25400 = cljs.core.cst$kw$out;
var G__25387_25401 = cljs.core.cst$kw$controller;
var G__25388_25402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,reporter_action], null);
var G__25389_25403 = params;
var G__25390_25404 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25391_25405 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25385_25399,G__25386_25400,G__25387_25401,G__25388_25402,G__25389_25403,G__25390_25404,G__25391_25405) : reporter.call(null,G__25385_25399,G__25386_25400,G__25387_25401,G__25388_25402,G__25389_25403,G__25390_25404,G__25391_25405));

var G__25392_25406 = cljs.core.cst$kw$controller;
var G__25393_25407 = cljs.core.cst$kw$in;
var G__25394_25408 = topic;
var G__25395_25409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keecmha_SLASH_lifecycle,reporter_action], null);
var G__25396_25410 = params;
var G__25397_25411 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25398_25412 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25392_25406,G__25393_25407,G__25394_25408,G__25395_25409,G__25396_25410,G__25397_25411,G__25398_25412) : reporter.call(null,G__25392_25406,G__25393_25407,G__25394_25408,G__25395_25409,G__25396_25410,G__25397_25411,G__25398_25412));

var controller = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(controllers,topic),cljs.core.cst$kw$in_DASH_chan,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$out_DASH_chan,commands_chan,cljs.core.cst$kw$params,params,cljs.core.cst$kw$route_DASH_params,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(app_db__$1),cljs.core.cst$kw$name,topic,cljs.core.cst$kw$reporter,reporter,cljs.core.cst$kw$running,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(get_running,topic)], 0));
var new_app_db = cljs.core.assoc_in((action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(controller,params,app_db__$1) : action.call(null,controller,params,app_db__$1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null),controller);
var G__25413 = cljs.core.rest(start_or_wake__$1);
var G__25414 = new_app_db;
start_or_wake__$1 = G__25413;
app_db__$1 = G__25414;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_controllers = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.start,cljs.core.cst$kw$start);
keechma.controller_manager.apply_wake_controllers = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.wake,cljs.core.cst$kw$wake);
keechma.controller_manager.call_handler_on_started_controllers = (function keechma$controller_manager$call_handler_on_started_controllers(app_db_atom,reporter,start){
var seq__25415 = cljs.core.seq(start);
var chunk__25416 = null;
var count__25417 = (0);
var i__25418 = (0);
while(true){
if((i__25418 < count__25417)){
var vec__25419 = chunk__25416.cljs$core$IIndexed$_nth$arity$2(null,i__25418);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25419,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25419,(1),null);
var controller_25461 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
var G__25422_25462 = cljs.core.cst$kw$app;
var G__25423_25463 = cljs.core.cst$kw$out;
var G__25424_25464 = cljs.core.cst$kw$controller;
var G__25425_25465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$handler], null);
var G__25426_25466 = null;
var G__25427_25467 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25428_25468 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25422_25462,G__25423_25463,G__25424_25464,G__25425_25465,G__25426_25466,G__25427_25467,G__25428_25468) : reporter.call(null,G__25422_25462,G__25423_25463,G__25424_25464,G__25425_25465,G__25426_25466,G__25427_25467,G__25428_25468));

var G__25429_25469 = cljs.core.cst$kw$controller;
var G__25430_25470 = cljs.core.cst$kw$in;
var G__25431_25471 = topic;
var G__25432_25472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keechma_SLASH_lifecycle,cljs.core.cst$kw$handler], null);
var G__25433_25473 = null;
var G__25434_25474 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25435_25475 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25429_25469,G__25430_25470,G__25431_25471,G__25432_25472,G__25433_25473,G__25434_25474,G__25435_25475) : reporter.call(null,G__25429_25469,G__25430_25470,G__25431_25471,G__25432_25472,G__25433_25473,G__25434_25474,G__25435_25475));

var G__25436_25476 = controller_25461;
var G__25437_25477 = app_db_atom;
var G__25438_25478 = cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25461);
var G__25439_25479 = cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25461);
(keechma.controller.handler.cljs$core$IFn$_invoke$arity$4 ? keechma.controller.handler.cljs$core$IFn$_invoke$arity$4(G__25436_25476,G__25437_25477,G__25438_25478,G__25439_25479) : keechma.controller.handler.call(null,G__25436_25476,G__25437_25477,G__25438_25478,G__25439_25479));

var G__25480 = seq__25415;
var G__25481 = chunk__25416;
var G__25482 = count__25417;
var G__25483 = (i__25418 + (1));
seq__25415 = G__25480;
chunk__25416 = G__25481;
count__25417 = G__25482;
i__25418 = G__25483;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25415);
if(temp__5278__auto__){
var seq__25415__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25415__$1)){
var c__12440__auto__ = cljs.core.chunk_first(seq__25415__$1);
var G__25484 = cljs.core.chunk_rest(seq__25415__$1);
var G__25485 = c__12440__auto__;
var G__25486 = cljs.core.count(c__12440__auto__);
var G__25487 = (0);
seq__25415 = G__25484;
chunk__25416 = G__25485;
count__25417 = G__25486;
i__25418 = G__25487;
continue;
} else {
var vec__25440 = cljs.core.first(seq__25415__$1);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25440,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25440,(1),null);
var controller_25488 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
var G__25443_25489 = cljs.core.cst$kw$app;
var G__25444_25490 = cljs.core.cst$kw$out;
var G__25445_25491 = cljs.core.cst$kw$controller;
var G__25446_25492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$handler], null);
var G__25447_25493 = null;
var G__25448_25494 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25449_25495 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25443_25489,G__25444_25490,G__25445_25491,G__25446_25492,G__25447_25493,G__25448_25494,G__25449_25495) : reporter.call(null,G__25443_25489,G__25444_25490,G__25445_25491,G__25446_25492,G__25447_25493,G__25448_25494,G__25449_25495));

var G__25450_25496 = cljs.core.cst$kw$controller;
var G__25451_25497 = cljs.core.cst$kw$in;
var G__25452_25498 = topic;
var G__25453_25499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keechma_SLASH_lifecycle,cljs.core.cst$kw$handler], null);
var G__25454_25500 = null;
var G__25455_25501 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25456_25502 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25450_25496,G__25451_25497,G__25452_25498,G__25453_25499,G__25454_25500,G__25455_25501,G__25456_25502) : reporter.call(null,G__25450_25496,G__25451_25497,G__25452_25498,G__25453_25499,G__25454_25500,G__25455_25501,G__25456_25502));

var G__25457_25503 = controller_25488;
var G__25458_25504 = app_db_atom;
var G__25459_25505 = cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25488);
var G__25460_25506 = cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25488);
(keechma.controller.handler.cljs$core$IFn$_invoke$arity$4 ? keechma.controller.handler.cljs$core$IFn$_invoke$arity$4(G__25457_25503,G__25458_25504,G__25459_25505,G__25460_25506) : keechma.controller.handler.call(null,G__25457_25503,G__25458_25504,G__25459_25505,G__25460_25506));

var G__25507 = cljs.core.next(seq__25415__$1);
var G__25508 = null;
var G__25509 = (0);
var G__25510 = (0);
seq__25415 = G__25507;
chunk__25416 = G__25508;
count__25417 = G__25509;
i__25418 = G__25510;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.send_route_changed_to_surviving_controllers = (function keechma$controller_manager$send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed,route_params){
var seq__25511 = cljs.core.seq(route_changed);
var chunk__25512 = null;
var count__25513 = (0);
var i__25514 = (0);
while(true){
if((i__25514 < count__25513)){
var topic = chunk__25512.cljs$core$IIndexed$_nth$arity$2(null,i__25514);
var controller_25515 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4(reporter,controller_25515,cljs.core.cst$kw$route_DASH_changed,route_params);

var G__25516 = seq__25511;
var G__25517 = chunk__25512;
var G__25518 = count__25513;
var G__25519 = (i__25514 + (1));
seq__25511 = G__25516;
chunk__25512 = G__25517;
count__25513 = G__25518;
i__25514 = G__25519;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25511);
if(temp__5278__auto__){
var seq__25511__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25511__$1)){
var c__12440__auto__ = cljs.core.chunk_first(seq__25511__$1);
var G__25520 = cljs.core.chunk_rest(seq__25511__$1);
var G__25521 = c__12440__auto__;
var G__25522 = cljs.core.count(c__12440__auto__);
var G__25523 = (0);
seq__25511 = G__25520;
chunk__25512 = G__25521;
count__25513 = G__25522;
i__25514 = G__25523;
continue;
} else {
var topic = cljs.core.first(seq__25511__$1);
var controller_25524 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4(reporter,controller_25524,cljs.core.cst$kw$route_DASH_changed,route_params);

var G__25525 = cljs.core.next(seq__25511__$1);
var G__25526 = null;
var G__25527 = (0);
var G__25528 = (0);
seq__25511 = G__25525;
chunk__25512 = G__25526;
count__25513 = G__25527;
i__25514 = G__25528;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.apply_route_change = (function keechma$controller_manager$apply_route_change(reporter,route_params,app_db_atom,commands_chan,controllers){
var G__25529_25557 = cljs.core.cst$kw$router;
var G__25530_25558 = cljs.core.cst$kw$out;
var G__25531_25559 = null;
var G__25532_25560 = cljs.core.cst$kw$route_DASH_changed;
var G__25533_25561 = route_params;
var G__25534_25562 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25535_25563 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25529_25557,G__25530_25558,G__25531_25559,G__25532_25560,G__25533_25561,G__25534_25562,G__25535_25563) : reporter.call(null,G__25529_25557,G__25530_25558,G__25531_25559,G__25532_25560,G__25533_25561,G__25534_25562,G__25535_25563));

var app_db_25564 = cljs.core.deref(app_db_atom);
var execution_plan_25565 = keechma.controller_manager.route_change_execution_plan(route_params,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db_25564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null)),controllers);
var map__25536_25566 = execution_plan_25565;
var map__25536_25567__$1 = ((((!((map__25536_25566 == null)))?((((map__25536_25566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25536_25566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25536_25566):map__25536_25566);
var stop_25568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25536_25567__$1,cljs.core.cst$kw$stop);
var start_25569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25536_25567__$1,cljs.core.cst$kw$start);
var wake_25570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25536_25567__$1,cljs.core.cst$kw$wake);
var route_changed_25571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25536_25567__$1,cljs.core.cst$kw$route_DASH_changed);
var get_running_25572 = ((function (app_db_25564,execution_plan_25565,map__25536_25566,map__25536_25567__$1,stop_25568,start_25569,wake_25570,route_changed_25571){
return (function (topic){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
});})(app_db_25564,execution_plan_25565,map__25536_25566,map__25536_25567__$1,stop_25568,start_25569,wake_25570,route_changed_25571))
;
cljs.core.reset_BANG_(app_db_atom,(function (){var G__25538 = (function (){var G__25544 = keechma.controller_manager.apply_stop_controllers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_db_25564,cljs.core.cst$kw$route,route_params),reporter,stop_25568);
var G__25545 = reporter;
var G__25546 = controllers;
var G__25547 = commands_chan;
var G__25548 = get_running_25572;
var G__25549 = start_25569;
return (keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6 ? keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6(G__25544,G__25545,G__25546,G__25547,G__25548,G__25549) : keechma.controller_manager.apply_start_controllers.call(null,G__25544,G__25545,G__25546,G__25547,G__25548,G__25549));
})();
var G__25539 = reporter;
var G__25540 = controllers;
var G__25541 = commands_chan;
var G__25542 = get_running_25572;
var G__25543 = wake_25570;
return (keechma.controller_manager.apply_wake_controllers.cljs$core$IFn$_invoke$arity$6 ? keechma.controller_manager.apply_wake_controllers.cljs$core$IFn$_invoke$arity$6(G__25538,G__25539,G__25540,G__25541,G__25542,G__25543) : keechma.controller_manager.apply_wake_controllers.call(null,G__25538,G__25539,G__25540,G__25541,G__25542,G__25543));
})());

keechma.controller_manager.call_handler_on_started_controllers(app_db_atom,reporter,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(start_25569,wake_25570));

keechma.controller_manager.send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed_25571,route_params);

var G__25550 = cljs.core.cst$kw$app;
var G__25551 = cljs.core.cst$kw$in;
var G__25552 = null;
var G__25553 = cljs.core.cst$kw$running_DASH_controllers;
var G__25554 = keechma.controller_manager.report_running_controllers(app_db_atom);
var G__25555 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25556 = cljs.core.cst$kw$info;
return (reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25550,G__25551,G__25552,G__25553,G__25554,G__25555,G__25556) : reporter.call(null,G__25550,G__25551,G__25552,G__25553,G__25554,G__25555,G__25556));
});
keechma.controller_manager.call_ssr_handler_on_started_controllers = (function keechma$controller_manager$call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb){
var wait_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var wait_count = (function (){var wait_count = (0);
var start__$1 = start;
while(true){
var temp__5276__auto__ = cljs.core.first(start__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var s = temp__5276__auto__;
var vec__25573 = s;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25573,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25573,(1),null);
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
var G__25576_25624 = cljs.core.cst$kw$app;
var G__25577_25625 = cljs.core.cst$kw$out;
var G__25578_25626 = cljs.core.cst$kw$controller;
var G__25579_25627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$ssr_DASH_handler], null);
var G__25580_25628 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25581_25629 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25576_25624,G__25577_25625,G__25578_25626,G__25579_25627,G__25580_25628,G__25581_25629) : reporter.call(null,G__25576_25624,G__25577_25625,G__25578_25626,G__25579_25627,G__25580_25628,G__25581_25629));

var ret_val = (function (){var G__25582 = controller;
var G__25583 = app_db_atom;
var G__25584 = ((function (wait_count,start__$1,G__25582,G__25583,vec__25573,topic,_,controller,s,temp__5276__auto__,wait_chan){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(wait_chan,true);
});})(wait_count,start__$1,G__25582,G__25583,vec__25573,topic,_,controller,s,temp__5276__auto__,wait_chan))
;
var G__25585 = cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller);
var G__25586 = cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller);
return (keechma.controller.ssr_handler.cljs$core$IFn$_invoke$arity$5 ? keechma.controller.ssr_handler.cljs$core$IFn$_invoke$arity$5(G__25582,G__25583,G__25584,G__25585,G__25586) : keechma.controller.ssr_handler.call(null,G__25582,G__25583,G__25584,G__25585,G__25586));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.controller.not_implemented,ret_val)){
var G__25630 = wait_count;
var G__25631 = cljs.core.rest(start__$1);
wait_count = G__25630;
start__$1 = G__25631;
continue;
} else {
var G__25632 = (wait_count + (1));
var G__25633 = cljs.core.rest(start__$1);
wait_count = G__25632;
start__$1 = G__25633;
continue;
}
} else {
return wait_count;
}
break;
}
})();
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__,wait_chan,wait_count){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__,wait_chan,wait_count){
return (function (state_25606){
var state_val_25607 = (state_25606[(1)]);
if((state_val_25607 === (7))){
var inst_25594 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
if(cljs.core.truth_(inst_25594)){
var statearr_25608_25634 = state_25606__$1;
(statearr_25608_25634[(1)] = (8));

} else {
var statearr_25609_25635 = state_25606__$1;
(statearr_25609_25635[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25607 === (1))){
var inst_25587 = wait_count;
var state_25606__$1 = (function (){var statearr_25610 = state_25606;
(statearr_25610[(7)] = inst_25587);

return statearr_25610;
})();
var statearr_25611_25636 = state_25606__$1;
(statearr_25611_25636[(2)] = null);

(statearr_25611_25636[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25607 === (4))){
var inst_25591 = (ssr_handler_done_cb.cljs$core$IFn$_invoke$arity$0 ? ssr_handler_done_cb.cljs$core$IFn$_invoke$arity$0() : ssr_handler_done_cb.call(null));
var state_25606__$1 = state_25606;
var statearr_25612_25637 = state_25606__$1;
(statearr_25612_25637[(2)] = inst_25591);

(statearr_25612_25637[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25607 === (6))){
var inst_25602 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25613_25638 = state_25606__$1;
(statearr_25613_25638[(2)] = inst_25602);

(statearr_25613_25638[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25607 === (3))){
var inst_25604 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25606__$1,inst_25604);
} else {
if((state_val_25607 === (2))){
var inst_25587 = (state_25606[(7)]);
var inst_25589 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),inst_25587);
var state_25606__$1 = state_25606;
if(inst_25589){
var statearr_25614_25639 = state_25606__$1;
(statearr_25614_25639[(1)] = (4));

} else {
var statearr_25615_25640 = state_25606__$1;
(statearr_25615_25640[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25607 === (9))){
var state_25606__$1 = state_25606;
var statearr_25616_25641 = state_25606__$1;
(statearr_25616_25641[(2)] = null);

(statearr_25616_25641[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25607 === (5))){
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25606__$1,(7),wait_chan);
} else {
if((state_val_25607 === (10))){
var inst_25600 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25617_25642 = state_25606__$1;
(statearr_25617_25642[(2)] = inst_25600);

(statearr_25617_25642[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25607 === (8))){
var inst_25587 = (state_25606[(7)]);
var inst_25596 = (inst_25587 - (1));
var inst_25587__$1 = inst_25596;
var state_25606__$1 = (function (){var statearr_25618 = state_25606;
(statearr_25618[(7)] = inst_25587__$1);

return statearr_25618;
})();
var statearr_25619_25643 = state_25606__$1;
(statearr_25619_25643[(2)] = null);

(statearr_25619_25643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19193__auto__,wait_chan,wait_count))
;
return ((function (switch__19091__auto__,c__19193__auto__,wait_chan,wait_count){
return (function() {
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto__ = null;
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto____0 = (function (){
var statearr_25620 = [null,null,null,null,null,null,null,null];
(statearr_25620[(0)] = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto__);

(statearr_25620[(1)] = (1));

return statearr_25620;
});
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto____1 = (function (state_25606){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_25606);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e25621){if((e25621 instanceof Object)){
var ex__19095__auto__ = e25621;
var statearr_25622_25644 = state_25606;
(statearr_25622_25644[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25606);

return cljs.core.cst$kw$recur;
} else {
throw e25621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__25645 = state_25606;
state_25606 = G__25645;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto__ = function(state_25606){
switch(arguments.length){
case 0:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto____0.call(this);
case 1:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto____1.call(this,state_25606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto____0;
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto____1;
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__,wait_chan,wait_count))
})();
var state__19195__auto__ = (function (){var statearr_25623 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_25623[(6)] = c__19193__auto__);

return statearr_25623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__,wait_chan,wait_count))
);

return c__19193__auto__;
});
keechma.controller_manager.start_ssr = (function keechma$controller_manager$start_ssr(routes_chan,commands_chan,app_db_atom,controllers,reporter,done_cb){
var app_db = cljs.core.deref(app_db_atom);
var route_params = cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(app_db);
var execution_plan = keechma.controller_manager.route_change_execution_plan(route_params,cljs.core.PersistentArrayMap.EMPTY,controllers);
var map__25646 = execution_plan;
var map__25646__$1 = ((((!((map__25646 == null)))?((((map__25646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25646):map__25646);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$start);
var get_running = ((function (app_db,route_params,execution_plan,map__25646,map__25646__$1,start){
return (function (topic){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
});})(app_db,route_params,execution_plan,map__25646,map__25646__$1,start))
;
var ssr_handler_done_cb = ((function (app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running){
return (function (){
cljs.core.async.close_BANG_(commands_chan);

return (done_cb.cljs$core$IFn$_invoke$arity$0 ? done_cb.cljs$core$IFn$_invoke$arity$0() : done_cb.call(null));
});})(app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running))
;
cljs.core.reset_BANG_(app_db_atom,(keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6 ? keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6(app_db,reporter,controllers,commands_chan,get_running,start) : keechma.controller_manager.apply_start_controllers.call(null,app_db,reporter,controllers,commands_chan,get_running,start)));

var c__19193__auto___25685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___25685,app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running,ssr_handler_done_cb){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___25685,app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running,ssr_handler_done_cb){
return (function (state_25671){
var state_val_25672 = (state_25671[(1)]);
if((state_val_25672 === (1))){
var state_25671__$1 = state_25671;
var statearr_25673_25686 = state_25671__$1;
(statearr_25673_25686[(2)] = null);

(statearr_25673_25686[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25672 === (2))){
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25671__$1,(4),commands_chan);
} else {
if((state_val_25672 === (3))){
var inst_25669 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25671__$1,inst_25669);
} else {
if((state_val_25672 === (4))){
var inst_25650 = (state_25671[(7)]);
var inst_25650__$1 = (state_25671[(2)]);
var state_25671__$1 = (function (){var statearr_25674 = state_25671;
(statearr_25674[(7)] = inst_25650__$1);

return statearr_25674;
})();
if(cljs.core.truth_(inst_25650__$1)){
var statearr_25675_25687 = state_25671__$1;
(statearr_25675_25687[(1)] = (5));

} else {
var statearr_25676_25688 = state_25671__$1;
(statearr_25676_25688[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25672 === (5))){
var inst_25650 = (state_25671[(7)]);
var inst_25655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25650,(0),null);
var inst_25656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25650,(1),null);
var inst_25657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25650,(2),null);
var inst_25658 = cljs.core.deref(app_db_atom);
var inst_25659 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25660 = [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers];
var inst_25661 = (new cljs.core.PersistentVector(null,2,(5),inst_25659,inst_25660,null));
var inst_25662 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_25658,inst_25661);
var inst_25663 = keechma.controller_manager.route_command_to_controller(reporter,inst_25662,inst_25655,inst_25656,inst_25657);
var state_25671__$1 = (function (){var statearr_25677 = state_25671;
(statearr_25677[(8)] = inst_25663);

return statearr_25677;
})();
var statearr_25678_25689 = state_25671__$1;
(statearr_25678_25689[(2)] = null);

(statearr_25678_25689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25672 === (6))){
var state_25671__$1 = state_25671;
var statearr_25679_25690 = state_25671__$1;
(statearr_25679_25690[(2)] = null);

(statearr_25679_25690[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25672 === (7))){
var inst_25667 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
var statearr_25680_25691 = state_25671__$1;
(statearr_25680_25691[(2)] = inst_25667);

(statearr_25680_25691[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__19193__auto___25685,app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running,ssr_handler_done_cb))
;
return ((function (switch__19091__auto__,c__19193__auto___25685,app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running,ssr_handler_done_cb){
return (function() {
var keechma$controller_manager$start_ssr_$_state_machine__19092__auto__ = null;
var keechma$controller_manager$start_ssr_$_state_machine__19092__auto____0 = (function (){
var statearr_25681 = [null,null,null,null,null,null,null,null,null];
(statearr_25681[(0)] = keechma$controller_manager$start_ssr_$_state_machine__19092__auto__);

(statearr_25681[(1)] = (1));

return statearr_25681;
});
var keechma$controller_manager$start_ssr_$_state_machine__19092__auto____1 = (function (state_25671){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_25671);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e25682){if((e25682 instanceof Object)){
var ex__19095__auto__ = e25682;
var statearr_25683_25692 = state_25671;
(statearr_25683_25692[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25671);

return cljs.core.cst$kw$recur;
} else {
throw e25682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__25693 = state_25671;
state_25671 = G__25693;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$controller_manager$start_ssr_$_state_machine__19092__auto__ = function(state_25671){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_ssr_$_state_machine__19092__auto____0.call(this);
case 1:
return keechma$controller_manager$start_ssr_$_state_machine__19092__auto____1.call(this,state_25671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_ssr_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_ssr_$_state_machine__19092__auto____0;
keechma$controller_manager$start_ssr_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_ssr_$_state_machine__19092__auto____1;
return keechma$controller_manager$start_ssr_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___25685,app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running,ssr_handler_done_cb))
})();
var state__19195__auto__ = (function (){var statearr_25684 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_25684[(6)] = c__19193__auto___25685);

return statearr_25684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___25685,app_db,route_params,execution_plan,map__25646,map__25646__$1,start,get_running,ssr_handler_done_cb))
);


return keechma.controller_manager.call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb);
});
/**
 * Starts the controller manager. Controller manager is the central part
 *   of the application that manages the lifecycle of the controllers and routes
 *   the messages sent to them.
 * 
 *   `start` function receives the following parameters:
 *   
 *   - `route-chan` - Route changes will communicated through this channel
 *   - `commands-chan` - User (UI) commands will be sent through this channel
 *   - `app-db` - application state atom
 *   - `controllers` map of controllers registered for the app
 * 
 *   Each time when the new route data comes through the `route-chan` controller
 *   manager will do the following:
 * 
 *   - call the `params` function on each registered controller
 *   - compare the value returned by the `params` function with the value that
 *   was returned last time when the route changes
 *   - based on the comparison it will do one of the following:
 *  - if the last value was `nil` and the current value is `nil` - do nothing
 *  - if the last value was `nil` and the current value is not `nil` - start the controller
 *  - if the last value was not `nil` and the current value is `nil` - stop the controller
 *  - if the last value was not `nil` and the current value is not `nil` and these values are the same - do nothing
 *  - if the last value was not `nil` and the current value is not `nil` and these values are different - restart the controller (stop the current instance and start the new one)
 * 
 *   Controller manager also acts as a command router. Each time a command comes - through the `commands-chan`
 *   the name of the command should look like this `[:controlnler-key :command-name]`. Controller manager will route the `:command-name` command to the appropriate controller based on the `:controller-key`. Controller key is the key under which the controller was registered in the `controllers` argument.
 *   
 */
keechma.controller_manager.start = (function keechma$controller_manager$start(route_chan,commands_chan,app_db_atom,controllers,reporter){
var G__25694_25831 = cljs.core.cst$kw$app;
var G__25695_25832 = cljs.core.cst$kw$in;
var G__25696_25833 = null;
var G__25697_25834 = cljs.core.cst$kw$start;
var G__25698_25835 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__25694_25831,G__25695_25832,G__25696_25833,G__25697_25834){
return (function (acc,p__25701){
var vec__25702 = p__25701;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25702,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25702,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k);
});})(G__25694_25831,G__25695_25832,G__25696_25833,G__25697_25834))
,cljs.core.PersistentVector.EMPTY,controllers);
var G__25699_25836 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25700_25837 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25694_25831,G__25695_25832,G__25696_25833,G__25697_25834,G__25698_25835,G__25699_25836,G__25700_25837) : reporter.call(null,G__25694_25831,G__25695_25832,G__25696_25833,G__25697_25834,G__25698_25835,G__25699_25836,G__25700_25837));

keechma.controller_manager.apply_route_change(reporter,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_db_atom)),app_db_atom,commands_chan,controllers);

var stop_route_block = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var stop_command_block = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var running_chans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__,stop_route_block,stop_command_block){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__,stop_route_block,stop_command_block){
return (function (state_25737){
var state_val_25738 = (state_25737[(1)]);
if((state_val_25738 === (7))){
var inst_25720 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
if(cljs.core.truth_(inst_25720)){
var statearr_25739_25838 = state_25737__$1;
(statearr_25739_25838[(1)] = (8));

} else {
var statearr_25740_25839 = state_25737__$1;
(statearr_25740_25839[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (1))){
var state_25737__$1 = state_25737;
var statearr_25741_25840 = state_25737__$1;
(statearr_25741_25840[(2)] = null);

(statearr_25741_25840[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (4))){
var inst_25716 = (state_25737[(7)]);
var inst_25713 = (state_25737[(2)]);
var inst_25714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25713,(0),null);
var inst_25715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25713,(1),null);
var inst_25716__$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_25715,stop_route_block);
var state_25737__$1 = (function (){var statearr_25742 = state_25737;
(statearr_25742[(8)] = inst_25714);

(statearr_25742[(7)] = inst_25716__$1);

return statearr_25742;
})();
if(inst_25716__$1){
var statearr_25743_25841 = state_25737__$1;
(statearr_25743_25841[(1)] = (5));

} else {
var statearr_25744_25842 = state_25737__$1;
(statearr_25744_25842[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (13))){
var inst_25729 = (state_25737[(2)]);
var state_25737__$1 = (function (){var statearr_25745 = state_25737;
(statearr_25745[(9)] = inst_25729);

return statearr_25745;
})();
var statearr_25746_25843 = state_25737__$1;
(statearr_25746_25843[(2)] = null);

(statearr_25746_25843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (6))){
var inst_25716 = (state_25737[(7)]);
var state_25737__$1 = state_25737;
var statearr_25747_25844 = state_25737__$1;
(statearr_25747_25844[(2)] = inst_25716);

(statearr_25747_25844[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (3))){
var inst_25735 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25737__$1,inst_25735);
} else {
if((state_val_25738 === (12))){
var state_25737__$1 = state_25737;
var statearr_25748_25845 = state_25737__$1;
(statearr_25748_25845[(2)] = null);

(statearr_25748_25845[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (2))){
var inst_25709 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25710 = [stop_route_block,route_chan];
var inst_25711 = (new cljs.core.PersistentVector(null,2,(5),inst_25709,inst_25710,null));
var state_25737__$1 = state_25737;
return cljs.core.async.ioc_alts_BANG_(state_25737__$1,(4),inst_25711);
} else {
if((state_val_25738 === (11))){
var inst_25714 = (state_25737[(8)]);
var inst_25726 = keechma.controller_manager.apply_route_change(reporter,inst_25714,app_db_atom,commands_chan,controllers);
var state_25737__$1 = state_25737;
var statearr_25749_25846 = state_25737__$1;
(statearr_25749_25846[(2)] = inst_25726);

(statearr_25749_25846[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (9))){
var state_25737__$1 = state_25737;
var statearr_25750_25847 = state_25737__$1;
(statearr_25750_25847[(2)] = null);

(statearr_25750_25847[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (5))){
var inst_25714 = (state_25737[(8)]);
var state_25737__$1 = state_25737;
var statearr_25751_25848 = state_25737__$1;
(statearr_25751_25848[(2)] = inst_25714);

(statearr_25751_25848[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (10))){
var inst_25733 = (state_25737[(2)]);
var state_25737__$1 = state_25737;
var statearr_25752_25849 = state_25737__$1;
(statearr_25752_25849[(2)] = inst_25733);

(statearr_25752_25849[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25738 === (8))){
var inst_25714 = (state_25737[(8)]);
var inst_25722 = cljs.core.deref(app_db_atom);
var inst_25723 = cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(inst_25722);
var inst_25724 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_25714,inst_25723);
var state_25737__$1 = state_25737;
if(inst_25724){
var statearr_25753_25850 = state_25737__$1;
(statearr_25753_25850[(1)] = (11));

} else {
var statearr_25754_25851 = state_25737__$1;
(statearr_25754_25851[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19193__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__19091__auto__,c__19193__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__19092__auto__ = null;
var keechma$controller_manager$start_$_state_machine__19092__auto____0 = (function (){
var statearr_25755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25755[(0)] = keechma$controller_manager$start_$_state_machine__19092__auto__);

(statearr_25755[(1)] = (1));

return statearr_25755;
});
var keechma$controller_manager$start_$_state_machine__19092__auto____1 = (function (state_25737){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_25737);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e25756){if((e25756 instanceof Object)){
var ex__19095__auto__ = e25756;
var statearr_25757_25852 = state_25737;
(statearr_25757_25852[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25737);

return cljs.core.cst$kw$recur;
} else {
throw e25756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__25853 = state_25737;
state_25737 = G__25853;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__19092__auto__ = function(state_25737){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__19092__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__19092__auto____1.call(this,state_25737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__19092__auto____0;
keechma$controller_manager$start_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__19092__auto____1;
return keechma$controller_manager$start_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__,stop_route_block,stop_command_block))
})();
var state__19195__auto__ = (function (){var statearr_25758 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_25758[(6)] = c__19193__auto__);

return statearr_25758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__,stop_route_block,stop_command_block))
);

return c__19193__auto__;
})(),(function (){var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__,stop_route_block,stop_command_block){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__,stop_route_block,stop_command_block){
return (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (7))){
var inst_25793 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25799_25854 = state_25797__$1;
(statearr_25799_25854[(2)] = inst_25793);

(statearr_25799_25854[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25798 === (1))){
var state_25797__$1 = state_25797;
var statearr_25800_25855 = state_25797__$1;
(statearr_25800_25855[(2)] = null);

(statearr_25800_25855[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25798 === (4))){
var inst_25767 = (state_25797[(2)]);
var inst_25768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25767,(0),null);
var inst_25769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25767,(1),null);
var inst_25770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25769,stop_command_block);
var state_25797__$1 = (function (){var statearr_25801 = state_25797;
(statearr_25801[(7)] = inst_25768);

return statearr_25801;
})();
if(inst_25770){
var statearr_25802_25856 = state_25797__$1;
(statearr_25802_25856[(1)] = (5));

} else {
var statearr_25803_25857 = state_25797__$1;
(statearr_25803_25857[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25798 === (6))){
var inst_25768 = (state_25797[(7)]);
var inst_25776 = (state_25797[(8)]);
var inst_25776__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25768,(0),null);
var inst_25777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25768,(1),null);
var inst_25778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25768,(2),null);
var inst_25779 = cljs.core.deref(app_db_atom);
var inst_25780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25781 = [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers];
var inst_25782 = (new cljs.core.PersistentVector(null,2,(5),inst_25780,inst_25781,null));
var inst_25783 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_25779,inst_25782);
var inst_25784 = (inst_25776__$1 == null);
var inst_25785 = cljs.core.not(inst_25784);
var state_25797__$1 = (function (){var statearr_25804 = state_25797;
(statearr_25804[(9)] = inst_25777);

(statearr_25804[(10)] = inst_25783);

(statearr_25804[(11)] = inst_25778);

(statearr_25804[(8)] = inst_25776__$1);

return statearr_25804;
})();
if(inst_25785){
var statearr_25805_25858 = state_25797__$1;
(statearr_25805_25858[(1)] = (8));

} else {
var statearr_25806_25859 = state_25797__$1;
(statearr_25806_25859[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25798 === (3))){
var inst_25795 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25797__$1,inst_25795);
} else {
if((state_val_25798 === (2))){
var inst_25763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25764 = [stop_command_block,commands_chan];
var inst_25765 = (new cljs.core.PersistentVector(null,2,(5),inst_25763,inst_25764,null));
var state_25797__$1 = state_25797;
return cljs.core.async.ioc_alts_BANG_(state_25797__$1,(4),inst_25765);
} else {
if((state_val_25798 === (9))){
var state_25797__$1 = state_25797;
var statearr_25807_25860 = state_25797__$1;
(statearr_25807_25860[(2)] = null);

(statearr_25807_25860[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25798 === (5))){
var state_25797__$1 = state_25797;
var statearr_25808_25861 = state_25797__$1;
(statearr_25808_25861[(2)] = null);

(statearr_25808_25861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25798 === (10))){
var inst_25790 = (state_25797[(2)]);
var state_25797__$1 = (function (){var statearr_25809 = state_25797;
(statearr_25809[(12)] = inst_25790);

return statearr_25809;
})();
var statearr_25810_25862 = state_25797__$1;
(statearr_25810_25862[(2)] = null);

(statearr_25810_25862[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25798 === (8))){
var inst_25777 = (state_25797[(9)]);
var inst_25783 = (state_25797[(10)]);
var inst_25778 = (state_25797[(11)]);
var inst_25776 = (state_25797[(8)]);
var inst_25787 = keechma.controller_manager.route_command_to_controller(reporter,inst_25783,inst_25776,inst_25777,inst_25778);
var state_25797__$1 = state_25797;
var statearr_25811_25863 = state_25797__$1;
(statearr_25811_25863[(2)] = inst_25787);

(statearr_25811_25863[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19193__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__19091__auto__,c__19193__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__19092__auto__ = null;
var keechma$controller_manager$start_$_state_machine__19092__auto____0 = (function (){
var statearr_25812 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25812[(0)] = keechma$controller_manager$start_$_state_machine__19092__auto__);

(statearr_25812[(1)] = (1));

return statearr_25812;
});
var keechma$controller_manager$start_$_state_machine__19092__auto____1 = (function (state_25797){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_25797);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e25813){if((e25813 instanceof Object)){
var ex__19095__auto__ = e25813;
var statearr_25814_25864 = state_25797;
(statearr_25814_25864[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25797);

return cljs.core.cst$kw$recur;
} else {
throw e25813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__25865 = state_25797;
state_25797 = G__25865;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__19092__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__19092__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__19092__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller_manager$start_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__19092__auto____0;
keechma$controller_manager$start_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__19092__auto____1;
return keechma$controller_manager$start_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__,stop_route_block,stop_command_block))
})();
var state__19195__auto__ = (function (){var statearr_25815 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_25815[(6)] = c__19193__auto__);

return statearr_25815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__,stop_route_block,stop_command_block))
);

return c__19193__auto__;
})()], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$running_DASH_chans,running_chans,cljs.core.cst$kw$stop,((function (stop_route_block,stop_command_block,running_chans){
return (function (){
var G__25816_25866 = cljs.core.cst$kw$app;
var G__25817_25867 = cljs.core.cst$kw$in;
var G__25818_25868 = null;
var G__25819_25869 = cljs.core.cst$kw$stop;
var G__25820_25870 = null;
var G__25821_25871 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__25822_25872 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__25816_25866,G__25817_25867,G__25818_25868,G__25819_25869,G__25820_25870,G__25821_25871,G__25822_25872) : reporter.call(null,G__25816_25866,G__25817_25867,G__25818_25868,G__25819_25869,G__25820_25870,G__25821_25871,G__25822_25872));

var controllers__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null));
cljs.core.async.close_BANG_(stop_route_block);

cljs.core.async.close_BANG_(stop_command_block);

var seq__25823_25873 = cljs.core.seq(running_chans);
var chunk__25824_25874 = null;
var count__25825_25875 = (0);
var i__25826_25876 = (0);
while(true){
if((i__25826_25876 < count__25825_25875)){
var running_25877 = chunk__25824_25874.cljs$core$IIndexed$_nth$arity$2(null,i__25826_25876);
cljs.core.async.close_BANG_(running_25877);

var G__25878 = seq__25823_25873;
var G__25879 = chunk__25824_25874;
var G__25880 = count__25825_25875;
var G__25881 = (i__25826_25876 + (1));
seq__25823_25873 = G__25878;
chunk__25824_25874 = G__25879;
count__25825_25875 = G__25880;
i__25826_25876 = G__25881;
continue;
} else {
var temp__5278__auto___25882 = cljs.core.seq(seq__25823_25873);
if(temp__5278__auto___25882){
var seq__25823_25883__$1 = temp__5278__auto___25882;
if(cljs.core.chunked_seq_QMARK_(seq__25823_25883__$1)){
var c__12440__auto___25884 = cljs.core.chunk_first(seq__25823_25883__$1);
var G__25885 = cljs.core.chunk_rest(seq__25823_25883__$1);
var G__25886 = c__12440__auto___25884;
var G__25887 = cljs.core.count(c__12440__auto___25884);
var G__25888 = (0);
seq__25823_25873 = G__25885;
chunk__25824_25874 = G__25886;
count__25825_25875 = G__25887;
i__25826_25876 = G__25888;
continue;
} else {
var running_25889 = cljs.core.first(seq__25823_25883__$1);
cljs.core.async.close_BANG_(running_25889);

var G__25890 = cljs.core.next(seq__25823_25883__$1);
var G__25891 = null;
var G__25892 = (0);
var G__25893 = (0);
seq__25823_25873 = G__25890;
chunk__25824_25874 = G__25891;
count__25825_25875 = G__25892;
i__25826_25876 = G__25893;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(app_db_atom,keechma.controller_manager.apply_stop_controllers(cljs.core.deref(app_db_atom),reporter,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (controllers__$1,stop_route_block,stop_command_block,running_chans){
return (function (acc,p__25827){
var vec__25828 = p__25827;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25828,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25828,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.PersistentArrayMap.EMPTY);
});})(controllers__$1,stop_route_block,stop_command_block,running_chans))
,cljs.core.PersistentArrayMap.EMPTY,controllers__$1)));
});})(stop_route_block,stop_command_block,running_chans))
], null);
});
