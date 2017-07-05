// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.controller');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('reagent.core');
goog.require('promesa.core');
goog.require('keechma.toolbox.forms.core');
goog.require('forms.util');
goog.require('keechma.toolbox.pipeline.core');
goog.require('forms.dirty');
goog.require('forms.core');
goog.require('keechma.toolbox.forms.cursor');
goog.require('keechma.toolbox.pipeline.controller');
keechma.toolbox.forms.controller.get_form_record = (function keechma$toolbox$forms$controller$get_form_record(forms_config,p__25080){
var vec__25084 = p__25080;
var form_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25084,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25084,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms_config,form_type);
});
keechma.toolbox.forms.controller.get_form_state = (function keechma$toolbox$forms$controller$get_form_state(app_db,form_props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null));
});
keechma.toolbox.forms.controller.get_forms = (function keechma$toolbox$forms$controller$get_forms(app_db){
var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$states,cljs.core.PersistentArrayMap.EMPTY], null);
}
});
keechma.toolbox.forms.controller.add_form_to_app_db = (function keechma$toolbox$forms$controller$add_form_to_app_db(app_db,form_props,form_state){
var forms__$1 = keechma.toolbox.forms.controller.get_forms(app_db);
var forms_order = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (forms__$1){
return (function (p1__25087_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form_props,p1__25087_SHARP_);
});})(forms__$1))
,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(forms__$1)));
var forms_states = cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(forms__$1);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(forms__$1,cljs.core.cst$kw$states,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(forms_states,form_props,form_state),cljs.core.array_seq([cljs.core.cst$kw$order,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(forms_order,form_props)], 0)));
});
keechma.toolbox.forms.controller.promise_or_pipeline = (function keechma$toolbox$forms$controller$promise_or_pipeline(var_args){
var args25088 = [];
var len__11171__auto___25091 = arguments.length;
var i__11172__auto___25092 = (0);
while(true){
if((i__11172__auto___25092 < len__11171__auto___25091)){
args25088.push((arguments[i__11172__auto___25092]));

var G__25093 = (i__11172__auto___25092 + (1));
i__11172__auto___25092 = G__25093;
continue;
} else {
}
break;
}

var G__25090 = args25088.length;
switch (G__25090) {
case 1:
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25088.length)].join('')));

}
});

keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$1 = (function (res){
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2(res,cljs.core.identity);
});

keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2 = (function (res,processor){
var res_meta = cljs.core.meta(res);
if(cljs.core.truth_(cljs.core.cst$kw$pipeline_QMARK_.cljs$core$IFn$_invoke$arity$1(res_meta))){
return cljs.core.with_meta(((function (res_meta){
return (function() { 
var G__25095__delegate = function (args){
return promesa.core.map(processor,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(res,args));
};
var G__25095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25096__i = 0, G__25096__a = new Array(arguments.length -  0);
while (G__25096__i < G__25096__a.length) {G__25096__a[G__25096__i] = arguments[G__25096__i + 0]; ++G__25096__i;}
  args = new cljs.core.IndexedSeq(G__25096__a,0);
} 
return G__25095__delegate.call(this,args);};
G__25095.cljs$lang$maxFixedArity = 0;
G__25095.cljs$lang$applyTo = (function (arglist__25097){
var args = cljs.core.seq(arglist__25097);
return G__25095__delegate(args);
});
G__25095.cljs$core$IFn$_invoke$arity$variadic = G__25095__delegate;
return G__25095;
})()
;})(res_meta))
,res_meta);
} else {
return promesa.core.map(processor,promesa.core.promise(res));
}
});

keechma.toolbox.forms.controller.promise_or_pipeline.cljs$lang$maxFixedArity = 2;

