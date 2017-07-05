// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.protocols');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_(false);
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler22426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {promesa.protocols.ICancellable}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler22426 = (function (scheduled_task,cur,done_QMARK_,cancelled,meta22427){
this.scheduled_task = scheduled_task;
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta22427 = meta22427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
promesa.impl.scheduler.t_promesa$impl$scheduler22426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_22428,meta22427__$1){
var self__ = this;
var _22428__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler22426(self__.scheduled_task,self__.cur,self__.done_QMARK_,self__.cancelled,meta22427__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_22428){
var self__ = this;
var _22428__$1 = this;
return self__.meta22427;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.done_QMARK_) : cljs.core.deref.call(null,self__.done_QMARK_));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.prototype.promesa$protocols$ICancellable$ = true;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cancelled) : cljs.core.deref.call(null,self__.cancelled));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.prototype.promesa$protocols$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cancelled) : cljs.core.deref.call(null,self__.cancelled)))){
return null;
} else {
cljs.core.vreset_BANG_(self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$scheduled_DASH_task,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cur,cljs.core.cst$sym$done_QMARK_], null)))], null)),cljs.core.cst$sym$cur,cljs.core.cst$sym$done_QMARK_,cljs.core.cst$sym$cancelled,cljs.core.cst$sym$meta22427], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler22426.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler22426";

promesa.impl.scheduler.t_promesa$impl$scheduler22426.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler22426");
});})(cancelled))
;

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler22426 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler22426(scheduled_task__$1,cur__$1,done_QMARK___$1,cancelled__$1,meta22427){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler22426(scheduled_task__$1,cur__$1,done_QMARK___$1,cancelled__$1,meta22427));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler22426(promesa$impl$scheduler$scheduled_task,cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler22432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler22432 = (function (scheduler,meta22433){
this.scheduler = scheduler;
this.meta22433 = meta22433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
promesa.impl.scheduler.t_promesa$impl$scheduler22432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22434,meta22433__$1){
var self__ = this;
var _22434__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler22432(self__.scheduler,meta22433__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler22432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22434){
var self__ = this;
var _22434__$1 = this;
return self__.meta22433;
});

promesa.impl.scheduler.t_promesa$impl$scheduler22432.prototype.promesa$protocols$IScheduler$ = true;

promesa.impl.scheduler.t_promesa$impl$scheduler22432.prototype.promesa$protocols$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_(false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {cljs.core.vreset_BANG_(done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task(cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler22432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$scheduler,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$meta22433], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler22432.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler22432.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler22432";

promesa.impl.scheduler.t_promesa$impl$scheduler22432.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler22432");
});

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler22432 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler22432(scheduler__$1,meta22433){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler22432(scheduler__$1,meta22433));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler22432(promesa$impl$scheduler$scheduler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler();
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.protocols._schedule((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(promesa.impl.scheduler._PLUS_scheduler_PLUS_) : cljs.core.deref.call(null,promesa.impl.scheduler._PLUS_scheduler_PLUS_)),ms,func);
});
