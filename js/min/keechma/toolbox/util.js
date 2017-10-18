// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
keechma.toolbox.util.class_name__GT_string = (function keechma$toolbox$util$class_name__GT_string(class_name){
if(cljs.core.vector_QMARK_(class_name)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.name((function (){var or__11514__auto__ = c;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})());
}),class_name));
} else {
return cljs.core.name((function (){var or__11514__auto__ = class_name;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})());
}
});
keechma.toolbox.util.class_names = (function keechma$toolbox$util$class_names(checks){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22525){
var vec__22526 = p__22525;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526,(1),null);
if(cljs.core.truth_(((cljs.core.fn_QMARK_(v))?(v.cljs$core$IFn$_invoke$arity$0 ? v.cljs$core$IFn$_invoke$arity$0() : v.call(null)):v))){
return keechma.toolbox.util.class_name__GT_string(k);
} else {
return null;
}
}),checks)));
});
