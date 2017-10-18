// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.controllers.redirect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('realworld.edb');
realworld.controllers.redirect.get_redirect = (function realworld$controllers$redirect$get_redirect(route,app_db){
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(route);
var subpage = cljs.core.cst$kw$subpage.cljs$core$IFn$_invoke$arity$1(route);
var current_user = realworld.edb.get_named_item.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$user,cljs.core.cst$kw$current], 0));
var current_article = realworld.edb.get_named_item.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$article,cljs.core.cst$kw$current], 0));
var current_article_author = (cljs.core.truth_(current_article)?(function (){var fexpr__25012 = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(current_article);
return (fexpr__25012.cljs$core$IFn$_invoke$arity$0 ? fexpr__25012.cljs$core$IFn$_invoke$arity$0() : fexpr__25012.call(null));
})():null);
var personal_page = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"home",cljs.core.cst$kw$subpage,"personal"], null);
var home_page = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null);
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("login",page);
if(and__11502__auto__){
return current_user;
} else {
return and__11502__auto__;
}
})())){
return personal_page;
} else {
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("register",page);
if(and__11502__auto__){
return current_user;
} else {
return and__11502__auto__;
}
})())){
return personal_page;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("home",page)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("personal",subpage)) && (cljs.core.not(current_user))){
return home_page;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("editor",page)) && (cljs.core.not(current_user))){
return home_page;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("settings",page)) && (cljs.core.not(current_user))){
return home_page;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("article",page)) && (cljs.core.not(current_article))){
return home_page;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("editor",page)) && (cljs.core.not(current_article))){
return home_page;
} else {
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("editor",page);
if(and__11502__auto__){
var and__11502__auto____$1 = subpage;
if(cljs.core.truth_(and__11502__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_user,current_article_author);
} else {
return and__11502__auto____$1;
}
} else {
return and__11502__auto__;
}
})())){
return home_page;
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
});
realworld.controllers.redirect.redirect_BANG_ = (function realworld$controllers$redirect$redirect_BANG_(route,app_db){
var redirect_to = realworld.controllers.redirect.get_redirect(route,app_db);
if(cljs.core.truth_(redirect_to)){
return keechma.toolbox.pipeline.core.redirect_BANG_(redirect_to);
} else {
return null;
}
});
realworld.controllers.redirect.controller = keechma.toolbox.pipeline.controller.constructor$((function (p__25013){
var map__25014 = p__25013;
var map__25014__$1 = ((((!((map__25014 == null)))?((((map__25014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25014):map__25014);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25014__$1,cljs.core.cst$kw$data);
return data;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(dataloader-controller/wait-dataloader-pipeline!)",cljs.core.cst$kw$val,keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_()], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(redirect! value app-db)",cljs.core.cst$kw$val,realworld.controllers.redirect.redirect_BANG_(value,app_db)], null);
})], null)], null))], null));
