// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('keechma.toolbox.forms.cursor');
goog.require('forms.dirty');
goog.require('forms.core');
goog.require('forms.util');
goog.require('promesa.core');
goog.require('reagent.core');
keechma.toolbox.forms.controller.get_form_record = (function keechma$toolbox$forms$controller$get_form_record(forms_config,p__24925){
var vec__24926 = p__24925;
var form_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms_config,form_type);
});
keechma.toolbox.forms.controller.get_form_state = (function keechma$toolbox$forms$controller$get_form_state(app_db,form_props){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null));
});
keechma.toolbox.forms.controller.get_forms = (function keechma$toolbox$forms$controller$get_forms(app_db){
var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$states,cljs.core.PersistentArrayMap.EMPTY], null);
}
});
keechma.toolbox.forms.controller.add_form_to_app_db = (function keechma$toolbox$forms$controller$add_form_to_app_db(app_db,form_props,form_state){
var forms__$1 = keechma.toolbox.forms.controller.get_forms(app_db);
var forms_order = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (forms__$1){
return (function (p1__24929_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form_props,p1__24929_SHARP_);
});})(forms__$1))
,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(forms__$1)));
var forms_states = cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(forms__$1);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(forms__$1,cljs.core.cst$kw$states,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(forms_states,form_props,form_state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$order,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(forms_order,form_props)], 0)));
});
keechma.toolbox.forms.controller.promise_or_pipeline = (function keechma$toolbox$forms$controller$promise_or_pipeline(var_args){
var G__24931 = arguments.length;
switch (G__24931) {
case 1:
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__24933__delegate = function (args){
return promesa.core.map(processor,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(res,args));
};
var G__24933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24934__i = 0, G__24934__a = new Array(arguments.length -  0);
while (G__24934__i < G__24934__a.length) {G__24934__a[G__24934__i] = arguments[G__24934__i + 0]; ++G__24934__i;}
  args = new cljs.core.IndexedSeq(G__24934__a,0,null);
} 
return G__24933__delegate.call(this,args);};
G__24933.cljs$lang$maxFixedArity = 0;
G__24933.cljs$lang$applyTo = (function (arglist__24935){
var args = cljs.core.seq(arglist__24935);
return G__24933__delegate(args);
});
G__24933.cljs$core$IFn$_invoke$arity$variadic = G__24933__delegate;
return G__24933;
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
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2((keechma.toolbox.forms.core.get_data.cljs$core$IFn$_invoke$arity$3 ? keechma.toolbox.forms.core.get_data.cljs$core$IFn$_invoke$arity$3(form_record,app_db,form_props) : keechma.toolbox.forms.core.get_data.call(null,form_record,app_db,form_props)),((function (form_props,form_record){
return (function (p1__24936_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,cljs.core.cst$kw$initial_DASH_data,p1__24936_SHARP_);
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
keechma.toolbox.forms.controller.premount_form = (function keechma$toolbox$forms$controller$premount_form(app_db,p__24937){
var map__24938 = p__24937;
var map__24938__$1 = ((((!((map__24938 == null)))?((((map__24938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24938):map__24938);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24938__$1,cljs.core.cst$kw$form_DASH_props);
return keechma.toolbox.forms.controller.add_form_to_app_db(app_db,form_props,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$submit_DASH_attempted_QMARK_,false,cljs.core.cst$kw$dirty_DASH_paths,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$cached_DASH_dirty_DASH_paths,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$mounting], null)], null));
});
keechma.toolbox.forms.controller.mount_form = (function keechma$toolbox$forms$controller$mount_form(app_db,forms_config,p__24940){
var map__24941 = p__24940;
var map__24941__$1 = ((((!((map__24941 == null)))?((((map__24941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24941):map__24941);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24941__$1,cljs.core.cst$kw$form_DASH_props);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24941__$1,cljs.core.cst$kw$initial_DASH_data);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var processed_data = (keechma.toolbox.forms.core.process_in.cljs$core$IFn$_invoke$arity$4 ? keechma.toolbox.forms.core.process_in.cljs$core$IFn$_invoke$arity$4(form_record,app_db,form_props,initial_data) : keechma.toolbox.forms.core.process_in.call(null,form_record,app_db,form_props,initial_data));
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.cst$kw$initial_DASH_data,processed_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,processed_data,cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$mounted], null)], 0)));
});
keechma.toolbox.forms.controller.unmount_form = (function keechma$toolbox$forms$controller$unmount_form(app_db,p__24944){
var map__24945 = p__24944;
var map__24945__$1 = ((((!((map__24945 == null)))?((((map__24945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24945):map__24945);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,cljs.core.cst$kw$form_DASH_props);
var forms__$1 = keechma.toolbox.forms.controller.get_forms(app_db);
var forms_order = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (forms__$1,map__24945,map__24945__$1,form_props){
return (function (p1__24943_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form_props,p1__24943_SHARP_);
});})(forms__$1,map__24945,map__24945__$1,form_props))
,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(forms__$1)));
var form_states = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(forms__$1),form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(forms__$1,cljs.core.cst$kw$order,forms_order,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$states,form_states], 0)));
});
keechma.toolbox.forms.controller.update_form_state = (function keechma$toolbox$forms$controller$update_form_state(app_db,forms_config,type,cause,p__24947){
var map__24948 = p__24947;
var map__24948__$1 = ((((!((map__24948 == null)))?((((map__24948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24948):map__24948);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24948__$1,cljs.core.cst$kw$form_DASH_props);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props,cljs.core.cst$kw$state], null),(cljs.core.truth_(cause)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$cause,cause], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null)));
});
keechma.toolbox.forms.controller.update_form_data = (function keechma$toolbox$forms$controller$update_form_data(app_db,forms_config,p__24950){
var map__24951 = p__24950;
var map__24951__$1 = ((((!((map__24951 == null)))?((((map__24951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24951):map__24951);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24951__$1,cljs.core.cst$kw$form_DASH_props);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24951__$1,cljs.core.cst$kw$data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props,cljs.core.cst$kw$data], null),data);
});
keechma.toolbox.forms.controller.mark_dirty_and_validate = (function keechma$toolbox$forms$controller$mark_dirty_and_validate(var_args){
var G__24954 = arguments.length;
switch (G__24954) {
case 2:
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2 = (function (form_record,form_state){
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3(form_record,form_state,true);
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3 = (function (form_record,form_state,dirty_only_QMARK_){
if(cljs.core.truth_(dirty_only_QMARK_)){
var errors = (function (){var G__24955 = form_record;
var G__24956 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state);
return (keechma.toolbox.forms.core.validate.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.forms.core.validate.cljs$core$IFn$_invoke$arity$2(G__24955,G__24956) : keechma.toolbox.forms.core.validate.call(null,G__24955,G__24956));
})();
var dirty_paths = forms.dirty.calculate_dirty_fields(cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.cst$kw$errors,errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dirty_DASH_paths,cljs.core.set(dirty_paths)], 0));
} else {
var errors = (function (){var G__24957 = form_record;
var G__24958 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state);
return (keechma.toolbox.forms.core.validate.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.forms.core.validate.cljs$core$IFn$_invoke$arity$2(G__24957,G__24958) : keechma.toolbox.forms.core.validate.call(null,G__24957,G__24958));
})();
var cached_dirty_paths = cljs.core.cst$kw$cached_DASH_dirty_DASH_paths.cljs$core$IFn$_invoke$arity$1(form_state);
var dirty_paths = forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1(errors);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.cst$kw$errors,errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dirty_DASH_paths,cljs.core.set(dirty_paths),cljs.core.cst$kw$cached_DASH_dirty_DASH_paths,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cached_dirty_paths,dirty_paths))], 0));
}
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$lang$maxFixedArity = 3;

