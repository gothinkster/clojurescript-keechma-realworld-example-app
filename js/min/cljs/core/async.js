// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args17736 = [];
var len__11171__auto___17742 = arguments.length;
var i__11172__auto___17743 = (0);
while(true){
if((i__11172__auto___17743 < len__11171__auto___17742)){
args17736.push((arguments[i__11172__auto___17743]));

var G__17744 = (i__11172__auto___17743 + (1));
i__11172__auto___17743 = G__17744;
continue;
} else {
}
break;
}

var G__17738 = args17736.length;
switch (G__17738) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17736.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17739 = (function (f,blockable,meta17740){
this.f = f;
this.blockable = blockable;
this.meta17740 = meta17740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17741,meta17740__$1){
var self__ = this;
var _17741__$1 = this;
return (new cljs.core.async.t_cljs$core$async17739(self__.f,self__.blockable,meta17740__$1));
});

cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17741){
var self__ = this;
var _17741__$1 = this;
return self__.meta17740;
});

cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17740], null);
});

cljs.core.async.t_cljs$core$async17739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17739";

cljs.core.async.t_cljs$core$async17739.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async17739");
});

cljs.core.async.__GT_t_cljs$core$async17739 = (function cljs$core$async$__GT_t_cljs$core$async17739(f__$1,blockable__$1,meta17740){
return (new cljs.core.async.t_cljs$core$async17739(f__$1,blockable__$1,meta17740));
});

}

return (new cljs.core.async.t_cljs$core$async17739(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args17748 = [];
var len__11171__auto___17751 = arguments.length;
var i__11172__auto___17752 = (0);
while(true){
if((i__11172__auto___17752 < len__11171__auto___17751)){
args17748.push((arguments[i__11172__auto___17752]));

var G__17753 = (i__11172__auto___17752 + (1));
i__11172__auto___17752 = G__17753;
continue;
} else {
}
break;
}

var G__17750 = args17748.length;
switch (G__17750) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17748.length)].join('')));

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
var args17755 = [];
var len__11171__auto___17758 = arguments.length;
var i__11172__auto___17759 = (0);
while(true){
if((i__11172__auto___17759 < len__11171__auto___17758)){
args17755.push((arguments[i__11172__auto___17759]));

var G__17760 = (i__11172__auto___17759 + (1));
i__11172__auto___17759 = G__17760;
continue;
} else {
}
break;
}

var G__17757 = args17755.length;
switch (G__17757) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17755.length)].join('')));

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
var args17762 = [];
var len__11171__auto___17765 = arguments.length;
var i__11172__auto___17766 = (0);
while(true){
if((i__11172__auto___17766 < len__11171__auto___17765)){
args17762.push((arguments[i__11172__auto___17766]));

var G__17767 = (i__11172__auto___17766 + (1));
i__11172__auto___17766 = G__17767;
continue;
} else {
}
break;
}

var G__17764 = args17762.length;
switch (G__17764) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17762.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17769 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17769) : fn1.call(null,val_17769));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17769,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17769) : fn1.call(null,val_17769));
});})(val_17769,ret))
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
var args17770 = [];
var len__11171__auto___17773 = arguments.length;
var i__11172__auto___17774 = (0);
while(true){
if((i__11172__auto___17774 < len__11171__auto___17773)){
args17770.push((arguments[i__11172__auto___17774]));

var G__17775 = (i__11172__auto___17774 + (1));
i__11172__auto___17774 = G__17775;
continue;
} else {
}
break;
}

var G__17772 = args17770.length;
switch (G__17772) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17770.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6751__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6751__auto__))
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
var n__11005__auto___17777 = n;
var x_17778 = (0);
while(true){
if((x_17778 < n__11005__auto___17777)){
(a[x_17778] = (0));

var G__17779 = (x_17778 + (1));
x_17778 = G__17779;
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

var G__17780 = (i + (1));
i = G__17780;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async17784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17784 = (function (alt_flag,flag,meta17785){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17785 = meta17785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17786,meta17785__$1){
var self__ = this;
var _17786__$1 = this;
return (new cljs.core.async.t_cljs$core$async17784(self__.alt_flag,self__.flag,meta17785__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17786){
var self__ = this;
var _17786__$1 = this;
return self__.meta17785;
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17785], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17784";

cljs.core.async.t_cljs$core$async17784.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async17784");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17784 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17784(alt_flag__$1,flag__$1,meta17785){
return (new cljs.core.async.t_cljs$core$async17784(alt_flag__$1,flag__$1,meta17785));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17784(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17790 = (function (alt_handler,flag,cb,meta17791){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17791 = meta17791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17792,meta17791__$1){
var self__ = this;
var _17792__$1 = this;
return (new cljs.core.async.t_cljs$core$async17790(self__.alt_handler,self__.flag,self__.cb,meta17791__$1));
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17792){
var self__ = this;
var _17792__$1 = this;
return self__.meta17791;
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17791], null);
});

cljs.core.async.t_cljs$core$async17790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17790";

cljs.core.async.t_cljs$core$async17790.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async17790");
});

cljs.core.async.__GT_t_cljs$core$async17790 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17790(alt_handler__$1,flag__$1,cb__$1,meta17791){
return (new cljs.core.async.t_cljs$core$async17790(alt_handler__$1,flag__$1,cb__$1,meta17791));
});

}

