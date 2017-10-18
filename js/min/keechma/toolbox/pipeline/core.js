// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.pipeline.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('promesa.impl');
goog.require('keechma.controller');

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
keechma.toolbox.pipeline.core.Error = (function (type,message,payload,cause,__meta,__extmap,__hash){
this.type = type;
this.message = message;
this.payload = payload;
this.cause = cause;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k23634,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__23638 = k23634;
var G__23638__$1 = (((G__23638 instanceof cljs.core.Keyword))?G__23638.fqn:null);
switch (G__23638__$1) {
case "type":
return self__.type;

break;
case "message":
return self__.message;

break;
case "payload":
return self__.payload;

break;
case "cause":
return self__.cause;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23634,else__12205__auto__);

}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.pipeline.core.Error{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cause,self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23633){
var self__ = this;
var G__23633__$1 = this;
return (new cljs.core.RecordIter((0),G__23633__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,cljs.core.cst$kw$message,cljs.core.cst$kw$payload,cljs.core.cst$kw$cause], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__23639 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (37091761 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__23639(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23635,other23636){
var self__ = this;
var this23635__$1 = this;
return (!((other23636 == null))) && ((this23635__$1.constructor === other23636.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23635__$1.type,other23636.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23635__$1.message,other23636.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23635__$1.payload,other23636.payload)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23635__$1.cause,other23636.cause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23635__$1.__extmap,other23636.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cause,null,cljs.core.cst$kw$payload,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$message,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__23633){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__23640 = cljs.core.keyword_identical_QMARK_;
var expr__23641 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__23643 = cljs.core.cst$kw$type;
var G__23644 = expr__23641;
return (pred__23640.cljs$core$IFn$_invoke$arity$2 ? pred__23640.cljs$core$IFn$_invoke$arity$2(G__23643,G__23644) : pred__23640.call(null,G__23643,G__23644));
})())){
return (new keechma.toolbox.pipeline.core.Error(G__23633,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23645 = cljs.core.cst$kw$message;
var G__23646 = expr__23641;
return (pred__23640.cljs$core$IFn$_invoke$arity$2 ? pred__23640.cljs$core$IFn$_invoke$arity$2(G__23645,G__23646) : pred__23640.call(null,G__23645,G__23646));
})())){
return (new keechma.toolbox.pipeline.core.Error(self__.type,G__23633,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23647 = cljs.core.cst$kw$payload;
var G__23648 = expr__23641;
return (pred__23640.cljs$core$IFn$_invoke$arity$2 ? pred__23640.cljs$core$IFn$_invoke$arity$2(G__23647,G__23648) : pred__23640.call(null,G__23647,G__23648));
})())){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,G__23633,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23649 = cljs.core.cst$kw$cause;
var G__23650 = expr__23641;
return (pred__23640.cljs$core$IFn$_invoke$arity$2 ? pred__23640.cljs$core$IFn$_invoke$arity$2(G__23649,G__23650) : pred__23640.call(null,G__23649,G__23650));
})())){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,G__23633,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__23633),null));
}
}
}
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cause,self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__23633){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,G__23633,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.pipeline.core.Error.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type,cljs.core.cst$sym$message,cljs.core.cst$sym$payload,cljs.core.cst$sym$cause], null);
});

keechma.toolbox.pipeline.core.Error.cljs$lang$type = true;

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.__GT_Error = (function keechma$toolbox$pipeline$core$__GT_Error(type,message,payload,cause){
return (new keechma.toolbox.pipeline.core.Error(type,message,payload,cause,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_Error = (function keechma$toolbox$pipeline$core$map__GT_Error(G__23637){
return (new keechma.toolbox.pipeline.core.Error(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__23637),cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__23637),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(G__23637),cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(G__23637),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23637,cljs.core.cst$kw$type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$message,cljs.core.cst$kw$payload,cljs.core.cst$kw$cause], 0))),null));
});

keechma.toolbox.pipeline.core.error_BANG_ = (function keechma$toolbox$pipeline$core$error_BANG_(type,payload){
return keechma.toolbox.pipeline.core.__GT_Error(type,null,payload,null);
});

/**
 * @interface
 */
keechma.toolbox.pipeline.core.ISideffect = function(){};

