// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.controller_manager');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
goog.require('keechma.controller');
keechma.controller_manager.send_command_to = (function keechma$controller_manager$send_command_to(reporter,controller,command_name,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$route_DASH_changed,command_name)){
var G__25456_25474 = cljs.core.cst$kw$app;
var G__25457_25475 = cljs.core.cst$kw$out;
var G__25458_25476 = cljs.core.cst$kw$controller;
var G__25459_25477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(controller),command_name], null);
var G__25460_25478 = args;
var G__25461_25479 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25456_25474,G__25457_25475,G__25458_25476,G__25459_25477,G__25460_25478,G__25461_25479) : reporter.call(null,G__25456_25474,G__25457_25475,G__25458_25476,G__25459_25477,G__25460_25478,G__25461_25479));

var G__25462_25480 = cljs.core.cst$kw$controller;
var G__25463_25481 = cljs.core.cst$kw$in;
var G__25464_25482 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(controller);
var G__25465_25483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lifecycle,command_name], null);
var G__25466_25484 = args;
var G__25467_25485 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25462_25480,G__25463_25481,G__25464_25482,G__25465_25483,G__25466_25484,G__25467_25485) : reporter.call(null,G__25462_25480,G__25463_25481,G__25464_25482,G__25465_25483,G__25466_25484,G__25467_25485));
} else {
var G__25468_25486 = cljs.core.cst$kw$controller;
var G__25469_25487 = cljs.core.cst$kw$in;
var G__25470_25488 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(controller);
var G__25471_25489 = command_name;
var G__25472_25490 = args;
var G__25473_25491 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25468_25486,G__25469_25487,G__25470_25488,G__25471_25489,G__25472_25490,G__25473_25491) : reporter.call(null,G__25468_25486,G__25469_25487,G__25470_25488,G__25471_25489,G__25472_25490,G__25473_25491));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args], null));

return controller;
});
keechma.controller_manager.route_command_to_controller = (function keechma$controller_manager$route_command_to_controller(reporter,controllers,command_name,command_args){
var vec__25495 = command_name;
var controller_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25495,(0),null);
var command_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25495,(1),null);
var controller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controllers,controller_name);
if(cljs.core.truth_(controller)){
return keechma.controller_manager.send_command_to(reporter,controller,command_name__$1,command_args);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trying to send command to a controller that is not running",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$controller,controller_name,cljs.core.cst$kw$command,command_name__$1,cljs.core.cst$kw$args,command_args], null));
}
});
keechma.controller_manager.report_running_controllers = (function keechma$controller_manager$report_running_controllers(app_db_atom){
var running_controllers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (running_controllers){
return (function (acc,p__25502){
var vec__25503 = p__25502;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25503,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(v));
});})(running_controllers))
,cljs.core.PersistentArrayMap.EMPTY,running_controllers);
});
keechma.controller_manager.route_change_execution_plan = (function keechma$controller_manager$route_change_execution_plan(route_params,running_controllers,controllers){
var plan = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$stop,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$start,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$wake,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$route_DASH_changed,cljs.core.PersistentVector.EMPTY], null);
var running_controller_keys_set = cljs.core.set(cljs.core.keys(running_controllers));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (plan,running_controller_keys_set){
return (function (acc,p__25512){
var vec__25513 = p__25512;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25513,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25513,(1),null);
var map__25516 = acc;
var map__25516__$1 = ((((!((map__25516 == null)))?((((map__25516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25516):map__25516);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,cljs.core.cst$kw$stop);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,cljs.core.cst$kw$start);
var wake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,cljs.core.cst$kw$wake);
var route_changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,cljs.core.cst$kw$route_DASH_changed);
var new_params = keechma.controller.params(controller,route_params);
var running_controller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(running_controllers,topic);
var prev_params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(running_controller);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.controller.SerializedController,cljs.core.type(running_controller))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$wake,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wake,topic,new_params));
} else {
if(((prev_params == null)) && ((new_params == null))){
return acc;
} else {
if(((prev_params == null)) && (cljs.core.some_QMARK_(new_params))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start,topic,new_params));
} else {
if((cljs.core.some_QMARK_(prev_params)) && ((new_params == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$stop,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stop,topic,new_params));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_params,prev_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$stop,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stop,topic,new_params),cljs.core.array_seq([cljs.core.cst$kw$start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start,topic,new_params)], 0));
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
var temp__6751__auto__ = cljs.core.first(stop__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var s = temp__6751__auto__;
var vec__25533 = s;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25533,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25533,(1),null);
var G__25536_25548 = cljs.core.cst$kw$app;
var G__25537_25549 = cljs.core.cst$kw$out;
var G__25538_25550 = cljs.core.cst$kw$controller;
var G__25539_25551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$stop], null);
var G__25540_25552 = params;
var G__25541_25553 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25536_25548,G__25537_25549,G__25538_25550,G__25539_25551,G__25540_25552,G__25541_25553) : reporter.call(null,G__25536_25548,G__25537_25549,G__25538_25550,G__25539_25551,G__25540_25552,G__25541_25553));