return (new cljs.core.async.t_cljs$core$async17790(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17793_SHARP_){
var G__17797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17793_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17797) : fret.call(null,G__17797));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17794_SHARP_){
var G__17798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17794_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17798) : fret.call(null,G__17798));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__9992__auto__ = wport;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17799 = (i + (1));
i = G__17799;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9992__auto__ = ret;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6753__auto__ = (function (){var and__9980__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__9980__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__9980__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
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
var args__11178__auto__ = [];
var len__11171__auto___17805 = arguments.length;
var i__11172__auto___17806 = (0);
while(true){
if((i__11172__auto___17806 < len__11171__auto___17805)){
args__11178__auto__.push((arguments[i__11172__auto___17806]));

var G__17807 = (i__11172__auto___17806 + (1));
i__11172__auto___17806 = G__17807;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((1) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11179__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17802){
var map__17803 = p__17802;
var map__17803__$1 = ((((!((map__17803 == null)))?((((map__17803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17803):map__17803);
var opts = map__17803__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17800){
var G__17801 = cljs.core.first(seq17800);
var seq17800__$1 = cljs.core.next(seq17800);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17801,seq17800__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args17808 = [];
var len__11171__auto___17858 = arguments.length;
var i__11172__auto___17859 = (0);
while(true){
if((i__11172__auto___17859 < len__11171__auto___17858)){
args17808.push((arguments[i__11172__auto___17859]));

var G__17860 = (i__11172__auto___17859 + (1));
i__11172__auto___17859 = G__17860;
continue;
} else {
}
break;
}

var G__17810 = args17808.length;
switch (G__17810) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17808.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17677__auto___17862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___17862){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___17862){
return (function (state_17834){
var state_val_17835 = (state_17834[(1)]);
if((state_val_17835 === (7))){
var inst_17830 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17836_17863 = state_17834__$1;
(statearr_17836_17863[(2)] = inst_17830);

(statearr_17836_17863[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (1))){
var state_17834__$1 = state_17834;
var statearr_17837_17864 = state_17834__$1;
(statearr_17837_17864[(2)] = null);

(statearr_17837_17864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (4))){
var inst_17813 = (state_17834[(7)]);
var inst_17813__$1 = (state_17834[(2)]);
var inst_17814 = (inst_17813__$1 == null);
var state_17834__$1 = (function (){var statearr_17838 = state_17834;
(statearr_17838[(7)] = inst_17813__$1);

return statearr_17838;
})();
if(cljs.core.truth_(inst_17814)){
var statearr_17839_17865 = state_17834__$1;
(statearr_17839_17865[(1)] = (5));

} else {
var statearr_17840_17866 = state_17834__$1;
(statearr_17840_17866[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (13))){
var state_17834__$1 = state_17834;
var statearr_17841_17867 = state_17834__$1;
(statearr_17841_17867[(2)] = null);

(statearr_17841_17867[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (6))){
var inst_17813 = (state_17834[(7)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17834__$1,(11),to,inst_17813);
} else {
if((state_val_17835 === (3))){
var inst_17832 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17834__$1,inst_17832);
} else {
if((state_val_17835 === (12))){
var state_17834__$1 = state_17834;
var statearr_17842_17868 = state_17834__$1;
(statearr_17842_17868[(2)] = null);

(statearr_17842_17868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (2))){
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17834__$1,(4),from);
} else {
if((state_val_17835 === (11))){
var inst_17823 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
if(cljs.core.truth_(inst_17823)){
var statearr_17843_17869 = state_17834__$1;
(statearr_17843_17869[(1)] = (12));

} else {
var statearr_17844_17870 = state_17834__$1;
(statearr_17844_17870[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (9))){
var state_17834__$1 = state_17834;
var statearr_17845_17871 = state_17834__$1;
(statearr_17845_17871[(2)] = null);

(statearr_17845_17871[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (5))){
var state_17834__$1 = state_17834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17846_17872 = state_17834__$1;
(statearr_17846_17872[(1)] = (8));

} else {
var statearr_17847_17873 = state_17834__$1;
(statearr_17847_17873[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (14))){
var inst_17828 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17848_17874 = state_17834__$1;
(statearr_17848_17874[(2)] = inst_17828);

(statearr_17848_17874[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (10))){
var inst_17820 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17849_17875 = state_17834__$1;
(statearr_17849_17875[(2)] = inst_17820);

(statearr_17849_17875[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17835 === (8))){
var inst_17817 = cljs.core.async.close_BANG_(to);
var state_17834__$1 = state_17834;
var statearr_17850_17876 = state_17834__$1;
(statearr_17850_17876[(2)] = inst_17817);

(statearr_17850_17876[(1)] = (10));


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
});})(c__17677__auto___17862))
;
return ((function (switch__17551__auto__,c__17677__auto___17862){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_17854 = [null,null,null,null,null,null,null,null];
(statearr_17854[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_17854[(1)] = (1));

return statearr_17854;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_17834){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_17834);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e17855){if((e17855 instanceof Object)){
var ex__17555__auto__ = e17855;
var statearr_17856_17877 = state_17834;
(statearr_17856_17877[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17834);

return cljs.core.cst$kw$recur;
} else {
throw e17855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__17878 = state_17834;
state_17834 = G__17878;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_17834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_17834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___17862))
})();
var state__17679__auto__ = (function (){var statearr_17857 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_17857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___17862);

return statearr_17857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___17862))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__18066){
var vec__18067 = p__18066;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18067,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18067,(1),null);
var job = vec__18067;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17677__auto___18253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___18253,res,vec__18067,v,p,job,jobs,results){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___18253,res,vec__18067,v,p,job,jobs,results){
return (function (state_18074){
var state_val_18075 = (state_18074[(1)]);
if((state_val_18075 === (1))){
var state_18074__$1 = state_18074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18074__$1,(2),res,v);
} else {
if((state_val_18075 === (2))){
var inst_18071 = (state_18074[(2)]);
var inst_18072 = cljs.core.async.close_BANG_(res);
var state_18074__$1 = (function (){var statearr_18076 = state_18074;
(statearr_18076[(7)] = inst_18071);

return statearr_18076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18074__$1,inst_18072);
} else {
return null;
}
}
});})(c__17677__auto___18253,res,vec__18067,v,p,job,jobs,results))
;
return ((function (switch__17551__auto__,c__17677__auto___18253,res,vec__18067,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0 = (function (){
var statearr_18080 = [null,null,null,null,null,null,null,null];
(statearr_18080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__);

(statearr_18080[(1)] = (1));

return statearr_18080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1 = (function (state_18074){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18074);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18081){if((e18081 instanceof Object)){
var ex__17555__auto__ = e18081;
var statearr_18082_18254 = state_18074;
(statearr_18082_18254[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18074);

return cljs.core.cst$kw$recur;
} else {
throw e18081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18255 = state_18074;
state_18074 = G__18255;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = function(state_18074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1.call(this,state_18074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___18253,res,vec__18067,v,p,job,jobs,results))
})();
var state__17679__auto__ = (function (){var statearr_18083 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___18253);

return statearr_18083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___18253,res,vec__18067,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18084){
var vec__18085 = p__18084;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18085,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18085,(1),null);
var job = vec__18085;
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
var n__11005__auto___18256 = n;
var __18257 = (0);
while(true){
if((__18257 < n__11005__auto___18256)){
var G__18088_18258 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18088_18258) {
case "compute":
var c__17677__auto___18260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18257,c__17677__auto___18260,G__18088_18258,n__11005__auto___18256,jobs,results,process,async){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (__18257,c__17677__auto___18260,G__18088_18258,n__11005__auto___18256,jobs,results,process,async){
return (function (state_18101){
var state_val_18102 = (state_18101[(1)]);
if((state_val_18102 === (1))){
var state_18101__$1 = state_18101;
var statearr_18103_18261 = state_18101__$1;
(statearr_18103_18261[(2)] = null);

(statearr_18103_18261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18102 === (2))){
var state_18101__$1 = state_18101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18101__$1,(4),jobs);
} else {
if((state_val_18102 === (3))){
var inst_18099 = (state_18101[(2)]);
var state_18101__$1 = state_18101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18101__$1,inst_18099);
} else {
if((state_val_18102 === (4))){
var inst_18091 = (state_18101[(2)]);
var inst_18092 = process(inst_18091);
var state_18101__$1 = state_18101;
if(cljs.core.truth_(inst_18092)){
var statearr_18104_18262 = state_18101__$1;
(statearr_18104_18262[(1)] = (5));

} else {
var statearr_18105_18263 = state_18101__$1;
(statearr_18105_18263[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18102 === (5))){
var state_18101__$1 = state_18101;
var statearr_18106_18264 = state_18101__$1;
(statearr_18106_18264[(2)] = null);

(statearr_18106_18264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18102 === (6))){
var state_18101__$1 = state_18101;
var statearr_18107_18265 = state_18101__$1;
(statearr_18107_18265[(2)] = null);

(statearr_18107_18265[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18102 === (7))){
var inst_18097 = (state_18101[(2)]);
var state_18101__$1 = state_18101;
var statearr_18108_18266 = state_18101__$1;
(statearr_18108_18266[(2)] = inst_18097);

(statearr_18108_18266[(1)] = (3));


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
});})(__18257,c__17677__auto___18260,G__18088_18258,n__11005__auto___18256,jobs,results,process,async))
;
return ((function (__18257,switch__17551__auto__,c__17677__auto___18260,G__18088_18258,n__11005__auto___18256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0 = (function (){
var statearr_18112 = [null,null,null,null,null,null,null];
(statearr_18112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__);

(statearr_18112[(1)] = (1));

return statearr_18112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1 = (function (state_18101){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18101);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18113){if((e18113 instanceof Object)){
var ex__17555__auto__ = e18113;
var statearr_18114_18267 = state_18101;
(statearr_18114_18267[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18101);

return cljs.core.cst$kw$recur;
} else {
throw e18113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18268 = state_18101;
state_18101 = G__18268;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = function(state_18101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1.call(this,state_18101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__;
})()
;})(__18257,switch__17551__auto__,c__17677__auto___18260,G__18088_18258,n__11005__auto___18256,jobs,results,process,async))
})();
var state__17679__auto__ = (function (){var statearr_18115 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___18260);

return statearr_18115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(__18257,c__17677__auto___18260,G__18088_18258,n__11005__auto___18256,jobs,results,process,async))
);


break;
case "async":
var c__17677__auto___18269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18257,c__17677__auto___18269,G__18088_18258,n__11005__auto___18256,jobs,results,process,async){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (__18257,c__17677__auto___18269,G__18088_18258,n__11005__auto___18256,jobs,results,process,async){
return (function (state_18128){
var state_val_18129 = (state_18128[(1)]);
if((state_val_18129 === (1))){
var state_18128__$1 = state_18128;
var statearr_18130_18270 = state_18128__$1;
(statearr_18130_18270[(2)] = null);

(statearr_18130_18270[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (2))){
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18128__$1,(4),jobs);
} else {
if((state_val_18129 === (3))){
var inst_18126 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18128__$1,inst_18126);
} else {
if((state_val_18129 === (4))){
var inst_18118 = (state_18128[(2)]);
var inst_18119 = async(inst_18118);
var state_18128__$1 = state_18128;
if(cljs.core.truth_(inst_18119)){
var statearr_18131_18271 = state_18128__$1;
(statearr_18131_18271[(1)] = (5));

} else {
var statearr_18132_18272 = state_18128__$1;
(statearr_18132_18272[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (5))){
var state_18128__$1 = state_18128;
var statearr_18133_18273 = state_18128__$1;
(statearr_18133_18273[(2)] = null);

(statearr_18133_18273[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (6))){
var state_18128__$1 = state_18128;
var statearr_18134_18274 = state_18128__$1;
(statearr_18134_18274[(2)] = null);

(statearr_18134_18274[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (7))){
var inst_18124 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18135_18275 = state_18128__$1;
(statearr_18135_18275[(2)] = inst_18124);

(statearr_18135_18275[(1)] = (3));


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
});})(__18257,c__17677__auto___18269,G__18088_18258,n__11005__auto___18256,jobs,results,process,async))
;
return ((function (__18257,switch__17551__auto__,c__17677__auto___18269,G__18088_18258,n__11005__auto___18256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0 = (function (){
var statearr_18139 = [null,null,null,null,null,null,null];
(statearr_18139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__);

(statearr_18139[(1)] = (1));

return statearr_18139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1 = (function (state_18128){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18128);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18140){if((e18140 instanceof Object)){
var ex__17555__auto__ = e18140;
var statearr_18141_18276 = state_18128;
(statearr_18141_18276[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18128);

return cljs.core.cst$kw$recur;
} else {
throw e18140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18277 = state_18128;
state_18128 = G__18277;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = function(state_18128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1.call(this,state_18128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__;
})()
;})(__18257,switch__17551__auto__,c__17677__auto___18269,G__18088_18258,n__11005__auto___18256,jobs,results,process,async))
})();
var state__17679__auto__ = (function (){var statearr_18142 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___18269);

return statearr_18142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(__18257,c__17677__auto___18269,G__18088_18258,n__11005__auto___18256,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18278 = (__18257 + (1));
__18257 = G__18278;
continue;
} else {
}
break;
}

var c__17677__auto___18279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___18279,jobs,results,process,async){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___18279,jobs,results,process,async){
return (function (state_18164){
var state_val_18165 = (state_18164[(1)]);
if((state_val_18165 === (1))){
var state_18164__$1 = state_18164;
var statearr_18166_18280 = state_18164__$1;
(statearr_18166_18280[(2)] = null);

(statearr_18166_18280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (2))){
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18164__$1,(4),from);
} else {
if((state_val_18165 === (3))){
var inst_18162 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18164__$1,inst_18162);
} else {
if((state_val_18165 === (4))){
var inst_18145 = (state_18164[(7)]);
var inst_18145__$1 = (state_18164[(2)]);
var inst_18146 = (inst_18145__$1 == null);
var state_18164__$1 = (function (){var statearr_18167 = state_18164;
(statearr_18167[(7)] = inst_18145__$1);

return statearr_18167;
})();
if(cljs.core.truth_(inst_18146)){
var statearr_18168_18281 = state_18164__$1;
(statearr_18168_18281[(1)] = (5));

} else {
var statearr_18169_18282 = state_18164__$1;
(statearr_18169_18282[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (5))){
var inst_18148 = cljs.core.async.close_BANG_(jobs);
var state_18164__$1 = state_18164;
var statearr_18170_18283 = state_18164__$1;
(statearr_18170_18283[(2)] = inst_18148);

(statearr_18170_18283[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (6))){
var inst_18145 = (state_18164[(7)]);
var inst_18150 = (state_18164[(8)]);
var inst_18150__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18152 = [inst_18145,inst_18150__$1];
var inst_18153 = (new cljs.core.PersistentVector(null,2,(5),inst_18151,inst_18152,null));
var state_18164__$1 = (function (){var statearr_18171 = state_18164;
(statearr_18171[(8)] = inst_18150__$1);

return statearr_18171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18164__$1,(8),jobs,inst_18153);
} else {
if((state_val_18165 === (7))){
var inst_18160 = (state_18164[(2)]);
var state_18164__$1 = state_18164;
var statearr_18172_18284 = state_18164__$1;
(statearr_18172_18284[(2)] = inst_18160);

(statearr_18172_18284[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18165 === (8))){
var inst_18150 = (state_18164[(8)]);
var inst_18155 = (state_18164[(2)]);
var state_18164__$1 = (function (){var statearr_18173 = state_18164;
(statearr_18173[(9)] = inst_18155);

return statearr_18173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18164__$1,(9),results,inst_18150);
} else {
if((state_val_18165 === (9))){
var inst_18157 = (state_18164[(2)]);
var state_18164__$1 = (function (){var statearr_18174 = state_18164;
(statearr_18174[(10)] = inst_18157);

return statearr_18174;
})();
var statearr_18175_18285 = state_18164__$1;
(statearr_18175_18285[(2)] = null);

(statearr_18175_18285[(1)] = (2));


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
});})(c__17677__auto___18279,jobs,results,process,async))
;
return ((function (switch__17551__auto__,c__17677__auto___18279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0 = (function (){
var statearr_18179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__);

(statearr_18179[(1)] = (1));

return statearr_18179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1 = (function (state_18164){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18164);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18180){if((e18180 instanceof Object)){
var ex__17555__auto__ = e18180;
var statearr_18181_18286 = state_18164;
(statearr_18181_18286[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18164);

return cljs.core.cst$kw$recur;
} else {
throw e18180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18287 = state_18164;
state_18164 = G__18287;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = function(state_18164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1.call(this,state_18164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___18279,jobs,results,process,async))
})();
var state__17679__auto__ = (function (){var statearr_18182 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___18279);

return statearr_18182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___18279,jobs,results,process,async))
);


var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__,jobs,results,process,async){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__,jobs,results,process,async){
return (function (state_18220){
var state_val_18221 = (state_18220[(1)]);
if((state_val_18221 === (7))){
var inst_18216 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
var statearr_18222_18288 = state_18220__$1;
(statearr_18222_18288[(2)] = inst_18216);

(statearr_18222_18288[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (20))){
var state_18220__$1 = state_18220;
var statearr_18223_18289 = state_18220__$1;
(statearr_18223_18289[(2)] = null);

(statearr_18223_18289[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (1))){
var state_18220__$1 = state_18220;
var statearr_18224_18290 = state_18220__$1;
(statearr_18224_18290[(2)] = null);

(statearr_18224_18290[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (4))){
var inst_18185 = (state_18220[(7)]);
var inst_18185__$1 = (state_18220[(2)]);
var inst_18186 = (inst_18185__$1 == null);
var state_18220__$1 = (function (){var statearr_18225 = state_18220;
(statearr_18225[(7)] = inst_18185__$1);

return statearr_18225;
})();
if(cljs.core.truth_(inst_18186)){
var statearr_18226_18291 = state_18220__$1;
(statearr_18226_18291[(1)] = (5));

} else {
var statearr_18227_18292 = state_18220__$1;
(statearr_18227_18292[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (15))){
var inst_18198 = (state_18220[(8)]);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18220__$1,(18),to,inst_18198);
} else {
if((state_val_18221 === (21))){
var inst_18211 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
var statearr_18228_18293 = state_18220__$1;
(statearr_18228_18293[(2)] = inst_18211);

(statearr_18228_18293[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (13))){
var inst_18213 = (state_18220[(2)]);
var state_18220__$1 = (function (){var statearr_18229 = state_18220;
(statearr_18229[(9)] = inst_18213);

return statearr_18229;
})();
var statearr_18230_18294 = state_18220__$1;
(statearr_18230_18294[(2)] = null);

(statearr_18230_18294[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (6))){
var inst_18185 = (state_18220[(7)]);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18220__$1,(11),inst_18185);
} else {
if((state_val_18221 === (17))){
var inst_18206 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
if(cljs.core.truth_(inst_18206)){
var statearr_18231_18295 = state_18220__$1;
(statearr_18231_18295[(1)] = (19));

} else {
var statearr_18232_18296 = state_18220__$1;
(statearr_18232_18296[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (3))){
var inst_18218 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18220__$1,inst_18218);
} else {
if((state_val_18221 === (12))){
var inst_18195 = (state_18220[(10)]);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18220__$1,(14),inst_18195);
} else {
if((state_val_18221 === (2))){
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18220__$1,(4),results);
} else {
if((state_val_18221 === (19))){
var state_18220__$1 = state_18220;
var statearr_18233_18297 = state_18220__$1;
(statearr_18233_18297[(2)] = null);

(statearr_18233_18297[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (11))){
var inst_18195 = (state_18220[(2)]);
var state_18220__$1 = (function (){var statearr_18234 = state_18220;
(statearr_18234[(10)] = inst_18195);

return statearr_18234;
})();
var statearr_18235_18298 = state_18220__$1;
(statearr_18235_18298[(2)] = null);

(statearr_18235_18298[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (9))){
var state_18220__$1 = state_18220;
var statearr_18236_18299 = state_18220__$1;
(statearr_18236_18299[(2)] = null);

(statearr_18236_18299[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (5))){
var state_18220__$1 = state_18220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18237_18300 = state_18220__$1;
(statearr_18237_18300[(1)] = (8));

} else {
var statearr_18238_18301 = state_18220__$1;
(statearr_18238_18301[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (14))){
var inst_18198 = (state_18220[(8)]);
var inst_18200 = (state_18220[(11)]);
var inst_18198__$1 = (state_18220[(2)]);
var inst_18199 = (inst_18198__$1 == null);
var inst_18200__$1 = cljs.core.not(inst_18199);
var state_18220__$1 = (function (){var statearr_18239 = state_18220;
(statearr_18239[(8)] = inst_18198__$1);

(statearr_18239[(11)] = inst_18200__$1);

return statearr_18239;
})();
if(inst_18200__$1){
var statearr_18240_18302 = state_18220__$1;
(statearr_18240_18302[(1)] = (15));

} else {
var statearr_18241_18303 = state_18220__$1;
(statearr_18241_18303[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (16))){
var inst_18200 = (state_18220[(11)]);
var state_18220__$1 = state_18220;
var statearr_18242_18304 = state_18220__$1;
(statearr_18242_18304[(2)] = inst_18200);

(statearr_18242_18304[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (10))){
var inst_18192 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
var statearr_18243_18305 = state_18220__$1;
(statearr_18243_18305[(2)] = inst_18192);

(statearr_18243_18305[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (18))){
var inst_18203 = (state_18220[(2)]);
var state_18220__$1 = state_18220;
var statearr_18244_18306 = state_18220__$1;
(statearr_18244_18306[(2)] = inst_18203);

(statearr_18244_18306[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18221 === (8))){
var inst_18189 = cljs.core.async.close_BANG_(to);
var state_18220__$1 = state_18220;
var statearr_18245_18307 = state_18220__$1;
(statearr_18245_18307[(2)] = inst_18189);

(statearr_18245_18307[(1)] = (10));


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
});})(c__17677__auto__,jobs,results,process,async))
;
return ((function (switch__17551__auto__,c__17677__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0 = (function (){
var statearr_18249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__);

(statearr_18249[(1)] = (1));

return statearr_18249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1 = (function (state_18220){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18220);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18250){if((e18250 instanceof Object)){
var ex__17555__auto__ = e18250;
var statearr_18251_18308 = state_18220;
(statearr_18251_18308[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18220);

return cljs.core.cst$kw$recur;
} else {
throw e18250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18309 = state_18220;
state_18220 = G__18309;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__ = function(state_18220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1.call(this,state_18220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__,jobs,results,process,async))
})();
var state__17679__auto__ = (function (){var statearr_18252 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_18252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__,jobs,results,process,async))
);

return c__17677__auto__;
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
var args18310 = [];
var len__11171__auto___18313 = arguments.length;
var i__11172__auto___18314 = (0);
while(true){
if((i__11172__auto___18314 < len__11171__auto___18313)){
args18310.push((arguments[i__11172__auto___18314]));

var G__18315 = (i__11172__auto___18314 + (1));
i__11172__auto___18314 = G__18315;
continue;
} else {
}
break;
}

var G__18312 = args18310.length;
switch (G__18312) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18310.length)].join('')));

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
var args18317 = [];
var len__11171__auto___18320 = arguments.length;
var i__11172__auto___18321 = (0);
while(true){
if((i__11172__auto___18321 < len__11171__auto___18320)){
args18317.push((arguments[i__11172__auto___18321]));

var G__18322 = (i__11172__auto___18321 + (1));
i__11172__auto___18321 = G__18322;
continue;
} else {
}
break;
}

var G__18319 = args18317.length;
switch (G__18319) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18317.length)].join('')));

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
var args18324 = [];
var len__11171__auto___18377 = arguments.length;
var i__11172__auto___18378 = (0);
while(true){
if((i__11172__auto___18378 < len__11171__auto___18377)){
args18324.push((arguments[i__11172__auto___18378]));

var G__18379 = (i__11172__auto___18378 + (1));
i__11172__auto___18378 = G__18379;
continue;
} else {
}
break;
}

var G__18326 = args18324.length;
switch (G__18326) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18324.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17677__auto___18381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___18381,tc,fc){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___18381,tc,fc){
return (function (state_18352){
var state_val_18353 = (state_18352[(1)]);
if((state_val_18353 === (7))){
var inst_18348 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18354_18382 = state_18352__$1;
(statearr_18354_18382[(2)] = inst_18348);

(statearr_18354_18382[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (1))){
var state_18352__$1 = state_18352;
var statearr_18355_18383 = state_18352__$1;
(statearr_18355_18383[(2)] = null);

(statearr_18355_18383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (4))){
var inst_18329 = (state_18352[(7)]);
var inst_18329__$1 = (state_18352[(2)]);
var inst_18330 = (inst_18329__$1 == null);
var state_18352__$1 = (function (){var statearr_18356 = state_18352;
(statearr_18356[(7)] = inst_18329__$1);

return statearr_18356;
})();
if(cljs.core.truth_(inst_18330)){
var statearr_18357_18384 = state_18352__$1;
(statearr_18357_18384[(1)] = (5));

} else {
var statearr_18358_18385 = state_18352__$1;
(statearr_18358_18385[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (13))){
var state_18352__$1 = state_18352;
var statearr_18359_18386 = state_18352__$1;
(statearr_18359_18386[(2)] = null);

(statearr_18359_18386[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (6))){
var inst_18329 = (state_18352[(7)]);
var inst_18335 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18329) : p.call(null,inst_18329));
var state_18352__$1 = state_18352;
if(cljs.core.truth_(inst_18335)){
var statearr_18360_18387 = state_18352__$1;
(statearr_18360_18387[(1)] = (9));

} else {
var statearr_18361_18388 = state_18352__$1;
(statearr_18361_18388[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (3))){
var inst_18350 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18352__$1,inst_18350);
} else {
if((state_val_18353 === (12))){
var state_18352__$1 = state_18352;
var statearr_18362_18389 = state_18352__$1;
(statearr_18362_18389[(2)] = null);

(statearr_18362_18389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (2))){
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18352__$1,(4),ch);
} else {
if((state_val_18353 === (11))){
var inst_18329 = (state_18352[(7)]);
var inst_18339 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18352__$1,(8),inst_18339,inst_18329);
} else {
if((state_val_18353 === (9))){
var state_18352__$1 = state_18352;
var statearr_18363_18390 = state_18352__$1;
(statearr_18363_18390[(2)] = tc);

(statearr_18363_18390[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (5))){
var inst_18332 = cljs.core.async.close_BANG_(tc);
var inst_18333 = cljs.core.async.close_BANG_(fc);
var state_18352__$1 = (function (){var statearr_18364 = state_18352;
(statearr_18364[(8)] = inst_18332);

return statearr_18364;
})();
var statearr_18365_18391 = state_18352__$1;
(statearr_18365_18391[(2)] = inst_18333);

(statearr_18365_18391[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (14))){
var inst_18346 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18366_18392 = state_18352__$1;
(statearr_18366_18392[(2)] = inst_18346);

(statearr_18366_18392[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (10))){
var state_18352__$1 = state_18352;
var statearr_18367_18393 = state_18352__$1;
(statearr_18367_18393[(2)] = fc);

(statearr_18367_18393[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18353 === (8))){
var inst_18341 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
if(cljs.core.truth_(inst_18341)){
var statearr_18368_18394 = state_18352__$1;
(statearr_18368_18394[(1)] = (12));

} else {
var statearr_18369_18395 = state_18352__$1;
(statearr_18369_18395[(1)] = (13));

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
});})(c__17677__auto___18381,tc,fc))
;
return ((function (switch__17551__auto__,c__17677__auto___18381,tc,fc){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_18373 = [null,null,null,null,null,null,null,null,null];
(statearr_18373[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_18373[(1)] = (1));

return statearr_18373;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_18352){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18352);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18374){if((e18374 instanceof Object)){
var ex__17555__auto__ = e18374;
var statearr_18375_18396 = state_18352;
(statearr_18375_18396[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18352);

return cljs.core.cst$kw$recur;
} else {
throw e18374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18397 = state_18352;
state_18352 = G__18397;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_18352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_18352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___18381,tc,fc))
})();
var state__17679__auto__ = (function (){var statearr_18376 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___18381);

return statearr_18376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___18381,tc,fc))
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
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__){
return (function (state_18461){
var state_val_18462 = (state_18461[(1)]);
if((state_val_18462 === (7))){
var inst_18457 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
var statearr_18463_18484 = state_18461__$1;
(statearr_18463_18484[(2)] = inst_18457);

(statearr_18463_18484[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (1))){
var inst_18441 = init;
var state_18461__$1 = (function (){var statearr_18464 = state_18461;
(statearr_18464[(7)] = inst_18441);

return statearr_18464;
})();
var statearr_18465_18485 = state_18461__$1;
(statearr_18465_18485[(2)] = null);

(statearr_18465_18485[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (4))){
var inst_18444 = (state_18461[(8)]);
var inst_18444__$1 = (state_18461[(2)]);
var inst_18445 = (inst_18444__$1 == null);
var state_18461__$1 = (function (){var statearr_18466 = state_18461;
(statearr_18466[(8)] = inst_18444__$1);

return statearr_18466;
})();
if(cljs.core.truth_(inst_18445)){
var statearr_18467_18486 = state_18461__$1;
(statearr_18467_18486[(1)] = (5));

} else {
var statearr_18468_18487 = state_18461__$1;
(statearr_18468_18487[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (6))){
var inst_18441 = (state_18461[(7)]);
var inst_18444 = (state_18461[(8)]);
var inst_18448 = (state_18461[(9)]);
var inst_18448__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18441,inst_18444) : f.call(null,inst_18441,inst_18444));
var inst_18449 = cljs.core.reduced_QMARK_(inst_18448__$1);
var state_18461__$1 = (function (){var statearr_18469 = state_18461;
(statearr_18469[(9)] = inst_18448__$1);

return statearr_18469;
})();
if(inst_18449){
var statearr_18470_18488 = state_18461__$1;
(statearr_18470_18488[(1)] = (8));

} else {
var statearr_18471_18489 = state_18461__$1;
(statearr_18471_18489[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (3))){
var inst_18459 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18461__$1,inst_18459);
} else {
if((state_val_18462 === (2))){
var state_18461__$1 = state_18461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18461__$1,(4),ch);
} else {
if((state_val_18462 === (9))){
var inst_18448 = (state_18461[(9)]);
var inst_18441 = inst_18448;
var state_18461__$1 = (function (){var statearr_18472 = state_18461;
(statearr_18472[(7)] = inst_18441);

return statearr_18472;
})();
var statearr_18473_18490 = state_18461__$1;
(statearr_18473_18490[(2)] = null);

(statearr_18473_18490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (5))){
var inst_18441 = (state_18461[(7)]);
var state_18461__$1 = state_18461;
var statearr_18474_18491 = state_18461__$1;
(statearr_18474_18491[(2)] = inst_18441);

(statearr_18474_18491[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (10))){
var inst_18455 = (state_18461[(2)]);
var state_18461__$1 = state_18461;
var statearr_18475_18492 = state_18461__$1;
(statearr_18475_18492[(2)] = inst_18455);

(statearr_18475_18492[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18462 === (8))){
var inst_18448 = (state_18461[(9)]);
var inst_18451 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_18448) : cljs.core.deref.call(null,inst_18448));
var state_18461__$1 = state_18461;
var statearr_18476_18493 = state_18461__$1;
(statearr_18476_18493[(2)] = inst_18451);

(statearr_18476_18493[(1)] = (10));


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
});})(c__17677__auto__))
;
return ((function (switch__17551__auto__,c__17677__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17552__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17552__auto____0 = (function (){
var statearr_18480 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18480[(0)] = cljs$core$async$reduce_$_state_machine__17552__auto__);

(statearr_18480[(1)] = (1));

return statearr_18480;
});
var cljs$core$async$reduce_$_state_machine__17552__auto____1 = (function (state_18461){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18461);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18481){if((e18481 instanceof Object)){
var ex__17555__auto__ = e18481;
var statearr_18482_18494 = state_18461;
(statearr_18482_18494[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18461);

return cljs.core.cst$kw$recur;
} else {
throw e18481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18495 = state_18461;
state_18461 = G__18495;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17552__auto__ = function(state_18461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17552__auto____1.call(this,state_18461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17552__auto____0;
cljs$core$async$reduce_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17552__auto____1;
return cljs$core$async$reduce_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__))
})();
var state__17679__auto__ = (function (){var statearr_18483 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_18483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__))
);

return c__17677__auto__;
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
var args18496 = [];
var len__11171__auto___18548 = arguments.length;
var i__11172__auto___18549 = (0);
while(true){
if((i__11172__auto___18549 < len__11171__auto___18548)){
args18496.push((arguments[i__11172__auto___18549]));

var G__18550 = (i__11172__auto___18549 + (1));
i__11172__auto___18549 = G__18550;
continue;
} else {
}
break;
}

var G__18498 = args18496.length;
switch (G__18498) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18496.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__){
return (function (state_18523){
var state_val_18524 = (state_18523[(1)]);
if((state_val_18524 === (7))){
var inst_18505 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
var statearr_18525_18552 = state_18523__$1;
(statearr_18525_18552[(2)] = inst_18505);

(statearr_18525_18552[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (1))){
var inst_18499 = cljs.core.seq(coll);
var inst_18500 = inst_18499;
var state_18523__$1 = (function (){var statearr_18526 = state_18523;
(statearr_18526[(7)] = inst_18500);

return statearr_18526;
})();
var statearr_18527_18553 = state_18523__$1;
(statearr_18527_18553[(2)] = null);

(statearr_18527_18553[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (4))){
var inst_18500 = (state_18523[(7)]);
var inst_18503 = cljs.core.first(inst_18500);
var state_18523__$1 = state_18523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18523__$1,(7),ch,inst_18503);
} else {
if((state_val_18524 === (13))){
var inst_18517 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
var statearr_18528_18554 = state_18523__$1;
(statearr_18528_18554[(2)] = inst_18517);

(statearr_18528_18554[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (6))){
var inst_18508 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
if(cljs.core.truth_(inst_18508)){
var statearr_18529_18555 = state_18523__$1;
(statearr_18529_18555[(1)] = (8));

} else {
var statearr_18530_18556 = state_18523__$1;
(statearr_18530_18556[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (3))){
var inst_18521 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18523__$1,inst_18521);
} else {
if((state_val_18524 === (12))){
var state_18523__$1 = state_18523;
var statearr_18531_18557 = state_18523__$1;
(statearr_18531_18557[(2)] = null);

(statearr_18531_18557[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (2))){
var inst_18500 = (state_18523[(7)]);
var state_18523__$1 = state_18523;
if(cljs.core.truth_(inst_18500)){
var statearr_18532_18558 = state_18523__$1;
(statearr_18532_18558[(1)] = (4));

} else {
var statearr_18533_18559 = state_18523__$1;
(statearr_18533_18559[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (11))){
var inst_18514 = cljs.core.async.close_BANG_(ch);
var state_18523__$1 = state_18523;
var statearr_18534_18560 = state_18523__$1;
(statearr_18534_18560[(2)] = inst_18514);

(statearr_18534_18560[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (9))){
var state_18523__$1 = state_18523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18535_18561 = state_18523__$1;
(statearr_18535_18561[(1)] = (11));

} else {
var statearr_18536_18562 = state_18523__$1;
(statearr_18536_18562[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (5))){
var inst_18500 = (state_18523[(7)]);
var state_18523__$1 = state_18523;
var statearr_18537_18563 = state_18523__$1;
(statearr_18537_18563[(2)] = inst_18500);

(statearr_18537_18563[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (10))){
var inst_18519 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
var statearr_18538_18564 = state_18523__$1;
(statearr_18538_18564[(2)] = inst_18519);

(statearr_18538_18564[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18524 === (8))){
var inst_18500 = (state_18523[(7)]);
var inst_18510 = cljs.core.next(inst_18500);
var inst_18500__$1 = inst_18510;
var state_18523__$1 = (function (){var statearr_18539 = state_18523;
(statearr_18539[(7)] = inst_18500__$1);

return statearr_18539;
})();
var statearr_18540_18565 = state_18523__$1;
(statearr_18540_18565[(2)] = null);

(statearr_18540_18565[(1)] = (2));


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
});})(c__17677__auto__))
;
return ((function (switch__17551__auto__,c__17677__auto__){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null,null];
(statearr_18544[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_18523){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18523);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e18545){if((e18545 instanceof Object)){
var ex__17555__auto__ = e18545;
var statearr_18546_18566 = state_18523;
(statearr_18546_18566[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18523);

return cljs.core.cst$kw$recur;
} else {
throw e18545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__18567 = state_18523;
state_18523 = G__18567;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_18523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_18523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__))
})();
var state__17679__auto__ = (function (){var statearr_18547 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_18547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_18547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__))
);

return c__17677__auto__;
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
var x__10705__auto__ = (((_ == null))?null:_);
var m__10706__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__10706__auto__.call(null,_));
} else {
var m__10706__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__10706__auto____$1.call(null,_));
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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10706__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__10706__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10706__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10706__auto__.call(null,m,ch));
} else {
var m__10706__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10706__auto____$1.call(null,m,ch));
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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10706__auto__.call(null,m));
} else {
var m__10706__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10706__auto____$1.call(null,m));
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
var cs = (function (){var G__18796 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18796) : cljs.core.atom.call(null,G__18796));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18797 = (function (mult,ch,cs,meta18798){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18798 = meta18798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18799,meta18798__$1){
var self__ = this;
var _18799__$1 = this;
return (new cljs.core.async.t_cljs$core$async18797(self__.mult,self__.ch,self__.cs,meta18798__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18799){
var self__ = this;
var _18799__$1 = this;
return self__.meta18798;
});})(cs))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18800_19024 = self__.cs;
var G__18801_19025 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18800_19024,G__18801_19025) : cljs.core.reset_BANG_.call(null,G__18800_19024,G__18801_19025));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18797.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18798], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18797";

cljs.core.async.t_cljs$core$async18797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async18797");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18797 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18797(mult__$1,ch__$1,cs__$1,meta18798){
return (new cljs.core.async.t_cljs$core$async18797(mult__$1,ch__$1,cs__$1,meta18798));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18797(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__17677__auto___19026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___19026,cs,m,dchan,dctr,done){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___19026,cs,m,dchan,dctr,done){
return (function (state_18936){
var state_val_18937 = (state_18936[(1)]);
if((state_val_18937 === (7))){
var inst_18932 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_18938_19027 = state_18936__$1;
(statearr_18938_19027[(2)] = inst_18932);

(statearr_18938_19027[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (20))){
var inst_18835 = (state_18936[(7)]);
var inst_18847 = cljs.core.first(inst_18835);
var inst_18848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18847,(0),null);
var inst_18849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18847,(1),null);
var state_18936__$1 = (function (){var statearr_18939 = state_18936;
(statearr_18939[(8)] = inst_18848);

return statearr_18939;
})();
if(cljs.core.truth_(inst_18849)){
var statearr_18940_19028 = state_18936__$1;
(statearr_18940_19028[(1)] = (22));

} else {
var statearr_18941_19029 = state_18936__$1;
(statearr_18941_19029[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (27))){
var inst_18879 = (state_18936[(9)]);
var inst_18884 = (state_18936[(10)]);
var inst_18877 = (state_18936[(11)]);
var inst_18804 = (state_18936[(12)]);
var inst_18884__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18877,inst_18879);
var inst_18885 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18884__$1,inst_18804,done);
var state_18936__$1 = (function (){var statearr_18942 = state_18936;
(statearr_18942[(10)] = inst_18884__$1);

return statearr_18942;
})();
if(cljs.core.truth_(inst_18885)){
var statearr_18943_19030 = state_18936__$1;
(statearr_18943_19030[(1)] = (30));

} else {
var statearr_18944_19031 = state_18936__$1;
(statearr_18944_19031[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (1))){
var state_18936__$1 = state_18936;
var statearr_18945_19032 = state_18936__$1;
(statearr_18945_19032[(2)] = null);

(statearr_18945_19032[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (24))){
var inst_18835 = (state_18936[(7)]);
var inst_18854 = (state_18936[(2)]);
var inst_18855 = cljs.core.next(inst_18835);
var inst_18813 = inst_18855;
var inst_18814 = null;
var inst_18815 = (0);
var inst_18816 = (0);
var state_18936__$1 = (function (){var statearr_18946 = state_18936;
(statearr_18946[(13)] = inst_18813);

(statearr_18946[(14)] = inst_18854);

(statearr_18946[(15)] = inst_18815);

(statearr_18946[(16)] = inst_18816);

(statearr_18946[(17)] = inst_18814);

return statearr_18946;
})();
var statearr_18947_19033 = state_18936__$1;
(statearr_18947_19033[(2)] = null);

(statearr_18947_19033[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (39))){
var state_18936__$1 = state_18936;
var statearr_18951_19034 = state_18936__$1;
(statearr_18951_19034[(2)] = null);

(statearr_18951_19034[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (4))){
var inst_18804 = (state_18936[(12)]);
var inst_18804__$1 = (state_18936[(2)]);
var inst_18805 = (inst_18804__$1 == null);
var state_18936__$1 = (function (){var statearr_18952 = state_18936;
(statearr_18952[(12)] = inst_18804__$1);

return statearr_18952;
})();
if(cljs.core.truth_(inst_18805)){
var statearr_18953_19035 = state_18936__$1;
(statearr_18953_19035[(1)] = (5));

} else {
var statearr_18954_19036 = state_18936__$1;
(statearr_18954_19036[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (15))){
var inst_18813 = (state_18936[(13)]);
var inst_18815 = (state_18936[(15)]);
var inst_18816 = (state_18936[(16)]);
var inst_18814 = (state_18936[(17)]);
var inst_18831 = (state_18936[(2)]);
var inst_18832 = (inst_18816 + (1));
var tmp18948 = inst_18813;
var tmp18949 = inst_18815;
var tmp18950 = inst_18814;
var inst_18813__$1 = tmp18948;
var inst_18814__$1 = tmp18950;
var inst_18815__$1 = tmp18949;
var inst_18816__$1 = inst_18832;
var state_18936__$1 = (function (){var statearr_18955 = state_18936;
(statearr_18955[(13)] = inst_18813__$1);

(statearr_18955[(15)] = inst_18815__$1);

(statearr_18955[(16)] = inst_18816__$1);

(statearr_18955[(17)] = inst_18814__$1);

(statearr_18955[(18)] = inst_18831);

return statearr_18955;
})();
var statearr_18956_19037 = state_18936__$1;
(statearr_18956_19037[(2)] = null);

(statearr_18956_19037[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (21))){
var inst_18858 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_18960_19038 = state_18936__$1;
(statearr_18960_19038[(2)] = inst_18858);

(statearr_18960_19038[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (31))){
var inst_18884 = (state_18936[(10)]);
var inst_18888 = done(null);
var inst_18889 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18884);
var state_18936__$1 = (function (){var statearr_18961 = state_18936;
(statearr_18961[(19)] = inst_18888);

return statearr_18961;
})();
var statearr_18962_19039 = state_18936__$1;
(statearr_18962_19039[(2)] = inst_18889);

(statearr_18962_19039[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (32))){
var inst_18878 = (state_18936[(20)]);
var inst_18879 = (state_18936[(9)]);
var inst_18876 = (state_18936[(21)]);
var inst_18877 = (state_18936[(11)]);
var inst_18891 = (state_18936[(2)]);
var inst_18892 = (inst_18879 + (1));
var tmp18957 = inst_18878;
var tmp18958 = inst_18876;
var tmp18959 = inst_18877;
var inst_18876__$1 = tmp18958;
var inst_18877__$1 = tmp18959;
var inst_18878__$1 = tmp18957;
var inst_18879__$1 = inst_18892;
var state_18936__$1 = (function (){var statearr_18963 = state_18936;
(statearr_18963[(20)] = inst_18878__$1);

(statearr_18963[(9)] = inst_18879__$1);

(statearr_18963[(21)] = inst_18876__$1);

(statearr_18963[(11)] = inst_18877__$1);

(statearr_18963[(22)] = inst_18891);

return statearr_18963;
})();
var statearr_18964_19040 = state_18936__$1;
(statearr_18964_19040[(2)] = null);

(statearr_18964_19040[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (40))){
var inst_18904 = (state_18936[(23)]);
var inst_18908 = done(null);
var inst_18909 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18904);
var state_18936__$1 = (function (){var statearr_18965 = state_18936;
(statearr_18965[(24)] = inst_18908);

return statearr_18965;
})();
var statearr_18966_19041 = state_18936__$1;
(statearr_18966_19041[(2)] = inst_18909);

(statearr_18966_19041[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (33))){
var inst_18895 = (state_18936[(25)]);
var inst_18897 = cljs.core.chunked_seq_QMARK_(inst_18895);
var state_18936__$1 = state_18936;
if(inst_18897){
var statearr_18967_19042 = state_18936__$1;
(statearr_18967_19042[(1)] = (36));

} else {
var statearr_18968_19043 = state_18936__$1;
(statearr_18968_19043[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (13))){
var inst_18825 = (state_18936[(26)]);
var inst_18828 = cljs.core.async.close_BANG_(inst_18825);
var state_18936__$1 = state_18936;
var statearr_18969_19044 = state_18936__$1;
(statearr_18969_19044[(2)] = inst_18828);

(statearr_18969_19044[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (22))){
var inst_18848 = (state_18936[(8)]);
var inst_18851 = cljs.core.async.close_BANG_(inst_18848);
var state_18936__$1 = state_18936;
var statearr_18970_19045 = state_18936__$1;
(statearr_18970_19045[(2)] = inst_18851);

(statearr_18970_19045[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (36))){
var inst_18895 = (state_18936[(25)]);
var inst_18899 = cljs.core.chunk_first(inst_18895);
var inst_18900 = cljs.core.chunk_rest(inst_18895);
var inst_18901 = cljs.core.count(inst_18899);
var inst_18876 = inst_18900;
var inst_18877 = inst_18899;
var inst_18878 = inst_18901;
var inst_18879 = (0);
var state_18936__$1 = (function (){var statearr_18971 = state_18936;
(statearr_18971[(20)] = inst_18878);

(statearr_18971[(9)] = inst_18879);

(statearr_18971[(21)] = inst_18876);

(statearr_18971[(11)] = inst_18877);

return statearr_18971;
})();
var statearr_18972_19046 = state_18936__$1;
(statearr_18972_19046[(2)] = null);

(statearr_18972_19046[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (41))){
var inst_18895 = (state_18936[(25)]);
var inst_18911 = (state_18936[(2)]);
var inst_18912 = cljs.core.next(inst_18895);
var inst_18876 = inst_18912;
var inst_18877 = null;
var inst_18878 = (0);
var inst_18879 = (0);
var state_18936__$1 = (function (){var statearr_18973 = state_18936;
(statearr_18973[(20)] = inst_18878);

(statearr_18973[(9)] = inst_18879);

(statearr_18973[(21)] = inst_18876);

(statearr_18973[(11)] = inst_18877);

(statearr_18973[(27)] = inst_18911);

return statearr_18973;
})();
var statearr_18974_19047 = state_18936__$1;
(statearr_18974_19047[(2)] = null);

(statearr_18974_19047[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (43))){
var state_18936__$1 = state_18936;
var statearr_18975_19048 = state_18936__$1;
(statearr_18975_19048[(2)] = null);

(statearr_18975_19048[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (29))){
var inst_18920 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_18976_19049 = state_18936__$1;
(statearr_18976_19049[(2)] = inst_18920);

(statearr_18976_19049[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (44))){
var inst_18929 = (state_18936[(2)]);
var state_18936__$1 = (function (){var statearr_18977 = state_18936;
(statearr_18977[(28)] = inst_18929);

return statearr_18977;
})();
var statearr_18978_19050 = state_18936__$1;
(statearr_18978_19050[(2)] = null);

(statearr_18978_19050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (6))){
var inst_18868 = (state_18936[(29)]);
var inst_18867 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18868__$1 = cljs.core.keys(inst_18867);
var inst_18869 = cljs.core.count(inst_18868__$1);
var inst_18870 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_18869) : cljs.core.reset_BANG_.call(null,dctr,inst_18869));
var inst_18875 = cljs.core.seq(inst_18868__$1);
var inst_18876 = inst_18875;
var inst_18877 = null;
var inst_18878 = (0);
var inst_18879 = (0);
var state_18936__$1 = (function (){var statearr_18979 = state_18936;
(statearr_18979[(30)] = inst_18870);

(statearr_18979[(20)] = inst_18878);

(statearr_18979[(9)] = inst_18879);

(statearr_18979[(21)] = inst_18876);

(statearr_18979[(29)] = inst_18868__$1);

(statearr_18979[(11)] = inst_18877);

return statearr_18979;
})();
var statearr_18980_19051 = state_18936__$1;
(statearr_18980_19051[(2)] = null);

(statearr_18980_19051[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (28))){
var inst_18876 = (state_18936[(21)]);
var inst_18895 = (state_18936[(25)]);
var inst_18895__$1 = cljs.core.seq(inst_18876);
var state_18936__$1 = (function (){var statearr_18981 = state_18936;
(statearr_18981[(25)] = inst_18895__$1);

return statearr_18981;
})();
if(inst_18895__$1){
var statearr_18982_19052 = state_18936__$1;
(statearr_18982_19052[(1)] = (33));

} else {
var statearr_18983_19053 = state_18936__$1;
(statearr_18983_19053[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (25))){
var inst_18878 = (state_18936[(20)]);
var inst_18879 = (state_18936[(9)]);
var inst_18881 = (inst_18879 < inst_18878);
var inst_18882 = inst_18881;
var state_18936__$1 = state_18936;
if(cljs.core.truth_(inst_18882)){
var statearr_18984_19054 = state_18936__$1;
(statearr_18984_19054[(1)] = (27));

} else {
var statearr_18985_19055 = state_18936__$1;
(statearr_18985_19055[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (34))){
var state_18936__$1 = state_18936;
var statearr_18986_19056 = state_18936__$1;
(statearr_18986_19056[(2)] = null);

(statearr_18986_19056[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (17))){
var state_18936__$1 = state_18936;
var statearr_18987_19057 = state_18936__$1;
(statearr_18987_19057[(2)] = null);

(statearr_18987_19057[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (3))){
var inst_18934 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18936__$1,inst_18934);
} else {
if((state_val_18937 === (12))){
var inst_18863 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_18988_19058 = state_18936__$1;
(statearr_18988_19058[(2)] = inst_18863);

(statearr_18988_19058[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (2))){
var state_18936__$1 = state_18936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18936__$1,(4),ch);
} else {
if((state_val_18937 === (23))){
var state_18936__$1 = state_18936;
var statearr_18989_19059 = state_18936__$1;
(statearr_18989_19059[(2)] = null);

(statearr_18989_19059[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (35))){
var inst_18918 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_18990_19060 = state_18936__$1;
(statearr_18990_19060[(2)] = inst_18918);

(statearr_18990_19060[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (19))){
var inst_18835 = (state_18936[(7)]);
var inst_18839 = cljs.core.chunk_first(inst_18835);
var inst_18840 = cljs.core.chunk_rest(inst_18835);
var inst_18841 = cljs.core.count(inst_18839);
var inst_18813 = inst_18840;
var inst_18814 = inst_18839;
var inst_18815 = inst_18841;
var inst_18816 = (0);
var state_18936__$1 = (function (){var statearr_18991 = state_18936;
(statearr_18991[(13)] = inst_18813);

(statearr_18991[(15)] = inst_18815);

(statearr_18991[(16)] = inst_18816);

(statearr_18991[(17)] = inst_18814);

return statearr_18991;
})();
var statearr_18992_19061 = state_18936__$1;
(statearr_18992_19061[(2)] = null);

(statearr_18992_19061[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (11))){
var inst_18835 = (state_18936[(7)]);
var inst_18813 = (state_18936[(13)]);
var inst_18835__$1 = cljs.core.seq(inst_18813);
var state_18936__$1 = (function (){var statearr_18993 = state_18936;
(statearr_18993[(7)] = inst_18835__$1);

return statearr_18993;
})();
if(inst_18835__$1){
var statearr_18994_19062 = state_18936__$1;
(statearr_18994_19062[(1)] = (16));

} else {
var statearr_18995_19063 = state_18936__$1;
(statearr_18995_19063[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (9))){
var inst_18865 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_18996_19064 = state_18936__$1;
(statearr_18996_19064[(2)] = inst_18865);

(statearr_18996_19064[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (5))){
var inst_18811 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18812 = cljs.core.seq(inst_18811);
var inst_18813 = inst_18812;
var inst_18814 = null;
var inst_18815 = (0);
var inst_18816 = (0);
var state_18936__$1 = (function (){var statearr_18997 = state_18936;
(statearr_18997[(13)] = inst_18813);

(statearr_18997[(15)] = inst_18815);

(statearr_18997[(16)] = inst_18816);

(statearr_18997[(17)] = inst_18814);

return statearr_18997;
})();
var statearr_18998_19065 = state_18936__$1;
(statearr_18998_19065[(2)] = null);

(statearr_18998_19065[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (14))){
var state_18936__$1 = state_18936;
var statearr_18999_19066 = state_18936__$1;
(statearr_18999_19066[(2)] = null);

(statearr_18999_19066[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (45))){
var inst_18926 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_19000_19067 = state_18936__$1;
(statearr_19000_19067[(2)] = inst_18926);

(statearr_19000_19067[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (26))){
var inst_18868 = (state_18936[(29)]);
var inst_18922 = (state_18936[(2)]);
var inst_18923 = cljs.core.seq(inst_18868);
var state_18936__$1 = (function (){var statearr_19001 = state_18936;
(statearr_19001[(31)] = inst_18922);

return statearr_19001;
})();
if(inst_18923){
var statearr_19002_19068 = state_18936__$1;
(statearr_19002_19068[(1)] = (42));

} else {
var statearr_19003_19069 = state_18936__$1;
(statearr_19003_19069[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (16))){
var inst_18835 = (state_18936[(7)]);
var inst_18837 = cljs.core.chunked_seq_QMARK_(inst_18835);
var state_18936__$1 = state_18936;
if(inst_18837){
var statearr_19004_19070 = state_18936__$1;
(statearr_19004_19070[(1)] = (19));

} else {
var statearr_19005_19071 = state_18936__$1;
(statearr_19005_19071[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (38))){
var inst_18915 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_19006_19072 = state_18936__$1;
(statearr_19006_19072[(2)] = inst_18915);

(statearr_19006_19072[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (30))){
var state_18936__$1 = state_18936;
var statearr_19007_19073 = state_18936__$1;
(statearr_19007_19073[(2)] = null);

(statearr_19007_19073[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (10))){
var inst_18816 = (state_18936[(16)]);
var inst_18814 = (state_18936[(17)]);
var inst_18824 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18814,inst_18816);
var inst_18825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18824,(0),null);
var inst_18826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18824,(1),null);
var state_18936__$1 = (function (){var statearr_19008 = state_18936;
(statearr_19008[(26)] = inst_18825);

return statearr_19008;
})();
if(cljs.core.truth_(inst_18826)){
var statearr_19009_19074 = state_18936__$1;
(statearr_19009_19074[(1)] = (13));

} else {
var statearr_19010_19075 = state_18936__$1;
(statearr_19010_19075[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (18))){
var inst_18861 = (state_18936[(2)]);
var state_18936__$1 = state_18936;
var statearr_19011_19076 = state_18936__$1;
(statearr_19011_19076[(2)] = inst_18861);

(statearr_19011_19076[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (42))){
var state_18936__$1 = state_18936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18936__$1,(45),dchan);
} else {
if((state_val_18937 === (37))){
var inst_18904 = (state_18936[(23)]);
var inst_18895 = (state_18936[(25)]);
var inst_18804 = (state_18936[(12)]);
var inst_18904__$1 = cljs.core.first(inst_18895);
var inst_18905 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18904__$1,inst_18804,done);
var state_18936__$1 = (function (){var statearr_19012 = state_18936;
(statearr_19012[(23)] = inst_18904__$1);

return statearr_19012;
})();
if(cljs.core.truth_(inst_18905)){
var statearr_19013_19077 = state_18936__$1;
(statearr_19013_19077[(1)] = (39));

} else {
var statearr_19014_19078 = state_18936__$1;
(statearr_19014_19078[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18937 === (8))){
var inst_18815 = (state_18936[(15)]);
var inst_18816 = (state_18936[(16)]);
var inst_18818 = (inst_18816 < inst_18815);
var inst_18819 = inst_18818;
var state_18936__$1 = state_18936;
if(cljs.core.truth_(inst_18819)){
var statearr_19015_19079 = state_18936__$1;
(statearr_19015_19079[(1)] = (10));

} else {
var statearr_19016_19080 = state_18936__$1;
(statearr_19016_19080[(1)] = (11));

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
});})(c__17677__auto___19026,cs,m,dchan,dctr,done))
;
return ((function (switch__17551__auto__,c__17677__auto___19026,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17552__auto__ = null;
var cljs$core$async$mult_$_state_machine__17552__auto____0 = (function (){
var statearr_19020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19020[(0)] = cljs$core$async$mult_$_state_machine__17552__auto__);

(statearr_19020[(1)] = (1));

return statearr_19020;
});
var cljs$core$async$mult_$_state_machine__17552__auto____1 = (function (state_18936){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_18936);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e19021){if((e19021 instanceof Object)){
var ex__17555__auto__ = e19021;
var statearr_19022_19081 = state_18936;
(statearr_19022_19081[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18936);

return cljs.core.cst$kw$recur;
} else {
throw e19021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__19082 = state_18936;
state_18936 = G__19082;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17552__auto__ = function(state_18936){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17552__auto____1.call(this,state_18936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17552__auto____0;
cljs$core$async$mult_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17552__auto____1;
return cljs$core$async$mult_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___19026,cs,m,dchan,dctr,done))
})();
var state__17679__auto__ = (function (){var statearr_19023 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_19023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___19026);

return statearr_19023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___19026,cs,m,dchan,dctr,done))
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
var args19083 = [];
var len__11171__auto___19086 = arguments.length;
var i__11172__auto___19087 = (0);
while(true){
if((i__11172__auto___19087 < len__11171__auto___19086)){
args19083.push((arguments[i__11172__auto___19087]));

var G__19088 = (i__11172__auto___19087 + (1));
i__11172__auto___19087 = G__19088;
continue;
} else {
}
break;
}

var G__19085 = args19083.length;
switch (G__19085) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19083.length)].join('')));

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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10706__auto__.call(null,m,ch));
} else {
var m__10706__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10706__auto____$1.call(null,m,ch));
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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10706__auto__.call(null,m,ch));
} else {
var m__10706__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10706__auto____$1.call(null,m,ch));
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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10706__auto__.call(null,m));
} else {
var m__10706__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10706__auto____$1.call(null,m));
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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10706__auto__.call(null,m,state_map));
} else {
var m__10706__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10706__auto____$1.call(null,m,state_map));
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
var x__10705__auto__ = (((m == null))?null:m);
var m__10706__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10706__auto__.call(null,m,mode));
} else {
var m__10706__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10706__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11178__auto__ = [];
var len__11171__auto___19100 = arguments.length;
var i__11172__auto___19101 = (0);
while(true){
if((i__11172__auto___19101 < len__11171__auto___19100)){
args__11178__auto__.push((arguments[i__11172__auto___19101]));

var G__19102 = (i__11172__auto___19101 + (1));
i__11172__auto___19101 = G__19102;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((3) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11179__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19094){
var map__19095 = p__19094;
var map__19095__$1 = ((((!((map__19095 == null)))?((((map__19095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19095):map__19095);
var opts = map__19095__$1;
var statearr_19097_19103 = state;
(statearr_19097_19103[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__19095,map__19095__$1,opts){
return (function (val){
var statearr_19098_19104 = state;
(statearr_19098_19104[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19095,map__19095__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_19099_19105 = state;
(statearr_19099_19105[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19090){
var G__19091 = cljs.core.first(seq19090);
var seq19090__$1 = cljs.core.next(seq19090);
var G__19092 = cljs.core.first(seq19090__$1);
var seq19090__$2 = cljs.core.next(seq19090__$1);
var G__19093 = cljs.core.first(seq19090__$2);
var seq19090__$3 = cljs.core.next(seq19090__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19091,G__19092,G__19093,seq19090__$3);
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
var cs = (function (){var G__19275 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19275) : cljs.core.atom.call(null,G__19275));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__19276 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19276) : cljs.core.atom.call(null,G__19276));
})();
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
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19277 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19278){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19278 = meta19278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19279,meta19278__$1){
var self__ = this;
var _19279__$1 = this;
return (new cljs.core.async.t_cljs$core$async19277(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19278__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19279){
var self__ = this;
var _19279__$1 = this;
return self__.meta19278;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19280_19444 = self__.cs;
var G__19281_19445 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19280_19444,G__19281_19445) : cljs.core.reset_BANG_.call(null,G__19280_19444,G__19281_19445));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta19278], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19277";

cljs.core.async.t_cljs$core$async19277.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async19277");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19277 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19277(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19278){
return (new cljs.core.async.t_cljs$core$async19277(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19278));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19277(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17677__auto___19446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___19446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___19446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19381){
var state_val_19382 = (state_19381[(1)]);
if((state_val_19382 === (7))){
var inst_19297 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19383_19447 = state_19381__$1;
(statearr_19383_19447[(2)] = inst_19297);

(statearr_19383_19447[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (20))){
var inst_19309 = (state_19381[(7)]);
var state_19381__$1 = state_19381;
var statearr_19384_19448 = state_19381__$1;
(statearr_19384_19448[(2)] = inst_19309);

(statearr_19384_19448[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (27))){
var state_19381__$1 = state_19381;
var statearr_19385_19449 = state_19381__$1;
(statearr_19385_19449[(2)] = null);

(statearr_19385_19449[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (1))){
var inst_19285 = (state_19381[(8)]);
var inst_19285__$1 = calc_state();
var inst_19287 = (inst_19285__$1 == null);
var inst_19288 = cljs.core.not(inst_19287);
var state_19381__$1 = (function (){var statearr_19386 = state_19381;
(statearr_19386[(8)] = inst_19285__$1);

return statearr_19386;
})();
if(inst_19288){
var statearr_19387_19450 = state_19381__$1;
(statearr_19387_19450[(1)] = (2));

} else {
var statearr_19388_19451 = state_19381__$1;
(statearr_19388_19451[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (24))){
var inst_19355 = (state_19381[(9)]);
var inst_19341 = (state_19381[(10)]);
var inst_19332 = (state_19381[(11)]);
var inst_19355__$1 = (inst_19332.cljs$core$IFn$_invoke$arity$1 ? inst_19332.cljs$core$IFn$_invoke$arity$1(inst_19341) : inst_19332.call(null,inst_19341));
var state_19381__$1 = (function (){var statearr_19389 = state_19381;
(statearr_19389[(9)] = inst_19355__$1);

return statearr_19389;
})();
if(cljs.core.truth_(inst_19355__$1)){
var statearr_19390_19452 = state_19381__$1;
(statearr_19390_19452[(1)] = (29));

} else {
var statearr_19391_19453 = state_19381__$1;
(statearr_19391_19453[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (4))){
var inst_19300 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19300)){
var statearr_19392_19454 = state_19381__$1;
(statearr_19392_19454[(1)] = (8));

} else {
var statearr_19393_19455 = state_19381__$1;
(statearr_19393_19455[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (15))){
var inst_19326 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19326)){
var statearr_19394_19456 = state_19381__$1;
(statearr_19394_19456[(1)] = (19));

} else {
var statearr_19395_19457 = state_19381__$1;
(statearr_19395_19457[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (21))){
var inst_19331 = (state_19381[(12)]);
var inst_19331__$1 = (state_19381[(2)]);
var inst_19332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19331__$1,cljs.core.cst$kw$solos);
var inst_19333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19331__$1,cljs.core.cst$kw$mutes);
var inst_19334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19331__$1,cljs.core.cst$kw$reads);
var state_19381__$1 = (function (){var statearr_19396 = state_19381;
(statearr_19396[(12)] = inst_19331__$1);

(statearr_19396[(13)] = inst_19333);

(statearr_19396[(11)] = inst_19332);

return statearr_19396;
})();
return cljs.core.async.ioc_alts_BANG_(state_19381__$1,(22),inst_19334);
} else {
if((state_val_19382 === (31))){
var inst_19363 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19363)){
var statearr_19397_19458 = state_19381__$1;
(statearr_19397_19458[(1)] = (32));

} else {
var statearr_19398_19459 = state_19381__$1;
(statearr_19398_19459[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (32))){
var inst_19340 = (state_19381[(14)]);
var state_19381__$1 = state_19381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19381__$1,(35),out,inst_19340);
} else {
if((state_val_19382 === (33))){
var inst_19331 = (state_19381[(12)]);
var inst_19309 = inst_19331;
var state_19381__$1 = (function (){var statearr_19399 = state_19381;
(statearr_19399[(7)] = inst_19309);

return statearr_19399;
})();
var statearr_19400_19460 = state_19381__$1;
(statearr_19400_19460[(2)] = null);

(statearr_19400_19460[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (13))){
var inst_19309 = (state_19381[(7)]);
var inst_19316 = inst_19309.cljs$lang$protocol_mask$partition0$;
var inst_19317 = (inst_19316 & (64));
var inst_19318 = inst_19309.cljs$core$ISeq$;
var inst_19319 = (inst_19317) || (inst_19318);
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19319)){
var statearr_19401_19461 = state_19381__$1;
(statearr_19401_19461[(1)] = (16));

} else {
var statearr_19402_19462 = state_19381__$1;
(statearr_19402_19462[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (22))){
var inst_19340 = (state_19381[(14)]);
var inst_19341 = (state_19381[(10)]);
var inst_19339 = (state_19381[(2)]);
var inst_19340__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19339,(0),null);
var inst_19341__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19339,(1),null);
var inst_19342 = (inst_19340__$1 == null);
var inst_19343 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19341__$1,change);
var inst_19344 = (inst_19342) || (inst_19343);
var state_19381__$1 = (function (){var statearr_19403 = state_19381;
(statearr_19403[(14)] = inst_19340__$1);

(statearr_19403[(10)] = inst_19341__$1);

return statearr_19403;
})();
if(cljs.core.truth_(inst_19344)){
var statearr_19404_19463 = state_19381__$1;
(statearr_19404_19463[(1)] = (23));

} else {
var statearr_19405_19464 = state_19381__$1;
(statearr_19405_19464[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (36))){
var inst_19331 = (state_19381[(12)]);
var inst_19309 = inst_19331;
var state_19381__$1 = (function (){var statearr_19406 = state_19381;
(statearr_19406[(7)] = inst_19309);

return statearr_19406;
})();
var statearr_19407_19465 = state_19381__$1;
(statearr_19407_19465[(2)] = null);

(statearr_19407_19465[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (29))){
var inst_19355 = (state_19381[(9)]);
var state_19381__$1 = state_19381;
var statearr_19408_19466 = state_19381__$1;
(statearr_19408_19466[(2)] = inst_19355);

(statearr_19408_19466[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (6))){
var state_19381__$1 = state_19381;
var statearr_19409_19467 = state_19381__$1;
(statearr_19409_19467[(2)] = false);

(statearr_19409_19467[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (28))){
var inst_19351 = (state_19381[(2)]);
var inst_19352 = calc_state();
var inst_19309 = inst_19352;
var state_19381__$1 = (function (){var statearr_19410 = state_19381;
(statearr_19410[(15)] = inst_19351);

(statearr_19410[(7)] = inst_19309);

return statearr_19410;
})();
var statearr_19411_19468 = state_19381__$1;
(statearr_19411_19468[(2)] = null);

(statearr_19411_19468[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (25))){
var inst_19377 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19412_19469 = state_19381__$1;
(statearr_19412_19469[(2)] = inst_19377);

(statearr_19412_19469[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (34))){
var inst_19375 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19413_19470 = state_19381__$1;
(statearr_19413_19470[(2)] = inst_19375);

(statearr_19413_19470[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (17))){
var state_19381__$1 = state_19381;
var statearr_19414_19471 = state_19381__$1;
(statearr_19414_19471[(2)] = false);

(statearr_19414_19471[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (3))){
var state_19381__$1 = state_19381;
var statearr_19415_19472 = state_19381__$1;
(statearr_19415_19472[(2)] = false);

(statearr_19415_19472[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (12))){
var inst_19379 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19381__$1,inst_19379);
} else {
if((state_val_19382 === (2))){
var inst_19285 = (state_19381[(8)]);
var inst_19290 = inst_19285.cljs$lang$protocol_mask$partition0$;
var inst_19291 = (inst_19290 & (64));
var inst_19292 = inst_19285.cljs$core$ISeq$;
var inst_19293 = (inst_19291) || (inst_19292);
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19293)){
var statearr_19416_19473 = state_19381__$1;
(statearr_19416_19473[(1)] = (5));

} else {
var statearr_19417_19474 = state_19381__$1;
(statearr_19417_19474[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (23))){
var inst_19340 = (state_19381[(14)]);
var inst_19346 = (inst_19340 == null);
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19346)){
var statearr_19418_19475 = state_19381__$1;
(statearr_19418_19475[(1)] = (26));

} else {
var statearr_19419_19476 = state_19381__$1;
(statearr_19419_19476[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (35))){
var inst_19366 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
if(cljs.core.truth_(inst_19366)){
var statearr_19420_19477 = state_19381__$1;
(statearr_19420_19477[(1)] = (36));

} else {
var statearr_19421_19478 = state_19381__$1;
(statearr_19421_19478[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (19))){
var inst_19309 = (state_19381[(7)]);
var inst_19328 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19309);
var state_19381__$1 = state_19381;
var statearr_19422_19479 = state_19381__$1;
(statearr_19422_19479[(2)] = inst_19328);

(statearr_19422_19479[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (11))){
var inst_19309 = (state_19381[(7)]);
var inst_19313 = (inst_19309 == null);
var inst_19314 = cljs.core.not(inst_19313);
var state_19381__$1 = state_19381;
if(inst_19314){
var statearr_19423_19480 = state_19381__$1;
(statearr_19423_19480[(1)] = (13));

} else {
var statearr_19424_19481 = state_19381__$1;
(statearr_19424_19481[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (9))){
var inst_19285 = (state_19381[(8)]);
var state_19381__$1 = state_19381;
var statearr_19425_19482 = state_19381__$1;
(statearr_19425_19482[(2)] = inst_19285);

(statearr_19425_19482[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (5))){
var state_19381__$1 = state_19381;
var statearr_19426_19483 = state_19381__$1;
(statearr_19426_19483[(2)] = true);

(statearr_19426_19483[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (14))){
var state_19381__$1 = state_19381;
var statearr_19427_19484 = state_19381__$1;
(statearr_19427_19484[(2)] = false);

(statearr_19427_19484[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (26))){
var inst_19341 = (state_19381[(10)]);
var inst_19348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19341);
var state_19381__$1 = state_19381;
var statearr_19428_19485 = state_19381__$1;
(statearr_19428_19485[(2)] = inst_19348);

(statearr_19428_19485[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (16))){
var state_19381__$1 = state_19381;
var statearr_19429_19486 = state_19381__$1;
(statearr_19429_19486[(2)] = true);

(statearr_19429_19486[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (38))){
var inst_19371 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19430_19487 = state_19381__$1;
(statearr_19430_19487[(2)] = inst_19371);

(statearr_19430_19487[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (30))){
var inst_19333 = (state_19381[(13)]);
var inst_19341 = (state_19381[(10)]);
var inst_19332 = (state_19381[(11)]);
var inst_19358 = cljs.core.empty_QMARK_(inst_19332);
var inst_19359 = (inst_19333.cljs$core$IFn$_invoke$arity$1 ? inst_19333.cljs$core$IFn$_invoke$arity$1(inst_19341) : inst_19333.call(null,inst_19341));
var inst_19360 = cljs.core.not(inst_19359);
var inst_19361 = (inst_19358) && (inst_19360);
var state_19381__$1 = state_19381;
var statearr_19431_19488 = state_19381__$1;
(statearr_19431_19488[(2)] = inst_19361);

(statearr_19431_19488[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (10))){
var inst_19285 = (state_19381[(8)]);
var inst_19305 = (state_19381[(2)]);
var inst_19306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19305,cljs.core.cst$kw$solos);
var inst_19307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19305,cljs.core.cst$kw$mutes);
var inst_19308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19305,cljs.core.cst$kw$reads);
var inst_19309 = inst_19285;
var state_19381__$1 = (function (){var statearr_19432 = state_19381;
(statearr_19432[(16)] = inst_19307);

(statearr_19432[(17)] = inst_19308);

(statearr_19432[(18)] = inst_19306);

(statearr_19432[(7)] = inst_19309);

return statearr_19432;
})();
var statearr_19433_19489 = state_19381__$1;
(statearr_19433_19489[(2)] = null);

(statearr_19433_19489[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (18))){
var inst_19323 = (state_19381[(2)]);
var state_19381__$1 = state_19381;
var statearr_19434_19490 = state_19381__$1;
(statearr_19434_19490[(2)] = inst_19323);

(statearr_19434_19490[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (37))){
var state_19381__$1 = state_19381;
var statearr_19435_19491 = state_19381__$1;
(statearr_19435_19491[(2)] = null);

(statearr_19435_19491[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19382 === (8))){
var inst_19285 = (state_19381[(8)]);
var inst_19302 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19285);
var state_19381__$1 = state_19381;
var statearr_19436_19492 = state_19381__$1;
(statearr_19436_19492[(2)] = inst_19302);

(statearr_19436_19492[(1)] = (10));


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
});})(c__17677__auto___19446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17551__auto__,c__17677__auto___19446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17552__auto__ = null;
var cljs$core$async$mix_$_state_machine__17552__auto____0 = (function (){
var statearr_19440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19440[(0)] = cljs$core$async$mix_$_state_machine__17552__auto__);

(statearr_19440[(1)] = (1));

return statearr_19440;
});
var cljs$core$async$mix_$_state_machine__17552__auto____1 = (function (state_19381){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_19381);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e19441){if((e19441 instanceof Object)){
var ex__17555__auto__ = e19441;
var statearr_19442_19493 = state_19381;
(statearr_19442_19493[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19381);

return cljs.core.cst$kw$recur;
} else {
throw e19441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__19494 = state_19381;
state_19381 = G__19494;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17552__auto__ = function(state_19381){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17552__auto____1.call(this,state_19381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17552__auto____0;
cljs$core$async$mix_$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17552__auto____1;
return cljs$core$async$mix_$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___19446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17679__auto__ = (function (){var statearr_19443 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_19443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___19446);

return statearr_19443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___19446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10705__auto__ = (((p == null))?null:p);
var m__10706__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10706__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__10706__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10706__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__10705__auto__ = (((p == null))?null:p);
var m__10706__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10706__auto__.call(null,p,v,ch));
} else {
var m__10706__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10706__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19495 = [];
var len__11171__auto___19498 = arguments.length;
var i__11172__auto___19499 = (0);
while(true){
if((i__11172__auto___19499 < len__11171__auto___19498)){
args19495.push((arguments[i__11172__auto___19499]));

var G__19500 = (i__11172__auto___19499 + (1));
i__11172__auto___19499 = G__19500;
continue;
} else {
}
break;
}

var G__19497 = args19495.length;
switch (G__19497) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19495.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10705__auto__ = (((p == null))?null:p);
var m__10706__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__10706__auto__.call(null,p));
} else {
var m__10706__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__10706__auto____$1.call(null,p));
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
var x__10705__auto__ = (((p == null))?null:p);
var m__10706__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__10706__auto__.call(null,p,v));
} else {
var m__10706__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__10706__auto____$1.call(null,p,v));
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
var args19503 = [];
var len__11171__auto___19631 = arguments.length;
var i__11172__auto___19632 = (0);
while(true){
if((i__11172__auto___19632 < len__11171__auto___19631)){
args19503.push((arguments[i__11172__auto___19632]));

var G__19633 = (i__11172__auto___19632 + (1));
i__11172__auto___19632 = G__19633;
continue;
} else {
}
break;
}

var G__19505 = args19503.length;
switch (G__19505) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19503.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__19506 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19506) : cljs.core.atom.call(null,G__19506));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__9992__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__9992__auto__,mults){
return (function (p1__19502_SHARP_){
if(cljs.core.truth_((p1__19502_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19502_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19502_SHARP_.call(null,topic)))){
return p1__19502_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19502_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__9992__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19507 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19508){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19508 = meta19508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19509,meta19508__$1){
var self__ = this;
var _19509__$1 = this;
return (new cljs.core.async.t_cljs$core$async19507(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19508__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19509){
var self__ = this;
var _19509__$1 = this;
return self__.meta19508;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19510 = self__.mults;
var G__19511 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19510,G__19511) : cljs.core.reset_BANG_.call(null,G__19510,G__19511));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19508], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19507";

cljs.core.async.t_cljs$core$async19507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async19507");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19507 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19508){
return (new cljs.core.async.t_cljs$core$async19507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19508));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19507(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17677__auto___19635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___19635,mults,ensure_mult,p){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___19635,mults,ensure_mult,p){
return (function (state_19583){
var state_val_19584 = (state_19583[(1)]);
if((state_val_19584 === (7))){
var inst_19579 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19585_19636 = state_19583__$1;
(statearr_19585_19636[(2)] = inst_19579);

(statearr_19585_19636[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (20))){
var state_19583__$1 = state_19583;
var statearr_19586_19637 = state_19583__$1;
(statearr_19586_19637[(2)] = null);

(statearr_19586_19637[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (1))){
var state_19583__$1 = state_19583;
var statearr_19587_19638 = state_19583__$1;
(statearr_19587_19638[(2)] = null);

(statearr_19587_19638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (24))){
var inst_19562 = (state_19583[(7)]);
var inst_19571 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19562);
var state_19583__$1 = state_19583;
var statearr_19588_19639 = state_19583__$1;
(statearr_19588_19639[(2)] = inst_19571);

(statearr_19588_19639[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (4))){
var inst_19514 = (state_19583[(8)]);
var inst_19514__$1 = (state_19583[(2)]);
var inst_19515 = (inst_19514__$1 == null);
var state_19583__$1 = (function (){var statearr_19589 = state_19583;
(statearr_19589[(8)] = inst_19514__$1);

return statearr_19589;
})();
if(cljs.core.truth_(inst_19515)){
var statearr_19590_19640 = state_19583__$1;
(statearr_19590_19640[(1)] = (5));

} else {
var statearr_19591_19641 = state_19583__$1;
(statearr_19591_19641[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (15))){
var inst_19556 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19592_19642 = state_19583__$1;
(statearr_19592_19642[(2)] = inst_19556);

(statearr_19592_19642[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (21))){
var inst_19576 = (state_19583[(2)]);
var state_19583__$1 = (function (){var statearr_19593 = state_19583;
(statearr_19593[(9)] = inst_19576);

return statearr_19593;
})();
var statearr_19594_19643 = state_19583__$1;
(statearr_19594_19643[(2)] = null);

(statearr_19594_19643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (13))){
var inst_19538 = (state_19583[(10)]);
var inst_19540 = cljs.core.chunked_seq_QMARK_(inst_19538);
var state_19583__$1 = state_19583;
if(inst_19540){
var statearr_19595_19644 = state_19583__$1;
(statearr_19595_19644[(1)] = (16));

} else {
var statearr_19596_19645 = state_19583__$1;
(statearr_19596_19645[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (22))){
var inst_19568 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
if(cljs.core.truth_(inst_19568)){
var statearr_19597_19646 = state_19583__$1;
(statearr_19597_19646[(1)] = (23));

} else {
var statearr_19598_19647 = state_19583__$1;
(statearr_19598_19647[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (6))){
var inst_19564 = (state_19583[(11)]);
var inst_19514 = (state_19583[(8)]);
var inst_19562 = (state_19583[(7)]);
var inst_19562__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19514) : topic_fn.call(null,inst_19514));
var inst_19563 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19564__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19563,inst_19562__$1);
var state_19583__$1 = (function (){var statearr_19599 = state_19583;
(statearr_19599[(11)] = inst_19564__$1);

(statearr_19599[(7)] = inst_19562__$1);

return statearr_19599;
})();
if(cljs.core.truth_(inst_19564__$1)){
var statearr_19600_19648 = state_19583__$1;
(statearr_19600_19648[(1)] = (19));

} else {
var statearr_19601_19649 = state_19583__$1;
(statearr_19601_19649[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (25))){
var inst_19573 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19602_19650 = state_19583__$1;
(statearr_19602_19650[(2)] = inst_19573);

(statearr_19602_19650[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (17))){
var inst_19538 = (state_19583[(10)]);
var inst_19547 = cljs.core.first(inst_19538);
var inst_19548 = cljs.core.async.muxch_STAR_(inst_19547);
var inst_19549 = cljs.core.async.close_BANG_(inst_19548);
var inst_19550 = cljs.core.next(inst_19538);
var inst_19524 = inst_19550;
var inst_19525 = null;
var inst_19526 = (0);
var inst_19527 = (0);
var state_19583__$1 = (function (){var statearr_19603 = state_19583;
(statearr_19603[(12)] = inst_19526);

(statearr_19603[(13)] = inst_19527);

(statearr_19603[(14)] = inst_19524);

(statearr_19603[(15)] = inst_19549);

(statearr_19603[(16)] = inst_19525);

return statearr_19603;
})();
var statearr_19604_19651 = state_19583__$1;
(statearr_19604_19651[(2)] = null);

(statearr_19604_19651[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (3))){
var inst_19581 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19583__$1,inst_19581);
} else {
if((state_val_19584 === (12))){
var inst_19558 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19605_19652 = state_19583__$1;
(statearr_19605_19652[(2)] = inst_19558);

(statearr_19605_19652[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (2))){
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19583__$1,(4),ch);
} else {
if((state_val_19584 === (23))){
var state_19583__$1 = state_19583;
var statearr_19606_19653 = state_19583__$1;
(statearr_19606_19653[(2)] = null);

(statearr_19606_19653[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (19))){
var inst_19564 = (state_19583[(11)]);
var inst_19514 = (state_19583[(8)]);
var inst_19566 = cljs.core.async.muxch_STAR_(inst_19564);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19583__$1,(22),inst_19566,inst_19514);
} else {
if((state_val_19584 === (11))){
var inst_19538 = (state_19583[(10)]);
var inst_19524 = (state_19583[(14)]);
var inst_19538__$1 = cljs.core.seq(inst_19524);
var state_19583__$1 = (function (){var statearr_19607 = state_19583;
(statearr_19607[(10)] = inst_19538__$1);

return statearr_19607;
})();
if(inst_19538__$1){
var statearr_19608_19654 = state_19583__$1;
(statearr_19608_19654[(1)] = (13));

} else {
var statearr_19609_19655 = state_19583__$1;
(statearr_19609_19655[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (9))){
var inst_19560 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19610_19656 = state_19583__$1;
(statearr_19610_19656[(2)] = inst_19560);

(statearr_19610_19656[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (5))){
var inst_19521 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19522 = cljs.core.vals(inst_19521);
var inst_19523 = cljs.core.seq(inst_19522);
var inst_19524 = inst_19523;
var inst_19525 = null;
var inst_19526 = (0);
var inst_19527 = (0);
var state_19583__$1 = (function (){var statearr_19611 = state_19583;
(statearr_19611[(12)] = inst_19526);

(statearr_19611[(13)] = inst_19527);

(statearr_19611[(14)] = inst_19524);

(statearr_19611[(16)] = inst_19525);

return statearr_19611;
})();
var statearr_19612_19657 = state_19583__$1;
(statearr_19612_19657[(2)] = null);

(statearr_19612_19657[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (14))){
var state_19583__$1 = state_19583;
var statearr_19616_19658 = state_19583__$1;
(statearr_19616_19658[(2)] = null);

(statearr_19616_19658[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (16))){
var inst_19538 = (state_19583[(10)]);
var inst_19542 = cljs.core.chunk_first(inst_19538);
var inst_19543 = cljs.core.chunk_rest(inst_19538);
var inst_19544 = cljs.core.count(inst_19542);
var inst_19524 = inst_19543;
var inst_19525 = inst_19542;
var inst_19526 = inst_19544;
var inst_19527 = (0);
var state_19583__$1 = (function (){var statearr_19617 = state_19583;
(statearr_19617[(12)] = inst_19526);

(statearr_19617[(13)] = inst_19527);

(statearr_19617[(14)] = inst_19524);

(statearr_19617[(16)] = inst_19525);

return statearr_19617;
})();
var statearr_19618_19659 = state_19583__$1;
(statearr_19618_19659[(2)] = null);

(statearr_19618_19659[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (10))){
var inst_19526 = (state_19583[(12)]);
var inst_19527 = (state_19583[(13)]);
var inst_19524 = (state_19583[(14)]);
var inst_19525 = (state_19583[(16)]);
var inst_19532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19525,inst_19527);
var inst_19533 = cljs.core.async.muxch_STAR_(inst_19532);
var inst_19534 = cljs.core.async.close_BANG_(inst_19533);
var inst_19535 = (inst_19527 + (1));
var tmp19613 = inst_19526;
var tmp19614 = inst_19524;
var tmp19615 = inst_19525;
var inst_19524__$1 = tmp19614;
var inst_19525__$1 = tmp19615;
var inst_19526__$1 = tmp19613;
var inst_19527__$1 = inst_19535;
var state_19583__$1 = (function (){var statearr_19619 = state_19583;
(statearr_19619[(17)] = inst_19534);

(statearr_19619[(12)] = inst_19526__$1);

(statearr_19619[(13)] = inst_19527__$1);

(statearr_19619[(14)] = inst_19524__$1);

(statearr_19619[(16)] = inst_19525__$1);

return statearr_19619;
})();
var statearr_19620_19660 = state_19583__$1;
(statearr_19620_19660[(2)] = null);

(statearr_19620_19660[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (18))){
var inst_19553 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19621_19661 = state_19583__$1;
(statearr_19621_19661[(2)] = inst_19553);

(statearr_19621_19661[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19584 === (8))){
var inst_19526 = (state_19583[(12)]);
var inst_19527 = (state_19583[(13)]);
var inst_19529 = (inst_19527 < inst_19526);
var inst_19530 = inst_19529;
var state_19583__$1 = state_19583;
if(cljs.core.truth_(inst_19530)){
var statearr_19622_19662 = state_19583__$1;
(statearr_19622_19662[(1)] = (10));

} else {
var statearr_19623_19663 = state_19583__$1;
(statearr_19623_19663[(1)] = (11));

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
});})(c__17677__auto___19635,mults,ensure_mult,p))
;
return ((function (switch__17551__auto__,c__17677__auto___19635,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_19627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19627[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_19627[(1)] = (1));

return statearr_19627;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_19583){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_19583);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e19628){if((e19628 instanceof Object)){
var ex__17555__auto__ = e19628;
var statearr_19629_19664 = state_19583;
(statearr_19629_19664[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19583);

return cljs.core.cst$kw$recur;
} else {
throw e19628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__19665 = state_19583;
state_19583 = G__19665;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_19583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_19583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___19635,mults,ensure_mult,p))
})();
var state__17679__auto__ = (function (){var statearr_19630 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_19630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___19635);

return statearr_19630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___19635,mults,ensure_mult,p))
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
var args19666 = [];
var len__11171__auto___19669 = arguments.length;
var i__11172__auto___19670 = (0);
while(true){
if((i__11172__auto___19670 < len__11171__auto___19669)){
args19666.push((arguments[i__11172__auto___19670]));

var G__19671 = (i__11172__auto___19670 + (1));
i__11172__auto___19670 = G__19671;
continue;
} else {
}
break;
}

var G__19668 = args19666.length;
switch (G__19668) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19666.length)].join('')));

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
var args19673 = [];
var len__11171__auto___19676 = arguments.length;
var i__11172__auto___19677 = (0);
while(true){
if((i__11172__auto___19677 < len__11171__auto___19676)){
args19673.push((arguments[i__11172__auto___19677]));

var G__19678 = (i__11172__auto___19677 + (1));
i__11172__auto___19677 = G__19678;
continue;
} else {
}
break;
}

var G__19675 = args19673.length;
switch (G__19675) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19673.length)].join('')));

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
var args19680 = [];
var len__11171__auto___19751 = arguments.length;
var i__11172__auto___19752 = (0);
while(true){
if((i__11172__auto___19752 < len__11171__auto___19751)){
args19680.push((arguments[i__11172__auto___19752]));

var G__19753 = (i__11172__auto___19752 + (1));
i__11172__auto___19752 = G__19753;
continue;
} else {
}
break;
}

var G__19682 = args19680.length;
switch (G__19682) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19680.length)].join('')));

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
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
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
var c__17677__auto___19755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___19755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___19755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19721){
var state_val_19722 = (state_19721[(1)]);
if((state_val_19722 === (7))){
var state_19721__$1 = state_19721;
var statearr_19723_19756 = state_19721__$1;
(statearr_19723_19756[(2)] = null);

(statearr_19723_19756[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (1))){
var state_19721__$1 = state_19721;
var statearr_19724_19757 = state_19721__$1;
(statearr_19724_19757[(2)] = null);

(statearr_19724_19757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (4))){
var inst_19685 = (state_19721[(7)]);
var inst_19687 = (inst_19685 < cnt);
var state_19721__$1 = state_19721;
if(cljs.core.truth_(inst_19687)){
var statearr_19725_19758 = state_19721__$1;
(statearr_19725_19758[(1)] = (6));

} else {
var statearr_19726_19759 = state_19721__$1;
(statearr_19726_19759[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (15))){
var inst_19717 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
var statearr_19727_19760 = state_19721__$1;
(statearr_19727_19760[(2)] = inst_19717);

(statearr_19727_19760[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (13))){
var inst_19710 = cljs.core.async.close_BANG_(out);
var state_19721__$1 = state_19721;
var statearr_19728_19761 = state_19721__$1;
(statearr_19728_19761[(2)] = inst_19710);

(statearr_19728_19761[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (6))){
var state_19721__$1 = state_19721;
var statearr_19729_19762 = state_19721__$1;
(statearr_19729_19762[(2)] = null);

(statearr_19729_19762[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (3))){
var inst_19719 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19721__$1,inst_19719);
} else {
if((state_val_19722 === (12))){
var inst_19707 = (state_19721[(8)]);
var inst_19707__$1 = (state_19721[(2)]);
var inst_19708 = cljs.core.some(cljs.core.nil_QMARK_,inst_19707__$1);
var state_19721__$1 = (function (){var statearr_19730 = state_19721;
(statearr_19730[(8)] = inst_19707__$1);

return statearr_19730;
})();
if(cljs.core.truth_(inst_19708)){
var statearr_19731_19763 = state_19721__$1;
(statearr_19731_19763[(1)] = (13));

} else {
var statearr_19732_19764 = state_19721__$1;
(statearr_19732_19764[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (2))){
var inst_19684 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_19685 = (0);
var state_19721__$1 = (function (){var statearr_19733 = state_19721;
(statearr_19733[(7)] = inst_19685);

(statearr_19733[(9)] = inst_19684);

return statearr_19733;
})();
var statearr_19734_19765 = state_19721__$1;
(statearr_19734_19765[(2)] = null);

(statearr_19734_19765[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (11))){
var inst_19685 = (state_19721[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19721,(10),Object,null,(9));
var inst_19694 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19685) : chs__$1.call(null,inst_19685));
var inst_19695 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19685) : done.call(null,inst_19685));
var inst_19696 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19694,inst_19695);
var state_19721__$1 = state_19721;
var statearr_19735_19766 = state_19721__$1;
(statearr_19735_19766[(2)] = inst_19696);


cljs.core.async.impl.ioc_helpers.process_exception(state_19721__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (9))){
var inst_19685 = (state_19721[(7)]);
var inst_19698 = (state_19721[(2)]);
var inst_19699 = (inst_19685 + (1));
var inst_19685__$1 = inst_19699;
var state_19721__$1 = (function (){var statearr_19736 = state_19721;
(statearr_19736[(7)] = inst_19685__$1);

(statearr_19736[(10)] = inst_19698);

return statearr_19736;
})();
var statearr_19737_19767 = state_19721__$1;
(statearr_19737_19767[(2)] = null);

(statearr_19737_19767[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (5))){
var inst_19705 = (state_19721[(2)]);
var state_19721__$1 = (function (){var statearr_19738 = state_19721;
(statearr_19738[(11)] = inst_19705);

return statearr_19738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19721__$1,(12),dchan);
} else {
if((state_val_19722 === (14))){
var inst_19707 = (state_19721[(8)]);
var inst_19712 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19707);
var state_19721__$1 = state_19721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19721__$1,(16),out,inst_19712);
} else {
if((state_val_19722 === (16))){
var inst_19714 = (state_19721[(2)]);
var state_19721__$1 = (function (){var statearr_19739 = state_19721;
(statearr_19739[(12)] = inst_19714);

return statearr_19739;
})();
var statearr_19740_19768 = state_19721__$1;
(statearr_19740_19768[(2)] = null);

(statearr_19740_19768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (10))){
var inst_19689 = (state_19721[(2)]);
var inst_19690 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19721__$1 = (function (){var statearr_19741 = state_19721;
(statearr_19741[(13)] = inst_19689);

return statearr_19741;
})();
var statearr_19742_19769 = state_19721__$1;
(statearr_19742_19769[(2)] = inst_19690);


cljs.core.async.impl.ioc_helpers.process_exception(state_19721__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19722 === (8))){
var inst_19703 = (state_19721[(2)]);
var state_19721__$1 = state_19721;
var statearr_19743_19770 = state_19721__$1;
(statearr_19743_19770[(2)] = inst_19703);

(statearr_19743_19770[(1)] = (5));


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
});})(c__17677__auto___19755,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17551__auto__,c__17677__auto___19755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_19747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19747[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_19747[(1)] = (1));

return statearr_19747;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_19721){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_19721);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e19748){if((e19748 instanceof Object)){
var ex__17555__auto__ = e19748;
var statearr_19749_19771 = state_19721;
(statearr_19749_19771[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19721);

return cljs.core.cst$kw$recur;
} else {
throw e19748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__19772 = state_19721;
state_19721 = G__19772;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_19721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_19721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___19755,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17679__auto__ = (function (){var statearr_19750 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_19750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___19755);

return statearr_19750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___19755,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19774 = [];
var len__11171__auto___19832 = arguments.length;
var i__11172__auto___19833 = (0);
while(true){
if((i__11172__auto___19833 < len__11171__auto___19832)){
args19774.push((arguments[i__11172__auto___19833]));

var G__19834 = (i__11172__auto___19833 + (1));
i__11172__auto___19833 = G__19834;
continue;
} else {
}
break;
}

var G__19776 = args19774.length;
switch (G__19776) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19774.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17677__auto___19836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___19836,out){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___19836,out){
return (function (state_19808){
var state_val_19809 = (state_19808[(1)]);
if((state_val_19809 === (7))){
var inst_19788 = (state_19808[(7)]);
var inst_19787 = (state_19808[(8)]);
var inst_19787__$1 = (state_19808[(2)]);
var inst_19788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19787__$1,(0),null);
var inst_19789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19787__$1,(1),null);
var inst_19790 = (inst_19788__$1 == null);
var state_19808__$1 = (function (){var statearr_19810 = state_19808;
(statearr_19810[(7)] = inst_19788__$1);

(statearr_19810[(8)] = inst_19787__$1);

(statearr_19810[(9)] = inst_19789);

return statearr_19810;
})();
if(cljs.core.truth_(inst_19790)){
var statearr_19811_19837 = state_19808__$1;
(statearr_19811_19837[(1)] = (8));

} else {
var statearr_19812_19838 = state_19808__$1;
(statearr_19812_19838[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19809 === (1))){
var inst_19777 = cljs.core.vec(chs);
var inst_19778 = inst_19777;
var state_19808__$1 = (function (){var statearr_19813 = state_19808;
(statearr_19813[(10)] = inst_19778);

return statearr_19813;
})();
var statearr_19814_19839 = state_19808__$1;
(statearr_19814_19839[(2)] = null);

(statearr_19814_19839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19809 === (4))){
var inst_19778 = (state_19808[(10)]);
var state_19808__$1 = state_19808;
return cljs.core.async.ioc_alts_BANG_(state_19808__$1,(7),inst_19778);
} else {
if((state_val_19809 === (6))){
var inst_19804 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19815_19840 = state_19808__$1;
(statearr_19815_19840[(2)] = inst_19804);

(statearr_19815_19840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19809 === (3))){
var inst_19806 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19808__$1,inst_19806);
} else {
if((state_val_19809 === (2))){
var inst_19778 = (state_19808[(10)]);
var inst_19780 = cljs.core.count(inst_19778);
var inst_19781 = (inst_19780 > (0));
var state_19808__$1 = state_19808;
if(cljs.core.truth_(inst_19781)){
var statearr_19817_19841 = state_19808__$1;
(statearr_19817_19841[(1)] = (4));

} else {
var statearr_19818_19842 = state_19808__$1;
(statearr_19818_19842[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19809 === (11))){
var inst_19778 = (state_19808[(10)]);
var inst_19797 = (state_19808[(2)]);
var tmp19816 = inst_19778;
var inst_19778__$1 = tmp19816;
var state_19808__$1 = (function (){var statearr_19819 = state_19808;
(statearr_19819[(10)] = inst_19778__$1);

(statearr_19819[(11)] = inst_19797);

return statearr_19819;
})();
var statearr_19820_19843 = state_19808__$1;
(statearr_19820_19843[(2)] = null);

(statearr_19820_19843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19809 === (9))){
var inst_19788 = (state_19808[(7)]);
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19808__$1,(11),out,inst_19788);
} else {
if((state_val_19809 === (5))){
var inst_19802 = cljs.core.async.close_BANG_(out);
var state_19808__$1 = state_19808;
var statearr_19821_19844 = state_19808__$1;
(statearr_19821_19844[(2)] = inst_19802);

(statearr_19821_19844[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19809 === (10))){
var inst_19800 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19822_19845 = state_19808__$1;
(statearr_19822_19845[(2)] = inst_19800);

(statearr_19822_19845[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19809 === (8))){
var inst_19788 = (state_19808[(7)]);
var inst_19778 = (state_19808[(10)]);
var inst_19787 = (state_19808[(8)]);
var inst_19789 = (state_19808[(9)]);
var inst_19792 = (function (){var cs = inst_19778;
var vec__19783 = inst_19787;
var v = inst_19788;
var c = inst_19789;
return ((function (cs,vec__19783,v,c,inst_19788,inst_19778,inst_19787,inst_19789,state_val_19809,c__17677__auto___19836,out){
return (function (p1__19773_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19773_SHARP_);
});
;})(cs,vec__19783,v,c,inst_19788,inst_19778,inst_19787,inst_19789,state_val_19809,c__17677__auto___19836,out))
})();
var inst_19793 = cljs.core.filterv(inst_19792,inst_19778);
var inst_19778__$1 = inst_19793;
var state_19808__$1 = (function (){var statearr_19823 = state_19808;
(statearr_19823[(10)] = inst_19778__$1);

return statearr_19823;
})();
var statearr_19824_19846 = state_19808__$1;
(statearr_19824_19846[(2)] = null);

(statearr_19824_19846[(1)] = (2));


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
});})(c__17677__auto___19836,out))
;
return ((function (switch__17551__auto__,c__17677__auto___19836,out){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_19828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19828[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_19828[(1)] = (1));

return statearr_19828;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_19808){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_19808);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e19829){if((e19829 instanceof Object)){
var ex__17555__auto__ = e19829;
var statearr_19830_19847 = state_19808;
(statearr_19830_19847[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19808);

return cljs.core.cst$kw$recur;
} else {
throw e19829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__19848 = state_19808;
state_19808 = G__19848;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_19808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_19808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___19836,out))
})();
var state__17679__auto__ = (function (){var statearr_19831 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_19831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___19836);

return statearr_19831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___19836,out))
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
var args19849 = [];
var len__11171__auto___19898 = arguments.length;
var i__11172__auto___19899 = (0);
while(true){
if((i__11172__auto___19899 < len__11171__auto___19898)){
args19849.push((arguments[i__11172__auto___19899]));

var G__19900 = (i__11172__auto___19899 + (1));
i__11172__auto___19899 = G__19900;
continue;
} else {
}
break;
}

var G__19851 = args19849.length;
switch (G__19851) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19849.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17677__auto___19902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___19902,out){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___19902,out){
return (function (state_19875){
var state_val_19876 = (state_19875[(1)]);
if((state_val_19876 === (7))){
var inst_19857 = (state_19875[(7)]);
var inst_19857__$1 = (state_19875[(2)]);
var inst_19858 = (inst_19857__$1 == null);
var inst_19859 = cljs.core.not(inst_19858);
var state_19875__$1 = (function (){var statearr_19877 = state_19875;
(statearr_19877[(7)] = inst_19857__$1);

return statearr_19877;
})();
if(inst_19859){
var statearr_19878_19903 = state_19875__$1;
(statearr_19878_19903[(1)] = (8));

} else {
var statearr_19879_19904 = state_19875__$1;
(statearr_19879_19904[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (1))){
var inst_19852 = (0);
var state_19875__$1 = (function (){var statearr_19880 = state_19875;
(statearr_19880[(8)] = inst_19852);

return statearr_19880;
})();
var statearr_19881_19905 = state_19875__$1;
(statearr_19881_19905[(2)] = null);

(statearr_19881_19905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (4))){
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19875__$1,(7),ch);
} else {
if((state_val_19876 === (6))){
var inst_19870 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
var statearr_19882_19906 = state_19875__$1;
(statearr_19882_19906[(2)] = inst_19870);

(statearr_19882_19906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (3))){
var inst_19872 = (state_19875[(2)]);
var inst_19873 = cljs.core.async.close_BANG_(out);
var state_19875__$1 = (function (){var statearr_19883 = state_19875;
(statearr_19883[(9)] = inst_19872);

return statearr_19883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19875__$1,inst_19873);
} else {
if((state_val_19876 === (2))){
var inst_19852 = (state_19875[(8)]);
var inst_19854 = (inst_19852 < n);
var state_19875__$1 = state_19875;
if(cljs.core.truth_(inst_19854)){
var statearr_19884_19907 = state_19875__$1;
(statearr_19884_19907[(1)] = (4));

} else {
var statearr_19885_19908 = state_19875__$1;
(statearr_19885_19908[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (11))){
var inst_19852 = (state_19875[(8)]);
var inst_19862 = (state_19875[(2)]);
var inst_19863 = (inst_19852 + (1));
var inst_19852__$1 = inst_19863;
var state_19875__$1 = (function (){var statearr_19886 = state_19875;
(statearr_19886[(8)] = inst_19852__$1);

(statearr_19886[(10)] = inst_19862);

return statearr_19886;
})();
var statearr_19887_19909 = state_19875__$1;
(statearr_19887_19909[(2)] = null);

(statearr_19887_19909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (9))){
var state_19875__$1 = state_19875;
var statearr_19888_19910 = state_19875__$1;
(statearr_19888_19910[(2)] = null);

(statearr_19888_19910[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (5))){
var state_19875__$1 = state_19875;
var statearr_19889_19911 = state_19875__$1;
(statearr_19889_19911[(2)] = null);

(statearr_19889_19911[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (10))){
var inst_19867 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
var statearr_19890_19912 = state_19875__$1;
(statearr_19890_19912[(2)] = inst_19867);

(statearr_19890_19912[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (8))){
var inst_19857 = (state_19875[(7)]);
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19875__$1,(11),out,inst_19857);
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
});})(c__17677__auto___19902,out))
;
return ((function (switch__17551__auto__,c__17677__auto___19902,out){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_19894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19894[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_19894[(1)] = (1));

return statearr_19894;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_19875){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_19875);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e19895){if((e19895 instanceof Object)){
var ex__17555__auto__ = e19895;
var statearr_19896_19913 = state_19875;
(statearr_19896_19913[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19875);

return cljs.core.cst$kw$recur;
} else {
throw e19895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__19914 = state_19875;
state_19875 = G__19914;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_19875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_19875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___19902,out))
})();
var state__17679__auto__ = (function (){var statearr_19897 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_19897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___19902);

return statearr_19897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___19902,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19924 = (function (map_LT_,f,ch,meta19925){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19925 = meta19925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19926,meta19925__$1){
var self__ = this;
var _19926__$1 = this;
return (new cljs.core.async.t_cljs$core$async19924(self__.map_LT_,self__.f,self__.ch,meta19925__$1));
});

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19926){
var self__ = this;
var _19926__$1 = this;
return self__.meta19925;
});

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19927 = (function (map_LT_,f,ch,meta19925,_,fn1,meta19928){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19925 = meta19925;
this._ = _;
this.fn1 = fn1;
this.meta19928 = meta19928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19929,meta19928__$1){
var self__ = this;
var _19929__$1 = this;
return (new cljs.core.async.t_cljs$core$async19927(self__.map_LT_,self__.f,self__.ch,self__.meta19925,self__._,self__.fn1,meta19928__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19929){
var self__ = this;
var _19929__$1 = this;
return self__.meta19928;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19927.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19915_SHARP_){
var G__19930 = (((p1__19915_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19915_SHARP_) : self__.f.call(null,p1__19915_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19930) : f1.call(null,G__19930));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19927.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19925,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19924], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19928], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19927";

cljs.core.async.t_cljs$core$async19927.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async19927");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19927 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19927(map_LT___$1,f__$1,ch__$1,meta19925__$1,___$2,fn1__$1,meta19928){
return (new cljs.core.async.t_cljs$core$async19927(map_LT___$1,f__$1,ch__$1,meta19925__$1,___$2,fn1__$1,meta19928));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19927(self__.map_LT_,self__.f,self__.ch,self__.meta19925,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9980__auto__ = ret;
if(cljs.core.truth_(and__9980__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__9980__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19931 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19931) : self__.f.call(null,G__19931));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19925], null);
});

cljs.core.async.t_cljs$core$async19924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19924";

cljs.core.async.t_cljs$core$async19924.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async19924");
});

cljs.core.async.__GT_t_cljs$core$async19924 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19924(map_LT___$1,f__$1,ch__$1,meta19925){
return (new cljs.core.async.t_cljs$core$async19924(map_LT___$1,f__$1,ch__$1,meta19925));
});

}

return (new cljs.core.async.t_cljs$core$async19924(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19935 = (function (map_GT_,f,ch,meta19936){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19936 = meta19936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19937,meta19936__$1){
var self__ = this;
var _19937__$1 = this;
return (new cljs.core.async.t_cljs$core$async19935(self__.map_GT_,self__.f,self__.ch,meta19936__$1));
});

cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19937){
var self__ = this;
var _19937__$1 = this;
return self__.meta19936;
});

cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19936], null);
});

cljs.core.async.t_cljs$core$async19935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19935";

cljs.core.async.t_cljs$core$async19935.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async19935");
});

cljs.core.async.__GT_t_cljs$core$async19935 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19935(map_GT___$1,f__$1,ch__$1,meta19936){
return (new cljs.core.async.t_cljs$core$async19935(map_GT___$1,f__$1,ch__$1,meta19936));
});

}

return (new cljs.core.async.t_cljs$core$async19935(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19941 = (function (filter_GT_,p,ch,meta19942){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19942 = meta19942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19943,meta19942__$1){
var self__ = this;
var _19943__$1 = this;
return (new cljs.core.async.t_cljs$core$async19941(self__.filter_GT_,self__.p,self__.ch,meta19942__$1));
});

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19943){
var self__ = this;
var _19943__$1 = this;
return self__.meta19942;
});

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19942], null);
});

cljs.core.async.t_cljs$core$async19941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19941";

cljs.core.async.t_cljs$core$async19941.cljs$lang$ctorPrWriter = (function (this__10644__auto__,writer__10645__auto__,opt__10646__auto__){
return cljs.core._write(writer__10645__auto__,"cljs.core.async/t_cljs$core$async19941");
});

cljs.core.async.__GT_t_cljs$core$async19941 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19941(filter_GT___$1,p__$1,ch__$1,meta19942){
return (new cljs.core.async.t_cljs$core$async19941(filter_GT___$1,p__$1,ch__$1,meta19942));
});

}

return (new cljs.core.async.t_cljs$core$async19941(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19944 = [];
var len__11171__auto___19988 = arguments.length;
var i__11172__auto___19989 = (0);
while(true){
if((i__11172__auto___19989 < len__11171__auto___19988)){
args19944.push((arguments[i__11172__auto___19989]));

var G__19990 = (i__11172__auto___19989 + (1));
i__11172__auto___19989 = G__19990;
continue;
} else {
}
break;
}

var G__19946 = args19944.length;
switch (G__19946) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19944.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17677__auto___19992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___19992,out){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___19992,out){
return (function (state_19967){
var state_val_19968 = (state_19967[(1)]);
if((state_val_19968 === (7))){
var inst_19963 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19969_19993 = state_19967__$1;
(statearr_19969_19993[(2)] = inst_19963);

(statearr_19969_19993[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (1))){
var state_19967__$1 = state_19967;
var statearr_19970_19994 = state_19967__$1;
(statearr_19970_19994[(2)] = null);

(statearr_19970_19994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (4))){
var inst_19949 = (state_19967[(7)]);
var inst_19949__$1 = (state_19967[(2)]);
var inst_19950 = (inst_19949__$1 == null);
var state_19967__$1 = (function (){var statearr_19971 = state_19967;
(statearr_19971[(7)] = inst_19949__$1);

return statearr_19971;
})();
if(cljs.core.truth_(inst_19950)){
var statearr_19972_19995 = state_19967__$1;
(statearr_19972_19995[(1)] = (5));

} else {
var statearr_19973_19996 = state_19967__$1;
(statearr_19973_19996[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (6))){
var inst_19949 = (state_19967[(7)]);
var inst_19954 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19949) : p.call(null,inst_19949));
var state_19967__$1 = state_19967;
if(cljs.core.truth_(inst_19954)){
var statearr_19974_19997 = state_19967__$1;
(statearr_19974_19997[(1)] = (8));

} else {
var statearr_19975_19998 = state_19967__$1;
(statearr_19975_19998[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (3))){
var inst_19965 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19967__$1,inst_19965);
} else {
if((state_val_19968 === (2))){
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19967__$1,(4),ch);
} else {
if((state_val_19968 === (11))){
var inst_19957 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19976_19999 = state_19967__$1;
(statearr_19976_19999[(2)] = inst_19957);

(statearr_19976_19999[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (9))){
var state_19967__$1 = state_19967;
var statearr_19977_20000 = state_19967__$1;
(statearr_19977_20000[(2)] = null);

(statearr_19977_20000[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (5))){
var inst_19952 = cljs.core.async.close_BANG_(out);
var state_19967__$1 = state_19967;
var statearr_19978_20001 = state_19967__$1;
(statearr_19978_20001[(2)] = inst_19952);

(statearr_19978_20001[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (10))){
var inst_19960 = (state_19967[(2)]);
var state_19967__$1 = (function (){var statearr_19979 = state_19967;
(statearr_19979[(8)] = inst_19960);

return statearr_19979;
})();
var statearr_19980_20002 = state_19967__$1;
(statearr_19980_20002[(2)] = null);

(statearr_19980_20002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19968 === (8))){
var inst_19949 = (state_19967[(7)]);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19967__$1,(11),out,inst_19949);
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
});})(c__17677__auto___19992,out))
;
return ((function (switch__17551__auto__,c__17677__auto___19992,out){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_19984 = [null,null,null,null,null,null,null,null,null];
(statearr_19984[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_19984[(1)] = (1));

return statearr_19984;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_19967){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_19967);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e19985){if((e19985 instanceof Object)){
var ex__17555__auto__ = e19985;
var statearr_19986_20003 = state_19967;
(statearr_19986_20003[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19967);

return cljs.core.cst$kw$recur;
} else {
throw e19985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__20004 = state_19967;
state_19967 = G__20004;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_19967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_19967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___19992,out))
})();
var state__17679__auto__ = (function (){var statearr_19987 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_19987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___19992);

return statearr_19987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___19992,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20005 = [];
var len__11171__auto___20008 = arguments.length;
var i__11172__auto___20009 = (0);
while(true){
if((i__11172__auto___20009 < len__11171__auto___20008)){
args20005.push((arguments[i__11172__auto___20009]));

var G__20010 = (i__11172__auto___20009 + (1));
i__11172__auto___20009 = G__20010;
continue;
} else {
}
break;
}

var G__20007 = args20005.length;
switch (G__20007) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20005.length)].join('')));

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
var c__17677__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto__){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto__){
return (function (state_20177){
var state_val_20178 = (state_20177[(1)]);
if((state_val_20178 === (7))){
var inst_20173 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20179_20220 = state_20177__$1;
(statearr_20179_20220[(2)] = inst_20173);

(statearr_20179_20220[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (20))){
var inst_20143 = (state_20177[(7)]);
var inst_20154 = (state_20177[(2)]);
var inst_20155 = cljs.core.next(inst_20143);
var inst_20129 = inst_20155;
var inst_20130 = null;
var inst_20131 = (0);
var inst_20132 = (0);
var state_20177__$1 = (function (){var statearr_20180 = state_20177;
(statearr_20180[(8)] = inst_20132);

(statearr_20180[(9)] = inst_20129);

(statearr_20180[(10)] = inst_20130);

(statearr_20180[(11)] = inst_20154);

(statearr_20180[(12)] = inst_20131);

return statearr_20180;
})();
var statearr_20181_20221 = state_20177__$1;
(statearr_20181_20221[(2)] = null);

(statearr_20181_20221[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (1))){
var state_20177__$1 = state_20177;
var statearr_20182_20222 = state_20177__$1;
(statearr_20182_20222[(2)] = null);

(statearr_20182_20222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (4))){
var inst_20118 = (state_20177[(13)]);
var inst_20118__$1 = (state_20177[(2)]);
var inst_20119 = (inst_20118__$1 == null);
var state_20177__$1 = (function (){var statearr_20183 = state_20177;
(statearr_20183[(13)] = inst_20118__$1);

return statearr_20183;
})();
if(cljs.core.truth_(inst_20119)){
var statearr_20184_20223 = state_20177__$1;
(statearr_20184_20223[(1)] = (5));

} else {
var statearr_20185_20224 = state_20177__$1;
(statearr_20185_20224[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (15))){
var state_20177__$1 = state_20177;
var statearr_20189_20225 = state_20177__$1;
(statearr_20189_20225[(2)] = null);

(statearr_20189_20225[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (21))){
var state_20177__$1 = state_20177;
var statearr_20190_20226 = state_20177__$1;
(statearr_20190_20226[(2)] = null);

(statearr_20190_20226[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (13))){
var inst_20132 = (state_20177[(8)]);
var inst_20129 = (state_20177[(9)]);
var inst_20130 = (state_20177[(10)]);
var inst_20131 = (state_20177[(12)]);
var inst_20139 = (state_20177[(2)]);
var inst_20140 = (inst_20132 + (1));
var tmp20186 = inst_20129;
var tmp20187 = inst_20130;
var tmp20188 = inst_20131;
var inst_20129__$1 = tmp20186;
var inst_20130__$1 = tmp20187;
var inst_20131__$1 = tmp20188;
var inst_20132__$1 = inst_20140;
var state_20177__$1 = (function (){var statearr_20191 = state_20177;
(statearr_20191[(8)] = inst_20132__$1);

(statearr_20191[(9)] = inst_20129__$1);

(statearr_20191[(10)] = inst_20130__$1);

(statearr_20191[(14)] = inst_20139);

(statearr_20191[(12)] = inst_20131__$1);

return statearr_20191;
})();
var statearr_20192_20227 = state_20177__$1;
(statearr_20192_20227[(2)] = null);

(statearr_20192_20227[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (22))){
var state_20177__$1 = state_20177;
var statearr_20193_20228 = state_20177__$1;
(statearr_20193_20228[(2)] = null);

(statearr_20193_20228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (6))){
var inst_20118 = (state_20177[(13)]);
var inst_20127 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20118) : f.call(null,inst_20118));
var inst_20128 = cljs.core.seq(inst_20127);
var inst_20129 = inst_20128;
var inst_20130 = null;
var inst_20131 = (0);
var inst_20132 = (0);
var state_20177__$1 = (function (){var statearr_20194 = state_20177;
(statearr_20194[(8)] = inst_20132);

(statearr_20194[(9)] = inst_20129);

(statearr_20194[(10)] = inst_20130);

(statearr_20194[(12)] = inst_20131);

return statearr_20194;
})();
var statearr_20195_20229 = state_20177__$1;
(statearr_20195_20229[(2)] = null);

(statearr_20195_20229[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (17))){
var inst_20143 = (state_20177[(7)]);
var inst_20147 = cljs.core.chunk_first(inst_20143);
var inst_20148 = cljs.core.chunk_rest(inst_20143);
var inst_20149 = cljs.core.count(inst_20147);
var inst_20129 = inst_20148;
var inst_20130 = inst_20147;
var inst_20131 = inst_20149;
var inst_20132 = (0);
var state_20177__$1 = (function (){var statearr_20196 = state_20177;
(statearr_20196[(8)] = inst_20132);

(statearr_20196[(9)] = inst_20129);

(statearr_20196[(10)] = inst_20130);

(statearr_20196[(12)] = inst_20131);

return statearr_20196;
})();
var statearr_20197_20230 = state_20177__$1;
(statearr_20197_20230[(2)] = null);

(statearr_20197_20230[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (3))){
var inst_20175 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20177__$1,inst_20175);
} else {
if((state_val_20178 === (12))){
var inst_20163 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20198_20231 = state_20177__$1;
(statearr_20198_20231[(2)] = inst_20163);

(statearr_20198_20231[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (2))){
var state_20177__$1 = state_20177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20177__$1,(4),in$);
} else {
if((state_val_20178 === (23))){
var inst_20171 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20199_20232 = state_20177__$1;
(statearr_20199_20232[(2)] = inst_20171);

(statearr_20199_20232[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (19))){
var inst_20158 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20200_20233 = state_20177__$1;
(statearr_20200_20233[(2)] = inst_20158);

(statearr_20200_20233[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (11))){
var inst_20143 = (state_20177[(7)]);
var inst_20129 = (state_20177[(9)]);
var inst_20143__$1 = cljs.core.seq(inst_20129);
var state_20177__$1 = (function (){var statearr_20201 = state_20177;
(statearr_20201[(7)] = inst_20143__$1);

return statearr_20201;
})();
if(inst_20143__$1){
var statearr_20202_20234 = state_20177__$1;
(statearr_20202_20234[(1)] = (14));

} else {
var statearr_20203_20235 = state_20177__$1;
(statearr_20203_20235[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (9))){
var inst_20165 = (state_20177[(2)]);
var inst_20166 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20177__$1 = (function (){var statearr_20204 = state_20177;
(statearr_20204[(15)] = inst_20165);

return statearr_20204;
})();
if(cljs.core.truth_(inst_20166)){
var statearr_20205_20236 = state_20177__$1;
(statearr_20205_20236[(1)] = (21));

} else {
var statearr_20206_20237 = state_20177__$1;
(statearr_20206_20237[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (5))){
var inst_20121 = cljs.core.async.close_BANG_(out);
var state_20177__$1 = state_20177;
var statearr_20207_20238 = state_20177__$1;
(statearr_20207_20238[(2)] = inst_20121);

(statearr_20207_20238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (14))){
var inst_20143 = (state_20177[(7)]);
var inst_20145 = cljs.core.chunked_seq_QMARK_(inst_20143);
var state_20177__$1 = state_20177;
if(inst_20145){
var statearr_20208_20239 = state_20177__$1;
(statearr_20208_20239[(1)] = (17));

} else {
var statearr_20209_20240 = state_20177__$1;
(statearr_20209_20240[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (16))){
var inst_20161 = (state_20177[(2)]);
var state_20177__$1 = state_20177;
var statearr_20210_20241 = state_20177__$1;
(statearr_20210_20241[(2)] = inst_20161);

(statearr_20210_20241[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20178 === (10))){
var inst_20132 = (state_20177[(8)]);
var inst_20130 = (state_20177[(10)]);
var inst_20137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20130,inst_20132);
var state_20177__$1 = state_20177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20177__$1,(13),out,inst_20137);
} else {
if((state_val_20178 === (18))){
var inst_20143 = (state_20177[(7)]);
var inst_20152 = cljs.core.first(inst_20143);
var state_20177__$1 = state_20177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20177__$1,(20),out,inst_20152);
} else {
if((state_val_20178 === (8))){
var inst_20132 = (state_20177[(8)]);
var inst_20131 = (state_20177[(12)]);
var inst_20134 = (inst_20132 < inst_20131);
var inst_20135 = inst_20134;
var state_20177__$1 = state_20177;
if(cljs.core.truth_(inst_20135)){
var statearr_20211_20242 = state_20177__$1;
(statearr_20211_20242[(1)] = (10));

} else {
var statearr_20212_20243 = state_20177__$1;
(statearr_20212_20243[(1)] = (11));

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
});})(c__17677__auto__))
;
return ((function (switch__17551__auto__,c__17677__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17552__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17552__auto____0 = (function (){
var statearr_20216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20216[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17552__auto__);

(statearr_20216[(1)] = (1));

return statearr_20216;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17552__auto____1 = (function (state_20177){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_20177);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e20217){if((e20217 instanceof Object)){
var ex__17555__auto__ = e20217;
var statearr_20218_20244 = state_20177;
(statearr_20218_20244[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20177);

return cljs.core.cst$kw$recur;
} else {
throw e20217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__20245 = state_20177;
state_20177 = G__20245;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17552__auto__ = function(state_20177){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17552__auto____1.call(this,state_20177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17552__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17552__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto__))
})();
var state__17679__auto__ = (function (){var statearr_20219 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_20219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto__);

return statearr_20219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto__))
);

return c__17677__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20246 = [];
var len__11171__auto___20249 = arguments.length;
var i__11172__auto___20250 = (0);
while(true){
if((i__11172__auto___20250 < len__11171__auto___20249)){
args20246.push((arguments[i__11172__auto___20250]));

var G__20251 = (i__11172__auto___20250 + (1));
i__11172__auto___20250 = G__20251;
continue;
} else {
}
break;
}

var G__20248 = args20246.length;
switch (G__20248) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20246.length)].join('')));

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
var args20253 = [];
var len__11171__auto___20256 = arguments.length;
var i__11172__auto___20257 = (0);
while(true){
if((i__11172__auto___20257 < len__11171__auto___20256)){
args20253.push((arguments[i__11172__auto___20257]));

var G__20258 = (i__11172__auto___20257 + (1));
i__11172__auto___20257 = G__20258;
continue;
} else {
}
break;
}

var G__20255 = args20253.length;
switch (G__20255) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20253.length)].join('')));

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
var args20260 = [];
var len__11171__auto___20311 = arguments.length;
var i__11172__auto___20312 = (0);
while(true){
if((i__11172__auto___20312 < len__11171__auto___20311)){
args20260.push((arguments[i__11172__auto___20312]));

var G__20313 = (i__11172__auto___20312 + (1));
i__11172__auto___20312 = G__20313;
continue;
} else {
}
break;
}

var G__20262 = args20260.length;
switch (G__20262) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20260.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17677__auto___20315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___20315,out){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___20315,out){
return (function (state_20286){
var state_val_20287 = (state_20286[(1)]);
if((state_val_20287 === (7))){
var inst_20281 = (state_20286[(2)]);
var state_20286__$1 = state_20286;
var statearr_20288_20316 = state_20286__$1;
(statearr_20288_20316[(2)] = inst_20281);

(statearr_20288_20316[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20287 === (1))){
var inst_20263 = null;
var state_20286__$1 = (function (){var statearr_20289 = state_20286;
(statearr_20289[(7)] = inst_20263);

return statearr_20289;
})();
var statearr_20290_20317 = state_20286__$1;
(statearr_20290_20317[(2)] = null);

(statearr_20290_20317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20287 === (4))){
var inst_20266 = (state_20286[(8)]);
var inst_20266__$1 = (state_20286[(2)]);
var inst_20267 = (inst_20266__$1 == null);
var inst_20268 = cljs.core.not(inst_20267);
var state_20286__$1 = (function (){var statearr_20291 = state_20286;
(statearr_20291[(8)] = inst_20266__$1);

return statearr_20291;
})();
if(inst_20268){
var statearr_20292_20318 = state_20286__$1;
(statearr_20292_20318[(1)] = (5));

} else {
var statearr_20293_20319 = state_20286__$1;
(statearr_20293_20319[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20287 === (6))){
var state_20286__$1 = state_20286;
var statearr_20294_20320 = state_20286__$1;
(statearr_20294_20320[(2)] = null);

(statearr_20294_20320[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20287 === (3))){
var inst_20283 = (state_20286[(2)]);
var inst_20284 = cljs.core.async.close_BANG_(out);
var state_20286__$1 = (function (){var statearr_20295 = state_20286;
(statearr_20295[(9)] = inst_20283);

return statearr_20295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20286__$1,inst_20284);
} else {
if((state_val_20287 === (2))){
var state_20286__$1 = state_20286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20286__$1,(4),ch);
} else {
if((state_val_20287 === (11))){
var inst_20266 = (state_20286[(8)]);
var inst_20275 = (state_20286[(2)]);
var inst_20263 = inst_20266;
var state_20286__$1 = (function (){var statearr_20296 = state_20286;
(statearr_20296[(7)] = inst_20263);

(statearr_20296[(10)] = inst_20275);

return statearr_20296;
})();
var statearr_20297_20321 = state_20286__$1;
(statearr_20297_20321[(2)] = null);

(statearr_20297_20321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20287 === (9))){
var inst_20266 = (state_20286[(8)]);
var state_20286__$1 = state_20286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20286__$1,(11),out,inst_20266);
} else {
if((state_val_20287 === (5))){
var inst_20263 = (state_20286[(7)]);
var inst_20266 = (state_20286[(8)]);
var inst_20270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20266,inst_20263);
var state_20286__$1 = state_20286;
if(inst_20270){
var statearr_20299_20322 = state_20286__$1;
(statearr_20299_20322[(1)] = (8));

} else {
var statearr_20300_20323 = state_20286__$1;
(statearr_20300_20323[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20287 === (10))){
var inst_20278 = (state_20286[(2)]);
var state_20286__$1 = state_20286;
var statearr_20301_20324 = state_20286__$1;
(statearr_20301_20324[(2)] = inst_20278);

(statearr_20301_20324[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20287 === (8))){
var inst_20263 = (state_20286[(7)]);
var tmp20298 = inst_20263;
var inst_20263__$1 = tmp20298;
var state_20286__$1 = (function (){var statearr_20302 = state_20286;
(statearr_20302[(7)] = inst_20263__$1);

return statearr_20302;
})();
var statearr_20303_20325 = state_20286__$1;
(statearr_20303_20325[(2)] = null);

(statearr_20303_20325[(1)] = (2));


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
});})(c__17677__auto___20315,out))
;
return ((function (switch__17551__auto__,c__17677__auto___20315,out){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_20307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20307[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_20307[(1)] = (1));

return statearr_20307;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_20286){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_20286);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e20308){if((e20308 instanceof Object)){
var ex__17555__auto__ = e20308;
var statearr_20309_20326 = state_20286;
(statearr_20309_20326[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20286);

return cljs.core.cst$kw$recur;
} else {
throw e20308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__20327 = state_20286;
state_20286 = G__20327;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_20286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_20286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___20315,out))
})();
var state__17679__auto__ = (function (){var statearr_20310 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_20310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___20315);

return statearr_20310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___20315,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20328 = [];
var len__11171__auto___20398 = arguments.length;
var i__11172__auto___20399 = (0);
while(true){
if((i__11172__auto___20399 < len__11171__auto___20398)){
args20328.push((arguments[i__11172__auto___20399]));

var G__20400 = (i__11172__auto___20399 + (1));
i__11172__auto___20399 = G__20400;
continue;
} else {
}
break;
}

var G__20330 = args20328.length;
switch (G__20330) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20328.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17677__auto___20402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___20402,out){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___20402,out){
return (function (state_20368){
var state_val_20369 = (state_20368[(1)]);
if((state_val_20369 === (7))){
var inst_20364 = (state_20368[(2)]);
var state_20368__$1 = state_20368;
var statearr_20370_20403 = state_20368__$1;
(statearr_20370_20403[(2)] = inst_20364);

(statearr_20370_20403[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (1))){
var inst_20331 = (new Array(n));
var inst_20332 = inst_20331;
var inst_20333 = (0);
var state_20368__$1 = (function (){var statearr_20371 = state_20368;
(statearr_20371[(7)] = inst_20332);

(statearr_20371[(8)] = inst_20333);

return statearr_20371;
})();
var statearr_20372_20404 = state_20368__$1;
(statearr_20372_20404[(2)] = null);

(statearr_20372_20404[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (4))){
var inst_20336 = (state_20368[(9)]);
var inst_20336__$1 = (state_20368[(2)]);
var inst_20337 = (inst_20336__$1 == null);
var inst_20338 = cljs.core.not(inst_20337);
var state_20368__$1 = (function (){var statearr_20373 = state_20368;
(statearr_20373[(9)] = inst_20336__$1);

return statearr_20373;
})();
if(inst_20338){
var statearr_20374_20405 = state_20368__$1;
(statearr_20374_20405[(1)] = (5));

} else {
var statearr_20375_20406 = state_20368__$1;
(statearr_20375_20406[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (15))){
var inst_20358 = (state_20368[(2)]);
var state_20368__$1 = state_20368;
var statearr_20376_20407 = state_20368__$1;
(statearr_20376_20407[(2)] = inst_20358);

(statearr_20376_20407[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (13))){
var state_20368__$1 = state_20368;
var statearr_20377_20408 = state_20368__$1;
(statearr_20377_20408[(2)] = null);

(statearr_20377_20408[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (6))){
var inst_20333 = (state_20368[(8)]);
var inst_20354 = (inst_20333 > (0));
var state_20368__$1 = state_20368;
if(cljs.core.truth_(inst_20354)){
var statearr_20378_20409 = state_20368__$1;
(statearr_20378_20409[(1)] = (12));

} else {
var statearr_20379_20410 = state_20368__$1;
(statearr_20379_20410[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (3))){
var inst_20366 = (state_20368[(2)]);
var state_20368__$1 = state_20368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20368__$1,inst_20366);
} else {
if((state_val_20369 === (12))){
var inst_20332 = (state_20368[(7)]);
var inst_20356 = cljs.core.vec(inst_20332);
var state_20368__$1 = state_20368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20368__$1,(15),out,inst_20356);
} else {
if((state_val_20369 === (2))){
var state_20368__$1 = state_20368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20368__$1,(4),ch);
} else {
if((state_val_20369 === (11))){
var inst_20348 = (state_20368[(2)]);
var inst_20349 = (new Array(n));
var inst_20332 = inst_20349;
var inst_20333 = (0);
var state_20368__$1 = (function (){var statearr_20380 = state_20368;
(statearr_20380[(10)] = inst_20348);

(statearr_20380[(7)] = inst_20332);

(statearr_20380[(8)] = inst_20333);

return statearr_20380;
})();
var statearr_20381_20411 = state_20368__$1;
(statearr_20381_20411[(2)] = null);

(statearr_20381_20411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (9))){
var inst_20332 = (state_20368[(7)]);
var inst_20346 = cljs.core.vec(inst_20332);
var state_20368__$1 = state_20368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20368__$1,(11),out,inst_20346);
} else {
if((state_val_20369 === (5))){
var inst_20336 = (state_20368[(9)]);
var inst_20341 = (state_20368[(11)]);
var inst_20332 = (state_20368[(7)]);
var inst_20333 = (state_20368[(8)]);
var inst_20340 = (inst_20332[inst_20333] = inst_20336);
var inst_20341__$1 = (inst_20333 + (1));
var inst_20342 = (inst_20341__$1 < n);
var state_20368__$1 = (function (){var statearr_20382 = state_20368;
(statearr_20382[(11)] = inst_20341__$1);

(statearr_20382[(12)] = inst_20340);

return statearr_20382;
})();
if(cljs.core.truth_(inst_20342)){
var statearr_20383_20412 = state_20368__$1;
(statearr_20383_20412[(1)] = (8));

} else {
var statearr_20384_20413 = state_20368__$1;
(statearr_20384_20413[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (14))){
var inst_20361 = (state_20368[(2)]);
var inst_20362 = cljs.core.async.close_BANG_(out);
var state_20368__$1 = (function (){var statearr_20386 = state_20368;
(statearr_20386[(13)] = inst_20361);

return statearr_20386;
})();
var statearr_20387_20414 = state_20368__$1;
(statearr_20387_20414[(2)] = inst_20362);

(statearr_20387_20414[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (10))){
var inst_20352 = (state_20368[(2)]);
var state_20368__$1 = state_20368;
var statearr_20388_20415 = state_20368__$1;
(statearr_20388_20415[(2)] = inst_20352);

(statearr_20388_20415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20369 === (8))){
var inst_20341 = (state_20368[(11)]);
var inst_20332 = (state_20368[(7)]);
var tmp20385 = inst_20332;
var inst_20332__$1 = tmp20385;
var inst_20333 = inst_20341;
var state_20368__$1 = (function (){var statearr_20389 = state_20368;
(statearr_20389[(7)] = inst_20332__$1);

(statearr_20389[(8)] = inst_20333);

return statearr_20389;
})();
var statearr_20390_20416 = state_20368__$1;
(statearr_20390_20416[(2)] = null);

(statearr_20390_20416[(1)] = (2));


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
});})(c__17677__auto___20402,out))
;
return ((function (switch__17551__auto__,c__17677__auto___20402,out){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_20394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20394[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_20394[(1)] = (1));

return statearr_20394;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_20368){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_20368);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e20395){if((e20395 instanceof Object)){
var ex__17555__auto__ = e20395;
var statearr_20396_20417 = state_20368;
(statearr_20396_20417[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20368);

return cljs.core.cst$kw$recur;
} else {
throw e20395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__20418 = state_20368;
state_20368 = G__20418;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_20368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_20368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___20402,out))
})();
var state__17679__auto__ = (function (){var statearr_20397 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_20397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___20402);

return statearr_20397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___20402,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20419 = [];
var len__11171__auto___20493 = arguments.length;
var i__11172__auto___20494 = (0);
while(true){
if((i__11172__auto___20494 < len__11171__auto___20493)){
args20419.push((arguments[i__11172__auto___20494]));

var G__20495 = (i__11172__auto___20494 + (1));
i__11172__auto___20494 = G__20495;
continue;
} else {
}
break;
}

var G__20421 = args20419.length;
switch (G__20421) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20419.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17677__auto___20497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17677__auto___20497,out){
return (function (){
var f__17678__auto__ = (function (){var switch__17551__auto__ = ((function (c__17677__auto___20497,out){
return (function (state_20463){
var state_val_20464 = (state_20463[(1)]);
if((state_val_20464 === (7))){
var inst_20459 = (state_20463[(2)]);
var state_20463__$1 = state_20463;
var statearr_20465_20498 = state_20463__$1;
(statearr_20465_20498[(2)] = inst_20459);

(statearr_20465_20498[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (1))){
var inst_20422 = [];
var inst_20423 = inst_20422;
var inst_20424 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_20463__$1 = (function (){var statearr_20466 = state_20463;
(statearr_20466[(7)] = inst_20423);

(statearr_20466[(8)] = inst_20424);

return statearr_20466;
})();
var statearr_20467_20499 = state_20463__$1;
(statearr_20467_20499[(2)] = null);

(statearr_20467_20499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (4))){
var inst_20427 = (state_20463[(9)]);
var inst_20427__$1 = (state_20463[(2)]);
var inst_20428 = (inst_20427__$1 == null);
var inst_20429 = cljs.core.not(inst_20428);
var state_20463__$1 = (function (){var statearr_20468 = state_20463;
(statearr_20468[(9)] = inst_20427__$1);

return statearr_20468;
})();
if(inst_20429){
var statearr_20469_20500 = state_20463__$1;
(statearr_20469_20500[(1)] = (5));

} else {
var statearr_20470_20501 = state_20463__$1;
(statearr_20470_20501[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (15))){
var inst_20453 = (state_20463[(2)]);
var state_20463__$1 = state_20463;
var statearr_20471_20502 = state_20463__$1;
(statearr_20471_20502[(2)] = inst_20453);

(statearr_20471_20502[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (13))){
var state_20463__$1 = state_20463;
var statearr_20472_20503 = state_20463__$1;
(statearr_20472_20503[(2)] = null);

(statearr_20472_20503[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (6))){
var inst_20423 = (state_20463[(7)]);
var inst_20448 = inst_20423.length;
var inst_20449 = (inst_20448 > (0));
var state_20463__$1 = state_20463;
if(cljs.core.truth_(inst_20449)){
var statearr_20473_20504 = state_20463__$1;
(statearr_20473_20504[(1)] = (12));

} else {
var statearr_20474_20505 = state_20463__$1;
(statearr_20474_20505[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (3))){
var inst_20461 = (state_20463[(2)]);
var state_20463__$1 = state_20463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20463__$1,inst_20461);
} else {
if((state_val_20464 === (12))){
var inst_20423 = (state_20463[(7)]);
var inst_20451 = cljs.core.vec(inst_20423);
var state_20463__$1 = state_20463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20463__$1,(15),out,inst_20451);
} else {
if((state_val_20464 === (2))){
var state_20463__$1 = state_20463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20463__$1,(4),ch);
} else {
if((state_val_20464 === (11))){
var inst_20427 = (state_20463[(9)]);
var inst_20431 = (state_20463[(10)]);
var inst_20441 = (state_20463[(2)]);
var inst_20442 = [];
var inst_20443 = inst_20442.push(inst_20427);
var inst_20423 = inst_20442;
var inst_20424 = inst_20431;
var state_20463__$1 = (function (){var statearr_20475 = state_20463;
(statearr_20475[(7)] = inst_20423);

(statearr_20475[(11)] = inst_20443);

(statearr_20475[(8)] = inst_20424);

(statearr_20475[(12)] = inst_20441);

return statearr_20475;
})();
var statearr_20476_20506 = state_20463__$1;
(statearr_20476_20506[(2)] = null);

(statearr_20476_20506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (9))){
var inst_20423 = (state_20463[(7)]);
var inst_20439 = cljs.core.vec(inst_20423);
var state_20463__$1 = state_20463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20463__$1,(11),out,inst_20439);
} else {
if((state_val_20464 === (5))){
var inst_20424 = (state_20463[(8)]);
var inst_20427 = (state_20463[(9)]);
var inst_20431 = (state_20463[(10)]);
var inst_20431__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20427) : f.call(null,inst_20427));
var inst_20432 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20431__$1,inst_20424);
var inst_20433 = cljs.core.keyword_identical_QMARK_(inst_20424,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_20434 = (inst_20432) || (inst_20433);
var state_20463__$1 = (function (){var statearr_20477 = state_20463;
(statearr_20477[(10)] = inst_20431__$1);

return statearr_20477;
})();
if(cljs.core.truth_(inst_20434)){
var statearr_20478_20507 = state_20463__$1;
(statearr_20478_20507[(1)] = (8));

} else {
var statearr_20479_20508 = state_20463__$1;
(statearr_20479_20508[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (14))){
var inst_20456 = (state_20463[(2)]);
var inst_20457 = cljs.core.async.close_BANG_(out);
var state_20463__$1 = (function (){var statearr_20481 = state_20463;
(statearr_20481[(13)] = inst_20456);

return statearr_20481;
})();
var statearr_20482_20509 = state_20463__$1;
(statearr_20482_20509[(2)] = inst_20457);

(statearr_20482_20509[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (10))){
var inst_20446 = (state_20463[(2)]);
var state_20463__$1 = state_20463;
var statearr_20483_20510 = state_20463__$1;
(statearr_20483_20510[(2)] = inst_20446);

(statearr_20483_20510[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20464 === (8))){
var inst_20423 = (state_20463[(7)]);
var inst_20427 = (state_20463[(9)]);
var inst_20431 = (state_20463[(10)]);
var inst_20436 = inst_20423.push(inst_20427);
var tmp20480 = inst_20423;
var inst_20423__$1 = tmp20480;
var inst_20424 = inst_20431;
var state_20463__$1 = (function (){var statearr_20484 = state_20463;
(statearr_20484[(7)] = inst_20423__$1);

(statearr_20484[(14)] = inst_20436);

(statearr_20484[(8)] = inst_20424);

return statearr_20484;
})();
var statearr_20485_20511 = state_20463__$1;
(statearr_20485_20511[(2)] = null);

(statearr_20485_20511[(1)] = (2));


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
});})(c__17677__auto___20497,out))
;
return ((function (switch__17551__auto__,c__17677__auto___20497,out){
return (function() {
var cljs$core$async$state_machine__17552__auto__ = null;
var cljs$core$async$state_machine__17552__auto____0 = (function (){
var statearr_20489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20489[(0)] = cljs$core$async$state_machine__17552__auto__);

(statearr_20489[(1)] = (1));

return statearr_20489;
});
var cljs$core$async$state_machine__17552__auto____1 = (function (state_20463){
while(true){
var ret_value__17553__auto__ = (function (){try{while(true){
var result__17554__auto__ = switch__17551__auto__(state_20463);
if(cljs.core.keyword_identical_QMARK_(result__17554__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17554__auto__;
}
break;
}
}catch (e20490){if((e20490 instanceof Object)){
var ex__17555__auto__ = e20490;
var statearr_20491_20512 = state_20463;
(statearr_20491_20512[(5)] = ex__17555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20463);

return cljs.core.cst$kw$recur;
} else {
throw e20490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17553__auto__,cljs.core.cst$kw$recur)){
var G__20513 = state_20463;
state_20463 = G__20513;
continue;
} else {
return ret_value__17553__auto__;
}
break;
}
});
cljs$core$async$state_machine__17552__auto__ = function(state_20463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17552__auto____1.call(this,state_20463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17552__auto____0;
cljs$core$async$state_machine__17552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17552__auto____1;
return cljs$core$async$state_machine__17552__auto__;
})()
;})(switch__17551__auto__,c__17677__auto___20497,out))
})();
var state__17679__auto__ = (function (){var statearr_20492 = (f__17678__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17678__auto__.cljs$core$IFn$_invoke$arity$0() : f__17678__auto__.call(null));
(statearr_20492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17677__auto___20497);

return statearr_20492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17679__auto__);
});})(c__17677__auto___20497,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

