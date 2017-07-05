// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms');
goog.require('cljs.core');
goog.require('realworld.forms.comment');
goog.require('realworld.forms.login');
goog.require('realworld.forms.editor');
goog.require('realworld.forms.settings');
goog.require('realworld.forms.register');
realworld.forms.forms = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$login,realworld.forms.login.constructor$(),cljs.core.cst$kw$settings,realworld.forms.settings.constructor$(),cljs.core.cst$kw$register,realworld.forms.register.constructor$(),cljs.core.cst$kw$editor,realworld.forms.editor.constructor$(),cljs.core.cst$kw$comment,realworld.forms.comment.constructor$()], null);
realworld.forms.forms_ids = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$login,(function (p__24980){
var map__24981 = p__24980;
var map__24981__$1 = ((((!((map__24981 == null)))?((((map__24981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24981):map__24981);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24981__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("login",page)){
return cljs.core.cst$kw$form;
} else {
return null;
}
}),cljs.core.cst$kw$register,(function (p__24983){
var map__24984 = p__24983;
var map__24984__$1 = ((((!((map__24984 == null)))?((((map__24984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24984):map__24984);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24984__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("register",page)){
return cljs.core.cst$kw$form;
} else {
return null;
}
}),cljs.core.cst$kw$comment,(function (p__24986){
var map__24987 = p__24986;
var map__24987__$1 = ((((!((map__24987 == null)))?((((map__24987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24987):map__24987);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,cljs.core.cst$kw$subpage);
if(cljs.core.truth_((function (){var and__9980__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("article",page);
if(and__9980__auto__){
return subpage;
} else {
return and__9980__auto__;
}
})())){
return cljs.core.cst$kw$form;
} else {
return null;
}
}),cljs.core.cst$kw$editor,(function (p__24989){
var map__24990 = p__24989;
var map__24990__$1 = ((((!((map__24990 == null)))?((((map__24990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24990):map__24990);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24990__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24990__$1,cljs.core.cst$kw$subpage);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("editor",page)){
var or__9992__auto__ = subpage;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.cst$kw$new;
}
} else {
return null;
}
}),cljs.core.cst$kw$settings,(function (p__24992){
var map__24993 = p__24992;
var map__24993__$1 = ((((!((map__24993 == null)))?((((map__24993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24993):map__24993);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24993__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("settings",page)){
return cljs.core.cst$kw$form;
} else {
return null;
}
})], null);
