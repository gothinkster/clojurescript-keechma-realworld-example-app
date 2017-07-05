// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.pipeline.core');
goog.require('cljs.core');
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k23470,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__23472 = (((k23470 instanceof cljs.core.Keyword))?k23470.fqn:null);
switch (G__23472) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23470,else__10665__auto__);

}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.pipeline.core.Error{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cause,self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23469){
var self__ = this;
var G__23469__$1 = this;
return (new cljs.core.RecordIter((0),G__23469__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,cljs.core.cst$kw$message,cljs.core.cst$kw$payload,cljs.core.cst$kw$cause], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cause,null,cljs.core.cst$kw$payload,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$message,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__23469){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__23473 = cljs.core.keyword_identical_QMARK_;
var expr__23474 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__23476 = cljs.core.cst$kw$type;
var G__23477 = expr__23474;
return (pred__23473.cljs$core$IFn$_invoke$arity$2 ? pred__23473.cljs$core$IFn$_invoke$arity$2(G__23476,G__23477) : pred__23473.call(null,G__23476,G__23477));
})())){
return (new keechma.toolbox.pipeline.core.Error(G__23469,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23478 = cljs.core.cst$kw$message;
var G__23479 = expr__23474;
return (pred__23473.cljs$core$IFn$_invoke$arity$2 ? pred__23473.cljs$core$IFn$_invoke$arity$2(G__23478,G__23479) : pred__23473.call(null,G__23478,G__23479));
})())){
return (new keechma.toolbox.pipeline.core.Error(self__.type,G__23469,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23480 = cljs.core.cst$kw$payload;
var G__23481 = expr__23474;
return (pred__23473.cljs$core$IFn$_invoke$arity$2 ? pred__23473.cljs$core$IFn$_invoke$arity$2(G__23480,G__23481) : pred__23473.call(null,G__23480,G__23481));
})())){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,G__23469,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23482 = cljs.core.cst$kw$cause;
var G__23483 = expr__23474;
return (pred__23473.cljs$core$IFn$_invoke$arity$2 ? pred__23473.cljs$core$IFn$_invoke$arity$2(G__23482,G__23483) : pred__23473.call(null,G__23482,G__23483));
})())){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,G__23469,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__23469),null));
}
}
}
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$message,self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cause,self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__23469){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,G__23469,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.pipeline.core.Error.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type,cljs.core.cst$sym$message,cljs.core.cst$sym$payload,cljs.core.cst$sym$cause], null);
});

keechma.toolbox.pipeline.core.Error.cljs$lang$type = true;

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.__GT_Error = (function keechma$toolbox$pipeline$core$__GT_Error(type,message,payload,cause){
return (new keechma.toolbox.pipeline.core.Error(type,message,payload,cause,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_Error = (function keechma$toolbox$pipeline$core$map__GT_Error(G__23471){
return (new keechma.toolbox.pipeline.core.Error(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__23471),cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(G__23471),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(G__23471),cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(G__23471),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23471,cljs.core.cst$kw$type,cljs.core.array_seq([cljs.core.cst$kw$message,cljs.core.cst$kw$payload,cljs.core.cst$kw$cause], 0)),null));
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
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.pipeline.core.call_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,controller,app_db_atom) : m__10706__auto__.call(null,this$,controller,app_db_atom));
} else {
var m__10706__auto____$1 = (keechma.toolbox.pipeline.core.call_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,controller,app_db_atom) : m__10706__auto____$1.call(null,this$,controller,app_db_atom));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k23486,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__23488 = (((k23486 instanceof cljs.core.Keyword))?k23486.fqn:null);
switch (G__23488) {
case "value":
return self__.value;

break;
case "cb":
return self__.cb;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23486,else__10665__auto__);

}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.pipeline.core.CommitSideffect{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cb,self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23485){
var self__ = this;
var G__23485__$1 = this;
return (new cljs.core.RecordIter((0),G__23485__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$cb], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = true;

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,_,app_db_atom){
var self__ = this;
var this$__$1 = this;
var cb__$1 = cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(this$__$1);
var G__23489_23499 = app_db_atom;
var G__23490_23500 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(this$__$1);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23489_23499,G__23490_23500) : cljs.core.reset_BANG_.call(null,G__23489_23499,G__23490_23500));

