// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('hodgepodge.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
hodgepodge.core.local_storage = localStorage;
hodgepodge.core.session_storage = sessionStorage;
hodgepodge.core.contains_key_QMARK_ = (function hodgepodge$core$contains_key_QMARK_(storage,key){
var ks = Object.keys(storage);
var idx = ks.indexOf(key);
return (idx >= (0));
});
hodgepodge.core.get_item = (function hodgepodge$core$get_item(var_args){
var G__22540 = arguments.length;
switch (G__22540) {
case 2:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2 = (function (storage,key){
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3(storage,key,null);
});

hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3 = (function (storage,key,default$){
if(cljs.core.truth_(hodgepodge.core.contains_key_QMARK_(storage,key))){
return storage.getItem(key);
} else {
return default$;
}
});

hodgepodge.core.get_item.cljs$lang$maxFixedArity = 3;

hodgepodge.core.set_item = (function hodgepodge$core$set_item(storage,key,val){
return storage.setItem(key,val);
});
hodgepodge.core.remove_item = (function hodgepodge$core$remove_item(storage,key){
return storage.removeItem(key);
});
hodgepodge.core.length = (function hodgepodge$core$length(storage){
return storage.length;
});
hodgepodge.core.clear_BANG_ = (function hodgepodge$core$clear_BANG_(storage){
return storage.clear();
});
hodgepodge.core.serialize = (function hodgepodge$core$serialize(v){
var _STAR_print_dup_STAR_22542 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_readably_STAR_22543 = cljs.core._STAR_print_readably_STAR_;
cljs.core._STAR_print_dup_STAR_ = true;

cljs.core._STAR_print_readably_STAR_ = true;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}finally {cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_22543;

cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR_22542;
}});
hodgepodge.core.deserialize = cljs.core.memoize(cljs.reader.read_string);
Storage.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

Storage.prototype.cljs$core$ICounted$_count$arity$1 = (function (s){
var s__$1 = this;
return hodgepodge.core.length(s__$1);
});

Storage.prototype.cljs$core$ITransientAssociative$ = cljs.core.PROTOCOL_SENTINEL;

Storage.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (s,key,val){
var s__$1 = this;
return hodgepodge.core.set_item(s__$1,hodgepodge.core.serialize(key),hodgepodge.core.serialize(val));
});

Storage.prototype.cljs$core$ITransientCollection$ = cljs.core.PROTOCOL_SENTINEL;

Storage.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (s,kv){
var s__$1 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(s__$1,cljs.core.key(kv),cljs.core.val(kv));
});

Storage.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12391__auto__ = ((function (s__$1){
return (function hodgepodge$core$iter__22544(s__22545){
return (new cljs.core.LazySeq(null,((function (s__$1){
return (function (){
var s__22545__$1 = s__22545;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__22545__$1);
if(temp__5278__auto__){
var s__22545__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22545__$2)){
var c__12389__auto__ = cljs.core.chunk_first(s__22545__$2);
var size__12390__auto__ = cljs.core.count(c__12389__auto__);
var b__22547 = cljs.core.chunk_buffer(size__12390__auto__);
if((function (){var i__22546 = (0);
while(true){
if((i__22546 < size__12390__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__12389__auto__,i__22546);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2(s__$1,k);
cljs.core.chunk_append(b__22547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(k) : hodgepodge.core.deserialize.call(null,k)),(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(v) : hodgepodge.core.deserialize.call(null,v))], null));

var G__22549 = (i__22546 + (1));
i__22546 = G__22549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22547),hodgepodge$core$iter__22544(cljs.core.chunk_rest(s__22545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22547),null);
}
} else {
var i = cljs.core.first(s__22545__$2);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2(s__$1,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(k) : hodgepodge.core.deserialize.call(null,k)),(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(v) : hodgepodge.core.deserialize.call(null,v))], null),hodgepodge$core$iter__22544(cljs.core.rest(s__22545__$2)));
}
} else {
return null;
}
break;
}
});})(s__$1))
,null,null));
});})(s__$1))
;
return iter__12391__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s__$1)));
})());
});

Storage.prototype.cljs$core$ITransientMap$ = cljs.core.PROTOCOL_SENTINEL;

Storage.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (s,key){
var s__$1 = this;
return hodgepodge.core.remove_item(s__$1,hodgepodge.core.serialize(key));
});

Storage.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Storage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (s,key){
var s__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(s__$1,key,null);
});

Storage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (s,key,not_found){
var s__$1 = this;
var sk = hodgepodge.core.serialize(key);
if(cljs.core.truth_(hodgepodge.core.contains_key_QMARK_(s__$1,sk))){
var G__22548 = hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2(s__$1,sk);
return (hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(G__22548) : hodgepodge.core.deserialize.call(null,G__22548));
} else {
return not_found;
}
});
