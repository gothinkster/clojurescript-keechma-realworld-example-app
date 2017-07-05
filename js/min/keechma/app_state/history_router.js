// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state.history_router');
goog.require('cljs.core');
goog.require('router.core');
goog.require('goog.Uri');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('keechma.app_state.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
keechma.app_state.history_router.make_urlchange_dispatcher = (function keechma$app_state$history_router$make_urlchange_dispatcher(){
var handlers = (function (){var G__25367 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25367) : cljs.core.atom.call(null,G__25367));
})();
var main_handler = ((function (handlers){
return (function (_){
var seq__25368 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(handlers) : cljs.core.deref.call(null,handlers)));
var chunk__25369 = null;
var count__25370 = (0);
var i__25371 = (0);
while(true){
if((i__25371 < count__25370)){
var h = chunk__25369.cljs$core$IIndexed$_nth$arity$2(null,i__25371);
var G__25372_25378 = location.href;
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__25372_25378) : h.call(null,G__25372_25378));

var G__25379 = seq__25368;
var G__25380 = chunk__25369;
var G__25381 = count__25370;
var G__25382 = (i__25371 + (1));
seq__25368 = G__25379;
chunk__25369 = G__25380;
count__25370 = G__25381;
i__25371 = G__25382;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__25368);
if(temp__6753__auto__){
var seq__25368__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25368__$1)){
var c__10895__auto__ = cljs.core.chunk_first(seq__25368__$1);
var G__25383 = cljs.core.chunk_rest(seq__25368__$1);
var G__25384 = c__10895__auto__;
var G__25385 = cljs.core.count(c__10895__auto__);
var G__25386 = (0);
seq__25368 = G__25383;
chunk__25369 = G__25384;
count__25370 = G__25385;
i__25371 = G__25386;
continue;
} else {
var h = cljs.core.first(seq__25368__$1);
var G__25373_25387 = location.href;
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__25373_25387) : h.call(null,G__25373_25387));

var G__25388 = cljs.core.next(seq__25368__$1);
var G__25389 = null;
var G__25390 = (0);
var G__25391 = (0);
seq__25368 = G__25388;
chunk__25369 = G__25389;
count__25370 = G__25390;
i__25371 = G__25391;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers))
;
var bind_main_handler = ((function (handlers,main_handler){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(handlers) : cljs.core.deref.call(null,handlers))))){
return window.addEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler))
;
var unbind_main_handler = ((function (handlers,main_handler,bind_main_handler){
return (function (){
if((cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(handlers) : cljs.core.deref.call(null,handlers))) === (0))){
return window.removeEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler,bind_main_handler))
;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$handlers_DASH_count,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (){
return cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(handlers) : cljs.core.deref.call(null,handlers)));
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,cljs.core.cst$kw$bind,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(handlers,cljs.core.conj,handler);

return bind_main_handler();
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,cljs.core.cst$kw$unbind,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(handlers,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (h){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (p1__25355_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(handler,p1__25355_SHARP_);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,h);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
);

return unbind_main_handler();
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,cljs.core.cst$kw$go,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (href){
history.pushState(null,"",href);

var seq__25374 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(handlers) : cljs.core.deref.call(null,handlers)));
var chunk__25375 = null;
var count__25376 = (0);
var i__25377 = (0);
while(true){
if((i__25377 < count__25376)){
var h = chunk__25375.cljs$core$IIndexed$_nth$arity$2(null,i__25377);
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(href) : h.call(null,href));

var G__25392 = seq__25374;
var G__25393 = chunk__25375;
var G__25394 = count__25376;
var G__25395 = (i__25377 + (1));
seq__25374 = G__25392;
chunk__25375 = G__25393;
count__25376 = G__25394;
i__25377 = G__25395;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__25374);
if(temp__6753__auto__){
var seq__25374__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25374__$1)){
var c__10895__auto__ = cljs.core.chunk_first(seq__25374__$1);
var G__25396 = cljs.core.chunk_rest(seq__25374__$1);
var G__25397 = c__10895__auto__;
var G__25398 = cljs.core.count(c__10895__auto__);
var G__25399 = (0);
seq__25374 = G__25396;
chunk__25375 = G__25397;
count__25376 = G__25398;
i__25377 = G__25399;
continue;
} else {
var h = cljs.core.first(seq__25374__$1);
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(href) : h.call(null,href));

