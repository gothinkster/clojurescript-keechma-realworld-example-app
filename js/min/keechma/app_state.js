// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('reagent.core');
goog.require('keechma.ui_component');
goog.require('keechma.controller');
goog.require('keechma.app_state.history_router');
goog.require('keechma.app_state.core');
goog.require('cljs.core.async');
goog.require('keechma.controller_manager');
goog.require('keechma.app_state.react_native_router');
goog.require('keechma.app_state.hashchange_router');

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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k26423,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__26425 = (((k26423 instanceof cljs.core.Keyword))?k26423.fqn:null);
switch (G__26425) {
case "controllers":
return self__.controllers;

break;
case "router":
return self__.router;

break;
case "name":
return self__.name;

break;
case "subscriptions-cache":
return self__.subscriptions_cache;

break;
case "commands-chan":
return self__.commands_chan;

break;
case "html-element":
return self__.html_element;

break;
case "components":
return self__.components;

break;
case "reporter":
return self__.reporter;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "stop-fns":
return self__.stop_fns;

break;
case "context":
return self__.context;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26423,else__10665__auto__);

}
});

keechma.app_state.AppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.app-state.AppState{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reporter,self__.reporter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$router,self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$commands_DASH_chan,self__.commands_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscriptions_DASH_cache,self__.subscriptions_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$components,self__.components],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$controllers,self__.controllers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$html_DASH_element,self__.html_element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stop_DASH_fns,self__.stop_fns],null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IIterable$ = true;

keechma.app_state.AppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26422){
var self__ = this;
var G__26422__$1 = this;
return (new cljs.core.RecordIter((0),G__26422__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$reporter,cljs.core.cst$kw$router,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$subscriptions_DASH_cache,cljs.core.cst$kw$components,cljs.core.cst$kw$controllers,cljs.core.cst$kw$context,cljs.core.cst$kw$html_DASH_element,cljs.core.cst$kw$stop_DASH_fns], null),cljs.core._iterator(self__.__extmap)));
});

keechma.app_state.AppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.AppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.app_state.AppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.app_state.AppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$controllers,null,cljs.core.cst$kw$router,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$subscriptions_DASH_cache,null,cljs.core.cst$kw$commands_DASH_chan,null,cljs.core.cst$kw$html_DASH_element,null,cljs.core.cst$kw$components,null,cljs.core.cst$kw$reporter,null,cljs.core.cst$kw$routes_DASH_chan,null,cljs.core.cst$kw$stop_DASH_fns,null,cljs.core.cst$kw$context,null,cljs.core.cst$kw$app_DASH_db,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.app_state.AppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__26422){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__26426 = cljs.core.keyword_identical_QMARK_;
var expr__26427 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__26429 = cljs.core.cst$kw$name;
var G__26430 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26429,G__26430) : pred__26426.call(null,G__26429,G__26430));
})())){
return (new keechma.app_state.AppState(G__26422,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26431 = cljs.core.cst$kw$reporter;
var G__26432 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26431,G__26432) : pred__26426.call(null,G__26431,G__26432));
})())){
return (new keechma.app_state.AppState(self__.name,G__26422,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26433 = cljs.core.cst$kw$router;
var G__26434 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26433,G__26434) : pred__26426.call(null,G__26433,G__26434));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,G__26422,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26435 = cljs.core.cst$kw$routes_DASH_chan;
var G__26436 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26435,G__26436) : pred__26426.call(null,G__26435,G__26436));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,G__26422,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26437 = cljs.core.cst$kw$commands_DASH_chan;
var G__26438 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26437,G__26438) : pred__26426.call(null,G__26437,G__26438));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,G__26422,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26439 = cljs.core.cst$kw$app_DASH_db;
var G__26440 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26439,G__26440) : pred__26426.call(null,G__26439,G__26440));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,G__26422,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26441 = cljs.core.cst$kw$subscriptions_DASH_cache;
var G__26442 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26441,G__26442) : pred__26426.call(null,G__26441,G__26442));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,G__26422,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26443 = cljs.core.cst$kw$components;
var G__26444 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26443,G__26444) : pred__26426.call(null,G__26443,G__26444));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,G__26422,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26445 = cljs.core.cst$kw$controllers;
var G__26446 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26445,G__26446) : pred__26426.call(null,G__26445,G__26446));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,G__26422,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26447 = cljs.core.cst$kw$context;
var G__26448 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26447,G__26448) : pred__26426.call(null,G__26447,G__26448));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,G__26422,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26449 = cljs.core.cst$kw$html_DASH_element;
var G__26450 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26449,G__26450) : pred__26426.call(null,G__26449,G__26450));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,G__26422,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26451 = cljs.core.cst$kw$stop_DASH_fns;
var G__26452 = expr__26427;
return (pred__26426.cljs$core$IFn$_invoke$arity$2 ? pred__26426.cljs$core$IFn$_invoke$arity$2(G__26451,G__26452) : pred__26426.call(null,G__26451,G__26452));
})())){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,G__26422,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__26422),null));
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

