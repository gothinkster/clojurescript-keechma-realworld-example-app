// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.ui_component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('com.stuartsierra.dependency');
goog.require('keechma.util');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('keechma.reporter');

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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.url[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto__.call(null,this$,params));
} else {
var m__12248__auto____$1 = (keechma.ui_component.url["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IUIComponent.url",this$);
}
}
}
});

keechma.ui_component.report = (function keechma$ui_component$report(var_args){
var G__21185 = arguments.length;
switch (G__21185) {
case 3:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,payload){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$3 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$3(this$,name,payload);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.report[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,payload) : m__12248__auto__.call(null,this$,name,payload));
} else {
var m__12248__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,name,payload) : m__12248__auto____$1.call(null,this$,name,payload));
} else {
throw cljs.core.missing_protocol("IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4 = (function (this$,name,payload,path){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$4 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$4(this$,name,payload,path);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.report[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$4 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$4(this$,name,payload,path) : m__12248__auto__.call(null,this$,name,payload,path));
} else {
var m__12248__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,name,payload,path) : m__12248__auto____$1.call(null,this$,name,payload,path));
} else {
throw cljs.core.missing_protocol("IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$core$IFn$_invoke$arity$5 = (function (this$,name,payload,path,severity){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$report$arity$5 == null)))){
return this$.keechma$ui_component$IUIComponent$report$arity$5(this$,name,payload,path,severity);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.report[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$5 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$5(this$,name,payload,path,severity) : m__12248__auto__.call(null,this$,name,payload,path,severity));
} else {
var m__12248__auto____$1 = (keechma.ui_component.report["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,name,payload,path,severity) : m__12248__auto____$1.call(null,this$,name,payload,path,severity));
} else {
throw cljs.core.missing_protocol("IUIComponent.report",this$);
}
}
}
});

keechma.ui_component.report.cljs$lang$maxFixedArity = 5;


/**
 * Redirects page to the URL generated from params
 */
