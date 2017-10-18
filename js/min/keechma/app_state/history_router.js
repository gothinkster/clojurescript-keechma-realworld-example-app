// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state.history_router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
keechma.app_state.history_router.make_urlchange_dispatcher = (function keechma$app_state$history_router$make_urlchange_dispatcher(){
var handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var main_handler = ((function (handlers){
return (function (_){
var seq__25222 = cljs.core.seq(cljs.core.deref(handlers));
var chunk__25223 = null;
var count__25224 = (0);
var i__25225 = (0);
while(true){
if((i__25225 < count__25224)){
var h = chunk__25223.cljs$core$IIndexed$_nth$arity$2(null,i__25225);
var G__25226_25232 = location.href;
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__25226_25232) : h.call(null,G__25226_25232));

var G__25233 = seq__25222;
var G__25234 = chunk__25223;
var G__25235 = count__25224;
var G__25236 = (i__25225 + (1));
seq__25222 = G__25233;
chunk__25223 = G__25234;
count__25224 = G__25235;
i__25225 = G__25236;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25222);
if(temp__5278__auto__){
var seq__25222__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25222__$1)){
var c__12440__auto__ = cljs.core.chunk_first(seq__25222__$1);
var G__25237 = cljs.core.chunk_rest(seq__25222__$1);
var G__25238 = c__12440__auto__;
var G__25239 = cljs.core.count(c__12440__auto__);
var G__25240 = (0);
seq__25222 = G__25237;
chunk__25223 = G__25238;
count__25224 = G__25239;
i__25225 = G__25240;
continue;
} else {
var h = cljs.core.first(seq__25222__$1);
var G__25227_25241 = location.href;
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__25227_25241) : h.call(null,G__25227_25241));

var G__25242 = cljs.core.next(seq__25222__$1);
var G__25243 = null;
var G__25244 = (0);
var G__25245 = (0);
seq__25222 = G__25242;
chunk__25223 = G__25243;
count__25224 = G__25244;
i__25225 = G__25245;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(handlers)))){
return window.addEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler))
;
var unbind_main_handler = ((function (handlers,main_handler,bind_main_handler){
return (function (){
if((cljs.core.count(cljs.core.deref(handlers)) === (0))){
return window.removeEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler,bind_main_handler))
;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$handlers_DASH_count,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (){
return cljs.core.count(cljs.core.deref(handlers));
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
return (function (p1__25221_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(handler,p1__25221_SHARP_);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,h);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
);

return unbind_main_handler();
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,cljs.core.cst$kw$go,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (href){
history.pushState(null,"",href);

var seq__25228 = cljs.core.seq(cljs.core.deref(handlers));
var chunk__25229 = null;
var count__25230 = (0);
var i__25231 = (0);
while(true){
if((i__25231 < count__25230)){
var h = chunk__25229.cljs$core$IIndexed$_nth$arity$2(null,i__25231);
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(href) : h.call(null,href));

var G__25246 = seq__25228;
var G__25247 = chunk__25229;
var G__25248 = count__25230;
var G__25249 = (i__25231 + (1));
seq__25228 = G__25246;
chunk__25229 = G__25247;
count__25230 = G__25248;
i__25231 = G__25249;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25228);
if(temp__5278__auto__){
var seq__25228__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25228__$1)){
var c__12440__auto__ = cljs.core.chunk_first(seq__25228__$1);
var G__25250 = cljs.core.chunk_rest(seq__25228__$1);
var G__25251 = c__12440__auto__;
var G__25252 = cljs.core.count(c__12440__auto__);
var G__25253 = (0);
seq__25228 = G__25250;
chunk__25229 = G__25251;
count__25230 = G__25252;
i__25231 = G__25253;
continue;
} else {
var h = cljs.core.first(seq__25228__$1);
(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(href) : h.call(null,href));

var G__25254 = cljs.core.next(seq__25228__$1);
var G__25255 = null;
var G__25256 = (0);
var G__25257 = (0);
seq__25228 = G__25254;
chunk__25229 = G__25255;
count__25230 = G__25256;
i__25231 = G__25257;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
});
keechma.app_state.history_router.route_url = (function keechma$app_state$history_router$route_url(url,base_href){
var prefix = keechma.app_state.history_router.url_prefix(base_href);
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(url,cljs.core.count(prefix),cljs.core.count(url)),/#/));
});
keechma.app_state.history_router.link_QMARK_ = (function keechma$app_state$history_router$link_QMARK_(el){
var and__11502__auto__ = el.href;
if(cljs.core.truth_(and__11502__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",clojure.string.lower_case(el.tagName));
} else {
return and__11502__auto__;
}
});
keechma.app_state.history_router.link_el = (function keechma$app_state$history_router$link_el(el){
var current_el = el;
while(true){
if(cljs.core.truth_(keechma.app_state.history_router.link_QMARK_(current_el))){
return current_el;
} else {
var temp__5278__auto__ = current_el.parentNode;
if(cljs.core.truth_(temp__5278__auto__)){
var parent = temp__5278__auto__;
var G__25258 = parent;
current_el = G__25258;
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
var or__11514__auto__ = e.altKey;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
var or__11514__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__11514__auto____$1)){
return or__11514__auto____$1;
} else {
var or__11514__auto____$2 = e.ctrlKey;
if(cljs.core.truth_(or__11514__auto____$2)){
return or__11514__auto____$2;
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
var vec__25259 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(location.href,/#/);
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25259,(0),null);
var current_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25259,(1),null);
var vec__25262 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(href,/#/);
var next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25262,(0),null);
var next_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25262,(1),null);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,next)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_hash,next_hash));
});
keechma.app_state.history_router.make_url = (function keechma$app_state$history_router$make_url(routes,base_href,params){
var hash = location.hash;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url(routes,params)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
});
keechma.app_state.history_router.add_trailing_slash = (function keechma$app_state$history_router$add_trailing_slash(base_href){
if(clojure.string.ends_with_QMARK_(base_href,"/")){
return base_href;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
}
});
keechma.app_state.history_router.add_leading_slash = (function keechma$app_state$history_router$add_leading_slash(base_href){
if(clojure.string.starts_with_QMARK_(base_href,"/")){
return base_href;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
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
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k25266,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__25270 = k25266;
var G__25270__$1 = (((G__25270 instanceof cljs.core.Keyword))?G__25270.fqn:null);
switch (G__25270__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25266,else__12205__auto__);

}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.app-state.history-router.HistoryRouter{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$base_DASH_href,self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25265){
var self__ = this;
var G__25265__$1 = this;
return (new cljs.core.RecordIter((0),G__25265__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$base_DASH_href,cljs.core.cst$kw$app_DASH_db], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = ((function (this$__$1){
return (function (href){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.routes_chan,router.core.url__GT_map(self__.routes,keechma.app_state.history_router.route_url(href,self__.base_href)));
});})(this$__$1))
;
var fexpr__25271_25290 = cljs.core.cst$kw$bind.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher);
(fexpr__25271_25290.cljs$core$IFn$_invoke$arity$1 ? fexpr__25271_25290.cljs$core$IFn$_invoke$arity$1(handler) : fexpr__25271_25290.call(null,handler));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_db,cljs.core.assoc,cljs.core.cst$kw$route,router.core.url__GT_map(self__.routes,keechma.app_state.history_router.route_url(location.href,self__.base_href)));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$urlchange_DASH_handler,handler);
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__25273 = cljs.core.cst$kw$urlchange_DASH_handler.cljs$core$IFn$_invoke$arity$1(this$__$1);
var fexpr__25272 = cljs.core.cst$kw$unbind.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher);
return (fexpr__25272.cljs$core$IFn$_invoke$arity$1 ? fexpr__25272.cljs$core$IFn$_invoke$arity$1(G__25273) : fexpr__25272.call(null,G__25273));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var G__25275 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.make_url(self__.routes,self__.base_href,params))].join('');
var fexpr__25274 = cljs.core.cst$kw$go.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher);
return (fexpr__25274.cljs$core$IFn$_invoke$arity$1 ? fexpr__25274.cljs$core$IFn$_invoke$arity$1(G__25275) : fexpr__25274.call(null,G__25275));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var click_handler = ((function (this$__$1){
return (function (e){
var temp__5278__auto__ = keechma.app_state.history_router.link_el(e.target);
if(cljs.core.truth_(temp__5278__auto__)){
var el = temp__5278__auto__;
var href = el.href;
if(cljs.core.truth_((function (){var and__11502__auto__ = keechma.app_state.history_router.current_target_self_QMARK_(el);
if(cljs.core.truth_(and__11502__auto__)){
var and__11502__auto____$1 = keechma.app_state.history_router.left_button_clicked_QMARK_(e);
if(cljs.core.truth_(and__11502__auto____$1)){
var and__11502__auto____$2 = cljs.core.not(keechma.app_state.history_router.mod_key_pressed_QMARK_(e));
if(and__11502__auto____$2){
return keechma.app_state.history_router.link_has_prefixed_url_QMARK_(el,self__.base_href);
} else {
return and__11502__auto____$2;
}
} else {
return and__11502__auto____$1;
}
} else {
return and__11502__auto__;
}
})())){
if(cljs.core.truth_(keechma.app_state.history_router.should_href_pass_through_QMARK_(href))){
return null;
} else {
var fexpr__25276_25291 = cljs.core.cst$kw$go.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher);
(fexpr__25276_25291.cljs$core$IFn$_invoke$arity$1 ? fexpr__25276_25291.cljs$core$IFn$_invoke$arity$1(href) : fexpr__25276_25291.call(null,href));

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
var G__25292__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,click_handler], null)], null),children);
};
var G__25292 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__25293__i = 0, G__25293__a = new Array(arguments.length -  0);
while (G__25293__i < G__25293__a.length) {G__25293__a[G__25293__i] = arguments[G__25293__i + 0]; ++G__25293__i;}
  children = new cljs.core.IndexedSeq(G__25293__a,0,null);
} 
return G__25292__delegate.call(this,children);};
G__25292.cljs$lang$maxFixedArity = 0;
G__25292.cljs$lang$applyTo = (function (arglist__25294){
var children = cljs.core.seq(arglist__25294);
return G__25292__delegate(children);
});
G__25292.cljs$core$IFn$_invoke$arity$variadic = G__25292__delegate;
return G__25292;
})()
;
;})(click_handler,this$__$1))
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.history_router.make_url(self__.routes,self__.base_href,params);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__25277 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-402337099 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__25277(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25267,other25268){
var self__ = this;
var this25267__$1 = this;
return (!((other25268 == null))) && ((this25267__$1.constructor === other25268.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25267__$1.routes,other25268.routes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25267__$1.routes_chan,other25268.routes_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25267__$1.base_href,other25268.base_href)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25267__$1.app_db,other25268.app_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25267__$1.__extmap,other25268.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$routes,null,cljs.core.cst$kw$routes_DASH_chan,null,cljs.core.cst$kw$base_DASH_href,null,cljs.core.cst$kw$app_DASH_db,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__25265){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__25278 = cljs.core.keyword_identical_QMARK_;
var expr__25279 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__25281 = cljs.core.cst$kw$routes;
var G__25282 = expr__25279;
return (pred__25278.cljs$core$IFn$_invoke$arity$2 ? pred__25278.cljs$core$IFn$_invoke$arity$2(G__25281,G__25282) : pred__25278.call(null,G__25281,G__25282));
})())){
return (new keechma.app_state.history_router.HistoryRouter(G__25265,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25283 = cljs.core.cst$kw$routes_DASH_chan;
var G__25284 = expr__25279;
return (pred__25278.cljs$core$IFn$_invoke$arity$2 ? pred__25278.cljs$core$IFn$_invoke$arity$2(G__25283,G__25284) : pred__25278.call(null,G__25283,G__25284));
})())){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,G__25265,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25285 = cljs.core.cst$kw$base_DASH_href;
var G__25286 = expr__25279;
return (pred__25278.cljs$core$IFn$_invoke$arity$2 ? pred__25278.cljs$core$IFn$_invoke$arity$2(G__25285,G__25286) : pred__25278.call(null,G__25285,G__25286));
})())){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,G__25265,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25287 = cljs.core.cst$kw$app_DASH_db;
var G__25288 = expr__25279;
return (pred__25278.cljs$core$IFn$_invoke$arity$2 ? pred__25278.cljs$core$IFn$_invoke$arity$2(G__25287,G__25288) : pred__25278.call(null,G__25287,G__25288));
})())){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,G__25265,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__25265),null));
}
}
}
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$base_DASH_href,self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__25265){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,G__25265,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.app_state.history_router.HistoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes,cljs.core.cst$sym$routes_DASH_chan,cljs.core.cst$sym$base_DASH_href,cljs.core.cst$sym$app_DASH_db], null);
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$type = true;

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.app-state.history-router/HistoryRouter");
});

keechma.app_state.history_router.__GT_HistoryRouter = (function keechma$app_state$history_router$__GT_HistoryRouter(routes,routes_chan,base_href,app_db){
return (new keechma.app_state.history_router.HistoryRouter(routes,routes_chan,base_href,app_db,null,null,null));
});

keechma.app_state.history_router.map__GT_HistoryRouter = (function keechma$app_state$history_router$map__GT_HistoryRouter(G__25269){
return (new keechma.app_state.history_router.HistoryRouter(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(G__25269),cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__25269),cljs.core.cst$kw$base_DASH_href.cljs$core$IFn$_invoke$arity$1(G__25269),cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__25269),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25269,cljs.core.cst$kw$routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$base_DASH_href,cljs.core.cst$kw$app_DASH_db], 0))),null));
});

keechma.app_state.history_router.constructor$ = (function keechma$app_state$history_router$constructor(routes,routes_chan,state){
var base_href = keechma.app_state.history_router.process_base_href((function (){var or__11514__auto__ = cljs.core.cst$kw$base_DASH_href.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "/";
}
})());
return keechma.app_state.core.start_BANG_(keechma.app_state.history_router.__GT_HistoryRouter(router.core.expand_routes(routes),routes_chan,base_href,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state)));
});
