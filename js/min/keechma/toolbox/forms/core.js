// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.core');
goog.require('cljs.core');
goog.require('forms.dirty');
keechma.toolbox.forms.core.id_key = cljs.core.cst$kw$keechma$toolbox$forms$core_SLASH_forms;

/**
 * @interface
 */
keechma.toolbox.forms.core.IForm = function(){};

/**
 * This function should return either the initial form data or a promise that will resolve to the inital form data.
 */
keechma.toolbox.forms.core.get_data = (function keechma$toolbox$forms$core$get_data(this$,app_db,form_props){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$get_data$arity$3 == null)))){
return this$.keechma$toolbox$forms$core$IForm$get_data$arity$3(this$,app_db,form_props);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.get_data[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(this$,app_db,form_props) : m__10706__auto__.call(null,this$,app_db,form_props));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.get_data["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,app_db,form_props) : m__10706__auto____$1.call(null,this$,app_db,form_props));
} else {
throw cljs.core.missing_protocol("IForm.get-data",this$);
}
}
}
});

/**
 * This function should return either the saved form data or a promise that will resolve to the saved form data
 */
keechma.toolbox.forms.core.submit_data = (function keechma$toolbox$forms$core$submit_data(this$,app_db,form_props,data){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$submit_data$arity$4 == null)))){
return this$.keechma$toolbox$forms$core$IForm$submit_data$arity$4(this$,app_db,form_props,data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.submit_data[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto__.call(null,this$,app_db,form_props,data));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.submit_data["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto____$1.call(null,this$,app_db,form_props,data));
} else {
throw cljs.core.missing_protocol("IForm.submit-data",this$);
}
}
}
});

/**
 * This function should return either the updated form data or a promise that will resolve to the updated form data
 */
keechma.toolbox.forms.core.update_data = (function keechma$toolbox$forms$core$update_data(this$,app_db,form_props,data){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$update_data$arity$4 == null)))){
return this$.keechma$toolbox$forms$core$IForm$update_data$arity$4(this$,app_db,form_props,data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.update_data[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto__.call(null,this$,app_db,form_props,data));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.update_data["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto____$1.call(null,this$,app_db,form_props,data));
} else {
throw cljs.core.missing_protocol("IForm.update-data",this$);
}
}
}
});

/**
 * This function should return the processed incoming data (returned from the `get-data`) function. Use it to prepare the incoming data for the form.
 */
keechma.toolbox.forms.core.process_in = (function keechma$toolbox$forms$core$process_in(this$,app_db,form_props,data){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$process_in$arity$4 == null)))){
return this$.keechma$toolbox$forms$core$IForm$process_in$arity$4(this$,app_db,form_props,data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.process_in[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto__.call(null,this$,app_db,form_props,data));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.process_in["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto____$1.call(null,this$,app_db,form_props,data));
} else {
throw cljs.core.missing_protocol("IForm.process-in",this$);
}
}
}
});

/**
 * This function should return the processed outgoing data that will be passed to the `submit-data` function.
 */
keechma.toolbox.forms.core.process_out = (function keechma$toolbox$forms$core$process_out(this$,app_db,form_props,data){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$process_out$arity$4 == null)))){
return this$.keechma$toolbox$forms$core$IForm$process_out$arity$4(this$,app_db,form_props,data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.process_out[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto__.call(null,this$,app_db,form_props,data));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.process_out["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto____$1.call(null,this$,app_db,form_props,data));
} else {
throw cljs.core.missing_protocol("IForm.process-out",this$);
}
}
}
});

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
keechma.toolbox.forms.core.process_attr_with = (function keechma$toolbox$forms$core$process_attr_with(this$,path){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$process_attr_with$arity$2 == null)))){
return this$.keechma$toolbox$forms$core$IForm$process_attr_with$arity$2(this$,path);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.process_attr_with[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__10706__auto__.call(null,this$,path));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.process_attr_with["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,path) : m__10706__auto____$1.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("IForm.process-attr-with",this$);
}
}
}
});

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
keechma.toolbox.forms.core.format_attr_with = (function keechma$toolbox$forms$core$format_attr_with(this$,path){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$format_attr_with$arity$2 == null)))){
return this$.keechma$toolbox$forms$core$IForm$format_attr_with$arity$2(this$,path);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.format_attr_with[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__10706__auto__.call(null,this$,path));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.format_attr_with["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,path) : m__10706__auto____$1.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("IForm.format-attr-with",this$);
}
}
}
});

/**
 * This function will be called if the `submit-data` function throws or rejects the returned promise. It should return a pipeline sideffect or a pipeline.
 */
