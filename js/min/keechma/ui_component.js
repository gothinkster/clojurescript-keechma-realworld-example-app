// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.ui_component');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.stuartsierra.dependency');
goog.require('keechma.util');
goog.require('clojure.string');
goog.require('clojure.set');

/**
 * IUIComponent protocol defines functions that can be called on
 *   the UIComponent records.
 * @interface
 */
keechma.ui_component.IUIComponent = function(){};

/**
 * Returns a URL based on the params. It will use the `:url-fn` that is injected
 *  from the outside to generate the URL based on the current app routes.
 */
keechma.ui_component.url = (function keechma$ui_component$url(this$,params){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$url$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$url$arity$2(this$,params);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.url[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto__.call(null,this$,params));
} else {
var m__10706__auto____$1 = (keechma.ui_component.url["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IUIComponent.url",this$);
}
}
}
});

keechma.ui_component.report = (function keechma$ui_component$report(var_args){
var args20727 = [];
var len__11171__auto___20736 = arguments.length;
var i__11172__auto___20737 = (0);
while(true){
if((i__11172__auto___20737 < len__11171__auto___20736)){
args20727.push((arguments[i__11172__auto___20737]));

var G__20738 = (i__11172__auto___20737 + (1));
i__11172__auto___20737 = G__20738;
continue;
} else {
}
break;
}

var G__20729 = args20727.length;
switch (G__20729) {
case 3:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20727.length)].join('')));

}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,payload){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$3(this$,name,payload);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.report[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,payload) : m__10706__auto__.call(null,this$,name,payload));
} else {
var m__10706__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,name,payload) : m__10706__auto____$1.call(null,this$,name,payload));
} else {
throw cljs.core.missing_protocol("IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4 = (function (this$,name,payload,severity){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$4 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$4(this$,name,payload,severity);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.report[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,name,payload,severity) : m__10706__auto__.call(null,this$,name,payload,severity));
} else {
var m__10706__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,name,payload,severity) : m__10706__auto____$1.call(null,this$,name,payload,severity));
} else {
throw cljs.core.missing_protocol("IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$lang$maxFixedArity = 4;


/**
 * Redirects page to the URL generated from params
 */
keechma.ui_component.redirect = (function keechma$ui_component$redirect(this$,params){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$redirect$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$redirect$arity$2(this$,params);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.redirect[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto__.call(null,this$,params));
} else {
var m__10706__auto____$1 = (keechma.ui_component.redirect["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IUIComponent.redirect",this$);
}
}
}
});

/**
 * Returns a subscription based on the key.
 */
keechma.ui_component.subscription = (function keechma$ui_component$subscription(var_args){
var args20730 = [];
var len__11171__auto___20740 = arguments.length;
var i__11172__auto___20741 = (0);
while(true){
if((i__11172__auto___20741 < len__11171__auto___20740)){
args20730.push((arguments[i__11172__auto___20741]));

var G__20742 = (i__11172__auto___20741 + (1));
i__11172__auto___20741 = G__20742;
continue;
} else {
}
break;
}

var G__20732 = args20730.length;
switch (G__20732) {
case 2:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20730.length)].join('')));

}
});

keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2 = (function (this$,key){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$subscription$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$subscription$arity$2(this$,key);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__10706__auto__.call(null,this$,key));
} else {
var m__10706__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key) : m__10706__auto____$1.call(null,this$,key));
} else {
throw cljs.core.missing_protocol("IUIComponent.subscription",this$);
}
}
}
});

keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3 = (function (this$,key,args){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$subscription$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$subscription$arity$3(this$,key,args);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,key,args) : m__10706__auto__.call(null,this$,key,args));
} else {
var m__10706__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,key,args) : m__10706__auto____$1.call(null,this$,key,args));
} else {
throw cljs.core.missing_protocol("IUIComponent.subscription",this$);
}
}
}
});

keechma.ui_component.subscription.cljs$lang$maxFixedArity = 3;


/**
 * Returns a component based on the key.
 */
keechma.ui_component.component = (function keechma$ui_component$component(this$,key){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$component$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$component$arity$2(this$,key);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.component[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__10706__auto__.call(null,this$,key));
} else {
var m__10706__auto____$1 = (keechma.ui_component.component["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key) : m__10706__auto____$1.call(null,this$,key));
} else {
throw cljs.core.missing_protocol("IUIComponent.component",this$);
}
}
}
});

/**
 * Sends a command to the controller.
 */