var G__25400 = cljs.core.next(seq__25374__$1);
var G__25401 = null;
var G__25402 = (0);
var G__25403 = (0);
seq__25374 = G__25400;
chunk__25375 = G__25401;
count__25376 = G__25402;
i__25377 = G__25403;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
], null);
});
keechma.app_state.history_router.urlchange_dispatcher = keechma.app_state.history_router.make_urlchange_dispatcher();
keechma.app_state.history_router.url_prefix = (function keechma$app_state$history_router$url_prefix(base_href){
return [cljs.core.str(location.origin),cljs.core.str(base_href)].join('');
});
keechma.app_state.history_router.route_url = (function keechma$app_state$history_router$route_url(url,base_href){
var prefix = keechma.app_state.history_router.url_prefix(base_href);
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(url,cljs.core.count(prefix),cljs.core.count(url)),/#/));
});
keechma.app_state.history_router.link_QMARK_ = (function keechma$app_state$history_router$link_QMARK_(el){
var and__9980__auto__ = el.href;
if(cljs.core.truth_(and__9980__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",clojure.string.lower_case(el.tagName));
} else {
return and__9980__auto__;
}
});
keechma.app_state.history_router.link_el = (function keechma$app_state$history_router$link_el(el){
var current_el = el;
while(true){
if(cljs.core.truth_(keechma.app_state.history_router.link_QMARK_(current_el))){
return current_el;
} else {
var temp__6753__auto__ = current_el.parentNode;
if(cljs.core.truth_(temp__6753__auto__)){
var parent = temp__6753__auto__;
var G__25404 = parent;
current_el = G__25404;
continue;
} else {
return null;
}
}
break;
}
});
keechma.app_state.history_router.current_target_self_QMARK_ = (function keechma$app_state$history_router$current_target_self_QMARK_(el){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null),el.target);
});
keechma.app_state.history_router.left_button_clicked_QMARK_ = (function keechma$app_state$history_router$left_button_clicked_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button);
});
keechma.app_state.history_router.mod_key_pressed_QMARK_ = (function keechma$app_state$history_router$mod_key_pressed_QMARK_(e){
var or__9992__auto__ = e.altKey;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
var or__9992__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__9992__auto____$1)){
return or__9992__auto____$1;
} else {
var or__9992__auto____$2 = e.ctrlKey;
if(cljs.core.truth_(or__9992__auto____$2)){
return or__9992__auto____$2;
} else {
return e.metaKey;
}
}
}
});
keechma.app_state.history_router.link_has_prefixed_url_QMARK_ = (function keechma$app_state$history_router$link_has_prefixed_url_QMARK_(el,base_href){
return clojure.string.starts_with_QMARK_(el.href,keechma.app_state.history_router.url_prefix(base_href));
});
keechma.app_state.history_router.same_href_QMARK_ = (function keechma$app_state$history_router$same_href_QMARK_(el){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.href,location.href);
});
keechma.app_state.history_router.should_href_pass_through_QMARK_ = (function keechma$app_state$history_router$should_href_pass_through_QMARK_(href){
var vec__25411 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(location.href,/#/);
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25411,(0),null);
var current_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25411,(1),null);
var vec__25414 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(href,/#/);
var next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25414,(0),null);
var next_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25414,(1),null);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,next)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_hash,next_hash));
});
keechma.app_state.history_router.make_url = (function keechma$app_state$history_router$make_url(routes,base_href,params){
var hash = location.hash;
return [cljs.core.str(base_href),cljs.core.str(router.core.map__GT_url(routes,params)),cljs.core.str(hash)].join('');
});
keechma.app_state.history_router.add_trailing_slash = (function keechma$app_state$history_router$add_trailing_slash(base_href){
if(clojure.string.ends_with_QMARK_(base_href,"/")){
return base_href;
} else {
return [cljs.core.str(base_href),cljs.core.str("/")].join('');
}
});
keechma.app_state.history_router.add_leading_slash = (function keechma$app_state$history_router$add_leading_slash(base_href){
if(clojure.string.starts_with_QMARK_(base_href,"/")){
return base_href;
} else {
return [cljs.core.str("/"),cljs.core.str(base_href)].join('');
}
});
keechma.app_state.history_router.process_base_href = (function keechma$app_state$history_router$process_base_href(base_href){
return keechma.app_state.history_router.add_leading_slash(keechma.app_state.history_router.add_trailing_slash(base_href));
});

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {keechma.app_state.core.IRouter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.history_router.HistoryRouter = (function (routes,routes_chan,base_href,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.base_href = base_href;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k25418,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__25420 = (((k25418 instanceof cljs.core.Keyword))?k25418.fqn:null);
switch (G__25420) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "base-href":
return self__.base_href;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25418,else__10665__auto__);

}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.app-state.history-router.HistoryRouter{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$base_DASH_href,self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$ = true;

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25417){
var self__ = this;
var G__25417__$1 = this;
return (new cljs.core.RecordIter((0),G__25417__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$base_DASH_href,cljs.core.cst$kw$app_DASH_db], null),cljs.core._iterator(self__.__extmap)));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$ = true;

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = ((function (this$__$1){
return (function (href){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.routes_chan,router.core.url__GT_map(self__.routes,keechma.app_state.history_router.route_url(href,self__.base_href)));
});})(this$__$1))
;
cljs.core.cst$kw$bind.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,handler);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_db,cljs.core.assoc,cljs.core.cst$kw$route,router.core.url__GT_map(self__.routes,keechma.app_state.history_router.route_url(location.href,self__.base_href)));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$urlchange_DASH_handler,handler);
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$unbind.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,cljs.core.cst$kw$urlchange_DASH_handler.cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$go.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,[cljs.core.str(location.origin),cljs.core.str(keechma.app_state.history_router.make_url(self__.routes,self__.base_href,params))].join(''));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var click_handler = ((function (this$__$1){
return (function (e){
var temp__6753__auto__ = keechma.app_state.history_router.link_el(e.target);
if(cljs.core.truth_(temp__6753__auto__)){
var el = temp__6753__auto__;
var href = el.href;
if(cljs.core.truth_((function (){var and__9980__auto__ = keechma.app_state.history_router.current_target_self_QMARK_(el);
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = keechma.app_state.history_router.left_button_clicked_QMARK_(e);
if(cljs.core.truth_(and__9980__auto____$1)){
var and__9980__auto____$2 = cljs.core.not(keechma.app_state.history_router.mod_key_pressed_QMARK_(e));
if(and__9980__auto____$2){
return keechma.app_state.history_router.link_has_prefixed_url_QMARK_(el,self__.base_href);
} else {
return and__9980__auto____$2;
}
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
}
})())){
if(cljs.core.truth_(keechma.app_state.history_router.should_href_pass_through_QMARK_(href))){
return null;
} else {
cljs.core.cst$kw$go.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,href);

e.preventDefault();

return e.stopPropagation();
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1))
;
return ((function (click_handler,this$__$1){
return (function() { 
var G__25433__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,click_handler], null)], null),children);
};
var G__25433 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__25434__i = 0, G__25434__a = new Array(arguments.length -  0);
while (G__25434__i < G__25434__a.length) {G__25434__a[G__25434__i] = arguments[G__25434__i + 0]; ++G__25434__i;}
  children = new cljs.core.IndexedSeq(G__25434__a,0);
} 
return G__25433__delegate.call(this,children);};
G__25433.cljs$lang$maxFixedArity = 0;
G__25433.cljs$lang$applyTo = (function (arglist__25435){
var children = cljs.core.seq(arglist__25435);
return G__25433__delegate(children);
});
G__25433.cljs$core$IFn$_invoke$arity$variadic = G__25433__delegate;
return G__25433;
})()
;
;})(click_handler,this$__$1))
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.history_router.make_url(self__.routes,self__.base_href,params);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$routes,null,cljs.core.cst$kw$routes_DASH_chan,null,cljs.core.cst$kw$base_DASH_href,null,cljs.core.cst$kw$app_DASH_db,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__25417){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__25421 = cljs.core.keyword_identical_QMARK_;
var expr__25422 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__25424 = cljs.core.cst$kw$routes;
var G__25425 = expr__25422;
return (pred__25421.cljs$core$IFn$_invoke$arity$2 ? pred__25421.cljs$core$IFn$_invoke$arity$2(G__25424,G__25425) : pred__25421.call(null,G__25424,G__25425));
})())){
return (new keechma.app_state.history_router.HistoryRouter(G__25417,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25426 = cljs.core.cst$kw$routes_DASH_chan;
var G__25427 = expr__25422;
return (pred__25421.cljs$core$IFn$_invoke$arity$2 ? pred__25421.cljs$core$IFn$_invoke$arity$2(G__25426,G__25427) : pred__25421.call(null,G__25426,G__25427));
})())){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,G__25417,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25428 = cljs.core.cst$kw$base_DASH_href;
var G__25429 = expr__25422;
return (pred__25421.cljs$core$IFn$_invoke$arity$2 ? pred__25421.cljs$core$IFn$_invoke$arity$2(G__25428,G__25429) : pred__25421.call(null,G__25428,G__25429));
})())){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,G__25417,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25430 = cljs.core.cst$kw$app_DASH_db;
var G__25431 = expr__25422;
return (pred__25421.cljs$core$IFn$_invoke$arity$2 ? pred__25421.cljs$core$IFn$_invoke$arity$2(G__25430,G__25431) : pred__25421.call(null,G__25430,G__25431));
})())){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,G__25417,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__25417),null));
}
}
}
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$base_DASH_href,self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__25417){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,G__25417,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.app_state.history_router.HistoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes,cljs.core.cst$sym$routes_DASH_chan,cljs.core.cst$sym$base_DASH_href,cljs.core.cst$sym$app_DASH_db], null);
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$type = true;

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.__GT_HistoryRouter = (function keechma$app_state$history_router$__GT_HistoryRouter(routes,routes_chan,base_href,app_db){
return (new keechma.app_state.history_router.HistoryRouter(routes,routes_chan,base_href,app_db,null,null,null));
});

keechma.app_state.history_router.map__GT_HistoryRouter = (function keechma$app_state$history_router$map__GT_HistoryRouter(G__25419){
return (new keechma.app_state.history_router.HistoryRouter(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(G__25419),cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__25419),cljs.core.cst$kw$base_DASH_href.cljs$core$IFn$_invoke$arity$1(G__25419),cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__25419),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25419,cljs.core.cst$kw$routes,cljs.core.array_seq([cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$base_DASH_href,cljs.core.cst$kw$app_DASH_db], 0)),null));
});

keechma.app_state.history_router.constructor$ = (function keechma$app_state$history_router$constructor(routes,routes_chan,state){
var base_href = keechma.app_state.history_router.process_base_href((function (){var or__9992__auto__ = cljs.core.cst$kw$base_DASH_href.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "/";
}
})());
return keechma.app_state.core.start_BANG_(keechma.app_state.history_router.__GT_HistoryRouter(router.core.expand_routes(routes),routes_chan,base_href,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state)));
});
