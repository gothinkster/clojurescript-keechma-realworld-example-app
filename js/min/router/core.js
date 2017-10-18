// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('router.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('secretary.core');
goog.require('cuerdas.core');
router.core.encode = encodeURIComponent;
router.core.process_route_part = (function router$core$process_route_part(default_keys,part){
var is_placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(part));
var key = ((is_placeholder_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(part,(1))):null);
var has_default_QMARK_ = cljs.core.contains_QMARK_(default_keys,key);
var min_matches = ((has_default_QMARK_)?"*":"+");
var re_match = ((is_placeholder_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1("[^/]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_matches),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''):part);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$is_DASH_placeholder_QMARK_,is_placeholder_QMARK_,cljs.core.cst$kw$key,key,cljs.core.cst$kw$has_DASH_default,has_default_QMARK_,cljs.core.cst$kw$re_DASH_match,re_match], null);
});
router.core.route_regex = (function router$core$route_regex(parts){
var base_regex = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.cst$kw$re_DASH_match.cljs$core$IFn$_invoke$arity$1(p);
}),parts));
var full_regex = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_regex),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
return cljs.core.re_pattern(full_regex);
});
router.core.route_placeholders = (function router$core$route_placeholders(parts){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p);
}),parts));
});
router.core.add_default_params = (function router$core$add_default_params(route){
if(typeof route === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return route;
}
});
router.core.strip_slashes = (function router$core$strip_slashes(var_args){
var G__22457 = arguments.length;
switch (G__22457) {
case 1:
return router.core.strip_slashes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return router.core.strip_slashes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

router.core.strip_slashes.cljs$core$IFn$_invoke$arity$1 = (function (route){
return clojure.string.replace(clojure.string.trim((function (){var or__11514__auto__ = route;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})()),/^\/+|\/+$/,"");
});

router.core.strip_slashes.cljs$core$IFn$_invoke$arity$2 = (function (side,route){
var G__22458 = side;
var G__22458__$1 = (((G__22458 instanceof cljs.core.Keyword))?G__22458.fqn:null);
switch (G__22458__$1) {
case "left":
return clojure.string.replace(clojure.string.trim((function (){var or__11514__auto__ = route;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})()),/^\/+/,"");

break;
case "right":
return clojure.string.replace(clojure.string.trim((function (){var or__11514__auto__ = route;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})()),/\/+$/,"");

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22458__$1)].join('')));

}
});

router.core.strip_slashes.cljs$lang$maxFixedArity = 2;

