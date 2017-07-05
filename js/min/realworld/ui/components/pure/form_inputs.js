// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.pure.form_inputs');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('realworld.forms.validators');
realworld.ui.components.pure.form_inputs.render_errors = (function realworld$ui$components$pure$form_inputs$render_errors(attr_errors){
var temp__6753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attr_errors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$errors$,cljs.core.cst$kw$failed], null));
if(cljs.core.truth_(temp__6753__auto__)){
var errors = temp__6753__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$error_DASH_messages], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (errors,temp__6753__auto__){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,realworld.forms.validators.get_validator_message(e)], null);
});})(errors,temp__6753__auto__))
,errors)));
} else {
return null;
}
});
realworld.ui.components.pure.form_inputs.controlled_input = (function realworld$ui$components$pure$form_inputs$controlled_input(p__26640){
var map__26645 = p__26640;
var map__26645__$1 = ((((!((map__26645 == null)))?((((map__26645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26645):map__26645);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26645__$1,cljs.core.cst$kw$form_DASH_state);
var helpers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26645__$1,cljs.core.cst$kw$helpers);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26645__$1,cljs.core.cst$kw$placeholder);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26645__$1,cljs.core.cst$kw$label);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26645__$1,cljs.core.cst$kw$attr);
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26645__$1,cljs.core.cst$kw$input_DASH_type);
var map__26647 = helpers;
var map__26647__$1 = ((((!((map__26647 == null)))?((((map__26647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26647):map__26647);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(attr) : on_change.call(null,attr)),cljs.core.cst$kw$on_DASH_blur,(on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(attr) : on_blur.call(null,attr)),cljs.core.cst$kw$type,(function (){var or__9992__auto__ = input_type;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.cst$kw$text;
}
})(),cljs.core.cst$kw$value,keechma.toolbox.forms.helpers.attr_get_in(form_state,attr)], null)], null),realworld.ui.components.pure.form_inputs.render_errors(keechma.toolbox.forms.helpers.attr_errors(form_state,attr))], null);
});
realworld.ui.components.pure.form_inputs.controlled_textarea = (function realworld$ui$components$pure$form_inputs$controlled_textarea(p__26649){
var map__26654 = p__26649;
var map__26654__$1 = ((((!((map__26654 == null)))?((((map__26654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26654):map__26654);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,cljs.core.cst$kw$form_DASH_state);
var helpers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,cljs.core.cst$kw$helpers);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,cljs.core.cst$kw$placeholder);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,cljs.core.cst$kw$label);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,cljs.core.cst$kw$attr);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,cljs.core.cst$kw$rows);
var map__26656 = helpers;
var map__26656__$1 = ((((!((map__26656 == null)))?((((map__26656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26656):map__26656);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26656__$1,cljs.core.cst$kw$on_DASH_change);
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26656__$1,cljs.core.cst$kw$on_DASH_blur);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$rows,(function (){var or__9992__auto__ = rows;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return (8);
}
})(),cljs.core.cst$kw$on_DASH_change,(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(attr) : on_change.call(null,attr)),cljs.core.cst$kw$on_DASH_blur,(on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(attr) : on_blur.call(null,attr)),cljs.core.cst$kw$value,keechma.toolbox.forms.helpers.attr_get_in(form_state,attr)], null)], null),realworld.ui.components.pure.form_inputs.render_errors(keechma.toolbox.forms.helpers.attr_errors(form_state,attr))], null);
});
realworld.ui.components.pure.form_inputs.controlled_select = (function realworld$ui$components$pure$form_inputs$controlled_select(p__26658){
var map__26667 = p__26658;
var map__26667__$1 = ((((!((map__26667 == null)))?((((map__26667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26667):map__26667);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,cljs.core.cst$kw$form_DASH_state);
var helpers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,cljs.core.cst$kw$helpers);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,cljs.core.cst$kw$placeholder);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,cljs.core.cst$kw$label);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,cljs.core.cst$kw$attr);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26667__$1,cljs.core.cst$kw$options);
var map__26669 = helpers;
var map__26669__$1 = ((((!((map__26669 == null)))?((((map__26669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26669):map__26669);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,cljs.core.cst$kw$on_DASH_change);
var select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,cljs.core.cst$kw$select);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(attr) : on_change.call(null,attr)),cljs.core.cst$kw$value,(function (){var or__9992__auto__ = keechma.toolbox.forms.helpers.attr_get_in(form_state,attr);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,""], null),(function (){var or__9992__auto__ = label;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return placeholder;
}
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__26669,map__26669__$1,on_change,select,map__26667,map__26667__$1,form_state,helpers,placeholder,label,attr,options){
return (function (p__26671){
var vec__26672 = p__26671;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26672,(0),null);
var label__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26672,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$key,value], null),label__$1], null);
});})(map__26669,map__26669__$1,on_change,select,map__26667,map__26667__$1,form_state,helpers,placeholder,label,attr,options))
,options))], null),realworld.ui.components.pure.form_inputs.render_errors(keechma.toolbox.forms.helpers.attr_errors(form_state,attr))], null);
});