keechma.app_state.AppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reporter,self__.reporter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$router,self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$commands_DASH_chan,self__.commands_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$subscriptions_DASH_cache,self__.subscriptions_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$components,self__.components],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$controllers,self__.controllers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$context,self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$html_DASH_element,self__.html_element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$stop_DASH_fns,self__.stop_fns],null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__26422){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,G__26422,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.app_state.AppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$reporter,cljs.core.cst$sym$router,cljs.core.cst$sym$routes_DASH_chan,cljs.core.cst$sym$commands_DASH_chan,cljs.core.cst$sym$app_DASH_db,cljs.core.cst$sym$subscriptions_DASH_cache,cljs.core.cst$sym$components,cljs.core.cst$sym$controllers,cljs.core.cst$sym$context,cljs.core.cst$sym$html_DASH_element,cljs.core.cst$sym$stop_DASH_fns], null);
});

keechma.app_state.AppState.cljs$lang$type = true;

keechma.app_state.AppState.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state/AppState");
});

keechma.app_state.AppState.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.app-state/AppState");
});

keechma.app_state.__GT_AppState = (function keechma$app_state$__GT_AppState(name,reporter,router__$1,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns){
return (new keechma.app_state.AppState(name,reporter,router__$1,routes_chan,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns,null,null,null));
});

keechma.app_state.map__GT_AppState = (function keechma$app_state$map__GT_AppState(G__26424){
return (new keechma.app_state.AppState(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$router.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$subscriptions_DASH_cache.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$controllers.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$html_DASH_element.cljs$core$IFn$_invoke$arity$1(G__26424),cljs.core.cst$kw$stop_DASH_fns.cljs$core$IFn$_invoke$arity$1(G__26424),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26424,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$reporter,cljs.core.cst$kw$router,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$subscriptions_DASH_cache,cljs.core.cst$kw$components,cljs.core.cst$kw$controllers,cljs.core.cst$kw$context,cljs.core.cst$kw$html_DASH_element,cljs.core.cst$kw$stop_DASH_fns], 0)),null));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k26455,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__26457 = (((k26455 instanceof cljs.core.Keyword))?k26455.fqn:null);
switch (G__26457) {
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26455,else__10665__auto__);

}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.app-state.SerializedAppState{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IIterable$ = true;

keechma.app_state.SerializedAppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26454){
var self__ = this;
var G__26454__$1 = this;
return (new cljs.core.RecordIter((0),G__26454__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app_DASH_db], null),cljs.core._iterator(self__.__extmap)));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.app_state.SerializedAppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.app_state.SerializedAppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__26454){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__26458 = cljs.core.keyword_identical_QMARK_;
var expr__26459 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__26461 = cljs.core.cst$kw$app_DASH_db;
var G__26462 = expr__26459;
return (pred__26458.cljs$core$IFn$_invoke$arity$2 ? pred__26458.cljs$core$IFn$_invoke$arity$2(G__26461,G__26462) : pred__26458.call(null,G__26461,G__26462));
})())){
return (new keechma.app_state.SerializedAppState(G__26454,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__26454),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__26454){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,G__26454,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.app_state.SerializedAppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$app_DASH_db], null);
});

keechma.app_state.SerializedAppState.cljs$lang$type = true;

