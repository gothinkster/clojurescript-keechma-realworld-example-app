// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms.settings');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.forms.core');
goog.require('forms.validator');
goog.require('realworld.forms.validators');
goog.require('hodgepodge.core');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('keechma.toolbox.pipeline.core');
goog.require('realworld.edb');
goog.require('realworld.settings');
goog.require('realworld.api');
realworld.forms.settings.validator = forms.validator.validator(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$image,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$url,realworld.forms.validators.url_QMARK_], null)], null),cljs.core.cst$kw$email,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,realworld.forms.validators.email_QMARK_], null)], null)], null));

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
realworld.forms.settings.SettingsForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
realworld.forms.settings.SettingsForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k24798,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__24802 = k24798;
var G__24802__$1 = (((G__24802 instanceof cljs.core.Keyword))?G__24802.fqn:null);
switch (G__24802__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24798,else__12205__auto__);

}
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#realworld.forms.settings.SettingsForm{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24797){
var self__ = this;
var G__24797__$1 = this;
return (new cljs.core.RecordIter((0),G__24797__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validator], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new realworld.forms.settings.SettingsForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__24803 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (1222831416 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__24803(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24799,other24800){
var self__ = this;
var this24799__$1 = this;
return (!((other24800 == null))) && ((this24799__$1.constructor === other24800.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24799__$1.validator,other24800.validator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24799__$1.__extmap,other24800.__extmap));
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$validator,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new realworld.forms.settings.SettingsForm(self__.validator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__24797){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__24804 = cljs.core.keyword_identical_QMARK_;
var expr__24805 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__24807 = cljs.core.cst$kw$validator;
var G__24808 = expr__24805;
return (pred__24804.cljs$core$IFn$_invoke$arity$2 ? pred__24804.cljs$core$IFn$_invoke$arity$2(G__24807,G__24808) : pred__24804.call(null,G__24807,G__24808));
})())){
return (new realworld.forms.settings.SettingsForm(G__24797,self__.__meta,self__.__extmap,null));
} else {
return (new realworld.forms.settings.SettingsForm(self__.validator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__24797),null));
}
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__24797){
var self__ = this;
var this__12201__auto____$1 = this;
return (new realworld.forms.settings.SettingsForm(self__.validator,G__24797,self__.__extmap,self__.__hash));
});

realworld.forms.settings.SettingsForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

realworld.forms.settings.SettingsForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$validator], null);
});

realworld.forms.settings.SettingsForm.cljs$lang$type = true;

realworld.forms.settings.SettingsForm.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"realworld.forms.settings/SettingsForm");
});

realworld.forms.settings.SettingsForm.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"realworld.forms.settings/SettingsForm");
});

realworld.forms.settings.__GT_SettingsForm = (function realworld$forms$settings$__GT_SettingsForm(validator){
return (new realworld.forms.settings.SettingsForm(validator,null,null,null));
});

realworld.forms.settings.map__GT_SettingsForm = (function realworld$forms$settings$map__GT_SettingsForm(G__24801){
return (new realworld.forms.settings.SettingsForm(cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(G__24801),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24801,cljs.core.cst$kw$validator)),null));
});

keechma.toolbox.forms.core.get_data.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.settings.SettingsForm,(function (this$,app_db,form_id){
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(dataloader-controller/wait-dataloader-pipeline!)",cljs.core.cst$kw$val,keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_()], null);
}),(function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(get-named-item app-db :user :current)",cljs.core.cst$kw$val,realworld.edb.get_named_item.cljs$core$IFn$_invoke$arity$variadic(app_db__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$user,cljs.core.cst$kw$current], 0))], null);
})], null)], null));
}));
keechma.toolbox.forms.core.submit_data.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.settings.SettingsForm,(function (_,app_db,___$1,data){
var user_data = ((cljs.core.seq(cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(data)))?data:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$password));
var jwt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null));
return realworld.api.user_update(jwt,user_data);
}));
keechma.toolbox.forms.core.on_submit_success.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.settings.SettingsForm,(function (this$,app_db,form_id,user){
var jwt = cljs.core.cst$kw$token.cljs$core$IFn$_invoke$arity$1(user);
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (jwt){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(set-item local-storage settings/jwt-local-storage-name jwt)",cljs.core.cst$kw$val,hodgepodge.core.set_item(hodgepodge.core.local_storage,realworld.settings.jwt_local_storage_name,jwt)], null);
});})(jwt))
,((function (jwt){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (->\n  app-db\n  (assoc-in [:kv :jwt] jwt)\n  (insert-named-item :user :current user)))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.insert_named_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null),jwt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$user,cljs.core.cst$kw$current,user], 0)))], null);
});})(jwt))
,((function (jwt){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/redirect! {:page \"profile\", :subpage (:username user)})",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"profile",cljs.core.cst$kw$subpage,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user)], null))], null);
});})(jwt))
], null)], null));
}));
realworld.forms.settings.constructor$ = (function realworld$forms$settings$constructor(){
return realworld.forms.settings.__GT_SettingsForm(realworld.forms.settings.validator);
});