keechma.ui_component.redirect = (function keechma$ui_component$redirect(this$,params){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$redirect$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$redirect$arity$2(this$,params);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.redirect[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto__.call(null,this$,params));
} else {
var m__12248__auto____$1 = (keechma.ui_component.redirect["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto____$1.call(null,this$,params));
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
var G__21187 = arguments.length;
switch (G__21187) {
case 2:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$2 = (function (this$,key){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$subscription$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$subscription$arity$2(this$,key);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__12248__auto__.call(null,this$,key));
} else {
var m__12248__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key) : m__12248__auto____$1.call(null,this$,key));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.subscription[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(this$,key,args) : m__12248__auto__.call(null,this$,key,args));
} else {
var m__12248__auto____$1 = (keechma.ui_component.subscription["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,key,args) : m__12248__auto____$1.call(null,this$,key,args));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.component[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__12248__auto__.call(null,this$,key));
} else {
var m__12248__auto____$1 = (keechma.ui_component.component["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key) : m__12248__auto____$1.call(null,this$,key));
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
var G__21189 = arguments.length;
switch (G__21189) {
case 2:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$2 = (function (this$,command){
if((!((this$ == null))) && (!((this$.keechma$ui_component$IUIComponent$send_command$arity$2 == null)))){
return this$.keechma$ui_component$IUIComponent$send_command$arity$2(this$,command);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(this$,command) : m__12248__auto__.call(null,this$,command));
} else {
var m__12248__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,command) : m__12248__auto____$1.call(null,this$,command));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.send_command[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(this$,command,args) : m__12248__auto__.call(null,this$,command,args));
} else {
var m__12248__auto____$1 = (keechma.ui_component.send_command["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,command,args) : m__12248__auto____$1.call(null,this$,command,args));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.renderer[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto__.call(null,this$));
} else {
var m__12248__auto____$1 = (keechma.ui_component.renderer["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto____$1.call(null,this$));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.ui_component.current_route[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto__.call(null,this$));
} else {
var m__12248__auto____$1 = (keechma.ui_component.current_route["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IUIComponent.current-route",this$);
}
}
}
});

goog.object.set(keechma.ui_component.IUIComponent,"_",true);

var G__21193_21224 = keechma.ui_component.url;
var G__21194_21225 = "_";
var G__21195_21226 = ((function (G__21193_21224,G__21194_21225){
return (function (this$,params){
var url_fn = cljs.core.cst$kw$url_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$);
return (url_fn.cljs$core$IFn$_invoke$arity$1 ? url_fn.cljs$core$IFn$_invoke$arity$1(params) : url_fn.call(null,params));
});})(G__21193_21224,G__21194_21225))
;
goog.object.set(G__21193_21224,G__21194_21225,G__21195_21226);

var G__21196_21227 = keechma.ui_component.report;
var G__21197_21228 = "_";
var G__21198_21229 = ((function (G__21196_21227,G__21197_21228){
return (function() {
var G__21230 = null;
var G__21230__3 = (function (this$,name,payload){
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$5(this$,name,payload,keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$info);
});
var G__21230__4 = (function (this$,name,payload,cmd_info){
return keechma.ui_component.report.cljs$core$IFn$_invoke$arity$5(this$,name,payload,cmd_info,cljs.core.cst$kw$info);
});
var G__21230__5 = (function (this$,name,payload,cmd_info,severity){
var reporter = (function (){var or__11514__auto__ = cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return ((function (or__11514__auto__,G__21196_21227,G__21197_21228){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6,___$7){
return null;
});
;})(or__11514__auto__,G__21196_21227,G__21197_21228))
}
})();
var G__21199 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(this$);
var G__21200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$topic.cljs$core$IFn$_invoke$arity$1(this$),name], null);
var G__21201 = payload;
var G__21202 = cmd_info;
var G__21203 = severity;
return (reporter.cljs$core$IFn$_invoke$arity$5 ? reporter.cljs$core$IFn$_invoke$arity$5(G__21199,G__21200,G__21201,G__21202,G__21203) : reporter.call(null,G__21199,G__21200,G__21201,G__21202,G__21203));
});
G__21230 = function(this$,name,payload,cmd_info,severity){
switch(arguments.length){
case 3:
return G__21230__3.call(this,this$,name,payload);
case 4:
return G__21230__4.call(this,this$,name,payload,cmd_info);
case 5:
return G__21230__5.call(this,this$,name,payload,cmd_info,severity);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__21230.cljs$core$IFn$_invoke$arity$3 = G__21230__3;
G__21230.cljs$core$IFn$_invoke$arity$4 = G__21230__4;
G__21230.cljs$core$IFn$_invoke$arity$5 = G__21230__5;
return G__21230;
})()
;})(G__21196_21227,G__21197_21228))
;
goog.object.set(G__21196_21227,G__21197_21228,G__21198_21229);

var G__21204_21231 = keechma.ui_component.redirect;
var G__21205_21232 = "_";
var G__21206_21233 = ((function (G__21204_21231,G__21205_21232){
return (function (this$,params){
var fexpr__21207 = cljs.core.cst$kw$redirect_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$);
return (fexpr__21207.cljs$core$IFn$_invoke$arity$1 ? fexpr__21207.cljs$core$IFn$_invoke$arity$1(params) : fexpr__21207.call(null,params));
});})(G__21204_21231,G__21205_21232))
;
goog.object.set(G__21204_21231,G__21205_21232,G__21206_21233);

var G__21208_21234 = keechma.ui_component.current_route;
var G__21209_21235 = "_";
var G__21210_21236 = ((function (G__21208_21234,G__21209_21235){
return (function (this$){
var current_route_fn = cljs.core.cst$kw$current_DASH_route_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$);
return (current_route_fn.cljs$core$IFn$_invoke$arity$0 ? current_route_fn.cljs$core$IFn$_invoke$arity$0() : current_route_fn.call(null));
});})(G__21208_21234,G__21209_21235))
;
goog.object.set(G__21208_21234,G__21209_21235,G__21210_21236);

var G__21211_21237 = keechma.ui_component.subscription;
var G__21212_21238 = "_";
var G__21213_21239 = ((function (G__21211_21237,G__21212_21238){
return (function() {
var G__21240 = null;
var G__21240__2 = (function (this$,key){
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3(this$,key,cljs.core.PersistentVector.EMPTY);
});
var G__21240__3 = (function (this$,key,args){
var subscription = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subscriptions,key], null));
if((subscription == null)){
throw (function (){var G__21214 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't resolve the subscription with key: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
return Error(G__21214);
})();
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(subscription,args);
}
});
G__21240 = function(this$,key,args){
switch(arguments.length){
case 2:
return G__21240__2.call(this,this$,key);
case 3:
return G__21240__3.call(this,this$,key,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__21240.cljs$core$IFn$_invoke$arity$2 = G__21240__2;
G__21240.cljs$core$IFn$_invoke$arity$3 = G__21240__3;
return G__21240;
})()
;})(G__21211_21237,G__21212_21238))
;
goog.object.set(G__21211_21237,G__21212_21238,G__21213_21239);

var G__21215_21241 = keechma.ui_component.component;
var G__21216_21242 = "_";
var G__21217_21243 = ((function (G__21215_21241,G__21216_21242){
return (function (this$,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$components,key], null));
});})(G__21215_21241,G__21216_21242))
;
goog.object.set(G__21215_21241,G__21216_21242,G__21217_21243);

