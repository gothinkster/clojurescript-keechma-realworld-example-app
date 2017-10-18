// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('keechma.ui_component');
goog.require('keechma.controller_manager');
goog.require('keechma.controller');
goog.require('keechma.app_state.core');
goog.require('keechma.app_state.hashchange_router');
goog.require('keechma.app_state.react_native_router');
goog.require('keechma.app_state.history_router');
goog.require('cognitect.transit');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.AppState = (function (name,reporter,router,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns,__meta,__extmap,__hash){
this.name = name;
this.reporter = reporter;
this.router = router;
this.routes_chan = routes_chan;
this.commands_chan = commands_chan;
this.app_db = app_db;
this.subscriptions_cache = subscriptions_cache;
this.components = components;
this.controllers = controllers;
this.context = context;
this.html_element = html_element;
this.stop_fns = stop_fns;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k25954,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__25958 = k25954;
var G__25958__$1 = (((G__25958 instanceof cljs.core.Keyword))?G__25958.fqn:null);
switch (G__25958__$1) {
case "name":
return self__.name;

break;
case "reporter":
return self__.reporter;

break;
case "router":
return self__.router;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "commands-chan":
return self__.commands_chan;

break;
case "app-db":
return self__.app_db;

break;
case "subscriptions-cache":
return self__.subscriptions_cache;

break;
case "components":
return self__.components;

break;
case "controllers":
return self__.controllers;

break;
case "context":
return self__.context;

break;
case "html-element":
return self__.html_element;

break;
case "stop-fns":
return self__.stop_fns;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25954,else__12205__auto__);

}
});

keechma.app_state.AppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.app-state.AppState{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reporter,self__.reporter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$router,self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$commands_DASH_chan,self__.commands_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscriptions_DASH_cache,self__.subscriptions_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$components,self__.components],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$controllers,self__.controllers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$html_DASH_element,self__.html_element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stop_DASH_fns,self__.stop_fns],null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25953){
var self__ = this;
var G__25953__$1 = this;
return (new cljs.core.RecordIter((0),G__25953__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$reporter,cljs.core.cst$kw$router,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$subscriptions_DASH_cache,cljs.core.cst$kw$components,cljs.core.cst$kw$controllers,cljs.core.cst$kw$context,cljs.core.cst$kw$html_DASH_element,cljs.core.cst$kw$stop_DASH_fns], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.app_state.AppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.AppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__25959 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-113481389 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__25959(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.app_state.AppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25955,other25956){
var self__ = this;
var this25955__$1 = this;
return (!((other25956 == null))) && ((this25955__$1.constructor === other25956.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.name,other25956.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.reporter,other25956.reporter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.router,other25956.router)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.routes_chan,other25956.routes_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.commands_chan,other25956.commands_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.app_db,other25956.app_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.subscriptions_cache,other25956.subscriptions_cache)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.components,other25956.components)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.controllers,other25956.controllers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.context,other25956.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.html_element,other25956.html_element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.stop_fns,other25956.stop_fns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25955__$1.__extmap,other25956.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$controllers,null,cljs.core.cst$kw$router,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$subscriptions_DASH_cache,null,cljs.core.cst$kw$commands_DASH_chan,null,cljs.core.cst$kw$html_DASH_element,null,cljs.core.cst$kw$components,null,cljs.core.cst$kw$reporter,null,cljs.core.cst$kw$routes_DASH_chan,null,cljs.core.cst$kw$stop_DASH_fns,null,cljs.core.cst$kw$context,null,cljs.core.cst$kw$app_DASH_db,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.app_state.AppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__25953){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__25960 = cljs.core.keyword_identical_QMARK_;
var expr__25961 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__25963 = cljs.core.cst$kw$name;
var G__25964 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25963,G__25964) : pred__25960.call(null,G__25963,G__25964));
})())){
return (new keechma.app_state.AppState(G__25953,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25965 = cljs.core.cst$kw$reporter;
var G__25966 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25965,G__25966) : pred__25960.call(null,G__25965,G__25966));
})())){
return (new keechma.app_state.AppState(self__.name,G__25953,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25967 = cljs.core.cst$kw$router;
var G__25968 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25967,G__25968) : pred__25960.call(null,G__25967,G__25968));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,G__25953,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25969 = cljs.core.cst$kw$routes_DASH_chan;
var G__25970 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25969,G__25970) : pred__25960.call(null,G__25969,G__25970));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,G__25953,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25971 = cljs.core.cst$kw$commands_DASH_chan;
var G__25972 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25971,G__25972) : pred__25960.call(null,G__25971,G__25972));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,G__25953,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25973 = cljs.core.cst$kw$app_DASH_db;
var G__25974 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25973,G__25974) : pred__25960.call(null,G__25973,G__25974));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,G__25953,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25975 = cljs.core.cst$kw$subscriptions_DASH_cache;
var G__25976 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25975,G__25976) : pred__25960.call(null,G__25975,G__25976));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,G__25953,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25977 = cljs.core.cst$kw$components;
var G__25978 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25977,G__25978) : pred__25960.call(null,G__25977,G__25978));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,G__25953,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25979 = cljs.core.cst$kw$controllers;
var G__25980 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25979,G__25980) : pred__25960.call(null,G__25979,G__25980));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,G__25953,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25981 = cljs.core.cst$kw$context;
var G__25982 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25981,G__25982) : pred__25960.call(null,G__25981,G__25982));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,G__25953,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25983 = cljs.core.cst$kw$html_DASH_element;
var G__25984 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25983,G__25984) : pred__25960.call(null,G__25983,G__25984));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,G__25953,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25985 = cljs.core.cst$kw$stop_DASH_fns;
var G__25986 = expr__25961;
return (pred__25960.cljs$core$IFn$_invoke$arity$2 ? pred__25960.cljs$core$IFn$_invoke$arity$2(G__25985,G__25986) : pred__25960.call(null,G__25985,G__25986));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,G__25953,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__25953),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

