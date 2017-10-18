// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__19253 = arguments.length;
switch (G__19253) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19254 = (function (f,blockable,meta19255){
this.f = f;
this.blockable = blockable;
this.meta19255 = meta19255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19256,meta19255__$1){
var self__ = this;
var _19256__$1 = this;
return (new cljs.core.async.t_cljs$core$async19254(self__.f,self__.blockable,meta19255__$1));
});

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19256){
var self__ = this;
var _19256__$1 = this;
return self__.meta19255;
});

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta19255], null);
});

cljs.core.async.t_cljs$core$async19254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19254";

cljs.core.async.t_cljs$core$async19254.cljs$lang$ctorPrWriter = (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async19254");
});

cljs.core.async.__GT_t_cljs$core$async19254 = (function cljs$core$async$__GT_t_cljs$core$async19254(f__$1,blockable__$1,meta19255){
return (new cljs.core.async.t_cljs$core$async19254(f__$1,blockable__$1,meta19255));
});

}

return (new cljs.core.async.t_cljs$core$async19254(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__19260 = arguments.length;
switch (G__19260) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__19263 = arguments.length;
switch (G__19263) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__19266 = arguments.length;
switch (G__19266) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19268 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19268) : fn1.call(null,val_19268));
} else {
cljs.core.async.impl.dispatch.run(((function (val_19268,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19268) : fn1.call(null,val_19268));
});})(val_19268,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__19270 = arguments.length;
switch (G__19270) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5276__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__12552__auto___19272 = n;
var x_19273 = (0);
while(true){
if((x_19273 < n__12552__auto___19272)){
(a[x_19273] = (0));

var G__19274 = (x_19273 + (1));
x_19273 = G__19274;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__19275 = (i + (1));
i = G__19275;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async19276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19276 = (function (flag,meta19277){
this.flag = flag;
this.meta19277 = meta19277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19278,meta19277__$1){
var self__ = this;
var _19278__$1 = this;
return (new cljs.core.async.t_cljs$core$async19276(self__.flag,meta19277__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19278){
var self__ = this;
var _19278__$1 = this;
return self__.meta19277;
});})(flag))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19276.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta19277], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19276";

cljs.core.async.t_cljs$core$async19276.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async19276");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19276 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19276(flag__$1,meta19277){
return (new cljs.core.async.t_cljs$core$async19276(flag__$1,meta19277));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19276(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19279 = (function (flag,cb,meta19280){
this.flag = flag;
this.cb = cb;
this.meta19280 = meta19280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19281,meta19280__$1){
var self__ = this;
var _19281__$1 = this;
return (new cljs.core.async.t_cljs$core$async19279(self__.flag,self__.cb,meta19280__$1));
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19281){
var self__ = this;
var _19281__$1 = this;
return self__.meta19280;
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta19280], null);
});

cljs.core.async.t_cljs$core$async19279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19279";

cljs.core.async.t_cljs$core$async19279.cljs$lang$ctorPrWriter = (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async19279");
});

cljs.core.async.__GT_t_cljs$core$async19279 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19279(flag__$1,cb__$1,meta19280){
return (new cljs.core.async.t_cljs$core$async19279(flag__$1,cb__$1,meta19280));
});

}