keechma.toolbox.pipeline.core.call_BANG_ = (function keechma$toolbox$pipeline$core$call_BANG_(this$,controller,app_db_atom){
if((!((this$ == null))) && (!((this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 == null)))){
return this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3(this$,controller,app_db_atom);
} else {
var x__12247__auto__ = (((this$ == null))?null:this$);
var m__12248__auto__ = (keechma.toolbox.pipeline.core.call_BANG_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(this$,controller,app_db_atom) : m__12248__auto__.call(null,this$,controller,app_db_atom));
} else {
var m__12248__auto____$1 = (keechma.toolbox.pipeline.core.call_BANG_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,controller,app_db_atom) : m__12248__auto____$1.call(null,this$,controller,app_db_atom));
} else {
throw cljs.core.missing_protocol("ISideffect.call!",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.CommitSideffect = (function (value,cb,__meta,__extmap,__hash){
this.value = value;
this.cb = cb;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k23653,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__23657 = k23653;
var G__23657__$1 = (((G__23657 instanceof cljs.core.Keyword))?G__23657.fqn:null);
switch (G__23657__$1) {
case "value":
return self__.value;

break;
case "cb":
return self__.cb;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23653,else__12205__auto__);

}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.pipeline.core.CommitSideffect{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cb,self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23652){
var self__ = this;
var G__23652__$1 = this;
return (new cljs.core.RecordIter((0),G__23652__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$cb], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__23658 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (706431185 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__23658(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23654,other23655){
var self__ = this;
var this23654__$1 = this;
return (!((other23655 == null))) && ((this23654__$1.constructor === other23655.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23654__$1.value,other23655.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23654__$1.cb,other23655.cb)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23654__$1.__extmap,other23655.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,_,app_db_atom){
var self__ = this;
var this$__$1 = this;
var cb__$1 = cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.reset_BANG_(app_db_atom,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(this$__$1));

if(cljs.core.truth_(cb__$1)){
return (cb__$1.cljs$core$IFn$_invoke$arity$0 ? cb__$1.cljs$core$IFn$_invoke$arity$0() : cb__$1.call(null));
} else {
return null;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cb,null,cljs.core.cst$kw$value,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__23652){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__23659 = cljs.core.keyword_identical_QMARK_;
var expr__23660 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__23662 = cljs.core.cst$kw$value;
var G__23663 = expr__23660;
return (pred__23659.cljs$core$IFn$_invoke$arity$2 ? pred__23659.cljs$core$IFn$_invoke$arity$2(G__23662,G__23663) : pred__23659.call(null,G__23662,G__23663));
})())){
return (new keechma.toolbox.pipeline.core.CommitSideffect(G__23652,self__.cb,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23664 = cljs.core.cst$kw$cb;
var G__23665 = expr__23660;
return (pred__23659.cljs$core$IFn$_invoke$arity$2 ? pred__23659.cljs$core$IFn$_invoke$arity$2(G__23664,G__23665) : pred__23659.call(null,G__23664,G__23665));
})())){
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,G__23652,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__23652),null));
}
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cb,self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__23652){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,G__23652,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.pipeline.core.CommitSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$cb], null);
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$__GT_CommitSideffect(value,cb){
return (new keechma.toolbox.pipeline.core.CommitSideffect(value,cb,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$map__GT_CommitSideffect(G__23656){
return (new keechma.toolbox.pipeline.core.CommitSideffect(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__23656),cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(G__23656),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23656,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cb], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.SendCommandSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k23668,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__23672 = k23668;
var G__23672__$1 = (((G__23672 instanceof cljs.core.Keyword))?G__23672.fqn:null);
switch (G__23672__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23668,else__12205__auto__);

}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.pipeline.core.SendCommandSideffect{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23667){
var self__ = this;
var G__23667__$1 = this;
return (new cljs.core.RecordIter((0),G__23667__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$command,cljs.core.cst$kw$payload], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__23673 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (-1801969228 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__23673(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23669,other23670){
var self__ = this;
var this23669__$1 = this;
return (!((other23670 == null))) && ((this23669__$1.constructor === other23670.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23669__$1.command,other23670.command)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23669__$1.payload,other23670.payload)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23669__$1.__extmap,other23670.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
var G__23674 = controller;
var G__23675 = cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(this$__$1);
var G__23676 = cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(this$__$1);
return (keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(G__23674,G__23675,G__23676) : keechma.controller.send_command.call(null,G__23674,G__23675,G__23676));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payload,null,cljs.core.cst$kw$command,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__23667){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__23677 = cljs.core.keyword_identical_QMARK_;
var expr__23678 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__23680 = cljs.core.cst$kw$command;
var G__23681 = expr__23678;
return (pred__23677.cljs$core$IFn$_invoke$arity$2 ? pred__23677.cljs$core$IFn$_invoke$arity$2(G__23680,G__23681) : pred__23677.call(null,G__23680,G__23681));
})())){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(G__23667,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23682 = cljs.core.cst$kw$payload;
var G__23683 = expr__23678;
return (pred__23677.cljs$core$IFn$_invoke$arity$2 ? pred__23677.cljs$core$IFn$_invoke$arity$2(G__23682,G__23683) : pred__23677.call(null,G__23682,G__23683));
})())){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,G__23667,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__23667),null));
}
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__23667){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,G__23667,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$command,cljs.core.cst$sym$payload], null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$__GT_SendCommandSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$map__GT_SendCommandSideffect(G__23671){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(G__23671),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(G__23671),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23671,cljs.core.cst$kw$command,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$payload], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.ExecuteSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k23686,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__23690 = k23686;
var G__23690__$1 = (((G__23690 instanceof cljs.core.Keyword))?G__23690.fqn:null);
switch (G__23690__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23686,else__12205__auto__);

}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.pipeline.core.ExecuteSideffect{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23685){
var self__ = this;
var G__23685__$1 = this;
return (new cljs.core.RecordIter((0),G__23685__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$command,cljs.core.cst$kw$payload], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__23691 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (1063192084 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__23691(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23687,other23688){
var self__ = this;
var this23687__$1 = this;
return (!((other23688 == null))) && ((this23687__$1.constructor === other23688.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23687__$1.command,other23688.command)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23687__$1.payload,other23688.payload)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23687__$1.__extmap,other23688.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
var G__23692 = controller;
var G__23693 = cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(this$__$1);
var G__23694 = cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(this$__$1);
return (keechma.controller.execute.cljs$core$IFn$_invoke$arity$3 ? keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(G__23692,G__23693,G__23694) : keechma.controller.execute.call(null,G__23692,G__23693,G__23694));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payload,null,cljs.core.cst$kw$command,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__23685){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__23695 = cljs.core.keyword_identical_QMARK_;
var expr__23696 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__23698 = cljs.core.cst$kw$command;
var G__23699 = expr__23696;
return (pred__23695.cljs$core$IFn$_invoke$arity$2 ? pred__23695.cljs$core$IFn$_invoke$arity$2(G__23698,G__23699) : pred__23695.call(null,G__23698,G__23699));
})())){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(G__23685,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23700 = cljs.core.cst$kw$payload;
var G__23701 = expr__23696;
return (pred__23695.cljs$core$IFn$_invoke$arity$2 ? pred__23695.cljs$core$IFn$_invoke$arity$2(G__23700,G__23701) : pred__23695.call(null,G__23700,G__23701));
})())){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,G__23685,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__23685),null));
}
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__23685){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,G__23685,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$command,cljs.core.cst$sym$payload], null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$__GT_ExecuteSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$map__GT_ExecuteSideffect(G__23689){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(G__23689),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(G__23689),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23689,cljs.core.cst$kw$command,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$payload], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.RedirectSideffect = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k23704,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__23708 = k23704;
var G__23708__$1 = (((G__23708 instanceof cljs.core.Keyword))?G__23708.fqn:null);
switch (G__23708__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23704,else__12205__auto__);

}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.pipeline.core.RedirectSideffect{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23703){
var self__ = this;
var G__23703__$1 = this;
return (new cljs.core.RecordIter((0),G__23703__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__23709 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (829097778 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__23709(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23705,other23706){
var self__ = this;
var this23705__$1 = this;
return (!((other23706 == null))) && ((this23705__$1.constructor === other23706.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23705__$1.params,other23706.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23705__$1.__extmap,other23706.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
var G__23710 = controller;
var G__23711 = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$__$1);
return (keechma.controller.redirect.cljs$core$IFn$_invoke$arity$2 ? keechma.controller.redirect.cljs$core$IFn$_invoke$arity$2(G__23710,G__23711) : keechma.controller.redirect.call(null,G__23710,G__23711));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__23703){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__23712 = cljs.core.keyword_identical_QMARK_;
var expr__23713 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__23715 = cljs.core.cst$kw$params;
var G__23716 = expr__23713;
return (pred__23712.cljs$core$IFn$_invoke$arity$2 ? pred__23712.cljs$core$IFn$_invoke$arity$2(G__23715,G__23716) : pred__23712.call(null,G__23715,G__23716));
})())){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(G__23703,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__23703),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__23703){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,G__23703,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$__GT_RedirectSideffect(params){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(params,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$map__GT_RedirectSideffect(G__23707){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__23707),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23707,cljs.core.cst$kw$params)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.DoSideffect = (function (sideffects,__meta,__extmap,__hash){
this.sideffects = sideffects;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k23719,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__23723 = k23719;
var G__23723__$1 = (((G__23723 instanceof cljs.core.Keyword))?G__23723.fqn:null);
switch (G__23723__$1) {
case "sideffects":
return self__.sideffects;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23719,else__12205__auto__);

}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#keechma.toolbox.pipeline.core.DoSideffect{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sideffects,self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23718){
var self__ = this;
var G__23718__$1 = this;
return (new cljs.core.RecordIter((0),G__23718__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sideffects], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__23724 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (1418968668 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__23724(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23720,other23721){
var self__ = this;
var this23720__$1 = this;
return (!((other23721 == null))) && ((this23720__$1.constructor === other23721.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23720__$1.sideffects,other23721.sideffects)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23720__$1.__extmap,other23721.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,app_db_atom){
var self__ = this;
var this$__$1 = this;
var sideffects__$1 = cljs.core.cst$kw$sideffects.cljs$core$IFn$_invoke$arity$1(this$__$1);
var seq__23725 = cljs.core.seq(sideffects__$1);
var chunk__23726 = null;
var count__23727 = (0);
var i__23728 = (0);
while(true){
if((i__23728 < count__23727)){
var s = chunk__23726.cljs$core$IIndexed$_nth$arity$2(null,i__23728);
keechma.toolbox.pipeline.core.call_BANG_(s,controller,app_db_atom);

var G__23735 = seq__23725;
var G__23736 = chunk__23726;
var G__23737 = count__23727;
var G__23738 = (i__23728 + (1));
seq__23725 = G__23735;
chunk__23726 = G__23736;
count__23727 = G__23737;
i__23728 = G__23738;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__23725);
if(temp__5278__auto__){
var seq__23725__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23725__$1)){
var c__12440__auto__ = cljs.core.chunk_first(seq__23725__$1);
var G__23739 = cljs.core.chunk_rest(seq__23725__$1);
var G__23740 = c__12440__auto__;
var G__23741 = cljs.core.count(c__12440__auto__);
var G__23742 = (0);
seq__23725 = G__23739;
chunk__23726 = G__23740;
count__23727 = G__23741;
i__23728 = G__23742;
continue;
} else {
var s = cljs.core.first(seq__23725__$1);
keechma.toolbox.pipeline.core.call_BANG_(s,controller,app_db_atom);

var G__23743 = cljs.core.next(seq__23725__$1);
var G__23744 = null;
var G__23745 = (0);
var G__23746 = (0);
seq__23725 = G__23743;
chunk__23726 = G__23744;
count__23727 = G__23745;
i__23728 = G__23746;
continue;
}
} else {
return null;
}
}
break;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sideffects,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__23718){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__23729 = cljs.core.keyword_identical_QMARK_;
var expr__23730 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__23732 = cljs.core.cst$kw$sideffects;
var G__23733 = expr__23730;
return (pred__23729.cljs$core$IFn$_invoke$arity$2 ? pred__23729.cljs$core$IFn$_invoke$arity$2(G__23732,G__23733) : pred__23729.call(null,G__23732,G__23733));
})())){
return (new keechma.toolbox.pipeline.core.DoSideffect(G__23718,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__23718),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sideffects,self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__23718){
var self__ = this;
var this__12201__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,G__23718,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

keechma.toolbox.pipeline.core.DoSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$sideffects], null);
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.__GT_DoSideffect = (function keechma$toolbox$pipeline$core$__GT_DoSideffect(sideffects){
return (new keechma.toolbox.pipeline.core.DoSideffect(sideffects,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_DoSideffect = (function keechma$toolbox$pipeline$core$map__GT_DoSideffect(G__23722){
return (new keechma.toolbox.pipeline.core.DoSideffect(cljs.core.cst$kw$sideffects.cljs$core$IFn$_invoke$arity$1(G__23722),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23722,cljs.core.cst$kw$sideffects)),null));
});

/**
 * 
 * Commit pipeline sideffect.
 * 
 * Accepts `value` or `value` and `callback` as arguments. Value should be a new version of app-db.
 * 
 * ```clojure
 * (commit! (assoc-in app-db [:kv :user] {:username "retro"}))
 * 
 * ```
 * 
 * If the callback argument is present, this function will be called immediately after the app-db-atom is updated.
 * This is useful if you want to force Reagent to re-render the screen.
 */
keechma.toolbox.pipeline.core.commit_BANG_ = (function keechma$toolbox$pipeline$core$commit_BANG_(var_args){
var G__23748 = arguments.length;
switch (G__23748) {
case 1:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2(value,null);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,cb){
return keechma.toolbox.pipeline.core.__GT_CommitSideffect(value,cb);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * 
 * Execute pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Use this if you want to execute a command on the current controller.
 */
keechma.toolbox.pipeline.core.execute_BANG_ = (function keechma$toolbox$pipeline$core$execute_BANG_(command,payload){
return keechma.toolbox.pipeline.core.__GT_ExecuteSideffect(command,payload);
});
/**
 * 
 * Send command pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Command should be a vector where first element is the controller topic, and the second
 * element is the command name. 
 */
keechma.toolbox.pipeline.core.send_command_BANG_ = (function keechma$toolbox$pipeline$core$send_command_BANG_(command,payload){
return keechma.toolbox.pipeline.core.__GT_SendCommandSideffect(command,payload);
});
/**
 * 
 * Redirect pipeline sideffect.
 * 
 * Accepts `params` argument. Page will be redirected to a new URL which will be generated from the passed in params argument. If you need to 
 * access the current route data, it is present in the pipeline `app-db` argument under the `[:route :data]` path.
 */
keechma.toolbox.pipeline.core.redirect_BANG_ = (function keechma$toolbox$pipeline$core$redirect_BANG_(params){
return keechma.toolbox.pipeline.core.__GT_RedirectSideffect(params);
});
/**
 * 
 * Runs multiple sideffects sequentially:
 * 
 * ```clojure
 * (do!
 *   (commit! (assoc-in app-db [:kv :current-user] value))
 *   (redirect! {:page "user" :id (:id user)}))
 * ```
 */
keechma.toolbox.pipeline.core.do_BANG_ = (function keechma$toolbox$pipeline$core$do_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23751 = arguments.length;
var i__12776__auto___23752 = (0);
while(true){
if((i__12776__auto___23752 < len__12775__auto___23751)){
args__12782__auto__.push((arguments[i__12776__auto___23752]));

var G__23753 = (i__12776__auto___23752 + (1));
i__12776__auto___23752 = G__23753;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sideffects){
return keechma.toolbox.pipeline.core.__GT_DoSideffect(sideffects);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$maxFixedArity = (0);

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$applyTo = (function (seq23750){
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23750));
});

keechma.toolbox.pipeline.core.process_error = (function keechma$toolbox$pipeline$core$process_error(err){
if((err instanceof keechma.toolbox.pipeline.core.Error)){
return err;
} else {
return keechma.toolbox.pipeline.core.__GT_Error(cljs.core.cst$kw$default,null,err,null);

}
});
keechma.toolbox.pipeline.core.is_promise_QMARK_ = (function keechma$toolbox$pipeline$core$is_promise_QMARK_(val){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(promesa.impl.Promise,cljs.core.type(val));
});
keechma.toolbox.pipeline.core.promise__GT_chan = (function keechma$toolbox$pipeline$core$promise__GT_chan(promise){
var promise_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (promise_chan){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(promise_chan,keechma.toolbox.pipeline.core.process_error(e));
});})(promise_chan))
,promesa.core.map(((function (promise_chan){
return (function (v){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(promise_chan,(((v == null))?cljs.core.cst$kw$keechma$toolbox$pipeline$core_SLASH_nil:v));
});})(promise_chan))
,promise));

return promise_chan;
});
keechma.toolbox.pipeline.core.pipeline_errors = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$async_DASH_sideffect,"Returning sideffects from promises is not permitted. It is possible that application state was modified in the meantime"], null);
keechma.toolbox.pipeline.core.action_ret_val = (function keechma$toolbox$pipeline$core$action_ret_val(action,ctrl,context,app_db_atom,value,error){
try{var ret = (((error == null))?(function (){var G__23755 = value;
var G__23756 = cljs.core.deref(app_db_atom);
var G__23757 = context;
return (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(G__23755,G__23756,G__23757) : action.call(null,G__23755,G__23756,G__23757));
})():(function (){var G__23758 = value;
var G__23759 = cljs.core.deref(app_db_atom);
var G__23760 = context;
var G__23761 = error;
return (action.cljs$core$IFn$_invoke$arity$4 ? action.cljs$core$IFn$_invoke$arity$4(G__23758,G__23759,G__23760,G__23761) : action.call(null,G__23758,G__23759,G__23760,G__23761));
})());
var ret_val = cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(ret);
var ret_repr = cljs.core.cst$kw$repr.cljs$core$IFn$_invoke$arity$1(ret);
if(cljs.core.truth_(cljs.core.cst$kw$pipeline_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ret_val)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(ret_val.cljs$core$IFn$_invoke$arity$3 ? ret_val.cljs$core$IFn$_invoke$arity$3(ctrl,app_db_atom,value) : ret_val.call(null,ctrl,app_db_atom,value)),cljs.core.cst$kw$promise_QMARK_,true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,ret_val,cljs.core.cst$kw$repr,ret_repr,cljs.core.cst$kw$promise_QMARK_,keechma.toolbox.pipeline.core.is_promise_QMARK_(ret_val)], null);
}
}catch (e23754){var err = e23754;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$keechma$toolbox$pipeline$core_SLASH_pipeline_DASH_error,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(err.data))){
throw err;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,keechma.toolbox.pipeline.core.process_error(err),cljs.core.cst$kw$promise_QMARK_,false], null);
}
}});
keechma.toolbox.pipeline.core.extract_nil = (function keechma$toolbox$pipeline$core$extract_nil(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$keechma$toolbox$pipeline$core_SLASH_nil,value)){
return null;
} else {
return value;
}
});
keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_ = (function keechma$toolbox$pipeline$core$pending_and_cancelable_QMARK_(promise){
var and__11502__auto__ = promesa.core.pending_QMARK_(promise);
if(cljs.core.truth_(and__11502__auto__)){
return cljs.core.fn_QMARK_(promise.cancel);
} else {
return and__11502__auto__;
}
});
keechma.toolbox.pipeline.core.run_pipeline = (function keechma$toolbox$pipeline$core$run_pipeline(pipeline,ctrl,app_db_atom,value){
var map__23762 = pipeline;
var map__23762__$1 = ((((!((map__23762 == null)))?((((map__23762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23762):map__23762);
var begin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23762__$1,cljs.core.cst$kw$begin);
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23762__$1,cljs.core.cst$kw$rescue);
var current_promise = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var context = (keechma.controller.context.cljs$core$IFn$_invoke$arity$1 ? keechma.controller.context.cljs$core$IFn$_invoke$arity$1(ctrl) : keechma.controller.context.call(null,ctrl));
return promesa.core.promise(((function (map__23762,map__23762__$1,begin,rescue,current_promise,context){
return (function (resolve,reject,on_cancel){
if(cljs.core.fn_QMARK_(on_cancel)){
var G__23764_24011 = ((function (map__23762,map__23762__$1,begin,rescue,current_promise,context){
return (function (){
var c = cljs.core.deref(current_promise);
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_(c))){
return c.cancel();
} else {
return null;
}
});})(map__23762,map__23762__$1,begin,rescue,current_promise,context))
;
(on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(G__23764_24011) : on_cancel.call(null,G__23764_24011));
} else {
}

var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__,map__23762,map__23762__$1,begin,rescue,current_promise,context){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__,map__23762,map__23762__$1,begin,rescue,current_promise,context){
return (function (state_23905){
var state_val_23906 = (state_23905[(1)]);
if((state_val_23906 === (62))){
var inst_23767 = (state_23905[(7)]);
var state_23905__$1 = state_23905;
var statearr_23907_24012 = state_23905__$1;
(statearr_23907_24012[(2)] = inst_23767);

(statearr_23907_24012[(1)] = (64));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (7))){
var inst_23777 = (state_23905[(8)]);
var inst_23782 = inst_23777.cljs$lang$protocol_mask$partition0$;
var inst_23783 = (inst_23782 & (64));
var inst_23784 = inst_23777.cljs$core$ISeq$;
var inst_23785 = (cljs.core.PROTOCOL_SENTINEL === inst_23784);
var inst_23786 = (inst_23783) || (inst_23785);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23786)){
var statearr_23908_24013 = state_23905__$1;
(statearr_23908_24013[(1)] = (10));

} else {
var statearr_23909_24014 = state_23905__$1;
(statearr_23909_24014[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (59))){
var inst_23766 = (state_23905[(9)]);
var inst_23836 = (state_23905[(10)]);
var inst_23884 = cljs.core.rest(inst_23766);
var inst_23885 = (inst_23836 == null);
var state_23905__$1 = (function (){var statearr_23910 = state_23905;
(statearr_23910[(11)] = inst_23884);

return statearr_23910;
})();
if(cljs.core.truth_(inst_23885)){
var statearr_23911_24015 = state_23905__$1;
(statearr_23911_24015[(1)] = (62));

} else {
var statearr_23912_24016 = state_23905__$1;
(statearr_23912_24016[(1)] = (63));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (20))){
var inst_23799 = (state_23905[(12)]);
var inst_23826 = cljs.core.native_satisfies_QMARK_(keechma.toolbox.pipeline.core.ISideffect,inst_23799);
var state_23905__$1 = state_23905;
var statearr_23913_24017 = state_23905__$1;
(statearr_23913_24017[(2)] = inst_23826);

(statearr_23913_24017[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (58))){
var inst_23895 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23914_24018 = state_23905__$1;
(statearr_23914_24018[(2)] = inst_23895);

(statearr_23914_24018[(1)] = (55));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (60))){
var state_23905__$1 = state_23905;
var statearr_23915_24019 = state_23905__$1;
(statearr_23915_24019[(2)] = null);

(statearr_23915_24019[(1)] = (61));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (27))){
var inst_23822 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23916_24020 = state_23905__$1;
(statearr_23916_24020[(2)] = inst_23822);

(statearr_23916_24020[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (1))){
var inst_23765 = cljs.core.cst$kw$begin;
var inst_23766 = begin;
var inst_23767 = value;
var inst_23768 = null;
var state_23905__$1 = (function (){var statearr_23917 = state_23905;
(statearr_23917[(9)] = inst_23766);

(statearr_23917[(7)] = inst_23767);

(statearr_23917[(13)] = inst_23765);

(statearr_23917[(14)] = inst_23768);

return statearr_23917;
})();
var statearr_23918_24021 = state_23905__$1;
(statearr_23918_24021[(2)] = null);

(statearr_23918_24021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (24))){
var inst_23824 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23919_24022 = state_23905__$1;
(statearr_23919_24022[(2)] = inst_23824);

(statearr_23919_24022[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (55))){
var inst_23897 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23920_24023 = state_23905__$1;
(statearr_23920_24023[(2)] = inst_23897);

(statearr_23920_24023[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (39))){
var state_23905__$1 = state_23905;
var statearr_23921_24024 = state_23905__$1;
(statearr_23921_24024[(2)] = null);

(statearr_23921_24024[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (46))){
var inst_23899 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23922_24025 = state_23905__$1;
(statearr_23922_24025[(2)] = inst_23899);

(statearr_23922_24025[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (4))){
var inst_23767 = (state_23905[(7)]);
var inst_23773 = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(inst_23767) : resolve.call(null,inst_23767));
var state_23905__$1 = state_23905;
var statearr_23923_24026 = state_23905__$1;
(statearr_23923_24026[(2)] = inst_23773);

(statearr_23923_24026[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (54))){
var inst_23828 = (state_23905[(15)]);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23828)){
var statearr_23924_24027 = state_23905__$1;
(statearr_23924_24027[(1)] = (56));

} else {
var statearr_23925_24028 = state_23905__$1;
(statearr_23925_24028[(1)] = (57));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (15))){
var inst_23800 = (state_23905[(16)]);
var inst_23798 = (state_23905[(2)]);
var inst_23799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23798,cljs.core.cst$kw$value);
var inst_23800__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23798,cljs.core.cst$kw$promise_QMARK_);
var inst_23801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23798,cljs.core.cst$kw$repr);
var state_23905__$1 = (function (){var statearr_23926 = state_23905;
(statearr_23926[(17)] = inst_23801);

(statearr_23926[(12)] = inst_23799);

(statearr_23926[(16)] = inst_23800__$1);

return statearr_23926;
})();
if(cljs.core.truth_(inst_23800__$1)){
var statearr_23927_24029 = state_23905__$1;
(statearr_23927_24029[(1)] = (16));

} else {
var statearr_23928_24030 = state_23905__$1;
(statearr_23928_24030[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (48))){
var inst_23836 = (state_23905[(10)]);
var inst_23867 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_23836) : reject.call(null,inst_23836));
var state_23905__$1 = state_23905;
var statearr_23929_24031 = state_23905__$1;
(statearr_23929_24031[(2)] = inst_23867);

(statearr_23929_24031[(1)] = (49));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (50))){
var inst_23765 = (state_23905[(13)]);
var inst_23872 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23765,cljs.core.cst$kw$rescue);
var state_23905__$1 = state_23905;
var statearr_23930_24032 = state_23905__$1;
(statearr_23930_24032[(2)] = inst_23872);

(statearr_23930_24032[(1)] = (52));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (21))){
var inst_23800 = (state_23905[(16)]);
var inst_23828 = (state_23905[(2)]);
var state_23905__$1 = (function (){var statearr_23931 = state_23905;
(statearr_23931[(15)] = inst_23828);

return statearr_23931;
})();
if(cljs.core.truth_(inst_23800)){
var statearr_23932_24033 = state_23905__$1;
(statearr_23932_24033[(1)] = (28));

} else {
var statearr_23933_24034 = state_23905__$1;
(statearr_23933_24034[(1)] = (29));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (31))){
var inst_23832 = (state_23905[(2)]);
var inst_23833 = keechma.toolbox.pipeline.core.extract_nil(inst_23832);
var state_23905__$1 = state_23905;
var statearr_23934_24035 = state_23905__$1;
(statearr_23934_24035[(2)] = inst_23833);

(statearr_23934_24035[(1)] = (30));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (32))){
var inst_23828 = (state_23905[(15)]);
var state_23905__$1 = state_23905;
var statearr_23938_24036 = state_23905__$1;
(statearr_23938_24036[(2)] = inst_23828);

(statearr_23938_24036[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (40))){
var inst_23837 = (state_23905[(18)]);
var inst_23856 = (state_23905[(2)]);
var state_23905__$1 = (function (){var statearr_23939 = state_23905;
(statearr_23939[(19)] = inst_23856);

return statearr_23939;
})();
if(cljs.core.truth_(inst_23837)){
var statearr_23940_24037 = state_23905__$1;
(statearr_23940_24037[(1)] = (41));

} else {
var statearr_23941_24038 = state_23905__$1;
(statearr_23941_24038[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (56))){
var inst_23766 = (state_23905[(9)]);
var inst_23767 = (state_23905[(7)]);
var inst_23765 = (state_23905[(13)]);
var inst_23768 = (state_23905[(14)]);
var inst_23880 = cljs.core.rest(inst_23766);
var tmp23935 = inst_23767;
var tmp23936 = inst_23765;
var tmp23937 = inst_23768;
var inst_23765__$1 = tmp23936;
var inst_23766__$1 = inst_23880;
var inst_23767__$1 = tmp23935;
var inst_23768__$1 = tmp23937;
var state_23905__$1 = (function (){var statearr_23942 = state_23905;
(statearr_23942[(9)] = inst_23766__$1);

(statearr_23942[(7)] = inst_23767__$1);

(statearr_23942[(13)] = inst_23765__$1);

(statearr_23942[(14)] = inst_23768__$1);

return statearr_23942;
})();
var statearr_23943_24039 = state_23905__$1;
(statearr_23943_24039[(2)] = null);

(statearr_23943_24039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (33))){
var inst_23800 = (state_23905[(16)]);
var state_23905__$1 = state_23905;
var statearr_23944_24040 = state_23905__$1;
(statearr_23944_24040[(2)] = inst_23800);

(statearr_23944_24040[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (13))){
var inst_23777 = (state_23905[(8)]);
var inst_23795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23777);
var state_23905__$1 = state_23905;
var statearr_23945_24041 = state_23905__$1;
(statearr_23945_24041[(2)] = inst_23795);

(statearr_23945_24041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (22))){
var state_23905__$1 = state_23905;
var statearr_23946_24042 = state_23905__$1;
(statearr_23946_24042[(2)] = true);

(statearr_23946_24042[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (36))){
var state_23905__$1 = state_23905;
var statearr_23947_24043 = state_23905__$1;
(statearr_23947_24043[(2)] = null);

(statearr_23947_24043[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (41))){
var inst_23765 = (state_23905[(13)]);
var inst_23858 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23765,cljs.core.cst$kw$begin);
var state_23905__$1 = state_23905;
var statearr_23948_24044 = state_23905__$1;
(statearr_23948_24044[(2)] = inst_23858);

(statearr_23948_24044[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (43))){
var inst_23861 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23861)){
var statearr_23949_24045 = state_23905__$1;
(statearr_23949_24045[(1)] = (44));

} else {
var statearr_23950_24046 = state_23905__$1;
(statearr_23950_24046[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (61))){
var inst_23893 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23951_24047 = state_23905__$1;
(statearr_23951_24047[(2)] = inst_23893);

(statearr_23951_24047[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (29))){
var inst_23799 = (state_23905[(12)]);
var state_23905__$1 = state_23905;
var statearr_23952_24048 = state_23905__$1;
(statearr_23952_24048[(2)] = inst_23799);

(statearr_23952_24048[(1)] = (30));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (44))){
var inst_23863 = cljs.core.seq(rescue);
var state_23905__$1 = state_23905;
if(inst_23863){
var statearr_23953_24049 = state_23905__$1;
(statearr_23953_24049[(1)] = (47));

} else {
var statearr_23954_24050 = state_23905__$1;
(statearr_23954_24050[(1)] = (48));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (6))){
var inst_23901 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23957_24051 = state_23905__$1;
(statearr_23957_24051[(2)] = inst_23901);

(statearr_23957_24051[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (28))){
var inst_23799 = (state_23905[(12)]);
var inst_23830 = keechma.toolbox.pipeline.core.promise__GT_chan(inst_23799);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23905__$1,(31),inst_23830);
} else {
if((state_val_23906 === (64))){
var inst_23765 = (state_23905[(13)]);
var inst_23884 = (state_23905[(11)]);
var inst_23768 = (state_23905[(14)]);
var inst_23889 = (state_23905[(2)]);
var tmp23955 = inst_23765;
var tmp23956 = inst_23768;
var inst_23765__$1 = tmp23955;
var inst_23766 = inst_23884;
var inst_23767 = inst_23889;
var inst_23768__$1 = tmp23956;
var state_23905__$1 = (function (){var statearr_23958 = state_23905;
(statearr_23958[(9)] = inst_23766);

(statearr_23958[(7)] = inst_23767);

(statearr_23958[(13)] = inst_23765__$1);

(statearr_23958[(14)] = inst_23768__$1);

return statearr_23958;
})();
var statearr_23959_24052 = state_23905__$1;
(statearr_23959_24052[(2)] = null);

(statearr_23959_24052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (51))){
var inst_23837 = (state_23905[(18)]);
var state_23905__$1 = state_23905;
var statearr_23960_24053 = state_23905__$1;
(statearr_23960_24053[(2)] = inst_23837);

(statearr_23960_24053[(1)] = (52));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (25))){
var inst_23799 = (state_23905[(12)]);
var inst_23819 = cljs.core.native_satisfies_QMARK_(keechma.toolbox.pipeline.core.ISideffect,inst_23799);
var state_23905__$1 = state_23905;
var statearr_23961_24054 = state_23905__$1;
(statearr_23961_24054[(2)] = inst_23819);

(statearr_23961_24054[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (34))){
var inst_23841 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23841)){
var statearr_23962_24055 = state_23905__$1;
(statearr_23962_24055[(1)] = (35));

} else {
var statearr_23963_24056 = state_23905__$1;
(statearr_23963_24056[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (17))){
var state_23905__$1 = state_23905;
var statearr_23964_24057 = state_23905__$1;
(statearr_23964_24057[(2)] = null);

(statearr_23964_24057[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (3))){
var inst_23903 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23905__$1,inst_23903);
} else {
if((state_val_23906 === (12))){
var inst_23790 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_23965_24058 = state_23905__$1;
(statearr_23965_24058[(2)] = inst_23790);

(statearr_23965_24058[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (2))){
var inst_23766 = (state_23905[(9)]);
var inst_23770 = cljs.core.seq(inst_23766);
var inst_23771 = cljs.core.not(inst_23770);
var state_23905__$1 = state_23905;
if(inst_23771){
var statearr_23967_24059 = state_23905__$1;
(statearr_23967_24059[(1)] = (4));

} else {
var statearr_23968_24060 = state_23905__$1;
(statearr_23968_24060[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (23))){
var inst_23799 = (state_23905[(12)]);
var inst_23816 = inst_23799.cljs$lang$protocol_mask$partition$;
var inst_23817 = (!inst_23816);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23817)){
var statearr_23969_24061 = state_23905__$1;
(statearr_23969_24061[(1)] = (25));

} else {
var statearr_23970_24062 = state_23905__$1;
(statearr_23970_24062[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (47))){
var inst_23767 = (state_23905[(7)]);
var inst_23836 = (state_23905[(10)]);
var tmp23966 = inst_23767;
var inst_23765 = cljs.core.cst$kw$rescue;
var inst_23766 = rescue;
var inst_23767__$1 = tmp23966;
var inst_23768 = inst_23836;
var state_23905__$1 = (function (){var statearr_23971 = state_23905;
(statearr_23971[(9)] = inst_23766);

(statearr_23971[(7)] = inst_23767__$1);

(statearr_23971[(13)] = inst_23765);

(statearr_23971[(14)] = inst_23768);

return statearr_23971;
})();
var statearr_23972_24063 = state_23905__$1;
(statearr_23972_24063[(2)] = null);

(statearr_23972_24063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (35))){
var inst_23843 = cljs.core.cst$kw$async_DASH_sideffect.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.pipeline.core.pipeline_errors);
var inst_23844 = [cljs.core.cst$kw$type];
var inst_23845 = [cljs.core.cst$kw$keechma$toolbox$pipeline$core_SLASH_pipeline_DASH_error];
var inst_23846 = cljs.core.PersistentHashMap.fromArrays(inst_23844,inst_23845);
var inst_23847 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_23843,inst_23846);
var inst_23848 = (function(){throw inst_23847})();
var state_23905__$1 = state_23905;
var statearr_23973_24064 = state_23905__$1;
(statearr_23973_24064[(2)] = inst_23848);

(statearr_23973_24064[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (19))){
var inst_23799 = (state_23905[(12)]);
var inst_23811 = inst_23799.keechma$toolbox$pipeline$core$ISideffect$;
var inst_23812 = (cljs.core.PROTOCOL_SENTINEL === inst_23811);
var inst_23813 = (false) || (inst_23812);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23813)){
var statearr_23974_24065 = state_23905__$1;
(statearr_23974_24065[(1)] = (22));

} else {
var statearr_23975_24066 = state_23905__$1;
(statearr_23975_24066[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (57))){
var state_23905__$1 = state_23905;
var statearr_23976_24067 = state_23905__$1;
(statearr_23976_24067[(1)] = (59));



return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (11))){
var state_23905__$1 = state_23905;
var statearr_23978_24068 = state_23905__$1;
(statearr_23978_24068[(2)] = false);

(statearr_23978_24068[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (9))){
var inst_23793 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23793)){
var statearr_23979_24069 = state_23905__$1;
(statearr_23979_24069[(1)] = (13));

} else {
var statearr_23980_24070 = state_23905__$1;
(statearr_23980_24070[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (5))){
var inst_23766 = (state_23905[(9)]);
var inst_23767 = (state_23905[(7)]);
var inst_23777 = (state_23905[(8)]);
var inst_23768 = (state_23905[(14)]);
var inst_23776 = cljs.core.first(inst_23766);
var inst_23777__$1 = keechma.toolbox.pipeline.core.action_ret_val(inst_23776,ctrl,context,app_db_atom,inst_23767,inst_23768);
var inst_23779 = (inst_23777__$1 == null);
var inst_23780 = cljs.core.not(inst_23779);
var state_23905__$1 = (function (){var statearr_23981 = state_23905;
(statearr_23981[(8)] = inst_23777__$1);

return statearr_23981;
})();
if(inst_23780){
var statearr_23982_24071 = state_23905__$1;
(statearr_23982_24071[(1)] = (7));

} else {
var statearr_23983_24072 = state_23905__$1;
(statearr_23983_24072[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (14))){
var inst_23777 = (state_23905[(8)]);
var state_23905__$1 = state_23905;
var statearr_23984_24073 = state_23905__$1;
(statearr_23984_24073[(2)] = inst_23777);

(statearr_23984_24073[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (45))){
var inst_23837 = (state_23905[(18)]);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23837)){
var statearr_23985_24074 = state_23905__$1;
(statearr_23985_24074[(1)] = (50));

} else {
var statearr_23986_24075 = state_23905__$1;
(statearr_23986_24075[(1)] = (51));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (53))){
var inst_23768 = (state_23905[(14)]);
var inst_23877 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_23768) : reject.call(null,inst_23768));
var state_23905__$1 = state_23905;
var statearr_23987_24076 = state_23905__$1;
(statearr_23987_24076[(2)] = inst_23877);

(statearr_23987_24076[(1)] = (55));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (26))){
var state_23905__$1 = state_23905;
var statearr_23988_24077 = state_23905__$1;
(statearr_23988_24077[(2)] = false);

(statearr_23988_24077[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (16))){
var inst_23799 = (state_23905[(12)]);
var inst_23803 = cljs.core.reset_BANG_(current_promise,inst_23799);
var state_23905__$1 = state_23905;
var statearr_23989_24078 = state_23905__$1;
(statearr_23989_24078[(2)] = inst_23803);

(statearr_23989_24078[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (38))){
var inst_23836 = (state_23905[(10)]);
var inst_23853 = keechma.toolbox.pipeline.core.call_BANG_(inst_23836,ctrl,app_db_atom);
var state_23905__$1 = state_23905;
var statearr_23990_24079 = state_23905__$1;
(statearr_23990_24079[(2)] = inst_23853);

(statearr_23990_24079[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (30))){
var inst_23836 = (state_23905[(10)]);
var inst_23800 = (state_23905[(16)]);
var inst_23836__$1 = (state_23905[(2)]);
var inst_23837 = (inst_23836__$1 instanceof keechma.toolbox.pipeline.core.Error);
var state_23905__$1 = (function (){var statearr_23991 = state_23905;
(statearr_23991[(10)] = inst_23836__$1);

(statearr_23991[(18)] = inst_23837);

return statearr_23991;
})();
if(cljs.core.truth_(inst_23800)){
var statearr_23992_24080 = state_23905__$1;
(statearr_23992_24080[(1)] = (32));

} else {
var statearr_23993_24081 = state_23905__$1;
(statearr_23993_24081[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (10))){
var state_23905__$1 = state_23905;
var statearr_23994_24082 = state_23905__$1;
(statearr_23994_24082[(2)] = true);

(statearr_23994_24082[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (18))){
var inst_23799 = (state_23905[(12)]);
var inst_23806 = (state_23905[(2)]);
var inst_23808 = (inst_23799 == null);
var inst_23809 = cljs.core.not(inst_23808);
var state_23905__$1 = (function (){var statearr_23995 = state_23905;
(statearr_23995[(20)] = inst_23806);

return statearr_23995;
})();
if(inst_23809){
var statearr_23996_24083 = state_23905__$1;
(statearr_23996_24083[(1)] = (19));

} else {
var statearr_23997_24084 = state_23905__$1;
(statearr_23997_24084[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (52))){
var inst_23875 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
if(cljs.core.truth_(inst_23875)){
var statearr_23998_24085 = state_23905__$1;
(statearr_23998_24085[(1)] = (53));

} else {
var statearr_23999_24086 = state_23905__$1;
(statearr_23999_24086[(1)] = (54));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (42))){
var inst_23837 = (state_23905[(18)]);
var state_23905__$1 = state_23905;
var statearr_24000_24087 = state_23905__$1;
(statearr_24000_24087[(2)] = inst_23837);

(statearr_24000_24087[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (37))){
var inst_23828 = (state_23905[(15)]);
var inst_23851 = (state_23905[(2)]);
var state_23905__$1 = (function (){var statearr_24001 = state_23905;
(statearr_24001[(21)] = inst_23851);

return statearr_24001;
})();
if(cljs.core.truth_(inst_23828)){
var statearr_24002_24088 = state_23905__$1;
(statearr_24002_24088[(1)] = (38));

} else {
var statearr_24003_24089 = state_23905__$1;
(statearr_24003_24089[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (63))){
var inst_23836 = (state_23905[(10)]);
var state_23905__$1 = state_23905;
var statearr_24004_24090 = state_23905__$1;
(statearr_24004_24090[(2)] = inst_23836);

(statearr_24004_24090[(1)] = (64));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (8))){
var state_23905__$1 = state_23905;
var statearr_24005_24091 = state_23905__$1;
(statearr_24005_24091[(2)] = false);

(statearr_24005_24091[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23906 === (49))){
var inst_23869 = (state_23905[(2)]);
var state_23905__$1 = state_23905;
var statearr_24006_24092 = state_23905__$1;
(statearr_24006_24092[(2)] = inst_23869);

(statearr_24006_24092[(1)] = (46));


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
});})(c__19193__auto__,map__23762,map__23762__$1,begin,rescue,current_promise,context))
;
return ((function (switch__19091__auto__,c__19193__auto__,map__23762,map__23762__$1,begin,rescue,current_promise,context){
return (function() {
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto__ = null;
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto____0 = (function (){
var statearr_24007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24007[(0)] = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto__);

(statearr_24007[(1)] = (1));

return statearr_24007;
});
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto____1 = (function (state_23905){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_23905);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e24008){if((e24008 instanceof Object)){
var ex__19095__auto__ = e24008;
var statearr_24009_24093 = state_23905;
(statearr_24009_24093[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23905);

return cljs.core.cst$kw$recur;
} else {
throw e24008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__24094 = state_23905;
state_23905 = G__24094;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto__ = function(state_23905){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto____1.call(this,state_23905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto____0;
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto____1;
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__,map__23762,map__23762__$1,begin,rescue,current_promise,context))
})();
var state__19195__auto__ = (function (){var statearr_24010 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_24010[(6)] = c__19193__auto__);

return statearr_24010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__,map__23762,map__23762__$1,begin,rescue,current_promise,context))
);

return c__19193__auto__;
});})(map__23762,map__23762__$1,begin,rescue,current_promise,context))
);
});
keechma.toolbox.pipeline.core.make_pipeline = (function keechma$toolbox$pipeline$core$make_pipeline(pipeline){
return cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.pipeline.core.run_pipeline,pipeline),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pipeline_QMARK_,true], null));
});
keechma.toolbox.pipeline.core.exclusive = (function keechma$toolbox$pipeline$core$exclusive(pipeline){
var current = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (current){
return (function (ctrl,app_db_atom,value){
var temp__5278__auto___24095 = cljs.core.deref(current);
if(cljs.core.truth_(temp__5278__auto___24095)){
var c_24096 = temp__5278__auto___24095;
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_(c_24096))){
c_24096.cancel();
} else {
}
} else {
}

return cljs.core.reset_BANG_(current,(pipeline.cljs$core$IFn$_invoke$arity$3 ? pipeline.cljs$core$IFn$_invoke$arity$3(ctrl,app_db_atom,value) : pipeline.call(null,ctrl,app_db_atom,value)));
});
;})(current))
});
