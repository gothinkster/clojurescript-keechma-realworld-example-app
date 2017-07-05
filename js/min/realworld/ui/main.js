// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.main');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
realworld.ui.main.render = (function realworld$ui$main$render(ctx){
var current_route = keechma.toolbox.ui.route_GT_(ctx);
var current_page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(current_route);
if(cljs.core.truth_(keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$initialized_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$header)], null),(function (){var G__25343 = current_page;
switch (G__25343) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$page_DASH_home)], null);

break;
case "profile":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$page_DASH_profile)], null);

break;
case "article":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$page_DASH_article)], null);

break;
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$page_DASH_login)], null);

break;
case "settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$page_DASH_settings)], null);

break;
case "register":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$page_DASH_register)], null);

break;
case "editor":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$page_DASH_editor)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"404"], null);

}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$footer)], null)], null);
} else {
return null;
}
});
realworld.ui.main.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$renderer,realworld.ui.main.render,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialized_QMARK_], null),cljs.core.cst$kw$component_DASH_deps,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,cljs.core.cst$kw$footer,cljs.core.cst$kw$page_DASH_home,cljs.core.cst$kw$page_DASH_profile,cljs.core.cst$kw$page_DASH_article,cljs.core.cst$kw$page_DASH_login,cljs.core.cst$kw$page_DASH_settings,cljs.core.cst$kw$page_DASH_register,cljs.core.cst$kw$page_DASH_editor], null)], null));