return (new cljs.core.async.t_cljs$core$async19279(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19282_SHARP_){
var G__19284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19282_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19284) : fret.call(null,G__19284));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19283_SHARP_){
var G__19285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19283_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19285) : fret.call(null,G__19285));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__11514__auto__ = wport;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19286 = (i + (1));
i = G__19286;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11514__auto__ = ret;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5278__auto__ = (function (){var and__11502__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__11502__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__11502__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___19292 = arguments.length;
var i__12776__auto___19293 = (0);
while(true){
if((i__12776__auto___19293 < len__12775__auto___19292)){
args__12782__auto__.push((arguments[i__12776__auto___19293]));

var G__19294 = (i__12776__auto___19293 + (1));
i__12776__auto___19293 = G__19294;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19289){
var map__19290 = p__19289;
var map__19290__$1 = ((((!((map__19290 == null)))?((((map__19290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19290):map__19290);
var opts = map__19290__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19287){
var G__19288 = cljs.core.first(seq19287);
var seq19287__$1 = cljs.core.next(seq19287);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19288,seq19287__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__19296 = arguments.length;
switch (G__19296) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19193__auto___19342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___19342){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___19342){
return (function (state_19320){
var state_val_19321 = (state_19320[(1)]);
if((state_val_19321 === (7))){
var inst_19316 = (state_19320[(2)]);
var state_19320__$1 = state_19320;
var statearr_19322_19343 = state_19320__$1;
(statearr_19322_19343[(2)] = inst_19316);

(statearr_19322_19343[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (1))){
var state_19320__$1 = state_19320;
var statearr_19323_19344 = state_19320__$1;
(statearr_19323_19344[(2)] = null);

(statearr_19323_19344[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (4))){
var inst_19299 = (state_19320[(7)]);
var inst_19299__$1 = (state_19320[(2)]);
var inst_19300 = (inst_19299__$1 == null);
var state_19320__$1 = (function (){var statearr_19324 = state_19320;
(statearr_19324[(7)] = inst_19299__$1);

return statearr_19324;
})();
if(cljs.core.truth_(inst_19300)){
var statearr_19325_19345 = state_19320__$1;
(statearr_19325_19345[(1)] = (5));

} else {
var statearr_19326_19346 = state_19320__$1;
(statearr_19326_19346[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (13))){
var state_19320__$1 = state_19320;
var statearr_19327_19347 = state_19320__$1;
(statearr_19327_19347[(2)] = null);

(statearr_19327_19347[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (6))){
var inst_19299 = (state_19320[(7)]);
var state_19320__$1 = state_19320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19320__$1,(11),to,inst_19299);
} else {
if((state_val_19321 === (3))){
var inst_19318 = (state_19320[(2)]);
var state_19320__$1 = state_19320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19320__$1,inst_19318);
} else {
if((state_val_19321 === (12))){
var state_19320__$1 = state_19320;
var statearr_19328_19348 = state_19320__$1;
(statearr_19328_19348[(2)] = null);

(statearr_19328_19348[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (2))){
var state_19320__$1 = state_19320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19320__$1,(4),from);
} else {
if((state_val_19321 === (11))){
var inst_19309 = (state_19320[(2)]);
var state_19320__$1 = state_19320;
if(cljs.core.truth_(inst_19309)){
var statearr_19329_19349 = state_19320__$1;
(statearr_19329_19349[(1)] = (12));

} else {
var statearr_19330_19350 = state_19320__$1;
(statearr_19330_19350[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (9))){
var state_19320__$1 = state_19320;
var statearr_19331_19351 = state_19320__$1;
(statearr_19331_19351[(2)] = null);

(statearr_19331_19351[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (5))){
var state_19320__$1 = state_19320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19332_19352 = state_19320__$1;
(statearr_19332_19352[(1)] = (8));

} else {
var statearr_19333_19353 = state_19320__$1;
(statearr_19333_19353[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (14))){
var inst_19314 = (state_19320[(2)]);
var state_19320__$1 = state_19320;
var statearr_19334_19354 = state_19320__$1;
(statearr_19334_19354[(2)] = inst_19314);

(statearr_19334_19354[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (10))){
var inst_19306 = (state_19320[(2)]);
var state_19320__$1 = state_19320;
var statearr_19335_19355 = state_19320__$1;
(statearr_19335_19355[(2)] = inst_19306);

(statearr_19335_19355[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19321 === (8))){
var inst_19303 = cljs.core.async.close_BANG_(to);
var state_19320__$1 = state_19320;
var statearr_19336_19356 = state_19320__$1;
(statearr_19336_19356[(2)] = inst_19303);

(statearr_19336_19356[(1)] = (10));


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
});})(c__19193__auto___19342))
;
return ((function (switch__19091__auto__,c__19193__auto___19342){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_19337 = [null,null,null,null,null,null,null,null];
(statearr_19337[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_19337[(1)] = (1));

return statearr_19337;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_19320){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19320);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19338){if((e19338 instanceof Object)){
var ex__19095__auto__ = e19338;
var statearr_19339_19357 = state_19320;
(statearr_19339_19357[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19320);

return cljs.core.cst$kw$recur;
} else {
throw e19338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19358 = state_19320;
state_19320 = G__19358;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_19320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_19320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___19342))
})();
var state__19195__auto__ = (function (){var statearr_19340 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19340[(6)] = c__19193__auto___19342);

return statearr_19340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___19342))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__19359){
var vec__19360 = p__19359;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19360,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19360,(1),null);
var job = vec__19360;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__19193__auto___19531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___19531,res,vec__19360,v,p,job,jobs,results){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___19531,res,vec__19360,v,p,job,jobs,results){
return (function (state_19367){
var state_val_19368 = (state_19367[(1)]);
if((state_val_19368 === (1))){
var state_19367__$1 = state_19367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19367__$1,(2),res,v);
} else {
if((state_val_19368 === (2))){
var inst_19364 = (state_19367[(2)]);
var inst_19365 = cljs.core.async.close_BANG_(res);
var state_19367__$1 = (function (){var statearr_19369 = state_19367;
(statearr_19369[(7)] = inst_19364);

return statearr_19369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19367__$1,inst_19365);
} else {
return null;
}
}
});})(c__19193__auto___19531,res,vec__19360,v,p,job,jobs,results))
;
return ((function (switch__19091__auto__,c__19193__auto___19531,res,vec__19360,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0 = (function (){
var statearr_19370 = [null,null,null,null,null,null,null,null];
(statearr_19370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__);

(statearr_19370[(1)] = (1));

return statearr_19370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1 = (function (state_19367){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19367);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19371){if((e19371 instanceof Object)){
var ex__19095__auto__ = e19371;
var statearr_19372_19532 = state_19367;
(statearr_19372_19532[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19367);

return cljs.core.cst$kw$recur;
} else {
throw e19371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19533 = state_19367;
state_19367 = G__19533;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = function(state_19367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1.call(this,state_19367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___19531,res,vec__19360,v,p,job,jobs,results))
})();
var state__19195__auto__ = (function (){var statearr_19373 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19373[(6)] = c__19193__auto___19531);

return statearr_19373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___19531,res,vec__19360,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19374){
var vec__19375 = p__19374;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19375,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19375,(1),null);
var job = vec__19375;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__12552__auto___19534 = n;
var __19535 = (0);
while(true){
if((__19535 < n__12552__auto___19534)){
var G__19378_19536 = type;
var G__19378_19537__$1 = (((G__19378_19536 instanceof cljs.core.Keyword))?G__19378_19536.fqn:null);
switch (G__19378_19537__$1) {
case "compute":
var c__19193__auto___19539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19535,c__19193__auto___19539,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (__19535,c__19193__auto___19539,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async){
return (function (state_19391){
var state_val_19392 = (state_19391[(1)]);
if((state_val_19392 === (1))){
var state_19391__$1 = state_19391;
var statearr_19393_19540 = state_19391__$1;
(statearr_19393_19540[(2)] = null);

(statearr_19393_19540[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19392 === (2))){
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19391__$1,(4),jobs);
} else {
if((state_val_19392 === (3))){
var inst_19389 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19391__$1,inst_19389);
} else {
if((state_val_19392 === (4))){
var inst_19381 = (state_19391[(2)]);
var inst_19382 = process(inst_19381);
var state_19391__$1 = state_19391;
if(cljs.core.truth_(inst_19382)){
var statearr_19394_19541 = state_19391__$1;
(statearr_19394_19541[(1)] = (5));

} else {
var statearr_19395_19542 = state_19391__$1;
(statearr_19395_19542[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19392 === (5))){
var state_19391__$1 = state_19391;
var statearr_19396_19543 = state_19391__$1;
(statearr_19396_19543[(2)] = null);

(statearr_19396_19543[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19392 === (6))){
var state_19391__$1 = state_19391;
var statearr_19397_19544 = state_19391__$1;
(statearr_19397_19544[(2)] = null);

(statearr_19397_19544[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19392 === (7))){
var inst_19387 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
var statearr_19398_19545 = state_19391__$1;
(statearr_19398_19545[(2)] = inst_19387);

(statearr_19398_19545[(1)] = (3));


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
});})(__19535,c__19193__auto___19539,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async))
;
return ((function (__19535,switch__19091__auto__,c__19193__auto___19539,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0 = (function (){
var statearr_19399 = [null,null,null,null,null,null,null];
(statearr_19399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__);

(statearr_19399[(1)] = (1));

return statearr_19399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1 = (function (state_19391){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19391);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19400){if((e19400 instanceof Object)){
var ex__19095__auto__ = e19400;
var statearr_19401_19546 = state_19391;
(statearr_19401_19546[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19391);

return cljs.core.cst$kw$recur;
} else {
throw e19400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19547 = state_19391;
state_19391 = G__19547;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = function(state_19391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1.call(this,state_19391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__;
})()
;})(__19535,switch__19091__auto__,c__19193__auto___19539,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async))
})();
var state__19195__auto__ = (function (){var statearr_19402 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19402[(6)] = c__19193__auto___19539);

return statearr_19402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(__19535,c__19193__auto___19539,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async))
);


break;
case "async":
var c__19193__auto___19548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19535,c__19193__auto___19548,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (__19535,c__19193__auto___19548,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async){
return (function (state_19415){
var state_val_19416 = (state_19415[(1)]);
if((state_val_19416 === (1))){
var state_19415__$1 = state_19415;
var statearr_19417_19549 = state_19415__$1;
(statearr_19417_19549[(2)] = null);

(statearr_19417_19549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19416 === (2))){
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19415__$1,(4),jobs);
} else {
if((state_val_19416 === (3))){
var inst_19413 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19415__$1,inst_19413);
} else {
if((state_val_19416 === (4))){
var inst_19405 = (state_19415[(2)]);
var inst_19406 = async(inst_19405);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19406)){
var statearr_19418_19550 = state_19415__$1;
(statearr_19418_19550[(1)] = (5));

} else {
var statearr_19419_19551 = state_19415__$1;
(statearr_19419_19551[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19416 === (5))){
var state_19415__$1 = state_19415;
var statearr_19420_19552 = state_19415__$1;
(statearr_19420_19552[(2)] = null);

(statearr_19420_19552[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19416 === (6))){
var state_19415__$1 = state_19415;
var statearr_19421_19553 = state_19415__$1;
(statearr_19421_19553[(2)] = null);

(statearr_19421_19553[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19416 === (7))){
var inst_19411 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19422_19554 = state_19415__$1;
(statearr_19422_19554[(2)] = inst_19411);

(statearr_19422_19554[(1)] = (3));


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
});})(__19535,c__19193__auto___19548,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async))
;
return ((function (__19535,switch__19091__auto__,c__19193__auto___19548,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0 = (function (){
var statearr_19423 = [null,null,null,null,null,null,null];
(statearr_19423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__);

(statearr_19423[(1)] = (1));

return statearr_19423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1 = (function (state_19415){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19415);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19424){if((e19424 instanceof Object)){
var ex__19095__auto__ = e19424;
var statearr_19425_19555 = state_19415;
(statearr_19425_19555[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19415);

return cljs.core.cst$kw$recur;
} else {
throw e19424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19556 = state_19415;
state_19415 = G__19556;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = function(state_19415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1.call(this,state_19415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__;
})()
;})(__19535,switch__19091__auto__,c__19193__auto___19548,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async))
})();
var state__19195__auto__ = (function (){var statearr_19426 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19426[(6)] = c__19193__auto___19548);

return statearr_19426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(__19535,c__19193__auto___19548,G__19378_19536,G__19378_19537__$1,n__12552__auto___19534,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19378_19537__$1)].join('')));

}

var G__19557 = (__19535 + (1));
__19535 = G__19557;
continue;
} else {
}
break;
}

var c__19193__auto___19558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___19558,jobs,results,process,async){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___19558,jobs,results,process,async){
return (function (state_19448){
var state_val_19449 = (state_19448[(1)]);
if((state_val_19449 === (1))){
var state_19448__$1 = state_19448;
var statearr_19450_19559 = state_19448__$1;
(statearr_19450_19559[(2)] = null);

(statearr_19450_19559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19449 === (2))){
var state_19448__$1 = state_19448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19448__$1,(4),from);
} else {
if((state_val_19449 === (3))){
var inst_19446 = (state_19448[(2)]);
var state_19448__$1 = state_19448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19448__$1,inst_19446);
} else {
if((state_val_19449 === (4))){
var inst_19429 = (state_19448[(7)]);
var inst_19429__$1 = (state_19448[(2)]);
var inst_19430 = (inst_19429__$1 == null);
var state_19448__$1 = (function (){var statearr_19451 = state_19448;
(statearr_19451[(7)] = inst_19429__$1);

return statearr_19451;
})();
if(cljs.core.truth_(inst_19430)){
var statearr_19452_19560 = state_19448__$1;
(statearr_19452_19560[(1)] = (5));

} else {
var statearr_19453_19561 = state_19448__$1;
(statearr_19453_19561[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19449 === (5))){
var inst_19432 = cljs.core.async.close_BANG_(jobs);
var state_19448__$1 = state_19448;
var statearr_19454_19562 = state_19448__$1;
(statearr_19454_19562[(2)] = inst_19432);

(statearr_19454_19562[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19449 === (6))){
var inst_19429 = (state_19448[(7)]);
var inst_19434 = (state_19448[(8)]);
var inst_19434__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19435 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19436 = [inst_19429,inst_19434__$1];
var inst_19437 = (new cljs.core.PersistentVector(null,2,(5),inst_19435,inst_19436,null));
var state_19448__$1 = (function (){var statearr_19455 = state_19448;
(statearr_19455[(8)] = inst_19434__$1);

return statearr_19455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19448__$1,(8),jobs,inst_19437);
} else {
if((state_val_19449 === (7))){
var inst_19444 = (state_19448[(2)]);
var state_19448__$1 = state_19448;
var statearr_19456_19563 = state_19448__$1;
(statearr_19456_19563[(2)] = inst_19444);

(statearr_19456_19563[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19449 === (8))){
var inst_19434 = (state_19448[(8)]);
var inst_19439 = (state_19448[(2)]);
var state_19448__$1 = (function (){var statearr_19457 = state_19448;
(statearr_19457[(9)] = inst_19439);

return statearr_19457;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19448__$1,(9),results,inst_19434);
} else {
if((state_val_19449 === (9))){
var inst_19441 = (state_19448[(2)]);
var state_19448__$1 = (function (){var statearr_19458 = state_19448;
(statearr_19458[(10)] = inst_19441);

return statearr_19458;
})();
var statearr_19459_19564 = state_19448__$1;
(statearr_19459_19564[(2)] = null);

(statearr_19459_19564[(1)] = (2));


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
});})(c__19193__auto___19558,jobs,results,process,async))
;
return ((function (switch__19091__auto__,c__19193__auto___19558,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0 = (function (){
var statearr_19460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__);

(statearr_19460[(1)] = (1));

return statearr_19460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1 = (function (state_19448){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19448);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19461){if((e19461 instanceof Object)){
var ex__19095__auto__ = e19461;
var statearr_19462_19565 = state_19448;
(statearr_19462_19565[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19448);

return cljs.core.cst$kw$recur;
} else {
throw e19461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19566 = state_19448;
state_19448 = G__19566;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = function(state_19448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1.call(this,state_19448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___19558,jobs,results,process,async))
})();
var state__19195__auto__ = (function (){var statearr_19463 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19463[(6)] = c__19193__auto___19558);

return statearr_19463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___19558,jobs,results,process,async))
);


var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__,jobs,results,process,async){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__,jobs,results,process,async){
return (function (state_19501){
var state_val_19502 = (state_19501[(1)]);
if((state_val_19502 === (7))){
var inst_19497 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
var statearr_19503_19567 = state_19501__$1;
(statearr_19503_19567[(2)] = inst_19497);

(statearr_19503_19567[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (20))){
var state_19501__$1 = state_19501;
var statearr_19504_19568 = state_19501__$1;
(statearr_19504_19568[(2)] = null);

(statearr_19504_19568[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (1))){
var state_19501__$1 = state_19501;
var statearr_19505_19569 = state_19501__$1;
(statearr_19505_19569[(2)] = null);

(statearr_19505_19569[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (4))){
var inst_19466 = (state_19501[(7)]);
var inst_19466__$1 = (state_19501[(2)]);
var inst_19467 = (inst_19466__$1 == null);
var state_19501__$1 = (function (){var statearr_19506 = state_19501;
(statearr_19506[(7)] = inst_19466__$1);

return statearr_19506;
})();
if(cljs.core.truth_(inst_19467)){
var statearr_19507_19570 = state_19501__$1;
(statearr_19507_19570[(1)] = (5));

} else {
var statearr_19508_19571 = state_19501__$1;
(statearr_19508_19571[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (15))){
var inst_19479 = (state_19501[(8)]);
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19501__$1,(18),to,inst_19479);
} else {
if((state_val_19502 === (21))){
var inst_19492 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
var statearr_19509_19572 = state_19501__$1;
(statearr_19509_19572[(2)] = inst_19492);

(statearr_19509_19572[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (13))){
var inst_19494 = (state_19501[(2)]);
var state_19501__$1 = (function (){var statearr_19510 = state_19501;
(statearr_19510[(9)] = inst_19494);

return statearr_19510;
})();
var statearr_19511_19573 = state_19501__$1;
(statearr_19511_19573[(2)] = null);

(statearr_19511_19573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (6))){
var inst_19466 = (state_19501[(7)]);
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19501__$1,(11),inst_19466);
} else {
if((state_val_19502 === (17))){
var inst_19487 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
if(cljs.core.truth_(inst_19487)){
var statearr_19512_19574 = state_19501__$1;
(statearr_19512_19574[(1)] = (19));

} else {
var statearr_19513_19575 = state_19501__$1;
(statearr_19513_19575[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (3))){
var inst_19499 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19501__$1,inst_19499);
} else {
if((state_val_19502 === (12))){
var inst_19476 = (state_19501[(10)]);
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19501__$1,(14),inst_19476);
} else {
if((state_val_19502 === (2))){
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19501__$1,(4),results);
} else {
if((state_val_19502 === (19))){
var state_19501__$1 = state_19501;
var statearr_19514_19576 = state_19501__$1;
(statearr_19514_19576[(2)] = null);

(statearr_19514_19576[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (11))){
var inst_19476 = (state_19501[(2)]);
var state_19501__$1 = (function (){var statearr_19515 = state_19501;
(statearr_19515[(10)] = inst_19476);

return statearr_19515;
})();
var statearr_19516_19577 = state_19501__$1;
(statearr_19516_19577[(2)] = null);

(statearr_19516_19577[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (9))){
var state_19501__$1 = state_19501;
var statearr_19517_19578 = state_19501__$1;
(statearr_19517_19578[(2)] = null);

(statearr_19517_19578[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (5))){
var state_19501__$1 = state_19501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19518_19579 = state_19501__$1;
(statearr_19518_19579[(1)] = (8));

} else {
var statearr_19519_19580 = state_19501__$1;
(statearr_19519_19580[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (14))){
var inst_19481 = (state_19501[(11)]);
var inst_19479 = (state_19501[(8)]);
var inst_19479__$1 = (state_19501[(2)]);
var inst_19480 = (inst_19479__$1 == null);
var inst_19481__$1 = cljs.core.not(inst_19480);
var state_19501__$1 = (function (){var statearr_19520 = state_19501;
(statearr_19520[(11)] = inst_19481__$1);

(statearr_19520[(8)] = inst_19479__$1);

return statearr_19520;
})();
if(inst_19481__$1){
var statearr_19521_19581 = state_19501__$1;
(statearr_19521_19581[(1)] = (15));

} else {
var statearr_19522_19582 = state_19501__$1;
(statearr_19522_19582[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (16))){
var inst_19481 = (state_19501[(11)]);
var state_19501__$1 = state_19501;
var statearr_19523_19583 = state_19501__$1;
(statearr_19523_19583[(2)] = inst_19481);

(statearr_19523_19583[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (10))){
var inst_19473 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
var statearr_19524_19584 = state_19501__$1;
(statearr_19524_19584[(2)] = inst_19473);

(statearr_19524_19584[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (18))){
var inst_19484 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
var statearr_19525_19585 = state_19501__$1;
(statearr_19525_19585[(2)] = inst_19484);

(statearr_19525_19585[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19502 === (8))){
var inst_19470 = cljs.core.async.close_BANG_(to);
var state_19501__$1 = state_19501;
var statearr_19526_19586 = state_19501__$1;
(statearr_19526_19586[(2)] = inst_19470);

(statearr_19526_19586[(1)] = (10));


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
});})(c__19193__auto__,jobs,results,process,async))
;
return ((function (switch__19091__auto__,c__19193__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0 = (function (){
var statearr_19527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__);

(statearr_19527[(1)] = (1));

return statearr_19527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1 = (function (state_19501){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19501);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19528){if((e19528 instanceof Object)){
var ex__19095__auto__ = e19528;
var statearr_19529_19587 = state_19501;
(statearr_19529_19587[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19501);

return cljs.core.cst$kw$recur;
} else {
throw e19528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19588 = state_19501;
state_19501 = G__19588;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__ = function(state_19501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1.call(this,state_19501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19092__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__,jobs,results,process,async))
})();
var state__19195__auto__ = (function (){var statearr_19530 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19530[(6)] = c__19193__auto__);

return statearr_19530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__,jobs,results,process,async))
);

return c__19193__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19590 = arguments.length;
switch (G__19590) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19593 = arguments.length;
switch (G__19593) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19596 = arguments.length;
switch (G__19596) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__19193__auto___19645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___19645,tc,fc){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___19645,tc,fc){
return (function (state_19622){
var state_val_19623 = (state_19622[(1)]);
if((state_val_19623 === (7))){
var inst_19618 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
var statearr_19624_19646 = state_19622__$1;
(statearr_19624_19646[(2)] = inst_19618);

(statearr_19624_19646[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (1))){
var state_19622__$1 = state_19622;
var statearr_19625_19647 = state_19622__$1;
(statearr_19625_19647[(2)] = null);

(statearr_19625_19647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (4))){
var inst_19599 = (state_19622[(7)]);
var inst_19599__$1 = (state_19622[(2)]);
var inst_19600 = (inst_19599__$1 == null);
var state_19622__$1 = (function (){var statearr_19626 = state_19622;
(statearr_19626[(7)] = inst_19599__$1);

return statearr_19626;
})();
if(cljs.core.truth_(inst_19600)){
var statearr_19627_19648 = state_19622__$1;
(statearr_19627_19648[(1)] = (5));

} else {
var statearr_19628_19649 = state_19622__$1;
(statearr_19628_19649[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (13))){
var state_19622__$1 = state_19622;
var statearr_19629_19650 = state_19622__$1;
(statearr_19629_19650[(2)] = null);

(statearr_19629_19650[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (6))){
var inst_19599 = (state_19622[(7)]);
var inst_19605 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19599) : p.call(null,inst_19599));
var state_19622__$1 = state_19622;
if(cljs.core.truth_(inst_19605)){
var statearr_19630_19651 = state_19622__$1;
(statearr_19630_19651[(1)] = (9));

} else {
var statearr_19631_19652 = state_19622__$1;
(statearr_19631_19652[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (3))){
var inst_19620 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19622__$1,inst_19620);
} else {
if((state_val_19623 === (12))){
var state_19622__$1 = state_19622;
var statearr_19632_19653 = state_19622__$1;
(statearr_19632_19653[(2)] = null);

(statearr_19632_19653[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (2))){
var state_19622__$1 = state_19622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19622__$1,(4),ch);
} else {
if((state_val_19623 === (11))){
var inst_19599 = (state_19622[(7)]);
var inst_19609 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19622__$1,(8),inst_19609,inst_19599);
} else {
if((state_val_19623 === (9))){
var state_19622__$1 = state_19622;
var statearr_19633_19654 = state_19622__$1;
(statearr_19633_19654[(2)] = tc);

(statearr_19633_19654[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (5))){
var inst_19602 = cljs.core.async.close_BANG_(tc);
var inst_19603 = cljs.core.async.close_BANG_(fc);
var state_19622__$1 = (function (){var statearr_19634 = state_19622;
(statearr_19634[(8)] = inst_19602);

return statearr_19634;
})();
var statearr_19635_19655 = state_19622__$1;
(statearr_19635_19655[(2)] = inst_19603);

(statearr_19635_19655[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (14))){
var inst_19616 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
var statearr_19636_19656 = state_19622__$1;
(statearr_19636_19656[(2)] = inst_19616);

(statearr_19636_19656[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (10))){
var state_19622__$1 = state_19622;
var statearr_19637_19657 = state_19622__$1;
(statearr_19637_19657[(2)] = fc);

(statearr_19637_19657[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (8))){
var inst_19611 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
if(cljs.core.truth_(inst_19611)){
var statearr_19638_19658 = state_19622__$1;
(statearr_19638_19658[(1)] = (12));

} else {
var statearr_19639_19659 = state_19622__$1;
(statearr_19639_19659[(1)] = (13));

}

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
});})(c__19193__auto___19645,tc,fc))
;
return ((function (switch__19091__auto__,c__19193__auto___19645,tc,fc){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_19640 = [null,null,null,null,null,null,null,null,null];
(statearr_19640[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_19640[(1)] = (1));

return statearr_19640;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_19622){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19622);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19641){if((e19641 instanceof Object)){
var ex__19095__auto__ = e19641;
var statearr_19642_19660 = state_19622;
(statearr_19642_19660[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19622);

return cljs.core.cst$kw$recur;
} else {
throw e19641;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19661 = state_19622;
state_19622 = G__19661;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_19622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_19622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___19645,tc,fc))
})();
var state__19195__auto__ = (function (){var statearr_19643 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19643[(6)] = c__19193__auto___19645);

return statearr_19643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___19645,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_19682){
var state_val_19683 = (state_19682[(1)]);
if((state_val_19683 === (7))){
var inst_19678 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19684_19702 = state_19682__$1;
(statearr_19684_19702[(2)] = inst_19678);

(statearr_19684_19702[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (1))){
var inst_19662 = init;
var state_19682__$1 = (function (){var statearr_19685 = state_19682;
(statearr_19685[(7)] = inst_19662);

return statearr_19685;
})();
var statearr_19686_19703 = state_19682__$1;
(statearr_19686_19703[(2)] = null);

(statearr_19686_19703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (4))){
var inst_19665 = (state_19682[(8)]);
var inst_19665__$1 = (state_19682[(2)]);
var inst_19666 = (inst_19665__$1 == null);
var state_19682__$1 = (function (){var statearr_19687 = state_19682;
(statearr_19687[(8)] = inst_19665__$1);

return statearr_19687;
})();
if(cljs.core.truth_(inst_19666)){
var statearr_19688_19704 = state_19682__$1;
(statearr_19688_19704[(1)] = (5));

} else {
var statearr_19689_19705 = state_19682__$1;
(statearr_19689_19705[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (6))){
var inst_19662 = (state_19682[(7)]);
var inst_19665 = (state_19682[(8)]);
var inst_19669 = (state_19682[(9)]);
var inst_19669__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19662,inst_19665) : f.call(null,inst_19662,inst_19665));
var inst_19670 = cljs.core.reduced_QMARK_(inst_19669__$1);
var state_19682__$1 = (function (){var statearr_19690 = state_19682;
(statearr_19690[(9)] = inst_19669__$1);

return statearr_19690;
})();
if(inst_19670){
var statearr_19691_19706 = state_19682__$1;
(statearr_19691_19706[(1)] = (8));

} else {
var statearr_19692_19707 = state_19682__$1;
(statearr_19692_19707[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (3))){
var inst_19680 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19682__$1,inst_19680);
} else {
if((state_val_19683 === (2))){
var state_19682__$1 = state_19682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19682__$1,(4),ch);
} else {
if((state_val_19683 === (9))){
var inst_19669 = (state_19682[(9)]);
var inst_19662 = inst_19669;
var state_19682__$1 = (function (){var statearr_19693 = state_19682;
(statearr_19693[(7)] = inst_19662);

return statearr_19693;
})();
var statearr_19694_19708 = state_19682__$1;
(statearr_19694_19708[(2)] = null);

(statearr_19694_19708[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (5))){
var inst_19662 = (state_19682[(7)]);
var state_19682__$1 = state_19682;
var statearr_19695_19709 = state_19682__$1;
(statearr_19695_19709[(2)] = inst_19662);

(statearr_19695_19709[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (10))){
var inst_19676 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19696_19710 = state_19682__$1;
(statearr_19696_19710[(2)] = inst_19676);

(statearr_19696_19710[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (8))){
var inst_19669 = (state_19682[(9)]);
var inst_19672 = cljs.core.deref(inst_19669);
var state_19682__$1 = state_19682;
var statearr_19697_19711 = state_19682__$1;
(statearr_19697_19711[(2)] = inst_19672);

(statearr_19697_19711[(1)] = (10));


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
});})(c__19193__auto__))
;
return ((function (switch__19091__auto__,c__19193__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19092__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19092__auto____0 = (function (){
var statearr_19698 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19698[(0)] = cljs$core$async$reduce_$_state_machine__19092__auto__);

(statearr_19698[(1)] = (1));

return statearr_19698;
});
var cljs$core$async$reduce_$_state_machine__19092__auto____1 = (function (state_19682){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19682);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19699){if((e19699 instanceof Object)){
var ex__19095__auto__ = e19699;
var statearr_19700_19712 = state_19682;
(statearr_19700_19712[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19682);

return cljs.core.cst$kw$recur;
} else {
throw e19699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19713 = state_19682;
state_19682 = G__19713;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19092__auto__ = function(state_19682){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19092__auto____1.call(this,state_19682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19092__auto____0;
cljs$core$async$reduce_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19092__auto____1;
return cljs$core$async$reduce_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_19701 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19701[(6)] = c__19193__auto__);

return statearr_19701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19715 = arguments.length;
switch (G__19715) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_19740){
var state_val_19741 = (state_19740[(1)]);
if((state_val_19741 === (7))){
var inst_19722 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19742_19763 = state_19740__$1;
(statearr_19742_19763[(2)] = inst_19722);

(statearr_19742_19763[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (1))){
var inst_19716 = cljs.core.seq(coll);
var inst_19717 = inst_19716;
var state_19740__$1 = (function (){var statearr_19743 = state_19740;
(statearr_19743[(7)] = inst_19717);

return statearr_19743;
})();
var statearr_19744_19764 = state_19740__$1;
(statearr_19744_19764[(2)] = null);

(statearr_19744_19764[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (4))){
var inst_19717 = (state_19740[(7)]);
var inst_19720 = cljs.core.first(inst_19717);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19740__$1,(7),ch,inst_19720);
} else {
if((state_val_19741 === (13))){
var inst_19734 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19745_19765 = state_19740__$1;
(statearr_19745_19765[(2)] = inst_19734);

(statearr_19745_19765[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (6))){
var inst_19725 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
if(cljs.core.truth_(inst_19725)){
var statearr_19746_19766 = state_19740__$1;
(statearr_19746_19766[(1)] = (8));

} else {
var statearr_19747_19767 = state_19740__$1;
(statearr_19747_19767[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (3))){
var inst_19738 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19740__$1,inst_19738);
} else {
if((state_val_19741 === (12))){
var state_19740__$1 = state_19740;
var statearr_19748_19768 = state_19740__$1;
(statearr_19748_19768[(2)] = null);

(statearr_19748_19768[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (2))){
var inst_19717 = (state_19740[(7)]);
var state_19740__$1 = state_19740;
if(cljs.core.truth_(inst_19717)){
var statearr_19749_19769 = state_19740__$1;
(statearr_19749_19769[(1)] = (4));

} else {
var statearr_19750_19770 = state_19740__$1;
(statearr_19750_19770[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (11))){
var inst_19731 = cljs.core.async.close_BANG_(ch);
var state_19740__$1 = state_19740;
var statearr_19751_19771 = state_19740__$1;
(statearr_19751_19771[(2)] = inst_19731);

(statearr_19751_19771[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (9))){
var state_19740__$1 = state_19740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19752_19772 = state_19740__$1;
(statearr_19752_19772[(1)] = (11));

} else {
var statearr_19753_19773 = state_19740__$1;
(statearr_19753_19773[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (5))){
var inst_19717 = (state_19740[(7)]);
var state_19740__$1 = state_19740;
var statearr_19754_19774 = state_19740__$1;
(statearr_19754_19774[(2)] = inst_19717);

(statearr_19754_19774[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (10))){
var inst_19736 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
var statearr_19755_19775 = state_19740__$1;
(statearr_19755_19775[(2)] = inst_19736);

(statearr_19755_19775[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19741 === (8))){
var inst_19717 = (state_19740[(7)]);
var inst_19727 = cljs.core.next(inst_19717);
var inst_19717__$1 = inst_19727;
var state_19740__$1 = (function (){var statearr_19756 = state_19740;
(statearr_19756[(7)] = inst_19717__$1);

return statearr_19756;
})();
var statearr_19757_19776 = state_19740__$1;
(statearr_19757_19776[(2)] = null);

(statearr_19757_19776[(1)] = (2));


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
});})(c__19193__auto__))
;
return ((function (switch__19091__auto__,c__19193__auto__){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_19758 = [null,null,null,null,null,null,null,null];
(statearr_19758[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_19758[(1)] = (1));

return statearr_19758;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_19740){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19740);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19759){if((e19759 instanceof Object)){
var ex__19095__auto__ = e19759;
var statearr_19760_19777 = state_19740;
(statearr_19760_19777[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19740);

return cljs.core.cst$kw$recur;
} else {
throw e19759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__19778 = state_19740;
state_19740 = G__19778;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_19740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_19740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_19761 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_19761[(6)] = c__19193__auto__);

return statearr_19761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12247__auto__ = (((_ == null))?null:_);
var m__12248__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__12248__auto__.call(null,_));
} else {
var m__12248__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__12248__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__12248__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__12248__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__12248__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12248__auto__.call(null,m,ch));
} else {
var m__12248__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12248__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__12248__auto__.call(null,m));
} else {
var m__12248__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__12248__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19779 = (function (ch,cs,meta19780){
this.ch = ch;
this.cs = cs;
this.meta19780 = meta19780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19781,meta19780__$1){
var self__ = this;
var _19781__$1 = this;
return (new cljs.core.async.t_cljs$core$async19779(self__.ch,self__.cs,meta19780__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19781){
var self__ = this;
var _19781__$1 = this;
return self__.meta19780;
});})(cs))
;

cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19779.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19779.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta19780], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19779";

cljs.core.async.t_cljs$core$async19779.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async19779");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19779 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19779(ch__$1,cs__$1,meta19780){
return (new cljs.core.async.t_cljs$core$async19779(ch__$1,cs__$1,meta19780));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19779(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19193__auto___20001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20001,cs,m,dchan,dctr,done){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20001,cs,m,dchan,dctr,done){
return (function (state_19916){
var state_val_19917 = (state_19916[(1)]);
if((state_val_19917 === (7))){
var inst_19912 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19918_20002 = state_19916__$1;
(statearr_19918_20002[(2)] = inst_19912);

(statearr_19918_20002[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (20))){
var inst_19815 = (state_19916[(7)]);
var inst_19827 = cljs.core.first(inst_19815);
var inst_19828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19827,(0),null);
var inst_19829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19827,(1),null);
var state_19916__$1 = (function (){var statearr_19919 = state_19916;
(statearr_19919[(8)] = inst_19828);

return statearr_19919;
})();
if(cljs.core.truth_(inst_19829)){
var statearr_19920_20003 = state_19916__$1;
(statearr_19920_20003[(1)] = (22));

} else {
var statearr_19921_20004 = state_19916__$1;
(statearr_19921_20004[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (27))){
var inst_19857 = (state_19916[(9)]);
var inst_19859 = (state_19916[(10)]);
var inst_19864 = (state_19916[(11)]);
var inst_19784 = (state_19916[(12)]);
var inst_19864__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19857,inst_19859);
var inst_19865 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19864__$1,inst_19784,done);
var state_19916__$1 = (function (){var statearr_19922 = state_19916;
(statearr_19922[(11)] = inst_19864__$1);

return statearr_19922;
})();
if(cljs.core.truth_(inst_19865)){
var statearr_19923_20005 = state_19916__$1;
(statearr_19923_20005[(1)] = (30));

} else {
var statearr_19924_20006 = state_19916__$1;
(statearr_19924_20006[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (1))){
var state_19916__$1 = state_19916;
var statearr_19925_20007 = state_19916__$1;
(statearr_19925_20007[(2)] = null);

(statearr_19925_20007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (24))){
var inst_19815 = (state_19916[(7)]);
var inst_19834 = (state_19916[(2)]);
var inst_19835 = cljs.core.next(inst_19815);
var inst_19793 = inst_19835;
var inst_19794 = null;
var inst_19795 = (0);
var inst_19796 = (0);
var state_19916__$1 = (function (){var statearr_19926 = state_19916;
(statearr_19926[(13)] = inst_19793);

(statearr_19926[(14)] = inst_19834);

(statearr_19926[(15)] = inst_19796);

(statearr_19926[(16)] = inst_19794);

(statearr_19926[(17)] = inst_19795);

return statearr_19926;
})();
var statearr_19927_20008 = state_19916__$1;
(statearr_19927_20008[(2)] = null);

(statearr_19927_20008[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (39))){
var state_19916__$1 = state_19916;
var statearr_19931_20009 = state_19916__$1;
(statearr_19931_20009[(2)] = null);

(statearr_19931_20009[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (4))){
var inst_19784 = (state_19916[(12)]);
var inst_19784__$1 = (state_19916[(2)]);
var inst_19785 = (inst_19784__$1 == null);
var state_19916__$1 = (function (){var statearr_19932 = state_19916;
(statearr_19932[(12)] = inst_19784__$1);

return statearr_19932;
})();
if(cljs.core.truth_(inst_19785)){
var statearr_19933_20010 = state_19916__$1;
(statearr_19933_20010[(1)] = (5));

} else {
var statearr_19934_20011 = state_19916__$1;
(statearr_19934_20011[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (15))){
var inst_19793 = (state_19916[(13)]);
var inst_19796 = (state_19916[(15)]);
var inst_19794 = (state_19916[(16)]);
var inst_19795 = (state_19916[(17)]);
var inst_19811 = (state_19916[(2)]);
var inst_19812 = (inst_19796 + (1));
var tmp19928 = inst_19793;
var tmp19929 = inst_19794;
var tmp19930 = inst_19795;
var inst_19793__$1 = tmp19928;
var inst_19794__$1 = tmp19929;
var inst_19795__$1 = tmp19930;
var inst_19796__$1 = inst_19812;
var state_19916__$1 = (function (){var statearr_19935 = state_19916;
(statearr_19935[(13)] = inst_19793__$1);

(statearr_19935[(15)] = inst_19796__$1);

(statearr_19935[(16)] = inst_19794__$1);

(statearr_19935[(17)] = inst_19795__$1);

(statearr_19935[(18)] = inst_19811);

return statearr_19935;
})();
var statearr_19936_20012 = state_19916__$1;
(statearr_19936_20012[(2)] = null);

(statearr_19936_20012[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (21))){
var inst_19838 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19940_20013 = state_19916__$1;
(statearr_19940_20013[(2)] = inst_19838);

(statearr_19940_20013[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (31))){
var inst_19864 = (state_19916[(11)]);
var inst_19868 = done(null);
var inst_19869 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19864);
var state_19916__$1 = (function (){var statearr_19941 = state_19916;
(statearr_19941[(19)] = inst_19868);

return statearr_19941;
})();
var statearr_19942_20014 = state_19916__$1;
(statearr_19942_20014[(2)] = inst_19869);

(statearr_19942_20014[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (32))){
var inst_19857 = (state_19916[(9)]);
var inst_19859 = (state_19916[(10)]);
var inst_19856 = (state_19916[(20)]);
var inst_19858 = (state_19916[(21)]);
var inst_19871 = (state_19916[(2)]);
var inst_19872 = (inst_19859 + (1));
var tmp19937 = inst_19857;
var tmp19938 = inst_19856;
var tmp19939 = inst_19858;
var inst_19856__$1 = tmp19938;
var inst_19857__$1 = tmp19937;
var inst_19858__$1 = tmp19939;
var inst_19859__$1 = inst_19872;
var state_19916__$1 = (function (){var statearr_19943 = state_19916;
(statearr_19943[(9)] = inst_19857__$1);

(statearr_19943[(10)] = inst_19859__$1);

(statearr_19943[(20)] = inst_19856__$1);

(statearr_19943[(21)] = inst_19858__$1);

(statearr_19943[(22)] = inst_19871);

return statearr_19943;
})();
var statearr_19944_20015 = state_19916__$1;
(statearr_19944_20015[(2)] = null);

(statearr_19944_20015[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (40))){
var inst_19884 = (state_19916[(23)]);
var inst_19888 = done(null);
var inst_19889 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19884);
var state_19916__$1 = (function (){var statearr_19945 = state_19916;
(statearr_19945[(24)] = inst_19888);

return statearr_19945;
})();
var statearr_19946_20016 = state_19916__$1;
(statearr_19946_20016[(2)] = inst_19889);

(statearr_19946_20016[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (33))){
var inst_19875 = (state_19916[(25)]);
var inst_19877 = cljs.core.chunked_seq_QMARK_(inst_19875);
var state_19916__$1 = state_19916;
if(inst_19877){
var statearr_19947_20017 = state_19916__$1;
(statearr_19947_20017[(1)] = (36));

} else {
var statearr_19948_20018 = state_19916__$1;
(statearr_19948_20018[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (13))){
var inst_19805 = (state_19916[(26)]);
var inst_19808 = cljs.core.async.close_BANG_(inst_19805);
var state_19916__$1 = state_19916;
var statearr_19949_20019 = state_19916__$1;
(statearr_19949_20019[(2)] = inst_19808);

(statearr_19949_20019[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (22))){
var inst_19828 = (state_19916[(8)]);
var inst_19831 = cljs.core.async.close_BANG_(inst_19828);
var state_19916__$1 = state_19916;
var statearr_19950_20020 = state_19916__$1;
(statearr_19950_20020[(2)] = inst_19831);

(statearr_19950_20020[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (36))){
var inst_19875 = (state_19916[(25)]);
var inst_19879 = cljs.core.chunk_first(inst_19875);
var inst_19880 = cljs.core.chunk_rest(inst_19875);
var inst_19881 = cljs.core.count(inst_19879);
var inst_19856 = inst_19880;
var inst_19857 = inst_19879;
var inst_19858 = inst_19881;
var inst_19859 = (0);
var state_19916__$1 = (function (){var statearr_19951 = state_19916;
(statearr_19951[(9)] = inst_19857);

(statearr_19951[(10)] = inst_19859);

(statearr_19951[(20)] = inst_19856);

(statearr_19951[(21)] = inst_19858);

return statearr_19951;
})();
var statearr_19952_20021 = state_19916__$1;
(statearr_19952_20021[(2)] = null);

(statearr_19952_20021[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (41))){
var inst_19875 = (state_19916[(25)]);
var inst_19891 = (state_19916[(2)]);
var inst_19892 = cljs.core.next(inst_19875);
var inst_19856 = inst_19892;
var inst_19857 = null;
var inst_19858 = (0);
var inst_19859 = (0);
var state_19916__$1 = (function (){var statearr_19953 = state_19916;
(statearr_19953[(9)] = inst_19857);

(statearr_19953[(10)] = inst_19859);

(statearr_19953[(20)] = inst_19856);

(statearr_19953[(21)] = inst_19858);

(statearr_19953[(27)] = inst_19891);

return statearr_19953;
})();
var statearr_19954_20022 = state_19916__$1;
(statearr_19954_20022[(2)] = null);

(statearr_19954_20022[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (43))){
var state_19916__$1 = state_19916;
var statearr_19955_20023 = state_19916__$1;
(statearr_19955_20023[(2)] = null);

(statearr_19955_20023[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (29))){
var inst_19900 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19956_20024 = state_19916__$1;
(statearr_19956_20024[(2)] = inst_19900);

(statearr_19956_20024[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (44))){
var inst_19909 = (state_19916[(2)]);
var state_19916__$1 = (function (){var statearr_19957 = state_19916;
(statearr_19957[(28)] = inst_19909);

return statearr_19957;
})();
var statearr_19958_20025 = state_19916__$1;
(statearr_19958_20025[(2)] = null);

(statearr_19958_20025[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (6))){
var inst_19848 = (state_19916[(29)]);
var inst_19847 = cljs.core.deref(cs);
var inst_19848__$1 = cljs.core.keys(inst_19847);
var inst_19849 = cljs.core.count(inst_19848__$1);
var inst_19850 = cljs.core.reset_BANG_(dctr,inst_19849);
var inst_19855 = cljs.core.seq(inst_19848__$1);
var inst_19856 = inst_19855;
var inst_19857 = null;
var inst_19858 = (0);
var inst_19859 = (0);
var state_19916__$1 = (function (){var statearr_19959 = state_19916;
(statearr_19959[(29)] = inst_19848__$1);

(statearr_19959[(30)] = inst_19850);

(statearr_19959[(9)] = inst_19857);

(statearr_19959[(10)] = inst_19859);

(statearr_19959[(20)] = inst_19856);

(statearr_19959[(21)] = inst_19858);

return statearr_19959;
})();
var statearr_19960_20026 = state_19916__$1;
(statearr_19960_20026[(2)] = null);

(statearr_19960_20026[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (28))){
var inst_19856 = (state_19916[(20)]);
var inst_19875 = (state_19916[(25)]);
var inst_19875__$1 = cljs.core.seq(inst_19856);
var state_19916__$1 = (function (){var statearr_19961 = state_19916;
(statearr_19961[(25)] = inst_19875__$1);

return statearr_19961;
})();
if(inst_19875__$1){
var statearr_19962_20027 = state_19916__$1;
(statearr_19962_20027[(1)] = (33));

} else {
var statearr_19963_20028 = state_19916__$1;
(statearr_19963_20028[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (25))){
var inst_19859 = (state_19916[(10)]);
var inst_19858 = (state_19916[(21)]);
var inst_19861 = (inst_19859 < inst_19858);
var inst_19862 = inst_19861;
var state_19916__$1 = state_19916;
if(cljs.core.truth_(inst_19862)){
var statearr_19964_20029 = state_19916__$1;
(statearr_19964_20029[(1)] = (27));

} else {
var statearr_19965_20030 = state_19916__$1;
(statearr_19965_20030[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (34))){
var state_19916__$1 = state_19916;
var statearr_19966_20031 = state_19916__$1;
(statearr_19966_20031[(2)] = null);

(statearr_19966_20031[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (17))){
var state_19916__$1 = state_19916;
var statearr_19967_20032 = state_19916__$1;
(statearr_19967_20032[(2)] = null);

(statearr_19967_20032[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (3))){
var inst_19914 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19916__$1,inst_19914);
} else {
if((state_val_19917 === (12))){
var inst_19843 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19968_20033 = state_19916__$1;
(statearr_19968_20033[(2)] = inst_19843);

(statearr_19968_20033[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (2))){
var state_19916__$1 = state_19916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19916__$1,(4),ch);
} else {
if((state_val_19917 === (23))){
var state_19916__$1 = state_19916;
var statearr_19969_20034 = state_19916__$1;
(statearr_19969_20034[(2)] = null);

(statearr_19969_20034[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (35))){
var inst_19898 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19970_20035 = state_19916__$1;
(statearr_19970_20035[(2)] = inst_19898);

(statearr_19970_20035[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (19))){
var inst_19815 = (state_19916[(7)]);
var inst_19819 = cljs.core.chunk_first(inst_19815);
var inst_19820 = cljs.core.chunk_rest(inst_19815);
var inst_19821 = cljs.core.count(inst_19819);
var inst_19793 = inst_19820;
var inst_19794 = inst_19819;
var inst_19795 = inst_19821;
var inst_19796 = (0);
var state_19916__$1 = (function (){var statearr_19971 = state_19916;
(statearr_19971[(13)] = inst_19793);

(statearr_19971[(15)] = inst_19796);

(statearr_19971[(16)] = inst_19794);

(statearr_19971[(17)] = inst_19795);

return statearr_19971;
})();
var statearr_19972_20036 = state_19916__$1;
(statearr_19972_20036[(2)] = null);

(statearr_19972_20036[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (11))){
var inst_19793 = (state_19916[(13)]);
var inst_19815 = (state_19916[(7)]);
var inst_19815__$1 = cljs.core.seq(inst_19793);
var state_19916__$1 = (function (){var statearr_19973 = state_19916;
(statearr_19973[(7)] = inst_19815__$1);

return statearr_19973;
})();
if(inst_19815__$1){
var statearr_19974_20037 = state_19916__$1;
(statearr_19974_20037[(1)] = (16));

} else {
var statearr_19975_20038 = state_19916__$1;
(statearr_19975_20038[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (9))){
var inst_19845 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19976_20039 = state_19916__$1;
(statearr_19976_20039[(2)] = inst_19845);

(statearr_19976_20039[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (5))){
var inst_19791 = cljs.core.deref(cs);
var inst_19792 = cljs.core.seq(inst_19791);
var inst_19793 = inst_19792;
var inst_19794 = null;
var inst_19795 = (0);
var inst_19796 = (0);
var state_19916__$1 = (function (){var statearr_19977 = state_19916;
(statearr_19977[(13)] = inst_19793);

(statearr_19977[(15)] = inst_19796);

(statearr_19977[(16)] = inst_19794);

(statearr_19977[(17)] = inst_19795);

return statearr_19977;
})();
var statearr_19978_20040 = state_19916__$1;
(statearr_19978_20040[(2)] = null);

(statearr_19978_20040[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (14))){
var state_19916__$1 = state_19916;
var statearr_19979_20041 = state_19916__$1;
(statearr_19979_20041[(2)] = null);

(statearr_19979_20041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (45))){
var inst_19906 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19980_20042 = state_19916__$1;
(statearr_19980_20042[(2)] = inst_19906);

(statearr_19980_20042[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (26))){
var inst_19848 = (state_19916[(29)]);
var inst_19902 = (state_19916[(2)]);
var inst_19903 = cljs.core.seq(inst_19848);
var state_19916__$1 = (function (){var statearr_19981 = state_19916;
(statearr_19981[(31)] = inst_19902);

return statearr_19981;
})();
if(inst_19903){
var statearr_19982_20043 = state_19916__$1;
(statearr_19982_20043[(1)] = (42));

} else {
var statearr_19983_20044 = state_19916__$1;
(statearr_19983_20044[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (16))){
var inst_19815 = (state_19916[(7)]);
var inst_19817 = cljs.core.chunked_seq_QMARK_(inst_19815);
var state_19916__$1 = state_19916;
if(inst_19817){
var statearr_19984_20045 = state_19916__$1;
(statearr_19984_20045[(1)] = (19));

} else {
var statearr_19985_20046 = state_19916__$1;
(statearr_19985_20046[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (38))){
var inst_19895 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19986_20047 = state_19916__$1;
(statearr_19986_20047[(2)] = inst_19895);

(statearr_19986_20047[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (30))){
var state_19916__$1 = state_19916;
var statearr_19987_20048 = state_19916__$1;
(statearr_19987_20048[(2)] = null);

(statearr_19987_20048[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (10))){
var inst_19796 = (state_19916[(15)]);
var inst_19794 = (state_19916[(16)]);
var inst_19804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19794,inst_19796);
var inst_19805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19804,(0),null);
var inst_19806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19804,(1),null);
var state_19916__$1 = (function (){var statearr_19988 = state_19916;
(statearr_19988[(26)] = inst_19805);

return statearr_19988;
})();
if(cljs.core.truth_(inst_19806)){
var statearr_19989_20049 = state_19916__$1;
(statearr_19989_20049[(1)] = (13));

} else {
var statearr_19990_20050 = state_19916__$1;
(statearr_19990_20050[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (18))){
var inst_19841 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19991_20051 = state_19916__$1;
(statearr_19991_20051[(2)] = inst_19841);

(statearr_19991_20051[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (42))){
var state_19916__$1 = state_19916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19916__$1,(45),dchan);
} else {
if((state_val_19917 === (37))){
var inst_19884 = (state_19916[(23)]);
var inst_19875 = (state_19916[(25)]);
var inst_19784 = (state_19916[(12)]);
var inst_19884__$1 = cljs.core.first(inst_19875);
var inst_19885 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19884__$1,inst_19784,done);
var state_19916__$1 = (function (){var statearr_19992 = state_19916;
(statearr_19992[(23)] = inst_19884__$1);

return statearr_19992;
})();
if(cljs.core.truth_(inst_19885)){
var statearr_19993_20052 = state_19916__$1;
(statearr_19993_20052[(1)] = (39));

} else {
var statearr_19994_20053 = state_19916__$1;
(statearr_19994_20053[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19917 === (8))){
var inst_19796 = (state_19916[(15)]);
var inst_19795 = (state_19916[(17)]);
var inst_19798 = (inst_19796 < inst_19795);
var inst_19799 = inst_19798;
var state_19916__$1 = state_19916;
if(cljs.core.truth_(inst_19799)){
var statearr_19995_20054 = state_19916__$1;
(statearr_19995_20054[(1)] = (10));

} else {
var statearr_19996_20055 = state_19916__$1;
(statearr_19996_20055[(1)] = (11));

}

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
});})(c__19193__auto___20001,cs,m,dchan,dctr,done))
;
return ((function (switch__19091__auto__,c__19193__auto___20001,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19092__auto__ = null;
var cljs$core$async$mult_$_state_machine__19092__auto____0 = (function (){
var statearr_19997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19997[(0)] = cljs$core$async$mult_$_state_machine__19092__auto__);

(statearr_19997[(1)] = (1));

return statearr_19997;
});
var cljs$core$async$mult_$_state_machine__19092__auto____1 = (function (state_19916){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_19916);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e19998){if((e19998 instanceof Object)){
var ex__19095__auto__ = e19998;
var statearr_19999_20056 = state_19916;
(statearr_19999_20056[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19916);

return cljs.core.cst$kw$recur;
} else {
throw e19998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20057 = state_19916;
state_19916 = G__20057;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19092__auto__ = function(state_19916){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19092__auto____1.call(this,state_19916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19092__auto____0;
cljs$core$async$mult_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19092__auto____1;
return cljs$core$async$mult_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20001,cs,m,dchan,dctr,done))
})();
var state__19195__auto__ = (function (){var statearr_20000 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20000[(6)] = c__19193__auto___20001);

return statearr_20000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20001,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__20059 = arguments.length;
switch (G__20059) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12248__auto__.call(null,m,ch));
} else {
var m__12248__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12248__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12248__auto__.call(null,m,ch));
} else {
var m__12248__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__12248__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__12248__auto__.call(null,m));
} else {
var m__12248__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__12248__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__12248__auto__.call(null,m,state_map));
} else {
var m__12248__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__12248__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12247__auto__ = (((m == null))?null:m);
var m__12248__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__12248__auto__.call(null,m,mode));
} else {
var m__12248__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__12248__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20071 = arguments.length;
var i__12776__auto___20072 = (0);
while(true){
if((i__12776__auto___20072 < len__12775__auto___20071)){
args__12782__auto__.push((arguments[i__12776__auto___20072]));

var G__20073 = (i__12776__auto___20072 + (1));
i__12776__auto___20072 = G__20073;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((3) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12783__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20065){
var map__20066 = p__20065;
var map__20066__$1 = ((((!((map__20066 == null)))?((((map__20066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20066):map__20066);
var opts = map__20066__$1;
var statearr_20068_20074 = state;
(statearr_20068_20074[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts(((function (map__20066,map__20066__$1,opts){
return (function (val){
var statearr_20069_20075 = state;
(statearr_20069_20075[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__20066,map__20066__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_20070_20076 = state;
(statearr_20070_20076[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20061){
var G__20062 = cljs.core.first(seq20061);
var seq20061__$1 = cljs.core.next(seq20061);
var G__20063 = cljs.core.first(seq20061__$1);
var seq20061__$2 = cljs.core.next(seq20061__$1);
var G__20064 = cljs.core.first(seq20061__$2);
var seq20061__$3 = cljs.core.next(seq20061__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20062,G__20063,G__20064,seq20061__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20077 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta20078){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta20078 = meta20078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20079,meta20078__$1){
var self__ = this;
var _20079__$1 = this;
return (new cljs.core.async.t_cljs$core$async20077(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta20078__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20079){
var self__ = this;
var _20079__$1 = this;
return self__.meta20078;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta20078], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20077";

cljs.core.async.t_cljs$core$async20077.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async20077");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20077 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20077(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20078){
return (new cljs.core.async.t_cljs$core$async20077(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20078));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20077(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19193__auto___20241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20181){
var state_val_20182 = (state_20181[(1)]);
if((state_val_20182 === (7))){
var inst_20096 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20183_20242 = state_20181__$1;
(statearr_20183_20242[(2)] = inst_20096);

(statearr_20183_20242[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (20))){
var inst_20108 = (state_20181[(7)]);
var state_20181__$1 = state_20181;
var statearr_20184_20243 = state_20181__$1;
(statearr_20184_20243[(2)] = inst_20108);

(statearr_20184_20243[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (27))){
var state_20181__$1 = state_20181;
var statearr_20185_20244 = state_20181__$1;
(statearr_20185_20244[(2)] = null);

(statearr_20185_20244[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (1))){
var inst_20083 = (state_20181[(8)]);
var inst_20083__$1 = calc_state();
var inst_20085 = (inst_20083__$1 == null);
var inst_20086 = cljs.core.not(inst_20085);
var state_20181__$1 = (function (){var statearr_20186 = state_20181;
(statearr_20186[(8)] = inst_20083__$1);

return statearr_20186;
})();
if(inst_20086){
var statearr_20187_20245 = state_20181__$1;
(statearr_20187_20245[(1)] = (2));

} else {
var statearr_20188_20246 = state_20181__$1;
(statearr_20188_20246[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (24))){
var inst_20141 = (state_20181[(9)]);
var inst_20132 = (state_20181[(10)]);
var inst_20155 = (state_20181[(11)]);
var inst_20155__$1 = (inst_20132.cljs$core$IFn$_invoke$arity$1 ? inst_20132.cljs$core$IFn$_invoke$arity$1(inst_20141) : inst_20132.call(null,inst_20141));
var state_20181__$1 = (function (){var statearr_20189 = state_20181;
(statearr_20189[(11)] = inst_20155__$1);

return statearr_20189;
})();
if(cljs.core.truth_(inst_20155__$1)){
var statearr_20190_20247 = state_20181__$1;
(statearr_20190_20247[(1)] = (29));

} else {
var statearr_20191_20248 = state_20181__$1;
(statearr_20191_20248[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (4))){
var inst_20099 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20099)){
var statearr_20192_20249 = state_20181__$1;
(statearr_20192_20249[(1)] = (8));

} else {
var statearr_20193_20250 = state_20181__$1;
(statearr_20193_20250[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (15))){
var inst_20126 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20126)){
var statearr_20194_20251 = state_20181__$1;
(statearr_20194_20251[(1)] = (19));

} else {
var statearr_20195_20252 = state_20181__$1;
(statearr_20195_20252[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (21))){
var inst_20131 = (state_20181[(12)]);
var inst_20131__$1 = (state_20181[(2)]);
var inst_20132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20131__$1,cljs.core.cst$kw$solos);
var inst_20133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20131__$1,cljs.core.cst$kw$mutes);
var inst_20134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20131__$1,cljs.core.cst$kw$reads);
var state_20181__$1 = (function (){var statearr_20196 = state_20181;
(statearr_20196[(13)] = inst_20133);

(statearr_20196[(10)] = inst_20132);

(statearr_20196[(12)] = inst_20131__$1);

return statearr_20196;
})();
return cljs.core.async.ioc_alts_BANG_(state_20181__$1,(22),inst_20134);
} else {
if((state_val_20182 === (31))){
var inst_20163 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20163)){
var statearr_20197_20253 = state_20181__$1;
(statearr_20197_20253[(1)] = (32));

} else {
var statearr_20198_20254 = state_20181__$1;
(statearr_20198_20254[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (32))){
var inst_20140 = (state_20181[(14)]);
var state_20181__$1 = state_20181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20181__$1,(35),out,inst_20140);
} else {
if((state_val_20182 === (33))){
var inst_20131 = (state_20181[(12)]);
var inst_20108 = inst_20131;
var state_20181__$1 = (function (){var statearr_20199 = state_20181;
(statearr_20199[(7)] = inst_20108);

return statearr_20199;
})();
var statearr_20200_20255 = state_20181__$1;
(statearr_20200_20255[(2)] = null);

(statearr_20200_20255[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (13))){
var inst_20108 = (state_20181[(7)]);
var inst_20115 = inst_20108.cljs$lang$protocol_mask$partition0$;
var inst_20116 = (inst_20115 & (64));
var inst_20117 = inst_20108.cljs$core$ISeq$;
var inst_20118 = (cljs.core.PROTOCOL_SENTINEL === inst_20117);
var inst_20119 = (inst_20116) || (inst_20118);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20119)){
var statearr_20201_20256 = state_20181__$1;
(statearr_20201_20256[(1)] = (16));

} else {
var statearr_20202_20257 = state_20181__$1;
(statearr_20202_20257[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (22))){
var inst_20141 = (state_20181[(9)]);
var inst_20140 = (state_20181[(14)]);
var inst_20139 = (state_20181[(2)]);
var inst_20140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20139,(0),null);
var inst_20141__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20139,(1),null);
var inst_20142 = (inst_20140__$1 == null);
var inst_20143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20141__$1,change);
var inst_20144 = (inst_20142) || (inst_20143);
var state_20181__$1 = (function (){var statearr_20203 = state_20181;
(statearr_20203[(9)] = inst_20141__$1);

(statearr_20203[(14)] = inst_20140__$1);

return statearr_20203;
})();
if(cljs.core.truth_(inst_20144)){
var statearr_20204_20258 = state_20181__$1;
(statearr_20204_20258[(1)] = (23));

} else {
var statearr_20205_20259 = state_20181__$1;
(statearr_20205_20259[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (36))){
var inst_20131 = (state_20181[(12)]);
var inst_20108 = inst_20131;
var state_20181__$1 = (function (){var statearr_20206 = state_20181;
(statearr_20206[(7)] = inst_20108);

return statearr_20206;
})();
var statearr_20207_20260 = state_20181__$1;
(statearr_20207_20260[(2)] = null);

(statearr_20207_20260[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (29))){
var inst_20155 = (state_20181[(11)]);
var state_20181__$1 = state_20181;
var statearr_20208_20261 = state_20181__$1;
(statearr_20208_20261[(2)] = inst_20155);

(statearr_20208_20261[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (6))){
var state_20181__$1 = state_20181;
var statearr_20209_20262 = state_20181__$1;
(statearr_20209_20262[(2)] = false);

(statearr_20209_20262[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (28))){
var inst_20151 = (state_20181[(2)]);
var inst_20152 = calc_state();
var inst_20108 = inst_20152;
var state_20181__$1 = (function (){var statearr_20210 = state_20181;
(statearr_20210[(7)] = inst_20108);

(statearr_20210[(15)] = inst_20151);

return statearr_20210;
})();
var statearr_20211_20263 = state_20181__$1;
(statearr_20211_20263[(2)] = null);

(statearr_20211_20263[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (25))){
var inst_20177 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20212_20264 = state_20181__$1;
(statearr_20212_20264[(2)] = inst_20177);

(statearr_20212_20264[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (34))){
var inst_20175 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20213_20265 = state_20181__$1;
(statearr_20213_20265[(2)] = inst_20175);

(statearr_20213_20265[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (17))){
var state_20181__$1 = state_20181;
var statearr_20214_20266 = state_20181__$1;
(statearr_20214_20266[(2)] = false);

(statearr_20214_20266[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (3))){
var state_20181__$1 = state_20181;
var statearr_20215_20267 = state_20181__$1;
(statearr_20215_20267[(2)] = false);

(statearr_20215_20267[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (12))){
var inst_20179 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20181__$1,inst_20179);
} else {
if((state_val_20182 === (2))){
var inst_20083 = (state_20181[(8)]);
var inst_20088 = inst_20083.cljs$lang$protocol_mask$partition0$;
var inst_20089 = (inst_20088 & (64));
var inst_20090 = inst_20083.cljs$core$ISeq$;
var inst_20091 = (cljs.core.PROTOCOL_SENTINEL === inst_20090);
var inst_20092 = (inst_20089) || (inst_20091);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20092)){
var statearr_20216_20268 = state_20181__$1;
(statearr_20216_20268[(1)] = (5));

} else {
var statearr_20217_20269 = state_20181__$1;
(statearr_20217_20269[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (23))){
var inst_20140 = (state_20181[(14)]);
var inst_20146 = (inst_20140 == null);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20146)){
var statearr_20218_20270 = state_20181__$1;
(statearr_20218_20270[(1)] = (26));

} else {
var statearr_20219_20271 = state_20181__$1;
(statearr_20219_20271[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (35))){
var inst_20166 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20166)){
var statearr_20220_20272 = state_20181__$1;
(statearr_20220_20272[(1)] = (36));

} else {
var statearr_20221_20273 = state_20181__$1;
(statearr_20221_20273[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (19))){
var inst_20108 = (state_20181[(7)]);
var inst_20128 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20108);
var state_20181__$1 = state_20181;
var statearr_20222_20274 = state_20181__$1;
(statearr_20222_20274[(2)] = inst_20128);

(statearr_20222_20274[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (11))){
var inst_20108 = (state_20181[(7)]);
var inst_20112 = (inst_20108 == null);
var inst_20113 = cljs.core.not(inst_20112);
var state_20181__$1 = state_20181;
if(inst_20113){
var statearr_20223_20275 = state_20181__$1;
(statearr_20223_20275[(1)] = (13));

} else {
var statearr_20224_20276 = state_20181__$1;
(statearr_20224_20276[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (9))){
var inst_20083 = (state_20181[(8)]);
var state_20181__$1 = state_20181;
var statearr_20225_20277 = state_20181__$1;
(statearr_20225_20277[(2)] = inst_20083);

(statearr_20225_20277[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (5))){
var state_20181__$1 = state_20181;
var statearr_20226_20278 = state_20181__$1;
(statearr_20226_20278[(2)] = true);

(statearr_20226_20278[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (14))){
var state_20181__$1 = state_20181;
var statearr_20227_20279 = state_20181__$1;
(statearr_20227_20279[(2)] = false);

(statearr_20227_20279[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (26))){
var inst_20141 = (state_20181[(9)]);
var inst_20148 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20141);
var state_20181__$1 = state_20181;
var statearr_20228_20280 = state_20181__$1;
(statearr_20228_20280[(2)] = inst_20148);

(statearr_20228_20280[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (16))){
var state_20181__$1 = state_20181;
var statearr_20229_20281 = state_20181__$1;
(statearr_20229_20281[(2)] = true);

(statearr_20229_20281[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (38))){
var inst_20171 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20230_20282 = state_20181__$1;
(statearr_20230_20282[(2)] = inst_20171);

(statearr_20230_20282[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (30))){
var inst_20141 = (state_20181[(9)]);
var inst_20133 = (state_20181[(13)]);
var inst_20132 = (state_20181[(10)]);
var inst_20158 = cljs.core.empty_QMARK_(inst_20132);
var inst_20159 = (inst_20133.cljs$core$IFn$_invoke$arity$1 ? inst_20133.cljs$core$IFn$_invoke$arity$1(inst_20141) : inst_20133.call(null,inst_20141));
var inst_20160 = cljs.core.not(inst_20159);
var inst_20161 = (inst_20158) && (inst_20160);
var state_20181__$1 = state_20181;
var statearr_20231_20283 = state_20181__$1;
(statearr_20231_20283[(2)] = inst_20161);

(statearr_20231_20283[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (10))){
var inst_20083 = (state_20181[(8)]);
var inst_20104 = (state_20181[(2)]);
var inst_20105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20104,cljs.core.cst$kw$solos);
var inst_20106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20104,cljs.core.cst$kw$mutes);
var inst_20107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20104,cljs.core.cst$kw$reads);
var inst_20108 = inst_20083;
var state_20181__$1 = (function (){var statearr_20232 = state_20181;
(statearr_20232[(7)] = inst_20108);

(statearr_20232[(16)] = inst_20107);

(statearr_20232[(17)] = inst_20106);

(statearr_20232[(18)] = inst_20105);

return statearr_20232;
})();
var statearr_20233_20284 = state_20181__$1;
(statearr_20233_20284[(2)] = null);

(statearr_20233_20284[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (18))){
var inst_20123 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20234_20285 = state_20181__$1;
(statearr_20234_20285[(2)] = inst_20123);

(statearr_20234_20285[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (37))){
var state_20181__$1 = state_20181;
var statearr_20235_20286 = state_20181__$1;
(statearr_20235_20286[(2)] = null);

(statearr_20235_20286[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20182 === (8))){
var inst_20083 = (state_20181[(8)]);
var inst_20101 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20083);
var state_20181__$1 = state_20181;
var statearr_20236_20287 = state_20181__$1;
(statearr_20236_20287[(2)] = inst_20101);

(statearr_20236_20287[(1)] = (10));


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
});})(c__19193__auto___20241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19091__auto__,c__19193__auto___20241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19092__auto__ = null;
var cljs$core$async$mix_$_state_machine__19092__auto____0 = (function (){
var statearr_20237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20237[(0)] = cljs$core$async$mix_$_state_machine__19092__auto__);

(statearr_20237[(1)] = (1));

return statearr_20237;
});
var cljs$core$async$mix_$_state_machine__19092__auto____1 = (function (state_20181){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20181);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20238){if((e20238 instanceof Object)){
var ex__19095__auto__ = e20238;
var statearr_20239_20288 = state_20181;
(statearr_20239_20288[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20181);

return cljs.core.cst$kw$recur;
} else {
throw e20238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20289 = state_20181;
state_20181 = G__20289;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19092__auto__ = function(state_20181){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19092__auto____1.call(this,state_20181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19092__auto____0;
cljs$core$async$mix_$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19092__auto____1;
return cljs$core$async$mix_$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19195__auto__ = (function (){var statearr_20240 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20240[(6)] = c__19193__auto___20241);

return statearr_20240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12247__auto__ = (((p == null))?null:p);
var m__12248__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$4 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__12248__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__12248__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__12248__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12247__auto__ = (((p == null))?null:p);
var m__12248__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__12248__auto__.call(null,p,v,ch));
} else {
var m__12248__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__12248__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20291 = arguments.length;
switch (G__20291) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12247__auto__ = (((p == null))?null:p);
var m__12248__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__12248__auto__.call(null,p));
} else {
var m__12248__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__12248__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12247__auto__ = (((p == null))?null:p);
var m__12248__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__12248__auto__.call(null,p,v));
} else {
var m__12248__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__12248__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__20295 = arguments.length;
switch (G__20295) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__11514__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__11514__auto__,mults){
return (function (p1__20293_SHARP_){
if(cljs.core.truth_((p1__20293_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20293_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20293_SHARP_.call(null,topic)))){
return p1__20293_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20293_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__11514__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20296 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20297){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20297 = meta20297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20298,meta20297__$1){
var self__ = this;
var _20298__$1 = this;
return (new cljs.core.async.t_cljs$core$async20296(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20297__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20298){
var self__ = this;
var _20298__$1 = this;
return self__.meta20297;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta20297], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20296";

cljs.core.async.t_cljs$core$async20296.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async20296");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20296 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20297){
return (new cljs.core.async.t_cljs$core$async20296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20297));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20296(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19193__auto___20416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20416,mults,ensure_mult,p){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20416,mults,ensure_mult,p){
return (function (state_20370){
var state_val_20371 = (state_20370[(1)]);
if((state_val_20371 === (7))){
var inst_20366 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20372_20417 = state_20370__$1;
(statearr_20372_20417[(2)] = inst_20366);

(statearr_20372_20417[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (20))){
var state_20370__$1 = state_20370;
var statearr_20373_20418 = state_20370__$1;
(statearr_20373_20418[(2)] = null);

(statearr_20373_20418[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (1))){
var state_20370__$1 = state_20370;
var statearr_20374_20419 = state_20370__$1;
(statearr_20374_20419[(2)] = null);

(statearr_20374_20419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (24))){
var inst_20349 = (state_20370[(7)]);
var inst_20358 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20349);
var state_20370__$1 = state_20370;
var statearr_20375_20420 = state_20370__$1;
(statearr_20375_20420[(2)] = inst_20358);

(statearr_20375_20420[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (4))){
var inst_20301 = (state_20370[(8)]);
var inst_20301__$1 = (state_20370[(2)]);
var inst_20302 = (inst_20301__$1 == null);
var state_20370__$1 = (function (){var statearr_20376 = state_20370;
(statearr_20376[(8)] = inst_20301__$1);

return statearr_20376;
})();
if(cljs.core.truth_(inst_20302)){
var statearr_20377_20421 = state_20370__$1;
(statearr_20377_20421[(1)] = (5));

} else {
var statearr_20378_20422 = state_20370__$1;
(statearr_20378_20422[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (15))){
var inst_20343 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20379_20423 = state_20370__$1;
(statearr_20379_20423[(2)] = inst_20343);

(statearr_20379_20423[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (21))){
var inst_20363 = (state_20370[(2)]);
var state_20370__$1 = (function (){var statearr_20380 = state_20370;
(statearr_20380[(9)] = inst_20363);

return statearr_20380;
})();
var statearr_20381_20424 = state_20370__$1;
(statearr_20381_20424[(2)] = null);

(statearr_20381_20424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (13))){
var inst_20325 = (state_20370[(10)]);
var inst_20327 = cljs.core.chunked_seq_QMARK_(inst_20325);
var state_20370__$1 = state_20370;
if(inst_20327){
var statearr_20382_20425 = state_20370__$1;
(statearr_20382_20425[(1)] = (16));

} else {
var statearr_20383_20426 = state_20370__$1;
(statearr_20383_20426[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (22))){
var inst_20355 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
if(cljs.core.truth_(inst_20355)){
var statearr_20384_20427 = state_20370__$1;
(statearr_20384_20427[(1)] = (23));

} else {
var statearr_20385_20428 = state_20370__$1;
(statearr_20385_20428[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (6))){
var inst_20349 = (state_20370[(7)]);
var inst_20351 = (state_20370[(11)]);
var inst_20301 = (state_20370[(8)]);
var inst_20349__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20301) : topic_fn.call(null,inst_20301));
var inst_20350 = cljs.core.deref(mults);
var inst_20351__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20350,inst_20349__$1);
var state_20370__$1 = (function (){var statearr_20386 = state_20370;
(statearr_20386[(7)] = inst_20349__$1);

(statearr_20386[(11)] = inst_20351__$1);

return statearr_20386;
})();
if(cljs.core.truth_(inst_20351__$1)){
var statearr_20387_20429 = state_20370__$1;
(statearr_20387_20429[(1)] = (19));

} else {
var statearr_20388_20430 = state_20370__$1;
(statearr_20388_20430[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (25))){
var inst_20360 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20389_20431 = state_20370__$1;
(statearr_20389_20431[(2)] = inst_20360);

(statearr_20389_20431[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (17))){
var inst_20325 = (state_20370[(10)]);
var inst_20334 = cljs.core.first(inst_20325);
var inst_20335 = cljs.core.async.muxch_STAR_(inst_20334);
var inst_20336 = cljs.core.async.close_BANG_(inst_20335);
var inst_20337 = cljs.core.next(inst_20325);
var inst_20311 = inst_20337;
var inst_20312 = null;
var inst_20313 = (0);
var inst_20314 = (0);
var state_20370__$1 = (function (){var statearr_20390 = state_20370;
(statearr_20390[(12)] = inst_20336);

(statearr_20390[(13)] = inst_20311);

(statearr_20390[(14)] = inst_20312);

(statearr_20390[(15)] = inst_20314);

(statearr_20390[(16)] = inst_20313);

return statearr_20390;
})();
var statearr_20391_20432 = state_20370__$1;
(statearr_20391_20432[(2)] = null);

(statearr_20391_20432[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (3))){
var inst_20368 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20370__$1,inst_20368);
} else {
if((state_val_20371 === (12))){
var inst_20345 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20392_20433 = state_20370__$1;
(statearr_20392_20433[(2)] = inst_20345);

(statearr_20392_20433[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (2))){
var state_20370__$1 = state_20370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20370__$1,(4),ch);
} else {
if((state_val_20371 === (23))){
var state_20370__$1 = state_20370;
var statearr_20393_20434 = state_20370__$1;
(statearr_20393_20434[(2)] = null);

(statearr_20393_20434[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (19))){
var inst_20351 = (state_20370[(11)]);
var inst_20301 = (state_20370[(8)]);
var inst_20353 = cljs.core.async.muxch_STAR_(inst_20351);
var state_20370__$1 = state_20370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20370__$1,(22),inst_20353,inst_20301);
} else {
if((state_val_20371 === (11))){
var inst_20311 = (state_20370[(13)]);
var inst_20325 = (state_20370[(10)]);
var inst_20325__$1 = cljs.core.seq(inst_20311);
var state_20370__$1 = (function (){var statearr_20394 = state_20370;
(statearr_20394[(10)] = inst_20325__$1);

return statearr_20394;
})();
if(inst_20325__$1){
var statearr_20395_20435 = state_20370__$1;
(statearr_20395_20435[(1)] = (13));

} else {
var statearr_20396_20436 = state_20370__$1;
(statearr_20396_20436[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (9))){
var inst_20347 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20397_20437 = state_20370__$1;
(statearr_20397_20437[(2)] = inst_20347);

(statearr_20397_20437[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (5))){
var inst_20308 = cljs.core.deref(mults);
var inst_20309 = cljs.core.vals(inst_20308);
var inst_20310 = cljs.core.seq(inst_20309);
var inst_20311 = inst_20310;
var inst_20312 = null;
var inst_20313 = (0);
var inst_20314 = (0);
var state_20370__$1 = (function (){var statearr_20398 = state_20370;
(statearr_20398[(13)] = inst_20311);

(statearr_20398[(14)] = inst_20312);

(statearr_20398[(15)] = inst_20314);

(statearr_20398[(16)] = inst_20313);

return statearr_20398;
})();
var statearr_20399_20438 = state_20370__$1;
(statearr_20399_20438[(2)] = null);

(statearr_20399_20438[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (14))){
var state_20370__$1 = state_20370;
var statearr_20403_20439 = state_20370__$1;
(statearr_20403_20439[(2)] = null);

(statearr_20403_20439[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (16))){
var inst_20325 = (state_20370[(10)]);
var inst_20329 = cljs.core.chunk_first(inst_20325);
var inst_20330 = cljs.core.chunk_rest(inst_20325);
var inst_20331 = cljs.core.count(inst_20329);
var inst_20311 = inst_20330;
var inst_20312 = inst_20329;
var inst_20313 = inst_20331;
var inst_20314 = (0);
var state_20370__$1 = (function (){var statearr_20404 = state_20370;
(statearr_20404[(13)] = inst_20311);

(statearr_20404[(14)] = inst_20312);

(statearr_20404[(15)] = inst_20314);

(statearr_20404[(16)] = inst_20313);

return statearr_20404;
})();
var statearr_20405_20440 = state_20370__$1;
(statearr_20405_20440[(2)] = null);

(statearr_20405_20440[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (10))){
var inst_20311 = (state_20370[(13)]);
var inst_20312 = (state_20370[(14)]);
var inst_20314 = (state_20370[(15)]);
var inst_20313 = (state_20370[(16)]);
var inst_20319 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20312,inst_20314);
var inst_20320 = cljs.core.async.muxch_STAR_(inst_20319);
var inst_20321 = cljs.core.async.close_BANG_(inst_20320);
var inst_20322 = (inst_20314 + (1));
var tmp20400 = inst_20311;
var tmp20401 = inst_20312;
var tmp20402 = inst_20313;
var inst_20311__$1 = tmp20400;
var inst_20312__$1 = tmp20401;
var inst_20313__$1 = tmp20402;
var inst_20314__$1 = inst_20322;
var state_20370__$1 = (function (){var statearr_20406 = state_20370;
(statearr_20406[(17)] = inst_20321);

(statearr_20406[(13)] = inst_20311__$1);

(statearr_20406[(14)] = inst_20312__$1);

(statearr_20406[(15)] = inst_20314__$1);

(statearr_20406[(16)] = inst_20313__$1);

return statearr_20406;
})();
var statearr_20407_20441 = state_20370__$1;
(statearr_20407_20441[(2)] = null);

(statearr_20407_20441[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (18))){
var inst_20340 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20408_20442 = state_20370__$1;
(statearr_20408_20442[(2)] = inst_20340);

(statearr_20408_20442[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20371 === (8))){
var inst_20314 = (state_20370[(15)]);
var inst_20313 = (state_20370[(16)]);
var inst_20316 = (inst_20314 < inst_20313);
var inst_20317 = inst_20316;
var state_20370__$1 = state_20370;
if(cljs.core.truth_(inst_20317)){
var statearr_20409_20443 = state_20370__$1;
(statearr_20409_20443[(1)] = (10));

} else {
var statearr_20410_20444 = state_20370__$1;
(statearr_20410_20444[(1)] = (11));

}

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
});})(c__19193__auto___20416,mults,ensure_mult,p))
;
return ((function (switch__19091__auto__,c__19193__auto___20416,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_20411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20411[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_20411[(1)] = (1));

return statearr_20411;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_20370){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20370);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20412){if((e20412 instanceof Object)){
var ex__19095__auto__ = e20412;
var statearr_20413_20445 = state_20370;
(statearr_20413_20445[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20370);

return cljs.core.cst$kw$recur;
} else {
throw e20412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20446 = state_20370;
state_20370 = G__20446;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_20370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_20370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20416,mults,ensure_mult,p))
})();
var state__19195__auto__ = (function (){var statearr_20414 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20414[(6)] = c__19193__auto___20416);

return statearr_20414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20416,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__20448 = arguments.length;
switch (G__20448) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20451 = arguments.length;
switch (G__20451) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__20454 = arguments.length;
switch (G__20454) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__19193__auto___20521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20521,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20521,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20493){
var state_val_20494 = (state_20493[(1)]);
if((state_val_20494 === (7))){
var state_20493__$1 = state_20493;
var statearr_20495_20522 = state_20493__$1;
(statearr_20495_20522[(2)] = null);

(statearr_20495_20522[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (1))){
var state_20493__$1 = state_20493;
var statearr_20496_20523 = state_20493__$1;
(statearr_20496_20523[(2)] = null);

(statearr_20496_20523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (4))){
var inst_20457 = (state_20493[(7)]);
var inst_20459 = (inst_20457 < cnt);
var state_20493__$1 = state_20493;
if(cljs.core.truth_(inst_20459)){
var statearr_20497_20524 = state_20493__$1;
(statearr_20497_20524[(1)] = (6));

} else {
var statearr_20498_20525 = state_20493__$1;
(statearr_20498_20525[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (15))){
var inst_20489 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20499_20526 = state_20493__$1;
(statearr_20499_20526[(2)] = inst_20489);

(statearr_20499_20526[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (13))){
var inst_20482 = cljs.core.async.close_BANG_(out);
var state_20493__$1 = state_20493;
var statearr_20500_20527 = state_20493__$1;
(statearr_20500_20527[(2)] = inst_20482);

(statearr_20500_20527[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (6))){
var state_20493__$1 = state_20493;
var statearr_20501_20528 = state_20493__$1;
(statearr_20501_20528[(2)] = null);

(statearr_20501_20528[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (3))){
var inst_20491 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20493__$1,inst_20491);
} else {
if((state_val_20494 === (12))){
var inst_20479 = (state_20493[(8)]);
var inst_20479__$1 = (state_20493[(2)]);
var inst_20480 = cljs.core.some(cljs.core.nil_QMARK_,inst_20479__$1);
var state_20493__$1 = (function (){var statearr_20502 = state_20493;
(statearr_20502[(8)] = inst_20479__$1);

return statearr_20502;
})();
if(cljs.core.truth_(inst_20480)){
var statearr_20503_20529 = state_20493__$1;
(statearr_20503_20529[(1)] = (13));

} else {
var statearr_20504_20530 = state_20493__$1;
(statearr_20504_20530[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (2))){
var inst_20456 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20457 = (0);
var state_20493__$1 = (function (){var statearr_20505 = state_20493;
(statearr_20505[(9)] = inst_20456);

(statearr_20505[(7)] = inst_20457);

return statearr_20505;
})();
var statearr_20506_20531 = state_20493__$1;
(statearr_20506_20531[(2)] = null);

(statearr_20506_20531[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (11))){
var inst_20457 = (state_20493[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20493,(10),Object,null,(9));
var inst_20466 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20457) : chs__$1.call(null,inst_20457));
var inst_20467 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20457) : done.call(null,inst_20457));
var inst_20468 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20466,inst_20467);
var state_20493__$1 = state_20493;
var statearr_20507_20532 = state_20493__$1;
(statearr_20507_20532[(2)] = inst_20468);


cljs.core.async.impl.ioc_helpers.process_exception(state_20493__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (9))){
var inst_20457 = (state_20493[(7)]);
var inst_20470 = (state_20493[(2)]);
var inst_20471 = (inst_20457 + (1));
var inst_20457__$1 = inst_20471;
var state_20493__$1 = (function (){var statearr_20508 = state_20493;
(statearr_20508[(10)] = inst_20470);

(statearr_20508[(7)] = inst_20457__$1);

return statearr_20508;
})();
var statearr_20509_20533 = state_20493__$1;
(statearr_20509_20533[(2)] = null);

(statearr_20509_20533[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (5))){
var inst_20477 = (state_20493[(2)]);
var state_20493__$1 = (function (){var statearr_20510 = state_20493;
(statearr_20510[(11)] = inst_20477);

return statearr_20510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,(12),dchan);
} else {
if((state_val_20494 === (14))){
var inst_20479 = (state_20493[(8)]);
var inst_20484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20479);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20493__$1,(16),out,inst_20484);
} else {
if((state_val_20494 === (16))){
var inst_20486 = (state_20493[(2)]);
var state_20493__$1 = (function (){var statearr_20511 = state_20493;
(statearr_20511[(12)] = inst_20486);

return statearr_20511;
})();
var statearr_20512_20534 = state_20493__$1;
(statearr_20512_20534[(2)] = null);

(statearr_20512_20534[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (10))){
var inst_20461 = (state_20493[(2)]);
var inst_20462 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20493__$1 = (function (){var statearr_20513 = state_20493;
(statearr_20513[(13)] = inst_20461);

return statearr_20513;
})();
var statearr_20514_20535 = state_20493__$1;
(statearr_20514_20535[(2)] = inst_20462);


cljs.core.async.impl.ioc_helpers.process_exception(state_20493__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20494 === (8))){
var inst_20475 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20515_20536 = state_20493__$1;
(statearr_20515_20536[(2)] = inst_20475);

(statearr_20515_20536[(1)] = (5));


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
});})(c__19193__auto___20521,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19091__auto__,c__19193__auto___20521,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_20516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20516[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_20516[(1)] = (1));

return statearr_20516;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_20493){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20493);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20517){if((e20517 instanceof Object)){
var ex__19095__auto__ = e20517;
var statearr_20518_20537 = state_20493;
(statearr_20518_20537[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20493);

return cljs.core.cst$kw$recur;
} else {
throw e20517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20538 = state_20493;
state_20493 = G__20538;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_20493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_20493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20521,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19195__auto__ = (function (){var statearr_20519 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20519[(6)] = c__19193__auto___20521);

return statearr_20519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20521,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20541 = arguments.length;
switch (G__20541) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19193__auto___20595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20595,out){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20595,out){
return (function (state_20573){
var state_val_20574 = (state_20573[(1)]);
if((state_val_20574 === (7))){
var inst_20553 = (state_20573[(7)]);
var inst_20552 = (state_20573[(8)]);
var inst_20552__$1 = (state_20573[(2)]);
var inst_20553__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20552__$1,(0),null);
var inst_20554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20552__$1,(1),null);
var inst_20555 = (inst_20553__$1 == null);
var state_20573__$1 = (function (){var statearr_20575 = state_20573;
(statearr_20575[(7)] = inst_20553__$1);

(statearr_20575[(8)] = inst_20552__$1);

(statearr_20575[(9)] = inst_20554);

return statearr_20575;
})();
if(cljs.core.truth_(inst_20555)){
var statearr_20576_20596 = state_20573__$1;
(statearr_20576_20596[(1)] = (8));

} else {
var statearr_20577_20597 = state_20573__$1;
(statearr_20577_20597[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20574 === (1))){
var inst_20542 = cljs.core.vec(chs);
var inst_20543 = inst_20542;
var state_20573__$1 = (function (){var statearr_20578 = state_20573;
(statearr_20578[(10)] = inst_20543);

return statearr_20578;
})();
var statearr_20579_20598 = state_20573__$1;
(statearr_20579_20598[(2)] = null);

(statearr_20579_20598[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20574 === (4))){
var inst_20543 = (state_20573[(10)]);
var state_20573__$1 = state_20573;
return cljs.core.async.ioc_alts_BANG_(state_20573__$1,(7),inst_20543);
} else {
if((state_val_20574 === (6))){
var inst_20569 = (state_20573[(2)]);
var state_20573__$1 = state_20573;
var statearr_20580_20599 = state_20573__$1;
(statearr_20580_20599[(2)] = inst_20569);

(statearr_20580_20599[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20574 === (3))){
var inst_20571 = (state_20573[(2)]);
var state_20573__$1 = state_20573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20573__$1,inst_20571);
} else {
if((state_val_20574 === (2))){
var inst_20543 = (state_20573[(10)]);
var inst_20545 = cljs.core.count(inst_20543);
var inst_20546 = (inst_20545 > (0));
var state_20573__$1 = state_20573;
if(cljs.core.truth_(inst_20546)){
var statearr_20582_20600 = state_20573__$1;
(statearr_20582_20600[(1)] = (4));

} else {
var statearr_20583_20601 = state_20573__$1;
(statearr_20583_20601[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20574 === (11))){
var inst_20543 = (state_20573[(10)]);
var inst_20562 = (state_20573[(2)]);
var tmp20581 = inst_20543;
var inst_20543__$1 = tmp20581;
var state_20573__$1 = (function (){var statearr_20584 = state_20573;
(statearr_20584[(10)] = inst_20543__$1);

(statearr_20584[(11)] = inst_20562);

return statearr_20584;
})();
var statearr_20585_20602 = state_20573__$1;
(statearr_20585_20602[(2)] = null);

(statearr_20585_20602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20574 === (9))){
var inst_20553 = (state_20573[(7)]);
var state_20573__$1 = state_20573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20573__$1,(11),out,inst_20553);
} else {
if((state_val_20574 === (5))){
var inst_20567 = cljs.core.async.close_BANG_(out);
var state_20573__$1 = state_20573;
var statearr_20586_20603 = state_20573__$1;
(statearr_20586_20603[(2)] = inst_20567);

(statearr_20586_20603[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20574 === (10))){
var inst_20565 = (state_20573[(2)]);
var state_20573__$1 = state_20573;
var statearr_20587_20604 = state_20573__$1;
(statearr_20587_20604[(2)] = inst_20565);

(statearr_20587_20604[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20574 === (8))){
var inst_20543 = (state_20573[(10)]);
var inst_20553 = (state_20573[(7)]);
var inst_20552 = (state_20573[(8)]);
var inst_20554 = (state_20573[(9)]);
var inst_20557 = (function (){var cs = inst_20543;
var vec__20548 = inst_20552;
var v = inst_20553;
var c = inst_20554;
return ((function (cs,vec__20548,v,c,inst_20543,inst_20553,inst_20552,inst_20554,state_val_20574,c__19193__auto___20595,out){
return (function (p1__20539_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20539_SHARP_);
});
;})(cs,vec__20548,v,c,inst_20543,inst_20553,inst_20552,inst_20554,state_val_20574,c__19193__auto___20595,out))
})();
var inst_20558 = cljs.core.filterv(inst_20557,inst_20543);
var inst_20543__$1 = inst_20558;
var state_20573__$1 = (function (){var statearr_20588 = state_20573;
(statearr_20588[(10)] = inst_20543__$1);

return statearr_20588;
})();
var statearr_20589_20605 = state_20573__$1;
(statearr_20589_20605[(2)] = null);

(statearr_20589_20605[(1)] = (2));


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
});})(c__19193__auto___20595,out))
;
return ((function (switch__19091__auto__,c__19193__auto___20595,out){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_20590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20590[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_20590[(1)] = (1));

return statearr_20590;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_20573){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20573);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20591){if((e20591 instanceof Object)){
var ex__19095__auto__ = e20591;
var statearr_20592_20606 = state_20573;
(statearr_20592_20606[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20573);

return cljs.core.cst$kw$recur;
} else {
throw e20591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20607 = state_20573;
state_20573 = G__20607;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_20573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_20573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20595,out))
})();
var state__19195__auto__ = (function (){var statearr_20593 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20593[(6)] = c__19193__auto___20595);

return statearr_20593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20595,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20609 = arguments.length;
switch (G__20609) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19193__auto___20654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20654,out){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20654,out){
return (function (state_20633){
var state_val_20634 = (state_20633[(1)]);
if((state_val_20634 === (7))){
var inst_20615 = (state_20633[(7)]);
var inst_20615__$1 = (state_20633[(2)]);
var inst_20616 = (inst_20615__$1 == null);
var inst_20617 = cljs.core.not(inst_20616);
var state_20633__$1 = (function (){var statearr_20635 = state_20633;
(statearr_20635[(7)] = inst_20615__$1);

return statearr_20635;
})();
if(inst_20617){
var statearr_20636_20655 = state_20633__$1;
(statearr_20636_20655[(1)] = (8));

} else {
var statearr_20637_20656 = state_20633__$1;
(statearr_20637_20656[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (1))){
var inst_20610 = (0);
var state_20633__$1 = (function (){var statearr_20638 = state_20633;
(statearr_20638[(8)] = inst_20610);

return statearr_20638;
})();
var statearr_20639_20657 = state_20633__$1;
(statearr_20639_20657[(2)] = null);

(statearr_20639_20657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (4))){
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20633__$1,(7),ch);
} else {
if((state_val_20634 === (6))){
var inst_20628 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20640_20658 = state_20633__$1;
(statearr_20640_20658[(2)] = inst_20628);

(statearr_20640_20658[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (3))){
var inst_20630 = (state_20633[(2)]);
var inst_20631 = cljs.core.async.close_BANG_(out);
var state_20633__$1 = (function (){var statearr_20641 = state_20633;
(statearr_20641[(9)] = inst_20630);

return statearr_20641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20633__$1,inst_20631);
} else {
if((state_val_20634 === (2))){
var inst_20610 = (state_20633[(8)]);
var inst_20612 = (inst_20610 < n);
var state_20633__$1 = state_20633;
if(cljs.core.truth_(inst_20612)){
var statearr_20642_20659 = state_20633__$1;
(statearr_20642_20659[(1)] = (4));

} else {
var statearr_20643_20660 = state_20633__$1;
(statearr_20643_20660[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (11))){
var inst_20610 = (state_20633[(8)]);
var inst_20620 = (state_20633[(2)]);
var inst_20621 = (inst_20610 + (1));
var inst_20610__$1 = inst_20621;
var state_20633__$1 = (function (){var statearr_20644 = state_20633;
(statearr_20644[(8)] = inst_20610__$1);

(statearr_20644[(10)] = inst_20620);

return statearr_20644;
})();
var statearr_20645_20661 = state_20633__$1;
(statearr_20645_20661[(2)] = null);

(statearr_20645_20661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (9))){
var state_20633__$1 = state_20633;
var statearr_20646_20662 = state_20633__$1;
(statearr_20646_20662[(2)] = null);

(statearr_20646_20662[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (5))){
var state_20633__$1 = state_20633;
var statearr_20647_20663 = state_20633__$1;
(statearr_20647_20663[(2)] = null);

(statearr_20647_20663[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (10))){
var inst_20625 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20648_20664 = state_20633__$1;
(statearr_20648_20664[(2)] = inst_20625);

(statearr_20648_20664[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20634 === (8))){
var inst_20615 = (state_20633[(7)]);
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20633__$1,(11),out,inst_20615);
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
});})(c__19193__auto___20654,out))
;
return ((function (switch__19091__auto__,c__19193__auto___20654,out){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_20649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20649[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_20649[(1)] = (1));

return statearr_20649;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_20633){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20633);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20650){if((e20650 instanceof Object)){
var ex__19095__auto__ = e20650;
var statearr_20651_20665 = state_20633;
(statearr_20651_20665[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20633);

return cljs.core.cst$kw$recur;
} else {
throw e20650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20666 = state_20633;
state_20633 = G__20666;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_20633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_20633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20654,out))
})();
var state__19195__auto__ = (function (){var statearr_20652 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20652[(6)] = c__19193__auto___20654);

return statearr_20652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20654,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20668 = (function (f,ch,meta20669){
this.f = f;
this.ch = ch;
this.meta20669 = meta20669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20670,meta20669__$1){
var self__ = this;
var _20670__$1 = this;
return (new cljs.core.async.t_cljs$core$async20668(self__.f,self__.ch,meta20669__$1));
});

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20670){
var self__ = this;
var _20670__$1 = this;
return self__.meta20669;
});

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20671 = (function (f,ch,meta20669,_,fn1,meta20672){
this.f = f;
this.ch = ch;
this.meta20669 = meta20669;
this._ = _;
this.fn1 = fn1;
this.meta20672 = meta20672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20673,meta20672__$1){
var self__ = this;
var _20673__$1 = this;
return (new cljs.core.async.t_cljs$core$async20671(self__.f,self__.ch,self__.meta20669,self__._,self__.fn1,meta20672__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20673){
var self__ = this;
var _20673__$1 = this;
return self__.meta20672;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20671.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20667_SHARP_){
var G__20674 = (((p1__20667_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20667_SHARP_) : self__.f.call(null,p1__20667_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20674) : f1.call(null,G__20674));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20671.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20669,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async20668], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta20672], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20671";

cljs.core.async.t_cljs$core$async20671.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async20671");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20671 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20671(f__$1,ch__$1,meta20669__$1,___$2,fn1__$1,meta20672){
return (new cljs.core.async.t_cljs$core$async20671(f__$1,ch__$1,meta20669__$1,___$2,fn1__$1,meta20672));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20671(self__.f,self__.ch,self__.meta20669,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11502__auto__ = ret;
if(cljs.core.truth_(and__11502__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__11502__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20675 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20675) : self__.f.call(null,G__20675));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20668.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20669], null);
});

cljs.core.async.t_cljs$core$async20668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20668";

cljs.core.async.t_cljs$core$async20668.cljs$lang$ctorPrWriter = (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async20668");
});

cljs.core.async.__GT_t_cljs$core$async20668 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20668(f__$1,ch__$1,meta20669){
return (new cljs.core.async.t_cljs$core$async20668(f__$1,ch__$1,meta20669));
});

}

return (new cljs.core.async.t_cljs$core$async20668(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20676 = (function (f,ch,meta20677){
this.f = f;
this.ch = ch;
this.meta20677 = meta20677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20678,meta20677__$1){
var self__ = this;
var _20678__$1 = this;
return (new cljs.core.async.t_cljs$core$async20676(self__.f,self__.ch,meta20677__$1));
});

cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20678){
var self__ = this;
var _20678__$1 = this;
return self__.meta20677;
});

cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async20676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20677], null);
});

cljs.core.async.t_cljs$core$async20676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20676";

cljs.core.async.t_cljs$core$async20676.cljs$lang$ctorPrWriter = (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async20676");
});

cljs.core.async.__GT_t_cljs$core$async20676 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20676(f__$1,ch__$1,meta20677){
return (new cljs.core.async.t_cljs$core$async20676(f__$1,ch__$1,meta20677));
});

}

return (new cljs.core.async.t_cljs$core$async20676(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20679 = (function (p,ch,meta20680){
this.p = p;
this.ch = ch;
this.meta20680 = meta20680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20681,meta20680__$1){
var self__ = this;
var _20681__$1 = this;
return (new cljs.core.async.t_cljs$core$async20679(self__.p,self__.ch,meta20680__$1));
});

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20681){
var self__ = this;
var _20681__$1 = this;
return self__.meta20680;
});

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20680], null);
});

cljs.core.async.t_cljs$core$async20679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20679";

cljs.core.async.t_cljs$core$async20679.cljs$lang$ctorPrWriter = (function (this__12185__auto__,writer__12186__auto__,opt__12187__auto__){
return cljs.core._write(writer__12186__auto__,"cljs.core.async/t_cljs$core$async20679");
});

cljs.core.async.__GT_t_cljs$core$async20679 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20679(p__$1,ch__$1,meta20680){
return (new cljs.core.async.t_cljs$core$async20679(p__$1,ch__$1,meta20680));
});

}

return (new cljs.core.async.t_cljs$core$async20679(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20683 = arguments.length;
switch (G__20683) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19193__auto___20723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20723,out){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20723,out){
return (function (state_20704){
var state_val_20705 = (state_20704[(1)]);
if((state_val_20705 === (7))){
var inst_20700 = (state_20704[(2)]);
var state_20704__$1 = state_20704;
var statearr_20706_20724 = state_20704__$1;
(statearr_20706_20724[(2)] = inst_20700);

(statearr_20706_20724[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (1))){
var state_20704__$1 = state_20704;
var statearr_20707_20725 = state_20704__$1;
(statearr_20707_20725[(2)] = null);

(statearr_20707_20725[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (4))){
var inst_20686 = (state_20704[(7)]);
var inst_20686__$1 = (state_20704[(2)]);
var inst_20687 = (inst_20686__$1 == null);
var state_20704__$1 = (function (){var statearr_20708 = state_20704;
(statearr_20708[(7)] = inst_20686__$1);

return statearr_20708;
})();
if(cljs.core.truth_(inst_20687)){
var statearr_20709_20726 = state_20704__$1;
(statearr_20709_20726[(1)] = (5));

} else {
var statearr_20710_20727 = state_20704__$1;
(statearr_20710_20727[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (6))){
var inst_20686 = (state_20704[(7)]);
var inst_20691 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20686) : p.call(null,inst_20686));
var state_20704__$1 = state_20704;
if(cljs.core.truth_(inst_20691)){
var statearr_20711_20728 = state_20704__$1;
(statearr_20711_20728[(1)] = (8));

} else {
var statearr_20712_20729 = state_20704__$1;
(statearr_20712_20729[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (3))){
var inst_20702 = (state_20704[(2)]);
var state_20704__$1 = state_20704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20704__$1,inst_20702);
} else {
if((state_val_20705 === (2))){
var state_20704__$1 = state_20704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20704__$1,(4),ch);
} else {
if((state_val_20705 === (11))){
var inst_20694 = (state_20704[(2)]);
var state_20704__$1 = state_20704;
var statearr_20713_20730 = state_20704__$1;
(statearr_20713_20730[(2)] = inst_20694);

(statearr_20713_20730[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (9))){
var state_20704__$1 = state_20704;
var statearr_20714_20731 = state_20704__$1;
(statearr_20714_20731[(2)] = null);

(statearr_20714_20731[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (5))){
var inst_20689 = cljs.core.async.close_BANG_(out);
var state_20704__$1 = state_20704;
var statearr_20715_20732 = state_20704__$1;
(statearr_20715_20732[(2)] = inst_20689);

(statearr_20715_20732[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (10))){
var inst_20697 = (state_20704[(2)]);
var state_20704__$1 = (function (){var statearr_20716 = state_20704;
(statearr_20716[(8)] = inst_20697);

return statearr_20716;
})();
var statearr_20717_20733 = state_20704__$1;
(statearr_20717_20733[(2)] = null);

(statearr_20717_20733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20705 === (8))){
var inst_20686 = (state_20704[(7)]);
var state_20704__$1 = state_20704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20704__$1,(11),out,inst_20686);
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
});})(c__19193__auto___20723,out))
;
return ((function (switch__19091__auto__,c__19193__auto___20723,out){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_20718 = [null,null,null,null,null,null,null,null,null];
(statearr_20718[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_20718[(1)] = (1));

return statearr_20718;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_20704){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20704);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20719){if((e20719 instanceof Object)){
var ex__19095__auto__ = e20719;
var statearr_20720_20734 = state_20704;
(statearr_20720_20734[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20704);

return cljs.core.cst$kw$recur;
} else {
throw e20719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20735 = state_20704;
state_20704 = G__20735;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_20704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_20704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20723,out))
})();
var state__19195__auto__ = (function (){var statearr_20721 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20721[(6)] = c__19193__auto___20723);

return statearr_20721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20723,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20737 = arguments.length;
switch (G__20737) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19193__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto__){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto__){
return (function (state_20800){
var state_val_20801 = (state_20800[(1)]);
if((state_val_20801 === (7))){
var inst_20796 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20802_20840 = state_20800__$1;
(statearr_20802_20840[(2)] = inst_20796);

(statearr_20802_20840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (20))){
var inst_20766 = (state_20800[(7)]);
var inst_20777 = (state_20800[(2)]);
var inst_20778 = cljs.core.next(inst_20766);
var inst_20752 = inst_20778;
var inst_20753 = null;
var inst_20754 = (0);
var inst_20755 = (0);
var state_20800__$1 = (function (){var statearr_20803 = state_20800;
(statearr_20803[(8)] = inst_20777);

(statearr_20803[(9)] = inst_20753);

(statearr_20803[(10)] = inst_20754);

(statearr_20803[(11)] = inst_20752);

(statearr_20803[(12)] = inst_20755);

return statearr_20803;
})();
var statearr_20804_20841 = state_20800__$1;
(statearr_20804_20841[(2)] = null);

(statearr_20804_20841[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (1))){
var state_20800__$1 = state_20800;
var statearr_20805_20842 = state_20800__$1;
(statearr_20805_20842[(2)] = null);

(statearr_20805_20842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (4))){
var inst_20741 = (state_20800[(13)]);
var inst_20741__$1 = (state_20800[(2)]);
var inst_20742 = (inst_20741__$1 == null);
var state_20800__$1 = (function (){var statearr_20806 = state_20800;
(statearr_20806[(13)] = inst_20741__$1);

return statearr_20806;
})();
if(cljs.core.truth_(inst_20742)){
var statearr_20807_20843 = state_20800__$1;
(statearr_20807_20843[(1)] = (5));

} else {
var statearr_20808_20844 = state_20800__$1;
(statearr_20808_20844[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (15))){
var state_20800__$1 = state_20800;
var statearr_20812_20845 = state_20800__$1;
(statearr_20812_20845[(2)] = null);

(statearr_20812_20845[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (21))){
var state_20800__$1 = state_20800;
var statearr_20813_20846 = state_20800__$1;
(statearr_20813_20846[(2)] = null);

(statearr_20813_20846[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (13))){
var inst_20753 = (state_20800[(9)]);
var inst_20754 = (state_20800[(10)]);
var inst_20752 = (state_20800[(11)]);
var inst_20755 = (state_20800[(12)]);
var inst_20762 = (state_20800[(2)]);
var inst_20763 = (inst_20755 + (1));
var tmp20809 = inst_20753;
var tmp20810 = inst_20754;
var tmp20811 = inst_20752;
var inst_20752__$1 = tmp20811;
var inst_20753__$1 = tmp20809;
var inst_20754__$1 = tmp20810;
var inst_20755__$1 = inst_20763;
var state_20800__$1 = (function (){var statearr_20814 = state_20800;
(statearr_20814[(14)] = inst_20762);

(statearr_20814[(9)] = inst_20753__$1);

(statearr_20814[(10)] = inst_20754__$1);

(statearr_20814[(11)] = inst_20752__$1);

(statearr_20814[(12)] = inst_20755__$1);

return statearr_20814;
})();
var statearr_20815_20847 = state_20800__$1;
(statearr_20815_20847[(2)] = null);

(statearr_20815_20847[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (22))){
var state_20800__$1 = state_20800;
var statearr_20816_20848 = state_20800__$1;
(statearr_20816_20848[(2)] = null);

(statearr_20816_20848[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (6))){
var inst_20741 = (state_20800[(13)]);
var inst_20750 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20741) : f.call(null,inst_20741));
var inst_20751 = cljs.core.seq(inst_20750);
var inst_20752 = inst_20751;
var inst_20753 = null;
var inst_20754 = (0);
var inst_20755 = (0);
var state_20800__$1 = (function (){var statearr_20817 = state_20800;
(statearr_20817[(9)] = inst_20753);

(statearr_20817[(10)] = inst_20754);

(statearr_20817[(11)] = inst_20752);

(statearr_20817[(12)] = inst_20755);

return statearr_20817;
})();
var statearr_20818_20849 = state_20800__$1;
(statearr_20818_20849[(2)] = null);

(statearr_20818_20849[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (17))){
var inst_20766 = (state_20800[(7)]);
var inst_20770 = cljs.core.chunk_first(inst_20766);
var inst_20771 = cljs.core.chunk_rest(inst_20766);
var inst_20772 = cljs.core.count(inst_20770);
var inst_20752 = inst_20771;
var inst_20753 = inst_20770;
var inst_20754 = inst_20772;
var inst_20755 = (0);
var state_20800__$1 = (function (){var statearr_20819 = state_20800;
(statearr_20819[(9)] = inst_20753);

(statearr_20819[(10)] = inst_20754);

(statearr_20819[(11)] = inst_20752);

(statearr_20819[(12)] = inst_20755);

return statearr_20819;
})();
var statearr_20820_20850 = state_20800__$1;
(statearr_20820_20850[(2)] = null);

(statearr_20820_20850[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (3))){
var inst_20798 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20800__$1,inst_20798);
} else {
if((state_val_20801 === (12))){
var inst_20786 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20821_20851 = state_20800__$1;
(statearr_20821_20851[(2)] = inst_20786);

(statearr_20821_20851[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (2))){
var state_20800__$1 = state_20800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20800__$1,(4),in$);
} else {
if((state_val_20801 === (23))){
var inst_20794 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20822_20852 = state_20800__$1;
(statearr_20822_20852[(2)] = inst_20794);

(statearr_20822_20852[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (19))){
var inst_20781 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20823_20853 = state_20800__$1;
(statearr_20823_20853[(2)] = inst_20781);

(statearr_20823_20853[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (11))){
var inst_20766 = (state_20800[(7)]);
var inst_20752 = (state_20800[(11)]);
var inst_20766__$1 = cljs.core.seq(inst_20752);
var state_20800__$1 = (function (){var statearr_20824 = state_20800;
(statearr_20824[(7)] = inst_20766__$1);

return statearr_20824;
})();
if(inst_20766__$1){
var statearr_20825_20854 = state_20800__$1;
(statearr_20825_20854[(1)] = (14));

} else {
var statearr_20826_20855 = state_20800__$1;
(statearr_20826_20855[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (9))){
var inst_20788 = (state_20800[(2)]);
var inst_20789 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20800__$1 = (function (){var statearr_20827 = state_20800;
(statearr_20827[(15)] = inst_20788);

return statearr_20827;
})();
if(cljs.core.truth_(inst_20789)){
var statearr_20828_20856 = state_20800__$1;
(statearr_20828_20856[(1)] = (21));

} else {
var statearr_20829_20857 = state_20800__$1;
(statearr_20829_20857[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (5))){
var inst_20744 = cljs.core.async.close_BANG_(out);
var state_20800__$1 = state_20800;
var statearr_20830_20858 = state_20800__$1;
(statearr_20830_20858[(2)] = inst_20744);

(statearr_20830_20858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (14))){
var inst_20766 = (state_20800[(7)]);
var inst_20768 = cljs.core.chunked_seq_QMARK_(inst_20766);
var state_20800__$1 = state_20800;
if(inst_20768){
var statearr_20831_20859 = state_20800__$1;
(statearr_20831_20859[(1)] = (17));

} else {
var statearr_20832_20860 = state_20800__$1;
(statearr_20832_20860[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (16))){
var inst_20784 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20833_20861 = state_20800__$1;
(statearr_20833_20861[(2)] = inst_20784);

(statearr_20833_20861[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20801 === (10))){
var inst_20753 = (state_20800[(9)]);
var inst_20755 = (state_20800[(12)]);
var inst_20760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20753,inst_20755);
var state_20800__$1 = state_20800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20800__$1,(13),out,inst_20760);
} else {
if((state_val_20801 === (18))){
var inst_20766 = (state_20800[(7)]);
var inst_20775 = cljs.core.first(inst_20766);
var state_20800__$1 = state_20800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20800__$1,(20),out,inst_20775);
} else {
if((state_val_20801 === (8))){
var inst_20754 = (state_20800[(10)]);
var inst_20755 = (state_20800[(12)]);
var inst_20757 = (inst_20755 < inst_20754);
var inst_20758 = inst_20757;
var state_20800__$1 = state_20800;
if(cljs.core.truth_(inst_20758)){
var statearr_20834_20862 = state_20800__$1;
(statearr_20834_20862[(1)] = (10));

} else {
var statearr_20835_20863 = state_20800__$1;
(statearr_20835_20863[(1)] = (11));

}

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
});})(c__19193__auto__))
;
return ((function (switch__19091__auto__,c__19193__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19092__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19092__auto____0 = (function (){
var statearr_20836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20836[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19092__auto__);

(statearr_20836[(1)] = (1));

return statearr_20836;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19092__auto____1 = (function (state_20800){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20800);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20837){if((e20837 instanceof Object)){
var ex__19095__auto__ = e20837;
var statearr_20838_20864 = state_20800;
(statearr_20838_20864[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20800);

return cljs.core.cst$kw$recur;
} else {
throw e20837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20865 = state_20800;
state_20800 = G__20865;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19092__auto__ = function(state_20800){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19092__auto____1.call(this,state_20800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19092__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19092__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto__))
})();
var state__19195__auto__ = (function (){var statearr_20839 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20839[(6)] = c__19193__auto__);

return statearr_20839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto__))
);

return c__19193__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20867 = arguments.length;
switch (G__20867) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20870 = arguments.length;
switch (G__20870) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20873 = arguments.length;
switch (G__20873) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19193__auto___20920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___20920,out){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___20920,out){
return (function (state_20897){
var state_val_20898 = (state_20897[(1)]);
if((state_val_20898 === (7))){
var inst_20892 = (state_20897[(2)]);
var state_20897__$1 = state_20897;
var statearr_20899_20921 = state_20897__$1;
(statearr_20899_20921[(2)] = inst_20892);

(statearr_20899_20921[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20898 === (1))){
var inst_20874 = null;
var state_20897__$1 = (function (){var statearr_20900 = state_20897;
(statearr_20900[(7)] = inst_20874);

return statearr_20900;
})();
var statearr_20901_20922 = state_20897__$1;
(statearr_20901_20922[(2)] = null);

(statearr_20901_20922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20898 === (4))){
var inst_20877 = (state_20897[(8)]);
var inst_20877__$1 = (state_20897[(2)]);
var inst_20878 = (inst_20877__$1 == null);
var inst_20879 = cljs.core.not(inst_20878);
var state_20897__$1 = (function (){var statearr_20902 = state_20897;
(statearr_20902[(8)] = inst_20877__$1);

return statearr_20902;
})();
if(inst_20879){
var statearr_20903_20923 = state_20897__$1;
(statearr_20903_20923[(1)] = (5));

} else {
var statearr_20904_20924 = state_20897__$1;
(statearr_20904_20924[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20898 === (6))){
var state_20897__$1 = state_20897;
var statearr_20905_20925 = state_20897__$1;
(statearr_20905_20925[(2)] = null);

(statearr_20905_20925[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20898 === (3))){
var inst_20894 = (state_20897[(2)]);
var inst_20895 = cljs.core.async.close_BANG_(out);
var state_20897__$1 = (function (){var statearr_20906 = state_20897;
(statearr_20906[(9)] = inst_20894);

return statearr_20906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20897__$1,inst_20895);
} else {
if((state_val_20898 === (2))){
var state_20897__$1 = state_20897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20897__$1,(4),ch);
} else {
if((state_val_20898 === (11))){
var inst_20877 = (state_20897[(8)]);
var inst_20886 = (state_20897[(2)]);
var inst_20874 = inst_20877;
var state_20897__$1 = (function (){var statearr_20907 = state_20897;
(statearr_20907[(7)] = inst_20874);

(statearr_20907[(10)] = inst_20886);

return statearr_20907;
})();
var statearr_20908_20926 = state_20897__$1;
(statearr_20908_20926[(2)] = null);

(statearr_20908_20926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20898 === (9))){
var inst_20877 = (state_20897[(8)]);
var state_20897__$1 = state_20897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20897__$1,(11),out,inst_20877);
} else {
if((state_val_20898 === (5))){
var inst_20877 = (state_20897[(8)]);
var inst_20874 = (state_20897[(7)]);
var inst_20881 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20877,inst_20874);
var state_20897__$1 = state_20897;
if(inst_20881){
var statearr_20910_20927 = state_20897__$1;
(statearr_20910_20927[(1)] = (8));

} else {
var statearr_20911_20928 = state_20897__$1;
(statearr_20911_20928[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20898 === (10))){
var inst_20889 = (state_20897[(2)]);
var state_20897__$1 = state_20897;
var statearr_20912_20929 = state_20897__$1;
(statearr_20912_20929[(2)] = inst_20889);

(statearr_20912_20929[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20898 === (8))){
var inst_20874 = (state_20897[(7)]);
var tmp20909 = inst_20874;
var inst_20874__$1 = tmp20909;
var state_20897__$1 = (function (){var statearr_20913 = state_20897;
(statearr_20913[(7)] = inst_20874__$1);

return statearr_20913;
})();
var statearr_20914_20930 = state_20897__$1;
(statearr_20914_20930[(2)] = null);

(statearr_20914_20930[(1)] = (2));


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
});})(c__19193__auto___20920,out))
;
return ((function (switch__19091__auto__,c__19193__auto___20920,out){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_20915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20915[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_20915[(1)] = (1));

return statearr_20915;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_20897){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20897);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20916){if((e20916 instanceof Object)){
var ex__19095__auto__ = e20916;
var statearr_20917_20931 = state_20897;
(statearr_20917_20931[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20897);

return cljs.core.cst$kw$recur;
} else {
throw e20916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__20932 = state_20897;
state_20897 = G__20932;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_20897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_20897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___20920,out))
})();
var state__19195__auto__ = (function (){var statearr_20918 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20918[(6)] = c__19193__auto___20920);

return statearr_20918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___20920,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20934 = arguments.length;
switch (G__20934) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19193__auto___21000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___21000,out){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___21000,out){
return (function (state_20972){
var state_val_20973 = (state_20972[(1)]);
if((state_val_20973 === (7))){
var inst_20968 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20974_21001 = state_20972__$1;
(statearr_20974_21001[(2)] = inst_20968);

(statearr_20974_21001[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (1))){
var inst_20935 = (new Array(n));
var inst_20936 = inst_20935;
var inst_20937 = (0);
var state_20972__$1 = (function (){var statearr_20975 = state_20972;
(statearr_20975[(7)] = inst_20936);

(statearr_20975[(8)] = inst_20937);

return statearr_20975;
})();
var statearr_20976_21002 = state_20972__$1;
(statearr_20976_21002[(2)] = null);

(statearr_20976_21002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (4))){
var inst_20940 = (state_20972[(9)]);
var inst_20940__$1 = (state_20972[(2)]);
var inst_20941 = (inst_20940__$1 == null);
var inst_20942 = cljs.core.not(inst_20941);
var state_20972__$1 = (function (){var statearr_20977 = state_20972;
(statearr_20977[(9)] = inst_20940__$1);

return statearr_20977;
})();
if(inst_20942){
var statearr_20978_21003 = state_20972__$1;
(statearr_20978_21003[(1)] = (5));

} else {
var statearr_20979_21004 = state_20972__$1;
(statearr_20979_21004[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (15))){
var inst_20962 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20980_21005 = state_20972__$1;
(statearr_20980_21005[(2)] = inst_20962);

(statearr_20980_21005[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (13))){
var state_20972__$1 = state_20972;
var statearr_20981_21006 = state_20972__$1;
(statearr_20981_21006[(2)] = null);

(statearr_20981_21006[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (6))){
var inst_20937 = (state_20972[(8)]);
var inst_20958 = (inst_20937 > (0));
var state_20972__$1 = state_20972;
if(cljs.core.truth_(inst_20958)){
var statearr_20982_21007 = state_20972__$1;
(statearr_20982_21007[(1)] = (12));

} else {
var statearr_20983_21008 = state_20972__$1;
(statearr_20983_21008[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (3))){
var inst_20970 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20972__$1,inst_20970);
} else {
if((state_val_20973 === (12))){
var inst_20936 = (state_20972[(7)]);
var inst_20960 = cljs.core.vec(inst_20936);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20972__$1,(15),out,inst_20960);
} else {
if((state_val_20973 === (2))){
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20972__$1,(4),ch);
} else {
if((state_val_20973 === (11))){
var inst_20952 = (state_20972[(2)]);
var inst_20953 = (new Array(n));
var inst_20936 = inst_20953;
var inst_20937 = (0);
var state_20972__$1 = (function (){var statearr_20984 = state_20972;
(statearr_20984[(7)] = inst_20936);

(statearr_20984[(10)] = inst_20952);

(statearr_20984[(8)] = inst_20937);

return statearr_20984;
})();
var statearr_20985_21009 = state_20972__$1;
(statearr_20985_21009[(2)] = null);

(statearr_20985_21009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (9))){
var inst_20936 = (state_20972[(7)]);
var inst_20950 = cljs.core.vec(inst_20936);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20972__$1,(11),out,inst_20950);
} else {
if((state_val_20973 === (5))){
var inst_20945 = (state_20972[(11)]);
var inst_20940 = (state_20972[(9)]);
var inst_20936 = (state_20972[(7)]);
var inst_20937 = (state_20972[(8)]);
var inst_20944 = (inst_20936[inst_20937] = inst_20940);
var inst_20945__$1 = (inst_20937 + (1));
var inst_20946 = (inst_20945__$1 < n);
var state_20972__$1 = (function (){var statearr_20986 = state_20972;
(statearr_20986[(11)] = inst_20945__$1);

(statearr_20986[(12)] = inst_20944);

return statearr_20986;
})();
if(cljs.core.truth_(inst_20946)){
var statearr_20987_21010 = state_20972__$1;
(statearr_20987_21010[(1)] = (8));

} else {
var statearr_20988_21011 = state_20972__$1;
(statearr_20988_21011[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (14))){
var inst_20965 = (state_20972[(2)]);
var inst_20966 = cljs.core.async.close_BANG_(out);
var state_20972__$1 = (function (){var statearr_20990 = state_20972;
(statearr_20990[(13)] = inst_20965);

return statearr_20990;
})();
var statearr_20991_21012 = state_20972__$1;
(statearr_20991_21012[(2)] = inst_20966);

(statearr_20991_21012[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (10))){
var inst_20956 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20992_21013 = state_20972__$1;
(statearr_20992_21013[(2)] = inst_20956);

(statearr_20992_21013[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20973 === (8))){
var inst_20945 = (state_20972[(11)]);
var inst_20936 = (state_20972[(7)]);
var tmp20989 = inst_20936;
var inst_20936__$1 = tmp20989;
var inst_20937 = inst_20945;
var state_20972__$1 = (function (){var statearr_20993 = state_20972;
(statearr_20993[(7)] = inst_20936__$1);

(statearr_20993[(8)] = inst_20937);

return statearr_20993;
})();
var statearr_20994_21014 = state_20972__$1;
(statearr_20994_21014[(2)] = null);

(statearr_20994_21014[(1)] = (2));


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
});})(c__19193__auto___21000,out))
;
return ((function (switch__19091__auto__,c__19193__auto___21000,out){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_20995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20995[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_20995[(1)] = (1));

return statearr_20995;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_20972){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_20972);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e20996){if((e20996 instanceof Object)){
var ex__19095__auto__ = e20996;
var statearr_20997_21015 = state_20972;
(statearr_20997_21015[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20972);

return cljs.core.cst$kw$recur;
} else {
throw e20996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__21016 = state_20972;
state_20972 = G__21016;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_20972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_20972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___21000,out))
})();
var state__19195__auto__ = (function (){var statearr_20998 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_20998[(6)] = c__19193__auto___21000);

return statearr_20998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___21000,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21018 = arguments.length;
switch (G__21018) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19193__auto___21088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19193__auto___21088,out){
return (function (){
var f__19194__auto__ = (function (){var switch__19091__auto__ = ((function (c__19193__auto___21088,out){
return (function (state_21060){
var state_val_21061 = (state_21060[(1)]);
if((state_val_21061 === (7))){
var inst_21056 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21062_21089 = state_21060__$1;
(statearr_21062_21089[(2)] = inst_21056);

(statearr_21062_21089[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (1))){
var inst_21019 = [];
var inst_21020 = inst_21019;
var inst_21021 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_21060__$1 = (function (){var statearr_21063 = state_21060;
(statearr_21063[(7)] = inst_21021);

(statearr_21063[(8)] = inst_21020);

return statearr_21063;
})();
var statearr_21064_21090 = state_21060__$1;
(statearr_21064_21090[(2)] = null);

(statearr_21064_21090[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (4))){
var inst_21024 = (state_21060[(9)]);
var inst_21024__$1 = (state_21060[(2)]);
var inst_21025 = (inst_21024__$1 == null);
var inst_21026 = cljs.core.not(inst_21025);
var state_21060__$1 = (function (){var statearr_21065 = state_21060;
(statearr_21065[(9)] = inst_21024__$1);

return statearr_21065;
})();
if(inst_21026){
var statearr_21066_21091 = state_21060__$1;
(statearr_21066_21091[(1)] = (5));

} else {
var statearr_21067_21092 = state_21060__$1;
(statearr_21067_21092[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (15))){
var inst_21050 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21068_21093 = state_21060__$1;
(statearr_21068_21093[(2)] = inst_21050);

(statearr_21068_21093[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (13))){
var state_21060__$1 = state_21060;
var statearr_21069_21094 = state_21060__$1;
(statearr_21069_21094[(2)] = null);

(statearr_21069_21094[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (6))){
var inst_21020 = (state_21060[(8)]);
var inst_21045 = inst_21020.length;
var inst_21046 = (inst_21045 > (0));
var state_21060__$1 = state_21060;
if(cljs.core.truth_(inst_21046)){
var statearr_21070_21095 = state_21060__$1;
(statearr_21070_21095[(1)] = (12));

} else {
var statearr_21071_21096 = state_21060__$1;
(statearr_21071_21096[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (3))){
var inst_21058 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21060__$1,inst_21058);
} else {
if((state_val_21061 === (12))){
var inst_21020 = (state_21060[(8)]);
var inst_21048 = cljs.core.vec(inst_21020);
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21060__$1,(15),out,inst_21048);
} else {
if((state_val_21061 === (2))){
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21060__$1,(4),ch);
} else {
if((state_val_21061 === (11))){
var inst_21028 = (state_21060[(10)]);
var inst_21024 = (state_21060[(9)]);
var inst_21038 = (state_21060[(2)]);
var inst_21039 = [];
var inst_21040 = inst_21039.push(inst_21024);
var inst_21020 = inst_21039;
var inst_21021 = inst_21028;
var state_21060__$1 = (function (){var statearr_21072 = state_21060;
(statearr_21072[(7)] = inst_21021);

(statearr_21072[(11)] = inst_21040);

(statearr_21072[(8)] = inst_21020);

(statearr_21072[(12)] = inst_21038);

return statearr_21072;
})();
var statearr_21073_21097 = state_21060__$1;
(statearr_21073_21097[(2)] = null);

(statearr_21073_21097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (9))){
var inst_21020 = (state_21060[(8)]);
var inst_21036 = cljs.core.vec(inst_21020);
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21060__$1,(11),out,inst_21036);
} else {
if((state_val_21061 === (5))){
var inst_21021 = (state_21060[(7)]);
var inst_21028 = (state_21060[(10)]);
var inst_21024 = (state_21060[(9)]);
var inst_21028__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21024) : f.call(null,inst_21024));
var inst_21029 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21028__$1,inst_21021);
var inst_21030 = cljs.core.keyword_identical_QMARK_(inst_21021,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_21031 = (inst_21029) || (inst_21030);
var state_21060__$1 = (function (){var statearr_21074 = state_21060;
(statearr_21074[(10)] = inst_21028__$1);

return statearr_21074;
})();
if(cljs.core.truth_(inst_21031)){
var statearr_21075_21098 = state_21060__$1;
(statearr_21075_21098[(1)] = (8));

} else {
var statearr_21076_21099 = state_21060__$1;
(statearr_21076_21099[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (14))){
var inst_21053 = (state_21060[(2)]);
var inst_21054 = cljs.core.async.close_BANG_(out);
var state_21060__$1 = (function (){var statearr_21078 = state_21060;
(statearr_21078[(13)] = inst_21053);

return statearr_21078;
})();
var statearr_21079_21100 = state_21060__$1;
(statearr_21079_21100[(2)] = inst_21054);

(statearr_21079_21100[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (10))){
var inst_21043 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21080_21101 = state_21060__$1;
(statearr_21080_21101[(2)] = inst_21043);

(statearr_21080_21101[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21061 === (8))){
var inst_21028 = (state_21060[(10)]);
var inst_21020 = (state_21060[(8)]);
var inst_21024 = (state_21060[(9)]);
var inst_21033 = inst_21020.push(inst_21024);
var tmp21077 = inst_21020;
var inst_21020__$1 = tmp21077;
var inst_21021 = inst_21028;
var state_21060__$1 = (function (){var statearr_21081 = state_21060;
(statearr_21081[(14)] = inst_21033);

(statearr_21081[(7)] = inst_21021);

(statearr_21081[(8)] = inst_21020__$1);

return statearr_21081;
})();
var statearr_21082_21102 = state_21060__$1;
(statearr_21082_21102[(2)] = null);

(statearr_21082_21102[(1)] = (2));


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
});})(c__19193__auto___21088,out))
;
return ((function (switch__19091__auto__,c__19193__auto___21088,out){
return (function() {
var cljs$core$async$state_machine__19092__auto__ = null;
var cljs$core$async$state_machine__19092__auto____0 = (function (){
var statearr_21083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21083[(0)] = cljs$core$async$state_machine__19092__auto__);

(statearr_21083[(1)] = (1));

return statearr_21083;
});
var cljs$core$async$state_machine__19092__auto____1 = (function (state_21060){
while(true){
var ret_value__19093__auto__ = (function (){try{while(true){
var result__19094__auto__ = switch__19091__auto__(state_21060);
if(cljs.core.keyword_identical_QMARK_(result__19094__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19094__auto__;
}
break;
}
}catch (e21084){if((e21084 instanceof Object)){
var ex__19095__auto__ = e21084;
var statearr_21085_21103 = state_21060;
(statearr_21085_21103[(5)] = ex__19095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21060);

return cljs.core.cst$kw$recur;
} else {
throw e21084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19093__auto__,cljs.core.cst$kw$recur)){
var G__21104 = state_21060;
state_21060 = G__21104;
continue;
} else {
return ret_value__19093__auto__;
}
break;
}
});
cljs$core$async$state_machine__19092__auto__ = function(state_21060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19092__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19092__auto____1.call(this,state_21060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19092__auto____0;
cljs$core$async$state_machine__19092__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19092__auto____1;
return cljs$core$async$state_machine__19092__auto__;
})()
;})(switch__19091__auto__,c__19193__auto___21088,out))
})();
var state__19195__auto__ = (function (){var statearr_21086 = (f__19194__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19194__auto__.cljs$core$IFn$_invoke$arity$0() : f__19194__auto__.call(null));
(statearr_21086[(6)] = c__19193__auto___21088);

return statearr_21086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19195__auto__);
});})(c__19193__auto___21088,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