router.core.process_route = (function router$core$process_route(p__22461){
var vec__22462 = p__22461;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(0),null);
var defaults = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(1),null);
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(route,/\//);
var processed_parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(router.core.process_route_part,cljs.core.set(cljs.core.keys(defaults))),parts);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$parts,processed_parts,cljs.core.cst$kw$regex,router.core.route_regex(processed_parts),cljs.core.cst$kw$placeholders,cljs.core.set(router.core.route_placeholders(processed_parts)),cljs.core.cst$kw$route,route,cljs.core.cst$kw$defaults,(function (){var or__11514__auto__ = defaults;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
});
router.core.remove_empty_matches = (function router$core$remove_empty_matches(matches){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,matches,(function (){var iter__12391__auto__ = (function router$core$remove_empty_matches_$_iter__22465(s__22466){
return (new cljs.core.LazySeq(null,(function (){
var s__22466__$1 = s__22466;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__22466__$1);
if(temp__5278__auto__){
var s__22466__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22466__$2)){
var c__12389__auto__ = cljs.core.chunk_first(s__22466__$2);
var size__12390__auto__ = cljs.core.count(c__12389__auto__);
var b__22468 = cljs.core.chunk_buffer(size__12390__auto__);
if((function (){var i__22467 = (0);
while(true){
if((i__22467 < size__12390__auto__)){
var vec__22469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__12389__auto__,i__22467);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22469,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22469,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"null")) || (cljs.core.empty_QMARK_(v))){
cljs.core.chunk_append(b__22468,k);

var G__22475 = (i__22467 + (1));
i__22467 = G__22475;
continue;
} else {
var G__22476 = (i__22467 + (1));
i__22467 = G__22476;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22468),router$core$remove_empty_matches_$_iter__22465(cljs.core.chunk_rest(s__22466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22468),null);
}
} else {
var vec__22472 = cljs.core.first(s__22466__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22472,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"null")) || (cljs.core.empty_QMARK_(v))){
return cljs.core.cons(k,router$core$remove_empty_matches_$_iter__22465(cljs.core.rest(s__22466__$2)));
} else {
var G__22477 = cljs.core.rest(s__22466__$2);
s__22466__$1 = G__22477;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12391__auto__(matches);
})());
});
router.core.expand_route = (function router$core$expand_route(route){
var strip_slashes = (function (p__22478){
var vec__22479 = p__22478;
var route__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,(0),null);
var defaults = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [router.core.strip_slashes.cljs$core$IFn$_invoke$arity$1(route__$1),defaults], null);
});
return router.core.process_route(strip_slashes(router.core.add_default_params(route)));
});
router.core.potential_route_QMARK_ = (function router$core$potential_route_QMARK_(data_keys,route){
return clojure.set.superset_QMARK_(data_keys,cljs.core.cst$kw$placeholders.cljs$core$IFn$_invoke$arity$1(route));
});
router.core.intersect_maps = (function router$core$intersect_maps(map1,map2){
return cljs.core.reduce_kv((function (m,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(map2,k),v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,map1);
});
router.core.extract_query_param = (function router$core$extract_query_param(default_keys,placeholders,m,k,v){
if(!((cljs.core.contains_QMARK_(default_keys,k)) || (cljs.core.contains_QMARK_(placeholders,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
});
router.core.add_url_segment = (function router$core$add_url_segment(defaults,data,url,k){
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
var placeholder = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('');
var is_default_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,k),val);
var default_val = (cljs.core.truth_(cuerdas.core.starts_with_QMARK_(url,placeholder))?"":"");
var replacement = ((is_default_QMARK_)?default_val:(router.core.encode.cljs$core$IFn$_invoke$arity$1 ? router.core.encode.cljs$core$IFn$_invoke$arity$1(val) : router.core.encode.call(null,val)));
return clojure.string.replace(url,placeholder,replacement);
});
router.core.build_url = (function router$core$build_url(route,data){
var defaults = cljs.core.cst$kw$defaults.cljs$core$IFn$_invoke$arity$1(route);
var default_keys = cljs.core.set(cljs.core.keys(defaults));
var placeholders = cljs.core.cst$kw$placeholders.cljs$core$IFn$_invoke$arity$1(route);
var query_params = cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(router.core.extract_query_param,default_keys,placeholders),cljs.core.PersistentArrayMap.EMPTY,data);
var base_url = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(router.core.add_url_segment,defaults,data),cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(route),placeholders);
if(cljs.core.empty_QMARK_(query_params)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",base_url)){
return "";
} else {
return base_url;
}
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.encode_query_params(query_params))].join('');
}
});
router.core.route_score = (function router$core$route_score(data,route){
var matched = cljs.core.PersistentVector.EMPTY;
var default_matches = ((function (matched){
return (function (matched__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched__$1,cljs.core.keys(router.core.intersect_maps(data,cljs.core.cst$kw$defaults.cljs$core$IFn$_invoke$arity$1(route))));
});})(matched))
;
var placeholder_matches = ((function (matched,default_matches){
return (function (matched__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched__$1,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.cst$kw$placeholders.cljs$core$IFn$_invoke$arity$1(route)),cljs.core.set(cljs.core.keys(data))));
});})(matched,default_matches))
;
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(placeholder_matches(default_matches(matched))));
});
router.core.match_path_with_route = (function router$core$match_path_with_route(route,url){
var matches = cljs.core.first(cljs.core.re_seq(cljs.core.cst$kw$regex.cljs$core$IFn$_invoke$arity$1(route),url));
if((matches == null)){
return null;
} else {
return cljs.core.zipmap(cljs.core.cst$kw$placeholders.cljs$core$IFn$_invoke$arity$1(route),cljs.core.rest(matches));
}
});
router.core.match_path = (function router$core$match_path(processed_routes,path){
var route_count = cljs.core.count(processed_routes);
var max_index = (route_count - (1));
if((route_count > (0))){
var index = (0);
while(true){
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(processed_routes,index);
var matches = router.core.match_path_with_route(route,path);
var end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_index,index);
if(cljs.core.truth_(matches)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$data,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$defaults.cljs$core$IFn$_invoke$arity$1(route),router.core.remove_empty_matches(matches)], 0))], null);
} else {
if(end_QMARK_){
return null;
} else {
var G__22482 = (index + (1));
index = G__22482;
continue;

}
}
break;
}
} else {
return null;
}
});
/**
 * Accepts `expanded-routes` vector (returned by the `expand-routes` function)
 *   and a string as arguments. Returns a map which contains the data represented
 *   by the route.
 * 
 *   ```clojure
 *   ;; define routes
 *   (def routes [[":page", {:page "index"}]
 *              ":page/:id"
 *              ":page/:id/:action"]) 
 * 
 *   (def expanded-routes (expand-routes routes))
 * 
 *   (url->map expanded-routes "foo")
 *   ;; {:page "foo"}
 * 
 *   (url->map expanded-routes "foo/1")
 *   ;; {:page "foo" :id 1}
 * 
 *   (url->map expanded-routes "foo?bar=baz")
 *   ;; {:page "foo" :bar "baz"}
 *   ```
 *   
 */