keechma.ui_component.send_command = (function keechma$ui_component$send_command(var_args){
var args20733 = [];
var len__11171__auto___20744 = arguments.length;
var i__11172__auto___20745 = (0);
while(true){
if((i__11172__auto___20745 < len__11171__auto___20744)){
args20733.push((arguments[i__11172__auto___20745]));

var G__20746 = (i__11172__auto___20745 + (1));
i__11172__auto___20745 = G__20746;
continue;
} else {
}
break;
}

var G__20735 = args20733.length;
switch (G__20735) {
case 2:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20733.length)].join('')));

}
});

keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2 = (function (this$,command){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$send_command$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$send_command$arity$2(this$,command);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,command) : m__10706__auto__.call(null,this$,command));
} else {
var m__10706__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,command) : m__10706__auto____$1.call(null,this$,command));
} else {
throw cljs.core.missing_protocol("IUIComponent.send-command",this$);
}
}
}
});

keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3 = (function (this$,command,args){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$send_command$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$send_command$arity$3(this$,command,args);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,command,args) : m__10706__auto__.call(null,this$,command,args));
} else {
var m__10706__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,command,args) : m__10706__auto____$1.call(null,this$,command,args));
} else {
throw cljs.core.missing_protocol("IUIComponent.send-command",this$);
}
}
}
});

keechma.ui_component.send_command.cljs$lang$maxFixedArity = 3;


/**
 * Returns a component renderer function that has the component record
 *  partially applied (`ctx`) as the first argument.
 */
keechma.ui_component.renderer = (function keechma$ui_component$renderer(this$){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$renderer$arity$1 == null)))){
return this$.keechma$ui_component$IUIComponent$renderer$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.renderer[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (keechma.ui_component.renderer["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IUIComponent.renderer",this$);
}
}
}
});

/**
 * Returns a current route data. It will use the `:current-route-fn` that is
 *  injected from the outside to return the data.
 */
keechma.ui_component.current_route = (function keechma$ui_component$current_route(this$){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$current_route$arity$1 == null)))){
return this$.keechma$ui_component$IUIComponent$current_route$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.ui_component.current_route[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (keechma.ui_component.current_route["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IUIComponent.current-route",this$);
}
}
}
});

(keechma.ui_component.IUIComponent["_"] = true);

(keechma.ui_component.url["_"] = (function (this$,params){
var url_fn = cljs.core.cst$kw$url_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$);
return (url_fn.cljs$core$IFn$_invoke$arity$1 ? url_fn.cljs$core$IFn$_invoke$arity$1(params) : url_fn.call(null,params));
}));

(keechma.ui_component.report["_"] = (function() {
var G__20753 = null;
var G__20753__3 = (function (this$,name,payload){
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4(this$,name,payload,cljs.core.cst$kw$info);
});
var G__20753__4 = (function (this$,name,payload,severity){
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
var G__20748 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(this$);
var G__20749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$topic.cljs$core$IFn$_invoke$arity$1(this$),name], null);
var G__20750 = payload;
var G__20751 = severity;
return (reporter.cljs$core$IFn$_invoke$arity$4 ? reporter.cljs$core$IFn$_invoke$arity$4(G__20748,G__20749,G__20750,G__20751) : reporter.call(null,G__20748,G__20749,G__20750,G__20751));
});
G__20753 = function(this$,name,payload,severity){
switch(arguments.length){
case 3:
return G__20753__3.call(this,this$,name,payload);
case 4:
return G__20753__4.call(this,this$,name,payload,severity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20753.cljs$core$IFn$_invoke$arity$3 = G__20753__3;
G__20753.cljs$core$IFn$_invoke$arity$4 = G__20753__4;
return G__20753;
})()
);

(keechma.ui_component.redirect["_"] = (function (this$,params){
return cljs.core.cst$kw$redirect_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$).call(null,params);
}));

(keechma.ui_component.current_route["_"] = (function (this$){
var current_route_fn = cljs.core.cst$kw$current_DASH_route_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$);
return (current_route_fn.cljs$core$IFn$_invoke$arity$0 ? current_route_fn.cljs$core$IFn$_invoke$arity$0() : current_route_fn.call(null));
}));

