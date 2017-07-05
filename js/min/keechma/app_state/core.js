// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state.core');
goog.require('cljs.core');

/**
 * @interface
 */
keechma.app_state.core.IRouter = function(){};

keechma.app_state.core.redirect_BANG_ = (function keechma$app_state$core$redirect_BANG_(this$,params){
if((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 == null)))){
return this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$2(this$,params);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.app_state.core.redirect_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto__.call(null,this$,params));
} else {
var m__10706__auto____$1 = (keechma.app_state.core.redirect_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IRouter.redirect!",this$);
}
}
}
});

keechma.app_state.core.start_BANG_ = (function keechma$app_state$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$start_BANG_$arity$1 == null)))){
return this$.keechma$app_state$core$IRouter$start_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.app_state.core.start_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (keechma.app_state.core.start_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouter.start!",this$);
}
}
}
});

keechma.app_state.core.stop_BANG_ = (function keechma$app_state$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$stop_BANG_$arity$1 == null)))){
return this$.keechma$app_state$core$IRouter$stop_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.app_state.core.stop_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (keechma.app_state.core.stop_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouter.stop!",this$);
}
}
}
});

keechma.app_state.core.url = (function keechma$app_state$core$url(this$,params){
if((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$url$arity$2 == null)))){
return this$.keechma$app_state$core$IRouter$url$arity$2(this$,params);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.app_state.core.url[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto__.call(null,this$,params));
} else {
var m__10706__auto____$1 = (keechma.app_state.core.url["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__10706__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IRouter.url",this$);
}
}
}
});

keechma.app_state.core.wrap_component = (function keechma$app_state$core$wrap_component(this$){
if((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$wrap_component$arity$1 == null)))){
return this$.keechma$app_state$core$IRouter$wrap_component$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.app_state.core.wrap_component[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (keechma.app_state.core.wrap_component["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouter.wrap-component",this$);
}
}
}
});

(keechma.app_state.core.IRouter["_"] = true);

(keechma.app_state.core.redirect_BANG_["_"] = (function (this$,params){
return this$;
}));

(keechma.app_state.core.start_BANG_["_"] = (function (this$){
return this$;
}));

(keechma.app_state.core.stop_BANG_["_"] = (function (this$){
return this$;
}));

(keechma.app_state.core.url["_"] = (function (this$,params){
return params;
}));

(keechma.app_state.core.wrap_component["_"] = (function (this$){
return null;
}));
