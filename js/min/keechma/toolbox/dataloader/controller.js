// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.dataloader.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.dataloader.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('promesa.core');
keechma.toolbox.dataloader.controller.chan__GT_promise = (function keechma$toolbox$dataloader$controller$chan__GT_promise(wait_chan,value){
return promesa.core.promise((function (resolve,reject){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_24575){
var state_val_24576 = (state_24575[(1)]);
if((state_val_24576 === (1))){
var state_24575__$1 = state_24575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24575__$1,(2),wait_chan);
} else {
if((state_val_24576 === (2))){
var inst_24572 = (state_24575[(2)]);
var inst_24573 = (resolve.cljs$core$IFn$_invoke$arity$0 ? resolve.cljs$core$IFn$_invoke$arity$0() : resolve.call(null));
var state_24575__$1 = (function (){var statearr_24577 = state_24575;
(statearr_24577[(7)] = inst_24572);

return statearr_24577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24575__$1,inst_24573);
} else {
return null;
}
}
});})(c__19193__auto__))
;
return ((function (switch__19091__auto__,c__19193__auto__){
return (function() {
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto__ = null;
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto____0 = (function (){
var statearr_24578 = [null,null,null,null,null,null,null,null];
(statearr_24578[(0)] = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto__);

(statearr_24578[(1)] = (1));

return statearr_24578;
});
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto____1 = (function (state_24575){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_24575);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e24579){if((e24579 instanceof Object)){
var ex__19095__auto__ = e24579;
var statearr_24580_24582 = state_24575;
(statearr_24580_24582[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24575);

return cljs.core.cst$kw$recur;
} else {
throw e24579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__24583 = state_24575;
state_24575 = G__24583;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto__ = function(state_24575){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto____1.call(this,state_24575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto____0;
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto____1;
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_24581 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_24581[(6)] = c__19193__auto__);

return statearr_24581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
}));
});
keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_ = (function keechma$toolbox$dataloader$controller$wait_dataloader_pipeline_BANG_(){
var wait_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (wait_chan){
return (function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/send-command! [dataloader/id-key :waits] wait-chan)",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.send_command_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,cljs.core.cst$kw$waits], null),wait_chan)], null);
});})(wait_chan))
,((function (wait_chan){
return (function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(chan->promise wait-chan value)",cljs.core.cst$kw$val,keechma.toolbox.dataloader.controller.chan__GT_promise(wait_chan,value)], null);
});})(wait_chan))
], null)], null));
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
keechma.toolbox.dataloader.controller.Controller = (function (dataloader,__meta,__extmap,__hash){
this.dataloader = dataloader;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k24585,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__24589 = k24585;
var G__24589__$1 = (((G__24589 instanceof cljs.core.Keyword))?G__24589.fqn:null);
switch (G__24589__$1) {
case "dataloader":
return self__.dataloader;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24585,else__12205__auto__);

}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.dataloader.controller.Controller{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dataloader,self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24584){
var self__ = this;
var G__24584__$1 = this;
return (new cljs.core.RecordIter((0),G__24584__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dataloader], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__24590 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (1993883316 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__24590(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24586,other24587){
var self__ = this;
var this24586__$1 = this;
return (!((other24587 == null))) && ((this24586__$1.constructor === other24587.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24586__$1.dataloader,other24587.dataloader)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24586__$1.__extmap,other24587.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataloader,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__24584){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__24591 = cljs.core.keyword_identical_QMARK_;
var expr__24592 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__24594 = cljs.core.cst$kw$dataloader;
var G__24595 = expr__24592;
return (pred__24591.cljs$core$IFn$_invoke$arity$2 ? pred__24591.cljs$core$IFn$_invoke$arity$2(G__24594,G__24595) : pred__24591.call(null,G__24594,G__24595));
})())){
return (new keechma.toolbox.dataloader.controller.Controller(G__24584,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__24584),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dataloader,self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__24584){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,G__24584,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.dataloader.controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dataloader], null);
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$type = true;

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.__GT_Controller = (function keechma$toolbox$dataloader$controller$__GT_Controller(dataloader){
return (new keechma.toolbox.dataloader.controller.Controller(dataloader,null,null,null));
});

keechma.toolbox.dataloader.controller.map__GT_Controller = (function keechma$toolbox$dataloader$controller$map__GT_Controller(G__24588){
return (new keechma.toolbox.dataloader.controller.Controller(cljs.core.cst$kw$dataloader.cljs$core$IFn$_invoke$arity$1(G__24588),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24588,cljs.core.cst$kw$dataloader)),null));
});