if(cljs.core.truth_(cb__$1)){
return (cb__$1.cljs$core$IFn$_invoke$arity$0 ? cb__$1.cljs$core$IFn$_invoke$arity$0() : cb__$1.call(null));
} else {
return null;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cb,null,cljs.core.cst$kw$value,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__23485){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__23491 = cljs.core.keyword_identical_QMARK_;
var expr__23492 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__23494 = cljs.core.cst$kw$value;
var G__23495 = expr__23492;
return (pred__23491.cljs$core$IFn$_invoke$arity$2 ? pred__23491.cljs$core$IFn$_invoke$arity$2(G__23494,G__23495) : pred__23491.call(null,G__23494,G__23495));
})())){
return (new keechma.toolbox.pipeline.core.CommitSideffect(G__23485,self__.cb,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23496 = cljs.core.cst$kw$cb;
var G__23497 = expr__23492;
return (pred__23491.cljs$core$IFn$_invoke$arity$2 ? pred__23491.cljs$core$IFn$_invoke$arity$2(G__23496,G__23497) : pred__23491.call(null,G__23496,G__23497));
})())){
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,G__23485,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__23485),null));
}
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cb,self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__23485){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,G__23485,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.pipeline.core.CommitSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$cb], null);
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$__GT_CommitSideffect(value,cb){
return (new keechma.toolbox.pipeline.core.CommitSideffect(value,cb,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$map__GT_CommitSideffect(G__23487){
return (new keechma.toolbox.pipeline.core.CommitSideffect(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__23487),cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(G__23487),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23487,cljs.core.cst$kw$value,cljs.core.array_seq([cljs.core.cst$kw$cb], 0)),null));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k23502,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__23504 = (((k23502 instanceof cljs.core.Keyword))?k23502.fqn:null);
switch (G__23504) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23502,else__10665__auto__);

}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.pipeline.core.SendCommandSideffect{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23501){
var self__ = this;
var G__23501__$1 = this;
return (new cljs.core.RecordIter((0),G__23501__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$command,cljs.core.cst$kw$payload], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = true;

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.send_command.cljs$core$IFn$_invoke$arity$3(controller,cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payload,null,cljs.core.cst$kw$command,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__23501){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__23505 = cljs.core.keyword_identical_QMARK_;
var expr__23506 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__23508 = cljs.core.cst$kw$command;
var G__23509 = expr__23506;
return (pred__23505.cljs$core$IFn$_invoke$arity$2 ? pred__23505.cljs$core$IFn$_invoke$arity$2(G__23508,G__23509) : pred__23505.call(null,G__23508,G__23509));
})())){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(G__23501,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23510 = cljs.core.cst$kw$payload;
var G__23511 = expr__23506;
return (pred__23505.cljs$core$IFn$_invoke$arity$2 ? pred__23505.cljs$core$IFn$_invoke$arity$2(G__23510,G__23511) : pred__23505.call(null,G__23510,G__23511));
})())){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,G__23501,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__23501),null));
}
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__23501){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,G__23501,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$command,cljs.core.cst$sym$payload], null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$__GT_SendCommandSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$map__GT_SendCommandSideffect(G__23503){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(G__23503),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(G__23503),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23503,cljs.core.cst$kw$command,cljs.core.array_seq([cljs.core.cst$kw$payload], 0)),null));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k23514,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__23516 = (((k23514 instanceof cljs.core.Keyword))?k23514.fqn:null);
switch (G__23516) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23514,else__10665__auto__);

}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.pipeline.core.ExecuteSideffect{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23513){
var self__ = this;
var G__23513__$1 = this;
return (new cljs.core.RecordIter((0),G__23513__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$command,cljs.core.cst$kw$payload], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = true;

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.execute.cljs$core$IFn$_invoke$arity$3(controller,cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payload,null,cljs.core.cst$kw$command,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__23513){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__23517 = cljs.core.keyword_identical_QMARK_;
var expr__23518 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__23520 = cljs.core.cst$kw$command;
var G__23521 = expr__23518;
return (pred__23517.cljs$core$IFn$_invoke$arity$2 ? pred__23517.cljs$core$IFn$_invoke$arity$2(G__23520,G__23521) : pred__23517.call(null,G__23520,G__23521));
})())){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(G__23513,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23522 = cljs.core.cst$kw$payload;
var G__23523 = expr__23518;
return (pred__23517.cljs$core$IFn$_invoke$arity$2 ? pred__23517.cljs$core$IFn$_invoke$arity$2(G__23522,G__23523) : pred__23517.call(null,G__23522,G__23523));
})())){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,G__23513,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__23513),null));
}
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$command,self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$payload,self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__23513){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,G__23513,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$command,cljs.core.cst$sym$payload], null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$__GT_ExecuteSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$map__GT_ExecuteSideffect(G__23515){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(cljs.core.cst$kw$command.cljs$core$IFn$_invoke$arity$1(G__23515),cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(G__23515),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23515,cljs.core.cst$kw$command,cljs.core.array_seq([cljs.core.cst$kw$payload], 0)),null));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k23526,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__23528 = (((k23526 instanceof cljs.core.Keyword))?k23526.fqn:null);
switch (G__23528) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23526,else__10665__auto__);

}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.pipeline.core.RedirectSideffect{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23525){
var self__ = this;
var G__23525__$1 = this;
return (new cljs.core.RecordIter((0),G__23525__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = true;

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.redirect(controller,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__23525){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__23529 = cljs.core.keyword_identical_QMARK_;
var expr__23530 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__23532 = cljs.core.cst$kw$params;
var G__23533 = expr__23530;
return (pred__23529.cljs$core$IFn$_invoke$arity$2 ? pred__23529.cljs$core$IFn$_invoke$arity$2(G__23532,G__23533) : pred__23529.call(null,G__23532,G__23533));
})())){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(G__23525,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__23525),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__23525){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,G__23525,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params], null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$__GT_RedirectSideffect(params){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(params,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$map__GT_RedirectSideffect(G__23527){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__23527),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23527,cljs.core.cst$kw$params),null));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k23536,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__23538 = (((k23536 instanceof cljs.core.Keyword))?k23536.fqn:null);
switch (G__23538) {
case "sideffects":
return self__.sideffects;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23536,else__10665__auto__);

}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#keechma.toolbox.pipeline.core.DoSideffect{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sideffects,self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IIterable$ = true;

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23535){
var self__ = this;
var G__23535__$1 = this;
return (new cljs.core.RecordIter((0),G__23535__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sideffects], null),cljs.core._iterator(self__.__extmap)));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
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

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
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

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = true;

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,app_db_atom){
var self__ = this;
var this$__$1 = this;
var sideffects__$1 = cljs.core.cst$kw$sideffects.cljs$core$IFn$_invoke$arity$1(this$__$1);
var seq__23539 = cljs.core.seq(sideffects__$1);
var chunk__23540 = null;
var count__23541 = (0);
var i__23542 = (0);
while(true){
if((i__23542 < count__23541)){
var s = chunk__23540.cljs$core$IIndexed$_nth$arity$2(null,i__23542);
keechma.toolbox.pipeline.core.call_BANG_(s,controller,app_db_atom);

var G__23549 = seq__23539;
var G__23550 = chunk__23540;
var G__23551 = count__23541;
var G__23552 = (i__23542 + (1));
seq__23539 = G__23549;
chunk__23540 = G__23550;
count__23541 = G__23551;
i__23542 = G__23552;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__23539);
if(temp__6753__auto__){
var seq__23539__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23539__$1)){
var c__10895__auto__ = cljs.core.chunk_first(seq__23539__$1);
var G__23553 = cljs.core.chunk_rest(seq__23539__$1);
var G__23554 = c__10895__auto__;
var G__23555 = cljs.core.count(c__10895__auto__);
var G__23556 = (0);
seq__23539 = G__23553;
chunk__23540 = G__23554;
count__23541 = G__23555;
i__23542 = G__23556;
continue;
} else {
var s = cljs.core.first(seq__23539__$1);
keechma.toolbox.pipeline.core.call_BANG_(s,controller,app_db_atom);

var G__23557 = cljs.core.next(seq__23539__$1);
var G__23558 = null;
var G__23559 = (0);
var G__23560 = (0);
seq__23539 = G__23557;
chunk__23540 = G__23558;
count__23541 = G__23559;
i__23542 = G__23560;
continue;
}
} else {
return null;
}
}
break;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sideffects,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__23535){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__23543 = cljs.core.keyword_identical_QMARK_;
var expr__23544 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__23546 = cljs.core.cst$kw$sideffects;
var G__23547 = expr__23544;
return (pred__23543.cljs$core$IFn$_invoke$arity$2 ? pred__23543.cljs$core$IFn$_invoke$arity$2(G__23546,G__23547) : pred__23543.call(null,G__23546,G__23547));
})())){
return (new keechma.toolbox.pipeline.core.DoSideffect(G__23535,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__23535),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sideffects,self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__23535){
var self__ = this;
var this__10661__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,G__23535,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

keechma.toolbox.pipeline.core.DoSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$sideffects], null);
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.__GT_DoSideffect = (function keechma$toolbox$pipeline$core$__GT_DoSideffect(sideffects){
return (new keechma.toolbox.pipeline.core.DoSideffect(sideffects,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_DoSideffect = (function keechma$toolbox$pipeline$core$map__GT_DoSideffect(G__23537){
return (new keechma.toolbox.pipeline.core.DoSideffect(cljs.core.cst$kw$sideffects.cljs$core$IFn$_invoke$arity$1(G__23537),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23537,cljs.core.cst$kw$sideffects),null));
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
var args23561 = [];
var len__11171__auto___23564 = arguments.length;
var i__11172__auto___23565 = (0);
while(true){
if((i__11172__auto___23565 < len__11171__auto___23564)){
args23561.push((arguments[i__11172__auto___23565]));

var G__23566 = (i__11172__auto___23565 + (1));
i__11172__auto___23565 = G__23566;
continue;
} else {
}
break;
}

var G__23563 = args23561.length;
switch (G__23563) {
case 1:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23561.length)].join('')));

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
var args__11178__auto__ = [];
var len__11171__auto___23569 = arguments.length;
var i__11172__auto___23570 = (0);
while(true){
if((i__11172__auto___23570 < len__11171__auto___23569)){
args__11178__auto__.push((arguments[i__11172__auto___23570]));

var G__23571 = (i__11172__auto___23570 + (1));
i__11172__auto___23570 = G__23571;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((0) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((0)),(0),null)):null);
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__11179__auto__);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sideffects){
return keechma.toolbox.pipeline.core.__GT_DoSideffect(sideffects);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$maxFixedArity = (0);

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$applyTo = (function (seq23568){
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23568));
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
keechma.toolbox.pipeline.core.action_ret_val = (function keechma$toolbox$pipeline$core$action_ret_val(action,ctrl,app_db_atom,value,error){
try{var ret_val = (((error == null))?(function (){var G__23579 = value;
var G__23580 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(G__23579,G__23580) : action.call(null,G__23579,G__23580));
})():(function (){var G__23581 = value;
var G__23582 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db_atom) : cljs.core.deref.call(null,app_db_atom));
var G__23583 = error;
return (action.cljs$core$IFn$_invoke$arity$3 ? action.cljs$core$IFn$_invoke$arity$3(G__23581,G__23582,G__23583) : action.call(null,G__23581,G__23582,G__23583));
})());
if(cljs.core.truth_(cljs.core.cst$kw$pipeline_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ret_val)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(ret_val.cljs$core$IFn$_invoke$arity$3 ? ret_val.cljs$core$IFn$_invoke$arity$3(ctrl,app_db_atom,value) : ret_val.call(null,ctrl,app_db_atom,value)),cljs.core.cst$kw$promise_QMARK_,true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,ret_val,cljs.core.cst$kw$promise_QMARK_,keechma.toolbox.pipeline.core.is_promise_QMARK_(ret_val)], null);
}
}catch (e23578){var err = e23578;
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
var and__9980__auto__ = promesa.core.pending_QMARK_(promise);
if(cljs.core.truth_(and__9980__auto__)){
return cljs.core.fn_QMARK_(promise.cancel);
} else {
return and__9980__auto__;
}
});
keechma.toolbox.pipeline.core.run_pipeline = (function keechma$toolbox$pipeline$core$run_pipeline(pipeline,ctrl,app_db_atom,value){
var map__23833 = pipeline;
var map__23833__$1 = ((((!((map__23833 == null)))?((((map__23833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23833):map__23833);
var begin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23833__$1,cljs.core.cst$kw$begin);
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23833__$1,cljs.core.cst$kw$rescue);
var current_promise = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return promesa.core.promise(((function (map__23833,map__23833__$1,begin,rescue,current_promise){
return (function (resolve,reject,on_cancel){
if(cljs.core.fn_QMARK_(on_cancel)){
var G__23835_24082 = ((function (map__23833,map__23833__$1,begin,rescue,current_promise){
return (function (){
var c = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_promise) : cljs.core.deref.call(null,current_promise));
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_(c))){
return c.cancel();
} else {
return null;
}
});})(map__23833,map__23833__$1,begin,rescue,current_promise))
;
(on_cancel.cljs$core$IFn$_invoke$arity$1 ? on_cancel.cljs$core$IFn$_invoke$arity$1(G__23835_24082) : on_cancel.call(null,G__23835_24082));
} else {
}

var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,map__23833,map__23833__$1,begin,rescue,current_promise){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,map__23833,map__23833__$1,begin,rescue,current_promise){
return (function (state_23973){
var state_val_23974 = (state_23973[(1)]);
if((state_val_23974 === (62))){
var inst_23838 = (state_23973[(7)]);
var state_23973__$1 = state_23973;
var statearr_23975_24083 = state_23973__$1;
(statearr_23975_24083[(2)] = inst_23838);

(statearr_23975_24083[(1)] = (64));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (7))){
var inst_23848 = (state_23973[(8)]);
var inst_23853 = inst_23848.cljs$lang$protocol_mask$partition0$;
var inst_23854 = (inst_23853 & (64));
var inst_23855 = inst_23848.cljs$core$ISeq$;
var inst_23856 = (inst_23854) || (inst_23855);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23856)){
var statearr_23976_24084 = state_23973__$1;
(statearr_23976_24084[(1)] = (10));

} else {
var statearr_23977_24085 = state_23973__$1;
(statearr_23977_24085[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (59))){
var inst_23904 = (state_23973[(9)]);
var inst_23837 = (state_23973[(10)]);
var inst_23952 = cljs.core.rest(inst_23837);
var inst_23953 = (inst_23904 == null);
var state_23973__$1 = (function (){var statearr_23978 = state_23973;
(statearr_23978[(11)] = inst_23952);

return statearr_23978;
})();
if(cljs.core.truth_(inst_23953)){
var statearr_23979_24086 = state_23973__$1;
(statearr_23979_24086[(1)] = (62));

} else {
var statearr_23980_24087 = state_23973__$1;
(statearr_23980_24087[(1)] = (63));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (20))){
var inst_23869 = (state_23973[(12)]);
var inst_23894 = cljs.core.native_satisfies_QMARK_(keechma.toolbox.pipeline.core.ISideffect,inst_23869);
var state_23973__$1 = state_23973;
var statearr_23981_24088 = state_23973__$1;
(statearr_23981_24088[(2)] = inst_23894);

(statearr_23981_24088[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (58))){
var inst_23963 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_23982_24089 = state_23973__$1;
(statearr_23982_24089[(2)] = inst_23963);

(statearr_23982_24089[(1)] = (55));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (60))){
var state_23973__$1 = state_23973;
var statearr_23983_24090 = state_23973__$1;
(statearr_23983_24090[(2)] = null);

(statearr_23983_24090[(1)] = (61));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (27))){
var inst_23890 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_23984_24091 = state_23973__$1;
(statearr_23984_24091[(2)] = inst_23890);

(statearr_23984_24091[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (1))){
var inst_23836 = cljs.core.cst$kw$begin;
var inst_23837 = begin;
var inst_23838 = value;
var inst_23839 = null;
var state_23973__$1 = (function (){var statearr_23985 = state_23973;
(statearr_23985[(13)] = inst_23839);

(statearr_23985[(7)] = inst_23838);

(statearr_23985[(14)] = inst_23836);

(statearr_23985[(10)] = inst_23837);

return statearr_23985;
})();
var statearr_23986_24092 = state_23973__$1;
(statearr_23986_24092[(2)] = null);

(statearr_23986_24092[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (24))){
var inst_23892 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_23987_24093 = state_23973__$1;
(statearr_23987_24093[(2)] = inst_23892);

(statearr_23987_24093[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (55))){
var inst_23965 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_23988_24094 = state_23973__$1;
(statearr_23988_24094[(2)] = inst_23965);

(statearr_23988_24094[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (39))){
var state_23973__$1 = state_23973;
var statearr_23989_24095 = state_23973__$1;
(statearr_23989_24095[(2)] = null);

(statearr_23989_24095[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (46))){
var inst_23967 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_23990_24096 = state_23973__$1;
(statearr_23990_24096[(2)] = inst_23967);

(statearr_23990_24096[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (4))){
var inst_23838 = (state_23973[(7)]);
var inst_23844 = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(inst_23838) : resolve.call(null,inst_23838));
var state_23973__$1 = state_23973;
var statearr_23991_24097 = state_23973__$1;
(statearr_23991_24097[(2)] = inst_23844);

(statearr_23991_24097[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (54))){
var inst_23896 = (state_23973[(15)]);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23896)){
var statearr_23992_24098 = state_23973__$1;
(statearr_23992_24098[(1)] = (56));

} else {
var statearr_23993_24099 = state_23973__$1;
(statearr_23993_24099[(1)] = (57));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (15))){
var inst_23870 = (state_23973[(16)]);
var inst_23868 = (state_23973[(2)]);
var inst_23869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868,cljs.core.cst$kw$value);
var inst_23870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868,cljs.core.cst$kw$promise_QMARK_);
var state_23973__$1 = (function (){var statearr_23994 = state_23973;
(statearr_23994[(12)] = inst_23869);

(statearr_23994[(16)] = inst_23870__$1);

return statearr_23994;
})();
if(cljs.core.truth_(inst_23870__$1)){
var statearr_23995_24100 = state_23973__$1;
(statearr_23995_24100[(1)] = (16));

} else {
var statearr_23996_24101 = state_23973__$1;
(statearr_23996_24101[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (48))){
var inst_23904 = (state_23973[(9)]);
var inst_23935 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_23904) : reject.call(null,inst_23904));
var state_23973__$1 = state_23973;
var statearr_23997_24102 = state_23973__$1;
(statearr_23997_24102[(2)] = inst_23935);

(statearr_23997_24102[(1)] = (49));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (50))){
var inst_23836 = (state_23973[(14)]);
var inst_23940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23836,cljs.core.cst$kw$rescue);
var state_23973__$1 = state_23973;
var statearr_23998_24103 = state_23973__$1;
(statearr_23998_24103[(2)] = inst_23940);

(statearr_23998_24103[(1)] = (52));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (21))){
var inst_23870 = (state_23973[(16)]);
var inst_23896 = (state_23973[(2)]);
var state_23973__$1 = (function (){var statearr_23999 = state_23973;
(statearr_23999[(15)] = inst_23896);

return statearr_23999;
})();
if(cljs.core.truth_(inst_23870)){
var statearr_24000_24104 = state_23973__$1;
(statearr_24000_24104[(1)] = (28));

} else {
var statearr_24001_24105 = state_23973__$1;
(statearr_24001_24105[(1)] = (29));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (31))){
var inst_23900 = (state_23973[(2)]);
var inst_23901 = keechma.toolbox.pipeline.core.extract_nil(inst_23900);
var state_23973__$1 = state_23973;
var statearr_24002_24106 = state_23973__$1;
(statearr_24002_24106[(2)] = inst_23901);

(statearr_24002_24106[(1)] = (30));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (32))){
var inst_23896 = (state_23973[(15)]);
var state_23973__$1 = state_23973;
var statearr_24006_24107 = state_23973__$1;
(statearr_24006_24107[(2)] = inst_23896);

(statearr_24006_24107[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (40))){
var inst_23905 = (state_23973[(17)]);
var inst_23924 = (state_23973[(2)]);
var state_23973__$1 = (function (){var statearr_24007 = state_23973;
(statearr_24007[(18)] = inst_23924);

return statearr_24007;
})();
if(cljs.core.truth_(inst_23905)){
var statearr_24008_24108 = state_23973__$1;
(statearr_24008_24108[(1)] = (41));

} else {
var statearr_24009_24109 = state_23973__$1;
(statearr_24009_24109[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (56))){
var inst_23839 = (state_23973[(13)]);
var inst_23838 = (state_23973[(7)]);
var inst_23836 = (state_23973[(14)]);
var inst_23837 = (state_23973[(10)]);
var inst_23948 = cljs.core.rest(inst_23837);
var tmp24003 = inst_23839;
var tmp24004 = inst_23838;
var tmp24005 = inst_23836;
var inst_23836__$1 = tmp24005;
var inst_23837__$1 = inst_23948;
var inst_23838__$1 = tmp24004;
var inst_23839__$1 = tmp24003;
var state_23973__$1 = (function (){var statearr_24010 = state_23973;
(statearr_24010[(13)] = inst_23839__$1);

(statearr_24010[(7)] = inst_23838__$1);

(statearr_24010[(14)] = inst_23836__$1);

(statearr_24010[(10)] = inst_23837__$1);

return statearr_24010;
})();
var statearr_24011_24110 = state_23973__$1;
(statearr_24011_24110[(2)] = null);

(statearr_24011_24110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (33))){
var inst_23870 = (state_23973[(16)]);
var state_23973__$1 = state_23973;
var statearr_24012_24111 = state_23973__$1;
(statearr_24012_24111[(2)] = inst_23870);

(statearr_24012_24111[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (13))){
var inst_23848 = (state_23973[(8)]);
var inst_23865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23848);
var state_23973__$1 = state_23973;
var statearr_24013_24112 = state_23973__$1;
(statearr_24013_24112[(2)] = inst_23865);

(statearr_24013_24112[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (22))){
var state_23973__$1 = state_23973;
var statearr_24014_24113 = state_23973__$1;
(statearr_24014_24113[(2)] = true);

(statearr_24014_24113[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (36))){
var state_23973__$1 = state_23973;
var statearr_24015_24114 = state_23973__$1;
(statearr_24015_24114[(2)] = null);

(statearr_24015_24114[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (41))){
var inst_23836 = (state_23973[(14)]);
var inst_23926 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23836,cljs.core.cst$kw$begin);
var state_23973__$1 = state_23973;
var statearr_24016_24115 = state_23973__$1;
(statearr_24016_24115[(2)] = inst_23926);

(statearr_24016_24115[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (43))){
var inst_23929 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23929)){
var statearr_24017_24116 = state_23973__$1;
(statearr_24017_24116[(1)] = (44));

} else {
var statearr_24018_24117 = state_23973__$1;
(statearr_24018_24117[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (61))){
var inst_23961 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_24019_24118 = state_23973__$1;
(statearr_24019_24118[(2)] = inst_23961);

(statearr_24019_24118[(1)] = (58));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (29))){
var inst_23869 = (state_23973[(12)]);
var state_23973__$1 = state_23973;
var statearr_24020_24119 = state_23973__$1;
(statearr_24020_24119[(2)] = inst_23869);

(statearr_24020_24119[(1)] = (30));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (44))){
var inst_23931 = cljs.core.seq(rescue);
var state_23973__$1 = state_23973;
if(inst_23931){
var statearr_24021_24120 = state_23973__$1;
(statearr_24021_24120[(1)] = (47));

} else {
var statearr_24022_24121 = state_23973__$1;
(statearr_24022_24121[(1)] = (48));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (6))){
var inst_23969 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_24025_24122 = state_23973__$1;
(statearr_24025_24122[(2)] = inst_23969);

(statearr_24025_24122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (28))){
var inst_23869 = (state_23973[(12)]);
var inst_23898 = keechma.toolbox.pipeline.core.promise__GT_chan(inst_23869);
var state_23973__$1 = state_23973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23973__$1,(31),inst_23898);
} else {
if((state_val_23974 === (64))){
var inst_23839 = (state_23973[(13)]);
var inst_23836 = (state_23973[(14)]);
var inst_23952 = (state_23973[(11)]);
var inst_23957 = (state_23973[(2)]);
var tmp24023 = inst_23839;
var tmp24024 = inst_23836;
var inst_23836__$1 = tmp24024;
var inst_23837 = inst_23952;
var inst_23838 = inst_23957;
var inst_23839__$1 = tmp24023;
var state_23973__$1 = (function (){var statearr_24026 = state_23973;
(statearr_24026[(13)] = inst_23839__$1);

(statearr_24026[(7)] = inst_23838);

(statearr_24026[(14)] = inst_23836__$1);

(statearr_24026[(10)] = inst_23837);

return statearr_24026;
})();
var statearr_24027_24123 = state_23973__$1;
(statearr_24027_24123[(2)] = null);

(statearr_24027_24123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (51))){
var inst_23905 = (state_23973[(17)]);
var state_23973__$1 = state_23973;
var statearr_24028_24124 = state_23973__$1;
(statearr_24028_24124[(2)] = inst_23905);

(statearr_24028_24124[(1)] = (52));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (25))){
var inst_23869 = (state_23973[(12)]);
var inst_23887 = cljs.core.native_satisfies_QMARK_(keechma.toolbox.pipeline.core.ISideffect,inst_23869);
var state_23973__$1 = state_23973;
var statearr_24029_24125 = state_23973__$1;
(statearr_24029_24125[(2)] = inst_23887);

(statearr_24029_24125[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (34))){
var inst_23909 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23909)){
var statearr_24030_24126 = state_23973__$1;
(statearr_24030_24126[(1)] = (35));

} else {
var statearr_24031_24127 = state_23973__$1;
(statearr_24031_24127[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (17))){
var state_23973__$1 = state_23973;
var statearr_24032_24128 = state_23973__$1;
(statearr_24032_24128[(2)] = null);

(statearr_24032_24128[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (3))){
var inst_23971 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23973__$1,inst_23971);
} else {
if((state_val_23974 === (12))){
var inst_23860 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_24033_24129 = state_23973__$1;
(statearr_24033_24129[(2)] = inst_23860);

(statearr_24033_24129[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (2))){
var inst_23837 = (state_23973[(10)]);
var inst_23841 = cljs.core.seq(inst_23837);
var inst_23842 = cljs.core.not(inst_23841);
var state_23973__$1 = state_23973;
if(inst_23842){
var statearr_24035_24130 = state_23973__$1;
(statearr_24035_24130[(1)] = (4));

} else {
var statearr_24036_24131 = state_23973__$1;
(statearr_24036_24131[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (23))){
var inst_23869 = (state_23973[(12)]);
var inst_23884 = inst_23869.cljs$lang$protocol_mask$partition$;
var inst_23885 = (!inst_23884);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23885)){
var statearr_24037_24132 = state_23973__$1;
(statearr_24037_24132[(1)] = (25));

} else {
var statearr_24038_24133 = state_23973__$1;
(statearr_24038_24133[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (47))){
var inst_23904 = (state_23973[(9)]);
var inst_23838 = (state_23973[(7)]);
var tmp24034 = inst_23838;
var inst_23836 = cljs.core.cst$kw$rescue;
var inst_23837 = rescue;
var inst_23838__$1 = tmp24034;
var inst_23839 = inst_23904;
var state_23973__$1 = (function (){var statearr_24039 = state_23973;
(statearr_24039[(13)] = inst_23839);

(statearr_24039[(7)] = inst_23838__$1);

(statearr_24039[(14)] = inst_23836);

(statearr_24039[(10)] = inst_23837);

return statearr_24039;
})();
var statearr_24040_24134 = state_23973__$1;
(statearr_24040_24134[(2)] = null);

(statearr_24040_24134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (35))){
var inst_23911 = cljs.core.cst$kw$async_DASH_sideffect.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.pipeline.core.pipeline_errors);
var inst_23912 = [cljs.core.cst$kw$type];
var inst_23913 = [cljs.core.cst$kw$keechma$toolbox$pipeline$core_SLASH_pipeline_DASH_error];
var inst_23914 = cljs.core.PersistentHashMap.fromArrays(inst_23912,inst_23913);
var inst_23915 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_23911,inst_23914);
var inst_23916 = (function(){throw inst_23915})();
var state_23973__$1 = state_23973;
var statearr_24041_24135 = state_23973__$1;
(statearr_24041_24135[(2)] = inst_23916);

(statearr_24041_24135[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (19))){
var inst_23869 = (state_23973[(12)]);
var inst_23880 = inst_23869.keechma$toolbox$pipeline$core$ISideffect$;
var inst_23881 = (false) || (inst_23880);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23881)){
var statearr_24042_24136 = state_23973__$1;
(statearr_24042_24136[(1)] = (22));

} else {
var statearr_24043_24137 = state_23973__$1;
(statearr_24043_24137[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (57))){
var state_23973__$1 = state_23973;
var statearr_24044_24138 = state_23973__$1;
(statearr_24044_24138[(1)] = (59));



return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (11))){
var state_23973__$1 = state_23973;
var statearr_24046_24139 = state_23973__$1;
(statearr_24046_24139[(2)] = false);

(statearr_24046_24139[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (9))){
var inst_23863 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23863)){
var statearr_24047_24140 = state_23973__$1;
(statearr_24047_24140[(1)] = (13));

} else {
var statearr_24048_24141 = state_23973__$1;
(statearr_24048_24141[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (5))){
var inst_23839 = (state_23973[(13)]);
var inst_23838 = (state_23973[(7)]);
var inst_23848 = (state_23973[(8)]);
var inst_23837 = (state_23973[(10)]);
var inst_23847 = cljs.core.first(inst_23837);
var inst_23848__$1 = keechma.toolbox.pipeline.core.action_ret_val(inst_23847,ctrl,app_db_atom,inst_23838,inst_23839);
var inst_23850 = (inst_23848__$1 == null);
var inst_23851 = cljs.core.not(inst_23850);
var state_23973__$1 = (function (){var statearr_24049 = state_23973;
(statearr_24049[(8)] = inst_23848__$1);

return statearr_24049;
})();
if(inst_23851){
var statearr_24050_24142 = state_23973__$1;
(statearr_24050_24142[(1)] = (7));

} else {
var statearr_24051_24143 = state_23973__$1;
(statearr_24051_24143[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (14))){
var inst_23848 = (state_23973[(8)]);
var state_23973__$1 = state_23973;
var statearr_24052_24144 = state_23973__$1;
(statearr_24052_24144[(2)] = inst_23848);

(statearr_24052_24144[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (45))){
var inst_23905 = (state_23973[(17)]);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23905)){
var statearr_24053_24145 = state_23973__$1;
(statearr_24053_24145[(1)] = (50));

} else {
var statearr_24054_24146 = state_23973__$1;
(statearr_24054_24146[(1)] = (51));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (53))){
var inst_23839 = (state_23973[(13)]);
var inst_23945 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_23839) : reject.call(null,inst_23839));
var state_23973__$1 = state_23973;
var statearr_24055_24147 = state_23973__$1;
(statearr_24055_24147[(2)] = inst_23945);

(statearr_24055_24147[(1)] = (55));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (26))){
var state_23973__$1 = state_23973;
var statearr_24056_24148 = state_23973__$1;
(statearr_24056_24148[(2)] = false);

(statearr_24056_24148[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (16))){
var inst_23869 = (state_23973[(12)]);
var inst_23872 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(current_promise,inst_23869) : cljs.core.reset_BANG_.call(null,current_promise,inst_23869));
var state_23973__$1 = state_23973;
var statearr_24057_24149 = state_23973__$1;
(statearr_24057_24149[(2)] = inst_23872);

(statearr_24057_24149[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (38))){
var inst_23904 = (state_23973[(9)]);
var inst_23921 = keechma.toolbox.pipeline.core.call_BANG_(inst_23904,ctrl,app_db_atom);
var state_23973__$1 = state_23973;
var statearr_24058_24150 = state_23973__$1;
(statearr_24058_24150[(2)] = inst_23921);

(statearr_24058_24150[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (30))){
var inst_23904 = (state_23973[(9)]);
var inst_23870 = (state_23973[(16)]);
var inst_23904__$1 = (state_23973[(2)]);
var inst_23905 = (inst_23904__$1 instanceof keechma.toolbox.pipeline.core.Error);
var state_23973__$1 = (function (){var statearr_24059 = state_23973;
(statearr_24059[(9)] = inst_23904__$1);

(statearr_24059[(17)] = inst_23905);

return statearr_24059;
})();
if(cljs.core.truth_(inst_23870)){
var statearr_24060_24151 = state_23973__$1;
(statearr_24060_24151[(1)] = (32));

} else {
var statearr_24061_24152 = state_23973__$1;
(statearr_24061_24152[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (10))){
var state_23973__$1 = state_23973;
var statearr_24062_24153 = state_23973__$1;
(statearr_24062_24153[(2)] = true);

(statearr_24062_24153[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (18))){
var inst_23869 = (state_23973[(12)]);
var inst_23875 = (state_23973[(2)]);
var inst_23877 = (inst_23869 == null);
var inst_23878 = cljs.core.not(inst_23877);
var state_23973__$1 = (function (){var statearr_24063 = state_23973;
(statearr_24063[(19)] = inst_23875);

return statearr_24063;
})();
if(inst_23878){
var statearr_24064_24154 = state_23973__$1;
(statearr_24064_24154[(1)] = (19));

} else {
var statearr_24065_24155 = state_23973__$1;
(statearr_24065_24155[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (52))){
var inst_23943 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
if(cljs.core.truth_(inst_23943)){
var statearr_24066_24156 = state_23973__$1;
(statearr_24066_24156[(1)] = (53));

} else {
var statearr_24067_24157 = state_23973__$1;
(statearr_24067_24157[(1)] = (54));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (42))){
var inst_23905 = (state_23973[(17)]);
var state_23973__$1 = state_23973;
var statearr_24068_24158 = state_23973__$1;
(statearr_24068_24158[(2)] = inst_23905);

(statearr_24068_24158[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (37))){
var inst_23896 = (state_23973[(15)]);
var inst_23919 = (state_23973[(2)]);
var state_23973__$1 = (function (){var statearr_24069 = state_23973;
(statearr_24069[(20)] = inst_23919);

return statearr_24069;
})();
if(cljs.core.truth_(inst_23896)){
var statearr_24070_24159 = state_23973__$1;
(statearr_24070_24159[(1)] = (38));

} else {
var statearr_24071_24160 = state_23973__$1;
(statearr_24071_24160[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (63))){
var inst_23904 = (state_23973[(9)]);
var state_23973__$1 = state_23973;
var statearr_24072_24161 = state_23973__$1;
(statearr_24072_24161[(2)] = inst_23904);

(statearr_24072_24161[(1)] = (64));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (8))){
var state_23973__$1 = state_23973;
var statearr_24073_24162 = state_23973__$1;
(statearr_24073_24162[(2)] = false);

(statearr_24073_24162[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23974 === (49))){
var inst_23937 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
var statearr_24074_24163 = state_23973__$1;
(statearr_24074_24163[(2)] = inst_23937);

(statearr_24074_24163[(1)] = (46));


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
});})(c__17677__auto__,map__23833,map__23833__$1,begin,rescue,current_promise))
;
return ((function (switch__17551__auto__,c__17677__auto__,map__23833,map__23833__$1,begin,rescue,current_promise){
return (function() {
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto__ = null;
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto____0 = (function (){
var statearr_24078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24078[(0)] = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto__);

(statearr_24078[(1)] = (1));

return statearr_24078;
});
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto____1 = (function (state_23973){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_23973);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e24079){if((e24079 instanceof Object)){
var ex__17555__auto__ = e24079;
var statearr_24080_24164 = state_23973;
(statearr_24080_24164[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23973);

return cljs.core.cst$kw$recur;
} else {
throw e24079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__24165 = state_23973;
state_23973 = G__24165;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto__ = function(state_23973){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto____1.call(this,state_23973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto____0;
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto____1;
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,map__23833,map__23833__$1,begin,rescue,current_promise))
})();
var state__17679__auto__ = (function (){var statearr_24081 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_24081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_24081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,map__23833,map__23833__$1,begin,rescue,current_promise))
);

return c__17677__auto__;
});})(map__23833,map__23833__$1,begin,rescue,current_promise))
);
});
keechma.toolbox.pipeline.core.make_pipeline = (function keechma$toolbox$pipeline$core$make_pipeline(pipeline){
return cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.pipeline.core.run_pipeline,pipeline),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pipeline_QMARK_,true], null));
});
keechma.toolbox.pipeline.core.exclusive = (function keechma$toolbox$pipeline$core$exclusive(pipeline){
var current = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return ((function (current){
return (function (ctrl,app_db_atom,value){
var temp__6753__auto___24170 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current));
if(cljs.core.truth_(temp__6753__auto___24170)){
var c_24171 = temp__6753__auto___24170;
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_(c_24171))){
c_24171.cancel();
} else {
}
} else {
}

var G__24168 = current;
var G__24169 = (pipeline.cljs$core$IFn$_invoke$arity$3 ? pipeline.cljs$core$IFn$_invoke$arity$3(ctrl,app_db_atom,value) : pipeline.call(null,ctrl,app_db_atom,value));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24168,G__24169) : cljs.core.reset_BANG_.call(null,G__24168,G__24169));
});
;})(current))
});
