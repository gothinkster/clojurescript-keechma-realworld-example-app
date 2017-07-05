// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms.register');
goog.require('cljs.core');
goog.require('realworld.settings');
goog.require('forms.validator');
goog.require('hodgepodge.core');
goog.require('keechma.toolbox.dataloader.core');
goog.require('keechma.toolbox.forms.core');
goog.require('realworld.forms.validators');
goog.require('realworld.api');
goog.require('keechma.toolbox.pipeline.core');
goog.require('realworld.edb');
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
 * @implements {keechma.toolbox.forms.core.IForm}
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
realworld.forms.register.RegisterForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k24957,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__24959 = (((k24957 instanceof cljs.core.Keyword))?k24957.fqn:null);
switch (G__24959) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24957,else__10665__auto__);

}
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#realworld.forms.register.RegisterForm{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IIterable$ = true;

realworld.forms.register.RegisterForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24956){
var self__ = this;
var G__24956__$1 = this;
return (new cljs.core.RecordIter((0),G__24956__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validator], null),cljs.core._iterator(self__.__extmap)));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new realworld.forms.register.RegisterForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

realworld.forms.register.RegisterForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

realworld.forms.register.RegisterForm.prototype.keechma$toolbox$forms$core$IForm$ = true;

realworld.forms.register.RegisterForm.prototype.keechma$toolbox$forms$core$IForm$submit_data$arity$4 = (function (_,app_db,___$1,data){
var self__ = this;
var ___$2 = this;
return realworld.api.register(data);
});

realworld.forms.register.RegisterForm.prototype.keechma$toolbox$forms$core$IForm$on_submit_success$arity$4 = (function (this$,app_db,form_id,user){
var self__ = this;
var this$__$1 = this;
var jwt = cljs.core.cst$kw$token.cljs$core$IFn$_invoke$arity$1(user);
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (jwt,this$__$1){
return (function (value,app_db__$1){
return hodgepodge.core.set_item(hodgepodge.core.local_storage,realworld.settings.jwt_local_storage_name,jwt);
});})(jwt,this$__$1))
,((function (jwt,this$__$1){
return (function (value,app_db__$1){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.insert_named_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null),jwt),cljs.core.array_seq([cljs.core.cst$kw$user,cljs.core.cst$kw$current,user], 0)));
});})(jwt,this$__$1))
,((function (jwt,this$__$1){
return (function (value,app_db__$1){
return keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"home",cljs.core.cst$kw$subpage,"personal"], null));
});})(jwt,this$__$1))
], null)], null));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$validator,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new realworld.forms.register.RegisterForm(self__.validator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__24956){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__24960 = cljs.core.keyword_identical_QMARK_;
var expr__24961 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__24963 = cljs.core.cst$kw$validator;
var G__24964 = expr__24961;
return (pred__24960.cljs$core$IFn$_invoke$arity$2 ? pred__24960.cljs$core$IFn$_invoke$arity$2(G__24963,G__24964) : pred__24960.call(null,G__24963,G__24964));
})())){
return (new realworld.forms.register.RegisterForm(G__24956,self__.__meta,self__.__extmap,null));
} else {
return (new realworld.forms.register.RegisterForm(self__.validator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__24956),null));
}
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__24956){
var self__ = this;
var this__10661__auto____$1 = this;
return (new realworld.forms.register.RegisterForm(self__.validator,G__24956,self__.__extmap,self__.__hash));
});

realworld.forms.register.RegisterForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

realworld.forms.register.RegisterForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$validator], null);
});

realworld.forms.register.RegisterForm.cljs$lang$type = true;

realworld.forms.register.RegisterForm.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"realworld.forms.register/RegisterForm");
});

realworld.forms.register.RegisterForm.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"realworld.forms.register/RegisterForm");
});

realworld.forms.register.__GT_RegisterForm = (function realworld$forms$register$__GT_RegisterForm(validator){
return (new realworld.forms.register.RegisterForm(validator,null,null,null));
});

realworld.forms.register.map__GT_RegisterForm = (function realworld$forms$register$map__GT_RegisterForm(G__24958){
return (new realworld.forms.register.RegisterForm(cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(G__24958),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24958,cljs.core.cst$kw$validator),null));
});

realworld.forms.register.constructor$ = (function realworld$forms$register$constructor(){
return realworld.forms.register.__GT_RegisterForm(realworld.forms.register.validator);
});