keechma.toolbox.forms.controller.get_initial_state = (function keechma$toolbox$forms$controller$get_initial_state(app_db,forms_config,value){
var form_props = cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(value);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.forms.core.get_data(form_record,app_db,form_props),((function (form_props,form_record){
return (function (p1__25098_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,cljs.core.cst$kw$initial_DASH_data,p1__25098_SHARP_);
});})(form_props,form_record))
);
});
keechma.toolbox.forms.controller.should_immediately_validate_QMARK_ = (function keechma$toolbox$forms$controller$should_immediately_validate_QMARK_(attr_valid_QMARK_,element){
if(cljs.core.not(attr_valid_QMARK_)){
return true;
} else {
if((element == null)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text",element.type)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("textarea",element.tagName)){
return false;
} else {
return true;

}
}
}
}
});
keechma.toolbox.forms.controller.premount_form = (function keechma$toolbox$forms$controller$premount_form(app_db,p__25099){
var map__25102 = p__25099;
var map__25102__$1 = ((((!((map__25102 == null)))?((((map__25102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25102):map__25102);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25102__$1,cljs.core.cst$kw$form_DASH_props);
return keechma.toolbox.forms.controller.add_form_to_app_db(app_db,form_props,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$submit_DASH_attempted_QMARK_,false,cljs.core.cst$kw$dirty_DASH_paths,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$cached_DASH_dirty_DASH_paths,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$mounting], null)], null));
});
keechma.toolbox.forms.controller.mount_form = (function keechma$toolbox$forms$controller$mount_form(app_db,forms_config,p__25104){
var map__25107 = p__25104;
var map__25107__$1 = ((((!((map__25107 == null)))?((((map__25107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25107):map__25107);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25107__$1,cljs.core.cst$kw$form_DASH_props);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25107__$1,cljs.core.cst$kw$initial_DASH_data);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var processed_data = keechma.toolbox.forms.core.process_in(form_record,app_db,form_props,initial_data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.cst$kw$initial_DASH_data,processed_data,cljs.core.array_seq([cljs.core.cst$kw$data,processed_data,cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$mounted], null)], 0)));
});
keechma.toolbox.forms.controller.unmount_form = (function keechma$toolbox$forms$controller$unmount_form(app_db,p__25110){
var map__25113 = p__25110;
var map__25113__$1 = ((((!((map__25113 == null)))?((((map__25113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25113):map__25113);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25113__$1,cljs.core.cst$kw$form_DASH_props);
var forms__$1 = keechma.toolbox.forms.controller.get_forms(app_db);
var forms_order = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (forms__$1,map__25113,map__25113__$1,form_props){
return (function (p1__25109_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form_props,p1__25109_SHARP_);
});})(forms__$1,map__25113,map__25113__$1,form_props))
,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(forms__$1)));
var form_states = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(forms__$1),form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(forms__$1,cljs.core.cst$kw$order,forms_order,cljs.core.array_seq([cljs.core.cst$kw$states,form_states], 0)));
});
keechma.toolbox.forms.controller.update_form_state = (function keechma$toolbox$forms$controller$update_form_state(app_db,forms_config,type,cause,p__25115){
var map__25118 = p__25115;
var map__25118__$1 = ((((!((map__25118 == null)))?((((map__25118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25118):map__25118);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25118__$1,cljs.core.cst$kw$form_DASH_props);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props,cljs.core.cst$kw$state], null),(cljs.core.truth_(cause)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$cause,cause], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null)));
});
keechma.toolbox.forms.controller.update_form_data = (function keechma$toolbox$forms$controller$update_form_data(app_db,forms_config,p__25120){
var map__25123 = p__25120;
var map__25123__$1 = ((((!((map__25123 == null)))?((((map__25123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25123):map__25123);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,cljs.core.cst$kw$form_DASH_props);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25123__$1,cljs.core.cst$kw$data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props,cljs.core.cst$kw$data], null),data);
});
keechma.toolbox.forms.controller.mark_dirty_and_validate = (function keechma$toolbox$forms$controller$mark_dirty_and_validate(var_args){
var args25125 = [];
var len__11171__auto___25128 = arguments.length;
var i__11172__auto___25129 = (0);
while(true){
if((i__11172__auto___25129 < len__11171__auto___25128)){
args25125.push((arguments[i__11172__auto___25129]));

var G__25130 = (i__11172__auto___25129 + (1));
i__11172__auto___25129 = G__25130;
continue;
} else {
}
break;
}

var G__25127 = args25125.length;
switch (G__25127) {
case 2:
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25125.length)].join('')));

}
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2 = (function (form_record,form_state){
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3(form_record,form_state,true);
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3 = (function (form_record,form_state,dirty_only_QMARK_){
if(cljs.core.truth_(dirty_only_QMARK_)){
var errors = keechma.toolbox.forms.core.validate(form_record,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state));
var dirty_paths = forms.dirty.calculate_dirty_fields(cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.cst$kw$errors,errors,cljs.core.array_seq([cljs.core.cst$kw$dirty_DASH_paths,cljs.core.set(dirty_paths)], 0));
} else {
var errors = keechma.toolbox.forms.core.validate(form_record,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state));
var cached_dirty_paths = cljs.core.cst$kw$cached_DASH_dirty_DASH_paths.cljs$core$IFn$_invoke$arity$1(form_state);
var dirty_paths = forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1(errors);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.cst$kw$errors,errors,cljs.core.array_seq([cljs.core.cst$kw$dirty_DASH_paths,cljs.core.set(dirty_paths),cljs.core.cst$kw$cached_DASH_dirty_DASH_paths,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cached_dirty_paths,dirty_paths))], 0));
}
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$lang$maxFixedArity = 3;