keechma.app_state.SerializedAppState.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state/SerializedAppState");
});

keechma.app_state.SerializedAppState.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.app-state/SerializedAppState");
});

keechma.app_state.__GT_SerializedAppState = (function keechma$app_state$__GT_SerializedAppState(app_db){
return (new keechma.app_state.SerializedAppState(app_db,null,null,null));
});

keechma.app_state.map__GT_SerializedAppState = (function keechma$app_state$map__GT_SerializedAppState(G__26456){
return (new keechma.app_state.SerializedAppState(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__26456),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26456,cljs.core.cst$kw$app_DASH_db),null));
});

keechma.app_state.get_controller_types_set = (function keechma$app_state$get_controller_types_set(app_state){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.type,cljs.core.vals(cljs.core.cst$kw$controllers.cljs$core$IFn$_invoke$arity$1(app_state))));
});
keechma.app_state.prepare_for_serialization = (function keechma$app_state$prepare_for_serialization(var_args){
var args26465 = [];
var len__11171__auto___26474 = arguments.length;
var i__11172__auto___26475 = (0);
while(true){
if((i__11172__auto___26475 < len__11171__auto___26474)){
args26465.push((arguments[i__11172__auto___26475]));

var G__26476 = (i__11172__auto___26475 + (1));
i__11172__auto___26475 = G__26476;
continue;
} else {
}
break;
}

var G__26467 = args26465.length;
switch (G__26467) {
case 1:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26465.length)].join('')));

}
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(value,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY));
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2 = (function (value,controller_types){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.app_state.AppState,cljs.core.type(value))){
return keechma.app_state.__GT_SerializedAppState(keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2((function (){var G__26468 = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(value);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26468) : cljs.core.deref.call(null,G__26468));
})(),keechma.app_state.get_controller_types_set(value)));
} else {
if(((!((value == null)))?((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || (value.cljs$core$IDeref$))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,value))){
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value)),controller_types);
} else {
if(cljs.core.contains_QMARK_(controller_types,cljs.core.type(value))){
return keechma.controller.__GT_SerializedController(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(value));
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.app_state.SerializedAppState,cljs.core.type(value))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keechma.controller.SerializedController,cljs.core.type(value)))){
return value;
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__26470){
var vec__26471 = p__26470;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(v,controller_types));
}),cljs.core.PersistentArrayMap.EMPTY,value);
} else {
if(cljs.core.vector_QMARK_(value)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26464_SHARP_){
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2(p1__26464_SHARP_,controller_types);
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
})
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

keechma.app_state.ControllerWriteHandler.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"keechma.app-state/ControllerWriteHandler");
});

keechma.app_state.__GT_ControllerWriteHandler = (function keechma$app_state$__GT_ControllerWriteHandler(){
return (new keechma.app_state.ControllerWriteHandler());
});


/**
* @constructor
 * @implements {keechma.app_state.Object}
*/
keechma.app_state.AppStateWriteHandler = (function (){
})
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

keechma.app_state.AppStateWriteHandler.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"keechma.app-state/AppStateWriteHandler");
});

keechma.app_state.__GT_AppStateWriteHandler = (function keechma$app_state$__GT_AppStateWriteHandler(){
return (new keechma.app_state.AppStateWriteHandler());
});