var controller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(running_controllers,topic);
var _ = (function (){var G__25542 = cljs.core.cst$kw$controller;
var G__25543 = cljs.core.cst$kw$in;
var G__25544 = topic;
var G__25545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lifecycle,cljs.core.cst$kw$stop], null);
var G__25546 = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(controller);
var G__25547 = cljs.core.cst$kw$info;
return (reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25542,G__25543,G__25544,G__25545,G__25546,G__25547) : reporter.call(null,G__25542,G__25543,G__25544,G__25545,G__25546,G__25547));
})();
var new_app_db = keechma.util.dissoc_in(keechma.controller.stop(controller,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(controller),app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
cljs.core.async.close_BANG_(cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller));

var G__25554 = cljs.core.rest(stop__$1);
var G__25555 = new_app_db;
stop__$1 = G__25554;
app_db__$1 = G__25555;
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
var temp__6751__auto__ = cljs.core.first(start_or_wake__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var s = temp__6751__auto__;
var vec__25571 = s;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25571,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25571,(1),null);
var G__25574_25586 = cljs.core.cst$kw$app;
var G__25575_25587 = cljs.core.cst$kw$out;
var G__25576_25588 = cljs.core.cst$kw$controller;
var G__25577_25589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,reporter_action], null);
var G__25578_25590 = params;
var G__25579_25591 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25574_25586,G__25575_25587,G__25576_25588,G__25577_25589,G__25578_25590,G__25579_25591) : reporter.call(null,G__25574_25586,G__25575_25587,G__25576_25588,G__25577_25589,G__25578_25590,G__25579_25591));

var G__25580_25592 = cljs.core.cst$kw$controller;
var G__25581_25593 = cljs.core.cst$kw$in;
var G__25582_25594 = topic;
var G__25583_25595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lifecycle,reporter_action], null);
var G__25584_25596 = params;
var G__25585_25597 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25580_25592,G__25581_25593,G__25582_25594,G__25583_25595,G__25584_25596,G__25585_25597) : reporter.call(null,G__25580_25592,G__25581_25593,G__25582_25594,G__25583_25595,G__25584_25596,G__25585_25597));

var controller = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(controllers,topic),cljs.core.cst$kw$in_DASH_chan,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.array_seq([cljs.core.cst$kw$out_DASH_chan,commands_chan,cljs.core.cst$kw$params,params,cljs.core.cst$kw$route_DASH_params,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(app_db__$1),cljs.core.cst$kw$name,topic,cljs.core.cst$kw$reporter,reporter,cljs.core.cst$kw$running,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(get_running,topic)], 0));
var new_app_db = cljs.core.assoc_in((action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(controller,params,app_db__$1) : action.call(null,controller,params,app_db__$1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null),controller);
var G__25598 = cljs.core.rest(start_or_wake__$1);
var G__25599 = new_app_db;
start_or_wake__$1 = G__25598;
app_db__$1 = G__25599;
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
var seq__25634 = cljs.core.seq(start);
var chunk__25635 = null;
var count__25636 = (0);
var i__25637 = (0);
while(true){
if((i__25637 < count__25636)){
var vec__25638 = chunk__25635.cljs$core$IIndexed$_nth$arity$2(null,i__25637);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25638,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25638,(1),null);
var controller_25668 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
var G__25641_25669 = cljs.core.cst$kw$app;
var G__25642_25670 = cljs.core.cst$kw$out;
var G__25643_25671 = cljs.core.cst$kw$controller;
var G__25644_25672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$handler], null);
var G__25645_25673 = null;
var G__25646_25674 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25641_25669,G__25642_25670,G__25643_25671,G__25644_25672,G__25645_25673,G__25646_25674) : reporter.call(null,G__25641_25669,G__25642_25670,G__25643_25671,G__25644_25672,G__25645_25673,G__25646_25674));

var G__25647_25675 = cljs.core.cst$kw$controller;
var G__25648_25676 = cljs.core.cst$kw$in;
var G__25649_25677 = topic;
var G__25650_25678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lifecycle,cljs.core.cst$kw$handler], null);
var G__25651_25679 = null;
var G__25652_25680 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25647_25675,G__25648_25676,G__25649_25677,G__25650_25678,G__25651_25679,G__25652_25680) : reporter.call(null,G__25647_25675,G__25648_25676,G__25649_25677,G__25650_25678,G__25651_25679,G__25652_25680));

keechma.controller.handler(controller_25668,app_db_atom,cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25668),cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25668));

var G__25681 = seq__25634;
var G__25682 = chunk__25635;
var G__25683 = count__25636;
var G__25684 = (i__25637 + (1));
seq__25634 = G__25681;
chunk__25635 = G__25682;
count__25636 = G__25683;
i__25637 = G__25684;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__25634);
if(temp__6753__auto__){
var seq__25634__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25634__$1)){
var c__10895__auto__ = cljs.core.chunk_first(seq__25634__$1);
var G__25685 = cljs.core.chunk_rest(seq__25634__$1);
var G__25686 = c__10895__auto__;
var G__25687 = cljs.core.count(c__10895__auto__);
var G__25688 = (0);
seq__25634 = G__25685;
chunk__25635 = G__25686;
count__25636 = G__25687;
i__25637 = G__25688;
continue;
} else {
var vec__25653 = cljs.core.first(seq__25634__$1);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25653,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25653,(1),null);
var controller_25689 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
var G__25656_25690 = cljs.core.cst$kw$app;
var G__25657_25691 = cljs.core.cst$kw$out;
var G__25658_25692 = cljs.core.cst$kw$controller;
var G__25659_25693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$handler], null);
var G__25660_25694 = null;
var G__25661_25695 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25656_25690,G__25657_25691,G__25658_25692,G__25659_25693,G__25660_25694,G__25661_25695) : reporter.call(null,G__25656_25690,G__25657_25691,G__25658_25692,G__25659_25693,G__25660_25694,G__25661_25695));

