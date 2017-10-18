// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms.comment');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.forms.core');
goog.require('forms.validator');
goog.require('realworld.forms.validators');
goog.require('keechma.toolbox.pipeline.core');
goog.require('hodgepodge.core');
goog.require('realworld.edb');
goog.require('realworld.api');
realworld.forms.comment.validator = forms.validator.validator(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null)], null)], null));

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
realworld.forms.comment.CommentForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
realworld.forms.comment.CommentForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

realworld.forms.comment.CommentForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k24141,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__24145 = k24141;
var G__24145__$1 = (((G__24145 instanceof cljs.core.Keyword))?G__24145.fqn:null);
switch (G__24145__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24141,else__12205__auto__);

}
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#realworld.forms.comment.CommentForm{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24140){
var self__ = this;
var G__24140__$1 = this;
return (new cljs.core.RecordIter((0),G__24140__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validator], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

realworld.forms.comment.CommentForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new realworld.forms.comment.CommentForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

realworld.forms.comment.CommentForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__24146 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (1993181752 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__24146(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24142,other24143){
var self__ = this;
var this24142__$1 = this;
return (!((other24143 == null))) && ((this24142__$1.constructor === other24143.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24142__$1.validator,other24143.validator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24142__$1.__extmap,other24143.__extmap));
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$validator,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new realworld.forms.comment.CommentForm(self__.validator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__24140){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__24147 = cljs.core.keyword_identical_QMARK_;
var expr__24148 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__24150 = cljs.core.cst$kw$validator;
var G__24151 = expr__24148;
return (pred__24147.cljs$core$IFn$_invoke$arity$2 ? pred__24147.cljs$core$IFn$_invoke$arity$2(G__24150,G__24151) : pred__24147.call(null,G__24150,G__24151));
})())){
return (new realworld.forms.comment.CommentForm(G__24140,self__.__meta,self__.__extmap,null));
} else {
return (new realworld.forms.comment.CommentForm(self__.validator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__24140),null));
}
});

realworld.forms.comment.CommentForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.comment.CommentForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__24140){
var self__ = this;
var this__12201__auto____$1 = this;
return (new realworld.forms.comment.CommentForm(self__.validator,G__24140,self__.__extmap,self__.__hash));
});

realworld.forms.comment.CommentForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

realworld.forms.comment.CommentForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$validator], null);
});

realworld.forms.comment.CommentForm.cljs$lang$type = true;

realworld.forms.comment.CommentForm.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"realworld.forms.comment/CommentForm");
});

realworld.forms.comment.CommentForm.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"realworld.forms.comment/CommentForm");
});

realworld.forms.comment.__GT_CommentForm = (function realworld$forms$comment$__GT_CommentForm(validator){
return (new realworld.forms.comment.CommentForm(validator,null,null,null));
});

realworld.forms.comment.map__GT_CommentForm = (function realworld$forms$comment$map__GT_CommentForm(G__24144){
return (new realworld.forms.comment.CommentForm(cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(G__24144),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24144,cljs.core.cst$kw$validator)),null));
});

keechma.toolbox.forms.core.submit_data.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.comment.CommentForm,(function (_,app_db,___$1,data){
var current_article = realworld.edb.get_named_item.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$article,cljs.core.cst$kw$current], 0));
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(current_article);
var jwt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null));
return realworld.api.comment_create(jwt,slug,data);
}));
keechma.toolbox.forms.core.on_submit_success.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.comment.CommentForm,(function (this$,app_db,form_id,comment){
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/send-command! [forms-core/id-key :mount-form] [:comment :form])",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.send_command_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$mount_DASH_form], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comment,cljs.core.cst$kw$form], null))], null);
}),(function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (prepend-collection app-db :comment :list [comment]))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.prepend_collection.cljs$core$IFn$_invoke$arity$variadic(app_db__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$comment,cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [comment], null)], 0)))], null);
})], null)], null));
}));
realworld.forms.comment.constructor$ = (function realworld$forms$comment$constructor(){
return realworld.forms.comment.__GT_CommentForm(realworld.forms.comment.validator);
});