keechma.app_state.AppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reporter,self__.reporter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$router,self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$commands_DASH_chan,self__.commands_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscriptions_DASH_cache,self__.subscriptions_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$components,self__.components],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$controllers,self__.controllers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$html_DASH_element,self__.html_element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stop_DASH_fns,self__.stop_fns],null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__25953){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,G__25953,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.app_state.AppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$reporter,cljs.core.cst$sym$router,cljs.core.cst$sym$routes_DASH_chan,cljs.core.cst$sym$commands_DASH_chan,cljs.core.cst$sym$app_DASH_db,cljs.core.cst$sym$subscriptions_DASH_cache,cljs.core.cst$sym$components,cljs.core.cst$sym$controllers,cljs.core.cst$sym$context,cljs.core.cst$sym$html_DASH_element,cljs.core.cst$sym$stop_DASH_fns], null);
});

keechma.app_state.AppState.cljs$lang$type = true;

keechma.app_state.AppState.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state/AppState");
});

keechma.app_state.AppState.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.app-state/AppState");
});

keechma.app_state.__GT_AppState = (function keechma$app_state$__GT_AppState(name,reporter,router__$1,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns){
return (new keechma.app_state.AppState(name,reporter,router__$1,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns,null,null,null));
});

keechma.app_state.map__GT_AppState = (function keechma$app_state$map__GT_AppState(G__25957){
return (new keechma.app_state.AppState(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$router.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$subscriptions_DASH_cache.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$controllers.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$html_DASH_element.cljs$core$IFn$_invoke$arity$1(G__25957),cljs.core.cst$kw$stop_DASH_fns.cljs$core$IFn$_invoke$arity$1(G__25957),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25957,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reporter,cljs.core.cst$kw$router,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$subscriptions_DASH_cache,cljs.core.cst$kw$components,cljs.core.cst$kw$controllers,cljs.core.cst$kw$context,cljs.core.cst$kw$html_DASH_element,cljs.core.cst$kw$stop_DASH_fns], 0))),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.SerializedAppState = (function (app_db,__meta,__extmap,__hash){
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k25989,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__25993 = k25989;
var G__25993__$1 = (((G__25993 instanceof cljs.core.Keyword))?G__25993.fqn:null);
switch (G__25993__$1) {
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25989,else__12205__auto__);

}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.app-state.SerializedAppState{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25988){
var self__ = this;
var G__25988__$1 = this;
return (new cljs.core.RecordIter((0),G__25988__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_DASH_db], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__25994 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-930208384 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__25994(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25990,other25991){
var self__ = this;
var this25990__$1 = this;
return (!((other25991 == null))) && ((this25990__$1.constructor === other25991.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25990__$1.app_db,other25991.app_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25990__$1.__extmap,other25991.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__25988){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__25995 = cljs.core.keyword_identical_QMARK_;
var expr__25996 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__25998 = cljs.core.cst$kw$app_DASH_db;
var G__25999 = expr__25996;
return (pred__25995.cljs$core$IFn$_invoke$arity$2 ? pred__25995.cljs$core$IFn$_invoke$arity$2(G__25998,G__25999) : pred__25995.call(null,G__25998,G__25999));
})())){
return (new keechma.app_state.SerializedAppState(G__25988,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__25988),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__25988){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,G__25988,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.app_state.SerializedAppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$app_DASH_db], null);
});

