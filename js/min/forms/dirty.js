// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('forms.dirty');
goog.require('cljs.core');
goog.require('clojure.data');
forms.dirty.analyze_diff = (function forms$dirty$analyze_diff(var_args){
var args21891 = [];
var len__11171__auto___21896 = arguments.length;
var i__11172__auto___21897 = (0);
while(true){
if((i__11172__auto___21897 < len__11171__auto___21896)){
args21891.push((arguments[i__11172__auto___21897]));

var G__21898 = (i__11172__auto___21897 + (1));
i__11172__auto___21897 = G__21898;
continue;
} else {
}
break;
}

var G__21893 = args21891.length;
switch (G__21893) {
case 1:
return forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21891.length)].join('')));

}
});

forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$1 = (function (data){
return forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$3(data,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$results,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$lengths,cljs.core.PersistentArrayMap.EMPTY], null));
});

forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$3 = (function (data,path,results){
return cljs.core.reduce_kv((function (m,k,v){
if((cljs.core.vector_QMARK_(v)) || (cljs.core.map_QMARK_(v))){
var map__21894 = m;
var map__21894__$1 = ((((!((map__21894 == null)))?((((map__21894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21894):map__21894);
var results__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21894__$1,cljs.core.cst$kw$results);
var lengths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21894__$1,cljs.core.cst$kw$lengths);
var new_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var child_diff = forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$3(v,new_path,m);
var new_results = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(child_diff);
var new_lengths = cljs.core.cst$kw$lengths.cljs$core$IFn$_invoke$arity$1(child_diff);
var lengths_with_current = ((cljs.core.vector_QMARK_(v))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lengths,new_path,cljs.core.count(v)):lengths);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$results,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(results__$1,new_results),cljs.core.cst$kw$lengths,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_lengths,lengths_with_current], 0))], null);
} else {
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$results,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(m),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k)));
}
}
}),results,data);
});

forms.dirty.analyze_diff.cljs$lang$maxFixedArity = 3;

/**
 * Calculates the key paths that are dirty by diffing the initial and current form data.
 */
forms.dirty.calculate_dirty_fields = (function forms$dirty$calculate_dirty_fields(prev,current){
var vec__21906 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clojure.data.diff(prev,current));
var p_diff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21906,(0),null);
var c_diff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21906,(1),null);
var p_report = forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$1(p_diff);
var c_report = forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$1(c_diff);
var vec__21909 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clojure.data.diff(cljs.core.cst$kw$lengths.cljs$core$IFn$_invoke$arity$1(p_report),cljs.core.cst$kw$lengths.cljs$core$IFn$_invoke$arity$1(c_report)));
var p_lengths_diff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21909,(0),null);
var c_lengths_diff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21909,(1),null);
return cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(p_report),cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(c_report),cljs.core.array_seq([cljs.core.keys(p_lengths_diff),cljs.core.keys(c_lengths_diff)], 0)));
});