var G__25662_25696 = cljs.core.cst$kw$controller;
var G__25663_25697 = cljs.core.cst$kw$in;
var G__25664_25698 = topic;
var G__25665_25699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lifecycle,cljs.core.cst$kw$handler], null);
var G__25666_25700 = null;
var G__25667_25701 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25662_25696,G__25663_25697,G__25664_25698,G__25665_25699,G__25666_25700,G__25667_25701) : reporter.call(null,G__25662_25696,G__25663_25697,G__25664_25698,G__25665_25699,G__25666_25700,G__25667_25701));

keechma.controller.handler(controller_25689,app_db_atom,cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25689),cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller_25689));

var G__25702 = cljs.core.next(seq__25634__$1);
var G__25703 = null;
var G__25704 = (0);
var G__25705 = (0);
seq__25634 = G__25702;
chunk__25635 = G__25703;
count__25636 = G__25704;
i__25637 = G__25705;
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
var seq__25710 = cljs.core.seq(route_changed);
var chunk__25711 = null;
var count__25712 = (0);
var i__25713 = (0);
while(true){
if((i__25713 < count__25712)){
var topic = chunk__25711.cljs$core$IIndexed$_nth$arity$2(null,i__25713);
var controller_25714 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
keechma.controller_manager.send_command_to(reporter,controller_25714,cljs.core.cst$kw$route_DASH_changed,route_params);

var G__25715 = seq__25710;
var G__25716 = chunk__25711;
var G__25717 = count__25712;
var G__25718 = (i__25713 + (1));
seq__25710 = G__25715;
chunk__25711 = G__25716;
count__25712 = G__25717;
i__25713 = G__25718;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__25710);
if(temp__6753__auto__){
var seq__25710__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25710__$1)){
var c__10895__auto__ = cljs.core.chunk_first(seq__25710__$1);
var G__25719 = cljs.core.chunk_rest(seq__25710__$1);
var G__25720 = c__10895__auto__;
var G__25721 = cljs.core.count(c__10895__auto__);
var G__25722 = (0);
seq__25710 = G__25719;
chunk__25711 = G__25720;
count__25712 = G__25721;
i__25713 = G__25722;
continue;
} else {
var topic = cljs.core.first(seq__25710__$1);
var controller_25723 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
keechma.controller_manager.send_command_to(reporter,controller_25723,cljs.core.cst$kw$route_DASH_changed,route_params);

var G__25724 = cljs.core.next(seq__25710__$1);
var G__25725 = null;
var G__25726 = (0);
var G__25727 = (0);
seq__25710 = G__25724;
chunk__25711 = G__25725;
count__25712 = G__25726;
i__25713 = G__25727;
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
var G__25756_25784 = cljs.core.cst$kw$router;
var G__25757_25785 = cljs.core.cst$kw$out;
var G__25758_25786 = null;
var G__25759_25787 = cljs.core.cst$kw$route_DASH_changed;
var G__25760_25788 = route_params;
var G__25761_25789 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25756_25784,G__25757_25785,G__25758_25786,G__25759_25787,G__25760_25788,G__25761_25789) : reporter.call(null,G__25756_25784,G__25757_25785,G__25758_25786,G__25759_25787,G__25760_25788,G__25761_25789));

var app_db_25790 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var execution_plan_25791 = keechma.controller_manager.route_change_execution_plan(route_params,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db_25790,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null)),controllers);
var map__25762_25792 = execution_plan_25791;
var map__25762_25793__$1 = ((((!((map__25762_25792 == null)))?((((map__25762_25792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25762_25792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25762_25792):map__25762_25792);
var stop_25794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25762_25793__$1,cljs.core.cst$kw$stop);
var start_25795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25762_25793__$1,cljs.core.cst$kw$start);
var wake_25796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25762_25793__$1,cljs.core.cst$kw$wake);
var route_changed_25797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25762_25793__$1,cljs.core.cst$kw$route_DASH_changed);
var get_running_25798 = ((function (app_db_25790,execution_plan_25791,map__25762_25792,map__25762_25793__$1,stop_25794,start_25795,wake_25796,route_changed_25797){
return (function (topic){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
});})(app_db_25790,execution_plan_25791,map__25762_25792,map__25762_25793__$1,stop_25794,start_25795,wake_25796,route_changed_25797))
;
var G__25764_25799 = app_db_atom;
var G__25765_25800 = (function (){var G__25766 = (function (){var G__25772 = keechma.controller_manager.apply_stop_controllers(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_db_25790,cljs.core.cst$kw$route,route_params),reporter,stop_25794);
var G__25773 = reporter;
var G__25774 = controllers;
var G__25775 = commands_chan;
var G__25776 = get_running_25798;
var G__25777 = start_25795;
return (keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6 ? keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6(G__25772,G__25773,G__25774,G__25775,G__25776,G__25777) : keechma.controller_manager.apply_start_controllers.call(null,G__25772,G__25773,G__25774,G__25775,G__25776,G__25777));
})();
var G__25767 = reporter;
var G__25768 = controllers;
var G__25769 = commands_chan;
var G__25770 = get_running_25798;
var G__25771 = wake_25796;
return (keechma.controller_manager.apply_wake_controllers.cljs$core$IFn$_invoke$arity$6 ? keechma.controller_manager.apply_wake_controllers.cljs$core$IFn$_invoke$arity$6(G__25766,G__25767,G__25768,G__25769,G__25770,G__25771) : keechma.controller_manager.apply_wake_controllers.call(null,G__25766,G__25767,G__25768,G__25769,G__25770,G__25771));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25764_25799,G__25765_25800) : cljs.core.reset_BANG_.call(null,G__25764_25799,G__25765_25800));

