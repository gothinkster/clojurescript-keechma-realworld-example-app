// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('forms.dirty');
keechma.toolbox.forms.core.id_key = cljs.core.cst$kw$keechma$toolbox$forms$core_SLASH_forms;
keechma.toolbox.forms.core.form_type = (function keechma$toolbox$forms$core$form_type(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21395 = arguments.length;
var i__12776__auto___21396 = (0);
while(true){
if((i__12776__auto___21396 < len__12775__auto___21395)){
args__12782__auto__.push((arguments[i__12776__auto___21396]));

var G__21397 = (i__12776__auto___21396 + (1));
i__12776__auto___21396 = G__21397;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return keechma.toolbox.forms.core.form_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

keechma.toolbox.forms.core.form_type.cljs$core$IFn$_invoke$arity$variadic = (function (form,args){
return cljs.core.type(form);
});

keechma.toolbox.forms.core.form_type.cljs$lang$maxFixedArity = (1);

keechma.toolbox.forms.core.form_type.cljs$lang$applyTo = (function (seq21393){
var G__21394 = cljs.core.first(seq21393);
var seq21393__$1 = cljs.core.next(seq21393);
return keechma.toolbox.forms.core.form_type.cljs$core$IFn$_invoke$arity$variadic(G__21394,seq21393__$1);
});

if(typeof keechma.toolbox.forms.core.get_data !== 'undefined'){
} else {
/**
 * This function should return either the initial form data or a promise that will resolve to the inital form data.
 */
keechma.toolbox.forms.core.get_data = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","get-data"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.submit_data !== 'undefined'){
} else {
/**
 * This function should return either the saved form data or a promise that will resolve to the saved form data
 */
keechma.toolbox.forms.core.submit_data = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","submit-data"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.update_data !== 'undefined'){
} else {
/**
 * This function should return either the updated form data or a promise that will resolve to the updated form data
 */
keechma.toolbox.forms.core.update_data = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","update-data"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.process_in !== 'undefined'){
} else {
/**
 * This function should return the processed incoming data (returned from the `get-data`) function. Use it to prepare the incoming data for the form.
 */
keechma.toolbox.forms.core.process_in = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","process-in"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.process_out !== 'undefined'){
} else {
/**
 * This function should return the processed outgoing data that will be passed to the `submit-data` function.
 */
keechma.toolbox.forms.core.process_out = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","process-out"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.process_attr_with !== 'undefined'){
} else {
/**
 * This function should return a processing function that can process the new value and return the new form state. If the processing function is returned, data will not be set in the `form-state` `:data` map. It should be done manually.
 * 
 *  Processor functions should look like this, and they should return a new version of a form-state:
 *   
 *  ```
 *  (fn [app-db form-props form-state path value]
 *    form-state)
 *  ```
 */
keechma.toolbox.forms.core.process_attr_with = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","process-attr-with"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.format_attr_with !== 'undefined'){
} else {
/**
 * This function should return a formatting function that can be used to format the value if applicable.
 *   
 *   Formatting functions should look like this:
 * 
 *  ```clojure
 *  (def format-percentage
 *    ^{:format-chars #{"%"}}
 *    (fn [value old-value]
 *      value))
 *  ```
 *  
 *  Formatting funtion should have a `format-chars` meta-data entry, which will be used to correctly position the cursor after formatting. Formatting function should be able to take in the formatted data, extract the value and format the data again. It should also handle corner cases like `nil` or empty string.
 *  
 */
keechma.toolbox.forms.core.format_attr_with = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","format-attr-with"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.on_submit_error !== 'undefined'){
} else {
/**
 * This function will be called if the `submit-data` function throws or rejects the returned promise. It should return a pipeline sideffect or a pipeline.
 */
keechma.toolbox.forms.core.on_submit_error = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","on-submit-error"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.on_submit_success !== 'undefined'){
} else {
/**
 * This function will be called if the `submit-data` function returns a value or resolves a returned promise. It should return a pipeline sideffect or a pipeline.
 */
keechma.toolbox.forms.core.on_submit_success = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","on-submit-success"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.on_update_error !== 'undefined'){
} else {
/**
 * This function will be called if the `update-data` function throws or rejects the returned promise. It should return a new form data state.
 */
keechma.toolbox.forms.core.on_update_error = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","on-update-error"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.on_update_success !== 'undefined'){
} else {
/**
 * This function will be called if the `update-data` function returns a value or resolves a returned promise. It should return a new form data state.
 */
keechma.toolbox.forms.core.on_update_success = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","on-update-success"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
if(typeof keechma.toolbox.forms.core.validate !== 'undefined'){
} else {
keechma.toolbox.forms.core.validate = (function (){var method_table__12562__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12563__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12564__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12565__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12566__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("keechma.toolbox.forms.core","validate"),keechma.toolbox.forms.core.form_type,cljs.core.cst$kw$default,hierarchy__12566__auto__,method_table__12562__auto__,prefer_table__12563__auto__,method_cache__12564__auto__,cached_hierarchy__12565__auto__));
})();
}
keechma.toolbox.forms.core.get_data.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props){
return cljs.core.PersistentArrayMap.EMPTY;
}));
keechma.toolbox.forms.core.submit_data.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data){
return data;
}));
keechma.toolbox.forms.core.update_data.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data){
return data;
}));
keechma.toolbox.forms.core.process_in.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data){
return data;
}));
keechma.toolbox.forms.core.process_out.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data){
return data;
}));
keechma.toolbox.forms.core.process_attr_with.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,path){
return null;
}));
keechma.toolbox.forms.core.format_attr_with.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,path){
return null;
}));
keechma.toolbox.forms.core.on_submit_error.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data,error){
return null;
}));
keechma.toolbox.forms.core.on_submit_success.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data){
return null;
}));
keechma.toolbox.forms.core.on_update_error.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data,error){
return data;
}));
keechma.toolbox.forms.core.on_update_success.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,app_db,form_props,data,new_data){
return new_data;
}));
keechma.toolbox.forms.core.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (this$,data){
var validator = cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(validator)){
return (validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(data) : validator.call(null,data));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
