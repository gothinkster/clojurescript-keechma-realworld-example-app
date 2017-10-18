// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.controllers.logout');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('realworld.settings');
goog.require('hodgepodge.core');
goog.require('realworld.edb');
realworld.controllers.logout.controller = keechma.toolbox.pipeline.controller.constructor$((function (p__25002){
var map__25003 = p__25002;
var map__25003__$1 = ((((!((map__25003 == null)))?((((map__25003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25003):map__25003);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25003__$1,cljs.core.cst$kw$data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("logout",cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(data))){
return true;
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(remove-item local-storage settings/jwt-local-storage-name)",cljs.core.cst$kw$val,hodgepodge.core.remove_item(hodgepodge.core.local_storage,realworld.settings.jwt_local_storage_name)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (->\n  app-db\n  (assoc-in [:kv :jwt] nil)\n  (remove-named-item :user :current)))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.remove_named_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null),null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$user,cljs.core.cst$kw$current], 0)))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/redirect! {:page \"home\"})",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null))], null);
})], null)], null))], null));
