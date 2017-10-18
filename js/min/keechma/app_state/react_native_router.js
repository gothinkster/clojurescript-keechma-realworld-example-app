// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.app_state.react_native_router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return keechma.app_state.react_native_router.update_navigation_key(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(route,cljs.core.cst$kw$index,cljs.core.inc),cljs.core.cst$kw$routes,(function (p1__25896_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__25896_SHARP_,value);
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
var G__25898 = arguments.length;
switch (G__25898) {
case 1:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (action){
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(action,null);
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (action,payload){
var action_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$push,keechma.app_state.react_native_router.push_route,cljs.core.cst$kw$pop,keechma.app_state.react_native_router.pop_route,cljs.core.cst$kw$home,keechma.app_state.react_native_router.home_route], null),action);
return cljs.core.reset_BANG_(keechma.app_state.react_native_router.route_atom,(function (){var G__25899 = cljs.core.deref(keechma.app_state.react_native_router.route_atom);
var G__25900 = payload;
return (action_fn.cljs$core$IFn$_invoke$arity$2 ? action_fn.cljs$core$IFn$_invoke$arity$2(G__25899,G__25900) : action_fn.call(null,G__25899,G__25900));
})());
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
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k25903,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__25907 = k25903;
var G__25907__$1 = (((G__25907 instanceof cljs.core.Keyword))?G__25907.fqn:null);
switch (G__25907__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25903,else__12205__auto__);

}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.app-state.react-native-router.ReactNativeRouter{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$watch_DASH_id,self__.watch_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25902){
var self__ = this;
var G__25902__$1 = this;
return (new cljs.core.RecordIter((0),G__25902__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$routes_DASH_chan,cljs.core.cst$kw$watch_DASH_id,cljs.core.cst$kw$app_DASH_db], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var routes_chan__$1 = cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(this$__$1);
var watch_id__$1 = cljs.core.cst$kw$watch_DASH_id.cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.add_watch(keechma.app_state.react_native_router.route_atom,watch_id__$1,((function (routes_chan__$1,watch_id__$1,this$__$1){
return (function (_,___$1,___$2,route_data){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(routes_chan__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,route_data], null));
});})(routes_chan__$1,watch_id__$1,this$__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route,cljs.core.cst$kw$data], null),cljs.core.deref(keechma.app_state.react_native_router.route_atom));

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

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__25908 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-1415765247 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__25908(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25904,other25905){
var self__ = this;
var this25904__$1 = this;
return (!((other25905 == null))) && ((this25904__$1.constructor === other25905.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25904__$1.routes_chan,other25905.routes_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25904__$1.watch_id,other25905.watch_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25904__$1.app_db,other25905.app_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25904__$1.__extmap,other25905.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$watch_DASH_id,null,cljs.core.cst$kw$routes_DASH_chan,null,cljs.core.cst$kw$app_DASH_db,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__25902){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__25909 = cljs.core.keyword_identical_QMARK_;
var expr__25910 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__25912 = cljs.core.cst$kw$routes_DASH_chan;
var G__25913 = expr__25910;
return (pred__25909.cljs$core$IFn$_invoke$arity$2 ? pred__25909.cljs$core$IFn$_invoke$arity$2(G__25912,G__25913) : pred__25909.call(null,G__25912,G__25913));
})())){
return (new keechma.app_state.react_native_router.ReactNativeRouter(G__25902,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25914 = cljs.core.cst$kw$watch_DASH_id;
var G__25915 = expr__25910;
return (pred__25909.cljs$core$IFn$_invoke$arity$2 ? pred__25909.cljs$core$IFn$_invoke$arity$2(G__25914,G__25915) : pred__25909.call(null,G__25914,G__25915));
})())){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,G__25902,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25916 = cljs.core.cst$kw$app_DASH_db;
var G__25917 = expr__25910;
return (pred__25909.cljs$core$IFn$_invoke$arity$2 ? pred__25909.cljs$core$IFn$_invoke$arity$2(G__25916,G__25917) : pred__25909.call(null,G__25916,G__25917));
})())){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,G__25902,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__25902),null));
}
}
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$routes_DASH_chan,self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$watch_DASH_id,self__.watch_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$app_DASH_db,self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__25902){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,G__25902,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.app_state.react_native_router.ReactNativeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes_DASH_chan,cljs.core.cst$sym$watch_DASH_id,cljs.core.cst$sym$app_DASH_db], null);
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$type = true;

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.app-state.react-native-router/ReactNativeRouter");
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.app-state.react-native-router/ReactNativeRouter");
});

keechma.app_state.react_native_router.__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$__GT_ReactNativeRouter(routes_chan,watch_id,app_db){
return (new keechma.app_state.react_native_router.ReactNativeRouter(routes_chan,watch_id,app_db,null,null,null));
});

keechma.app_state.react_native_router.map__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$map__GT_ReactNativeRouter(G__25906){
return (new keechma.app_state.react_native_router.ReactNativeRouter(cljs.core.cst$kw$routes_DASH_chan.cljs$core$IFn$_invoke$arity$1(G__25906),cljs.core.cst$kw$watch_DASH_id.cljs$core$IFn$_invoke$arity$1(G__25906),cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(G__25906),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25906,cljs.core.cst$kw$routes_DASH_chan,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch_DASH_id,cljs.core.cst$kw$app_DASH_db], 0))),null));
});

keechma.app_state.react_native_router.constructor$ = (function keechma$app_state$react_native_router$constructor(_,routes_chan,state){
var watch_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$route_DASH_watch));
return keechma.app_state.core.start_BANG_(keechma.app_state.react_native_router.__GT_ReactNativeRouter(routes_chan,watch_id,cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(state)));
});
