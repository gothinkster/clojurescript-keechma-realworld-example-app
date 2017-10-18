// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.mount_controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.controller');
goog.require('keechma.toolbox.forms.core');
goog.require('cljs.core.async');
goog.require('clojure.set');

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
keechma.toolbox.forms.mount_controller.Controller = (function (forms_params,__meta,__extmap,__hash){
this.forms_params = forms_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k25019,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__25023 = k25019;
var G__25023__$1 = (((G__25023 instanceof cljs.core.Keyword))?G__25023.fqn:null);
switch (G__25023__$1) {
case "forms-params":
return self__.forms_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25019,else__12205__auto__);

}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.forms.mount-controller.Controller{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$forms_DASH_params,self__.forms_params],null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25018){
var self__ = this;
var G__25018__$1 = this;
return (new cljs.core.RecordIter((0),G__25018__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$forms_DASH_params], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__25024 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-1277434469 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__25024(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25020,other25021){
var self__ = this;
var this25020__$1 = this;
return (!((other25021 == null))) && ((this25020__$1.constructor === other25021.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25020__$1.forms_params,other25021.forms_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25020__$1.__extmap,other25021.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$forms_DASH_params,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__25018){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__25025 = cljs.core.keyword_identical_QMARK_;
var expr__25026 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__25028 = cljs.core.cst$kw$forms_DASH_params;
var G__25029 = expr__25026;
return (pred__25025.cljs$core$IFn$_invoke$arity$2 ? pred__25025.cljs$core$IFn$_invoke$arity$2(G__25028,G__25029) : pred__25025.call(null,G__25028,G__25029));
})())){
return (new keechma.toolbox.forms.mount_controller.Controller(G__25018,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__25018),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$forms_DASH_params,self__.forms_params],null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__25018){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,G__25018,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.forms.mount_controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms_DASH_params], null);
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$type = true;

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.forms.mount-controller/Controller");
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.forms.mount-controller/Controller");
});

keechma.toolbox.forms.mount_controller.__GT_Controller = (function keechma$toolbox$forms$mount_controller$__GT_Controller(forms_params){
return (new keechma.toolbox.forms.mount_controller.Controller(forms_params,null,null,null));
});

keechma.toolbox.forms.mount_controller.map__GT_Controller = (function keechma$toolbox$forms$mount_controller$map__GT_Controller(G__25022){
return (new keechma.toolbox.forms.mount_controller.Controller(cljs.core.cst$kw$forms_DASH_params.cljs$core$IFn$_invoke$arity$1(G__25022),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25022,cljs.core.cst$kw$forms_DASH_params)),null));
});

keechma.toolbox.forms.mount_controller.forms_for_route = (function keechma$toolbox$forms$mount_controller$forms_for_route(route,forms_params){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25031){
var vec__25032 = p__25031;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25032,(0),null);
var params_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25032,(1),null);
var temp__5278__auto__ = (params_fn.cljs$core$IFn$_invoke$arity$1 ? params_fn.cljs$core$IFn$_invoke$arity$1(route) : params_fn.call(null,route));
if(cljs.core.truth_(temp__5278__auto__)){
var id = temp__5278__auto__;
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
var seq__25035_25055 = cljs.core.seq(forms_to_unmount);
var chunk__25036_25056 = null;
var count__25037_25057 = (0);
var i__25038_25058 = (0);
while(true){
if((i__25038_25058 < count__25037_25057)){
var f_25059 = chunk__25036_25056.cljs$core$IIndexed$_nth$arity$2(null,i__25038_25058);
var G__25039_25060 = controller;
var G__25040_25061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$unmount_DASH_form], null);
var G__25041_25062 = f_25059;
(keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(G__25039_25060,G__25040_25061,G__25041_25062) : keechma.controller.send_command.call(null,G__25039_25060,G__25040_25061,G__25041_25062));

var G__25063 = seq__25035_25055;
var G__25064 = chunk__25036_25056;
var G__25065 = count__25037_25057;
var G__25066 = (i__25038_25058 + (1));
seq__25035_25055 = G__25063;
chunk__25036_25056 = G__25064;
count__25037_25057 = G__25065;
i__25038_25058 = G__25066;
continue;
} else {
var temp__5278__auto___25067 = cljs.core.seq(seq__25035_25055);
if(temp__5278__auto___25067){
var seq__25035_25068__$1 = temp__5278__auto___25067;
if(cljs.core.chunked_seq_QMARK_(seq__25035_25068__$1)){
var c__12440__auto___25069 = cljs.core.chunk_first(seq__25035_25068__$1);
var G__25070 = cljs.core.chunk_rest(seq__25035_25068__$1);
var G__25071 = c__12440__auto___25069;
var G__25072 = cljs.core.count(c__12440__auto___25069);
var G__25073 = (0);
seq__25035_25055 = G__25070;
chunk__25036_25056 = G__25071;
count__25037_25057 = G__25072;
i__25038_25058 = G__25073;
continue;
} else {
var f_25074 = cljs.core.first(seq__25035_25068__$1);
var G__25042_25075 = controller;
var G__25043_25076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$unmount_DASH_form], null);
var G__25044_25077 = f_25074;
(keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(G__25042_25075,G__25043_25076,G__25044_25077) : keechma.controller.send_command.call(null,G__25042_25075,G__25043_25076,G__25044_25077));

var G__25078 = cljs.core.next(seq__25035_25068__$1);
var G__25079 = null;
var G__25080 = (0);
var G__25081 = (0);
seq__25035_25055 = G__25078;
chunk__25036_25056 = G__25079;
count__25037_25057 = G__25080;
i__25038_25058 = G__25081;
continue;
}
} else {
}
}
break;
}

