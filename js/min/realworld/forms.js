// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('realworld.forms.login');
goog.require('realworld.forms.register');
goog.require('realworld.forms.settings');
goog.require('realworld.forms.editor');
goog.require('realworld.forms.comment');
realworld.forms.forms = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$login,realworld.forms.login.constructor$(),cljs.core.cst$kw$settings,realworld.forms.settings.constructor$(),cljs.core.cst$kw$register,realworld.forms.register.constructor$(),cljs.core.cst$kw$editor,realworld.forms.editor.constructor$(),cljs.core.cst$kw$comment,realworld.forms.comment.constructor$()], null);
realworld.forms.forms_ids = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$login,(function (p__24812){
var map__24813 = p__24812;
var map__24813__$1 = ((((!((map__24813 == null)))?((((map__24813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24813):map__24813);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24813__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("login",page)){
return cljs.core.cst$kw$form;
} else {
return null;
}
}),cljs.core.cst$kw$register,(function (p__24815){
var map__24816 = p__24815;
var map__24816__$1 = ((((!((map__24816 == null)))?((((map__24816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24816):map__24816);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24816__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("register",page)){
return cljs.core.cst$kw$form;
} else {
return null;
}
}),cljs.core.cst$kw$comment,(function (p__24818){
var map__24819 = p__24818;
var map__24819__$1 = ((((!((map__24819 == null)))?((((map__24819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24819):map__24819);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24819__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24819__$1,cljs.core.cst$kw$subpage);
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("article",page);
if(and__11502__auto__){
return subpage;
} else {
return and__11502__auto__;
}
})())){
return cljs.core.cst$kw$form;
} else {
return null;
}
}),cljs.core.cst$kw$editor,(function (p__24821){
var map__24822 = p__24821;
var map__24822__$1 = ((((!((map__24822 == null)))?((((map__24822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24822):map__24822);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24822__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24822__$1,cljs.core.cst$kw$subpage);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("editor",page)){
var or__11514__auto__ = subpage;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.cst$kw$new;
}
} else {
return null;
}
}),cljs.core.cst$kw$settings,(function (p__24824){
var map__24825 = p__24824;
var map__24825__$1 = ((((!((map__24825 == null)))?((((map__24825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24825):map__24825);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("settings",page)){
return cljs.core.cst$kw$form;
} else {
return null;
}
})], null);
