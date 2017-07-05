// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.controller');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.controller.not_implemented = cljs.core.cst$kw$keechma$controller_SLASH_not_DASH_implemented;

/**
 * Controllers in Keechma are the place where you put the code
 *   that has side-effects. They are managed by the [[keechma.controller-manager]]
 *   which will start them or stop them based on the current route.
 * 
 *   Each controller implements the `params` function. `params` function returns
 *   a subset of the route params that are the controller is interested in.
 * 
 *   For instance let's say that you have a `UserController` which should be
 *   running only when the user is on the route `/users`:
 * 
 *   ```clojure
 *   ;; let's say that your routes are defined like this:
 *   
 *   (def routes [":page"]) ;; Routes are managed by the app-state library.
 * 
 *   ;; When user goes to the url `/users` the params function would receive
 *   ;; something that looks like this:
 * 
 *   {:data {:page "users"}}
 * 
 *   ;; `params` function returns `true` only when user is on the `:page` "users"
 *   (defrecord UserController []
 *  IController
 *  (params [_ route-params]
 *    (when (= "users" (get-in route-params [:data :page]))
 *     true)))
 *   ```
 * 
 *   When `params` function returns a non `nil` value the controller will be started:
 * 
 *   1. Controller's `start` function will be synchronously called with the current
 *   application state. This function returns a new version of the state if needed.
 *   (if the `start` function is not doing any changes to the app-state it must return
 *   the received version)
 *   2. Controller's `handler` function will be called - this function will receive
 *   application state atom, channel through which the controller receives the commands
 *   (`in-chan`) and the channel through which the controller can send commends to
 *   other controllers (`out-chan`).
 * 
 *   When `params` function returns a `nil` value that instance of the controller will
 *   be stopped:
 * 
 *   1. Controller's `stop` function will be synchronously called with the current
 *   application state. This function returns a new version of the state if needed - 
 *   use this function to clean up any data loaded by the controller (if the `stop` 
 *   function is not doing any changes to the app-state it must return the received
 *   version).
 *   2. Controller's `in-chan` (through which it can receive commands) will be closed.
 * 
 *   Controller's `start` and `stop` functions can asynchronuously send commends to the
 *   controller. Calling `(execute controller-instance :command)` will put that command
 *   on the controller's `in-chan`. Controller can react to these commands from the 
 *   `handler` function. 
 * 
 *   
 * @interface
 */
keechma.controller.IController = function(){};

/**
 * Receives the `route-params` and returns either the `params` for the controller or `nil`
 */
keechma.controller.params = (function keechma$controller$params(this$,route_params){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$params$arity$2 == null)))){
return this$.keechma$controller$IController$params$arity$2(this$,route_params);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.params[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,route_params) : m__10706__auto__.call(null,this$,route_params));
} else {
var m__10706__auto____$1 = (keechma.controller.params["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,route_params) : m__10706__auto____$1.call(null,this$,route_params));
} else {
throw cljs.core.missing_protocol("IController.params",this$);
}
}
}
});

keechma.controller.report = (function keechma$controller$report(var_args){
var args23321 = [];
var len__11171__auto___23333 = arguments.length;
var i__11172__auto___23334 = (0);
while(true){
if((i__11172__auto___23334 < len__11171__auto___23333)){
args23321.push((arguments[i__11172__auto___23334]));

var G__23335 = (i__11172__auto___23334 + (1));
i__11172__auto___23334 = G__23335;
continue;
} else {
}
break;
}

var G__23323 = args23321.length;
switch (G__23323) {
case 4:
return keechma.controller.report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.controller.report.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23321.length)].join('')));

}
});

keechma.controller.report.cljs$core$IFn$_invoke$arity$4 = (function (this$,direction,name,payload){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$report$arity$4 == null)))){
return this$.keechma$controller$IController$report$arity$4(this$,direction,name,payload);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.report[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,direction,name,payload) : m__10706__auto__.call(null,this$,direction,name,payload));
} else {
var m__10706__auto____$1 = (keechma.controller.report["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,direction,name,payload) : m__10706__auto____$1.call(null,this$,direction,name,payload));
} else {
throw cljs.core.missing_protocol("IController.report",this$);
}
}
}
});

