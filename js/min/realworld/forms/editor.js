// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms.editor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.forms.core');
goog.require('forms.validator');
goog.require('realworld.forms.validators');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('keechma.toolbox.pipeline.core');
goog.require('realworld.edb');
goog.require('clojure.string');
goog.require('realworld.api');
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
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
realworld.forms.editor.EditorForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k24767,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__24771 = k24767;
var G__24771__$1 = (((G__24771 instanceof cljs.core.Keyword))?G__24771.fqn:null);
switch (G__24771__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24767,else__12205__auto__);

}
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#realworld.forms.editor.EditorForm{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24766){
var self__ = this;
var G__24766__$1 = this;
return (new cljs.core.RecordIter((0),G__24766__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validator], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new realworld.forms.editor.EditorForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__24772 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-1393177136 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__24772(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24768,other24769){
var self__ = this;
var this24768__$1 = this;
return (!((other24769 == null))) && ((this24768__$1.constructor === other24769.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24768__$1.validator,other24769.validator)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24768__$1.__extmap,other24769.__extmap));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$validator,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new realworld.forms.editor.EditorForm(self__.validator,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__24766){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__24773 = cljs.core.keyword_identical_QMARK_;
var expr__24774 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__24776 = cljs.core.cst$kw$validator;
var G__24777 = expr__24774;
return (pred__24773.cljs$core$IFn$_invoke$arity$2 ? pred__24773.cljs$core$IFn$_invoke$arity$2(G__24776,G__24777) : pred__24773.call(null,G__24776,G__24777));
})())){
return (new realworld.forms.editor.EditorForm(G__24766,self__.__meta,self__.__extmap,null));
} else {
return (new realworld.forms.editor.EditorForm(self__.validator,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__24766),null));
}
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null))], null),self__.__extmap));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__24766){
var self__ = this;
var this__12201__auto____$1 = this;
return (new realworld.forms.editor.EditorForm(self__.validator,G__24766,self__.__extmap,self__.__hash));
});

realworld.forms.editor.EditorForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

realworld.forms.editor.EditorForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$validator], null);
});

realworld.forms.editor.EditorForm.cljs$lang$type = true;

realworld.forms.editor.EditorForm.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"realworld.forms.editor/EditorForm");
});

realworld.forms.editor.EditorForm.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"realworld.forms.editor/EditorForm");
});

realworld.forms.editor.__GT_EditorForm = (function realworld$forms$editor$__GT_EditorForm(validator){
return (new realworld.forms.editor.EditorForm(validator,null,null,null));
});

realworld.forms.editor.map__GT_EditorForm = (function realworld$forms$editor$map__GT_EditorForm(G__24770){
return (new realworld.forms.editor.EditorForm(cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(G__24770),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24770,cljs.core.cst$kw$validator)),null));
});

keechma.toolbox.forms.core.get_data.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.editor.EditorForm,(function (_,app_db,form_id){
var id = cljs.core.last(form_id);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$new,id)){
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (id){
return (function (value,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(dataloader-controller/wait-dataloader-pipeline!)",cljs.core.cst$kw$val,keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_()], null);
});})(id))
,((function (id){
return (function (value,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(get-item-by-id app-db :article id)",cljs.core.cst$kw$val,realworld.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic(app_db__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$article,id], 0))], null);
});})(id))
], null)], null));
} else {
return null;
}
}));
keechma.toolbox.forms.core.process_in.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.editor.EditorForm,(function (this$,app_db,form_id,data){
var tags = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag,(function (){var fexpr__24779 = cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__24779.cljs$core$IFn$_invoke$arity$0 ? fexpr__24779.cljs$core$IFn$_invoke$arity$0() : fexpr__24779.call(null));
})()));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$tags,tags);
}));
keechma.toolbox.forms.core.process_out.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.editor.EditorForm,(function (this$,app_db,form_id,data){
var tag_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(data),/,/));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$tags),cljs.core.cst$kw$tagList,tag_list);
}));
keechma.toolbox.forms.core.submit_data.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.editor.EditorForm,(function (_,app_db,___$1,data){
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(data);
var new_QMARK_ = !(cljs.core.boolean$(slug));
var jwt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null));
if(new_QMARK_){
return realworld.api.article_create(jwt,data);
} else {
return realworld.api.article_update(jwt,slug,data);
}
}));
keechma.toolbox.forms.core.on_submit_success.cljs$core$IMultiFn$_add_method$arity$3(null,realworld.forms.editor.EditorForm,(function (this$,app_db,form_id,article){
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article);
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (slug){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (insert-item app-db :article article))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.insert_item.cljs$core$IFn$_invoke$arity$variadic(app_db__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$article,article], 0)))], null);
});})(slug))
,((function (slug){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/redirect! {:page \"article\", :subpage slug})",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"article",cljs.core.cst$kw$subpage,slug], null))], null);
});})(slug))
], null)], null));
}));
realworld.forms.editor.constructor$ = (function realworld$forms$editor$constructor(){
return realworld.forms.editor.__GT_EditorForm(realworld.forms.editor.validator);
});