keechma.app_state.serialize_app_state = (function keechma$app_state$serialize_app_state(transit_writers,state){
var running_controllers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__26479 = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26479) : cljs.core.deref.call(null,G__26479));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal,cljs.core.cst$kw$running_DASH_controllers], null));
var handlers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(transit_writers,keechma.app_state.SerializedAppState,(new keechma.app_state.AppStateWriteHandler()),cljs.core.array_seq([keechma.controller.SerializedController,(new keechma.app_state.ControllerWriteHandler())], 0));
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null));
var prepared_state = keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1(state);
return cognitect.transit.write(writer,prepared_state);
});
keechma.app_state.deserialize_app_state = (function keechma$app_state$deserialize_app_state(transit_readers,serialized_state){
var handlers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(transit_readers,"controller",(function (data){
return keechma.controller.__GT_SerializedController(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"params"));
}),cljs.core.array_seq(["app-state",(function (data){
return keechma.app_state.__GT_SerializedAppState(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"appdb"));
})], 0));
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null));
return cognitect.transit.read(reader,serialized_state);
});
keechma.app_state.app_db = (function keechma$app_state$app_db(initial_data){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$route,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$entity_DASH_db,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$kv,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$internal,cljs.core.PersistentArrayMap.EMPTY], null),initial_data], 0)));
});
keechma.app_state.default_config = (function keechma$app_state$default_config(initial_data){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$controllers,cljs.core.cst$kw$router,cljs.core.cst$kw$name,cljs.core.cst$kw$subscriptions_DASH_cache,cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$html_DASH_element,cljs.core.cst$kw$components,cljs.core.cst$kw$reporter,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$stop_DASH_fns,cljs.core.cst$kw$context,cljs.core.cst$kw$app_DASH_db],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hashchange,cljs.core.cst$kw$application,(function (){var G__26481 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26481) : cljs.core.atom.call(null,G__26481));
})(),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),null,cljs.core.PersistentArrayMap.EMPTY,(function (app_name,type,direction,topic,name,payload,severity){
return null;
}),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keechma.app_state.app_db(initial_data)]);
});
keechma.app_state.process_config = (function keechma$app_state$process_config(config){
var name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(config),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("v"))], null);
var reporter = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(config),name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,cljs.core.cst$kw$name,name,cljs.core.array_seq([cljs.core.cst$kw$reporter,reporter], 0));
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
var G__26483 = (((router__$1 instanceof cljs.core.Keyword))?router__$1.fqn:null);
switch (G__26483) {
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
return cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1((function (){var G__26487 = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26487) : cljs.core.deref.call(null,G__26487));
})());
});})(router__$1))
);
var resolved = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.ui_component.component__GT_renderer,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$commands_DASH_chan,cljs.core.cst$kw$commands_DASH_chan.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$reporter,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$component,cljs.core.cst$kw$out),cljs.core.cst$kw$app_DASH_db,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$url_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.app_state.core.url,router__$1),cljs.core.cst$kw$redirect_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.app_state.core.redirect_BANG_,router__$1),cljs.core.cst$kw$current_DASH_route_DASH_fn,((function (router__$1,current_route_reaction){
return (function (){
return current_route_reaction;
});})(router__$1,current_route_reaction))
], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$main_DASH_component,(function (){var G__26488 = keechma.ui_component.system.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$components.cljs$core$IFn$_invoke$arity$1(state),(function (){var or__9992__auto__ = cljs.core.cst$kw$subscriptions.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return (resolved.cljs$core$IFn$_invoke$arity$1 ? resolved.cljs$core$IFn$_invoke$arity$1(G__26488) : resolved.call(null,G__26488));
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
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,[cljs.core.str(cljs.core.flatten(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(state)))].join('')], null))], null);
});
keechma.app_state.mount_to_element_BANG_ = (function keechma$app_state$mount_to_element_BANG_(state){
var main_component = cljs.core.cst$kw$main_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var container = cljs.core.cst$kw$html_DASH_element.cljs$core$IFn$_invoke$arity$1(state);
var G__26491_26493 = keechma.app_state.app_renderer(state);
var G__26492_26494 = container;
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26491_26493,G__26492_26494) : reagent.core.render_component.call(null,G__26491_26493,G__26492_26494));

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
cljs.core.cst$kw$stop.cljs$core$IFn$_invoke$arity$1(manager).call(null);

return s;
});})(router__$1,reporter,context,controllers,routes_chan,commands_chan,app_db,manager))
);
});
keechma.app_state.add_sub_cache = (function keechma$app_state$add_sub_cache(cache,p__26495){
var vec__26499 = p__26495;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26499,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26499,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((function (vec__26499,key,sub){
return (function() { 
var G__26502__delegate = function (app_db_atom,args){
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache) : cljs.core.deref.call(null,cache)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,args], null));
if(cljs.core.truth_(cached)){
return cached;
} else {
var sub_reaction = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sub,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_atom], null),cljs.core.vec(args)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,args], null),sub_reaction);