keechma.controller.report.cljs$core$IFn$_invoke$arity$5 = (function (this$,direction,name,payload,severity){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$report$arity$5 == null)))){
return this$.keechma$controller$IController$report$arity$5(this$,direction,name,payload,severity);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.report[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$5(this$,direction,name,payload,severity) : m__10706__auto__.call(null,this$,direction,name,payload,severity));
} else {
var m__10706__auto____$1 = (keechma.controller.report["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,direction,name,payload,severity) : m__10706__auto____$1.call(null,this$,direction,name,payload,severity));
} else {
throw cljs.core.missing_protocol("IController.report",this$);
}
}
}
});

keechma.controller.report.cljs$lang$maxFixedArity = 5;


/**
 * Return the context passed to application.
 */
keechma.controller.context = (function keechma$controller$context(var_args){
var args23324 = [];
var len__11171__auto___23337 = arguments.length;
var i__11172__auto___23338 = (0);
while(true){
if((i__11172__auto___23338 < len__11171__auto___23337)){
args23324.push((arguments[i__11172__auto___23338]));

var G__23339 = (i__11172__auto___23338 + (1));
i__11172__auto___23338 = G__23339;
continue;
} else {
}
break;
}

var G__23326 = args23324.length;
switch (G__23326) {
case 1:
return keechma.controller.context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.controller.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23324.length)].join('')));

}
});

keechma.controller.context.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$context$arity$1 == null)))){
return this$.keechma$controller$IController$context$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.context[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (keechma.controller.context["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IController.context",this$);
}
}
}
});

keechma.controller.context.cljs$core$IFn$_invoke$arity$2 = (function (this$,key){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$context$arity$2 == null)))){
return this$.keechma$controller$IController$context$arity$2(this$,key);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.context[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__10706__auto__.call(null,this$,key));
} else {
var m__10706__auto____$1 = (keechma.controller.context["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key) : m__10706__auto____$1.call(null,this$,key));
} else {
throw cljs.core.missing_protocol("IController.context",this$);
}
}
}
});

keechma.controller.context.cljs$lang$maxFixedArity = 2;


/**
 * Called when the controller is started. Receives the controller `params` (returned by the
 *  `params` function) and the application state. It must return the application state.
 */
keechma.controller.start = (function keechma$controller$start(this$,params,app_db){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$start$arity$3 == null)))){
return this$.keechma$controller$IController$start$arity$3(this$,params,app_db);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.start[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,app_db) : m__10706__auto__.call(null,this$,params,app_db));
} else {
var m__10706__auto____$1 = (keechma.controller.start["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,params,app_db) : m__10706__auto____$1.call(null,this$,params,app_db));
} else {
throw cljs.core.missing_protocol("IController.start",this$);
}
}
}
});

/**
 * Called when the controller is started from the saved state stored on the server. It will be
 *   called instead of the `start` function if the `ssr-handler` function is implemented. This
 *   allows you to manually revive the serialized data if needed. Usually this function is not
 *   needed, but if you for instance start the inner application from the controller, you can
 *   use this function to wake the inner app.
 */
keechma.controller.wake = (function keechma$controller$wake(this$,params,app_db){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$wake$arity$3 == null)))){
return this$.keechma$controller$IController$wake$arity$3(this$,params,app_db);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.wake[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,app_db) : m__10706__auto__.call(null,this$,params,app_db));
} else {
var m__10706__auto____$1 = (keechma.controller.wake["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,params,app_db) : m__10706__auto____$1.call(null,this$,params,app_db));
} else {
throw cljs.core.missing_protocol("IController.wake",this$);
}
}
}
});