(keechma.ui_component.subscription["_"] = (function() {
var G__20754 = null;
var G__20754__2 = (function (this$,key){
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3(this$,key,cljs.core.PersistentVector.EMPTY);
});
var G__20754__3 = (function (this$,key,args){
var subscription = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subscriptions,key], null));
if((subscription == null)){
throw (function (){var G__20752 = [cljs.core.str("Can't resolve the subscription with key: "),cljs.core.str(key)].join('');
return Error(G__20752);
})();
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(subscription,args);
}
});
G__20754 = function(this$,key,args){
switch(arguments.length){
case 2:
return G__20754__2.call(this,this$,key);
case 3:
return G__20754__3.call(this,this$,key,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20754.cljs$core$IFn$_invoke$arity$2 = G__20754__2;
G__20754.cljs$core$IFn$_invoke$arity$3 = G__20754__3;
return G__20754;
})()
);

(keechma.ui_component.component["_"] = (function (this$,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,key], null));
}));

(keechma.ui_component.send_command["_"] = (function() {
var G__20755 = null;
var G__20755__2 = (function (this$,command){
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3(this$,command,null);
});
var G__20755__3 = (function (this$,command,args){
keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3(this$,command,args);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$topic.cljs$core$IFn$_invoke$arity$1(this$),command], null),args], null));

return null;
});
G__20755 = function(this$,command,args){
switch(arguments.length){
case 2:
return G__20755__2.call(this,this$,command);
case 3:
return G__20755__3.call(this,this$,command,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20755.cljs$core$IFn$_invoke$arity$2 = G__20755__2;
G__20755.cljs$core$IFn$_invoke$arity$3 = G__20755__3;
return G__20755;
})()
);

(keechma.ui_component.renderer["_"] = (function (this$){
var child_renderers = cljs.core.reduce_kv((function (c,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,k,(keechma.ui_component.component__GT_renderer.cljs$core$IFn$_invoke$arity$2 ? keechma.ui_component.component__GT_renderer.cljs$core$IFn$_invoke$arity$2(this$,v) : keechma.ui_component.component__GT_renderer.call(null,this$,v)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(this$));
var subscriptions = cljs.core.reduce_kv(((function (child_renderers){
return (function (s,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(this$)));
});})(child_renderers))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$subscriptions.cljs$core$IFn$_invoke$arity$1(this$));
return cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$,cljs.core.cst$kw$subscriptions,subscriptions),cljs.core.cst$kw$components,child_renderers)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(this$)], null));
}));

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
 * @implements {keechma.ui_component.IUIComponent}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.ui_component.UIComponent = (function (component_deps,subscription_deps,renderer,__meta,__extmap,__hash){
this.component_deps = component_deps;
this.subscription_deps = subscription_deps;
this.renderer = renderer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k20757,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__20759 = (((k20757 instanceof cljs.core.Keyword))?k20757.fqn:null);
switch (G__20759) {
case "component-deps":
return self__.component_deps;

break;
case "subscription-deps":
return self__.subscription_deps;

break;
case "renderer":
return self__.renderer;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20757,else__10665__auto__);

}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.ui-component.UIComponent{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$component_DASH_deps,self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscription_DASH_deps,self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$renderer,self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IIterable$ = true;

keechma.ui_component.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20756){
var self__ = this;
var G__20756__$1 = this;
return (new cljs.core.RecordIter((0),G__20756__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component_DASH_deps,cljs.core.cst$kw$subscription_DASH_deps,cljs.core.cst$kw$renderer], null),cljs.core._iterator(self__.__extmap)));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.ui_component.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.ui_component.UIComponent.prototype.keechma$ui_component$IUIComponent$ = true;

keechma.ui_component.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$subscription_DASH_deps,null,cljs.core.cst$kw$renderer,null,cljs.core.cst$kw$component_DASH_deps,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__20756){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__20760 = cljs.core.keyword_identical_QMARK_;
var expr__20761 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__20763 = cljs.core.cst$kw$component_DASH_deps;
var G__20764 = expr__20761;
return (pred__20760.cljs$core$IFn$_invoke$arity$2 ? pred__20760.cljs$core$IFn$_invoke$arity$2(G__20763,G__20764) : pred__20760.call(null,G__20763,G__20764));
})())){
return (new keechma.ui_component.UIComponent(G__20756,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20765 = cljs.core.cst$kw$subscription_DASH_deps;
var G__20766 = expr__20761;
return (pred__20760.cljs$core$IFn$_invoke$arity$2 ? pred__20760.cljs$core$IFn$_invoke$arity$2(G__20765,G__20766) : pred__20760.call(null,G__20765,G__20766));
})())){
return (new keechma.ui_component.UIComponent(self__.component_deps,G__20756,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20767 = cljs.core.cst$kw$renderer;
var G__20768 = expr__20761;
return (pred__20760.cljs$core$IFn$_invoke$arity$2 ? pred__20760.cljs$core$IFn$_invoke$arity$2(G__20767,G__20768) : pred__20760.call(null,G__20767,G__20768));
})())){
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,G__20756,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__20756),null));
}
}
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$component_DASH_deps,self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscription_DASH_deps,self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$renderer,self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__20756){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,G__20756,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.ui_component.UIComponent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$component_DASH_deps,cljs.core.cst$sym$subscription_DASH_deps,cljs.core.cst$sym$renderer], null);
});