keechma.controller.params.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(route_params);
}));
keechma.controller.start.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params,app_db){
var G__24597_24599 = this$;
var G__24598_24600 = cljs.core.cst$kw$load_DASH_data;
(keechma.controller.execute.cljs$core$IFn$_invoke$arity$2 ? keechma.controller.execute.cljs$core$IFn$_invoke$arity$2(G__24597_24599,G__24598_24600) : keechma.controller.execute.call(null,G__24597_24599,G__24598_24600));

return app_db;
}));
keechma.controller.handler.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.dataloader.controller.Controller,(function (this$,app_db_atom,in_chan,out_chan){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_24675){
var state_val_24676 = (state_24675[(1)]);
if((state_val_24676 === (7))){
var inst_24671 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24677_24728 = state_24675__$1;
(statearr_24677_24728[(2)] = inst_24671);

(statearr_24677_24728[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (20))){
var inst_24637 = (state_24675[(7)]);
var inst_24646 = cljs.core.first(inst_24637);
var inst_24647 = cljs.core.async.close_BANG_(inst_24646);
var inst_24648 = cljs.core.next(inst_24637);
var inst_24624 = inst_24648;
var inst_24625 = null;
var inst_24626 = (0);
var inst_24627 = (0);
var state_24675__$1 = (function (){var statearr_24678 = state_24675;
(statearr_24678[(8)] = inst_24647);

(statearr_24678[(9)] = inst_24627);

(statearr_24678[(10)] = inst_24626);

(statearr_24678[(11)] = inst_24624);

(statearr_24678[(12)] = inst_24625);

return statearr_24678;
})();
var statearr_24679_24729 = state_24675__$1;
(statearr_24679_24729[(2)] = null);

(statearr_24679_24729[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (1))){
var inst_24601 = cljs.core.PersistentVector.EMPTY;
var inst_24602 = inst_24601;
var state_24675__$1 = (function (){var statearr_24680 = state_24675;
(statearr_24680[(13)] = inst_24602);

return statearr_24680;
})();
var statearr_24681_24730 = state_24675__$1;
(statearr_24681_24730[(2)] = null);

(statearr_24681_24730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (4))){
var inst_24609 = (state_24675[(14)]);
var inst_24608 = (state_24675[(15)]);
var inst_24608__$1 = (state_24675[(2)]);
var inst_24609__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24608__$1,(0),null);
var inst_24610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24608__$1,(1),null);
var state_24675__$1 = (function (){var statearr_24682 = state_24675;
(statearr_24682[(14)] = inst_24609__$1);

(statearr_24682[(15)] = inst_24608__$1);

(statearr_24682[(16)] = inst_24610);

return statearr_24682;
})();
if(cljs.core.truth_(inst_24609__$1)){
var statearr_24683_24731 = state_24675__$1;
(statearr_24683_24731[(1)] = (5));

} else {
var statearr_24684_24732 = state_24675__$1;
(statearr_24684_24732[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (15))){
var inst_24656 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24688_24733 = state_24675__$1;
(statearr_24688_24733[(2)] = inst_24656);

(statearr_24688_24733[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (21))){
var inst_24651 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24689_24734 = state_24675__$1;
(statearr_24689_24734[(2)] = inst_24651);

(statearr_24689_24734[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (13))){
var inst_24627 = (state_24675[(9)]);
var inst_24626 = (state_24675[(10)]);
var inst_24624 = (state_24675[(11)]);
var inst_24625 = (state_24675[(12)]);
var inst_24632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24625,inst_24627);
var inst_24633 = cljs.core.async.close_BANG_(inst_24632);
var inst_24634 = (inst_24627 + (1));
var tmp24685 = inst_24626;
var tmp24686 = inst_24624;
var tmp24687 = inst_24625;
var inst_24624__$1 = tmp24686;
var inst_24625__$1 = tmp24687;
var inst_24626__$1 = tmp24685;
var inst_24627__$1 = inst_24634;
var state_24675__$1 = (function (){var statearr_24690 = state_24675;
(statearr_24690[(9)] = inst_24627__$1);

(statearr_24690[(17)] = inst_24633);

(statearr_24690[(10)] = inst_24626__$1);

(statearr_24690[(11)] = inst_24624__$1);

(statearr_24690[(12)] = inst_24625__$1);

return statearr_24690;
})();
var statearr_24691_24735 = state_24675__$1;
(statearr_24691_24735[(2)] = null);

(statearr_24691_24735[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (22))){
var inst_24602 = (state_24675[(13)]);
var inst_24610 = (state_24675[(16)]);
var inst_24662 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_24602,inst_24610);
var inst_24602__$1 = inst_24662;
var state_24675__$1 = (function (){var statearr_24692 = state_24675;
(statearr_24692[(13)] = inst_24602__$1);

return statearr_24692;
})();
var statearr_24693_24736 = state_24675__$1;
(statearr_24693_24736[(2)] = null);

(statearr_24693_24736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (6))){
var state_24675__$1 = state_24675;
var statearr_24694_24737 = state_24675__$1;
(statearr_24694_24737[(2)] = null);

(statearr_24694_24737[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (17))){
var state_24675__$1 = state_24675;
var statearr_24695_24738 = state_24675__$1;
(statearr_24695_24738[(2)] = null);

(statearr_24695_24738[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (3))){
var inst_24673 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24675__$1,inst_24673);
} else {
if((state_val_24676 === (12))){
var inst_24658 = (state_24675[(2)]);
var inst_24659 = cljs.core.PersistentVector.EMPTY;
var inst_24602 = inst_24659;
var state_24675__$1 = (function (){var statearr_24697 = state_24675;
(statearr_24697[(13)] = inst_24602);

(statearr_24697[(18)] = inst_24658);

return statearr_24697;
})();
var statearr_24698_24739 = state_24675__$1;
(statearr_24698_24739[(2)] = null);

(statearr_24698_24739[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (2))){
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24675__$1,(4),in_chan);
} else {
if((state_val_24676 === (23))){
var inst_24602 = (state_24675[(13)]);
var tmp24696 = inst_24602;
var inst_24602__$1 = tmp24696;
var state_24675__$1 = (function (){var statearr_24699 = state_24675;
(statearr_24699[(13)] = inst_24602__$1);

return statearr_24699;
})();
var statearr_24700_24740 = state_24675__$1;
(statearr_24700_24740[(2)] = null);

(statearr_24700_24740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (19))){
var inst_24637 = (state_24675[(7)]);
var inst_24641 = cljs.core.chunk_first(inst_24637);
var inst_24642 = cljs.core.chunk_rest(inst_24637);
var inst_24643 = cljs.core.count(inst_24641);
var inst_24624 = inst_24642;
var inst_24625 = inst_24641;
var inst_24626 = inst_24643;
var inst_24627 = (0);
var state_24675__$1 = (function (){var statearr_24702 = state_24675;
(statearr_24702[(9)] = inst_24627);

(statearr_24702[(10)] = inst_24626);

(statearr_24702[(11)] = inst_24624);

(statearr_24702[(12)] = inst_24625);

return statearr_24702;
})();
var statearr_24703_24741 = state_24675__$1;
(statearr_24703_24741[(2)] = null);

(statearr_24703_24741[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (11))){
var inst_24627 = (state_24675[(9)]);
var inst_24626 = (state_24675[(10)]);
var inst_24629 = (inst_24627 < inst_24626);
var inst_24630 = inst_24629;
var state_24675__$1 = state_24675;
if(cljs.core.truth_(inst_24630)){
var statearr_24704_24742 = state_24675__$1;
(statearr_24704_24742[(1)] = (13));

} else {
var statearr_24705_24743 = state_24675__$1;
(statearr_24705_24743[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (9))){
var inst_24609 = (state_24675[(14)]);
var inst_24602 = (state_24675[(13)]);
var inst_24608 = (state_24675[(15)]);
var inst_24610 = (state_24675[(16)]);
var inst_24612 = (function (){var waits = inst_24602;
var vec__24604 = inst_24608;
var command = inst_24609;
var args = inst_24610;
return ((function (waits,vec__24604,command,args,inst_24609,inst_24602,inst_24608,inst_24610,state_val_24676,c__19193__auto__){
return (function (){
var G__24706 = this$;
var G__24707 = cljs.core.cst$kw$loaded_DASH_data;
return (keechma.controller.execute.cljs$core$IFn$_invoke$arity$2 ? keechma.controller.execute.cljs$core$IFn$_invoke$arity$2(G__24706,G__24707) : keechma.controller.execute.call(null,G__24706,G__24707));
});
;})(waits,vec__24604,command,args,inst_24609,inst_24602,inst_24608,inst_24610,state_val_24676,c__19193__auto__))
})();
var inst_24613 = cljs.core.cst$kw$dataloader.cljs$core$IFn$_invoke$arity$1(this$);
var inst_24614 = (keechma.controller.context.cljs$core$IFn$_invoke$arity$1 ? keechma.controller.context.cljs$core$IFn$_invoke$arity$1(this$) : keechma.controller.context.call(null,this$));
var inst_24615 = (inst_24613.cljs$core$IFn$_invoke$arity$2 ? inst_24613.cljs$core$IFn$_invoke$arity$2(app_db_atom,inst_24614) : inst_24613.call(null,app_db_atom,inst_24614));
var inst_24616 = promesa.core.map(inst_24612,inst_24615);
var tmp24701 = inst_24602;
var inst_24602__$1 = tmp24701;
var state_24675__$1 = (function (){var statearr_24708 = state_24675;
(statearr_24708[(13)] = inst_24602__$1);

(statearr_24708[(19)] = inst_24616);

return statearr_24708;
})();
var statearr_24709_24744 = state_24675__$1;
(statearr_24709_24744[(2)] = null);

(statearr_24709_24744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (5))){
var inst_24609 = (state_24675[(14)]);
var state_24675__$1 = state_24675;
var G__24710_24745 = inst_24609;
var G__24710_24746__$1 = (((G__24710_24745 instanceof cljs.core.Keyword))?G__24710_24745.fqn:null);
switch (G__24710_24746__$1) {
case "load-data":
var statearr_24711_24748 = state_24675__$1;
(statearr_24711_24748[(1)] = (9));


break;
case "loaded-data":
var statearr_24712_24749 = state_24675__$1;
(statearr_24712_24749[(1)] = (10));


break;
case "waits":
var statearr_24713_24750 = state_24675__$1;
(statearr_24713_24750[(1)] = (22));


break;
default:
var statearr_24714_24751 = state_24675__$1;
(statearr_24714_24751[(1)] = (23));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (14))){
var inst_24637 = (state_24675[(7)]);
var inst_24624 = (state_24675[(11)]);
var inst_24637__$1 = cljs.core.seq(inst_24624);
var state_24675__$1 = (function (){var statearr_24715 = state_24675;
(statearr_24715[(7)] = inst_24637__$1);

return statearr_24715;
})();
if(inst_24637__$1){
var statearr_24716_24752 = state_24675__$1;
(statearr_24716_24752[(1)] = (16));

} else {
var statearr_24717_24753 = state_24675__$1;
(statearr_24717_24753[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (16))){
var inst_24637 = (state_24675[(7)]);
var inst_24639 = cljs.core.chunked_seq_QMARK_(inst_24637);
var state_24675__$1 = state_24675;
if(inst_24639){
var statearr_24718_24754 = state_24675__$1;
(statearr_24718_24754[(1)] = (19));

} else {
var statearr_24719_24755 = state_24675__$1;
(statearr_24719_24755[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (10))){
var inst_24602 = (state_24675[(13)]);
var inst_24623 = cljs.core.seq(inst_24602);
var inst_24624 = inst_24623;
var inst_24625 = null;
var inst_24626 = (0);
var inst_24627 = (0);
var state_24675__$1 = (function (){var statearr_24720 = state_24675;
(statearr_24720[(9)] = inst_24627);

(statearr_24720[(10)] = inst_24626);

(statearr_24720[(11)] = inst_24624);

(statearr_24720[(12)] = inst_24625);

return statearr_24720;
})();
var statearr_24721_24756 = state_24675__$1;
(statearr_24721_24756[(2)] = null);

(statearr_24721_24756[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (18))){
var inst_24654 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24722_24757 = state_24675__$1;
(statearr_24722_24757[(2)] = inst_24654);

(statearr_24722_24757[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24676 === (8))){
var inst_24668 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24723_24758 = state_24675__$1;
(statearr_24723_24758[(2)] = inst_24668);

(statearr_24723_24758[(1)] = (7));


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
});})(c__19193__auto__))
;
return ((function (switch__19091__auto__,c__19193__auto__){
return (function() {
var keechma$toolbox$dataloader$controller$state_machine__19092__auto__ = null;
var keechma$toolbox$dataloader$controller$state_machine__19092__auto____0 = (function (){
var statearr_24724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24724[(0)] = keechma$toolbox$dataloader$controller$state_machine__19092__auto__);

(statearr_24724[(1)] = (1));

return statearr_24724;
});
var keechma$toolbox$dataloader$controller$state_machine__19092__auto____1 = (function (state_24675){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_24675);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e24725){if((e24725 instanceof Object)){
var ex__19095__auto__ = e24725;
var statearr_24726_24759 = state_24675;
(statearr_24726_24759[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24675);

return cljs.core.cst$kw$recur;
} else {
throw e24725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__24760 = state_24675;
state_24675 = G__24760;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$state_machine__19092__auto__ = function(state_24675){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$state_machine__19092__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$state_machine__19092__auto____1.call(this,state_24675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$controller$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$state_machine__19092__auto____0;
keechma$toolbox$dataloader$controller$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$state_machine__19092__auto____1;
return keechma$toolbox$dataloader$controller$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_24727 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_24727[(6)] = c__19193__auto__);

return statearr_24727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
}));
/**
 * Dataloader controller constructor
 */
keechma.toolbox.dataloader.controller.constructor$ = (function keechma$toolbox$dataloader$controller$constructor(datasources,edb_schema){
return keechma.toolbox.dataloader.controller.__GT_Controller(keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2(datasources,edb_schema));
});
/**
 * 
 * 
 * Registers dataloader controller to the controller map
 * 
 * ```clojure
 *  (def app
 *   {:controllers (-> {}
 *                  (keechma.toolbox.dataloader.controller/register datasources-map edb-schema))})
 * ```
 * 
 *   `keechma.toolbox.dataloader.controller/register` function expects three arguments:
 * 
 * - controller map
 * - datasources map
 * - EDB schema
 * 
 * It returns a new version of the controller map with the dataloader controller registered.
 * 
 * **Datasources**
 * 
 * Datasource is an abstraction of any data that is loaded from the "outside" world. It can be an API endpoint, local storage value or any other data that is not present in the application state.
 * 
 * Dataloader allows you to declaratively list your datasources. It then determines when and how the datasources should be loaded. Datasources can be defined as a graph, where datasources can depend on other datasources. This removes any need to manually load data in the correct order. When datasources params or depenedencies change, dataloader will invalidate that datasource and reload it.
 * 
 * Dataloader checks it's datasources on each route change. If the datasource `params` function returns a result different from the previous result, this datasource (and any datasources that depend on it) will be reloaded.
 * 
 * Dataloader can be manually triggered by sending the `:load-data` command to the dataloader controller.
 * 
 * **Example**
 * 
 * ```clojure
 * 
 * (defn promised-datasource
 *  ([] (promised-datasource nil))
 *  ([data]
 *   (fn [params]
 *  (map (fn [loader-params]
 *         (p/promise (fn [resolve reject]
 *                      (let [value (or data (:params loader-params))]
 *                        (js/setTimeout #(resolve value) 1)))))
 *       params))))
 * 
 * (def simple-promised-datasource (promised-datasource))
 * 
 * (def simple-datasources
 *  {:jwt
 *   {:target [:kv :jwt]
 * :loader (promised-datasource)
 * :processor (fn [value datasource]
 *              (str value "!"))
 * :params (fn [prev route _]
 *           (or (:jwt route) "JWT"))}
 * 
 *   :current-user
 *   {:target [:kv :user :current]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :current-user-id 1})}
 * 
 *   :users
 *   {:target [:kv :user :list]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :users [{:id 1} {:id 2}]})}
 * 
 *   :current-user-favorites
 *   {:target [:kv :favorites :current]
 * :deps   [:jwt :current-user]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt current-user]}]
 *           {:jwt jwt
 *            :current-user current-user
 *            :favorites [{:id 3} {:id 4}]})}})
 * ```
 * 
 * A lot of stuff is happening in this example, so let's explain them one by one.
 * 
 * `promised-datasource` function is used as an example loader. The important thing to note here is that loader functions accept an array of requests. This means that you can use this function as an optimization point, a place where you can optimize the requests - remove duplicates or combine them into one request. Loader function should return a list of promises or results (these can be combined). Dataloader will wait for each promise to resolve, and then continue loading the dependent datasources.
 * 
 * Datasources are registered in the map, and the key under which the datasource is registered can be used by the other datasources to depend on it.
 * 
 * Each datasource map can have the following attributes:
 * 
 * - `:target` - where to store the returned data
 * - `:params` - function that returns the params needed to load the data
 * - `:loader` - function that is used to load the data, this function gets a list of requests
 * - `:deps` - list of datasources that the datasource depends on
 * - `:processor` - function that processes the result data before it gets stored in the app-db
 * 
 * **`:target` attribute**
 * 
 * Target attribute tells dataloader where it should store the loaded data. It has three different forms:
 * 
 * - general path - `[:kv :user]` - it will be stored under this path in the app-db
 * - EntityDB collection path - `[:edb/collection :user/list]` - If the first element of the target vector is `:edb/collection` keyword, the results will be treated as the EntityDB collection and the second element of the vector will be split on `/` to determine where this collection should be stored. If the second element of the target vector looked like `:user/list` the data would be stored in the collection named `:list` for the entity named `:user`.
 * - EntityDB named item - `[:edb/named-item :user/current]` - this will store the EntityDB named item, using the same rules like the EntityDB collection target to determine where the item should be stored.
 * 
 * **`:params` attribute**
 * 
 * Params function returns the params needed to load the datasource. It receives three arguments:
 * 
 * - previously loaded value
 * - current route
 * - datasource dependencies
 * 
 * This function is called to determine the current datasource state. If the returned value is different from the previously returned value, the datasource will be reloaded. Loader function receives the params, and it has to make sense of it. Even if your params fn returns `nil`, loader function will be called. It is loader function's responsobility to decide what the returned params mean.
 * 
 * **`:loader`** attribute:
 * 
 * Loader function is responsible for the data loading. This is where you should place your AJAX request functions. Loader function will receive a vector of requests (one element for each "triggered" datasource). Each request comes from a datasource, and it contains the following attributes:
 * 
 * - `:params` - value returned from the "params" function
 * - `:prev` - previously loaded value
 * - `:datasource` - key under which the datasource is registered
 * - `:app-db` - current app-db state
 * - `:target` - path where data will be stored in the app-db
 * 
 * Loader function should return a vector (one item for each request). Values in the returned vector can be either promises or resolved values.
 * 
 * 
 * **Manually triggering the Dataloader**
 * 
 * In some cases you will want to manually trigger the dataloader without the route change. For instance you might obtain a JWT token as a result of some user's action, and then reload all datasources that depend on it. Dataloader controller can manually trigger the dataloader. You can achieve this by sending the `:load-data` command to the dataloader controller:
 * 
 * ```clojure
 * (ns some.namespace
 *   (:require [keechma.toolbox.dataloader.core :as dataloader]
 *      [keechma.controller :as controller]))
 * 
 * (defn trigger-dataloader [ctrl]
 *   (controller/send-command ctrl [dataloader/id-key :load-data])) ;; dataloader controller will be registered under the dataloader/id-key keyword
 * ```
 * 
 * This will reload all invalidated datasources.
 */
keechma.toolbox.dataloader.controller.register = (function keechma$toolbox$dataloader$controller$register(var_args){
var G__24762 = arguments.length;
switch (G__24762) {
case 2:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,datasources,edb_schema);
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3 = (function (controllers,datasources,edb_schema){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controllers,keechma.toolbox.dataloader.core.id_key,keechma.toolbox.dataloader.controller.constructor$(datasources,edb_schema));
});

keechma.toolbox.dataloader.controller.register.cljs$lang$maxFixedArity = 3;

