// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.dataloader.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.dataloader.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('promesa.core');
keechma.toolbox.dataloader.controller.chan__GT_promise = (function keechma$toolbox$dataloader$controller$chan__GT_promise(wait_chan,value){
return promesa.core.promise((function (resolve,reject){
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__){
return (function (state_24755){
var state_val_24756 = (state_24755[(1)]);
if((state_val_24756 === (1))){
var state_24755__$1 = state_24755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24755__$1,(2),wait_chan);
} else {
if((state_val_24756 === (2))){
var inst_24752 = (state_24755[(2)]);
var inst_24753 = (resolve.cljs$core$IFn$_invoke$arity$0 ? resolve.cljs$core$IFn$_invoke$arity$0() : resolve.call(null));
var state_24755__$1 = (function (){var statearr_24757 = state_24755;
(statearr_24757[(7)] = inst_24752);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24755__$1,inst_24753);
} else {
return null;
}
}
});})(c__17677__auto__))
;
return ((function (switch__17551__auto__,c__17677__auto__){
return (function() {
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto__ = null;
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto____0 = (function (){
var statearr_24761 = [null,null,null,null,null,null,null,null];
(statearr_24761[(0)] = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto__);

(statearr_24761[(1)] = (1));

return statearr_24761;
});
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto____1 = (function (state_24755){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_24755);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e24762){if((e24762 instanceof Object)){
var ex__17555__auto__ = e24762;
var statearr_24763_24765 = state_24755;
(statearr_24763_24765[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24755);

return cljs.core.cst$kw$recur;
} else {
throw e24762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__24766 = state_24755;
state_24755 = G__24766;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto__ = function(state_24755){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto____1.call(this,state_24755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto____0;
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto____1;
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__))
})();
var state__17679__auto__ = (function (){var statearr_24764 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_24764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_24764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__))
);

return c__17677__auto__;
}));
});
keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_ = (function keechma$toolbox$dataloader$controller$wait_dataloader_pipeline_BANG_(){
var wait_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (wait_chan){
return (function (value,app_db){
return keechma.toolbox.pipeline.core.send_command_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,cljs.core.cst$kw$waits], null),wait_chan);
});})(wait_chan))
,((function (wait_chan){
return (function (value,app_db){
return keechma.toolbox.dataloader.controller.chan__GT_promise(wait_chan,value);
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
 * @implements {keechma.controller.IController}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.toolbox.dataloader.controller.Controller = (function (dataloader,__meta,__extmap,__hash){
this.dataloader = dataloader;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.dataloader.controller.Controller.prototype.keechma$controller$IController$ = true;

keechma.toolbox.dataloader.controller.Controller.prototype.keechma$controller$IController$params$arity$2 = (function (this$,route_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(route_params);
});

keechma.toolbox.dataloader.controller.Controller.prototype.keechma$controller$IController$start$arity$3 = (function (this$,route_params,app_db){
var self__ = this;
var this$__$1 = this;
keechma.controller.execute.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$load_DASH_data);

return app_db;
});

keechma.toolbox.dataloader.controller.Controller.prototype.keechma$controller$IController$handler$arity$4 = (function (this$,app_db_atom,in_chan,out_chan){
var self__ = this;
var this$__$1 = this;
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,this$__$1){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,this$__$1){
return (function (state_24842){
var state_val_24843 = (state_24842[(1)]);
if((state_val_24843 === (7))){
var inst_24838 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24844_24902 = state_24842__$1;
(statearr_24844_24902[(2)] = inst_24838);

(statearr_24844_24902[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (20))){
var inst_24804 = (state_24842[(7)]);
var inst_24813 = cljs.core.first(inst_24804);
var inst_24814 = cljs.core.async.close_BANG_(inst_24813);
var inst_24815 = cljs.core.next(inst_24804);
var inst_24791 = inst_24815;
var inst_24792 = null;
var inst_24793 = (0);
var inst_24794 = (0);
var state_24842__$1 = (function (){var statearr_24845 = state_24842;
(statearr_24845[(8)] = inst_24814);

(statearr_24845[(9)] = inst_24792);

(statearr_24845[(10)] = inst_24791);

(statearr_24845[(11)] = inst_24794);

(statearr_24845[(12)] = inst_24793);

return statearr_24845;
})();
var statearr_24846_24903 = state_24842__$1;
(statearr_24846_24903[(2)] = null);

(statearr_24846_24903[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (1))){
var inst_24770 = cljs.core.PersistentVector.EMPTY;
var inst_24771 = inst_24770;
var state_24842__$1 = (function (){var statearr_24847 = state_24842;
(statearr_24847[(13)] = inst_24771);

return statearr_24847;
})();
var statearr_24848_24904 = state_24842__$1;
(statearr_24848_24904[(2)] = null);

(statearr_24848_24904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (4))){
var inst_24778 = (state_24842[(14)]);
var inst_24777 = (state_24842[(15)]);
var inst_24777__$1 = (state_24842[(2)]);
var inst_24778__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24777__$1,(0),null);
var inst_24779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24777__$1,(1),null);
var state_24842__$1 = (function (){var statearr_24849 = state_24842;
(statearr_24849[(14)] = inst_24778__$1);

(statearr_24849[(15)] = inst_24777__$1);

(statearr_24849[(16)] = inst_24779);

return statearr_24849;
})();
if(cljs.core.truth_(inst_24778__$1)){
var statearr_24850_24905 = state_24842__$1;
(statearr_24850_24905[(1)] = (5));

} else {
var statearr_24851_24906 = state_24842__$1;
(statearr_24851_24906[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (15))){
var inst_24823 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24855_24907 = state_24842__$1;
(statearr_24855_24907[(2)] = inst_24823);

(statearr_24855_24907[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (21))){
var inst_24818 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24856_24908 = state_24842__$1;
(statearr_24856_24908[(2)] = inst_24818);

(statearr_24856_24908[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (13))){
var inst_24792 = (state_24842[(9)]);
var inst_24791 = (state_24842[(10)]);
var inst_24794 = (state_24842[(11)]);
var inst_24793 = (state_24842[(12)]);
var inst_24799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24792,inst_24794);
var inst_24800 = cljs.core.async.close_BANG_(inst_24799);
var inst_24801 = (inst_24794 + (1));
var tmp24852 = inst_24792;
var tmp24853 = inst_24791;
var tmp24854 = inst_24793;
var inst_24791__$1 = tmp24853;
var inst_24792__$1 = tmp24852;
var inst_24793__$1 = tmp24854;
var inst_24794__$1 = inst_24801;
var state_24842__$1 = (function (){var statearr_24857 = state_24842;
(statearr_24857[(9)] = inst_24792__$1);

(statearr_24857[(10)] = inst_24791__$1);

(statearr_24857[(17)] = inst_24800);

(statearr_24857[(11)] = inst_24794__$1);

(statearr_24857[(12)] = inst_24793__$1);

return statearr_24857;
})();
var statearr_24858_24909 = state_24842__$1;
(statearr_24858_24909[(2)] = null);

(statearr_24858_24909[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (22))){
var inst_24771 = (state_24842[(13)]);
var inst_24779 = (state_24842[(16)]);
var inst_24829 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_24771,inst_24779);
var inst_24771__$1 = inst_24829;
var state_24842__$1 = (function (){var statearr_24859 = state_24842;
(statearr_24859[(13)] = inst_24771__$1);

return statearr_24859;
})();
var statearr_24860_24910 = state_24842__$1;
(statearr_24860_24910[(2)] = null);

(statearr_24860_24910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (6))){
var state_24842__$1 = state_24842;
var statearr_24861_24911 = state_24842__$1;
(statearr_24861_24911[(2)] = null);

(statearr_24861_24911[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (17))){
var state_24842__$1 = state_24842;
var statearr_24862_24912 = state_24842__$1;
(statearr_24862_24912[(2)] = null);

(statearr_24862_24912[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (3))){
var inst_24840 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24842__$1,inst_24840);
} else {
if((state_val_24843 === (12))){
var inst_24825 = (state_24842[(2)]);
var inst_24826 = cljs.core.PersistentVector.EMPTY;
var inst_24771 = inst_24826;
var state_24842__$1 = (function (){var statearr_24864 = state_24842;
(statearr_24864[(18)] = inst_24825);

(statearr_24864[(13)] = inst_24771);

return statearr_24864;
})();
var statearr_24865_24913 = state_24842__$1;
(statearr_24865_24913[(2)] = null);

(statearr_24865_24913[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (2))){
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24842__$1,(4),in_chan);
} else {
if((state_val_24843 === (23))){
var inst_24771 = (state_24842[(13)]);
var tmp24863 = inst_24771;
var inst_24771__$1 = tmp24863;
var state_24842__$1 = (function (){var statearr_24866 = state_24842;
(statearr_24866[(13)] = inst_24771__$1);

return statearr_24866;
})();
var statearr_24867_24914 = state_24842__$1;
(statearr_24867_24914[(2)] = null);

(statearr_24867_24914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (19))){
var inst_24804 = (state_24842[(7)]);
var inst_24808 = cljs.core.chunk_first(inst_24804);
var inst_24809 = cljs.core.chunk_rest(inst_24804);
var inst_24810 = cljs.core.count(inst_24808);
var inst_24791 = inst_24809;
var inst_24792 = inst_24808;
var inst_24793 = inst_24810;
var inst_24794 = (0);
var state_24842__$1 = (function (){var statearr_24869 = state_24842;
(statearr_24869[(9)] = inst_24792);

(statearr_24869[(10)] = inst_24791);

(statearr_24869[(11)] = inst_24794);

(statearr_24869[(12)] = inst_24793);

return statearr_24869;
})();
var statearr_24870_24915 = state_24842__$1;
(statearr_24870_24915[(2)] = null);

(statearr_24870_24915[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (11))){
var inst_24794 = (state_24842[(11)]);
var inst_24793 = (state_24842[(12)]);
var inst_24796 = (inst_24794 < inst_24793);
var inst_24797 = inst_24796;
var state_24842__$1 = state_24842;
if(cljs.core.truth_(inst_24797)){
var statearr_24871_24916 = state_24842__$1;
(statearr_24871_24916[(1)] = (13));

} else {
var statearr_24872_24917 = state_24842__$1;
(statearr_24872_24917[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (9))){
var inst_24778 = (state_24842[(14)]);
var inst_24777 = (state_24842[(15)]);
var inst_24771 = (state_24842[(13)]);
var inst_24779 = (state_24842[(16)]);
var inst_24781 = (function (){var waits = inst_24771;
var vec__24773 = inst_24777;
var command = inst_24778;
var args = inst_24779;
return ((function (waits,vec__24773,command,args,inst_24778,inst_24777,inst_24771,inst_24779,state_val_24843,c__17677__auto__,this$__$1){
return (function (){
return keechma.controller.execute.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$loaded_DASH_data);
});
;})(waits,vec__24773,command,args,inst_24778,inst_24777,inst_24771,inst_24779,state_val_24843,c__17677__auto__,this$__$1))
})();
var inst_24782 = (self__.dataloader.cljs$core$IFn$_invoke$arity$1 ? self__.dataloader.cljs$core$IFn$_invoke$arity$1(app_db_atom) : self__.dataloader.call(null,app_db_atom));
var inst_24783 = promesa.core.map(inst_24781,inst_24782);
var tmp24868 = inst_24771;
var inst_24771__$1 = tmp24868;
var state_24842__$1 = (function (){var statearr_24873 = state_24842;
(statearr_24873[(19)] = inst_24783);

(statearr_24873[(13)] = inst_24771__$1);

return statearr_24873;
})();
var statearr_24874_24918 = state_24842__$1;
(statearr_24874_24918[(2)] = null);

(statearr_24874_24918[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (5))){
var inst_24778 = (state_24842[(14)]);
var state_24842__$1 = state_24842;
var G__24875_24919 = (((inst_24778 instanceof cljs.core.Keyword))?inst_24778.fqn:null);
switch (G__24875_24919) {
case "load-data":
var statearr_24876_24921 = state_24842__$1;
(statearr_24876_24921[(1)] = (9));


break;
case "loaded-data":
var statearr_24877_24922 = state_24842__$1;
(statearr_24877_24922[(1)] = (10));


break;
case "waits":
var statearr_24878_24923 = state_24842__$1;
(statearr_24878_24923[(1)] = (22));


break;
default:
var statearr_24879_24924 = state_24842__$1;
(statearr_24879_24924[(1)] = (23));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (14))){
var inst_24804 = (state_24842[(7)]);
var inst_24791 = (state_24842[(10)]);
var inst_24804__$1 = cljs.core.seq(inst_24791);
var state_24842__$1 = (function (){var statearr_24880 = state_24842;
(statearr_24880[(7)] = inst_24804__$1);

return statearr_24880;
})();
if(inst_24804__$1){
var statearr_24881_24925 = state_24842__$1;
(statearr_24881_24925[(1)] = (16));

} else {
var statearr_24882_24926 = state_24842__$1;
(statearr_24882_24926[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (16))){
var inst_24804 = (state_24842[(7)]);
var inst_24806 = cljs.core.chunked_seq_QMARK_(inst_24804);
var state_24842__$1 = state_24842;
if(inst_24806){
var statearr_24883_24927 = state_24842__$1;
(statearr_24883_24927[(1)] = (19));

} else {
var statearr_24884_24928 = state_24842__$1;
(statearr_24884_24928[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (10))){
var inst_24771 = (state_24842[(13)]);
var inst_24790 = cljs.core.seq(inst_24771);
var inst_24791 = inst_24790;
var inst_24792 = null;
var inst_24793 = (0);
var inst_24794 = (0);
var state_24842__$1 = (function (){var statearr_24885 = state_24842;
(statearr_24885[(9)] = inst_24792);

(statearr_24885[(10)] = inst_24791);

(statearr_24885[(11)] = inst_24794);

(statearr_24885[(12)] = inst_24793);

return statearr_24885;
})();
var statearr_24886_24929 = state_24842__$1;
(statearr_24886_24929[(2)] = null);

(statearr_24886_24929[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (18))){
var inst_24821 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24887_24930 = state_24842__$1;
(statearr_24887_24930[(2)] = inst_24821);

(statearr_24887_24930[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24843 === (8))){
var inst_24835 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24888_24931 = state_24842__$1;
(statearr_24888_24931[(2)] = inst_24835);

(statearr_24888_24931[(1)] = (7));


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
});})(c__17677__auto__,this$__$1))
;
return ((function (switch__17551__auto__,c__17677__auto__,this$__$1){
return (function() {
var keechma$toolbox$dataloader$controller$state_machine__17552__auto__ = null;
var keechma$toolbox$dataloader$controller$state_machine__17552__auto____0 = (function (){
var statearr_24892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24892[(0)] = keechma$toolbox$dataloader$controller$state_machine__17552__auto__);

(statearr_24892[(1)] = (1));

return statearr_24892;
});
var keechma$toolbox$dataloader$controller$state_machine__17552__auto____1 = (function (state_24842){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_24842);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e24893){if((e24893 instanceof Object)){
var ex__17555__auto__ = e24893;
var statearr_24894_24932 = state_24842;
(statearr_24894_24932[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24842);

return cljs.core.cst$kw$recur;
} else {
throw e24893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__24933 = state_24842;
state_24842 = G__24933;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$state_machine__17552__auto__ = function(state_24842){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$state_machine__17552__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$state_machine__17552__auto____1.call(this,state_24842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$dataloader$controller$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$state_machine__17552__auto____0;
keechma$toolbox$dataloader$controller$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$state_machine__17552__auto____1;
return keechma$toolbox$dataloader$controller$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,this$__$1))
})();
var state__17679__auto__ = (function (){var statearr_24895 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_24895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_24895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,this$__$1))
);

return c__17677__auto__;
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k24768,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__24896 = (((k24768 instanceof cljs.core.Keyword))?k24768.fqn:null);
switch (G__24896) {
case "dataloader":
return self__.dataloader;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24768,else__10665__auto__);

}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.dataloader.controller.Controller{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dataloader,self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24767){
var self__ = this;
var G__24767__$1 = this;
return (new cljs.core.RecordIter((0),G__24767__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dataloader], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataloader,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__24767){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__24897 = cljs.core.keyword_identical_QMARK_;
var expr__24898 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__24900 = cljs.core.cst$kw$dataloader;
var G__24901 = expr__24898;
return (pred__24897.cljs$core$IFn$_invoke$arity$2 ? pred__24897.cljs$core$IFn$_invoke$arity$2(G__24900,G__24901) : pred__24897.call(null,G__24900,G__24901));
})())){
return (new keechma.toolbox.dataloader.controller.Controller(G__24767,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__24767),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dataloader,self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__24767){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,G__24767,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.dataloader.controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dataloader], null);
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$type = true;

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.__GT_Controller = (function keechma$toolbox$dataloader$controller$__GT_Controller(dataloader){
return (new keechma.toolbox.dataloader.controller.Controller(dataloader,null,null,null));
});

keechma.toolbox.dataloader.controller.map__GT_Controller = (function keechma$toolbox$dataloader$controller$map__GT_Controller(G__24769){
return (new keechma.toolbox.dataloader.controller.Controller(cljs.core.cst$kw$dataloader.cljs$core$IFn$_invoke$arity$1(G__24769),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24769,cljs.core.cst$kw$dataloader),null));
});

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
var args24935 = [];
var len__11171__auto___24938 = arguments.length;
var i__11172__auto___24939 = (0);
while(true){
if((i__11172__auto___24939 < len__11171__auto___24938)){
args24935.push((arguments[i__11172__auto___24939]));

var G__24940 = (i__11172__auto___24939 + (1));
i__11172__auto___24939 = G__24940;
continue;
} else {
}
break;
}

var G__24937 = args24935.length;
switch (G__24937) {
case 2:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24935.length)].join('')));

}
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,datasources,edb_schema);
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3 = (function (controllers,datasources,edb_schema){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controllers,keechma.toolbox.dataloader.core.id_key,keechma.toolbox.dataloader.controller.constructor$(datasources,edb_schema));
});

keechma.toolbox.dataloader.controller.register.cljs$lang$maxFixedArity = 3;