var G__21218_21244 = keechma.ui_component.send_command;
var G__21219_21245 = "_";
var G__21220_21246 = ((function (G__21218_21244,G__21219_21245){
return (function() {
var G__21247 = null;
var G__21247__2 = (function (this$,command){
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3(this$,command,null);
});
var G__21247__3 = (function (this$,command,args){
var cmd_info = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
keechma.ui_component.report.cljs$core$IFn$_invoke$arity$4(this$,command,args,cmd_info);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$topic.cljs$core$IFn$_invoke$arity$1(this$),command], null),args,cmd_info], null));

return null;
});
G__21247 = function(this$,command,args){
switch(arguments.length){
case 2:
return G__21247__2.call(this,this$,command);
case 3:
return G__21247__3.call(this,this$,command,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__21247.cljs$core$IFn$_invoke$arity$2 = G__21247__2;
G__21247.cljs$core$IFn$_invoke$arity$3 = G__21247__3;
return G__21247;
})()
;})(G__21218_21244,G__21219_21245))
;
goog.object.set(G__21218_21244,G__21219_21245,G__21220_21246);

var G__21221_21248 = keechma.ui_component.renderer;
var G__21222_21249 = "_";
var G__21223_21250 = ((function (G__21221_21248,G__21222_21249){
return (function (this$){
var child_renderers = cljs.core.reduce_kv(((function (G__21221_21248,G__21222_21249){
return (function (c,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,k,(keechma.ui_component.component__GT_renderer.cljs$core$IFn$_invoke$arity$2 ? keechma.ui_component.component__GT_renderer.cljs$core$IFn$_invoke$arity$2(this$,v) : keechma.ui_component.component__GT_renderer.call(null,this$,v)));
});})(G__21221_21248,G__21222_21249))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(this$));
var subscriptions = cljs.core.reduce_kv(((function (child_renderers,G__21221_21248,G__21222_21249){
return (function (s,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(this$)));
});})(child_renderers,G__21221_21248,G__21222_21249))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$subscriptions.cljs$core$IFn$_invoke$arity$1(this$));
return cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$,cljs.core.cst$kw$subscriptions,subscriptions),cljs.core.cst$kw$components,child_renderers)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(this$)], null));
});})(G__21221_21248,G__21222_21249))
;
goog.object.set(G__21221_21248,G__21222_21249,G__21223_21250);

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
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.ui_component.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k21252,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__21256 = k21252;
var G__21256__$1 = (((G__21256 instanceof cljs.core.Keyword))?G__21256.fqn:null);
switch (G__21256__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21252,else__12205__auto__);

}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.ui-component.UIComponent{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$component_DASH_deps,self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscription_DASH_deps,self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$renderer,self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21251){
var self__ = this;
var G__21251__$1 = this;
return (new cljs.core.RecordIter((0),G__21251__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$component_DASH_deps,cljs.core.cst$kw$subscription_DASH_deps,cljs.core.cst$kw$renderer], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__21257 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (1621572408 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__21257(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21253,other21254){
var self__ = this;
var this21253__$1 = this;
return (!((other21254 == null))) && ((this21253__$1.constructor === other21254.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21253__$1.component_deps,other21254.component_deps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21253__$1.subscription_deps,other21254.subscription_deps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21253__$1.renderer,other21254.renderer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21253__$1.__extmap,other21254.__extmap));
});

keechma.ui_component.UIComponent.prototype.keechma$ui_component$IUIComponent$ = cljs.core.PROTOCOL_SENTINEL;

keechma.ui_component.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$subscription_DASH_deps,null,cljs.core.cst$kw$renderer,null,cljs.core.cst$kw$component_DASH_deps,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__21251){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__21258 = cljs.core.keyword_identical_QMARK_;
var expr__21259 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__21261 = cljs.core.cst$kw$component_DASH_deps;
var G__21262 = expr__21259;
return (pred__21258.cljs$core$IFn$_invoke$arity$2 ? pred__21258.cljs$core$IFn$_invoke$arity$2(G__21261,G__21262) : pred__21258.call(null,G__21261,G__21262));
})())){
return (new keechma.ui_component.UIComponent(G__21251,self__.subscription_deps,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21263 = cljs.core.cst$kw$subscription_DASH_deps;
var G__21264 = expr__21259;
return (pred__21258.cljs$core$IFn$_invoke$arity$2 ? pred__21258.cljs$core$IFn$_invoke$arity$2(G__21263,G__21264) : pred__21258.call(null,G__21263,G__21264));
})())){
return (new keechma.ui_component.UIComponent(self__.component_deps,G__21251,self__.renderer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21265 = cljs.core.cst$kw$renderer;
var G__21266 = expr__21259;
return (pred__21258.cljs$core$IFn$_invoke$arity$2 ? pred__21258.cljs$core$IFn$_invoke$arity$2(G__21265,G__21266) : pred__21258.call(null,G__21265,G__21266));
})())){
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,G__21251,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__21251),null));
}
}
}
});