keechma.controller_manager.call_handler_on_started_controllers(app_db_atom,reporter,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(start_25795,wake_25796));

keechma.controller_manager.send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed_25797,route_params);

var G__25778 = cljs.core.cst$kw$app;
var G__25779 = cljs.core.cst$kw$in;
var G__25780 = null;
var G__25781 = cljs.core.cst$kw$running_DASH_controllers;
var G__25782 = keechma.controller_manager.report_running_controllers(app_db_atom);
var G__25783 = cljs.core.cst$kw$info;
return (reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25778,G__25779,G__25780,G__25781,G__25782,G__25783) : reporter.call(null,G__25778,G__25779,G__25780,G__25781,G__25782,G__25783));
});
keechma.controller_manager.call_ssr_handler_on_started_controllers = (function keechma$controller_manager$call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb){
var wait_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var wait_count = (function (){var wait_count = (0);
var start__$1 = start;
while(true){
var temp__6751__auto__ = cljs.core.first(start__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var s = temp__6751__auto__;
var vec__25850 = s;
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25850,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25850,(1),null);
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
var G__25853_25899 = cljs.core.cst$kw$app;
var G__25854_25900 = cljs.core.cst$kw$out;
var G__25855_25901 = cljs.core.cst$kw$controller;
var G__25856_25902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,cljs.core.cst$kw$ssr_DASH_handler], null);
var G__25857_25903 = null;
var G__25858_25904 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__25853_25899,G__25854_25900,G__25855_25901,G__25856_25902,G__25857_25903,G__25858_25904) : reporter.call(null,G__25853_25899,G__25854_25900,G__25855_25901,G__25856_25902,G__25857_25903,G__25858_25904));

