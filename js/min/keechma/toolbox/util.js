// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.util');
goog.require('cljs.core');
goog.require('clojure.string');
keechma.toolbox.util.class_name__GT_string = (function keechma$toolbox$util$class_name__GT_string(class_name){
if(cljs.core.vector_QMARK_(class_name)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.name((function (){var or__9992__auto__ = c;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "";
}
})());
}),class_name));
} else {
return cljs.core.name((function (){var or__9992__auto__ = class_name;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "";
}
})());
}
});
keechma.toolbox.util.class_names = (function keechma$toolbox$util$class_names(checks){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20806){
var vec__20807 = p__20806;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20807,(1),null);
if(cljs.core.truth_(((cljs.core.fn_QMARK_(v))?(v.cljs$core$IFn$_invoke$arity$0 ? v.cljs$core$IFn$_invoke$arity$0() : v.call(null)):v))){
return keechma.toolbox.util.class_name__GT_string(k);
} else {
return null;
}
}),checks)));
});