/**
 * Called when the controller is stopped. Receives the controller `params` (returned by the
 *  `params` function) and the application state. It must return the application state.
 */
keechma.controller.stop = (function keechma$controller$stop(this$,params,app_db){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$stop$arity$3 == null)))){
return this$.keechma$controller$IController$stop$arity$3(this$,params,app_db);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.stop[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,app_db) : m__10706__auto__.call(null,this$,params,app_db));
} else {
var m__10706__auto____$1 = (keechma.controller.stop["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,params,app_db) : m__10706__auto____$1.call(null,this$,params,app_db));
} else {
throw cljs.core.missing_protocol("IController.stop",this$);
}
}
}
});

/**
 * Puts the command on the controller's `in-chan` which is passed as an argument to the 
 *  `handler` function. Can be called from the `start` and `stop` functions.
 */
keechma.controller.execute = (function keechma$controller$execute(var_args){
var args23327 = [];
var len__11171__auto___23341 = arguments.length;
var i__11172__auto___23342 = (0);
while(true){
if((i__11172__auto___23342 < len__11171__auto___23341)){
args23327.push((arguments[i__11172__auto___23342]));

var G__23343 = (i__11172__auto___23342 + (1));
i__11172__auto___23342 = G__23343;
continue;
} else {
}
break;
}

var G__23329 = args23327.length;
switch (G__23329) {
case 2:
return keechma.controller.execute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.controller.execute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23327.length)].join('')));

}
});

keechma.controller.execute.cljs$core$IFn$_invoke$arity$2 = (function (this$,command_name){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$execute$arity$2 == null)))){
return this$.keechma$controller$IController$execute$arity$2(this$,command_name);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.execute[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,command_name) : m__10706__auto__.call(null,this$,command_name));
} else {
var m__10706__auto____$1 = (keechma.controller.execute["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,command_name) : m__10706__auto____$1.call(null,this$,command_name));
} else {
throw cljs.core.missing_protocol("IController.execute",this$);
}
}
}
});

keechma.controller.execute.cljs$core$IFn$_invoke$arity$3 = (function (this$,command_name,args){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$execute$arity$3 == null)))){
return this$.keechma$controller$IController$execute$arity$3(this$,command_name,args);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.execute[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,command_name,args) : m__10706__auto__.call(null,this$,command_name,args));
} else {
var m__10706__auto____$1 = (keechma.controller.execute["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,command_name,args) : m__10706__auto____$1.call(null,this$,command_name,args));
} else {
throw cljs.core.missing_protocol("IController.execute",this$);
}
}
}
});

keechma.controller.execute.cljs$lang$maxFixedArity = 3;


/**
 * Called after the `start` function. You can listen to the commands on the `in-chan` 
 *  inside the `go` block. This is the function in which you implement anything that reacts
 *  to the user commands (coming from the UI).
 */
keechma.controller.handler = (function keechma$controller$handler(this$,app_db_atom,in_chan,out_chan){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$handler$arity$4 == null)))){
return this$.keechma$controller$IController$handler$arity$4(this$,app_db_atom,in_chan,out_chan);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.handler[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,app_db_atom,in_chan,out_chan) : m__10706__auto__.call(null,this$,app_db_atom,in_chan,out_chan));
} else {
var m__10706__auto____$1 = (keechma.controller.handler["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,app_db_atom,in_chan,out_chan) : m__10706__auto____$1.call(null,this$,app_db_atom,in_chan,out_chan));
} else {
throw cljs.core.missing_protocol("IController.handler",this$);
}
}
}
});

/**
 * Called in after the `start` (instead of the `handler` function) function in the server
 *   side context. This function should call the `done` callback when it has completed the 
 *   server side data loading. Returning `::not-implemented` which is a default behavior will
 *   mark the controller as non server side.
 */
