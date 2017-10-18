// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state.hashchange_router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
keechma.app_state.hashchange_router.hashchange_listener = (function keechma$app_state$hashchange_router$hashchange_listener(routes,routes_chan,e){
var clean_route = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e.token,(1));
var route_params = router.core.url__GT_map(routes,clean_route);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(routes_chan,route_params);
});
keechma.app_state.hashchange_router.get_history = (function keechma$app_state$hashchange_router$get_history(){
return (new goog.History(false,null,document.getElementById("history_state0"),document.getElementById("history_iframe0")));
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
keechma.app_state.hashchange_router.HashchangeRouter = (function (routes,routes_chan,hashchange_listener,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.hashchange_listener = hashchange_listener;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k25922,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__25926 = k25922;
var G__25926__$1 = (((G__25926 instanceof cljs.core.Keyword))?G__25926.fqn:null);
switch (G__25926__$1) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "hashchange-listener":
return self__.hashchange_listener;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25922,else__12205__auto__);

}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.app-state.hashchange-router.HashchangeRouter{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hashchange_DASH_listener,self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25921){
var self__ = this;
var G__25921__$1 = this;
return (new cljs.core.RecordIter((0),G__25921__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$hashchange_DASH_listener,cljs.core.cst$kw$app_DASH_db], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history = keechma.app_state.hashchange_router.get_history();
var current_route_params = router.core.url__GT_map(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.hash,(2)));
var G__25927_25947 = history;
var G__25928_25948 = goog.history.EventType.NAVIGATE;
var G__25929_25949 = cljs.core.cst$kw$hashchange_DASH_listener.cljs$core$IFn$_invoke$arity$1(this$__$1);
goog.events.listen(G__25927_25947,G__25928_25948,G__25929_25949);

var G__25930_25950 = history;
G__25930_25950.setEnabled(true);


cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_db,cljs.core.assoc,cljs.core.cst$kw$route,current_route_params);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$history,history);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__25931 = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(this$__$1);
var G__25932 = goog.history.EventType.NAVIGATE;
var G__25933 = cljs.core.cst$kw$hashchange_DASH_listener.cljs$core$IFn$_invoke$arity$1(this$__$1);
return goog.events.unlisten(G__25931,G__25932,G__25933);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return location.hash = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__25934 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (879603011 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__25934(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25923,other25924){
var self__ = this;
var this25923__$1 = this;
return (!((other25924 == null))) && ((this25923__$1.constructor === other25924.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25923__$1.routes,other25924.routes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25923__$1.routes_chan,other25924.routes_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25923__$1.hashchange_listener,other25924.hashchange_listener)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25923__$1.app_db,other25924.app_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25923__$1.__extmap,other25924.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$routes,null,cljs.core.cst$kw$routes_DASH_chan,null,cljs.core.cst$kw$app_DASH_db,null,cljs.core.cst$kw$hashchange_DASH_listener,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__25921){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__25935 = cljs.core.keyword_identical_QMARK_;
var expr__25936 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__25938 = cljs.core.cst$kw$routes;
var G__25939 = expr__25936;
return (pred__25935.cljs$core$IFn$_invoke$arity$2 ? pred__25935.cljs$core$IFn$_invoke$arity$2(G__25938,G__25939) : pred__25935.call(null,G__25938,G__25939));
})())){
return (new keechma.app_state.hashchange_router.HashchangeRouter(G__25921,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25940 = cljs.core.cst$kw$routes_DASH_chan;
var G__25941 = expr__25936;
return (pred__25935.cljs$core$IFn$_invoke$arity$2 ? pred__25935.cljs$core$IFn$_invoke$arity$2(G__25940,G__25941) : pred__25935.call(null,G__25940,G__25941));
})())){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,G__25921,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25942 = cljs.core.cst$kw$hashchange_DASH_listener;
var G__25943 = expr__25936;
return (pred__25935.cljs$core$IFn$_invoke$arity$2 ? pred__25935.cljs$core$IFn$_invoke$arity$2(G__25942,G__25943) : pred__25935.call(null,G__25942,G__25943));
})())){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,G__25921,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25944 = cljs.core.cst$kw$app_DASH_db;
var G__25945 = expr__25936;
return (pred__25935.cljs$core$IFn$_invoke$arity$2 ? pred__25935.cljs$core$IFn$_invoke$arity$2(G__25944,G__25945) : pred__25935.call(null,G__25944,G__25945));
})())){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,G__25921,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__25921),null));
}
}
}
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes,self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hashchange_DASH_listener,self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__25921){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,G__25921,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.app_state.hashchange_router.HashchangeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes,cljs.core.cst$sym$routes_DASH_chan,cljs.core.cst$sym$hashchange_DASH_listener,cljs.core.cst$sym$app_DASH_db], null);
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$type = true;

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state.hashchange-router/HashchangeRouter");
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.app-state.hashchange-router/HashchangeRouter");
});

keechma.app_state.hashchange_router.__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$__GT_HashchangeRouter(routes,routes_chan,hashchange_listener,app_db){
return (new keechma.app_state.hashchange_router.HashchangeRouter(routes,routes_chan,hashchange_listener,app_db,null,null,null));
});

keechma.app_state.hashchange_router.map__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$map__GT_HashchangeRouter(G__25925){
return (new keechma.app_state.hashchange_router.HashchangeRouter(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(G__25925),cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__25925),cljs.core.cst$kw$hashchange_DASH_listener.cljs$core$IFn$_invoke$arity$1(G__25925),cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__25925),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25925,cljs.core.cst$kw$routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$hashchange_DASH_listener,cljs.core.cst$kw$app_DASH_db], 0))),null));
});

keechma.app_state.hashchange_router.constructor$ = (function keechma$app_state$hashchange_router$constructor(routes,routes_chan,state){
var listener = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(keechma.app_state.hashchange_router.hashchange_listener,router.core.expand_routes(routes),routes_chan);
return keechma.app_state.core.start_BANG_(keechma.app_state.hashchange_router.__GT_HashchangeRouter(router.core.expand_routes(routes),routes_chan,listener,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state)));
});