return sub_reaction;
}
};
var G__26502 = function (app_db_atom,var_args){
var args = null;
if (arguments.length > 1) {
var G__26503__i = 0, G__26503__a = new Array(arguments.length -  1);
while (G__26503__i < G__26503__a.length) {G__26503__a[G__26503__i] = arguments[G__26503__i + 1]; ++G__26503__i;}
  args = new cljs.core.IndexedSeq(G__26503__a,0);
} 
return G__26502__delegate.call(this,app_db_atom,args);};
G__26502.cljs$lang$maxFixedArity = 1;
G__26502.cljs$lang$applyTo = (function (arglist__26504){
var app_db_atom = cljs.core.first(arglist__26504);
var args = cljs.core.rest(arglist__26504);
return G__26502__delegate(app_db_atom,args);
});
G__26502.cljs$core$IFn$_invoke$arity$variadic = G__26502__delegate;
return G__26502;
})()
;})(vec__26499,key,sub))
], null);
});
keechma.app_state.start_subs_cache = (function keechma$app_state$start_subs_cache(state){
var subscriptions = cljs.core.cst$kw$subscriptions.cljs$core$IFn$_invoke$arity$1(state);
var subs_cache = cljs.core.cst$kw$subscriptions_DASH_cache.cljs$core$IFn$_invoke$arity$1(state);
var cached_subscriptions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (subscriptions,subs_cache){
return (function (p1__26505_SHARP_){
return keechma.app_state.add_sub_cache(subs_cache,p1__26505_SHARP_);
});})(subscriptions,subs_cache))
,subscriptions));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$subscriptions,cached_subscriptions);
});
keechma.app_state.restore_app_db = (function keechma$app_state$restore_app_db(old_app,new_app){
var old_app_db = (function (){var G__26509 = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(old_app);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26509) : cljs.core.deref.call(null,G__26509));
})();
var new_app_db_atom = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(new_app);
var G__26510 = new_app_db_atom;
var G__26511 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_app_db_atom) : cljs.core.deref.call(null,new_app_db_atom)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_app_db,cljs.core.cst$kw$internal),cljs.core.cst$kw$route)], 0));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26510,G__26511) : cljs.core.reset_BANG_.call(null,G__26510,G__26511));
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
var args26512 = [];
var len__11171__auto___26516 = arguments.length;
var i__11172__auto___26517 = (0);
while(true){
if((i__11172__auto___26517 < len__11171__auto___26516)){
args26512.push((arguments[i__11172__auto___26517]));

var G__26518 = (i__11172__auto___26517 + (1));
i__11172__auto___26517 = G__26518;
continue;
} else {
}
break;
}

var G__26514 = args26512.length;
switch (G__26514) {
case 1:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26512.length)].join('')));

}
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2(config,true);
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (config,should_mount_QMARK_){
var initial_data = keechma.app_state.get_initial_data(config);
var config__$1 = keechma.app_state.map__GT_AppState(keechma.app_state.process_config(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([keechma.app_state.default_config(initial_data),config], 0))));
var mount = (cljs.core.truth_(should_mount_QMARK_)?keechma.app_state.mount_to_element_BANG_:cljs.core.identity);
var G__26515 = keechma.app_state.resolve_main_component(keechma.app_state.start_controllers(keechma.app_state.start_router_BANG_(keechma.app_state.start_subs_cache(config__$1))));
return (mount.cljs$core$IFn$_invoke$arity$1 ? mount.cljs$core$IFn$_invoke$arity$1(G__26515) : mount.call(null,G__26515));
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
var args26520 = [];
var len__11171__auto___26600 = arguments.length;
var i__11172__auto___26601 = (0);
while(true){
if((i__11172__auto___26601 < len__11171__auto___26600)){
args26520.push((arguments[i__11172__auto___26601]));

var G__26602 = (i__11172__auto___26601 + (1));
i__11172__auto___26601 = G__26602;
continue;
} else {
}
break;
}

