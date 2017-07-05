// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keechma.app_state');
goog.require('realworld.controllers');
goog.require('realworld.ui');
goog.require('realworld.subscriptions');
realworld.core.app_definition = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$components,realworld.ui.ui,cljs.core.cst$kw$controllers,realworld.controllers.controllers,cljs.core.cst$kw$subscriptions,realworld.subscriptions.subscriptions,cljs.core.cst$kw$routes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null)], null),":page",":page/:subpage",":page/:subpage/:detail"], null),cljs.core.cst$kw$html_DASH_element,document.getElementById("app")], null);
if(typeof realworld.core.running_app !== 'undefined'){
} else {
realworld.core.running_app = (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
realworld.core.start_app_BANG_ = (function realworld$core$start_app_BANG_(){
var G__26707 = realworld.core.running_app;
var G__26708 = keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.core.app_definition);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26707,G__26708) : cljs.core.reset_BANG_.call(null,G__26707,G__26708));
});
realworld.core.dev_setup = (function realworld$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dev mode"], 0));
} else {
return null;
}
});
realworld.core.reload = (function realworld$core$reload(){
var current = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(realworld.core.running_app) : cljs.core.deref.call(null,realworld.core.running_app));
if(cljs.core.truth_(current)){
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2(current,realworld.core.start_app_BANG_);
} else {
return realworld.core.start_app_BANG_();
}
});
realworld.core.main = (function realworld$core$main(){
realworld.core.dev_setup();

return realworld.core.start_app_BANG_();
});
goog.exportSymbol('realworld.core.main', realworld.core.main);