var seq__25045 = cljs.core.seq(forms_to_mount);
var chunk__25046 = null;
var count__25047 = (0);
var i__25048 = (0);
while(true){
if((i__25048 < count__25047)){
var f = chunk__25046.cljs$core$IIndexed$_nth$arity$2(null,i__25048);
var G__25049_25082 = controller;
var G__25050_25083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$mount_DASH_form], null);
var G__25051_25084 = f;
(keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(G__25049_25082,G__25050_25083,G__25051_25084) : keechma.controller.send_command.call(null,G__25049_25082,G__25050_25083,G__25051_25084));

var G__25085 = seq__25045;
var G__25086 = chunk__25046;
var G__25087 = count__25047;
var G__25088 = (i__25048 + (1));
seq__25045 = G__25085;
chunk__25046 = G__25086;
count__25047 = G__25087;
i__25048 = G__25088;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__25045);
if(temp__5278__auto__){
var seq__25045__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25045__$1)){
var c__12440__auto__ = cljs.core.chunk_first(seq__25045__$1);
var G__25089 = cljs.core.chunk_rest(seq__25045__$1);
var G__25090 = c__12440__auto__;
var G__25091 = cljs.core.count(c__12440__auto__);
var G__25092 = (0);
seq__25045 = G__25089;
chunk__25046 = G__25090;
count__25047 = G__25091;
i__25048 = G__25092;
continue;
} else {
var f = cljs.core.first(seq__25045__$1);
var G__25052_25093 = controller;
var G__25053_25094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$mount_DASH_form], null);
var G__25054_25095 = f;
(keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(G__25052_25093,G__25053_25094,G__25054_25095) : keechma.controller.send_command.call(null,G__25052_25093,G__25053_25094,G__25054_25095));

