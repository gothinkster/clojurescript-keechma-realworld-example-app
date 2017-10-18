// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.delete_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.util');
realworld.ui.components.delete_button.render = (function realworld$ui$components$delete_button$render(ctx,article){
var author = (function (){var fexpr__22536 = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(article);
return (fexpr__22536.cljs$core$IFn$_invoke$arity$0 ? fexpr__22536.cljs$core$IFn$_invoke$arity$0() : fexpr__22536.call(null));
})();
var current_user = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_user);
if(cljs.core.truth_((function (){var and__11502__auto__ = current_user;
if(cljs.core.truth_(and__11502__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,current_user);
} else {
return and__11502__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$btn_DASH_outline_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (author,current_user){
return (function (){
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.cst$kw$delete,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([article], 0));
});})(author,current_user))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_trash_DASH_a], null)," Delete Article"], null);
} else {
return null;
}
});
realworld.ui.components.delete_button.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$renderer,realworld.ui.components.delete_button.render,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_user], null),cljs.core.cst$kw$topic,cljs.core.cst$kw$user_DASH_actions], null));