keechma.app_state.SerializedAppState.cljs$lang$type = true;

keechma.app_state.SerializedAppState.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state/SerializedAppState");
});

keechma.app_state.SerializedAppState.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.app-state/SerializedAppState");
});

keechma.app_state.__GT_SerializedAppState = (function keechma$app_state$__GT_SerializedAppState(app_db){
return (new keechma.app_state.SerializedAppState(app_db,null,null,null));
});

keechma.app_state.map__GT_SerializedAppState = (function keechma$app_state$map__GT_SerializedAppState(G__25992){
return (new keechma.app_state.SerializedAppState(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__25992),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25992,cljs.core.cst$kw$app_DASH_db)),null));
});

keechma.app_state.get_controller_types_set = (function keechma$app_state$get_controller_types_set(app_state){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.type,cljs.core.vals(cljs.core.cst$kw$controllers.cljs$core$IFn$_invoke$arity$1(app_state))));
});
keechma.app_state.prepare_for_serialization = (function keechma$app_state$prepare_for_serialization(var_args){
var G__26003 = arguments.length;
switch (G__26003) {
case 1:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(value,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY));
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2 = (function (value,controller_types){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.app_state.AppState,cljs.core.type(value))){
return keechma.app_state.__GT_SerializedAppState(keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(value)),keechma.app_state.get_controller_types_set(value)));
} else {
if(((!((value == null)))?((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IDeref$)))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,value))){
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(value),controller_types);
} else {
if(cljs.core.contains_QMARK_(controller_types,cljs.core.type(value))){
return keechma.controller.__GT_SerializedController(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(value));
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.app_state.SerializedAppState,cljs.core.type(value))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.controller.SerializedController,cljs.core.type(value)))){
return value;
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__26005){
var vec__26006 = p__26005;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26006,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(v,controller_types));
}),cljs.core.PersistentArrayMap.EMPTY,value);
} else {
if(cljs.core.vector_QMARK_(value)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26001_SHARP_){
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(p1__26001_SHARP_,controller_types);
}),value);
} else {
return value;

}
}
}
}
}
}
});

keechma.app_state.prepare_for_serialization.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {keechma.app_state.Object}
*/
keechma.app_state.ControllerWriteHandler = (function (){
});
keechma.app_state.ControllerWriteHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "controller";
});

keechma.app_state.ControllerWriteHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return ({"params": cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(v)});
});

keechma.app_state.ControllerWriteHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
});

keechma.app_state.ControllerWriteHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma.app_state.ControllerWriteHandler.cljs$lang$type = true;

keechma.app_state.ControllerWriteHandler.cljs$lang$ctorStr = "keechma.app-state/ControllerWriteHandler";

keechma.app_state.ControllerWriteHandler.cljs$lang$ctorPrWriter = (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"keechma.app-state/ControllerWriteHandler");
});

keechma.app_state.__GT_ControllerWriteHandler = (function keechma$app_state$__GT_ControllerWriteHandler(){
return (new keechma.app_state.ControllerWriteHandler());
});


/**
* @constructor
 * @implements {keechma.app_state.Object}
*/
keechma.app_state.AppStateWriteHandler = (function (){
});
keechma.app_state.AppStateWriteHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "app-state";
});

keechma.app_state.AppStateWriteHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return ({"appdb": cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(v)});
});

keechma.app_state.AppStateWriteHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
});

keechma.app_state.AppStateWriteHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma.app_state.AppStateWriteHandler.cljs$lang$type = true;

keechma.app_state.AppStateWriteHandler.cljs$lang$ctorStr = "keechma.app-state/AppStateWriteHandler";

keechma.app_state.AppStateWriteHandler.cljs$lang$ctorPrWriter = (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"keechma.app-state/AppStateWriteHandler");
});

keechma.app_state.__GT_AppStateWriteHandler = (function keechma$app_state$__GT_AppStateWriteHandler(){
return (new keechma.app_state.AppStateWriteHandler());
});