keechma.controller.ssr_handler = (function keechma$controller$ssr_handler(this$,app_db_atom,done,in_chan,out_chan){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$ssr_handler$arity$5 == null)))){
return this$.keechma$controller$IController$ssr_handler$arity$5(this$,app_db_atom,done,in_chan,out_chan);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.ssr_handler[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$5(this$,app_db_atom,done,in_chan,out_chan) : m__10706__auto__.call(null,this$,app_db_atom,done,in_chan,out_chan));
} else {
var m__10706__auto____$1 = (keechma.controller.ssr_handler["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,app_db_atom,done,in_chan,out_chan) : m__10706__auto____$1.call(null,this$,app_db_atom,done,in_chan,out_chan));
} else {
throw cljs.core.missing_protocol("IController.ssr-handler",this$);
}
}
}
});

/**
 * Sends a command to another controller
 */
keechma.controller.send_command = (function keechma$controller$send_command(var_args){
var args23330 = [];
var len__11171__auto___23345 = arguments.length;
var i__11172__auto___23346 = (0);
while(true){
if((i__11172__auto___23346 < len__11171__auto___23345)){
args23330.push((arguments[i__11172__auto___23346]));

var G__23347 = (i__11172__auto___23346 + (1));
i__11172__auto___23346 = G__23347;
continue;
} else {
}
break;
}

var G__23332 = args23330.length;
switch (G__23332) {
case 2:
return keechma.controller.send_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23330.length)].join('')));

}
});

keechma.controller.send_command.cljs$core$IFn$_invoke$arity$2 = (function (this$,command_name){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$send_command$arity$2 == null)))){
return this$.keechma$controller$IController$send_command$arity$2(this$,command_name);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.send_command[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,command_name) : m__10706__auto__.call(null,this$,command_name));
} else {
var m__10706__auto____$1 = (keechma.controller.send_command["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,command_name) : m__10706__auto____$1.call(null,this$,command_name));
} else {
throw cljs.core.missing_protocol("IController.send-command",this$);
}
}
}
});

keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3 = (function (this$,command_name,args){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$send_command$arity$3 == null)))){
return this$.keechma$controller$IController$send_command$arity$3(this$,command_name,args);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.send_command[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,command_name,args) : m__10706__auto__.call(null,this$,command_name,args));
} else {
var m__10706__auto____$1 = (keechma.controller.send_command["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,command_name,args) : m__10706__auto____$1.call(null,this$,command_name,args));
} else {
throw cljs.core.missing_protocol("IController.send-command",this$);
}
}
}
});

keechma.controller.send_command.cljs$lang$maxFixedArity = 3;


/**
 * Returns `true` if this controller is still running. You can use this if you have some
 *  kind of async action, and you want to make sure that the controller is still running 
 *  when you receive the results.
 */
keechma.controller.is_running_QMARK_ = (function keechma$controller$is_running_QMARK_(this$){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$is_running_QMARK_$arity$1 == null)))){
return this$.keechma$controller$IController$is_running_QMARK_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.is_running_QMARK_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (keechma.controller.is_running_QMARK_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IController.is-running?",this$);
}
}
}
});

/**
 * Redirects the page to the URL based on the params.
 */
keechma.controller.redirect = (function keechma$controller$redirect(this$,params){
if((!((this$ == null))) && (!((this$.keechma$controller$IController$redirect$arity$2 == null)))){
return this$.keechma$controller$IController$redirect$arity$2(this$,params);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.controller.redirect[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto__.call(null,this$,params));
} else {
var m__10706__auto____$1 = (keechma.controller.redirect["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IController.redirect",this$);
}
}
}
});

(keechma.controller.IController["_"] = true);

(keechma.controller.params["_"] = (function (_,route_params){
return route_params;
}));

(keechma.controller.start["_"] = (function (_,params,app_db){
return app_db;
}));

(keechma.controller.wake["_"] = (function (_,params,app_db){
return app_db;
}));

(keechma.controller.stop["_"] = (function (_,params,app_db){
return app_db;
}));

(keechma.controller.handler["_"] = (function (_,___$1,___$2,___$3){
return null;
}));