keechma.toolbox.forms.core.on_submit_error = (function keechma$toolbox$forms$core$on_submit_error(this$,app_db,form_props,data,error){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$on_submit_error$arity$5 == null)))){
return this$.keechma$toolbox$forms$core$IForm$on_submit_error$arity$5(this$,app_db,form_props,data,error);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.on_submit_error[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$5(this$,app_db,form_props,data,error) : m__10706__auto__.call(null,this$,app_db,form_props,data,error));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.on_submit_error["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,app_db,form_props,data,error) : m__10706__auto____$1.call(null,this$,app_db,form_props,data,error));
} else {
throw cljs.core.missing_protocol("IForm.on-submit-error",this$);
}
}
}
});

/**
 * This function will be called if the `submit-data` function returns a value or resolves a returned promise. It should return a pipeline sideffect or a pipeline.
 */
keechma.toolbox.forms.core.on_submit_success = (function keechma$toolbox$forms$core$on_submit_success(this$,app_db,form_props,data){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$on_submit_success$arity$4 == null)))){
return this$.keechma$toolbox$forms$core$IForm$on_submit_success$arity$4(this$,app_db,form_props,data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.on_submit_success[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto__.call(null,this$,app_db,form_props,data));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.on_submit_success["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,app_db,form_props,data) : m__10706__auto____$1.call(null,this$,app_db,form_props,data));
} else {
throw cljs.core.missing_protocol("IForm.on-submit-success",this$);
}
}
}
});

/**
 * This function will be called if the `update-data` function throws or rejects the returned promise. It should return a new form data state.
 */
keechma.toolbox.forms.core.on_update_error = (function keechma$toolbox$forms$core$on_update_error(this$,app_db,form_props,data,error){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$on_update_error$arity$5 == null)))){
return this$.keechma$toolbox$forms$core$IForm$on_update_error$arity$5(this$,app_db,form_props,data,error);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.on_update_error[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$5(this$,app_db,form_props,data,error) : m__10706__auto__.call(null,this$,app_db,form_props,data,error));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.on_update_error["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,app_db,form_props,data,error) : m__10706__auto____$1.call(null,this$,app_db,form_props,data,error));
} else {
throw cljs.core.missing_protocol("IForm.on-update-error",this$);
}
}
}
});

/**
 * This function will be called if the `update-data` function returns a value or resolves a returned promise. It should return a new form data state.
 */
keechma.toolbox.forms.core.on_update_success = (function keechma$toolbox$forms$core$on_update_success(this$,app_db,form_props,data,new_data){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$on_update_success$arity$5 == null)))){
return this$.keechma$toolbox$forms$core$IForm$on_update_success$arity$5(this$,app_db,form_props,data,new_data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.on_update_success[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$5(this$,app_db,form_props,data,new_data) : m__10706__auto__.call(null,this$,app_db,form_props,data,new_data));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.on_update_success["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,app_db,form_props,data,new_data) : m__10706__auto____$1.call(null,this$,app_db,form_props,data,new_data));
} else {
throw cljs.core.missing_protocol("IForm.on-update-success",this$);
}
}
}
});

keechma.toolbox.forms.core.validate = (function keechma$toolbox$forms$core$validate(this$,data){
if((!((this$ == null))) && (!((this$.keechma$toolbox$forms$core$IForm$validate$arity$2 == null)))){
return this$.keechma$toolbox$forms$core$IForm$validate$arity$2(this$,data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (keechma.toolbox.forms.core.validate[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__10706__auto__.call(null,this$,data));
} else {
var m__10706__auto____$1 = (keechma.toolbox.forms.core.validate["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,data) : m__10706__auto____$1.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("IForm.validate",this$);
}
}
}
});

(keechma.toolbox.forms.core.IForm["_"] = true);

(keechma.toolbox.forms.core.get_data["_"] = (function (_,___$1,___$2){
return cljs.core.PersistentArrayMap.EMPTY;
}));

(keechma.toolbox.forms.core.submit_data["_"] = (function (_,___$1,___$2,data){
return data;
}));

(keechma.toolbox.forms.core.update_data["_"] = (function (_,___$1,___$2,data){
return data;
}));

(keechma.toolbox.forms.core.process_in["_"] = (function (_,___$1,___$2,data){
return data;
}));

(keechma.toolbox.forms.core.process_out["_"] = (function (_,___$1,___$2,data){
return data;
}));

(keechma.toolbox.forms.core.process_attr_with["_"] = (function (_,___$1){
return null;
}));

(keechma.toolbox.forms.core.format_attr_with["_"] = (function (_,___$1){
return null;
}));

(keechma.toolbox.forms.core.on_submit_error["_"] = (function (_,___$1,___$2,___$3,___$4){
return null;
}));

(keechma.toolbox.forms.core.on_submit_success["_"] = (function (_,___$1,___$2,___$3){
return null;
}));

(keechma.toolbox.forms.core.on_update_error["_"] = (function (_,___$1,___$2,data,___$3){
return data;
}));

(keechma.toolbox.forms.core.on_update_success["_"] = (function (_,___$1,___$2,data,new_data){
return new_data;
}));

(keechma.toolbox.forms.core.validate["_"] = (function (this$,data){
var validator = cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(validator)){
return (validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(data) : validator.call(null,data));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