keechma.app_state.serialize_app_state = (function keechma$app_state$serialize_app_state(transit_writers,state){
var running_controllers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null));
var handlers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(transit_writers,keechma.app_state.SerializedAppState,(new keechma.app_state.AppStateWriteHandler()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keechma.controller.SerializedController,(new keechma.app_state.ControllerWriteHandler())], 0));
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null));
var prepared_state = keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1(state);
return cognitect.transit.write(writer,prepared_state);
});
keechma.app_state.deserialize_app_state = (function keechma$app_state$deserialize_app_state(transit_readers,serialized_state){
var handlers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(transit_readers,"controller",(function (data){
return keechma.controller.__GT_SerializedController(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"params"));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["app-state",(function (data){
return keechma.app_state.__GT_SerializedAppState(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"appdb"));
})], 0));
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null));
return cognitect.transit.read(reader,serialized_state);
});
keechma.app_state.app_db = (function keechma$app_state$app_db(initial_data){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$route,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$entity_DASH_db,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$kv,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$internal,cljs.core.PersistentArrayMap.EMPTY], null),initial_data], 0)));
});
keechma.app_state.default_config = (function keechma$app_state$default_config(initial_data){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$controllers,cljs.core.cst$kw$router,cljs.core.cst$kw$name,cljs.core.cst$kw$subscriptions_DASH_cache,cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$html_DASH_element,cljs.core.cst$kw$components,cljs.core.cst$kw$reporter,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$stop_DASH_fns,cljs.core.cst$kw$context,cljs.core.cst$kw$app_DASH_db],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hashchange,cljs.core.cst$kw$application,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),null,cljs.core.PersistentArrayMap.EMPTY,(function (app_name,type,direction,topic,name,payload,cmd_info,severity){
return null;
}),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keechma.app_state.app_db(initial_data)]);
});
keechma.app_state.process_config = (function keechma$app_state$process_config(config){
var name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(config),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("v"))], null);
var reporter = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(config),name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,cljs.core.cst$kw$name,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reporter,reporter], 0));
});
keechma.app_state.add_reporter_to_controllers = (function keechma$app_state$add_reporter_to_controllers(controllers,reporter){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$reporter,reporter));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_redirect_fn_to_controllers = (function keechma$app_state$add_redirect_fn_to_controllers(controllers,router__$1){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$redirect_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.app_state.core.redirect_BANG_,router__$1)));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_context_to_controllers = (function keechma$app_state$add_context_to_controllers(controllers,context){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$context,context));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_stop_fn = (function keechma$app_state$add_stop_fn(state,stop_fn){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$stop_DASH_fns,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop_DASH_fns.cljs$core$IFn$_invoke$arity$1(state),stop_fn));
});
keechma.app_state.start_selected_router_BANG_ = (function keechma$app_state$start_selected_router_BANG_(state,constructor$){
var routes = cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(state);
var routes_chan = cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(state);
var router__$1 = (constructor$.cljs$core$IFn$_invoke$arity$3 ? constructor$.cljs$core$IFn$_invoke$arity$3(routes,routes_chan,state) : constructor$.call(null,routes,routes_chan,state));
return keechma.app_state.add_stop_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$router,router__$1),((function (routes,routes_chan,router__$1){
return (function (s){
keechma.app_state.core.stop_BANG_(router__$1);

return s;
});})(routes,routes_chan,router__$1))
);
});
keechma.app_state.start_router_BANG_ = (function keechma$app_state$start_router_BANG_(state){
var router__$1 = cljs.core.cst$kw$router.cljs$core$IFn$_invoke$arity$1(state);
var G__26010 = router__$1;
var G__26010__$1 = (((G__26010 instanceof cljs.core.Keyword))?G__26010.fqn:null);
switch (G__26010__$1) {
case "hashchange":
return keechma.app_state.start_selected_router_BANG_(state,keechma.app_state.hashchange_router.constructor$);

break;
case "react-native":
return keechma.app_state.start_selected_router_BANG_(state,keechma.app_state.react_native_router.constructor$);

break;
case "history":
return keechma.app_state.start_selected_router_BANG_(state,keechma.app_state.history_router.constructor$);

break;
default:
return state;

}
});
keechma.app_state.resolve_main_component = (function keechma$app_state$resolve_main_component(state){
var router__$1 = cljs.core.cst$kw$router.cljs$core$IFn$_invoke$arity$1(state);
var current_route_reaction = reagent.ratom.make_reaction(((function (router__$1){
return (function (){
return cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state)));
});})(router__$1))
);
var resolved = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.ui_component.component__GT_renderer,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$reporter,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$component,cljs.core.cst$kw$out),cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$url_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.app_state.core.url,router__$1),cljs.core.cst$kw$redirect_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.app_state.core.redirect_BANG_,router__$1),cljs.core.cst$kw$current_DASH_route_DASH_fn,((function (router__$1,current_route_reaction){
return (function (){
return current_route_reaction;
});})(router__$1,current_route_reaction))
], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$main_DASH_component,(function (){var G__26012 = keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(state),(function (){var or__11514__auto__ = cljs.core.cst$kw$subscriptions.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return (resolved.cljs$core$IFn$_invoke$arity$1 ? resolved.cljs$core$IFn$_invoke$arity$1(G__26012) : resolved.call(null,G__26012));
})());
});
keechma.app_state.app_renderer = (function keechma$app_state$app_renderer(state){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta((function (){
var main_component = cljs.core.cst$kw$main_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var router__$1 = cljs.core.cst$kw$router.cljs$core$IFn$_invoke$arity$1(state);
var route_wrap_component = keechma.app_state.core.wrap_component(router__$1);
if(cljs.core.truth_(route_wrap_component)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(route_wrap_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$router_DASH_wrap], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_component], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_component], null);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(state)))].join('')], null))], null);
});
keechma.app_state.mount_to_element_BANG_ = (function keechma$app_state$mount_to_element_BANG_(state){
var main_component = cljs.core.cst$kw$main_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var container = cljs.core.cst$kw$html_DASH_element.cljs$core$IFn$_invoke$arity$1(state);
var G__26013_26015 = keechma.app_state.app_renderer(state);
var G__26014_26016 = container;
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26013_26015,G__26014_26016) : reagent.core.render_component.call(null,G__26013_26015,G__26014_26016));

