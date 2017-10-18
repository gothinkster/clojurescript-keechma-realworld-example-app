// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('keechma.reporter');
keechma.controller.not_implemented = cljs.core.cst$kw$keechma$controller_SLASH_not_DASH_implemented;
/**
 * Helper function to dispatch commands from the `handler` function.
 * 
 *   Most of the time, handler function will just dispatch the commands
 *   to other functions. This functions provides a shortcut for that case.
 * 
 *   ```clojure
 *   (defrecord Controller []
 *  IController
 *  (handler [_ app-db-atom in-chan _]
 *    (dispatcher app-db-atom in-chan {:command-name some-fn})))
 *   ```
 */
keechma.controller.dispatcher = (function keechma$controller$dispatcher(app_db_atom,in_chan,actions){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_23538){
var state_val_23539 = (state_23538[(1)]);
if((state_val_23539 === (7))){
var inst_23522 = (state_23538[(7)]);
var inst_23529 = (state_23538[(2)]);
var state_23538__$1 = (function (){var statearr_23540 = state_23538;
(statearr_23540[(8)] = inst_23529);

return statearr_23540;
})();
if(cljs.core.truth_(inst_23522)){
var statearr_23541_23556 = state_23538__$1;
(statearr_23541_23556[(1)] = (8));

} else {
var statearr_23542_23557 = state_23538__$1;
(statearr_23542_23557[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23539 === (1))){
var state_23538__$1 = state_23538;
var statearr_23543_23558 = state_23538__$1;
(statearr_23543_23558[(2)] = null);

(statearr_23543_23558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23539 === (4))){
var inst_23522 = (state_23538[(7)]);
var inst_23524 = (state_23538[(9)]);
var inst_23521 = (state_23538[(2)]);
var inst_23522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23521,(0),null);
var inst_23523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23521,(1),null);
var inst_23524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(actions,inst_23522__$1);
var state_23538__$1 = (function (){var statearr_23544 = state_23538;
(statearr_23544[(7)] = inst_23522__$1);

(statearr_23544[(10)] = inst_23523);

(statearr_23544[(9)] = inst_23524__$1);

return statearr_23544;
})();
if(cljs.core.truth_(inst_23524__$1)){
var statearr_23545_23559 = state_23538__$1;
(statearr_23545_23559[(1)] = (5));

} else {
var statearr_23546_23560 = state_23538__$1;
(statearr_23546_23560[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23539 === (6))){
var state_23538__$1 = state_23538;
var statearr_23547_23561 = state_23538__$1;
(statearr_23547_23561[(2)] = null);

(statearr_23547_23561[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23539 === (3))){
var inst_23536 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23538__$1,inst_23536);
} else {
if((state_val_23539 === (2))){
var state_23538__$1 = state_23538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23538__$1,(4),in_chan);
} else {
if((state_val_23539 === (9))){
var state_23538__$1 = state_23538;
var statearr_23548_23562 = state_23538__$1;
(statearr_23548_23562[(2)] = null);

(statearr_23548_23562[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23539 === (5))){
var inst_23523 = (state_23538[(10)]);
var inst_23524 = (state_23538[(9)]);
var inst_23526 = (inst_23524.cljs$core$IFn$_invoke$arity$2 ? inst_23524.cljs$core$IFn$_invoke$arity$2(app_db_atom,inst_23523) : inst_23524.call(null,app_db_atom,inst_23523));
var state_23538__$1 = state_23538;
var statearr_23549_23563 = state_23538__$1;
(statearr_23549_23563[(2)] = inst_23526);

(statearr_23549_23563[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23539 === (10))){
var inst_23534 = (state_23538[(2)]);
var state_23538__$1 = state_23538;
var statearr_23550_23564 = state_23538__$1;
(statearr_23550_23564[(2)] = inst_23534);

(statearr_23550_23564[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23539 === (8))){
var state_23538__$1 = state_23538;
var statearr_23551_23565 = state_23538__$1;
(statearr_23551_23565[(2)] = null);

(statearr_23551_23565[(1)] = (2));


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
var keechma$controller$dispatcher_$_state_machine__19092__auto__ = null;
var keechma$controller$dispatcher_$_state_machine__19092__auto____0 = (function (){
var statearr_23552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23552[(0)] = keechma$controller$dispatcher_$_state_machine__19092__auto__);

(statearr_23552[(1)] = (1));

return statearr_23552;
});
var keechma$controller$dispatcher_$_state_machine__19092__auto____1 = (function (state_23538){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_23538);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e23553){if((e23553 instanceof Object)){
var ex__19095__auto__ = e23553;
var statearr_23554_23566 = state_23538;
(statearr_23554_23566[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23538);

return cljs.core.cst$kw$recur;
} else {
throw e23553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__23567 = state_23538;
state_23538 = G__23567;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$controller$dispatcher_$_state_machine__19092__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return keechma$controller$dispatcher_$_state_machine__19092__auto____0.call(this);
case 1:
return keechma$controller$dispatcher_$_state_machine__19092__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller$dispatcher_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller$dispatcher_$_state_machine__19092__auto____0;
keechma$controller$dispatcher_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller$dispatcher_$_state_machine__19092__auto____1;
return keechma$controller$dispatcher_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_23555 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_23555[(6)] = c__19193__auto__);

return statearr_23555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
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
keechma.controller.SerializedController = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k23569,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__23573 = k23569;
var G__23573__$1 = (((G__23573 instanceof cljs.core.Keyword))?G__23573.fqn:null);
switch (G__23573__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23569,else__12205__auto__);

}
});

keechma.controller.SerializedController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.controller.SerializedController{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23568){
var self__ = this;
var G__23568__$1 = this;
return (new cljs.core.RecordIter((0),G__23568__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.controller.SerializedController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.controller.SerializedController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__23574 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (2020583419 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__23574(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23570,other23571){
var self__ = this;
var this23570__$1 = this;
return (!((other23571 == null))) && ((this23570__$1.constructor === other23571.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23570__$1.params,other23571.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23570__$1.__extmap,other23571.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__23568){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__23575 = cljs.core.keyword_identical_QMARK_;
var expr__23576 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__23578 = cljs.core.cst$kw$params;
var G__23579 = expr__23576;
return (pred__23575.cljs$core$IFn$_invoke$arity$2 ? pred__23575.cljs$core$IFn$_invoke$arity$2(G__23578,G__23579) : pred__23575.call(null,G__23578,G__23579));
})())){
return (new keechma.controller.SerializedController(G__23568,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__23568),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__23568){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,G__23568,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.controller.SerializedController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null);
});

keechma.controller.SerializedController.cljs$lang$type = true;

keechma.controller.SerializedController.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.controller/SerializedController");
});

keechma.controller.SerializedController.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.controller/SerializedController");
});

keechma.controller.__GT_SerializedController = (function keechma$controller$__GT_SerializedController(params){
return (new keechma.controller.SerializedController(params,null,null,null));
});

keechma.controller.map__GT_SerializedController = (function keechma$controller$map__GT_SerializedController(G__23572){
return (new keechma.controller.SerializedController(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__23572),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23572,cljs.core.cst$kw$params)),null));
});

keechma.controller.record_type = (function keechma$controller$record_type(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23583 = arguments.length;
var i__12776__auto___23584 = (0);
while(true){
if((i__12776__auto___23584 < len__12775__auto___23583)){
args__12782__auto__.push((arguments[i__12776__auto___23584]));

var G__23585 = (i__12776__auto___23584 + (1));
i__12776__auto___23584 = G__23585;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic = (function (record,args){
return cljs.core.type(record);
});

keechma.controller.record_type.cljs$lang$maxFixedArity = (1);

keechma.controller.record_type.cljs$lang$applyTo = (function (seq23581){
var G__23582 = cljs.core.first(seq23581);
var seq23581__$1 = cljs.core.next(seq23581);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic(G__23582,seq23581__$1);
});

if(typeof keechma.controller.params !== 'undefined'){
} else {
/**
 * Receives the `route-params` and returns either the `params` for the controller or `nil`
 */
keechma.controller.params = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","params"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.start !== 'undefined'){
} else {
/**
 * Called when the controller is started. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.start = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","start"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.wake !== 'undefined'){
} else {
/**
 * Called when the controller is started from the saved state stored on the server. It will be
 * called instead of the `start` function if the `ssr-handler` function is implemented. This
 * allows you to manually revive the serialized data if needed. Usually this function is not
 * needed, but if you for instance start the inner application from the controller, you can
 * use this function to wake the inner app.
 */
keechma.controller.wake = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","wake"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.stop !== 'undefined'){
} else {
/**
 * Called when the controller is stopped. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.stop = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","stop"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.handler !== 'undefined'){
} else {
/**
 * Called after the `start` function. You can listen to the commands on the `in-chan` 
 *   inside the `go` block. This is the function in which you implement anything that reacts
 *   to the user commands (coming from the UI).
 */
keechma.controller.handler = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","handler"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.ssr_handler !== 'undefined'){
} else {
/**
 * Called in after the `start` (instead of the `handler` function) function in the server
 *   side context. This function should call the `done` callback when it has completed the 
 *   server side data loading. Returning `::not-implemented` which is a default behavior will
 *   mark the controller as non server side.
 */
keechma.controller.ssr_handler = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","ssr-handler"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.context !== 'undefined'){
} else {
/**
 * Return the context passed to the application.
 */
keechma.controller.context = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","context"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.report !== 'undefined'){
} else {
keechma.controller.report = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","report"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.execute !== 'undefined'){
} else {
/**
 * Puts the command on the controller's `in-chan` which is passed as an argument to the 
 *   `handler` function. Can be called from the `start` and `stop` functions.
 */
keechma.controller.execute = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","execute"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.send_command !== 'undefined'){
} else {
/**
 * Sends a command to another controller
 */
keechma.controller.send_command = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","send-command"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.is_running_QMARK_ !== 'undefined'){
} else {
/**
 * Returns `true` if this controller is still running. You can use this if you have some
 *   kind of async action, and you want to make sure that the controller is still running 
 *   when you receive the results.
 */
keechma.controller.is_running_QMARK_ = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","is-running?"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.controller.redirect !== 'undefined'){
} else {
/**
 * Redirects the page to the URL based on the params.
 */
keechma.controller.redirect = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.controller","redirect"),keechma.controller.record_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
keechma.controller.params.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller,route_params){
return route_params;
}));
keechma.controller.start.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller,params,app_db){
return app_db;
}));
keechma.controller.wake.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller,params,app_db){
return app_db;
}));
keechma.controller.stop.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller,params,app_db){
return app_db;
}));
keechma.controller.handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller,app_db_atom,in_chan,out_chan){
return null;
}));
keechma.controller.ssr_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller,app_db_atom,done,in_chan,out_chan){
return keechma.controller.not_implemented;
}));
keechma.controller.context.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() {
var G__23586 = null;
var G__23586__1 = (function (controller){
return cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(controller);
});
var G__23586__2 = (function (controller,key){
var key_vec = ((cljs.core.vector_QMARK_(key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null),key_vec));
});
G__23586 = function(controller,key){
switch(arguments.length){
case 1:
return G__23586__1.call(this,controller);
case 2:
return G__23586__2.call(this,controller,key);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23586.cljs$core$IFn$_invoke$arity$1 = G__23586__1;
G__23586.cljs$core$IFn$_invoke$arity$2 = G__23586__2;
return G__23586;
})()
);
keechma.controller.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() {
var G__23606 = null;
var G__23606__4 = (function (controller,direction,name,payload){
var G__23587 = controller;
var G__23588 = direction;
var G__23589 = name;
var G__23590 = payload;
var G__23591 = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__23592 = cljs.core.cst$kw$info;
return (keechma.controller.report.cljs$core$IFn$_invoke$arity$6 ? keechma.controller.report.cljs$core$IFn$_invoke$arity$6(G__23587,G__23588,G__23589,G__23590,G__23591,G__23592) : keechma.controller.report.call(null,G__23587,G__23588,G__23589,G__23590,G__23591,G__23592));
});
var G__23606__5 = (function (controller,direction,name,payload,cmd_info){
var G__23593 = controller;
var G__23594 = direction;
var G__23595 = name;
var G__23596 = payload;
var G__23597 = cmd_info;
var G__23598 = cljs.core.cst$kw$info;
return (keechma.controller.report.cljs$core$IFn$_invoke$arity$6 ? keechma.controller.report.cljs$core$IFn$_invoke$arity$6(G__23593,G__23594,G__23595,G__23596,G__23597,G__23598) : keechma.controller.report.call(null,G__23593,G__23594,G__23595,G__23596,G__23597,G__23598));
});
var G__23606__6 = (function (controller,direction,name,payload,cmd_info,severity){
var reporter = (function (){var or__11514__auto__ = cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(controller);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return ((function (or__11514__auto__){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6,___$7){
return null;
});
;})(or__11514__auto__))
}
})();
var topic = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(controller);
var G__23599 = cljs.core.cst$kw$controller;
var G__23600 = direction;
var G__23601 = topic;
var G__23602 = name;
var G__23603 = payload;
var G__23604 = cmd_info;
var G__23605 = severity;
return (reporter.cljs$core$IFn$_invoke$arity$7 ? reporter.cljs$core$IFn$_invoke$arity$7(G__23599,G__23600,G__23601,G__23602,G__23603,G__23604,G__23605) : reporter.call(null,G__23599,G__23600,G__23601,G__23602,G__23603,G__23604,G__23605));
});
G__23606 = function(controller,direction,name,payload,cmd_info,severity){
switch(arguments.length){
case 4:
return G__23606__4.call(this,controller,direction,name,payload);
case 5:
return G__23606__5.call(this,controller,direction,name,payload,cmd_info);
case 6:
return G__23606__6.call(this,controller,direction,name,payload,cmd_info,severity);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23606.cljs$core$IFn$_invoke$arity$4 = G__23606__4;
G__23606.cljs$core$IFn$_invoke$arity$5 = G__23606__5;
G__23606.cljs$core$IFn$_invoke$arity$6 = G__23606__6;
return G__23606;
})()
);
keechma.controller.execute.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() {
var G__23612 = null;
var G__23612__2 = (function (controller,command_name){
return (keechma.controller.execute.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(controller,command_name,null) : keechma.controller.execute.call(null,controller,command_name,null));
});
var G__23612__3 = (function (controller,command_name,args){
var cmd_info = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__23607_23613 = controller;
var G__23608_23614 = cljs.core.cst$kw$in;
var G__23609_23615 = command_name;
var G__23610_23616 = args;
var G__23611_23617 = cmd_info;
(keechma.controller.report.cljs$core$IFn$_invoke$arity$5 ? keechma.controller.report.cljs$core$IFn$_invoke$arity$5(G__23607_23613,G__23608_23614,G__23609_23615,G__23610_23616,G__23611_23617) : keechma.controller.report.call(null,G__23607_23613,G__23608_23614,G__23609_23615,G__23610_23616,G__23611_23617));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));
});
G__23612 = function(controller,command_name,args){
switch(arguments.length){
case 2:
return G__23612__2.call(this,controller,command_name);
case 3:
return G__23612__3.call(this,controller,command_name,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23612.cljs$core$IFn$_invoke$arity$2 = G__23612__2;
G__23612.cljs$core$IFn$_invoke$arity$3 = G__23612__3;
return G__23612;
})()
);
keechma.controller.send_command.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() {
var G__23623 = null;
var G__23623__2 = (function (controller,command_name){
return (keechma.controller.send_command.cljs$core$IFn$_invoke$arity$4 ? keechma.controller.send_command.cljs$core$IFn$_invoke$arity$4(controller,command_name,null,null) : keechma.controller.send_command.call(null,controller,command_name,null,null));
});
var G__23623__3 = (function (controller,command_name,args){
return (keechma.controller.send_command.cljs$core$IFn$_invoke$arity$4 ? keechma.controller.send_command.cljs$core$IFn$_invoke$arity$4(controller,command_name,args,null) : keechma.controller.send_command.call(null,controller,command_name,args,null));
});
var G__23623__4 = (function (controller,command_name,args,origin){
var out_chan = cljs.core.cst$kw$out_DASH_chan.cljs$core$IFn$_invoke$arity$1(controller);
var cmd_info = keechma.reporter.cmd_info.cljs$core$IFn$_invoke$arity$0();
var G__23618_23624 = controller;
var G__23619_23625 = cljs.core.cst$kw$out;
var G__23620_23626 = command_name;
var G__23621_23627 = args;
var G__23622_23628 = cmd_info;
(keechma.controller.report.cljs$core$IFn$_invoke$arity$5 ? keechma.controller.report.cljs$core$IFn$_invoke$arity$5(G__23618_23624,G__23619_23625,G__23620_23626,G__23621_23627,G__23622_23628) : keechma.controller.report.call(null,G__23618_23624,G__23619_23625,G__23620_23626,G__23621_23627,G__23622_23628));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});
G__23623 = function(controller,command_name,args,origin){
switch(arguments.length){
case 2:
return G__23623__2.call(this,controller,command_name);
case 3:
return G__23623__3.call(this,controller,command_name,args);
case 4:
return G__23623__4.call(this,controller,command_name,args,origin);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23623.cljs$core$IFn$_invoke$arity$2 = G__23623__2;
G__23623.cljs$core$IFn$_invoke$arity$3 = G__23623__3;
G__23623.cljs$core$IFn$_invoke$arity$4 = G__23623__4;
return G__23623;
})()
);
keechma.controller.is_running_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(controller,(function (){var fexpr__23629 = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(controller);
return (fexpr__23629.cljs$core$IFn$_invoke$arity$0 ? fexpr__23629.cljs$core$IFn$_invoke$arity$0() : fexpr__23629.call(null));
})());
}));
keechma.controller.redirect.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (controller,params){
var fexpr__23630 = cljs.core.cst$kw$redirect_DASH_fn.cljs$core$IFn$_invoke$arity$1(controller);
return (fexpr__23630.cljs$core$IFn$_invoke$arity$1 ? fexpr__23630.cljs$core$IFn$_invoke$arity$1(params) : fexpr__23630.call(null,params));
}));