keechma.ui_component.UIComponent.cljs$lang$type = true;

keechma.ui_component.UIComponent.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.ui-component/UIComponent");
});

keechma.ui_component.UIComponent.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.ui-component/UIComponent");
});

keechma.ui_component.__GT_UIComponent = (function keechma$ui_component$__GT_UIComponent(component_deps,subscription_deps,renderer){
return (new keechma.ui_component.UIComponent(component_deps,subscription_deps,renderer,null,null,null));
});

keechma.ui_component.map__GT_UIComponent = (function keechma$ui_component$map__GT_UIComponent(G__20758){
return (new keechma.ui_component.UIComponent(cljs.core.cst$kw$component_DASH_deps.cljs$core$IFn$_invoke$arity$1(G__20758),cljs.core.cst$kw$subscription_DASH_deps.cljs$core$IFn$_invoke$arity$1(G__20758),cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(G__20758),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20758,cljs.core.cst$kw$component_DASH_deps,cljs.core.array_seq([cljs.core.cst$kw$subscription_DASH_deps,cljs.core.cst$kw$renderer], 0)),null));
});

keechma.ui_component.component_dep_graph = (function keechma$ui_component$component_dep_graph(components){
return cljs.core.reduce_kv((function (graph,k,v){
if(!(cljs.core.fn_QMARK_(v))){
var component_deps = cljs.core.cst$kw$component_DASH_deps.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(keechma.util.in_QMARK_(component_deps,cljs.core.cst$kw$main))){
throw Error("Nothing can depend on the :main component!");
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (component_deps){
return (function (p1__20770_SHARP_,p2__20771_SHARP_){
return com.stuartsierra.dependency.depend(p1__20770_SHARP_,k,p2__20771_SHARP_);
});})(component_deps))
,graph,component_deps);
}
} else {
return graph;
}
}),com.stuartsierra.dependency.graph(),components);
});
keechma.ui_component.missing_component_deps = (function keechma$ui_component$missing_component_deps(components){
return cljs.core.reduce_kv((function (missing,k,v){
if((v == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(missing,k);
} else {
return missing;
}
}),cljs.core.PersistentVector.EMPTY,components);
});
keechma.ui_component.component_with_deps = (function keechma$ui_component$component_with_deps(component_key,component,system){
var dep_keys = cljs.core.cst$kw$component_DASH_deps.cljs$core$IFn$_invoke$arity$1(component);
if(!(cljs.core.empty_QMARK_(dep_keys))){
var components = cljs.core.select_keys(system,dep_keys);
var missing_deps = keechma.ui_component.missing_component_deps(components);
if(!(cljs.core.empty_QMARK_(missing_deps))){
throw (function (){var G__20773 = [cljs.core.str("Missing dependencies "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_deps)),cljs.core.str(" for component "),cljs.core.str(component_key)].join('');
return Error(G__20773);
})();
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.cst$kw$components,components,cljs.core.array_seq([cljs.core.cst$kw$component_DASH_deps,cljs.core.PersistentVector.EMPTY], 0));
}
} else {
return component;
}
});
/**
 * Resolves a dependency on the UIComponent record. Returns a new version
 *   of the record with the resolved dependency.
 * 
 *   ```clojure
 *   (def news-component (constructor {:component-deps [:user-profile :similar-news]
 *                                  :subscription-deps [:current-news :comments]}))
 * 
 *   (resolve-dep :subscription-deps :subscriptions news-component :current-news (fn []...))
 *   ;; Returns a new version of the `news-component` with the :current-news subscription resolved
 * 
 *   (resolve-dep :component-deps :components news-component :user-profile user-profile-component))
 *   ;; Returns a new version of the `news-component` with the :user-profile component resolved
 *   ```
 * 
 *   Two shorthand functions are defined that allow you to omit first two arguments:
 *   
 *   - `resolve-subscription-dep` - Resolves a subscription dependency
 *   - `resolve-component-dep` - Resolves a component dependency
 *   
 */
