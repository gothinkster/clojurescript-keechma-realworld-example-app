// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.pages.editor');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.forms.core');
goog.require('realworld.ui.components.pure.form_api_errors');
goog.require('keechma.toolbox.ui');
goog.require('clojure.string');
goog.require('realworld.ui.components.pure.form_inputs');
realworld.ui.pages.editor.tag_list = (function realworld$ui$pages$editor$tag_list(form_state){
var tags = clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$tags], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "";
}
})(),/,/);
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,tags)));
});
realworld.ui.pages.editor.render = (function realworld$ui$pages$editor$render(ctx){
var form_id = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,(function (){var or__9992__auto__ = cljs.core.cst$kw$subpage.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.ui.route_GT_(ctx));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.cst$kw$new;
}
})()], null);
var form_state = (function (){var G__26686 = keechma.toolbox.forms.helpers.form_state(ctx,form_id);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26686) : cljs.core.deref.call(null,G__26686));
})();
var helpers = keechma.toolbox.forms.helpers.make_component_helpers(ctx,form_id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$auth_DASH_page_GT_div$container$page_GT_div$row_GT_div$col_DASH_md_DASH_10$offset_DASH_md_DASH_1$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.pure.form_api_errors.render,form_state], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,cljs.core.cst$kw$submit.cljs$core$IFn$_invoke$arity$1(helpers)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.pure.form_inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_state,form_state,cljs.core.cst$kw$helpers,helpers,cljs.core.cst$kw$placeholder,"Article Title",cljs.core.cst$kw$attr,cljs.core.cst$kw$title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.pure.form_inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_state,form_state,cljs.core.cst$kw$helpers,helpers,cljs.core.cst$kw$placeholder,"What's this article about?",cljs.core.cst$kw$attr,cljs.core.cst$kw$description], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.pure.form_inputs.controlled_textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_state,form_state,cljs.core.cst$kw$helpers,helpers,cljs.core.cst$kw$placeholder,"Write your article (in markdown)",cljs.core.cst$kw$attr,cljs.core.cst$kw$body], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.pure.form_inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_state,form_state,cljs.core.cst$kw$helpers,helpers,cljs.core.cst$kw$placeholder,"Enter tags",cljs.core.cst$kw$attr,cljs.core.cst$kw$tags], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$tag_DASH_list,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (form_id,form_state,helpers){
return (function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$tag_DASH_default$tag_DASH_pill$tag_DASH_outline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null),clojure.string.trim(t)], null);
});})(form_id,form_state,helpers))
,realworld.ui.pages.editor.tag_list(form_state)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,"Publish Article"], null)], null)], null);
});
realworld.ui.pages.editor.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$renderer,realworld.ui.pages.editor.render,cljs.core.cst$kw$topic,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_state], null)], null));
