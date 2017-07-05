// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.pure.form_api_errors');
goog.require('cljs.core');
goog.require('clojure.string');
realworld.ui.components.pure.form_api_errors.render = (function realworld$ui$components$pure$form_api_errors$render(form_state){
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(form_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$submit_DASH_failed,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(state))){
var cause = cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(state).data;
var errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$errors], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$error_DASH_messages,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cause,errors,state){
return (function (p__26634){
var vec__26635 = p__26634;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null),[cljs.core.str(cljs.core.name(k)),cljs.core.str(" "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",v))].join('')], null);
});})(cause,errors,state))
,errors))], null);
} else {
return null;
}
});