keechma.toolbox.forms.controller.handle_on_change = (function keechma$toolbox$forms$controller$handle_on_change(app_db,forms_config,p__25132){
var vec__25136 = p__25132;
var form_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25136,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25136,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25136,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25136,(3),null);
var caret_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25136,(4),null);
var path__$1 = forms.util.key_to_path(path);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var old_value = keechma.toolbox.forms.helpers.attr_get_in(form_state,path__$1);
var formatter = keechma.toolbox.forms.core.format_attr_with(form_record,path__$1);
var formatted_value = (cljs.core.truth_(formatter)?(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(value,old_value) : formatter.call(null,value,old_value)):value);
var processor = keechma.toolbox.forms.core.process_attr_with(form_record,path__$1);
var new_state = (cljs.core.truth_(processor)?(processor.cljs$core$IFn$_invoke$arity$5 ? processor.cljs$core$IFn$_invoke$arity$5(app_db,form_props,form_state,path__$1,formatted_value) : processor.call(null,app_db,form_props,form_state,path__$1,formatted_value)):keechma.toolbox.forms.helpers.attr_assoc_in(form_state,path__$1,formatted_value));
var attr_valid_QMARK_ = keechma.toolbox.forms.helpers.attr_valid_QMARK_(form_state,path__$1);
var current_form_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null));
if((current_form_state == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Form is not mounted",form_props);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),(cljs.core.truth_(keechma.toolbox.forms.controller.should_immediately_validate_QMARK_(attr_valid_QMARK_,element))?keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2(form_record,new_state):new_state)),(cljs.core.truth_((function (){var and__9980__auto__ = element;
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = formatter;
if(cljs.core.truth_(and__9980__auto____$1)){
return caret_pos;
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
}
})())?((function (path__$1,form_state,form_record,old_value,formatter,formatted_value,processor,new_state,attr_valid_QMARK_,current_form_state,vec__25136,form_props,path,element,value,caret_pos){
return (function (){
keechma.toolbox.forms.cursor.set_caret_pos_BANG_(element,cljs.core.cst$kw$format_DASH_chars.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(formatter)),value,formatted_value,(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(old_value,null) : formatter.call(null,old_value,null)),caret_pos);

return reagent.core.flush();
});})(path__$1,form_state,form_record,old_value,formatter,formatted_value,processor,new_state,attr_valid_QMARK_,current_form_state,vec__25136,form_props,path,element,value,caret_pos))
:null)], null);
});
keechma.toolbox.forms.controller.handle_on_blur = (function keechma$toolbox$forms$controller$handle_on_blur(app_db,forms_config,p__25139){
var vec__25143 = p__25139;
var form_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143,(1),null);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2(form_record,form_state));
});
keechma.toolbox.forms.controller.handle_on_validate = (function keechma$toolbox$forms$controller$handle_on_validate(app_db,forms_config,p__25146){
var vec__25150 = p__25146;
var form_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25150,(0),null);
var dirty_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25150,(1),null);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3(form_record,form_state,dirty_only_QMARK_));
});
keechma.toolbox.forms.controller.handle_on_submit = (function keechma$toolbox$forms$controller$handle_on_submit(app_db,forms_config,data){
var form_props = cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var new_form_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3(form_record,form_state,false),cljs.core.cst$kw$submit_DASH_attempted_QMARK_,true);
var new_app_db = cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),new_form_state);
if(cljs.core.truth_(keechma.toolbox.forms.helpers.form_invalid_QMARK_(new_form_state))){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(new_app_db);
} else {
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(new_app_db),keechma.toolbox.pipeline.core.execute_BANG_(cljs.core.cst$kw$submit_DASH_form,data)], 0));
}
});
keechma.toolbox.forms.controller.submit_form = (function keechma$toolbox$forms$controller$submit_form(app_db,forms_config,data){
var form_props = cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var processed_data = keechma.toolbox.forms.core.process_out(form_record,app_db,form_props,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state));
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.forms.core.submit_data(form_record,app_db,form_props,processed_data),((function (form_props,form_state,form_record,processed_data){
return (function (p1__25153_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$result,p1__25153_SHARP_);
});})(form_props,form_state,form_record,processed_data))
);
});
keechma.toolbox.forms.controller.update_form = (function keechma$toolbox$forms$controller$update_form(app_db,forms_config,data){
var form_props = cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var processed_data = keechma.toolbox.forms.core.process_out(form_record,app_db,form_props,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state));
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.forms.core.submit_data(form_record,app_db,form_props,processed_data),((function (form_props,form_state,form_record,processed_data){
return (function (p1__25154_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$result,p1__25154_SHARP_);
});})(form_props,form_state,form_record,processed_data))
);
});
keechma.toolbox.forms.controller.handle_on_update_success = (function keechma$toolbox$forms$controller$handle_on_update_success(app_db,forms_config,value){
var map__25157 = value;
var map__25157__$1 = ((((!((map__25157 == null)))?((((map__25157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25157):map__25157);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25157__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25157__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,cljs.core.cst$kw$data,keechma.toolbox.forms.core.on_update_success(form_record,app_db,form_props,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state),result));
});
keechma.toolbox.forms.controller.handle_on_update_error = (function keechma$toolbox$forms$controller$handle_on_update_error(app_db,forms_config,error,value){
var map__25161 = value;
var map__25161__$1 = ((((!((map__25161 == null)))?((((map__25161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25161):map__25161);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25161__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25161__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,cljs.core.cst$kw$data,keechma.toolbox.forms.core.on_update_error(form_record,app_db,form_props,result,error));
});
keechma.toolbox.forms.controller.handle_on_submit_success = (function keechma$toolbox$forms$controller$handle_on_submit_success(app_db,forms_config,p__25163){
var map__25166 = p__25163;
var map__25166__$1 = ((((!((map__25166 == null)))?((((map__25166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25166):map__25166);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25166__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25166__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return keechma.toolbox.forms.core.on_submit_success(form_record,app_db,form_props,result);
});
keechma.toolbox.forms.controller.handle_on_submit_error = (function keechma$toolbox$forms$controller$handle_on_submit_error(app_db,forms_config,error,p__25168){
var map__25171 = p__25168;
var map__25171__$1 = ((((!((map__25171 == null)))?((((map__25171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25171):map__25171);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25171__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25171__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return keechma.toolbox.forms.core.on_submit_error(form_record,app_db,form_props,result,error);
});
keechma.toolbox.forms.controller.actions = (function keechma$toolbox$forms$controller$actions(forms_config){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$mount_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.premount_form(app_db,value));
}),(function (value,app_db){
return keechma.toolbox.forms.controller.get_initial_state(app_db,forms_config,value);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.mount_form(app_db,forms_config,value));
})], null),cljs.core.cst$kw$rescue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,error){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$mount_DASH_failed,cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(error),value));
})], null)], null)),cljs.core.cst$kw$unmount_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.unmount_form(app_db,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null)));
})], null)], null)),cljs.core.cst$kw$submit_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$submitting,null,value));
}),(function (value,app_db){
return keechma.toolbox.forms.controller.submit_form(app_db,forms_config,value);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$submitted,null,value));
}),(function (value,app_db){
return keechma.toolbox.forms.controller.handle_on_submit_success(app_db,forms_config,value);
})], null),cljs.core.cst$kw$rescue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,error){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$submit_DASH_failed,cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(error),value));
}),(function (value,app_db,error){
return keechma.toolbox.forms.controller.handle_on_submit_error(app_db,forms_config,error,value);
})], null)], null)),cljs.core.cst$kw$update_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$updating,null,value));
}),(function (value,app_db){
return keechma.toolbox.forms.controller.update_form(app_db,forms_config,value);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(keechma.toolbox.forms.controller.update_form_data(app_db,forms_config,keechma.toolbox.forms.controller.handle_on_update_success(app_db,forms_config,value)),forms_config,cljs.core.cst$kw$updated,null,value));
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.send_command_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$updated_DASH_form], null),cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(value));
})], null),cljs.core.cst$kw$rescue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,error){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(keechma.toolbox.forms.controller.update_form_data(app_db,forms_config,keechma.toolbox.forms.controller.handle_on_update_error(app_db,forms_config,error,value)),forms_config,cljs.core.cst$kw$update_DASH_failed,cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(error),value));
})], null)], null)),cljs.core.cst$kw$on_DASH_change,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.pipeline.core.commit_BANG_,keechma.toolbox.forms.controller.handle_on_change(app_db,forms_config,value));
})], null)], null)),cljs.core.cst$kw$on_DASH_blur,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.handle_on_blur(app_db,forms_config,value));
})], null)], null)),cljs.core.cst$kw$on_DASH_validate,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.handle_on_validate(app_db,forms_config,value));
})], null)], null)),cljs.core.cst$kw$on_DASH_submit,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null);
}),(function (value,app_db){
return keechma.toolbox.forms.controller.handle_on_submit(app_db,forms_config,value);
})], null)], null))], null);
});
keechma.toolbox.forms.controller.make_controller = (function keechma$toolbox$forms$controller$make_controller(forms_config){
return keechma.toolbox.pipeline.controller.constructor$((function (){
return true;
}),keechma.toolbox.forms.controller.actions(forms_config));
});
keechma.toolbox.forms.controller.register = (function keechma$toolbox$forms$controller$register(var_args){
var args25173 = [];
var len__11171__auto___25176 = arguments.length;
var i__11172__auto___25177 = (0);
while(true){
if((i__11172__auto___25177 < len__11171__auto___25176)){
args25173.push((arguments[i__11172__auto___25177]));

var G__25178 = (i__11172__auto___25177 + (1));
i__11172__auto___25177 = G__25178;
continue;
} else {
}
break;
}

var G__25175 = args25173.length;
switch (G__25175) {
case 1:
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25173.length)].join('')));

}
});

keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$1 = (function (forms_config){
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,forms_config);
});

keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (controllers,forms_config){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controllers,keechma.toolbox.forms.core.id_key,keechma.toolbox.forms.controller.make_controller(forms_config));
});

keechma.toolbox.forms.controller.register.cljs$lang$maxFixedArity = 2;