keechma.ui_component.resolve_dep = (function keechma$ui_component$resolve_dep(dep_kw,coll_kw,component,key,component_dep){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_kw,key], null),component_dep),dep_kw,keechma.util.without((dep_kw.cljs$core$IFn$_invoke$arity$1 ? dep_kw.cljs$core$IFn$_invoke$arity$1(component) : dep_kw.call(null,component)),key));
});
/**
 * See [[resolve-dep]].
 */
keechma.ui_component.resolve_subscription_dep = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(keechma.ui_component.resolve_dep,cljs.core.cst$kw$subscription_DASH_deps,cljs.core.cst$kw$subscriptions);
/**
 * See [[resolve-dep]]
 */
keechma.ui_component.resolve_component_dep = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(keechma.ui_component.resolve_dep,cljs.core.cst$kw$component_DASH_deps,cljs.core.cst$kw$components);
keechma.ui_component.resolved_system = (function keechma$ui_component$resolved_system(components,sorted_keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (system,key){
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(system,key);
if(cljs.core.fn_QMARK_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,key,component);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,key,keechma.ui_component.component_with_deps(key,component,system));
}
}),components,sorted_keys);
});
keechma.ui_component.resolve_component_subscriptions = (function keechma$ui_component$resolve_component_subscriptions(component,subscriptions){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,dep){
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subscriptions,dep);
if((sub == null)){
throw (function (){var G__20775 = [cljs.core.str("Missing subscription: "),cljs.core.str(dep)].join('');
return Error(G__20775);
})();
} else {
return (keechma.ui_component.resolve_subscription_dep.cljs$core$IFn$_invoke$arity$3 ? keechma.ui_component.resolve_subscription_dep.cljs$core$IFn$_invoke$arity$3(c,dep,sub) : keechma.ui_component.resolve_subscription_dep.call(null,c,dep,sub));
}
}),component,(function (){var or__9992__auto__ = cljs.core.cst$kw$subscription_DASH_deps.cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});
keechma.ui_component.resolve_subscriptions = (function keechma$ui_component$resolve_subscriptions(components,subscriptions){
return cljs.core.reduce_kv((function (components__$1,k,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(components__$1,k,keechma.ui_component.resolve_component_subscriptions(c,subscriptions));
}),cljs.core.PersistentArrayMap.EMPTY,components);
});
keechma.ui_component.assoc_name = (function keechma$ui_component$assoc_name(components){
return cljs.core.reduce_kv((function (components__$1,k,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(components__$1,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$name,k));
}),cljs.core.PersistentArrayMap.EMPTY,components);
});
keechma.ui_component.component__GT_renderer = (function keechma$ui_component$component__GT_renderer(parent,component){
return keechma.ui_component.renderer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.cst$kw$reporter,cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.array_seq([cljs.core.cst$kw$redirect_DASH_fn,cljs.core.cst$kw$redirect_DASH_fn.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$url_DASH_fn,cljs.core.cst$kw$url_DASH_fn.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$current_DASH_route_DASH_fn,cljs.core.cst$kw$current_DASH_route_DASH_fn.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(parent)], 0)));
});
/**
 * Creates a component system.
 * 
 *   Component system is a group of components that are interdependent. Each component
 *   system must define a `:main` component which will be returned from the `system`
 *   function.
 * 
 *   `system` function resolves dependencies between components.
 * 
 *   For example, let's say that your application consists of three components:
 * 
 *   - layout
 *   - sidebar
 *   - chat room list
 * 
 *   Layout is rendering the sidebar component and sidebar component is rendering the 
 *   chat room list component.
 * 
 *   Chat room list component has a subscription dependency on `:chat-rooms` which will
 *   return the list of chat rooms to render.
 * 
 *   Usually you would either pass the chat rooms subscription from layout to sidebar to the
 *   chat room list component, or the chat room list component would have a dependency
 *   on a global `:chat-rooms` subscription.
 * 
 *   Keechma allows you to avoid both of these problems:
 * 
 *   - only the chat room list component will know about it's dependencies
 *   - the dependencies will be injected from the outside by the `system` function 
 * 
 *   ```clojure
 *   (defn layout-renderer [ctx] ;; ctx is `layout-component` record with resolved dependencies
 *   [:div.main
 *   [:div.sidebar [(component ctx :sidebar)]]]) ;; Resolve the `:sidebar` component
 * 
 *   (def layout-component (constructor {:component-deps [:sidebar]
 *   :renderer layout-renderer}))
 * 
 *   (defn sidebar-renderer [ctx]
 *   [:div.sidebar
 *   [(component ctx :chat-room-list)]) ;; Resolve the `:chat-room-list` component
 * 
 *   (def sidebar-component (constructor {:component-deps [:chat-room-list]
 *   :renderer sidebar-renderer}))
 * 
 *   (defn chat-room-list-renderer [ctx]
 *   (let [chat-rooms (subscription ctx :chat-rooms)])) ;; Resolve the `:chat-rooms` subscription
 * 
 *   (def chat-room-list-component (constructor {:subscription-deps [:chat-rooms]}))
 * 
 *   (def main-component (system {:main layout-component ;; Map compnents to keys
 *   :sidebar sidebar-component
 *   :chat-room-list chat-room-list-component}
 *   {:chat-rooms (fn [app-state-atom])})) ;; Map subscriptions to keys
 *   ```
 *   
 *   In the example above `main-component` will be a Reagent component that can be mounted
 *   into the DOM, with all of the dependencies between components resolved.
 * 
 *   `system` function provided everything that components need from the outside, and all of the 
 *   components are reusable by design.
 *   
 */
