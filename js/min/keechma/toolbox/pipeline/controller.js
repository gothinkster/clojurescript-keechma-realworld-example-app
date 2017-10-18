// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.pipeline.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k24841,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__24845 = k24841;
var G__24845__$1 = (((G__24845 instanceof cljs.core.Keyword))?G__24845.fqn:null);
switch (G__24845__$1) {
case "params-fn":
return self__.params_fn;

break;
case "pipelines":
return self__.pipelines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24841,else__12205__auto__);

}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.pipeline.controller.PipelineController{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_fn,self__.params_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pipelines,self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24840){
var self__ = this;
var G__24840__$1 = this;
return (new cljs.core.RecordIter((0),G__24840__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params_DASH_fn,cljs.core.cst$kw$pipelines], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__24846 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (930798330 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__24846(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24842,other24843){
var self__ = this;
var this24842__$1 = this;
return (!((other24843 == null))) && ((this24842__$1.constructor === other24843.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24842__$1.params_fn,other24843.params_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24842__$1.pipelines,other24843.pipelines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24842__$1.__extmap,other24843.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params_DASH_fn,null,cljs.core.cst$kw$pipelines,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__24840){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__24847 = cljs.core.keyword_identical_QMARK_;
var expr__24848 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__24850 = cljs.core.cst$kw$params_DASH_fn;
var G__24851 = expr__24848;
return (pred__24847.cljs$core$IFn$_invoke$arity$2 ? pred__24847.cljs$core$IFn$_invoke$arity$2(G__24850,G__24851) : pred__24847.call(null,G__24850,G__24851));
})())){
return (new keechma.toolbox.pipeline.controller.PipelineController(G__24840,self__.pipelines,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24852 = cljs.core.cst$kw$pipelines;
var G__24853 = expr__24848;
return (pred__24847.cljs$core$IFn$_invoke$arity$2 ? pred__24847.cljs$core$IFn$_invoke$arity$2(G__24852,G__24853) : pred__24847.call(null,G__24852,G__24853));
})())){
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,G__24840,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__24840),null));
}
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_fn,self__.params_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pipelines,self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__24840){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,G__24840,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.pipeline.controller.PipelineController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params_DASH_fn,cljs.core.cst$sym$pipelines], null);
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$type = true;

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.__GT_PipelineController = (function keechma$toolbox$pipeline$controller$__GT_PipelineController(params_fn,pipelines){
return (new keechma.toolbox.pipeline.controller.PipelineController(params_fn,pipelines,null,null,null));
});

keechma.toolbox.pipeline.controller.map__GT_PipelineController = (function keechma$toolbox$pipeline$controller$map__GT_PipelineController(G__24844){
return (new keechma.toolbox.pipeline.controller.PipelineController(cljs.core.cst$kw$params_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__24844),cljs.core.cst$kw$pipelines.cljs$core$IFn$_invoke$arity$1(G__24844),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24844,cljs.core.cst$kw$params_DASH_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pipelines], 0))),null));
});

keechma.controller.params.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,route_params){
var fexpr__24855 = cljs.core.cst$kw$params_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$);
return (fexpr__24855.cljs$core$IFn$_invoke$arity$1 ? fexpr__24855.cljs$core$IFn$_invoke$arity$1(route_params) : fexpr__24855.call(null,route_params));
}));
keechma.controller.start.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
var G__24856_24859 = this$;
var G__24857_24860 = cljs.core.cst$kw$start;
var G__24858_24861 = params;
(keechma.controller.execute.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(G__24856_24859,G__24857_24860,G__24858_24861) : keechma.controller.execute.call(null,G__24856_24859,G__24857_24860,G__24858_24861));

return app_db;
}));
keechma.controller.stop.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
var G__24862_24865 = this$;
var G__24863_24866 = cljs.core.cst$kw$stop;
var G__24864_24867 = params;
(keechma.controller.execute.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(G__24862_24865,G__24863_24866,G__24864_24867) : keechma.controller.execute.call(null,G__24862_24865,G__24863_24866,G__24864_24867));