var G__25096 = cljs.core.next(seq__25045__$1);
var G__25097 = null;
var G__25098 = (0);
var G__25099 = (0);
seq__25045 = G__25096;
chunk__25046 = G__25097;
count__25047 = G__25098;
i__25048 = G__25099;
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
keechma.controller.params.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.forms.mount_controller.Controller,(function (this$,route){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(route);
}));
keechma.controller.start.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.forms.mount_controller.Controller,(function (this$,params,app_db){
var G__25100_25103 = this$;
var G__25101_25104 = cljs.core.cst$kw$mount_DASH_forms;
var G__25102_25105 = params;
(keechma.controller.execute.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(G__25100_25103,G__25101_25104,G__25102_25105) : keechma.controller.execute.call(null,G__25100_25103,G__25101_25104,G__25102_25105));

return app_db;
}));
keechma.controller.handler.cljs$core$IMultiFn$_add_method$arity$3(null,keechma.toolbox.forms.mount_controller.Controller,(function (this$,app_db_atom,in_chan,out_chan){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_25134){
var state_val_25135 = (state_25134[(1)]);
if((state_val_25135 === (7))){
var inst_25113 = (state_25134[(7)]);
var inst_25118 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_25113);
var inst_25119 = cljs.core.deref(app_db_atom);
var inst_25120 = keechma.toolbox.forms.mount_controller.get_mounted_forms(inst_25119);
var inst_25121 = keechma.toolbox.forms.mount_controller.mount_forms(this$,inst_25118,inst_25120);
var state_25134__$1 = state_25134;
var statearr_25136_25155 = state_25134__$1;
(statearr_25136_25155[(2)] = inst_25121);

(statearr_25136_25155[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (1))){
var state_25134__$1 = state_25134;
var statearr_25137_25156 = state_25134__$1;
(statearr_25137_25156[(2)] = null);

(statearr_25137_25156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (4))){
var inst_25112 = (state_25134[(8)]);
var inst_25111 = (state_25134[(2)]);
var inst_25112__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25111,(0),null);
var inst_25113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25111,(1),null);
var state_25134__$1 = (function (){var statearr_25138 = state_25134;
(statearr_25138[(8)] = inst_25112__$1);

(statearr_25138[(7)] = inst_25113);

return statearr_25138;
})();
var G__25139_25157 = inst_25112__$1;
var G__25139_25158__$1 = (((G__25139_25157 instanceof cljs.core.Keyword))?G__25139_25157.fqn:null);
switch (G__25139_25158__$1) {
case "mount-forms":
var statearr_25140_25160 = state_25134__$1;
(statearr_25140_25160[(1)] = (6));


break;
case "route-changed":
var statearr_25141_25161 = state_25134__$1;
(statearr_25141_25161[(1)] = (7));


break;
default:
var statearr_25142_25162 = state_25134__$1;
(statearr_25142_25162[(1)] = (8));



}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (6))){
var inst_25113 = (state_25134[(7)]);
var inst_25114 = cljs.core.deref(app_db_atom);
var inst_25115 = keechma.toolbox.forms.mount_controller.get_mounted_forms(inst_25114);
var inst_25116 = keechma.toolbox.forms.mount_controller.mount_forms(this$,inst_25113,inst_25115);
var state_25134__$1 = state_25134;
var statearr_25143_25163 = state_25134__$1;
(statearr_25143_25163[(2)] = inst_25116);

(statearr_25143_25163[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (3))){
var inst_25132 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25134__$1,inst_25132);
} else {
if((state_val_25135 === (2))){
var state_25134__$1 = state_25134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25134__$1,(4),in_chan);
} else {
if((state_val_25135 === (11))){
var inst_25130 = (state_25134[(2)]);
var state_25134__$1 = state_25134;
var statearr_25144_25164 = state_25134__$1;
(statearr_25144_25164[(2)] = inst_25130);

(statearr_25144_25164[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (9))){
var state_25134__$1 = state_25134;
var statearr_25145_25165 = state_25134__$1;
(statearr_25145_25165[(2)] = null);

(statearr_25145_25165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (5))){
var inst_25112 = (state_25134[(8)]);
var inst_25125 = (state_25134[(2)]);
var state_25134__$1 = (function (){var statearr_25146 = state_25134;
(statearr_25146[(9)] = inst_25125);

return statearr_25146;
})();
if(cljs.core.truth_(inst_25112)){
var statearr_25147_25166 = state_25134__$1;
(statearr_25147_25166[(1)] = (9));

} else {
var statearr_25148_25167 = state_25134__$1;
(statearr_25148_25167[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (10))){
var state_25134__$1 = state_25134;
var statearr_25149_25168 = state_25134__$1;
(statearr_25149_25168[(2)] = null);

(statearr_25149_25168[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25135 === (8))){
var state_25134__$1 = state_25134;
var statearr_25150_25169 = state_25134__$1;
(statearr_25150_25169[(2)] = null);

(statearr_25150_25169[(1)] = (5));


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
});})(c__19193__auto__))
;
return ((function (switch__19091__auto__,c__19193__auto__){
return (function() {
var keechma$toolbox$forms$mount_controller$state_machine__19092__auto__ = null;
var keechma$toolbox$forms$mount_controller$state_machine__19092__auto____0 = (function (){
var statearr_25151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25151[(0)] = keechma$toolbox$forms$mount_controller$state_machine__19092__auto__);

(statearr_25151[(1)] = (1));

return statearr_25151;
});
var keechma$toolbox$forms$mount_controller$state_machine__19092__auto____1 = (function (state_25134){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_25134);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e25152){if((e25152 instanceof Object)){
var ex__19095__auto__ = e25152;
var statearr_25153_25170 = state_25134;
(statearr_25153_25170[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25134);

return cljs.core.cst$kw$recur;
} else {
throw e25152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__25171 = state_25134;
state_25134 = G__25171;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$toolbox$forms$mount_controller$state_machine__19092__auto__ = function(state_25134){
switch(arguments.length){
case 0:
return keechma$toolbox$forms$mount_controller$state_machine__19092__auto____0.call(this);
case 1:
return keechma$toolbox$forms$mount_controller$state_machine__19092__auto____1.call(this,state_25134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$forms$mount_controller$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$forms$mount_controller$state_machine__19092__auto____0;
keechma$toolbox$forms$mount_controller$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$forms$mount_controller$state_machine__19092__auto____1;
return keechma$toolbox$forms$mount_controller$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_25154 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_25154[(6)] = c__19193__auto__);

return statearr_25154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
}));
keechma.toolbox.forms.mount_controller.constructor$ = (function keechma$toolbox$forms$mount_controller$constructor(form_params){
return keechma.toolbox.forms.mount_controller.__GT_Controller(form_params);
});
keechma.toolbox.forms.mount_controller.register = (function keechma$toolbox$forms$mount_controller$register(var_args){
var G__25173 = arguments.length;
switch (G__25173) {
case 1:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1 = (function (form_params){
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,form_params);
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2 = (function (controllers,form_params){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controllers,cljs.core.cst$kw$keechma$toolbox$forms$mount_DASH_controller_SLASH_id,keechma.toolbox.forms.mount_controller.constructor$(form_params));
});

keechma.toolbox.forms.mount_controller.register.cljs$lang$maxFixedArity = 2;

