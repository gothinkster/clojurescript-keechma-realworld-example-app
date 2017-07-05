// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state.react_native_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
keechma.app_state.react_native_router.initial_route = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index,(0),cljs.core.cst$kw$key,cljs.core.cst$kw$init,cljs.core.cst$kw$routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$init], null)], null)], null);
if(typeof keechma.app_state.react_native_router.route_atom !== 'undefined'){
} else {
keechma.app_state.react_native_router.route_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(keechma.app_state.react_native_router.initial_route);
}
keechma.app_state.react_native_router.update_navigation_key = (function keechma$app_state$react_native_router$update_navigation_key(route){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(route,cljs.core.cst$kw$key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$key], null)));
});
keechma.app_state.react_native_router.push_route = (function keechma$app_state$react_native_router$push_route(route,value){
return keechma.app_state.react_native_router.update_navigation_key(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(route,cljs.core.cst$kw$index,cljs.core.inc),cljs.core.cst$kw$routes,(function (p1__26365_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26365_SHARP_,value);
})));
});
keechma.app_state.react_native_router.pop_route = (function keechma$app_state$react_native_router$pop_route(route,_){
if(((1) < cljs.core.count(cljs.core.cst$kw$routes.cljs$core$IFn$_invoke$arity$1(route)))){
return keechma.app_state.react_native_router.update_navigation_key(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(route,cljs.core.cst$kw$index,cljs.core.dec),cljs.core.cst$kw$routes,cljs.core.pop));
} else {
return route;
}
});
keechma.app_state.react_native_router.home_route = (function keechma$app_state$react_native_router$home_route(route,_){
return keechma.app_state.react_native_router.initial_route;
});
keechma.app_state.react_native_router.navigate_BANG_ = (function keechma$app_state$react_native_router$navigate_BANG_(var_args){
var args26366 = [];
var len__11171__auto___26373 = arguments.length;
var i__11172__auto___26374 = (0);
while(true){
if((i__11172__auto___26374 < len__11171__auto___26373)){
args26366.push((arguments[i__11172__auto___26374]));

var G__26375 = (i__11172__auto___26374 + (1));
i__11172__auto___26374 = G__26375;
continue;
} else {
}
break;
}

var G__26368 = args26366.length;
switch (G__26368) {
case 1:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26366.length)].join('')));

}
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (action){
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(action,null);
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (action,payload){
var action_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$push,keechma.app_state.react_native_router.push_route,cljs.core.cst$kw$pop,keechma.app_state.react_native_router.pop_route,cljs.core.cst$kw$home,keechma.app_state.react_native_router.home_route], null),action);
var G__26369 = keechma.app_state.react_native_router.route_atom;
var G__26370 = (function (){var G__26371 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(keechma.app_state.react_native_router.route_atom) : cljs.core.deref.call(null,keechma.app_state.react_native_router.route_atom));
var G__26372 = payload;
return (action_fn.cljs$core$IFn$_invoke$arity$2 ? action_fn.cljs$core$IFn$_invoke$arity$2(G__26371,G__26372) : action_fn.call(null,G__26371,G__26372));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26369,G__26370) : cljs.core.reset_BANG_.call(null,G__26369,G__26370));
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$lang$maxFixedArity = 2;


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
keechma.app_state.react_native_router.ReactNativeRouter = (function (routes_chan,watch_id,app_db,__meta,__extmap,__hash){
this.routes_chan = routes_chan;
this.watch_id = watch_id;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k26378,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__26380 = (((k26378 instanceof cljs.core.Keyword))?k26378.fqn:null);
switch (G__26380) {
case "routes-chan":
return self__.routes_chan;

break;
case "watch-id":
return self__.watch_id;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26378,else__10665__auto__);

}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.app-state.react-native-router.ReactNativeRouter{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$watch_DASH_id,self__.watch_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IIterable$ = true;

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26377){
var self__ = this;
var G__26377__$1 = this;
return (new cljs.core.RecordIter((0),G__26377__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$watch_DASH_id,cljs.core.cst$kw$app_DASH_db], null),cljs.core._iterator(self__.__extmap)));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$ = true;

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var routes_chan__$1 = cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(this$__$1);
var watch_id__$1 = cljs.core.cst$kw$watch_DASH_id.cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.add_watch(keechma.app_state.react_native_router.route_atom,watch_id__$1,((function (routes_chan__$1,watch_id__$1,this$__$1){
return (function (_,___$1,___$2,route_data){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(routes_chan__$1,route_data);
});})(routes_chan__$1,watch_id__$1,this$__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_db,cljs.core.assoc,cljs.core.cst$kw$route,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(keechma.app_state.react_native_router.route_atom) : cljs.core.deref.call(null,keechma.app_state.react_native_router.route_atom)));

return this$__$1;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.remove_watch(keechma.app_state.react_native_router.route_atom,cljs.core.cst$kw$watch_DASH_id.cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$push,params);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$watch_DASH_id,null,cljs.core.cst$kw$routes_DASH_chan,null,cljs.core.cst$kw$app_DASH_db,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__26377){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__26381 = cljs.core.keyword_identical_QMARK_;
var expr__26382 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__26384 = cljs.core.cst$kw$routes_DASH_chan;
var G__26385 = expr__26382;
return (pred__26381.cljs$core$IFn$_invoke$arity$2 ? pred__26381.cljs$core$IFn$_invoke$arity$2(G__26384,G__26385) : pred__26381.call(null,G__26384,G__26385));
})())){
return (new keechma.app_state.react_native_router.ReactNativeRouter(G__26377,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26386 = cljs.core.cst$kw$watch_DASH_id;
var G__26387 = expr__26382;
return (pred__26381.cljs$core$IFn$_invoke$arity$2 ? pred__26381.cljs$core$IFn$_invoke$arity$2(G__26386,G__26387) : pred__26381.call(null,G__26386,G__26387));
})())){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,G__26377,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26388 = cljs.core.cst$kw$app_DASH_db;
var G__26389 = expr__26382;
return (pred__26381.cljs$core$IFn$_invoke$arity$2 ? pred__26381.cljs$core$IFn$_invoke$arity$2(G__26388,G__26389) : pred__26381.call(null,G__26388,G__26389));
})())){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,G__26377,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__26377),null));
}
}
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$watch_DASH_id,self__.watch_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__26377){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,G__26377,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.app_state.react_native_router.ReactNativeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes_DASH_chan,cljs.core.cst$sym$watch_DASH_id,cljs.core.cst$sym$app_DASH_db], null);
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$type = true;

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state.react-native-router/ReactNativeRouter");
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.app-state.react-native-router/ReactNativeRouter");
});

keechma.app_state.react_native_router.__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$__GT_ReactNativeRouter(routes_chan,watch_id,app_db){
return (new keechma.app_state.react_native_router.ReactNativeRouter(routes_chan,watch_id,app_db,null,null,null));
});

keechma.app_state.react_native_router.map__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$map__GT_ReactNativeRouter(G__26379){
return (new keechma.app_state.react_native_router.ReactNativeRouter(cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__26379),cljs.core.cst$kw$watch_DASH_id.cljs$core$IFn$_invoke$arity$1(G__26379),cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__26379),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26379,cljs.core.cst$kw$routes_DASH_chan,cljs.core.array_seq([cljs.core.cst$kw$watch_DASH_id,cljs.core.cst$kw$app_DASH_db], 0)),null));
});

keechma.app_state.react_native_router.constructor$ = (function keechma$app_state$react_native_router$constructor(_,routes_chan,state){
var watch_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$route_DASH_watch));
return keechma.app_state.core.start_BANG_(keechma.app_state.react_native_router.__GT_ReactNativeRouter(routes_chan,watch_id,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state)));
});
