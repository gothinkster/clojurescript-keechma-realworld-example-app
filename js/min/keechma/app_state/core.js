// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
keechma.app_state.core.IRouter = function(){};

keechma.app_state.core.redirect_BANG_ = (function keechma$app_state$core$redirect_BANG_(this$,params){
if((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 == null)))){
return this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$2(this$,params);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.app_state.core.redirect_BANG_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto__.call(null,this$,params));
} else {
var m__12248__auto____$1 = (keechma.app_state.core.redirect_BANG_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto____$1.call(null,this$,params));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.app_state.core.start_BANG_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto__.call(null,this$));
} else {
var m__12248__auto____$1 = (keechma.app_state.core.start_BANG_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto____$1.call(null,this$));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.app_state.core.stop_BANG_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto__.call(null,this$));
} else {
var m__12248__auto____$1 = (keechma.app_state.core.stop_BANG_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto____$1.call(null,this$));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.app_state.core.url[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto__.call(null,this$,params));
} else {
var m__12248__auto____$1 = (keechma.app_state.core.url["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__12248__auto____$1.call(null,this$,params));
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
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.app_state.core.wrap_component[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto__.call(null,this$));
} else {
var m__12248__auto____$1 = (keechma.app_state.core.wrap_component["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__12248__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouter.wrap-component",this$);
}
}
}
});

goog.object.set(keechma.app_state.core.IRouter,"_",true);

var G__25189_25204 = keechma.app_state.core.redirect_BANG_;
var G__25190_25205 = "_";
var G__25191_25206 = ((function (G__25189_25204,G__25190_25205){
return (function (this$,params){
return this$;
});})(G__25189_25204,G__25190_25205))
;
goog.object.set(G__25189_25204,G__25190_25205,G__25191_25206);

var G__25192_25207 = keechma.app_state.core.start_BANG_;
var G__25193_25208 = "_";
var G__25194_25209 = ((function (G__25192_25207,G__25193_25208){
return (function (this$){
return this$;
});})(G__25192_25207,G__25193_25208))
;
goog.object.set(G__25192_25207,G__25193_25208,G__25194_25209);

var G__25195_25210 = keechma.app_state.core.stop_BANG_;
var G__25196_25211 = "_";
var G__25197_25212 = ((function (G__25195_25210,G__25196_25211){
return (function (this$){
return this$;
});})(G__25195_25210,G__25196_25211))
;
goog.object.set(G__25195_25210,G__25196_25211,G__25197_25212);

var G__25198_25213 = keechma.app_state.core.url;
var G__25199_25214 = "_";
var G__25200_25215 = ((function (G__25198_25213,G__25199_25214){
return (function (this$,params){
return params;
});})(G__25198_25213,G__25199_25214))
;
goog.object.set(G__25198_25213,G__25199_25214,G__25200_25215);

var G__25201_25216 = keechma.app_state.core.wrap_component;
var G__25202_25217 = "_";
var G__25203_25218 = ((function (G__25201_25216,G__25202_25217){
return (function (this$){
return null;
});})(G__25201_25216,G__25202_25217))
;
goog.object.set(G__25201_25216,G__25202_25217,G__25203_25218);