var G__26522 = args26520.length;
switch (G__26522) {
case 1:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26520.length)].join('')));

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
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,routes_chan,commands_chan){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,routes_chan,commands_chan){
return (function (state_26568){
var state_val_26569 = (state_26568[(1)]);
if((state_val_26569 === (7))){
var inst_26542 = (state_26568[(7)]);
var inst_26544 = cljs.core.chunked_seq_QMARK_(inst_26542);
var state_26568__$1 = state_26568;
if(inst_26544){
var statearr_26573_26604 = state_26568__$1;
(statearr_26573_26604[(1)] = (10));

} else {
var statearr_26574_26605 = state_26568__$1;
(statearr_26574_26605[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (1))){
var inst_26527 = cljs.core.cst$kw$stop_DASH_fns.cljs$core$IFn$_invoke$arity$1(config);
var inst_26528 = cljs.core.seq(inst_26527);
var inst_26529 = inst_26528;
var inst_26530 = null;
var inst_26531 = (0);
var inst_26532 = (0);
var state_26568__$1 = (function (){var statearr_26575 = state_26568;
(statearr_26575[(8)] = inst_26531);

(statearr_26575[(9)] = inst_26530);

(statearr_26575[(10)] = inst_26532);

(statearr_26575[(11)] = inst_26529);

return statearr_26575;
})();
var statearr_26576_26606 = state_26568__$1;
(statearr_26576_26606[(2)] = null);

(statearr_26576_26606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (4))){
var inst_26531 = (state_26568[(8)]);
var inst_26530 = (state_26568[(9)]);
var inst_26532 = (state_26568[(10)]);
var inst_26529 = (state_26568[(11)]);
var inst_26537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26530,inst_26532);
var inst_26538 = (inst_26537.cljs$core$IFn$_invoke$arity$1 ? inst_26537.cljs$core$IFn$_invoke$arity$1(config) : inst_26537.call(null,config));
var inst_26539 = (inst_26532 + (1));
var tmp26570 = inst_26531;
var tmp26571 = inst_26530;
var tmp26572 = inst_26529;
var inst_26529__$1 = tmp26572;
var inst_26530__$1 = tmp26571;
var inst_26531__$1 = tmp26570;
var inst_26532__$1 = inst_26539;
var state_26568__$1 = (function (){var statearr_26577 = state_26568;
(statearr_26577[(12)] = inst_26538);

(statearr_26577[(8)] = inst_26531__$1);

(statearr_26577[(9)] = inst_26530__$1);

(statearr_26577[(10)] = inst_26532__$1);

(statearr_26577[(11)] = inst_26529__$1);

return statearr_26577;
})();
var statearr_26578_26607 = state_26568__$1;
(statearr_26578_26607[(2)] = null);

(statearr_26578_26607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (6))){
var inst_26561 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26579_26608 = state_26568__$1;
(statearr_26579_26608[(2)] = inst_26561);

(statearr_26579_26608[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (3))){
var inst_26563 = (state_26568[(2)]);
var inst_26564 = cljs.core.async.close_BANG_(commands_chan);
var inst_26565 = cljs.core.async.close_BANG_(routes_chan);
var inst_26566 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_26568__$1 = (function (){var statearr_26580 = state_26568;
(statearr_26580[(13)] = inst_26564);

(statearr_26580[(14)] = inst_26563);

(statearr_26580[(15)] = inst_26565);

return statearr_26580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26568__$1,inst_26566);
} else {
if((state_val_26569 === (12))){
var inst_26556 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26581_26609 = state_26568__$1;
(statearr_26581_26609[(2)] = inst_26556);

(statearr_26581_26609[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (2))){
var inst_26531 = (state_26568[(8)]);
var inst_26532 = (state_26568[(10)]);
var inst_26534 = (inst_26532 < inst_26531);
var inst_26535 = inst_26534;
var state_26568__$1 = state_26568;
if(cljs.core.truth_(inst_26535)){
var statearr_26582_26610 = state_26568__$1;
(statearr_26582_26610[(1)] = (4));

} else {
var statearr_26583_26611 = state_26568__$1;
(statearr_26583_26611[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (11))){
var inst_26542 = (state_26568[(7)]);
var inst_26551 = cljs.core.first(inst_26542);
var inst_26552 = (inst_26551.cljs$core$IFn$_invoke$arity$1 ? inst_26551.cljs$core$IFn$_invoke$arity$1(config) : inst_26551.call(null,config));
var inst_26553 = cljs.core.next(inst_26542);
var inst_26529 = inst_26553;
var inst_26530 = null;
var inst_26531 = (0);
var inst_26532 = (0);
var state_26568__$1 = (function (){var statearr_26584 = state_26568;
(statearr_26584[(8)] = inst_26531);

(statearr_26584[(9)] = inst_26530);

(statearr_26584[(16)] = inst_26552);

(statearr_26584[(10)] = inst_26532);

(statearr_26584[(11)] = inst_26529);

return statearr_26584;
})();
var statearr_26585_26612 = state_26568__$1;
(statearr_26585_26612[(2)] = null);

(statearr_26585_26612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (9))){
var inst_26559 = (state_26568[(2)]);
var state_26568__$1 = state_26568;
var statearr_26586_26613 = state_26568__$1;
(statearr_26586_26613[(2)] = inst_26559);

(statearr_26586_26613[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (5))){
var inst_26542 = (state_26568[(7)]);
var inst_26529 = (state_26568[(11)]);
var inst_26542__$1 = cljs.core.seq(inst_26529);
var state_26568__$1 = (function (){var statearr_26587 = state_26568;
(statearr_26587[(7)] = inst_26542__$1);

return statearr_26587;
})();
if(inst_26542__$1){
var statearr_26588_26614 = state_26568__$1;
(statearr_26588_26614[(1)] = (7));

} else {
var statearr_26589_26615 = state_26568__$1;
(statearr_26589_26615[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (10))){
var inst_26542 = (state_26568[(7)]);
var inst_26546 = cljs.core.chunk_first(inst_26542);
var inst_26547 = cljs.core.chunk_rest(inst_26542);
var inst_26548 = cljs.core.count(inst_26546);
var inst_26529 = inst_26547;
var inst_26530 = inst_26546;
var inst_26531 = inst_26548;
var inst_26532 = (0);
var state_26568__$1 = (function (){var statearr_26590 = state_26568;
(statearr_26590[(8)] = inst_26531);

(statearr_26590[(9)] = inst_26530);

(statearr_26590[(10)] = inst_26532);

(statearr_26590[(11)] = inst_26529);

return statearr_26590;
})();
var statearr_26591_26616 = state_26568__$1;
(statearr_26591_26616[(2)] = null);

(statearr_26591_26616[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26569 === (8))){
var state_26568__$1 = state_26568;
var statearr_26592_26617 = state_26568__$1;
(statearr_26592_26617[(2)] = null);

(statearr_26592_26617[(1)] = (9));


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
});})(c__17677__auto__,routes_chan,commands_chan))
;
return ((function (switch__17551__auto__,c__17677__auto__,routes_chan,commands_chan){
return (function() {
var keechma$app_state$state_machine__17552__auto__ = null;
var keechma$app_state$state_machine__17552__auto____0 = (function (){
var statearr_26596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26596[(0)] = keechma$app_state$state_machine__17552__auto__);

(statearr_26596[(1)] = (1));

return statearr_26596;
});
var keechma$app_state$state_machine__17552__auto____1 = (function (state_26568){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_26568);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e26597){if((e26597 instanceof Object)){
var ex__17555__auto__ = e26597;
var statearr_26598_26618 = state_26568;
(statearr_26598_26618[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26568);

return cljs.core.cst$kw$recur;
} else {
throw e26597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__26619 = state_26568;
state_26568 = G__26619;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$app_state$state_machine__17552__auto__ = function(state_26568){
switch(arguments.length){
case 0:
return keechma$app_state$state_machine__17552__auto____0.call(this);
case 1:
return keechma$app_state$state_machine__17552__auto____1.call(this,state_26568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$app_state$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$app_state$state_machine__17552__auto____0;
keechma$app_state$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$app_state$state_machine__17552__auto____1;
return keechma$app_state$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,routes_chan,commands_chan))
})();
var state__17679__auto__ = (function (){var statearr_26599 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_26599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_26599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,routes_chan,commands_chan))
);

return c__17677__auto__;
});

keechma.app_state.stop_BANG_.cljs$lang$maxFixedArity = 2;

