// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.mount_controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('keechma.toolbox.forms.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
keechma.toolbox.forms.mount_controller.forms_for_route = (function keechma$toolbox$forms$mount_controller$forms_for_route(route,forms_params){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25200){
var vec__25201 = p__25200;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25201,(0),null);
var params_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25201,(1),null);
var temp__6753__auto__ = (params_fn.cljs$core$IFn$_invoke$arity$1 ? params_fn.cljs$core$IFn$_invoke$arity$1(route) : params_fn.call(null,route));
if(cljs.core.truth_(temp__6753__auto__)){
var id = temp__6753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,id], null);
} else {
return null;
}
}),forms_params);
});
keechma.toolbox.forms.mount_controller.mount_forms = (function keechma$toolbox$forms$mount_controller$mount_forms(controller,route,mounted_forms){
var forms_params = cljs.core.cst$kw$forms_DASH_params.cljs$core$IFn$_invoke$arity$1(controller);
var should_be_mounted_forms = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,keechma.toolbox.forms.mount_controller.forms_for_route(route,forms_params)));
var forms_to_unmount = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(mounted_forms,should_be_mounted_forms);
var forms_to_mount = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(should_be_mounted_forms,mounted_forms);
var seq__25212_25220 = cljs.core.seq(forms_to_unmount);
var chunk__25213_25221 = null;
var count__25214_25222 = (0);
var i__25215_25223 = (0);
while(true){
if((i__25215_25223 < count__25214_25222)){
var f_25224 = chunk__25213_25221.cljs$core$IIndexed$_nth$arity$2(null,i__25215_25223);
keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$unmount_DASH_form], null),f_25224);

var G__25225 = seq__25212_25220;
var G__25226 = chunk__25213_25221;
var G__25227 = count__25214_25222;
var G__25228 = (i__25215_25223 + (1));
seq__25212_25220 = G__25225;
chunk__25213_25221 = G__25226;
count__25214_25222 = G__25227;
i__25215_25223 = G__25228;
continue;
} else {
var temp__6753__auto___25229 = cljs.core.seq(seq__25212_25220);
if(temp__6753__auto___25229){
var seq__25212_25230__$1 = temp__6753__auto___25229;
if(cljs.core.chunked_seq_QMARK_(seq__25212_25230__$1)){
var c__10895__auto___25231 = cljs.core.chunk_first(seq__25212_25230__$1);
var G__25232 = cljs.core.chunk_rest(seq__25212_25230__$1);
var G__25233 = c__10895__auto___25231;
var G__25234 = cljs.core.count(c__10895__auto___25231);
var G__25235 = (0);
seq__25212_25220 = G__25232;
chunk__25213_25221 = G__25233;
count__25214_25222 = G__25234;
i__25215_25223 = G__25235;
continue;
} else {
var f_25236 = cljs.core.first(seq__25212_25230__$1);
keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$unmount_DASH_form], null),f_25236);

var G__25237 = cljs.core.next(seq__25212_25230__$1);
var G__25238 = null;
var G__25239 = (0);
var G__25240 = (0);
seq__25212_25220 = G__25237;
chunk__25213_25221 = G__25238;
count__25214_25222 = G__25239;
i__25215_25223 = G__25240;
continue;
}
} else {
}
}
break;
}

var seq__25216 = cljs.core.seq(forms_to_mount);
var chunk__25217 = null;
var count__25218 = (0);
var i__25219 = (0);
while(true){
if((i__25219 < count__25218)){
var f = chunk__25217.cljs$core$IIndexed$_nth$arity$2(null,i__25219);
keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$mount_DASH_form], null),f);

var G__25241 = seq__25216;
var G__25242 = chunk__25217;
var G__25243 = count__25218;
var G__25244 = (i__25219 + (1));
seq__25216 = G__25241;
chunk__25217 = G__25242;
count__25218 = G__25243;
i__25219 = G__25244;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__25216);
if(temp__6753__auto__){
var seq__25216__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25216__$1)){
var c__10895__auto__ = cljs.core.chunk_first(seq__25216__$1);
var G__25245 = cljs.core.chunk_rest(seq__25216__$1);
var G__25246 = c__10895__auto__;
var G__25247 = cljs.core.count(c__10895__auto__);
var G__25248 = (0);
seq__25216 = G__25245;
chunk__25217 = G__25246;
count__25218 = G__25247;
i__25219 = G__25248;
continue;
} else {
var f = cljs.core.first(seq__25216__$1);
keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$mount_DASH_form], null),f);