router.core.url__GT_map = (function router$core$url__GT_map(expanded_routes,url){
var vec__22483 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22483,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22483,(1),null);
var path = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(u,"/"))?u:router.core.strip_slashes.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$left,u));
var query = router.core.remove_empty_matches(clojure.walk.keywordize_keys(secretary.core.decode_query_params((function (){var or__11514__auto__ = q;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})())));
var matched_path = router.core.match_path(expanded_routes,path);
if(cljs.core.truth_(matched_path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(matched_path,cljs.core.cst$kw$data,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(matched_path)], 0)));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,query], null);
}
});
/**
 * Accepts `expanded-routes` vector (returned by the `expand-routes` function)
 *   and a map as arguments. Returns a URL part which is the closest representatation
 *   of the data contained in the map (based on the `expanded-routes` argument).
 * 
 *   ```clojure
 *   ;; define routes
 *   (def routes [[":page", {:page "index"}]
 *              ":page/:id"
 *              ":page/:id/:action"]) 
 * 
 *   (def expanded-routes (expand-routes routes))
 * 
 *   (map->url expanded-routes {:page "foo"})
 *   ;; "foo"
 * 
 *   (map->url expanded-routes {:page "foo" :id 1})
 *   ;; "foo/1"
 * 
 *   (map->url expanded-routes {:page "foo" :id 1 :action "bar" :qux "baz"})
 *   ;; "foo/1/bar?qux=baz"
 *   ```
 *   
 */
router.core.map__GT_url = (function router$core$map__GT_url(expanded_routes,data){
var data_keys = cljs.core.set(cljs.core.keys(data));
var potential_routes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(router.core.potential_route_QMARK_,data_keys),expanded_routes);
if(cljs.core.empty_QMARK_(potential_routes)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.encode_query_params(data))].join('');
} else {
var sorted_routes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (data_keys,potential_routes){
return (function (r){
return (- router.core.route_score(data,r));
});})(data_keys,potential_routes))
,potential_routes);
var best_match = cljs.core.first(sorted_routes);
return router.core.build_url(best_match,data);
}
});
/**
 * Accepts a vector of routes as the argument. Returnes the expanded version
 *   of routes that can be passed to `url->map` and `map->url` functions.
 * 
 *   Elements in the route vector must be string (pattern) or vectors that contain
 *   the string pattern and default values for that route.
 * 
 *   ```clojure
 *   (def route ":page")
 *   ;; This route will not be matched by an empty string
 * 
 *   (def route-with-defaults [":page", {:page "index"}])
 *   ;; This route will match an empty string and the :page key will hold 
 *   ;; the value "index"
 * 
 *   (expand-routes [[":page" {:page "index"}]
 *                ":page/:action"])
 *   ;; "" will be matched as {:page "index"}
 *   ;; "foo/bar" will be matched as {:page "foo" :action "bar"}
 *   ```
 *   
 */
router.core.expand_routes = (function router$core$expand_routes(routes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (r){
return (- cljs.core.count(cljs.core.cst$kw$placeholders.cljs$core$IFn$_invoke$arity$1(r)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(router.core.expand_route,routes)));
});
