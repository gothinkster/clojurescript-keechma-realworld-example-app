// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms.editor');
goog.require('cljs.core');
goog.require('forms.validator');
goog.require('keechma.toolbox.forms.core');
goog.require('realworld.forms.validators');
goog.require('realworld.api');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('realworld.edb');
goog.require('clojure.string');
realworld.forms.editor.validator = forms.validator.validator(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null)], null),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null)], null),cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_empty,realworld.forms.validators.not_empty_QMARK_], null)], null)], null));

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
realworld.forms.editor.EditorForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
realworld.forms.editor.EditorForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k24945,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__24947 = (((k24945 instanceof cljs.core.Keyword))?k24945.fqn:null);
switch (G__24947) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24945,else__10665__auto__);

}
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#realworld.forms.editor.EditorForm{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IIterable$ = true;

realworld.forms.editor.EditorForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24944){
var self__ = this;
var G__24944__$1 = this;
return (new cljs.core.RecordIter((0),G__24944__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validator], null),cljs.core._iterator(self__.__extmap)));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new realworld.forms.editor.EditorForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

realworld.forms.editor.EditorForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

realworld.forms.editor.EditorForm.prototype.keechma$toolbox$forms$core$IForm$ = true;

realworld.forms.editor.EditorForm.prototype.keechma$toolbox$forms$core$IForm$get_data$arity$3 = (function (_,app_db,form_id){
var self__ = this;
var ___$1 = this;
var id = cljs.core.last(form_id);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new,id)){
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (id,___$1){
return (function (value,app_db__$1){
return keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_();
});})(id,___$1))
,((function (id,___$1){
return (function (value,app_db__$1){
return realworld.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic(app_db__$1,cljs.core.array_seq([cljs.core.cst$kw$article,id], 0));
});})(id,___$1))
], null)], null));
} else {
return null;
}
});

realworld.forms.editor.EditorForm.prototype.keechma$toolbox$forms$core$IForm$process_in$arity$4 = (function (this$,app_db,form_id,data){
var self__ = this;
var this$__$1 = this;
var tags = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag,cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(data).call(null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$tags,tags);
});

realworld.forms.editor.EditorForm.prototype.keechma$toolbox$forms$core$IForm$process_out$arity$4 = (function (this$,app_db,form_id,data){
var self__ = this;
var this$__$1 = this;
var tag_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(data),/,/));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$tags),cljs.core.cst$kw$tagList,tag_list);
});

realworld.forms.editor.EditorForm.prototype.keechma$toolbox$forms$core$IForm$submit_data$arity$4 = (function (_,app_db,___$1,data){
var self__ = this;
var ___$2 = this;
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(data);
var new_QMARK_ = !(cljs.core.boolean$(slug));
var jwt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null));
if(new_QMARK_){
return realworld.api.article_create(jwt,data);
} else {
return realworld.api.article_update(jwt,slug,data);
}
});

realworld.forms.editor.EditorForm.prototype.keechma$toolbox$forms$core$IForm$on_submit_success$arity$4 = (function (this$,app_db,form_id,article){
var self__ = this;
var this$__$1 = this;
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article);
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (slug,this$__$1){
return (function (value,app_db__$1){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.insert_item.cljs$core$IFn$_invoke$arity$variadic(app_db__$1,cljs.core.array_seq([cljs.core.cst$kw$article,article], 0)));
});})(slug,this$__$1))
,((function (slug,this$__$1){
return (function (value,app_db__$1){
return keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"article",cljs.core.cst$kw$subpage,slug], null));
});})(slug,this$__$1))
], null)], null));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$validator,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new realworld.forms.editor.EditorForm(self__.validator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__24944){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__24948 = cljs.core.keyword_identical_QMARK_;
var expr__24949 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__24951 = cljs.core.cst$kw$validator;
var G__24952 = expr__24949;
return (pred__24948.cljs$core$IFn$_invoke$arity$2 ? pred__24948.cljs$core$IFn$_invoke$arity$2(G__24951,G__24952) : pred__24948.call(null,G__24951,G__24952));
})())){
return (new realworld.forms.editor.EditorForm(G__24944,self__.__meta,self__.__extmap,null));
} else {
return (new realworld.forms.editor.EditorForm(self__.validator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__24944),null));
}
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__24944){
var self__ = this;
var this__10661__auto____$1 = this;
return (new realworld.forms.editor.EditorForm(self__.validator,G__24944,self__.__extmap,self__.__hash));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

realworld.forms.editor.EditorForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$validator], null);
});

realworld.forms.editor.EditorForm.cljs$lang$type = true;

realworld.forms.editor.EditorForm.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"realworld.forms.editor/EditorForm");
});

realworld.forms.editor.EditorForm.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"realworld.forms.editor/EditorForm");
});

realworld.forms.editor.__GT_EditorForm = (function realworld$forms$editor$__GT_EditorForm(validator){
return (new realworld.forms.editor.EditorForm(validator,null,null,null));
});

realworld.forms.editor.map__GT_EditorForm = (function realworld$forms$editor$map__GT_EditorForm(G__24946){
return (new realworld.forms.editor.EditorForm(cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(G__24946),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24946,cljs.core.cst$kw$validator),null));
});

realworld.forms.editor.constructor$ = (function realworld$forms$editor$constructor(){
return realworld.forms.editor.__GT_EditorForm(realworld.forms.editor.validator);
});
