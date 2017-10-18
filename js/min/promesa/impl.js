// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('promesa.protocols');
promesa.impl.Promise = Promise.noConflict();
promesa.impl.Promise.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__22697_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__22697_SHARP_) : cb.call(null,p1__22697_SHARP_));
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__22698_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__22698_SHARP_) : cb.call(null,p1__22698_SHARP_));
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.caught(((function (it__$1){
return (function (p1__22699_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__22699_SHARP_) : cb.call(null,p1__22699_SHARP_));
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IState$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
});
goog.object.set(promesa.protocols.IPromise,"_",true);

var G__22700_22709 = promesa.protocols._map;
var G__22701_22710 = "_";
var G__22702_22711 = ((function (G__22700_22709,G__22701_22710){
return (function (it,cb){
return promesa.protocols._map((promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.resolved.call(null,it)),cb);
});})(G__22700_22709,G__22701_22710))
;
goog.object.set(G__22700_22709,G__22701_22710,G__22702_22711);

var G__22703_22712 = promesa.protocols._bind;
var G__22704_22713 = "_";
var G__22705_22714 = ((function (G__22703_22712,G__22704_22713){
return (function (it,cb){
return promesa.protocols._bind((promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.resolved.call(null,it)),cb);
});})(G__22703_22712,G__22704_22713))
;
goog.object.set(G__22703_22712,G__22704_22713,G__22705_22714);

var G__22706_22715 = promesa.protocols._catch;
var G__22707_22716 = "_";
var G__22708_22717 = ((function (G__22706_22715,G__22707_22716){
return (function (it,cb){
return promesa.protocols._catch((promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.resolved.call(null,it)),cb);
});})(G__22706_22715,G__22707_22716))
;
goog.object.set(G__22706_22715,G__22707_22716,G__22708_22717);
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl.Promise.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl.Promise.reject(v);
});
goog.object.set(promesa.protocols.IPromiseFactory,"function",true);

var G__22720_22738 = promesa.protocols._promise;
var G__22721_22739 = "function";
var G__22722_22740 = ((function (G__22720_22738,G__22721_22739){
return (function (func){
return (new promesa.impl.Promise(func));
});})(G__22720_22738,G__22721_22739))
;
goog.object.set(G__22720_22738,G__22721_22739,G__22722_22740);

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
});

goog.object.set(promesa.protocols.IPromiseFactory,"object",true);

var G__22723_22741 = promesa.protocols._promise;
var G__22724_22742 = "object";
var G__22725_22743 = ((function (G__22723_22741,G__22724_22742){
return (function (v){
return promesa.impl.resolved(v);
});})(G__22723_22741,G__22724_22742))
;
goog.object.set(G__22723_22741,G__22724_22742,G__22725_22743);

goog.object.set(promesa.protocols.IPromiseFactory,"number",true);

var G__22726_22744 = promesa.protocols._promise;
var G__22727_22745 = "number";
var G__22728_22746 = ((function (G__22726_22744,G__22727_22745){
return (function (v){
return promesa.impl.resolved(v);
});})(G__22726_22744,G__22727_22745))
;
goog.object.set(G__22726_22744,G__22727_22745,G__22728_22746);

goog.object.set(promesa.protocols.IPromiseFactory,"boolean",true);

var G__22729_22747 = promesa.protocols._promise;
var G__22730_22748 = "boolean";
var G__22731_22749 = ((function (G__22729_22747,G__22730_22748){
return (function (v){
return promesa.impl.resolved(v);
});})(G__22729_22747,G__22730_22748))
;
goog.object.set(G__22729_22747,G__22730_22748,G__22731_22749);

goog.object.set(promesa.protocols.IPromiseFactory,"string",true);

var G__22732_22750 = promesa.protocols._promise;
var G__22733_22751 = "string";
var G__22734_22752 = ((function (G__22732_22750,G__22733_22751){
return (function (v){
return promesa.impl.resolved(v);
});})(G__22732_22750,G__22733_22751))
;
goog.object.set(G__22732_22750,G__22733_22751,G__22734_22752);

goog.object.set(promesa.protocols.IPromiseFactory,"null",true);

var G__22735_22753 = promesa.protocols._promise;
var G__22736_22754 = "null";
var G__22737_22755 = ((function (G__22735_22753,G__22736_22754){
return (function (v){
return promesa.impl.resolved(v);
});})(G__22735_22753,G__22736_22754))
;
goog.object.set(G__22735_22753,G__22736_22754,G__22737_22755);
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#<Promise["),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(promesa.protocols._pending_QMARK_(p))?"~":(cljs.core.truth_(promesa.protocols._rejected_QMARK_(p))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("error="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract(p))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("value="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract(p))].join('')
))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]>")].join('');
});
promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
});
