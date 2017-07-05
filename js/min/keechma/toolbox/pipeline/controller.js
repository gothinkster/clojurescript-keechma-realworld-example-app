// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.pipeline.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.pipeline.core');

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
 * @implements {keechma.controller.IController}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.toolbox.pipeline.controller.PipelineController = (function (params_fn,pipelines,__meta,__extmap,__hash){
this.params_fn = params_fn;
this.pipelines = pipelines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.pipeline.controller.PipelineController.prototype.keechma$controller$IController$ = true;

keechma.toolbox.pipeline.controller.PipelineController.prototype.keechma$controller$IController$params$arity$2 = (function (this$,route_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$params_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1).call(null,route_params);
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.keechma$controller$IController$start$arity$3 = (function (this$,params,app_db){
var self__ = this;
var this$__$1 = this;
keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$start,params);

return app_db;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.keechma$controller$IController$stop$arity$3 = (function (this$,params,app_db){
var self__ = this;
var this$__$1 = this;
keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$stop,params);

return app_db;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.keechma$controller$IController$handler$arity$4 = (function (this$,app_db_atom,in_chan,_){
var self__ = this;
var this$__$1 = this;
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,this$__$1){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,this$__$1){
return (function (state_25036){
var state_val_25037 = (state_25036[(1)]);
if((state_val_25037 === (7))){
var inst_25017 = (state_25036[(7)]);
var inst_25027 = (state_25036[(2)]);
var state_25036__$1 = (function (){var statearr_25038 = state_25036;
(statearr_25038[(8)] = inst_25027);

return statearr_25038;
})();
if(cljs.core.truth_(inst_25017)){
var statearr_25039_25065 = state_25036__$1;
(statearr_25039_25065[(1)] = (8));

} else {
var statearr_25040_25066 = state_25036__$1;
(statearr_25040_25066[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25037 === (1))){
var state_25036__$1 = state_25036;
var statearr_25041_25067 = state_25036__$1;
(statearr_25041_25067[(2)] = null);

(statearr_25041_25067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25037 === (4))){
var inst_25022 = (state_25036[(9)]);
var inst_25017 = (state_25036[(7)]);
var inst_25016 = (state_25036[(2)]);
var inst_25017__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25016,(0),null);
var inst_25018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25016,(1),null);
var inst_25019 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25020 = [cljs.core.cst$kw$pipelines,inst_25017__$1];
var inst_25021 = (new cljs.core.PersistentVector(null,2,(5),inst_25019,inst_25020,null));
var inst_25022__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,inst_25021);
var state_25036__$1 = (function (){var statearr_25042 = state_25036;
(statearr_25042[(10)] = inst_25018);

(statearr_25042[(9)] = inst_25022__$1);

(statearr_25042[(7)] = inst_25017__$1);

return statearr_25042;
})();
if(cljs.core.truth_(inst_25022__$1)){
var statearr_25043_25068 = state_25036__$1;
(statearr_25043_25068[(1)] = (5));

} else {
var statearr_25044_25069 = state_25036__$1;
(statearr_25044_25069[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25037 === (6))){
var state_25036__$1 = state_25036;
var statearr_25045_25070 = state_25036__$1;
(statearr_25045_25070[(2)] = null);

(statearr_25045_25070[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25037 === (3))){
var inst_25034 = (state_25036[(2)]);
var state_25036__$1 = state_25036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25036__$1,inst_25034);
} else {
if((state_val_25037 === (2))){
var state_25036__$1 = state_25036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25036__$1,(4),in_chan);
} else {
if((state_val_25037 === (9))){
var state_25036__$1 = state_25036;
var statearr_25046_25071 = state_25036__$1;
(statearr_25046_25071[(2)] = null);

(statearr_25046_25071[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25037 === (5))){
var inst_25018 = (state_25036[(10)]);
var inst_25022 = (state_25036[(9)]);
var inst_25024 = (inst_25022.cljs$core$IFn$_invoke$arity$3 ? inst_25022.cljs$core$IFn$_invoke$arity$3(this$__$1,app_db_atom,inst_25018) : inst_25022.call(null,this$__$1,app_db_atom,inst_25018));
var state_25036__$1 = state_25036;
var statearr_25047_25072 = state_25036__$1;
(statearr_25047_25072[(2)] = inst_25024);

(statearr_25047_25072[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25037 === (10))){
var inst_25032 = (state_25036[(2)]);
var state_25036__$1 = state_25036;
var statearr_25048_25073 = state_25036__$1;
(statearr_25048_25073[(2)] = inst_25032);

(statearr_25048_25073[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25037 === (8))){
var state_25036__$1 = state_25036;
var statearr_25049_25074 = state_25036__$1;
(statearr_25049_25074[(2)] = null);

(statearr_25049_25074[(1)] = (2));


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
});})(c__17677__auto__,this$__$1))
;
return ((function (switch__17551__auto__,c__17677__auto__,this$__$1){
return (function() {
var keechma$toolbox$pipeline$controller$state_machine__17552__auto__ = null;
var keechma$toolbox$pipeline$controller$state_machine__17552__auto____0 = (function (){
var statearr_25053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25053[(0)] = keechma$toolbox$pipeline$controller$state_machine__17552__auto__);

(statearr_25053[(1)] = (1));

return statearr_25053;
});
var keechma$toolbox$pipeline$controller$state_machine__17552__auto____1 = (function (state_25036){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_25036);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e25054){if((e25054 instanceof Object)){
var ex__17555__auto__ = e25054;
var statearr_25055_25075 = state_25036;
(statearr_25055_25075[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25036);

return cljs.core.cst$kw$recur;
} else {
throw e25054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__25076 = state_25036;
state_25036 = G__25076;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$toolbox$pipeline$controller$state_machine__17552__auto__ = function(state_25036){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$controller$state_machine__17552__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$controller$state_machine__17552__auto____1.call(this,state_25036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$pipeline$controller$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$controller$state_machine__17552__auto____0;
keechma$toolbox$pipeline$controller$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$controller$state_machine__17552__auto____1;
return keechma$toolbox$pipeline$controller$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,this$__$1))
})();
var state__17679__auto__ = (function (){var statearr_25056 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_25056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_25056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,this$__$1))
);

return c__17677__auto__;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k25009,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__25057 = (((k25009 instanceof cljs.core.Keyword))?k25009.fqn:null);
switch (G__25057) {
case "params-fn":
return self__.params_fn;

break;
case "pipelines":
return self__.pipelines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25009,else__10665__auto__);

}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.pipeline.controller.PipelineController{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_fn,self__.params_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pipelines,self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25008){
var self__ = this;
var G__25008__$1 = this;
return (new cljs.core.RecordIter((0),G__25008__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params_DASH_fn,cljs.core.cst$kw$pipelines], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params_DASH_fn,null,cljs.core.cst$kw$pipelines,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__25008){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__25058 = cljs.core.keyword_identical_QMARK_;
var expr__25059 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__25061 = cljs.core.cst$kw$params_DASH_fn;
var G__25062 = expr__25059;
return (pred__25058.cljs$core$IFn$_invoke$arity$2 ? pred__25058.cljs$core$IFn$_invoke$arity$2(G__25061,G__25062) : pred__25058.call(null,G__25061,G__25062));
})())){
return (new keechma.toolbox.pipeline.controller.PipelineController(G__25008,self__.pipelines,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25063 = cljs.core.cst$kw$pipelines;
var G__25064 = expr__25059;
return (pred__25058.cljs$core$IFn$_invoke$arity$2 ? pred__25058.cljs$core$IFn$_invoke$arity$2(G__25063,G__25064) : pred__25058.call(null,G__25063,G__25064));
})())){
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,G__25008,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__25008),null));
}
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_fn,self__.params_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pipelines,self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__25008){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,G__25008,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.pipeline.controller.PipelineController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params_DASH_fn,cljs.core.cst$sym$pipelines], null);
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$type = true;

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.__GT_PipelineController = (function keechma$toolbox$pipeline$controller$__GT_PipelineController(params_fn,pipelines){
return (new keechma.toolbox.pipeline.controller.PipelineController(params_fn,pipelines,null,null,null));
});

keechma.toolbox.pipeline.controller.map__GT_PipelineController = (function keechma$toolbox$pipeline$controller$map__GT_PipelineController(G__25010){
return (new keechma.toolbox.pipeline.controller.PipelineController(cljs.core.cst$kw$params_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__25010),cljs.core.cst$kw$pipelines.cljs$core$IFn$_invoke$arity$1(G__25010),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25010,cljs.core.cst$kw$params_DASH_fn,cljs.core.array_seq([cljs.core.cst$kw$pipelines], 0)),null));
});

/**
 * 
 * Constructor for the pipeline controller.
 * 
 * Pipeline controllers are special type of Keechma controllers that handle their commands with pipelines. Pipelines allow you to model a command / action as a series of steps. Pipelines know how to handle promises and they themselves return a promise.
 * 
 * Pipelines allow you to split async actions into distinct steps:
 * 
 * - Pipeline processing
 * - Sideffects
 * 
 * If a pipeline processing step returns a promise (for instance from an AJAX request), pipeline will wait until that promise is resolved before proceeding to the next step.
 * 
 * Simple example
 * 
 * ```clojure
 * (ns some-namespace
 *   (:require [keechma.toolbox.pipeline.controller :as pp-controller]
 *          [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]])
 * 
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value))))})
 * ```
 * 
 * In the previous example three things happened:
 * 
 * 1. We stored current user status as `:loading` in the app-db
 * 2. We loaded user from the server
 * 3. We stored the current user status and the current user in the app-db
 * 
 * `value` always holds the returned (or resolved) value from the previous processing step - unless the function returns `nil` in that case, value is bound to the previous value. Also, we had to use the `commit!` sideffect function to mutate the app-db.
 * 
 * `value` and `app-db` arguments are always bound to the current pipeline value and to the current version of app-db. This means that in every processing step, value and app-db point to the results of the previous processing step.`
 * 
 * If we want to handle errors or rejections in pipelines, we can use the `rescue!` block:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value)))
 *          (rescue! [error]
 *            (pp/commit! (assoc-in app-db [:kv :current-user-status] :error))})
 * ```
 * 
 * Rescue block will catch any errors that happen in the pipeline - including the promises that were rejected. Steps in the rescue block have access to value and app-db arguments.
 * 
 * **Nesting pipelines**
 * 
 * Sometimes you need to run the pipeline only if some condition is true. In that case you can nest pipelines:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (when (= value true)
 *            (pipeline! [value app-db]
 *              (some-api-call)
 *              (pp/commit! (mutate-app-db app-db)))))}) 
 * ```
 * 
 * **Pipeline sideffects**
 * 
 * Pipelines can have various sideffects:
 * 
 * 1. `commit!` - commits the new app-db version in the global app-db atom
 * 2. `send-command!` - sends command to another controller
 * 3. `execute!` - executes command in the current controller
 * 4. `redirect!` - redirects to a different URL
 * 
 * **Exclusive pipelines**
 * 
 * In some cases you want to always run only one pipeline at a time. One example of that behavior is the live search. 
 * 
 * Let's say that you want to implement it as a command that runs on every key press. After the command is ran, it should wait for 500msec before calling the API. If the command is called again in these 500msec, stop the pipeline and run a new one.
 * 
 * Here's how you would implement this feature:
 * 
 * ```clojure
 * (def search-controller
 *   (pp-controller/constructor
 * (fn [] true)
 * {:search (pp/exclusive
 *           (pipeline! [value app-db]
 *             (when-not (empty? value)
 *               (pipeline! [value app-db]
 *                 (delay-pipeline 500)
 *                 (movie-search value)
 *                 (println "SEARCH RESULTS:" value)))))}))
 * ```
 *   
 */
keechma.toolbox.pipeline.controller.constructor$ = (function keechma$toolbox$pipeline$controller$constructor(params_fn,pipelines){
return keechma.toolbox.pipeline.controller.__GT_PipelineController(params_fn,pipelines);
});