keechma.toolbox.forms.controller.handle_on_change = (function keechma$toolbox$forms$controller$handle_on_change(app_db,forms_config,p__24960){
var vec__24961 = p__24960;
var form_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(3),null);
var caret_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(4),null);
var path__$1 = forms.util.key_to_path(path);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var old_value = keechma.toolbox.forms.helpers.attr_get_in(form_state,path__$1);
var formatter = (keechma.toolbox.forms.core.format_attr_with.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.forms.core.format_attr_with.cljs$core$IFn$_invoke$arity$2(form_record,path__$1) : keechma.toolbox.forms.core.format_attr_with.call(null,form_record,path__$1));
var formatted_value = (cljs.core.truth_(formatter)?(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(value,old_value) : formatter.call(null,value,old_value)):value);
var processor = (keechma.toolbox.forms.core.process_attr_with.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.forms.core.process_attr_with.cljs$core$IFn$_invoke$arity$2(form_record,path__$1) : keechma.toolbox.forms.core.process_attr_with.call(null,form_record,path__$1));
var new_state = (cljs.core.truth_(processor)?(processor.cljs$core$IFn$_invoke$arity$5 ? processor.cljs$core$IFn$_invoke$arity$5(app_db,form_props,form_state,path__$1,formatted_value) : processor.call(null,app_db,form_props,form_state,path__$1,formatted_value)):keechma.toolbox.forms.helpers.attr_assoc_in(form_state,path__$1,formatted_value));
var attr_valid_QMARK_ = keechma.toolbox.forms.helpers.attr_valid_QMARK_(form_state,path__$1);
var current_form_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null));
if((current_form_state == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Form is not mounted",form_props);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),(cljs.core.truth_(keechma.toolbox.forms.controller.should_immediately_validate_QMARK_(attr_valid_QMARK_,element))?keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2(form_record,new_state):new_state)),(cljs.core.truth_((function (){var and__11502__auto__ = element;
if(cljs.core.truth_(and__11502__auto__)){
var and__11502__auto____$1 = formatter;
if(cljs.core.truth_(and__11502__auto____$1)){
return caret_pos;
} else {
return and__11502__auto____$1;
}
} else {
return and__11502__auto__;
}
})())?((function (path__$1,form_state,form_record,old_value,formatter,formatted_value,processor,new_state,attr_valid_QMARK_,current_form_state,vec__24961,form_props,path,element,value,caret_pos){
return (function (){
keechma.toolbox.forms.cursor.set_caret_pos_BANG_(element,cljs.core.cst$kw$format_DASH_chars.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(formatter)),value,formatted_value,(formatter.cljs$core$IFn$_invoke$arity$2 ? formatter.cljs$core$IFn$_invoke$arity$2(old_value,null) : formatter.call(null,old_value,null)),caret_pos);

return reagent.core.flush();
});})(path__$1,form_state,form_record,old_value,formatter,formatted_value,processor,new_state,attr_valid_QMARK_,current_form_state,vec__24961,form_props,path,element,value,caret_pos))
:reagent.core.flush)], null);
});
keechma.toolbox.forms.controller.handle_on_blur = (function keechma$toolbox$forms$controller$handle_on_blur(app_db,forms_config,p__24964){
var vec__24965 = p__24964;
var form_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(1),null);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null),keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2(form_record,form_state));
});
keechma.toolbox.forms.controller.handle_on_validate = (function keechma$toolbox$forms$controller$handle_on_validate(app_db,forms_config,p__24968){
var vec__24969 = p__24968;
var form_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24969,(0),null);
var dirty_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24969,(1),null);
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
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(new_app_db),keechma.toolbox.pipeline.core.execute_BANG_(cljs.core.cst$kw$submit_DASH_form,data)], 0));
}
});
keechma.toolbox.forms.controller.submit_form = (function keechma$toolbox$forms$controller$submit_form(app_db,forms_config,data){
var form_props = cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var processed_data = (function (){var G__24973 = form_record;
var G__24974 = app_db;
var G__24975 = form_props;
var G__24976 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state);
return (keechma.toolbox.forms.core.process_out.cljs$core$IFn$_invoke$arity$4 ? keechma.toolbox.forms.core.process_out.cljs$core$IFn$_invoke$arity$4(G__24973,G__24974,G__24975,G__24976) : keechma.toolbox.forms.core.process_out.call(null,G__24973,G__24974,G__24975,G__24976));
})();
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2((keechma.toolbox.forms.core.submit_data.cljs$core$IFn$_invoke$arity$4 ? keechma.toolbox.forms.core.submit_data.cljs$core$IFn$_invoke$arity$4(form_record,app_db,form_props,processed_data) : keechma.toolbox.forms.core.submit_data.call(null,form_record,app_db,form_props,processed_data)),((function (form_props,form_state,form_record,processed_data){
return (function (p1__24972_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$result,p1__24972_SHARP_);
});})(form_props,form_state,form_record,processed_data))
);
});
keechma.toolbox.forms.controller.update_form = (function keechma$toolbox$forms$controller$update_form(app_db,forms_config,data){
var form_props = cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
var processed_data = (function (){var G__24978 = form_record;
var G__24979 = app_db;
var G__24980 = form_props;
var G__24981 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state);
return (keechma.toolbox.forms.core.process_out.cljs$core$IFn$_invoke$arity$4 ? keechma.toolbox.forms.core.process_out.cljs$core$IFn$_invoke$arity$4(G__24978,G__24979,G__24980,G__24981) : keechma.toolbox.forms.core.process_out.call(null,G__24978,G__24979,G__24980,G__24981));
})();
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2((keechma.toolbox.forms.core.update_data.cljs$core$IFn$_invoke$arity$4 ? keechma.toolbox.forms.core.update_data.cljs$core$IFn$_invoke$arity$4(form_record,app_db,form_props,processed_data) : keechma.toolbox.forms.core.update_data.call(null,form_record,app_db,form_props,processed_data)),((function (form_props,form_state,form_record,processed_data){
return (function (p1__24977_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$result,p1__24977_SHARP_);
});})(form_props,form_state,form_record,processed_data))
);
});
keechma.toolbox.forms.controller.handle_on_update_success = (function keechma$toolbox$forms$controller$handle_on_update_success(app_db,forms_config,value){
var map__24982 = value;
var map__24982__$1 = ((((!((map__24982 == null)))?((((map__24982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24982):map__24982);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,cljs.core.cst$kw$data,(function (){var G__24984 = form_record;
var G__24985 = app_db;
var G__24986 = form_props;
var G__24987 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state);
var G__24988 = result;
return (keechma.toolbox.forms.core.on_update_success.cljs$core$IFn$_invoke$arity$5 ? keechma.toolbox.forms.core.on_update_success.cljs$core$IFn$_invoke$arity$5(G__24984,G__24985,G__24986,G__24987,G__24988) : keechma.toolbox.forms.core.on_update_success.call(null,G__24984,G__24985,G__24986,G__24987,G__24988));
})());
});
keechma.toolbox.forms.controller.handle_on_update_error = (function keechma$toolbox$forms$controller$handle_on_update_error(app_db,forms_config,error,value){
var map__24989 = value;
var map__24989__$1 = ((((!((map__24989 == null)))?((((map__24989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24989):map__24989);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24989__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24989__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,cljs.core.cst$kw$data,(keechma.toolbox.forms.core.on_update_error.cljs$core$IFn$_invoke$arity$5 ? keechma.toolbox.forms.core.on_update_error.cljs$core$IFn$_invoke$arity$5(form_record,app_db,form_props,result,error) : keechma.toolbox.forms.core.on_update_error.call(null,form_record,app_db,form_props,result,error)));
});
keechma.toolbox.forms.controller.handle_on_submit_success = (function keechma$toolbox$forms$controller$handle_on_submit_success(app_db,forms_config,p__24991){
var map__24992 = p__24991;
var map__24992__$1 = ((((!((map__24992 == null)))?((((map__24992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24992):map__24992);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24992__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24992__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return (keechma.toolbox.forms.core.on_submit_success.cljs$core$IFn$_invoke$arity$4 ? keechma.toolbox.forms.core.on_submit_success.cljs$core$IFn$_invoke$arity$4(form_record,app_db,form_props,result) : keechma.toolbox.forms.core.on_submit_success.call(null,form_record,app_db,form_props,result));
});
keechma.toolbox.forms.controller.handle_on_submit_error = (function keechma$toolbox$forms$controller$handle_on_submit_error(app_db,forms_config,error,p__24994){
var map__24995 = p__24994;
var map__24995__$1 = ((((!((map__24995 == null)))?((((map__24995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24995):map__24995);
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24995__$1,cljs.core.cst$kw$form_DASH_props);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24995__$1,cljs.core.cst$kw$result);
var form_state = keechma.toolbox.forms.controller.get_form_state(app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record(forms_config,form_props);
return (keechma.toolbox.forms.core.on_submit_error.cljs$core$IFn$_invoke$arity$5 ? keechma.toolbox.forms.core.on_submit_error.cljs$core$IFn$_invoke$arity$5(form_record,app_db,form_props,result,error) : keechma.toolbox.forms.core.on_submit_error.call(null,form_record,app_db,form_props,result,error));
});
keechma.toolbox.forms.controller.actions = (function keechma$toolbox$forms$controller$actions(forms_config){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$mount_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"{:form-props value}",cljs.core.cst$kw$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (premount-form app-db value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.premount_form(app_db,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(get-initial-state app-db forms-config value)",cljs.core.cst$kw$val,keechma.toolbox.forms.controller.get_initial_state(app_db,forms_config,value)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (mount-form app-db forms-config value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.mount_form(app_db,forms_config,value))], null);
})], null),cljs.core.cst$kw$rescue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (update-form-state\n  app-db\n  forms-config\n  :mount-failed\n  (:payload error)\n  value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$mount_DASH_failed,cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(error),value))], null);
})], null)], null)),cljs.core.cst$kw$unmount_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (unmount-form app-db {:form-props value}))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.unmount_form(app_db,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null)))], null);
})], null)], null)),cljs.core.cst$kw$submit_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (update-form-state app-db forms-config :submitting nil value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$submitting,null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(submit-form app-db forms-config value)",cljs.core.cst$kw$val,keechma.toolbox.forms.controller.submit_form(app_db,forms_config,value)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (update-form-state app-db forms-config :submitted nil value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$submitted,null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(handle-on-submit-success app-db forms-config value)",cljs.core.cst$kw$val,keechma.toolbox.forms.controller.handle_on_submit_success(app_db,forms_config,value)], null);
})], null),cljs.core.cst$kw$rescue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (update-form-state\n  app-db\n  forms-config\n  :submit-failed\n  (:payload error)\n  value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$submit_DASH_failed,cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(error),value))], null);
}),(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(handle-on-submit-error app-db forms-config error value)",cljs.core.cst$kw$val,keechma.toolbox.forms.controller.handle_on_submit_error(app_db,forms_config,error,value)], null);
})], null)], null)),cljs.core.cst$kw$update_DASH_form,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"{:form-props value}",cljs.core.cst$kw$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (update-form-state app-db forms-config :updating nil value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(app_db,forms_config,cljs.core.cst$kw$updating,null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(update-form app-db forms-config value)",cljs.core.cst$kw$val,keechma.toolbox.forms.controller.update_form(app_db,forms_config,value)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (->\n  app-db\n  (update-form-data\n   forms-config\n   (handle-on-update-success app-db forms-config value))\n  (update-form-state forms-config :updated nil value)))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(keechma.toolbox.forms.controller.update_form_data(app_db,forms_config,keechma.toolbox.forms.controller.handle_on_update_success(app_db,forms_config,value)),forms_config,cljs.core.cst$kw$updated,null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/send-command! [core/id-key :updated-form] (:form-props value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.send_command_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$updated_DASH_form], null),cljs.core.cst$kw$form_DASH_props.cljs$core$IFn$_invoke$arity$1(value))], null);
})], null),cljs.core.cst$kw$rescue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit!\n (->\n  app-db\n  (update-form-data\n   forms-config\n   (handle-on-update-error app-db forms-config error value))\n  (update-form-state\n   forms-config\n   :update-failed\n   (:payload error)\n   value)))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.update_form_state(keechma.toolbox.forms.controller.update_form_data(app_db,forms_config,keechma.toolbox.forms.controller.handle_on_update_error(app_db,forms_config,error,value)),forms_config,cljs.core.cst$kw$update_DASH_failed,cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(error),value))], null);
})], null)], null)),cljs.core.cst$kw$on_DASH_change,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(apply pp/commit! (handle-on-change app-db forms-config value))",cljs.core.cst$kw$val,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.pipeline.core.commit_BANG_,keechma.toolbox.forms.controller.handle_on_change(app_db,forms_config,value))], null);
})], null)], null)),cljs.core.cst$kw$on_DASH_blur,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (handle-on-blur app-db forms-config value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.handle_on_blur(app_db,forms_config,value))], null);
})], null)], null)),cljs.core.cst$kw$on_DASH_validate,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (handle-on-validate app-db forms-config value))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.handle_on_validate(app_db,forms_config,value))], null);
})], null)], null)),cljs.core.cst$kw$on_DASH_submit,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"{:form-props value}",cljs.core.cst$kw$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_props,value], null)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(handle-on-submit app-db forms-config value)",cljs.core.cst$kw$val,keechma.toolbox.forms.controller.handle_on_submit(app_db,forms_config,value)], null);
})], null)], null))], null);
});
keechma.toolbox.forms.controller.make_controller = (function keechma$toolbox$forms$controller$make_controller(forms_config){
var ctrl = keechma.toolbox.pipeline.controller.constructor$((function (){
return true;
}),cljs.core.PersistentArrayMap.EMPTY);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(ctrl);
var forms_config_with_context = cljs.core.reduce_kv(((function (ctrl,context){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$context,context));
});})(ctrl,context))
,cljs.core.PersistentArrayMap.EMPTY,forms_config);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctrl,cljs.core.cst$kw$pipelines,keechma.toolbox.forms.controller.actions(forms_config_with_context));
});
keechma.toolbox.forms.controller.register = (function keechma$toolbox$forms$controller$register(var_args){
var G__24998 = arguments.length;
switch (G__24998) {
case 1:
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$1 = (function (forms_config){
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,forms_config);
});

keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (controllers,forms_config){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controllers,keechma.toolbox.forms.core.id_key,keechma.toolbox.forms.controller.make_controller(forms_config));
});

keechma.toolbox.forms.controller.register.cljs$lang$maxFixedArity = 2;

