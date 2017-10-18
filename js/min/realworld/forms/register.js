// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms.register');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.forms.core');
goog.require('forms.validator');
goog.require('realworld.forms.validators');
goog.require('hodgepodge.core');
goog.require('keechma.toolbox.dataloader.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('realworld.edb');
goog.require('realworld.settings');
goog.require('realworld.api');
realworld.forms.register.validator = forms.validator.validator(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$email,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,realworld.forms.validators.email_QMARK_], null)], null),cljs.core.cst$kw$username,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null)], null),cljs.core.cst$kw$password,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null)], null)], null));

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
realworld.forms.register.RegisterForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
realworld.forms.register.RegisterForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k24783,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__24787 = k24783;
var G__24787__$1 = (((G__24787 instanceof cljs.core.Keyword))?G__24787.fqn:null);
switch (G__24787__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24783,else__12205__auto__);

}
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#realworld.forms.register.RegisterForm{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24782){
var self__ = this;
var G__24782__$1 = this;
return (new cljs.core.RecordIter((0),G__24782__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validator], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new realworld.forms.register.RegisterForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__24788 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-1872616574 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__24788(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24784,other24785){
var self__ = this;
var this24784__$1 = this;
return (!((other24785 == null))) && ((this24784__$1.constructor === other24785.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24784__$1.validator,other24785.validator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24784__$1.__extmap,other24785.__extmap));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$validator,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new realworld.forms.register.RegisterForm(self__.validator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__24782){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__24789 = cljs.core.keyword_identical_QMARK_;
var expr__24790 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__24792 = cljs.core.cst$kw$validator;
var G__24793 = expr__24790;
return (pred__24789.cljs$core$IFn$_invoke$arity$2 ? pred__24789.cljs$core$IFn$_invoke$arity$2(G__24792,G__24793) : pred__24789.call(null,G__24792,G__24793));
})())){
return (new realworld.forms.register.RegisterForm(G__24782,self__.__meta,self__.__extmap,null));
} else {
return (new realworld.forms.register.RegisterForm(self__.validator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__24782),null));
}
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__24782){
var self__ = this;
var this__12201__auto____$1 = this;
return (new realworld.forms.register.RegisterForm(self__.validator,G__24782,self__.__extmap,self__.__hash));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

realworld.forms.register.RegisterForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$validator], null);
});

realworld.forms.register.RegisterForm.cljs$lang$type = true;

realworld.forms.register.RegisterForm.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"realworld.forms.register/RegisterForm");
});

realworld.forms.register.RegisterForm.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"realworld.forms.register/RegisterForm");
});

realworld.forms.register.__GT_RegisterForm = (function realworld$forms$register$__GT_RegisterForm(validator){
return (new realworld.forms.register.RegisterForm(validator,null,null,null));
});

realworld.forms.register.map__GT_RegisterForm = (function realworld$forms$register$map__GT_RegisterForm(G__24786){
return (new realworld.forms.register.RegisterForm(cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(G__24786),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24786,cljs.core.cst$kw$validator)),null));
});

keechma.toolbox.forms.core.submit_data.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.register.RegisterForm,(function (_,app_db,___$1,data){
return realworld.api.register(data);
}));
keechma.toolbox.forms.core.on_submit_success.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.register.RegisterForm,(function (this$,app_db,form_id,user){
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
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/redirect! {:page \"home\", :subpage \"personal\"})",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"home",cljs.core.cst$kw$subpage,"personal"], null))], null);
});})(jwt))
], null)], null));
}));
realworld.forms.register.constructor$ = (function realworld$forms$register$constructor(){
return realworld.forms.register.__GT_RegisterForm(realworld.forms.register.validator);
});
