// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.follow_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.util');
realworld.ui.components.follow_button.render = (function realworld$ui$components$follow_button$render(ctx,user){
var current_user = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_user);
var following_QMARK_ = cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(user);
var action = (cljs.core.truth_(current_user)?((function (current_user,following_QMARK_){
return (function (){
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.cst$kw$toggle_DASH_follow,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user], 0));
});})(current_user,following_QMARK_))
:((function (current_user,following_QMARK_){
return (function (){
return keechma.ui_component.redirect(ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"register"], null));
});})(current_user,following_QMARK_))
);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user,user)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_outline_DASH_secondary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"settings"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_gear_DASH_a], null)," Edit Profile Settings"], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,action,cljs.core.cst$kw$class,keechma.toolbox.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$btn_DASH_outline_DASH_secondary,cljs.core.not(following_QMARK_),cljs.core.cst$kw$btn_DASH_secondary,following_QMARK_], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_plus_DASH_round], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(following_QMARK_)?" Unfollow ":" Follow ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user))].join('')], null);
}
});
realworld.ui.components.follow_button.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$renderer,realworld.ui.components.follow_button.render,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_user], null),cljs.core.cst$kw$topic,cljs.core.cst$kw$user_DASH_actions], null));