(keechma.controller.ssr_handler["_"] = (function (_,___$1,___$2,___$3,___$4){
return keechma.controller.not_implemented;
}));

(keechma.controller.context["_"] = (function() {
var G__23355 = null;
var G__23355__1 = (function (this$){
return cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(this$);
});
var G__23355__2 = (function (this$,key){
var key_vec = ((cljs.core.vector_QMARK_(key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null),key_vec));
});
G__23355 = function(this$,key){
switch(arguments.length){
case 1:
return G__23355__1.call(this,this$);
case 2:
return G__23355__2.call(this,this$,key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23355.cljs$core$IFn$_invoke$arity$1 = G__23355__1;
G__23355.cljs$core$IFn$_invoke$arity$2 = G__23355__2;
return G__23355;
})()
);

(keechma.controller.report["_"] = (function() {
var G__23356 = null;
var G__23356__4 = (function (this$,direction,name,payload){
return keechma.controller.report.cljs$core$IFn$_invoke$arity$5(this$,direction,name,payload,cljs.core.cst$kw$info);
});
var G__23356__5 = (function (this$,direction,name,payload,severity){
var reporter = (function (){var or__9992__auto__ = cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return ((function (or__9992__auto__){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6){
return null;
});
;})(or__9992__auto__))
}
})();
var topic = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(this$);
var G__23349 = cljs.core.cst$kw$controller;
var G__23350 = direction;
var G__23351 = topic;
var G__23352 = name;
var G__23353 = payload;
var G__23354 = severity;
return (reporter.cljs$core$IFn$_invoke$arity$6 ? reporter.cljs$core$IFn$_invoke$arity$6(G__23349,G__23350,G__23351,G__23352,G__23353,G__23354) : reporter.call(null,G__23349,G__23350,G__23351,G__23352,G__23353,G__23354));
});
G__23356 = function(this$,direction,name,payload,severity){
switch(arguments.length){
case 4:
return G__23356__4.call(this,this$,direction,name,payload);
case 5:
return G__23356__5.call(this,this$,direction,name,payload,severity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23356.cljs$core$IFn$_invoke$arity$4 = G__23356__4;
G__23356.cljs$core$IFn$_invoke$arity$5 = G__23356__5;
return G__23356;
})()
);

(keechma.controller.execute["_"] = (function() {
var G__23357 = null;
var G__23357__2 = (function (this$,command_name){
return keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(this$,command_name,null);
});
var G__23357__3 = (function (this$,command_name,args){
keechma.controller.report.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.cst$kw$in,command_name,args);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args], null));
});
G__23357 = function(this$,command_name,args){
switch(arguments.length){
case 2:
return G__23357__2.call(this,this$,command_name);
case 3:
return G__23357__3.call(this,this$,command_name,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23357.cljs$core$IFn$_invoke$arity$2 = G__23357__2;
G__23357.cljs$core$IFn$_invoke$arity$3 = G__23357__3;
return G__23357;
})()
);

(keechma.controller.send_command["_"] = (function() {
var G__23358 = null;
var G__23358__2 = (function (this$,command_name){
return keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(this$,command_name,null);
});
var G__23358__3 = (function (this$,command_name,args){
var out_chan = cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(this$);
keechma.controller.report.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.cst$kw$out,command_name,args);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args], null));

return this$;
});
G__23358 = function(this$,command_name,args){
switch(arguments.length){
case 2:
return G__23358__2.call(this,this$,command_name);
case 3:
return G__23358__3.call(this,this$,command_name,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23358.cljs$core$IFn$_invoke$arity$2 = G__23358__2;
G__23358.cljs$core$IFn$_invoke$arity$3 = G__23358__3;
return G__23358;
})()
);

(keechma.controller.is_running_QMARK_["_"] = (function (this$){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(this$).call(null));
}));

