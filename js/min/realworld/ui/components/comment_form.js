// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.comment_form');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.forms.core');
goog.require('realworld.ui.components.pure.form_api_errors');
goog.require('keechma.toolbox.ui');
goog.require('realworld.ui.components.pure.form_inputs');
realworld.ui.components.comment_form.render = (function realworld$ui$components$comment_form$render(ctx){
var form_id = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comment,cljs.core.cst$kw$form], null);
var form_state = (function (){var G__26682 = keechma.toolbox.forms.helpers.form_state(ctx,form_id);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26682) : cljs.core.deref.call(null,G__26682));
})();
var helpers = keechma.toolbox.forms.helpers.make_component_helpers(ctx,form_id);
var current_user = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_user);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$card$comment_DASH_form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,cljs.core.cst$kw$submit.cljs$core$IFn$_invoke$arity$1(helpers)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.pure.form_api_errors.render,form_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.pure.form_inputs.controlled_textarea,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$form_DASH_state,form_state,cljs.core.cst$kw$helpers,helpers,cljs.core.cst$kw$placeholder,"Write a comment...",cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$attr,cljs.core.cst$kw$body], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(current_user)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$btn_DASH_primary,"Post Comment"], null)], null)], null);
});
realworld.ui.components.comment_form.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$renderer,realworld.ui.components.comment_form.render,cljs.core.cst$kw$topic,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_state,cljs.core.cst$kw$current_DASH_user], null)], null));