var G__25249 = cljs.core.next(seq__25216__$1);
var G__25250 = null;
var G__25251 = (0);
var G__25252 = (0);
seq__25216 = G__25249;
chunk__25217 = G__25250;
count__25218 = G__25251;
i__25219 = G__25252;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.toolbox.forms.mount_controller.get_mounted_forms = (function keechma$toolbox$forms$mount_controller$get_mounted_forms(app_db){
return cljs.core.set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$order], null)));
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
keechma.toolbox.forms.mount_controller.Controller = (function (forms_params,__meta,__extmap,__hash){
this.forms_params = forms_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.forms.mount_controller.Controller.prototype.keechma$controller$IController$ = true;

keechma.toolbox.forms.mount_controller.Controller.prototype.keechma$controller$IController$params$arity$2 = (function (this$,route){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(route);
});

keechma.toolbox.forms.mount_controller.Controller.prototype.keechma$controller$IController$start$arity$3 = (function (this$,params,app_db){
var self__ = this;
var this$__$1 = this;
keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$mount_DASH_forms,params);

return app_db;
});

keechma.toolbox.forms.mount_controller.Controller.prototype.keechma$controller$IController$handler$arity$4 = (function (this$,app_db_atom,in_chan,out_chan){
var self__ = this;
var this$__$1 = this;
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,this$__$1){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,this$__$1){
return (function (state_25284){
var state_val_25285 = (state_25284[(1)]);
if((state_val_25285 === (7))){
var inst_25263 = (state_25284[(7)]);
var inst_25268 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_25263);
var inst_25269 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_25270 = keechma.toolbox.forms.mount_controller.get_mounted_forms(inst_25269);
var inst_25271 = keechma.toolbox.forms.mount_controller.mount_forms(this$__$1,inst_25268,inst_25270);
var state_25284__$1 = state_25284;
var statearr_25286_25314 = state_25284__$1;
(statearr_25286_25314[(2)] = inst_25271);

(statearr_25286_25314[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (1))){
var state_25284__$1 = state_25284;
var statearr_25287_25315 = state_25284__$1;
(statearr_25287_25315[(2)] = null);

(statearr_25287_25315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (4))){
var inst_25262 = (state_25284[(8)]);
var inst_25261 = (state_25284[(2)]);
var inst_25262__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25261,(0),null);
var inst_25263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25261,(1),null);
var state_25284__$1 = (function (){var statearr_25288 = state_25284;
(statearr_25288[(7)] = inst_25263);

(statearr_25288[(8)] = inst_25262__$1);

return statearr_25288;
})();
var G__25289_25316 = (((inst_25262__$1 instanceof cljs.core.Keyword))?inst_25262__$1.fqn:null);
switch (G__25289_25316) {
case "mount-forms":
var statearr_25290_25318 = state_25284__$1;
(statearr_25290_25318[(1)] = (6));


break;
case "route-changed":
var statearr_25291_25319 = state_25284__$1;
(statearr_25291_25319[(1)] = (7));


break;
default:
var statearr_25292_25320 = state_25284__$1;
(statearr_25292_25320[(1)] = (8));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (6))){
var inst_25263 = (state_25284[(7)]);
var inst_25264 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var inst_25265 = keechma.toolbox.forms.mount_controller.get_mounted_forms(inst_25264);
var inst_25266 = keechma.toolbox.forms.mount_controller.mount_forms(this$__$1,inst_25263,inst_25265);
var state_25284__$1 = state_25284;
var statearr_25293_25321 = state_25284__$1;
(statearr_25293_25321[(2)] = inst_25266);

(statearr_25293_25321[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (3))){
var inst_25282 = (state_25284[(2)]);
var state_25284__$1 = state_25284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25284__$1,inst_25282);
} else {
if((state_val_25285 === (2))){
var state_25284__$1 = state_25284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25284__$1,(4),in_chan);
} else {
if((state_val_25285 === (11))){
var inst_25280 = (state_25284[(2)]);
var state_25284__$1 = state_25284;
var statearr_25294_25322 = state_25284__$1;
(statearr_25294_25322[(2)] = inst_25280);

(statearr_25294_25322[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (9))){
var state_25284__$1 = state_25284;
var statearr_25295_25323 = state_25284__$1;
(statearr_25295_25323[(2)] = null);

(statearr_25295_25323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (5))){
var inst_25262 = (state_25284[(8)]);
var inst_25275 = (state_25284[(2)]);
var state_25284__$1 = (function (){var statearr_25296 = state_25284;
(statearr_25296[(9)] = inst_25275);

return statearr_25296;
})();
if(cljs.core.truth_(inst_25262)){
var statearr_25297_25324 = state_25284__$1;
(statearr_25297_25324[(1)] = (9));

} else {
var statearr_25298_25325 = state_25284__$1;
(statearr_25298_25325[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (10))){
var state_25284__$1 = state_25284;
var statearr_25299_25326 = state_25284__$1;
(statearr_25299_25326[(2)] = null);

(statearr_25299_25326[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25285 === (8))){
var state_25284__$1 = state_25284;
var statearr_25300_25327 = state_25284__$1;
(statearr_25300_25327[(2)] = null);

(statearr_25300_25327[(1)] = (5));


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
});})(c__17677__auto__,this$__$1))
;
return ((function (switch__17551__auto__,c__17677__auto__,this$__$1){
return (function() {
var keechma$toolbox$forms$mount_controller$state_machine__17552__auto__ = null;
var keechma$toolbox$forms$mount_controller$state_machine__17552__auto____0 = (function (){
var statearr_25304 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25304[(0)] = keechma$toolbox$forms$mount_controller$state_machine__17552__auto__);

(statearr_25304[(1)] = (1));

return statearr_25304;
});
var keechma$toolbox$forms$mount_controller$state_machine__17552__auto____1 = (function (state_25284){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_25284);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e25305){if((e25305 instanceof Object)){
var ex__17555__auto__ = e25305;
var statearr_25306_25328 = state_25284;
(statearr_25306_25328[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25284);

return cljs.core.cst$kw$recur;
} else {
throw e25305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__25329 = state_25284;
state_25284 = G__25329;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$toolbox$forms$mount_controller$state_machine__17552__auto__ = function(state_25284){
switch(arguments.length){
case 0:
return keechma$toolbox$forms$mount_controller$state_machine__17552__auto____0.call(this);
case 1:
return keechma$toolbox$forms$mount_controller$state_machine__17552__auto____1.call(this,state_25284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$forms$mount_controller$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$forms$mount_controller$state_machine__17552__auto____0;
keechma$toolbox$forms$mount_controller$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$forms$mount_controller$state_machine__17552__auto____1;
return keechma$toolbox$forms$mount_controller$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,this$__$1))
})();
var state__17679__auto__ = (function (){var statearr_25307 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_25307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_25307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,this$__$1))
);

return c__17677__auto__;
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k25254,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__25308 = (((k25254 instanceof cljs.core.Keyword))?k25254.fqn:null);
switch (G__25308) {
case "forms-params":
return self__.forms_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25254,else__10665__auto__);

}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.forms.mount-controller.Controller{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$forms_DASH_params,self__.forms_params],null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25253){
var self__ = this;
var G__25253__$1 = this;
return (new cljs.core.RecordIter((0),G__25253__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$forms_DASH_params], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$forms_DASH_params,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__25253){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__25309 = cljs.core.keyword_identical_QMARK_;
var expr__25310 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__25312 = cljs.core.cst$kw$forms_DASH_params;
var G__25313 = expr__25310;
return (pred__25309.cljs$core$IFn$_invoke$arity$2 ? pred__25309.cljs$core$IFn$_invoke$arity$2(G__25312,G__25313) : pred__25309.call(null,G__25312,G__25313));
})())){
return (new keechma.toolbox.forms.mount_controller.Controller(G__25253,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__25253),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$forms_DASH_params,self__.forms_params],null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__25253){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,G__25253,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.forms.mount_controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms_DASH_params], null);
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$type = true;

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.forms.mount-controller/Controller");
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.forms.mount-controller/Controller");
});

keechma.toolbox.forms.mount_controller.__GT_Controller = (function keechma$toolbox$forms$mount_controller$__GT_Controller(forms_params){
return (new keechma.toolbox.forms.mount_controller.Controller(forms_params,null,null,null));
});

keechma.toolbox.forms.mount_controller.map__GT_Controller = (function keechma$toolbox$forms$mount_controller$map__GT_Controller(G__25255){
return (new keechma.toolbox.forms.mount_controller.Controller(cljs.core.cst$kw$forms_DASH_params.cljs$core$IFn$_invoke$arity$1(G__25255),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25255,cljs.core.cst$kw$forms_DASH_params),null));
});

keechma.toolbox.forms.mount_controller.constructor$ = (function keechma$toolbox$forms$mount_controller$constructor(form_params){
return keechma.toolbox.forms.mount_controller.__GT_Controller(form_params);
});
keechma.toolbox.forms.mount_controller.register = (function keechma$toolbox$forms$mount_controller$register(var_args){
var args25331 = [];
var len__11171__auto___25334 = arguments.length;
var i__11172__auto___25335 = (0);
while(true){
if((i__11172__auto___25335 < len__11171__auto___25334)){
args25331.push((arguments[i__11172__auto___25335]));

var G__25336 = (i__11172__auto___25335 + (1));
i__11172__auto___25335 = G__25336;
continue;
} else {
}
break;
}

var G__25333 = args25331.length;
switch (G__25333) {
case 1:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25331.length)].join('')));

}
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1 = (function (form_params){
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,form_params);
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2 = (function (controllers,form_params){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controllers,cljs.core.cst$kw$keechma$toolbox$forms$mount_DASH_controller_SLASH_id,keechma.toolbox.forms.mount_controller.constructor$(form_params));
});

keechma.toolbox.forms.mount_controller.register.cljs$lang$maxFixedArity = 2;