return keechma.app_state.add_stop_fn(state,((function (main_component,container){
return (function (s){
return reagent.core.unmount_component_at_node(container);
});})(main_component,container))
);
});
keechma.app_state.start_controllers = (function keechma$app_state$start_controllers(state){
var router__$1 = cljs.core.cst$kw$router.cljs$core$IFn$_invoke$arity$1(state);
var reporter = cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(state);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(state);
var controllers = keechma.app_state.add_redirect_fn_to_controllers(keechma.app_state.add_reporter_to_controllers(keechma.app_state.add_context_to_controllers(cljs.core.cst$kw$controllers.cljs$core$IFn$_invoke$arity$1(state),context),reporter),router__$1);
var routes_chan = cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(state);
var commands_chan = cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(state);
var app_db = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state);
var manager = keechma.controller_manager.start(routes_chan,commands_chan,app_db,controllers,reporter);
return keechma.app_state.add_stop_fn(state,((function (router__$1,reporter,context,controllers,routes_chan,commands_chan,app_db,manager){
return (function (s){
var fexpr__26017_26018 = cljs.core.cst$kw$stop.cljs$core$IFn$_invoke$arity$1(manager);
(fexpr__26017_26018.cljs$core$IFn$_invoke$arity$0 ? fexpr__26017_26018.cljs$core$IFn$_invoke$arity$0() : fexpr__26017_26018.call(null));

return s;
});})(router__$1,reporter,context,controllers,routes_chan,commands_chan,app_db,manager))
);
});
keechma.app_state.add_sub_cache = (function keechma$app_state$add_sub_cache(cache,p__26019){
var vec__26020 = p__26019;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26020,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26020,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((function (vec__26020,key,sub){
return (function() { 
var G__26023__delegate = function (app_db_atom,args){
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,args], null));
if(cljs.core.truth_(cached)){
return cached;
} else {
var sub_reaction = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sub,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_atom], null),cljs.core.vec(args)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,args], null),sub_reaction);

return sub_reaction;
}
};
var G__26023 = function (app_db_atom,var_args){
var args = null;
if (arguments.length > 1) {
var G__26024__i = 0, G__26024__a = new Array(arguments.length -  1);
while (G__26024__i < G__26024__a.length) {G__26024__a[G__26024__i] = arguments[G__26024__i + 1]; ++G__26024__i;}
  args = new cljs.core.IndexedSeq(G__26024__a,0,null);
} 
return G__26023__delegate.call(this,app_db_atom,args);};
G__26023.cljs$lang$maxFixedArity = 1;
G__26023.cljs$lang$applyTo = (function (arglist__26025){
var app_db_atom = cljs.core.first(arglist__26025);
var args = cljs.core.rest(arglist__26025);
return G__26023__delegate(app_db_atom,args);
});
G__26023.cljs$core$IFn$_invoke$arity$variadic = G__26023__delegate;
return G__26023;
})()
;})(vec__26020,key,sub))
], null);
});
keechma.app_state.start_subs_cache = (function keechma$app_state$start_subs_cache(state){
var subscriptions = cljs.core.cst$kw$subscriptions.cljs$core$IFn$_invoke$arity$1(state);
var subs_cache = cljs.core.cst$kw$subscriptions_DASH_cache.cljs$core$IFn$_invoke$arity$1(state);
var cached_subscriptions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (subscriptions,subs_cache){
return (function (p1__26026_SHARP_){
return keechma.app_state.add_sub_cache(subs_cache,p1__26026_SHARP_);
});})(subscriptions,subs_cache))
,subscriptions));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$subscriptions,cached_subscriptions);
});
keechma.app_state.restore_app_db = (function keechma$app_state$restore_app_db(old_app,new_app){
var old_app_db = cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(old_app));
var new_app_db_atom = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(new_app);
return cljs.core.reset_BANG_(new_app_db_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(new_app_db_atom),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_app_db,cljs.core.cst$kw$internal),cljs.core.cst$kw$route)], 0)));
});
keechma.app_state.get_initial_data = (function keechma$app_state$get_initial_data(config){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.app_state.SerializedAppState,cljs.core.type(initial_data))){
return cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(initial_data);
} else {
if((initial_data == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return initial_data;

}
}
});
/**
 * Starts the application. It receives the application config `map` as the first argument.
 *   It receives `boolean` `should-mount?` as the second element. Default value for `should-mount?`
 *   is `true`.
 * 
 *   You can pass false to the `should-mount?` argument if you want to start the app,
 *   but you want to manually mount the application (for instance another app could manage mounting
 *   and unmounting). In that case you can get the main app component at the `:main-component` of the
 *   map returned from the `start!` function.
 * 
 *   Application config contains all the parts needed to run the application:
 * 
 *   - Route defintions
 *   - Controllers
 *   - UI subscriptions
 *   - UI components 
 *   - HTML element to which the component should be mounted
 *   - Routes chan (through which the route changes will be communicated)
 *   - Commands chan (through which the UI sends the commands to the controllers)
 * 
 *   `start!` function returns the updated config map which can be passed to the `stop!`
 *   function to stop the application.
 * 
 *   Example:
 * 
 *   ```clojure
 *   (def app-config {:controllers {:users (->users/Controller)}
 *                 :subscriptions {:user-list (fn [app-db-atom])}
 *                 :components {:main layout/component
 *                              :users users/component}
 *                 :html-element (.getElementById js/document "app")})
 *   ```
 * 
 *   If any of the params is missing, the defaults will be used.
 * 
 *   When the application is started, the following happens:
 * 
 *   1. Routes are expanded (converted to regexps, etc.)
 *   2. Application binds the listener the history change event
 *   3. Controller manager is started
 *   4. Application is (optionally) mounted into the DOM
 *   
 *   
 */
