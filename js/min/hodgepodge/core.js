// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('hodgepodge.core');
goog.require('cljs.core');
goog.require('cljs.reader');
hodgepodge.core.local_storage = localStorage;
hodgepodge.core.session_storage = sessionStorage;
hodgepodge.core.contains_key_QMARK_ = (function hodgepodge$core$contains_key_QMARK_(storage,key){
var ks = Object.keys(storage);
var idx = ks.indexOf(key);
return (idx >= (0));
});
hodgepodge.core.get_item = (function hodgepodge$core$get_item(var_args){
var args22246 = [];
var len__11171__auto___22249 = arguments.length;
var i__11172__auto___22250 = (0);
while(true){
if((i__11172__auto___22250 < len__11171__auto___22249)){
args22246.push((arguments[i__11172__auto___22250]));

var G__22251 = (i__11172__auto___22250 + (1));
i__11172__auto___22250 = G__22251;
continue;
} else {
}
break;
}

var G__22248 = args22246.length;
switch (G__22248) {
case 2:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22246.length)].join('')));

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
var _STAR_print_dup_STAR_22255 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_readably_STAR_22256 = cljs.core._STAR_print_readably_STAR_;
cljs.core._STAR_print_dup_STAR_ = true;

cljs.core._STAR_print_readably_STAR_ = true;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0));
}finally {cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_22256;

cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR_22255;
}});
hodgepodge.core.deserialize = cljs.core.memoize(cljs.reader.read_string);
Storage.prototype.cljs$core$ICounted$ = true;

Storage.prototype.cljs$core$ICounted$_count$arity$1 = (function (s){
var s__$1 = this;
return hodgepodge.core.length(s__$1);
});

Storage.prototype.cljs$core$ITransientAssociative$ = true;

Storage.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (s,key,val){
var s__$1 = this;
return hodgepodge.core.set_item(s__$1,hodgepodge.core.serialize(key),hodgepodge.core.serialize(val));
});

Storage.prototype.cljs$core$ITransientCollection$ = true;

Storage.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (s,kv){
var s__$1 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(s__$1,cljs.core.key(kv),cljs.core.val(kv));
});

Storage.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__10846__auto__ = ((function (s__$1){
return (function hodgepodge$core$iter__22257(s__22258){
return (new cljs.core.LazySeq(null,((function (s__$1){
return (function (){
var s__22258__$1 = s__22258;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22258__$1);
if(temp__6753__auto__){
var s__22258__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22258__$2)){
var c__10844__auto__ = cljs.core.chunk_first(s__22258__$2);
var size__10845__auto__ = cljs.core.count(c__10844__auto__);
var b__22260 = cljs.core.chunk_buffer(size__10845__auto__);
if((function (){var i__22259 = (0);
while(true){
if((i__22259 < size__10845__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__10844__auto__,i__22259);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2(s__$1,k);
cljs.core.chunk_append(b__22260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(k) : hodgepodge.core.deserialize.call(null,k)),(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(v) : hodgepodge.core.deserialize.call(null,v))], null));

var G__22264 = (i__22259 + (1));
i__22259 = G__22264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22260),hodgepodge$core$iter__22257(cljs.core.chunk_rest(s__22258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22260),null);
}
} else {
var i = cljs.core.first(s__22258__$2);
var k = s__$1.key(i);
var v = hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2(s__$1,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(k) : hodgepodge.core.deserialize.call(null,k)),(hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(v) : hodgepodge.core.deserialize.call(null,v))], null),hodgepodge$core$iter__22257(cljs.core.rest(s__22258__$2)));
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
return iter__10846__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s__$1)));
})());
});

Storage.prototype.cljs$core$ITransientMap$ = true;

Storage.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (s,key){
var s__$1 = this;
return hodgepodge.core.remove_item(s__$1,hodgepodge.core.serialize(key));
});

Storage.prototype.cljs$core$ILookup$ = true;

Storage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (s,key){
var s__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(s__$1,key,null);
});

Storage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (s,key,not_found){
var s__$1 = this;
var sk = hodgepodge.core.serialize(key);
if(cljs.core.truth_(hodgepodge.core.contains_key_QMARK_(s__$1,sk))){
var G__22263 = hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2(s__$1,sk);
return (hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1 ? hodgepodge.core.deserialize.cljs$core$IFn$_invoke$arity$1(G__22263) : hodgepodge.core.deserialize.call(null,G__22263));
} else {
return not_found;
}
});