keechma.ui_component.system = (function keechma$ui_component$system(var_args){
var args20776 = [];
var len__11171__auto___20779 = arguments.length;
var i__11172__auto___20780 = (0);
while(true){
if((i__11172__auto___20780 < len__11171__auto___20779)){
args20776.push((arguments[i__11172__auto___20780]));

var G__20781 = (i__11172__auto___20780 + (1));
i__11172__auto___20780 = G__20781;
continue;
} else {
}
break;
}

var G__20778 = args20776.length;
switch (G__20778) {
case 1:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20776.length)].join('')));

}
});

keechma.ui_component.system.cljs$core$IFn$_invoke$arity$1 = (function (components){
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2(components,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2 = (function (components,subscriptions){
if((cljs.core.cst$kw$main.cljs$core$IFn$_invoke$arity$1(components) == null)){
throw Error("System must have a :main component!");
} else {
var graph = keechma.ui_component.component_dep_graph(components);
var sorted_keys = com.stuartsierra.dependency.topo_sort(graph);
var components_with_resolved_deps = keechma.ui_component.resolve_subscriptions(keechma.ui_component.assoc_name(components),subscriptions);
return cljs.core.cst$kw$main.cljs$core$IFn$_invoke$arity$1(keechma.ui_component.resolved_system(components_with_resolved_deps,sorted_keys));
}
});

keechma.ui_component.system.cljs$lang$maxFixedArity = 2;

/**
 * Createas a UIComponent record. Accepts `opts` as the argument. `opts` is
 *   a map that can have the following params:
 * 
 *   - `:component-deps` - Which child component is this component dependent on
 *   - `:subscription-deps` - Which subscriptions is this component dependent on
 *   - `:topic` - On which topic should this component send commands (to the controller)
 *   - `:renderer` - A renderer function (Reagent component)
 * 
 *   The UIComponent record is a way to list all the dependencies for a component. When
 *   the application is started each component's renderer function will be partiall 
 *   applied with a verion of it's UIComponent that has the component and subscription
 *   dependencies resolved.
 * 
 *   This allows you to write components that are completely decoupled from the rest
 *   of the application.
 * 
 *   When you want to resolve injected component or subscription dependencies, you can
 *   use the functions defined on the `UIComponent` protocol:
 * 
 *   ```clojure
 *   (def render [ctx] ;; `ctx` is a UIComponent with resolved dependencies
 *  (let [child-component (component ctx :component-key)
 *        subscription (subscription ctx :subscription-key)])
 * 
 *   (def component (constructor {:renderer render
 *                             :component-deps [:component-key]
 *                             :subscription-deps [:subscription-key]))
 *   ```
 *   
 */
keechma.ui_component.constructor$ = (function keechma$ui_component$constructor(opts){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_deps,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$subscription_DASH_deps,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$topic,cljs.core.cst$kw$ui,cljs.core.cst$kw$renderer,(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"MISSING RENDERER!"], null);
})], null);
return keechma.ui_component.map__GT_UIComponent(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,opts], 0)));
});