keechma.app_state.start_BANG_ = (function keechma$app_state$start_BANG_(var_args){
var G__26028 = arguments.length;
switch (G__26028) {
case 1:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2(config,true);
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (config,should_mount_QMARK_){
var initial_data = keechma.app_state.get_initial_data(config);
var config__$1 = keechma.app_state.map__GT_AppState(keechma.app_state.process_config(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keechma.app_state.default_config(initial_data),config], 0))));
var mount = (cljs.core.truth_(should_mount_QMARK_)?keechma.app_state.mount_to_element_BANG_:cljs.core.identity);
var G__26029 = keechma.app_state.resolve_main_component(keechma.app_state.start_controllers(keechma.app_state.start_router_BANG_(keechma.app_state.start_subs_cache(config__$1))));
return (mount.cljs$core$IFn$_invoke$arity$1 ? mount.cljs$core$IFn$_invoke$arity$1(G__26029) : mount.call(null,G__26029));
});

keechma.app_state.start_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Stops the application. `stop!` function receives the following as the arguments:
 * 
 *   - `config` - App config map returned from the `start!` function
 *   - `done` - An optional callback function that will be called when the application
 *   is stopped.
 * 
 *   Purpose of the `stop!` function is to completely clean up after the application. When the
 *   application is stopped, the following happens:
 * 
 *   1. History change event listener is unbound
 *   2. Controller manager and any running controllers are stopped
 *   3. Any channels used by the app (`routes-chan`, `commands-chan`,...) are closed
 *   4. Application is unmounted and removed from the DOM
 *   
 */
