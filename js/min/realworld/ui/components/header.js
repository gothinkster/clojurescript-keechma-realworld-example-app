// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.header');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.util');
realworld.ui.components.header.user_pages = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null),cljs.core.cst$kw$title,"Home"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"editor"], null),cljs.core.cst$kw$icon,"ion-compose",cljs.core.cst$kw$title,"New Post"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"settings"], null),cljs.core.cst$kw$icon,"ion-gear-a",cljs.core.cst$kw$title,"Settings"], null)], null);
realworld.ui.components.header.anon_pages = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null),cljs.core.cst$kw$title,"Home"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"login"], null),cljs.core.cst$kw$title,"Sign in"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"register"], null),cljs.core.cst$kw$title,"Sign up"], null)], null);
realworld.ui.components.header.render_nav_item = (function realworld$ui$components$header$render_nav_item(ctx,p__26126){
var map__26127 = p__26126;
var map__26127__$1 = ((((!((map__26127 == null)))?((((map__26127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26127):map__26127);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.cst$kw$route);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.cst$kw$title);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.cst$kw$icon);
var current_page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.ui.route_GT_(ctx));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,title], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,route),cljs.core.cst$kw$class,keechma.toolbox.util.class_names(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(route))], null))], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,icon], null)], null):null),(cljs.core.truth_(icon)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''):title)], null)], null);
});
realworld.ui.components.header.render_nav = (function realworld$ui$components$header$render_nav(ctx){
var current_user_meta = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_user_DASH_meta);
var current_user = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_user);
var pages = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$completed,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(current_user_meta)))?(cljs.core.truth_(current_user)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(realworld.ui.components.header.user_pages,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"profile",cljs.core.cst$kw$subpage,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(current_user)], null),cljs.core.cst$kw$title,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(current_user)], null)):realworld.ui.components.header.anon_pages):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav$pull_DASH_xs_DASH_right,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_user_meta,current_user,pages){
return (function (p1__26129_SHARP_){
return realworld.ui.components.header.render_nav_item(ctx,p1__26129_SHARP_);
});})(current_user_meta,current_user,pages))
,pages))], null);
});
realworld.ui.components.header.render = (function realworld$ui$components$header$render(ctx){
var current_user = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_user);
var home_route = (cljs.core.truth_(current_user)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"home",cljs.core.cst$kw$subpage,"personal"], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_light,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,home_route)], null),"conduit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.header.render_nav,ctx], null)], null)], null);
});
realworld.ui.components.header.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$renderer,realworld.ui.components.header.render,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_user,cljs.core.cst$kw$current_DASH_user_DASH_meta], null)], null));