(keechma.controller.redirect["_"] = (function (this$,params){
return cljs.core.cst$kw$redirect_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$).call(null,params);
}));
/**
 * Helper function to dispatch commands from the `handler` function.
 * 
 *   Most of the time, handler function will just dispatch the commands
 *   to other functions. This functions provides a shortcut for that case.
 * 
 *   ```clojure
 *   (defrecord Controller []
 *  IController
 *  (handler [_ app-db-atom in-chan _]
 *    (dispatcher app-db-atom in-chan {:command-name some-fn})))
 *   ```
 */
keechma.controller.dispatcher = (function keechma$controller$dispatcher(app_db_atom,in_chan,actions){
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__){
return (function (state_23424){
var state_val_23425 = (state_23424[(1)]);
if((state_val_23425 === (7))){
var inst_23408 = (state_23424[(7)]);
var inst_23415 = (state_23424[(2)]);
var state_23424__$1 = (function (){var statearr_23426 = state_23424;
(statearr_23426[(8)] = inst_23415);

return statearr_23426;
})();
if(cljs.core.truth_(inst_23408)){
var statearr_23427_23445 = state_23424__$1;
(statearr_23427_23445[(1)] = (8));

} else {
var statearr_23428_23446 = state_23424__$1;
(statearr_23428_23446[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23425 === (1))){
var state_23424__$1 = state_23424;
var statearr_23429_23447 = state_23424__$1;
(statearr_23429_23447[(2)] = null);

(statearr_23429_23447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23425 === (4))){
var inst_23408 = (state_23424[(7)]);
var inst_23410 = (state_23424[(9)]);
var inst_23407 = (state_23424[(2)]);
var inst_23408__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23407,(0),null);
var inst_23409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23407,(1),null);
var inst_23410__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(actions,inst_23408__$1);
var state_23424__$1 = (function (){var statearr_23430 = state_23424;
(statearr_23430[(7)] = inst_23408__$1);

(statearr_23430[(10)] = inst_23409);

(statearr_23430[(9)] = inst_23410__$1);

return statearr_23430;
})();
if(cljs.core.truth_(inst_23410__$1)){
var statearr_23431_23448 = state_23424__$1;
(statearr_23431_23448[(1)] = (5));

} else {
var statearr_23432_23449 = state_23424__$1;
(statearr_23432_23449[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23425 === (6))){
var state_23424__$1 = state_23424;
var statearr_23433_23450 = state_23424__$1;
(statearr_23433_23450[(2)] = null);

(statearr_23433_23450[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23425 === (3))){
var inst_23422 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23424__$1,inst_23422);
} else {
if((state_val_23425 === (2))){
var state_23424__$1 = state_23424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23424__$1,(4),in_chan);
} else {
if((state_val_23425 === (9))){
var state_23424__$1 = state_23424;
var statearr_23434_23451 = state_23424__$1;
(statearr_23434_23451[(2)] = null);

(statearr_23434_23451[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23425 === (5))){
var inst_23409 = (state_23424[(10)]);
var inst_23410 = (state_23424[(9)]);
var inst_23412 = (inst_23410.cljs$core$IFn$_invoke$arity$2 ? inst_23410.cljs$core$IFn$_invoke$arity$2(app_db_atom,inst_23409) : inst_23410.call(null,app_db_atom,inst_23409));
var state_23424__$1 = state_23424;
var statearr_23435_23452 = state_23424__$1;
(statearr_23435_23452[(2)] = inst_23412);

(statearr_23435_23452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23425 === (10))){
var inst_23420 = (state_23424[(2)]);
var state_23424__$1 = state_23424;
var statearr_23436_23453 = state_23424__$1;
(statearr_23436_23453[(2)] = inst_23420);

(statearr_23436_23453[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23425 === (8))){
var state_23424__$1 = state_23424;
var statearr_23437_23454 = state_23424__$1;
(statearr_23437_23454[(2)] = null);

(statearr_23437_23454[(1)] = (2));


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
});})(c__17677__auto__))
;
return ((function (switch__17551__auto__,c__17677__auto__){
return (function() {
var keechma$controller$dispatcher_$_state_machine__17552__auto__ = null;
var keechma$controller$dispatcher_$_state_machine__17552__auto____0 = (function (){
var statearr_23441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23441[(0)] = keechma$controller$dispatcher_$_state_machine__17552__auto__);

(statearr_23441[(1)] = (1));

return statearr_23441;
});
var keechma$controller$dispatcher_$_state_machine__17552__auto____1 = (function (state_23424){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_23424);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e23442){if((e23442 instanceof Object)){
var ex__17555__auto__ = e23442;
var statearr_23443_23455 = state_23424;
(statearr_23443_23455[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23424);

return cljs.core.cst$kw$recur;
} else {
throw e23442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__23456 = state_23424;
state_23424 = G__23456;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$controller$dispatcher_$_state_machine__17552__auto__ = function(state_23424){
switch(arguments.length){
case 0:
return keechma$controller$dispatcher_$_state_machine__17552__auto____0.call(this);
case 1:
return keechma$controller$dispatcher_$_state_machine__17552__auto____1.call(this,state_23424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller$dispatcher_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller$dispatcher_$_state_machine__17552__auto____0;
keechma$controller$dispatcher_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller$dispatcher_$_state_machine__17552__auto____1;
return keechma$controller$dispatcher_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__))
})();
var state__17679__auto__ = (function (){var statearr_23444 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_23444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_23444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__))
);

return c__17677__auto__;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.controller.SerializedController = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k23458,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__23460 = (((k23458 instanceof cljs.core.Keyword))?k23458.fqn:null);
switch (G__23460) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23458,else__10665__auto__);

}
});

keechma.controller.SerializedController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.controller.SerializedController{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IIterable$ = true;

keechma.controller.SerializedController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23457){
var self__ = this;
var G__23457__$1 = this;
return (new cljs.core.RecordIter((0),G__23457__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core._iterator(self__.__extmap)));
});

keechma.controller.SerializedController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.controller.SerializedController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
var self__ = this;
var this__10657__auto____$1 = this;
var h__10429__auto__ = self__.__hash;
if(!((h__10429__auto__ == null))){
return h__10429__auto__;
} else {
var h__10429__auto____$1 = cljs.core.hash_imap(this__10657__auto____$1);
self__.__hash = h__10429__auto____$1;

return h__10429__auto____$1;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
var self__ = this;
var this__10658__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9980__auto__ = other__10659__auto__;
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = (this__10658__auto____$1.constructor === other__10659__auto__.constructor);
if(and__9980__auto____$1){
return cljs.core.equiv_map(this__10658__auto____$1,other__10659__auto__);
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
}
})())){
return true;
} else {
return false;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__23457){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__23461 = cljs.core.keyword_identical_QMARK_;
var expr__23462 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__23464 = cljs.core.cst$kw$params;
var G__23465 = expr__23462;
return (pred__23461.cljs$core$IFn$_invoke$arity$2 ? pred__23461.cljs$core$IFn$_invoke$arity$2(G__23464,G__23465) : pred__23461.call(null,G__23464,G__23465));
})())){
return (new keechma.controller.SerializedController(G__23457,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__23457),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__23457){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,G__23457,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.controller.SerializedController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null);
});

keechma.controller.SerializedController.cljs$lang$type = true;

keechma.controller.SerializedController.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.controller/SerializedController");
});

keechma.controller.SerializedController.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.controller/SerializedController");
});

keechma.controller.__GT_SerializedController = (function keechma$controller$__GT_SerializedController(params){
return (new keechma.controller.SerializedController(params,null,null,null));
});

keechma.controller.map__GT_SerializedController = (function keechma$controller$map__GT_SerializedController(G__23459){
return (new keechma.controller.SerializedController(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__23459),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23459,cljs.core.cst$kw$params),null));
});