keechma.ui_component.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$component_DASH_deps,self__.component_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscription_DASH_deps,self__.subscription_deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$renderer,self__.renderer],null))], null),self__.__extmap));
});

keechma.ui_component.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__21251){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.ui_component.UIComponent(self__.component_deps,self__.subscription_deps,self__.renderer,G__21251,self__.__extmap,self__.__hash));
});

keechma.ui_component.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.ui_component.UIComponent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$component_DASH_deps,cljs.core.cst$sym$subscription_DASH_deps,cljs.core.cst$sym$renderer], null);
});

keechma.ui_component.UIComponent.cljs$lang$type = true;

keechma.ui_component.UIComponent.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.ui-component/UIComponent");
});

keechma.ui_component.UIComponent.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.ui-component/UIComponent");
});

keechma.ui_component.__GT_UIComponent = (function keechma$ui_component$__GT_UIComponent(component_deps,subscription_deps,renderer){
return (new keechma.ui_component.UIComponent(component_deps,subscription_deps,renderer,null,null,null));
});

keechma.ui_component.map__GT_UIComponent = (function keechma$ui_component$map__GT_UIComponent(G__21255){
return (new keechma.ui_component.UIComponent(cljs.core.cst$kw$component_DASH_deps.cljs$core$IFn$_invoke$arity$1(G__21255),cljs.core.cst$kw$subscription_DASH_deps.cljs$core$IFn$_invoke$arity$1(G__21255),cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(G__21255),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21255,cljs.core.cst$kw$component_DASH_deps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$subscription_DASH_deps,cljs.core.cst$kw$renderer], 0))),null));
});

keechma.ui_component.component_dep_graph = (function keechma$ui_component$component_dep_graph(components){
return cljs.core.reduce_kv((function (graph,k,v){
if(!(cljs.core.fn_QMARK_(v))){
var component_deps = cljs.core.cst$kw$component_DASH_deps.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(keechma.util.in_QMARK_(component_deps,cljs.core.cst$kw$main))){
throw Error("Nothing can depend on the :main component!");
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (component_deps){
return (function (p1__21268_SHARP_,p2__21269_SHARP_){
return com.stuartsierra.dependency.depend(p1__21268_SHARP_,k,p2__21269_SHARP_);
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
throw (function (){var G__21270 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing dependencies "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_deps)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for component "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key)].join('');
return Error(G__21270);
})();
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.cst$kw$components,components,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$component_DASH_deps,cljs.core.PersistentVector.EMPTY], 0));
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
throw (function (){var G__21271 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing subscription: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join('');
return Error(G__21271);
})();
} else {
return (keechma.ui_component.resolve_subscription_dep.cljs$core$IFn$_invoke$arity$3 ? keechma.ui_component.resolve_subscription_dep.cljs$core$IFn$_invoke$arity$3(c,dep,sub) : keechma.ui_component.resolve_subscription_dep.call(null,c,dep,sub));
}
}),component,(function (){var or__11514__auto__ = cljs.core.cst$kw$subscription_DASH_deps.cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
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
return keechma.ui_component.renderer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.cst$kw$reporter,cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$redirect_DASH_fn,cljs.core.cst$kw$redirect_DASH_fn.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$url_DASH_fn,cljs.core.cst$kw$url_DASH_fn.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$current_DASH_route_DASH_fn,cljs.core.cst$kw$current_DASH_route_DASH_fn.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(parent)], 0)));
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
var G__21273 = arguments.length;
switch (G__21273) {
case 1:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
return keechma.ui_component.map__GT_UIComponent(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,opts], 0)));
});
