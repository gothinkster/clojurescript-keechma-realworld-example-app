// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.pure.form_inputs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.forms.helpers');
goog.require('realworld.forms.validators');
realworld.ui.components.pure.form_inputs.render_errors = (function realworld$ui$components$pure$form_inputs$render_errors(attr_errors){
var temp__5278__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attr_errors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$errors$,cljs.core.cst$kw$failed], null));
if(cljs.core.truth_(temp__5278__auto__)){
var errors = temp__5278__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$error_DASH_messages], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (errors,temp__5278__auto__){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,realworld.forms.validators.get_validator_message(e)], null);
});})(errors,temp__5278__auto__))
,errors)));
} else {
return null;
}
});
realworld.ui.components.pure.form_inputs.controlled_input = (function realworld$ui$components$pure$form_inputs$controlled_input(p__21659){
var map__21660 = p__21659;
var map__21660__$1 = ((((!((map__21660 == null)))?((((map__21660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21660):map__21660);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660__$1,cljs.core.cst$kw$form_DASH_state);
var helpers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660__$1,cljs.core.cst$kw$helpers);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660__$1,cljs.core.cst$kw$placeholder);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660__$1,cljs.core.cst$kw$label);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660__$1,cljs.core.cst$kw$attr);
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660__$1,cljs.core.cst$kw$input_DASH_type);
var map__21662 = helpers;
var map__21662__$1 = ((((!((map__21662 == null)))?((((map__21662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21662):map__21662);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(attr) : on_change.call(null,attr)),cljs.core.cst$kw$on_DASH_blur,(on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(attr) : on_blur.call(null,attr)),cljs.core.cst$kw$type,(function (){var or__11514__auto__ = input_type;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return cljs.core.cst$kw$text;
}
})(),cljs.core.cst$kw$value,keechma.toolbox.forms.helpers.attr_get_in(form_state,attr)], null)], null),realworld.ui.components.pure.form_inputs.render_errors(keechma.toolbox.forms.helpers.attr_errors(form_state,attr))], null);
});
realworld.ui.components.pure.form_inputs.controlled_textarea = (function realworld$ui$components$pure$form_inputs$controlled_textarea(p__21664){
var map__21665 = p__21664;
var map__21665__$1 = ((((!((map__21665 == null)))?((((map__21665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21665):map__21665);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,cljs.core.cst$kw$form_DASH_state);
var helpers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,cljs.core.cst$kw$helpers);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,cljs.core.cst$kw$placeholder);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,cljs.core.cst$kw$label);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,cljs.core.cst$kw$attr);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21665__$1,cljs.core.cst$kw$rows);
var map__21667 = helpers;
var map__21667__$1 = ((((!((map__21667 == null)))?((((map__21667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21667):map__21667);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21667__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21667__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$rows,(function (){var or__11514__auto__ = rows;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return (8);
}
})(),cljs.core.cst$kw$on_DASH_change,(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(attr) : on_change.call(null,attr)),cljs.core.cst$kw$on_DASH_blur,(on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(attr) : on_blur.call(null,attr)),cljs.core.cst$kw$value,keechma.toolbox.forms.helpers.attr_get_in(form_state,attr)], null)], null),realworld.ui.components.pure.form_inputs.render_errors(keechma.toolbox.forms.helpers.attr_errors(form_state,attr))], null);
});
realworld.ui.components.pure.form_inputs.controlled_select = (function realworld$ui$components$pure$form_inputs$controlled_select(p__21669){
var map__21670 = p__21669;
var map__21670__$1 = ((((!((map__21670 == null)))?((((map__21670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21670):map__21670);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.cst$kw$form_DASH_state);
var helpers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.cst$kw$helpers);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.cst$kw$placeholder);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.cst$kw$label);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.cst$kw$attr);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.cst$kw$options);
var map__21672 = helpers;
var map__21672__$1 = ((((!((map__21672 == null)))?((((map__21672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21672):map__21672);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21672__$1,cljs.core.cst$kw$on_DASH_change);
var select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21672__$1,cljs.core.cst$kw$select);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(attr) : on_change.call(null,attr)),cljs.core.cst$kw$value,(function (){var or__11514__auto__ = keechma.toolbox.forms.helpers.attr_get_in(form_state,attr);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,""], null),(function (){var or__11514__auto__ = label;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return placeholder;
}
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21672,map__21672__$1,on_change,select,map__21670,map__21670__$1,form_state,helpers,placeholder,label,attr,options){
return (function (p__21674){
var vec__21675 = p__21674;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21675,(0),null);
var label__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21675,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$key,value], null),label__$1], null);
});})(map__21672,map__21672__$1,on_change,select,map__21670,map__21670__$1,form_state,helpers,placeholder,label,attr,options))
,options))], null),realworld.ui.components.pure.form_inputs.render_errors(keechma.toolbox.forms.helpers.attr_errors(form_state,attr))], null);
});