var ret_val = keechma.controller.ssr_handler(controller,app_db_atom,((function (wait_count,start__$1,vec__25850,topic,_,controller,s,temp__6751__auto__,wait_chan){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(wait_chan,true);
});})(wait_count,start__$1,vec__25850,topic,_,controller,s,temp__6751__auto__,wait_chan))
,cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller),cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.controller.not_implemented,ret_val)){
var G__25905 = wait_count;
var G__25906 = cljs.core.rest(start__$1);
wait_count = G__25905;
start__$1 = G__25906;
continue;
} else {
var G__25907 = (wait_count + (1));
var G__25908 = cljs.core.rest(start__$1);
wait_count = G__25907;
start__$1 = G__25908;
continue;
}
} else {
return wait_count;
}
break;
}
})();
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,wait_chan,wait_count){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,wait_chan,wait_count){
return (function (state_25878){
var state_val_25879 = (state_25878[(1)]);
if((state_val_25879 === (7))){
var inst_25866 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
if(cljs.core.truth_(inst_25866)){
var statearr_25880_25909 = state_25878__$1;
(statearr_25880_25909[(1)] = (8));

} else {
var statearr_25881_25910 = state_25878__$1;
(statearr_25881_25910[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25879 === (1))){
var inst_25859 = wait_count;
var state_25878__$1 = (function (){var statearr_25882 = state_25878;
(statearr_25882[(7)] = inst_25859);

return statearr_25882;
})();
var statearr_25883_25911 = state_25878__$1;
(statearr_25883_25911[(2)] = null);

(statearr_25883_25911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25879 === (4))){
var inst_25863 = (ssr_handler_done_cb.cljs$core$IFn$_invoke$arity$0 ? ssr_handler_done_cb.cljs$core$IFn$_invoke$arity$0() : ssr_handler_done_cb.call(null));
var state_25878__$1 = state_25878;
var statearr_25884_25912 = state_25878__$1;
(statearr_25884_25912[(2)] = inst_25863);

(statearr_25884_25912[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25879 === (6))){
var inst_25874 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
var statearr_25885_25913 = state_25878__$1;
(statearr_25885_25913[(2)] = inst_25874);

(statearr_25885_25913[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25879 === (3))){
var inst_25876 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25878__$1,inst_25876);
} else {
if((state_val_25879 === (2))){
var inst_25859 = (state_25878[(7)]);
var inst_25861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),inst_25859);
var state_25878__$1 = state_25878;
if(inst_25861){
var statearr_25886_25914 = state_25878__$1;
(statearr_25886_25914[(1)] = (4));

} else {
var statearr_25887_25915 = state_25878__$1;
(statearr_25887_25915[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25879 === (9))){
var state_25878__$1 = state_25878;
var statearr_25888_25916 = state_25878__$1;
(statearr_25888_25916[(2)] = null);

(statearr_25888_25916[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25879 === (5))){
var state_25878__$1 = state_25878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25878__$1,(7),wait_chan);
} else {
if((state_val_25879 === (10))){
var inst_25872 = (state_25878[(2)]);
var state_25878__$1 = state_25878;
var statearr_25889_25917 = state_25878__$1;
(statearr_25889_25917[(2)] = inst_25872);

(statearr_25889_25917[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25879 === (8))){
var inst_25859 = (state_25878[(7)]);
var inst_25868 = (inst_25859 - (1));
var inst_25859__$1 = inst_25868;
var state_25878__$1 = (function (){var statearr_25890 = state_25878;
(statearr_25890[(7)] = inst_25859__$1);

return statearr_25890;
})();
var statearr_25891_25918 = state_25878__$1;
(statearr_25891_25918[(2)] = null);

(statearr_25891_25918[(1)] = (2));


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
});})(c__17677__auto__,wait_chan,wait_count))
;
return ((function (switch__17551__auto__,c__17677__auto__,wait_chan,wait_count){
return (function() {
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto__ = null;
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto____0 = (function (){
var statearr_25895 = [null,null,null,null,null,null,null,null];
(statearr_25895[(0)] = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto__);

(statearr_25895[(1)] = (1));

return statearr_25895;
});
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto____1 = (function (state_25878){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_25878);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e25896){if((e25896 instanceof Object)){
var ex__17555__auto__ = e25896;
var statearr_25897_25919 = state_25878;
(statearr_25897_25919[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25878);

return cljs.core.cst$kw$recur;
} else {
throw e25896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__25920 = state_25878;
state_25878 = G__25920;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto__ = function(state_25878){
switch(arguments.length){
case 0:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto____0.call(this);
case 1:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto____1.call(this,state_25878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto____0;
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto____1;
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,wait_chan,wait_count))
})();
var state__17679__auto__ = (function (){var statearr_25898 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_25898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_25898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,wait_chan,wait_count))
);

return c__17677__auto__;
});
keechma.controller_manager.start_ssr = (function keechma$controller_manager$start_ssr(routes_chan,commands_chan,app_db_atom,controllers,reporter,done_cb){
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var route_params = cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(app_db);
var execution_plan = keechma.controller_manager.route_change_execution_plan(route_params,cljs.core.PersistentArrayMap.EMPTY,controllers);
var map__25964 = execution_plan;
var map__25964__$1 = ((((!((map__25964 == null)))?((((map__25964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25964):map__25964);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,cljs.core.cst$kw$start);
var get_running = ((function (app_db,route_params,execution_plan,map__25964,map__25964__$1,start){
return (function (topic){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers,topic], null));
});})(app_db,route_params,execution_plan,map__25964,map__25964__$1,start))
;
var ssr_handler_done_cb = ((function (app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running){
return (function (){
cljs.core.async.close_BANG_(commands_chan);

return (done_cb.cljs$core$IFn$_invoke$arity$0 ? done_cb.cljs$core$IFn$_invoke$arity$0() : done_cb.call(null));
});})(app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running))
;
var G__25966_26007 = app_db_atom;
var G__25967_26008 = (keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6 ? keechma.controller_manager.apply_start_controllers.cljs$core$IFn$_invoke$arity$6(app_db,reporter,controllers,commands_chan,get_running,start) : keechma.controller_manager.apply_start_controllers.call(null,app_db,reporter,controllers,commands_chan,get_running,start));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25966_26007,G__25967_26008) : cljs.core.reset_BANG_.call(null,G__25966_26007,G__25967_26008));

var c__17677__auto___26009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___26009,app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running,ssr_handler_done_cb){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___26009,app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running,ssr_handler_done_cb){
return (function (state_25990){
var state_val_25991 = (state_25990[(1)]);
if((state_val_25991 === (1))){
var state_25990__$1 = state_25990;
var statearr_25992_26010 = state_25990__$1;
(statearr_25992_26010[(2)] = null);

(statearr_25992_26010[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25991 === (2))){
var state_25990__$1 = state_25990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25990__$1,(4),commands_chan);
} else {
if((state_val_25991 === (3))){
var inst_25988 = (state_25990[(2)]);
var state_25990__$1 = state_25990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25990__$1,inst_25988);
} else {
if((state_val_25991 === (4))){
var inst_25970 = (state_25990[(7)]);
var inst_25970__$1 = (state_25990[(2)]);
var state_25990__$1 = (function (){var statearr_25993 = state_25990;
(statearr_25993[(7)] = inst_25970__$1);

return statearr_25993;
})();
if(cljs.core.truth_(inst_25970__$1)){
var statearr_25994_26011 = state_25990__$1;
(statearr_25994_26011[(1)] = (5));

} else {
var statearr_25995_26012 = state_25990__$1;
(statearr_25995_26012[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25991 === (5))){
var inst_25970 = (state_25990[(7)]);
var inst_25975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25970,(0),null);
var inst_25976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25970,(1),null);
var inst_25977 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_25978 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25979 = [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers];
var inst_25980 = (new cljs.core.PersistentVector(null,2,(5),inst_25978,inst_25979,null));
var inst_25981 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_25977,inst_25980);
var inst_25982 = keechma.controller_manager.route_command_to_controller(reporter,inst_25981,inst_25975,inst_25976);
var state_25990__$1 = (function (){var statearr_25996 = state_25990;
(statearr_25996[(8)] = inst_25982);

return statearr_25996;
})();
var statearr_25997_26013 = state_25990__$1;
(statearr_25997_26013[(2)] = null);

(statearr_25997_26013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25991 === (6))){
var state_25990__$1 = state_25990;
var statearr_25998_26014 = state_25990__$1;
(statearr_25998_26014[(2)] = null);

(statearr_25998_26014[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25991 === (7))){
var inst_25986 = (state_25990[(2)]);
var state_25990__$1 = state_25990;
var statearr_25999_26015 = state_25990__$1;
(statearr_25999_26015[(2)] = inst_25986);

(statearr_25999_26015[(1)] = (3));


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
});})(c__17677__auto___26009,app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running,ssr_handler_done_cb))
;
return ((function (switch__17551__auto__,c__17677__auto___26009,app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running,ssr_handler_done_cb){
return (function() {
var keechma$controller_manager$start_ssr_$_state_machine__17552__auto__ = null;
var keechma$controller_manager$start_ssr_$_state_machine__17552__auto____0 = (function (){
var statearr_26003 = [null,null,null,null,null,null,null,null,null];
(statearr_26003[(0)] = keechma$controller_manager$start_ssr_$_state_machine__17552__auto__);

(statearr_26003[(1)] = (1));

return statearr_26003;
});
var keechma$controller_manager$start_ssr_$_state_machine__17552__auto____1 = (function (state_25990){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_25990);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e26004){if((e26004 instanceof Object)){
var ex__17555__auto__ = e26004;
var statearr_26005_26016 = state_25990;
(statearr_26005_26016[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25990);

return cljs.core.cst$kw$recur;
} else {
throw e26004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__26017 = state_25990;
state_25990 = G__26017;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$controller_manager$start_ssr_$_state_machine__17552__auto__ = function(state_25990){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_ssr_$_state_machine__17552__auto____0.call(this);
case 1:
return keechma$controller_manager$start_ssr_$_state_machine__17552__auto____1.call(this,state_25990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_ssr_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_ssr_$_state_machine__17552__auto____0;
keechma$controller_manager$start_ssr_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_ssr_$_state_machine__17552__auto____1;
return keechma$controller_manager$start_ssr_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___26009,app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running,ssr_handler_done_cb))
})();
var state__17679__auto__ = (function (){var statearr_26006 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_26006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___26009);

return statearr_26006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___26009,app_db,route_params,execution_plan,map__25964,map__25964__$1,start,get_running,ssr_handler_done_cb))
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
var G__26160_26302 = cljs.core.cst$kw$app;
var G__26161_26303 = cljs.core.cst$kw$in;
var G__26162_26304 = null;
var G__26163_26305 = cljs.core.cst$kw$start;
var G__26164_26306 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__26160_26302,G__26161_26303,G__26162_26304,G__26163_26305){
return (function (acc,p__26166){
var vec__26167 = p__26166;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26167,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k);
});})(G__26160_26302,G__26161_26303,G__26162_26304,G__26163_26305))
,cljs.core.PersistentVector.EMPTY,controllers);
var G__26165_26307 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__26160_26302,G__26161_26303,G__26162_26304,G__26163_26305,G__26164_26306,G__26165_26307) : reporter.call(null,G__26160_26302,G__26161_26303,G__26162_26304,G__26163_26305,G__26164_26306,G__26165_26307));

keechma.controller_manager.apply_route_change(reporter,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom))),app_db_atom,commands_chan,controllers);

var stop_route_block = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var stop_command_block = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var running_chans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,stop_route_block,stop_command_block){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,stop_route_block,stop_command_block){
return (function (state_26202){
var state_val_26203 = (state_26202[(1)]);
if((state_val_26203 === (7))){
var inst_26185 = (state_26202[(2)]);
var state_26202__$1 = state_26202;
if(cljs.core.truth_(inst_26185)){
var statearr_26204_26308 = state_26202__$1;
(statearr_26204_26308[(1)] = (8));

} else {
var statearr_26205_26309 = state_26202__$1;
(statearr_26205_26309[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (1))){
var state_26202__$1 = state_26202;
var statearr_26206_26310 = state_26202__$1;
(statearr_26206_26310[(2)] = null);

(statearr_26206_26310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (4))){
var inst_26181 = (state_26202[(7)]);
var inst_26178 = (state_26202[(2)]);
var inst_26179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26178,(0),null);
var inst_26180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26178,(1),null);
var inst_26181__$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_26180,stop_route_block);
var state_26202__$1 = (function (){var statearr_26207 = state_26202;
(statearr_26207[(8)] = inst_26179);

(statearr_26207[(7)] = inst_26181__$1);

return statearr_26207;
})();
if(inst_26181__$1){
var statearr_26208_26311 = state_26202__$1;
(statearr_26208_26311[(1)] = (5));

} else {
var statearr_26209_26312 = state_26202__$1;
(statearr_26209_26312[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (13))){
var inst_26194 = (state_26202[(2)]);
var state_26202__$1 = (function (){var statearr_26210 = state_26202;
(statearr_26210[(9)] = inst_26194);

return statearr_26210;
})();
var statearr_26211_26313 = state_26202__$1;
(statearr_26211_26313[(2)] = null);

(statearr_26211_26313[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (6))){
var inst_26181 = (state_26202[(7)]);
var state_26202__$1 = state_26202;
var statearr_26212_26314 = state_26202__$1;
(statearr_26212_26314[(2)] = inst_26181);

(statearr_26212_26314[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (3))){
var inst_26200 = (state_26202[(2)]);
var state_26202__$1 = state_26202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26202__$1,inst_26200);
} else {
if((state_val_26203 === (12))){
var state_26202__$1 = state_26202;
var statearr_26213_26315 = state_26202__$1;
(statearr_26213_26315[(2)] = null);

(statearr_26213_26315[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (2))){
var inst_26174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26175 = [stop_route_block,route_chan];
var inst_26176 = (new cljs.core.PersistentVector(null,2,(5),inst_26174,inst_26175,null));
var state_26202__$1 = state_26202;
return cljs.core.async.ioc_alts_BANG_(state_26202__$1,(4),inst_26176);
} else {
if((state_val_26203 === (11))){
var inst_26179 = (state_26202[(8)]);
var inst_26191 = keechma.controller_manager.apply_route_change(reporter,inst_26179,app_db_atom,commands_chan,controllers);
var state_26202__$1 = state_26202;
var statearr_26214_26316 = state_26202__$1;
(statearr_26214_26316[(2)] = inst_26191);

(statearr_26214_26316[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (9))){
var state_26202__$1 = state_26202;
var statearr_26215_26317 = state_26202__$1;
(statearr_26215_26317[(2)] = null);

(statearr_26215_26317[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (5))){
var inst_26179 = (state_26202[(8)]);
var state_26202__$1 = state_26202;
var statearr_26216_26318 = state_26202__$1;
(statearr_26216_26318[(2)] = inst_26179);

(statearr_26216_26318[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (10))){
var inst_26198 = (state_26202[(2)]);
var state_26202__$1 = state_26202;
var statearr_26217_26319 = state_26202__$1;
(statearr_26217_26319[(2)] = inst_26198);

(statearr_26217_26319[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26203 === (8))){
var inst_26179 = (state_26202[(8)]);
var inst_26187 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_26188 = cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(inst_26187);
var inst_26189 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_26179,inst_26188);
var state_26202__$1 = state_26202;
if(inst_26189){
var statearr_26218_26320 = state_26202__$1;
(statearr_26218_26320[(1)] = (11));

} else {
var statearr_26219_26321 = state_26202__$1;
(statearr_26219_26321[(1)] = (12));

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
});})(c__17677__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__17551__auto__,c__17677__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__17552__auto__ = null;
var keechma$controller_manager$start_$_state_machine__17552__auto____0 = (function (){
var statearr_26223 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26223[(0)] = keechma$controller_manager$start_$_state_machine__17552__auto__);

(statearr_26223[(1)] = (1));

return statearr_26223;
});
var keechma$controller_manager$start_$_state_machine__17552__auto____1 = (function (state_26202){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_26202);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e26224){if((e26224 instanceof Object)){
var ex__17555__auto__ = e26224;
var statearr_26225_26322 = state_26202;
(statearr_26225_26322[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26202);

return cljs.core.cst$kw$recur;
} else {
throw e26224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__26323 = state_26202;
state_26202 = G__26323;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__17552__auto__ = function(state_26202){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__17552__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__17552__auto____1.call(this,state_26202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__17552__auto____0;
keechma$controller_manager$start_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__17552__auto____1;
return keechma$controller_manager$start_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,stop_route_block,stop_command_block))
})();
var state__17679__auto__ = (function (){var statearr_26226 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_26226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_26226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,stop_route_block,stop_command_block))
);

return c__17677__auto__;
})(),(function (){var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,stop_route_block,stop_command_block){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,stop_route_block,stop_command_block){
return (function (state_26264){
var state_val_26265 = (state_26264[(1)]);
if((state_val_26265 === (7))){
var inst_26260 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
var statearr_26266_26324 = state_26264__$1;
(statearr_26266_26324[(2)] = inst_26260);

(statearr_26266_26324[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26265 === (1))){
var state_26264__$1 = state_26264;
var statearr_26267_26325 = state_26264__$1;
(statearr_26267_26325[(2)] = null);

(statearr_26267_26325[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26265 === (4))){
var inst_26235 = (state_26264[(2)]);
var inst_26236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26235,(0),null);
var inst_26237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26235,(1),null);
var inst_26238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26237,stop_command_block);
var state_26264__$1 = (function (){var statearr_26268 = state_26264;
(statearr_26268[(7)] = inst_26236);

return statearr_26268;
})();
if(inst_26238){
var statearr_26269_26326 = state_26264__$1;
(statearr_26269_26326[(1)] = (5));

} else {
var statearr_26270_26327 = state_26264__$1;
(statearr_26270_26327[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26265 === (6))){
var inst_26236 = (state_26264[(7)]);
var inst_26244 = (state_26264[(8)]);
var inst_26244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26236,(0),null);
var inst_26245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26236,(1),null);
var inst_26246 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_26247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26248 = [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers];
var inst_26249 = (new cljs.core.PersistentVector(null,2,(5),inst_26247,inst_26248,null));
var inst_26250 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26246,inst_26249);
var inst_26251 = (inst_26244__$1 == null);
var inst_26252 = cljs.core.not(inst_26251);
var state_26264__$1 = (function (){var statearr_26271 = state_26264;
(statearr_26271[(9)] = inst_26250);

(statearr_26271[(10)] = inst_26245);

(statearr_26271[(8)] = inst_26244__$1);

return statearr_26271;
})();
if(inst_26252){
var statearr_26272_26328 = state_26264__$1;
(statearr_26272_26328[(1)] = (8));

} else {
var statearr_26273_26329 = state_26264__$1;
(statearr_26273_26329[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26265 === (3))){
var inst_26262 = (state_26264[(2)]);
var state_26264__$1 = state_26264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26264__$1,inst_26262);
} else {
if((state_val_26265 === (2))){
var inst_26231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26232 = [stop_command_block,commands_chan];
var inst_26233 = (new cljs.core.PersistentVector(null,2,(5),inst_26231,inst_26232,null));
var state_26264__$1 = state_26264;
return cljs.core.async.ioc_alts_BANG_(state_26264__$1,(4),inst_26233);
} else {
if((state_val_26265 === (9))){
var state_26264__$1 = state_26264;
var statearr_26274_26330 = state_26264__$1;
(statearr_26274_26330[(2)] = null);

(statearr_26274_26330[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26265 === (5))){
var state_26264__$1 = state_26264;
var statearr_26275_26331 = state_26264__$1;
(statearr_26275_26331[(2)] = null);

(statearr_26275_26331[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26265 === (10))){
var inst_26257 = (state_26264[(2)]);
var state_26264__$1 = (function (){var statearr_26276 = state_26264;
(statearr_26276[(11)] = inst_26257);

return statearr_26276;
})();
var statearr_26277_26332 = state_26264__$1;
(statearr_26277_26332[(2)] = null);

(statearr_26277_26332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26265 === (8))){
var inst_26250 = (state_26264[(9)]);
var inst_26245 = (state_26264[(10)]);
var inst_26244 = (state_26264[(8)]);
var inst_26254 = keechma.controller_manager.route_command_to_controller(reporter,inst_26250,inst_26244,inst_26245);
var state_26264__$1 = state_26264;
var statearr_26278_26333 = state_26264__$1;
(statearr_26278_26333[(2)] = inst_26254);

(statearr_26278_26333[(1)] = (10));


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
});})(c__17677__auto__,stop_route_block,stop_command_block))
;
return ((function (switch__17551__auto__,c__17677__auto__,stop_route_block,stop_command_block){
return (function() {
var keechma$controller_manager$start_$_state_machine__17552__auto__ = null;
var keechma$controller_manager$start_$_state_machine__17552__auto____0 = (function (){
var statearr_26282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26282[(0)] = keechma$controller_manager$start_$_state_machine__17552__auto__);

(statearr_26282[(1)] = (1));

return statearr_26282;
});
var keechma$controller_manager$start_$_state_machine__17552__auto____1 = (function (state_26264){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_26264);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e26283){if((e26283 instanceof Object)){
var ex__17555__auto__ = e26283;
var statearr_26284_26334 = state_26264;
(statearr_26284_26334[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26264);

return cljs.core.cst$kw$recur;
} else {
throw e26283;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__26335 = state_26264;
state_26264 = G__26335;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__17552__auto__ = function(state_26264){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__17552__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__17552__auto____1.call(this,state_26264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__17552__auto____0;
keechma$controller_manager$start_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__17552__auto____1;
return keechma$controller_manager$start_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,stop_route_block,stop_command_block))
})();
var state__17679__auto__ = (function (){var statearr_26285 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_26285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_26285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,stop_route_block,stop_command_block))
);

return c__17677__auto__;
})()], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$running_DASH_chans,running_chans,cljs.core.cst$kw$stop,((function (stop_route_block,stop_command_block,running_chans){
return (function (){
var G__26286_26336 = cljs.core.cst$kw$app;
var G__26287_26337 = cljs.core.cst$kw$in;
var G__26288_26338 = null;
var G__26289_26339 = cljs.core.cst$kw$stop;
var G__26290_26340 = null;
var G__26291_26341 = cljs.core.cst$kw$info;
(reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__26286_26336,G__26287_26337,G__26288_26338,G__26289_26339,G__26290_26340,G__26291_26341) : reporter.call(null,G__26286_26336,G__26287_26337,G__26288_26338,G__26289_26339,G__26290_26340,G__26291_26341));

var controllers__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null));
cljs.core.async.close_BANG_(stop_route_block);

cljs.core.async.close_BANG_(stop_command_block);

var seq__26292_26342 = cljs.core.seq(running_chans);
var chunk__26293_26343 = null;
var count__26294_26344 = (0);
var i__26295_26345 = (0);
while(true){
if((i__26295_26345 < count__26294_26344)){
var running_26346 = chunk__26293_26343.cljs$core$IIndexed$_nth$arity$2(null,i__26295_26345);
cljs.core.async.close_BANG_(running_26346);

var G__26347 = seq__26292_26342;
var G__26348 = chunk__26293_26343;
var G__26349 = count__26294_26344;
var G__26350 = (i__26295_26345 + (1));
seq__26292_26342 = G__26347;
chunk__26293_26343 = G__26348;
count__26294_26344 = G__26349;
i__26295_26345 = G__26350;
continue;
} else {
var temp__6753__auto___26351 = cljs.core.seq(seq__26292_26342);
if(temp__6753__auto___26351){
var seq__26292_26352__$1 = temp__6753__auto___26351;
if(cljs.core.chunked_seq_QMARK_(seq__26292_26352__$1)){
var c__10895__auto___26353 = cljs.core.chunk_first(seq__26292_26352__$1);
var G__26354 = cljs.core.chunk_rest(seq__26292_26352__$1);
var G__26355 = c__10895__auto___26353;
var G__26356 = cljs.core.count(c__10895__auto___26353);
var G__26357 = (0);
seq__26292_26342 = G__26354;
chunk__26293_26343 = G__26355;
count__26294_26344 = G__26356;
i__26295_26345 = G__26357;
continue;
} else {
var running_26358 = cljs.core.first(seq__26292_26352__$1);
cljs.core.async.close_BANG_(running_26358);

var G__26359 = cljs.core.next(seq__26292_26352__$1);
var G__26360 = null;
var G__26361 = (0);
var G__26362 = (0);
seq__26292_26342 = G__26359;
chunk__26293_26343 = G__26360;
count__26294_26344 = G__26361;
i__26295_26345 = G__26362;
continue;
}
} else {
}
}
break;
}

var G__26296 = app_db_atom;
var G__26297 = keechma.controller_manager.apply_stop_controllers((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom)),reporter,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__26296,controllers__$1,stop_route_block,stop_command_block,running_chans){
return (function (acc,p__26298){
var vec__26299 = p__26298;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.PersistentArrayMap.EMPTY);
});})(G__26296,controllers__$1,stop_route_block,stop_command_block,running_chans))
,cljs.core.PersistentArrayMap.EMPTY,controllers__$1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26296,G__26297) : cljs.core.reset_BANG_.call(null,G__26296,G__26297));
});})(stop_route_block,stop_command_block,running_chans))
], null);
});
