// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('forms.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
forms.util.keyword_or_integer = (function forms$util$keyword_or_integer(key){
if((key instanceof cljs.core.Keyword)){
return key;
} else {
if(typeof key === 'number'){
return key;
} else {
if(cljs.core.truth_(cljs.core.re_matches(/[0-9]+/,key))){
return parseInt(key,(10));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);

}
}
}
});
forms.util.key_to_path = (function forms$util$key_to_path(key){
var path = ((cljs.core.vector_QMARK_(key))?key:clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(key),"."));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(forms.util.keyword_or_integer,path));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
forms.util.dissoc_in = (function forms$util$dissoc_in(m,p__21400){
var vec__21401 = p__21400;
var seq__21402 = cljs.core.seq(vec__21401);
var first__21403 = cljs.core.first(seq__21402);
var seq__21402__$1 = cljs.core.next(seq__21402);
var k = first__21403;
var ks = seq__21402__$1;
var keys = vec__21401;
if(ks){
var temp__5276__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5276__auto__)){
var nextmap = temp__5276__auto__;
var newmap = (forms.util.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? forms.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : forms.util.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
