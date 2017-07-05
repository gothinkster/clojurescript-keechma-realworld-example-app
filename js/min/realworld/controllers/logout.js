// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.controllers.logout');
goog.require('cljs.core');
goog.require('realworld.settings');
goog.require('hodgepodge.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('realworld.edb');
goog.require('keechma.toolbox.pipeline.controller');
realworld.controllers.logout.controller = keechma.toolbox.pipeline.controller.constructor$((function (p__25182){
var map__25183 = p__25182;
var map__25183__$1 = ((((!((map__25183 == null)))?((((map__25183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25183):map__25183);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25183__$1,cljs.core.cst$kw$data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("logout",cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(data))){
return true;
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return hodgepodge.core.remove_item(hodgepodge.core.local_storage,realworld.settings.jwt_local_storage_name);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.remove_named_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null),null),cljs.core.array_seq([cljs.core.cst$kw$user,cljs.core.cst$kw$current], 0)));
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null));
})], null)], null))], null));
