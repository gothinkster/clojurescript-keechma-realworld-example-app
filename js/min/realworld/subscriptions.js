// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.subscriptions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.dataloader.subscriptions');
goog.require('realworld.datasources');
goog.require('realworld.edb');
goog.require('keechma.toolbox.forms.helpers');
realworld.subscriptions.get_kv = (function realworld$subscriptions$get_kv(key){
return (function (app_db_atom){
return reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_db_atom),cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,key], null)));
}));
});
});
realworld.subscriptions.subscriptions = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form_DASH_state,keechma.toolbox.forms.helpers.form_state_sub,cljs.core.cst$kw$initialized_QMARK_,realworld.subscriptions.get_kv(cljs.core.cst$kw$initialized_QMARK_)], null),keechma.toolbox.dataloader.subscriptions.make_subscriptions(realworld.datasources.datasources,realworld.edb.edb_schema)], 0));