keechma.app_state.stop_BANG_ = (function keechma$app_state$stop_BANG_(var_args){
var G__26032 = arguments.length;
switch (G__26032) {
case 1:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2(config,(function (){
return null;
}));
});

keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (config,done){
var routes_chan = cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(config);
var commands_chan = cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(config);
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__,routes_chan,commands_chan){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__,routes_chan,commands_chan){
return (function (state_26078){
var state_val_26079 = (state_26078[(1)]);
if((state_val_26079 === (7))){
var inst_26052 = (state_26078[(7)]);
var inst_26054 = cljs.core.chunked_seq_QMARK_(inst_26052);
var state_26078__$1 = state_26078;
if(inst_26054){
var statearr_26083_26108 = state_26078__$1;
(statearr_26083_26108[(1)] = (10));

} else {
var statearr_26084_26109 = state_26078__$1;
(statearr_26084_26109[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (1))){
var inst_26037 = cljs.core.cst$kw$stop_DASH_fns.cljs$core$IFn$_invoke$arity$1(config);
var inst_26038 = cljs.core.seq(inst_26037);
var inst_26039 = inst_26038;
var inst_26040 = null;
var inst_26041 = (0);
var inst_26042 = (0);
var state_26078__$1 = (function (){var statearr_26085 = state_26078;
(statearr_26085[(8)] = inst_26040);

(statearr_26085[(9)] = inst_26039);

(statearr_26085[(10)] = inst_26041);

(statearr_26085[(11)] = inst_26042);

return statearr_26085;
})();
var statearr_26086_26110 = state_26078__$1;
(statearr_26086_26110[(2)] = null);

(statearr_26086_26110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (4))){
var inst_26040 = (state_26078[(8)]);
var inst_26039 = (state_26078[(9)]);
var inst_26041 = (state_26078[(10)]);
var inst_26042 = (state_26078[(11)]);
var inst_26047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26040,inst_26042);
var inst_26048 = (inst_26047.cljs$core$IFn$_invoke$arity$1 ? inst_26047.cljs$core$IFn$_invoke$arity$1(config) : inst_26047.call(null,config));
var inst_26049 = (inst_26042 + (1));
var tmp26080 = inst_26040;
var tmp26081 = inst_26039;
var tmp26082 = inst_26041;
var inst_26039__$1 = tmp26081;
var inst_26040__$1 = tmp26080;
var inst_26041__$1 = tmp26082;
var inst_26042__$1 = inst_26049;
var state_26078__$1 = (function (){var statearr_26087 = state_26078;
(statearr_26087[(8)] = inst_26040__$1);

(statearr_26087[(12)] = inst_26048);

(statearr_26087[(9)] = inst_26039__$1);

(statearr_26087[(10)] = inst_26041__$1);

(statearr_26087[(11)] = inst_26042__$1);

return statearr_26087;
})();
var statearr_26088_26111 = state_26078__$1;
(statearr_26088_26111[(2)] = null);

(statearr_26088_26111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (6))){
var inst_26071 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26089_26112 = state_26078__$1;
(statearr_26089_26112[(2)] = inst_26071);

(statearr_26089_26112[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (3))){
var inst_26073 = (state_26078[(2)]);
var inst_26074 = cljs.core.async.close_BANG_(commands_chan);
var inst_26075 = cljs.core.async.close_BANG_(routes_chan);
var inst_26076 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_26078__$1 = (function (){var statearr_26090 = state_26078;
(statearr_26090[(13)] = inst_26073);

(statearr_26090[(14)] = inst_26075);

(statearr_26090[(15)] = inst_26074);

return statearr_26090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26078__$1,inst_26076);
} else {
if((state_val_26079 === (12))){
var inst_26066 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26091_26113 = state_26078__$1;
(statearr_26091_26113[(2)] = inst_26066);

(statearr_26091_26113[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (2))){
var inst_26041 = (state_26078[(10)]);
var inst_26042 = (state_26078[(11)]);
var inst_26044 = (inst_26042 < inst_26041);
var inst_26045 = inst_26044;
var state_26078__$1 = state_26078;
if(cljs.core.truth_(inst_26045)){
var statearr_26092_26114 = state_26078__$1;
(statearr_26092_26114[(1)] = (4));

} else {
var statearr_26093_26115 = state_26078__$1;
(statearr_26093_26115[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (11))){
var inst_26052 = (state_26078[(7)]);
var inst_26061 = cljs.core.first(inst_26052);
var inst_26062 = (inst_26061.cljs$core$IFn$_invoke$arity$1 ? inst_26061.cljs$core$IFn$_invoke$arity$1(config) : inst_26061.call(null,config));
var inst_26063 = cljs.core.next(inst_26052);
var inst_26039 = inst_26063;
var inst_26040 = null;
var inst_26041 = (0);
var inst_26042 = (0);
var state_26078__$1 = (function (){var statearr_26094 = state_26078;
(statearr_26094[(8)] = inst_26040);

(statearr_26094[(9)] = inst_26039);

(statearr_26094[(10)] = inst_26041);

(statearr_26094[(16)] = inst_26062);

(statearr_26094[(11)] = inst_26042);

return statearr_26094;
})();
var statearr_26095_26116 = state_26078__$1;
(statearr_26095_26116[(2)] = null);

(statearr_26095_26116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (9))){
var inst_26069 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26096_26117 = state_26078__$1;
(statearr_26096_26117[(2)] = inst_26069);

(statearr_26096_26117[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (5))){
var inst_26039 = (state_26078[(9)]);
var inst_26052 = (state_26078[(7)]);
var inst_26052__$1 = cljs.core.seq(inst_26039);
var state_26078__$1 = (function (){var statearr_26097 = state_26078;
(statearr_26097[(7)] = inst_26052__$1);

return statearr_26097;
})();
if(inst_26052__$1){
var statearr_26098_26118 = state_26078__$1;
(statearr_26098_26118[(1)] = (7));

} else {
var statearr_26099_26119 = state_26078__$1;
(statearr_26099_26119[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (10))){
var inst_26052 = (state_26078[(7)]);
var inst_26056 = cljs.core.chunk_first(inst_26052);
var inst_26057 = cljs.core.chunk_rest(inst_26052);
var inst_26058 = cljs.core.count(inst_26056);
var inst_26039 = inst_26057;
var inst_26040 = inst_26056;
var inst_26041 = inst_26058;
var inst_26042 = (0);
var state_26078__$1 = (function (){var statearr_26100 = state_26078;
(statearr_26100[(8)] = inst_26040);

(statearr_26100[(9)] = inst_26039);

(statearr_26100[(10)] = inst_26041);

(statearr_26100[(11)] = inst_26042);

return statearr_26100;
})();
var statearr_26101_26120 = state_26078__$1;
(statearr_26101_26120[(2)] = null);

(statearr_26101_26120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26079 === (8))){
var state_26078__$1 = state_26078;
var statearr_26102_26121 = state_26078__$1;
(statearr_26102_26121[(2)] = null);

(statearr_26102_26121[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19193__auto__,routes_chan,commands_chan))
;
return ((function (switch__19091__auto__,c__19193__auto__,routes_chan,commands_chan){
return (function() {
var keechma$app_state$state_machine__19092__auto__ = null;
var keechma$app_state$state_machine__19092__auto____0 = (function (){
var statearr_26103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26103[(0)] = keechma$app_state$state_machine__19092__auto__);

(statearr_26103[(1)] = (1));

return statearr_26103;
});
var keechma$app_state$state_machine__19092__auto____1 = (function (state_26078){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_26078);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e26104){if((e26104 instanceof Object)){
var ex__19095__auto__ = e26104;
var statearr_26105_26122 = state_26078;
(statearr_26105_26122[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26078);

return cljs.core.cst$kw$recur;
} else {
throw e26104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__26123 = state_26078;
state_26078 = G__26123;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$app_state$state_machine__19092__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return keechma$app_state$state_machine__19092__auto____0.call(this);
case 1:
return keechma$app_state$state_machine__19092__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$app_state$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$app_state$state_machine__19092__auto____0;
keechma$app_state$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$app_state$state_machine__19092__auto____1;
return keechma$app_state$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__,routes_chan,commands_chan))
})();
var state__19195__auto__ = (function (){var statearr_26106 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_26106[(6)] = c__19193__auto__);

return statearr_26106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__,routes_chan,commands_chan))
);

return c__19193__auto__;
});

keechma.app_state.stop_BANG_.cljs$lang$maxFixedArity = 2;