return app_db;
}));
keechma.controller.handler.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,app_db_atom,in_chan,_){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_24893){
var state_val_24894 = (state_24893[(1)]);
if((state_val_24894 === (7))){
var inst_24874 = (state_24893[(7)]);
var inst_24884 = (state_24893[(2)]);
var state_24893__$1 = (function (){var statearr_24895 = state_24893;
(statearr_24895[(8)] = inst_24884);

return statearr_24895;
})();
if(cljs.core.truth_(inst_24874)){
var statearr_24896_24911 = state_24893__$1;
(statearr_24896_24911[(1)] = (8));

} else {
var statearr_24897_24912 = state_24893__$1;
(statearr_24897_24912[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24894 === (1))){
var state_24893__$1 = state_24893;
var statearr_24898_24913 = state_24893__$1;
(statearr_24898_24913[(2)] = null);

(statearr_24898_24913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24894 === (4))){
var inst_24874 = (state_24893[(7)]);
var inst_24879 = (state_24893[(9)]);
var inst_24873 = (state_24893[(2)]);
var inst_24874__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24873,(0),null);
var inst_24875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24873,(1),null);
var inst_24876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24877 = [cljs.core.cst$kw$pipelines,inst_24874__$1];
var inst_24878 = (new cljs.core.PersistentVector(null,2,(5),inst_24876,inst_24877,null));
var inst_24879__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,inst_24878);
var state_24893__$1 = (function (){var statearr_24899 = state_24893;
(statearr_24899[(7)] = inst_24874__$1);

(statearr_24899[(10)] = inst_24875);

(statearr_24899[(9)] = inst_24879__$1);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24879__$1)){
var statearr_24900_24914 = state_24893__$1;
(statearr_24900_24914[(1)] = (5));

} else {
var statearr_24901_24915 = state_24893__$1;
(statearr_24901_24915[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24894 === (6))){
var state_24893__$1 = state_24893;
var statearr_24902_24916 = state_24893__$1;
(statearr_24902_24916[(2)] = null);

(statearr_24902_24916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24894 === (3))){
var inst_24891 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24893__$1,inst_24891);
} else {
if((state_val_24894 === (2))){
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24893__$1,(4),in_chan);
} else {
if((state_val_24894 === (9))){
var state_24893__$1 = state_24893;
var statearr_24903_24917 = state_24893__$1;
(statearr_24903_24917[(2)] = null);

(statearr_24903_24917[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24894 === (5))){
var inst_24875 = (state_24893[(10)]);
var inst_24879 = (state_24893[(9)]);
var inst_24881 = (inst_24879.cljs$core$IFn$_invoke$arity$3 ? inst_24879.cljs$core$IFn$_invoke$arity$3(this$,app_db_atom,inst_24875) : inst_24879.call(null,this$,app_db_atom,inst_24875));
var state_24893__$1 = state_24893;
var statearr_24904_24918 = state_24893__$1;
(statearr_24904_24918[(2)] = inst_24881);

(statearr_24904_24918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24894 === (10))){
var inst_24889 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24905_24919 = state_24893__$1;
(statearr_24905_24919[(2)] = inst_24889);

(statearr_24905_24919[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24894 === (8))){
var state_24893__$1 = state_24893;
var statearr_24906_24920 = state_24893__$1;
(statearr_24906_24920[(2)] = null);

(statearr_24906_24920[(1)] = (2));


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
});})(c__19193__auto__))
;
return ((function (switch__19091__auto__,c__19193__auto__){
return (function() {
var keechma$toolbox$pipeline$controller$state_machine__19092__auto__ = null;
var keechma$toolbox$pipeline$controller$state_machine__19092__auto____0 = (function (){
var statearr_24907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24907[(0)] = keechma$toolbox$pipeline$controller$state_machine__19092__auto__);

(statearr_24907[(1)] = (1));

return statearr_24907;
});
var keechma$toolbox$pipeline$controller$state_machine__19092__auto____1 = (function (state_24893){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_24893);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e24908){if((e24908 instanceof Object)){
var ex__19095__auto__ = e24908;
var statearr_24909_24921 = state_24893;
(statearr_24909_24921[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24893);

return cljs.core.cst$kw$recur;
} else {
throw e24908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__24922 = state_24893;
state_24893 = G__24922;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$toolbox$pipeline$controller$state_machine__19092__auto__ = function(state_24893){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$controller$state_machine__19092__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$controller$state_machine__19092__auto____1.call(this,state_24893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$pipeline$controller$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$controller$state_machine__19092__auto____0;
keechma$toolbox$pipeline$controller$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$controller$state_machine__19092__auto____1;
return keechma$toolbox$pipeline$controller$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_24910 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_24910[(6)] = c__19193__auto__);

return statearr_24910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
}));
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
