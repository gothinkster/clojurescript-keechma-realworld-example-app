// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('forms.util');
goog.require('forms.dirty');
/**
 * Calculates the error key paths from the error map. It is used to mark
 *   all invalid key paths as dirty
 */
forms.core.errors_keypaths = (function forms$core$errors_keypaths(var_args){
var args22160 = [];
var len__11171__auto___22165 = arguments.length;
var i__11172__auto___22166 = (0);
while(true){
if((i__11172__auto___22166 < len__11171__auto___22165)){
args22160.push((arguments[i__11172__auto___22166]));

var G__22167 = (i__11172__auto___22166 + (1));
i__11172__auto___22166 = G__22167;
continue;
} else {
}
break;
}

var G__22162 = args22160.length;
switch (G__22162) {
case 1:
return forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22160.length)].join('')));

}
});

forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1 = (function (data){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$3(data,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,cljs.core.PersistentVector.EMPTY], null))));
});

forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$3 = (function (data,path,results){
return cljs.core.reduce_kv((function (m,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$$errors$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$results,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(m),path));
} else {
if((cljs.core.vector_QMARK_(v)) || (cljs.core.map_QMARK_(v))){
var map__22163 = m;
var map__22163__$1 = ((((!((map__22163 == null)))?((((map__22163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22163):map__22163);
var results__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163__$1,cljs.core.cst$kw$results);
var lengths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163__$1,cljs.core.cst$kw$lengths);
var new_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var child_paths = forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$3(v,new_path,m);
var new_results = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(child_paths);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(results__$1,new_results)], null);
} else {
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$results,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(m),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k)));
}
}
}
}),results,data);
});

forms.core.errors_keypaths.cljs$lang$maxFixedArity = 3;


/**
 * IForm protocol defines the form behavior
 * @interface
 */
forms.core.IForm = function(){};

/**
 * Initializes the form. If the form constructor was called with the
 *   `auto-validate?` option set to `true` it will add a watch to the
 *   internal state atom and validate the form every time data was changed
 */
forms.core.init_BANG_ = (function forms$core$init_BANG_(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$init_BANG_$arity$1 == null)))){
return this$.forms$core$IForm$init_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.init_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.init_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.init!",this$);
}
}
}
});

/**
 * Returns inner state atom. The state map holds the following properties:
 *  
 *  - `:errors` - map of the current form errors
 *  - `:init-data` - initial form data that was passed to the constructor
 *  - `:data` - current form data
 *  - `:cached-dirty-key-paths` - set of the key paths that were dirty when
 *     the whole form was validated
 *  - `:dirty-key-paths` - set of the dirty key paths
 */
forms.core.state = (function forms$core$state(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$state$arity$1 == null)))){
return this$.forms$core$IForm$state$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.state[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.state["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.state",this$);
}
}
}
});

/**
 * Returns the atom that holds the current error map. This map holds all
 *   errors, regardless of the key path `dirty` state.
 */
forms.core.errors = (function forms$core$errors(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$errors$arity$1 == null)))){
return this$.forms$core$IForm$errors$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.errors[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.errors["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.errors",this$);
}
}
}
});

/**
 * Returns errors for the key path. It is possible that this function will
 *   return `nil` even though the errors exist in the `:errors` map because
 *   this function accounts for the key path `dirty` state. If the field has
 *   errors, but it's not dirty this function will return `nil`
 */
forms.core.errors_for_path = (function forms$core$errors_for_path(this$,key_path){
if((!((this$ == null))) && (!((this$.forms$core$IForm$errors_for_path$arity$2 == null)))){
return this$.forms$core$IForm$errors_for_path$arity$2(this$,key_path);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.errors_for_path[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,key_path) : m__10706__auto__.call(null,this$,key_path));
} else {
var m__10706__auto____$1 = (forms.core.errors_for_path["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key_path) : m__10706__auto____$1.call(null,this$,key_path));
} else {
throw cljs.core.missing_protocol("IForm.errors-for-path",this$);
}
}
}
});

/**
 * Returns the atom that holds the current data map.
 */
forms.core.data = (function forms$core$data(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$data$arity$1 == null)))){
return this$.forms$core$IForm$data$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.data[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.data["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.data",this$);
}
}
}
});

/**
 * Returns data for the key path
 */
forms.core.data_for_path = (function forms$core$data_for_path(this$,key_path){
if((!((this$ == null))) && (!((this$.forms$core$IForm$data_for_path$arity$2 == null)))){
return this$.forms$core$IForm$data_for_path$arity$2(this$,key_path);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.data_for_path[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,key_path) : m__10706__auto__.call(null,this$,key_path));
} else {
var m__10706__auto____$1 = (forms.core.data_for_path["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key_path) : m__10706__auto____$1.call(null,this$,key_path));
} else {
throw cljs.core.missing_protocol("IForm.data-for-path",this$);
}
}
}
});

/**
 * Validates the form.
 * 
 *  When called without the second argument - `(validate! form)` it will validate
 *  the whole form and mark all invalid fields as `dirty` This should happen on
 *  `submit` so you can show all form errors to the user.
 * 
 *  When called with `true` as the second argument - `(validate! form true)` it wil
 *  validate only the fields that are marked as dirty - fields that are not `nil` and
 *  that have a different value than in the `:init-data`. This can be called on `change`
 *  or `blur` events.
 */
forms.core.validate_BANG_ = (function forms$core$validate_BANG_(var_args){
var args22169 = [];
var len__11171__auto___22175 = arguments.length;
var i__11172__auto___22176 = (0);
while(true){
if((i__11172__auto___22176 < len__11171__auto___22175)){
args22169.push((arguments[i__11172__auto___22176]));

var G__22177 = (i__11172__auto___22176 + (1));
i__11172__auto___22176 = G__22177;
continue;
} else {
}
break;
}

var G__22171 = args22169.length;
switch (G__22171) {
case 1:
return forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22169.length)].join('')));

}
});

forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$validate_BANG_$arity$1 == null)))){
return this$.forms$core$IForm$validate_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.validate_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.validate_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.validate!",this$);
}
}
}
});

forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,dirty_only_QMARK_){
if((!((this$ == null))) && (!((this$.forms$core$IForm$validate_BANG_$arity$2 == null)))){
return this$.forms$core$IForm$validate_BANG_$arity$2(this$,dirty_only_QMARK_);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.validate_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,dirty_only_QMARK_) : m__10706__auto__.call(null,this$,dirty_only_QMARK_));
} else {
var m__10706__auto____$1 = (forms.core.validate_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,dirty_only_QMARK_) : m__10706__auto____$1.call(null,this$,dirty_only_QMARK_));
} else {
throw cljs.core.missing_protocol("IForm.validate!",this$);
}
}
}
});

forms.core.validate_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Commits the form. It will validate the form and mark dirty key paths. After that
 *   it will call the `:on-commit` function that can be used to persist the form.
 */
forms.core.commit_BANG_ = (function forms$core$commit_BANG_(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$commit_BANG_$arity$1 == null)))){
return this$.forms$core$IForm$commit_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.commit_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.commit_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.commit!",this$);
}
}
}
});

/**
 * Updates the data, marks dirty key paths and validates the form
 */
forms.core.update_BANG_ = (function forms$core$update_BANG_(this$,data){
if((!((this$ == null))) && (!((this$.forms$core$IForm$update_BANG_$arity$2 == null)))){
return this$.forms$core$IForm$update_BANG_$arity$2(this$,data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.update_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__10706__auto__.call(null,this$,data));
} else {
var m__10706__auto____$1 = (forms.core.update_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,data) : m__10706__auto____$1.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("IForm.update!",this$);
}
}
}
});

/**
 * Mark all invalid key paths as dirty. It will validate the whole form and
 *   cache any key paths that have errors.
 */
forms.core.mark_dirty_BANG_ = (function forms$core$mark_dirty_BANG_(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$mark_dirty_BANG_$arity$1 == null)))){
return this$.forms$core$IForm$mark_dirty_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.mark_dirty_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.mark_dirty_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.mark-dirty!",this$);
}
}
}
});

/**
 * Creates a diff between the initial data and the current data. Based on that diff
 *   it marks the key paths that are dirty.
 */
forms.core.mark_dirty_paths_BANG_ = (function forms$core$mark_dirty_paths_BANG_(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$mark_dirty_paths_BANG_$arity$1 == null)))){
return this$.forms$core$IForm$mark_dirty_paths_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.mark_dirty_paths_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.mark_dirty_paths_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.mark-dirty-paths!",this$);
}
}
}
});

/**
 * Clear dirty key paths that are cached after caling the `mark-dirty!` function
 */
forms.core.clear_cached_dirty_key_paths_BANG_ = (function forms$core$clear_cached_dirty_key_paths_BANG_(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$clear_cached_dirty_key_paths_BANG_$arity$1 == null)))){
return this$.forms$core$IForm$clear_cached_dirty_key_paths_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.clear_cached_dirty_key_paths_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.clear_cached_dirty_key_paths_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.clear-cached-dirty-key-paths!",this$);
}
}
}
});

/**
 * Is the form in the valid state
 */
forms.core.is_valid_QMARK_ = (function forms$core$is_valid_QMARK_(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$is_valid_QMARK_$arity$1 == null)))){
return this$.forms$core$IForm$is_valid_QMARK_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.is_valid_QMARK_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.is_valid_QMARK_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.is-valid?",this$);
}
}
}
});

/**
 * Is the key path in the valid state
 */
forms.core.is_valid_path_QMARK_ = (function forms$core$is_valid_path_QMARK_(this$,key_path){
if((!((this$ == null))) && (!((this$.forms$core$IForm$is_valid_path_QMARK_$arity$2 == null)))){
return this$.forms$core$IForm$is_valid_path_QMARK_$arity$2(this$,key_path);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.is_valid_path_QMARK_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,key_path) : m__10706__auto__.call(null,this$,key_path));
} else {
var m__10706__auto____$1 = (forms.core.is_valid_path_QMARK_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,key_path) : m__10706__auto____$1.call(null,this$,key_path));
} else {
throw cljs.core.missing_protocol("IForm.is-valid-path?",this$);
}
}
}
});

/**
 * Are the dirty key paths in the valid state
 */
forms.core.dirty_paths_valid_QMARK_ = (function forms$core$dirty_paths_valid_QMARK_(this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$dirty_paths_valid_QMARK_$arity$1 == null)))){
return this$.forms$core$IForm$dirty_paths_valid_QMARK_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.dirty_paths_valid_QMARK_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.dirty_paths_valid_QMARK_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.dirty-paths-valid?",this$);
}
}
}
});

/**
 * Reset form to the initial state
 */
forms.core.reset_form_BANG_ = (function forms$core$reset_form_BANG_(var_args){
var args22172 = [];
var len__11171__auto___22179 = arguments.length;
var i__11172__auto___22180 = (0);
while(true){
if((i__11172__auto___22180 < len__11171__auto___22179)){
args22172.push((arguments[i__11172__auto___22180]));

var G__22181 = (i__11172__auto___22180 + (1));
i__11172__auto___22180 = G__22181;
continue;
} else {
}
break;
}

var G__22174 = args22172.length;
switch (G__22174) {
case 1:
return forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22172.length)].join('')));

}
});

forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.forms$core$IForm$reset_form_BANG_$arity$1 == null)))){
return this$.forms$core$IForm$reset_form_BANG_$arity$1(this$);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.reset_form_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto__.call(null,this$));
} else {
var m__10706__auto____$1 = (forms.core.reset_form_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__10706__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.reset-form!",this$);
}
}
}
});

forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,init_data){
if((!((this$ == null))) && (!((this$.forms$core$IForm$reset_form_BANG_$arity$2 == null)))){
return this$.forms$core$IForm$reset_form_BANG_$arity$2(this$,init_data);
} else {
var x__10705__auto__ = (((this$ == null))?null:this$);
var m__10706__auto__ = (forms.core.reset_form_BANG_[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(this$,init_data) : m__10706__auto__.call(null,this$,init_data));
} else {
var m__10706__auto____$1 = (forms.core.reset_form_BANG_["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,init_data) : m__10706__auto____$1.call(null,this$,init_data));
} else {
throw cljs.core.missing_protocol("IForm.reset-form!",this$);
}
}
}
});

forms.core.reset_form_BANG_.cljs$lang$maxFixedArity = 2;



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {forms.core.IForm}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
forms.core.Form = (function (state_atom,validator,opts,__meta,__extmap,__hash){
this.state_atom = state_atom;
this.validator = validator;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
forms.core.Form.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

forms.core.Form.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k22184,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__22186 = (((k22184 instanceof cljs.core.Keyword))?k22184.fqn:null);
switch (G__22186) {
case "state-atom":
return self__.state_atom;

break;
case "validator":
return self__.validator;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22184,else__10665__auto__);

}
});

forms.core.Form.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#forms.core.Form{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_atom,self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$opts,self__.opts],null))], null),self__.__extmap));
});

forms.core.Form.prototype.cljs$core$IIterable$ = true;

forms.core.Form.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22183){
var self__ = this;
var G__22183__$1 = this;
return (new cljs.core.RecordIter((0),G__22183__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_atom,cljs.core.cst$kw$validator,cljs.core.cst$kw$opts], null),cljs.core._iterator(self__.__extmap)));
});

forms.core.Form.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

forms.core.Form.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});

forms.core.Form.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

forms.core.Form.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
var self__ = this;
var this__10657__auto____$1 = this;
var h__10429__auto__ = self__.__hash;
if(!((h__10429__auto__ == null))){
return h__10429__auto__;
} else {
var h__10429__auto____$1 = cljs.core.hash_imap(this__10657__auto____$1);
self__.__hash = h__10429__auto____$1;

return h__10429__auto____$1;
}
});

forms.core.Form.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
var self__ = this;
var this__10658__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9980__auto__ = other__10659__auto__;
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = (this__10658__auto____$1.constructor === other__10659__auto__.constructor);
if(and__9980__auto____$1){
return cljs.core.equiv_map(this__10658__auto____$1,other__10659__auto__);
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
}
})())){
return true;
} else {
return false;
}
});

forms.core.Form.prototype.forms$core$IForm$ = true;

forms.core.Form.prototype.forms$core$IForm$clear_cached_dirty_key_paths_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(forms.core.state(this$__$1),cljs.core.assoc,cljs.core.cst$kw$cached_DASH_dirty_DASH_key_DASH_paths,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY));
});

forms.core.Form.prototype.forms$core$IForm$data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.core.cursor(forms.core.state(this$__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data], null));
});

forms.core.Form.prototype.forms$core$IForm$errors$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.core.cursor(forms.core.state(this$__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null));
});

forms.core.Form.prototype.forms$core$IForm$validate_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,false);
});

forms.core.Form.prototype.forms$core$IForm$validate_BANG_$arity$2 = (function (this$,dirty_only_QMARK_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(dirty_only_QMARK_)){
forms.core.mark_dirty_paths_BANG_(this$__$1);
} else {
forms.core.mark_dirty_BANG_(this$__$1);
}

var validator__$1 = cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(forms.core.state(this$__$1),cljs.core.assoc,cljs.core.cst$kw$errors,(function (){var G__22187 = (function (){var G__22188 = forms.core.data(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22188) : cljs.core.deref.call(null,G__22188));
})();
return (validator__$1.cljs$core$IFn$_invoke$arity$1 ? validator__$1.cljs$core$IFn$_invoke$arity$1(G__22187) : validator__$1.call(null,G__22187));
})());
});

forms.core.Form.prototype.forms$core$IForm$init_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var auto_validate_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$opts,cljs.core.cst$kw$auto_DASH_validate_QMARK_], null));
cljs.core.remove_watch(forms.core.state(this$__$1),cljs.core.cst$kw$__form__);

if(cljs.core.truth_(auto_validate_QMARK_)){
cljs.core.add_watch(forms.core.state(this$__$1),cljs.core.cst$kw$__form__,((function (auto_validate_QMARK_,this$__$1){
return (function (_,___$1,old_val,new_val){
var old_data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(old_val);
var new_data = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(new_val);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_data,new_data)){
forms.core.mark_dirty_paths_BANG_(this$__$1);

return forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,true);
} else {
return null;
}
});})(auto_validate_QMARK_,this$__$1))
);
} else {
}

return this$__$1;
});

forms.core.Form.prototype.forms$core$IForm$dirty_paths_valid_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction(((function (this$__$1){
return (function (){
var current_state = (function (){var G__22189 = forms.core.state(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22189) : cljs.core.deref.call(null,G__22189));
})();
var current_errors = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(current_state);
var dirty_paths = cljs.core.cst$kw$dirty_DASH_key_DASH_paths.cljs$core$IFn$_invoke$arity$1(current_state);
var valid_paths = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (dirty_paths,current_state,current_errors,this$__$1){
return (function (path){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_errors,path) == null);
});})(dirty_paths,current_state,current_errors,this$__$1))
,dirty_paths);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(valid_paths),cljs.core.count(dirty_paths));
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$is_valid_path_QMARK_$arity$2 = (function (this$,key_path){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction(((function (this$__$1){
return (function (){
return ((function (){var G__22190 = forms.core.errors_for_path(this$__$1,key_path);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22190) : cljs.core.deref.call(null,G__22190));
})() == null);
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$mark_dirty_paths_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var current_state = (function (){var G__22191 = forms.core.state(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22191) : cljs.core.deref.call(null,G__22191));
})();
var dirty_paths = forms.dirty.calculate_dirty_fields(cljs.core.cst$kw$init_DASH_data.cljs$core$IFn$_invoke$arity$1(current_state),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(current_state));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(forms.core.state(this$__$1),cljs.core.assoc,cljs.core.cst$kw$dirty_DASH_key_DASH_paths,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(dirty_paths,cljs.core.cst$kw$cached_DASH_dirty_DASH_key_DASH_paths.cljs$core$IFn$_invoke$arity$1(current_state))));
});

forms.core.Form.prototype.forms$core$IForm$commit_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var commit_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$opts,cljs.core.cst$kw$on_DASH_commit], null));
forms.core.mark_dirty_BANG_(this$__$1);

forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$1(this$__$1);

return (commit_fn.cljs$core$IFn$_invoke$arity$1 ? commit_fn.cljs$core$IFn$_invoke$arity$1(this$__$1) : commit_fn.call(null,this$__$1));
});

forms.core.Form.prototype.forms$core$IForm$mark_dirty_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var errors = (function (){var G__22192 = (function (){var G__22193 = forms.core.data(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22193) : cljs.core.deref.call(null,G__22193));
})();
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__22192) : self__.validator.call(null,G__22192));
})();
var errors_keypaths = forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1(errors);
var current_state = (function (){var G__22194 = forms.core.state(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22194) : cljs.core.deref.call(null,G__22194));
})();
var current_dirty_paths = cljs.core.cst$kw$dirty_DASH_key_DASH_paths.cljs$core$IFn$_invoke$arity$1(forms.core.state);
var G__22195 = forms.core.state(this$__$1);
var G__22196 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_state,cljs.core.cst$kw$cached_DASH_dirty_DASH_key_DASH_paths,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cached_DASH_dirty_DASH_key_DASH_paths.cljs$core$IFn$_invoke$arity$1(forms.core.state),errors_keypaths)),cljs.core.array_seq([cljs.core.cst$kw$dirty_DASH_key_DASH_paths,cljs.core.set(errors_keypaths)], 0));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22195,G__22196) : cljs.core.reset_BANG_.call(null,G__22195,G__22196));
});

forms.core.Form.prototype.forms$core$IForm$errors_for_path$arity$2 = (function (this$,key_path){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction(((function (this$__$1){
return (function (){
var path = forms.util.key_to_path(key_path);
var current_state = (function (){var G__22197 = forms.core.state(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22197) : cljs.core.deref.call(null,G__22197));
})();
var is_dirty_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$dirty_DASH_key_DASH_paths.cljs$core$IFn$_invoke$arity$1(current_state),path);
if(is_dirty_QMARK_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22198 = forms.core.errors(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22198) : cljs.core.deref.call(null,G__22198));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$$errors$));
} else {
return null;
}
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$data_for_path$arity$2 = (function (this$,key_path){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction(((function (this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22199 = forms.core.data(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22199) : cljs.core.deref.call(null,G__22199));
})(),forms.util.key_to_path(key_path));
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(this$__$1);
});

forms.core.Form.prototype.forms$core$IForm$reset_form_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.cst$kw$init_DASH_data.cljs$core$IFn$_invoke$arity$1((function (){var G__22200 = forms.core.state(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22200) : cljs.core.deref.call(null,G__22200));
})()));
});

forms.core.Form.prototype.forms$core$IForm$reset_form_BANG_$arity$2 = (function (this$,init_data){
var self__ = this;
var this$__$1 = this;
var G__22201 = forms.core.state(this$__$1);
var G__22202 = (forms.core.init_state.cljs$core$IFn$_invoke$arity$1 ? forms.core.init_state.cljs$core$IFn$_invoke$arity$1(init_data) : forms.core.init_state.call(null,init_data));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22201,G__22202) : cljs.core.reset_BANG_.call(null,G__22201,G__22202));
});

forms.core.Form.prototype.forms$core$IForm$is_valid_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction(((function (this$__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__22203 = forms.core.errors(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22203) : cljs.core.deref.call(null,G__22203));
})());
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$update_BANG_$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(forms.core.state(this$__$1),cljs.core.assoc,cljs.core.cst$kw$data,data);

forms.core.mark_dirty_paths_BANG_(this$__$1);

return forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,true);
});

forms.core.Form.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state_DASH_atom,null,cljs.core.cst$kw$validator,null,cljs.core.cst$kw$opts,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

forms.core.Form.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__22183){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__22204 = cljs.core.keyword_identical_QMARK_;
var expr__22205 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__22207 = cljs.core.cst$kw$state_DASH_atom;
var G__22208 = expr__22205;
return (pred__22204.cljs$core$IFn$_invoke$arity$2 ? pred__22204.cljs$core$IFn$_invoke$arity$2(G__22207,G__22208) : pred__22204.call(null,G__22207,G__22208));
})())){
return (new forms.core.Form(G__22183,self__.validator,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22209 = cljs.core.cst$kw$validator;
var G__22210 = expr__22205;
return (pred__22204.cljs$core$IFn$_invoke$arity$2 ? pred__22204.cljs$core$IFn$_invoke$arity$2(G__22209,G__22210) : pred__22204.call(null,G__22209,G__22210));
})())){
return (new forms.core.Form(self__.state_atom,G__22183,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22211 = cljs.core.cst$kw$opts;
var G__22212 = expr__22205;
return (pred__22204.cljs$core$IFn$_invoke$arity$2 ? pred__22204.cljs$core$IFn$_invoke$arity$2(G__22211,G__22212) : pred__22204.call(null,G__22211,G__22212));
})())){
return (new forms.core.Form(self__.state_atom,self__.validator,G__22183,self__.__meta,self__.__extmap,null));
} else {
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__22183),null));
}
}
}
});

forms.core.Form.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_DASH_atom,self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$validator,self__.validator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$opts,self__.opts],null))], null),self__.__extmap));
});

forms.core.Form.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__22183){
var self__ = this;
var this__10661__auto____$1 = this;
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,G__22183,self__.__extmap,self__.__hash));
});

forms.core.Form.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

forms.core.Form.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state_DASH_atom,cljs.core.cst$sym$validator,cljs.core.cst$sym$opts], null);
});

forms.core.Form.cljs$lang$type = true;

forms.core.Form.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"forms.core/Form");
});

forms.core.Form.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"forms.core/Form");
});

forms.core.__GT_Form = (function forms$core$__GT_Form(state_atom,validator,opts){
return (new forms.core.Form(state_atom,validator,opts,null,null,null));
});

forms.core.map__GT_Form = (function forms$core$map__GT_Form(G__22185){
return (new forms.core.Form(cljs.core.cst$kw$state_DASH_atom.cljs$core$IFn$_invoke$arity$1(G__22185),cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(G__22185),cljs.core.cst$kw$opts.cljs$core$IFn$_invoke$arity$1(G__22185),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22185,cljs.core.cst$kw$state_DASH_atom,cljs.core.array_seq([cljs.core.cst$kw$validator,cljs.core.cst$kw$opts], 0)),null));
});

forms.core.init_state = (function forms$core$init_state(data){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$init_DASH_data,data,cljs.core.cst$kw$data,(function (){var or__9992__auto__ = data;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$cached_DASH_dirty_DASH_key_DASH_paths,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$dirty_DASH_key_DASH_paths,cljs.core.set(cljs.core.PersistentArrayMap.EMPTY)], null);
});
forms.core.with_default_opts = (function forms$core$with_default_opts(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_commit,(function (_){
return null;
}),cljs.core.cst$kw$auto_DASH_validate_QMARK_,false], null),opts], 0));
});
/**
 * Form constructor. It accepts the following arguments:
 * 
 *   - `validator` - returned either by the `form.validator/validator` or `form.validator/comp-validators` function
 *   - `data` - initial data map
 *   - `opts` - map with the form options:
 *    + `:on-commit` - function to be called when the form is commited (by calling `(commit! form)`)
 *    + `:auto-validate?` - should the form be validated on any data change
 */
forms.core.constructor$ = (function forms$core$constructor(var_args){
var args22214 = [];
var len__11171__auto___22217 = arguments.length;
var i__11172__auto___22218 = (0);
while(true){
if((i__11172__auto___22218 < len__11171__auto___22217)){
args22214.push((arguments[i__11172__auto___22218]));

var G__22219 = (i__11172__auto___22218 + (1));
i__11172__auto___22218 = G__22219;
continue;
} else {
}
break;
}

var G__22216 = args22214.length;
switch (G__22216) {
case 1:
return forms.core.constructor$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return forms.core.constructor$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return forms.core.constructor$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22214.length)].join('')));

}
});

forms.core.constructor$.cljs$core$IFn$_invoke$arity$1 = (function (validator){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(forms.core.constructor$,validator);
});

forms.core.constructor$.cljs$core$IFn$_invoke$arity$2 = (function (validator,data){
return forms.core.constructor$.cljs$core$IFn$_invoke$arity$3(validator,data,cljs.core.PersistentArrayMap.EMPTY);
});

forms.core.constructor$.cljs$core$IFn$_invoke$arity$3 = (function (validator,data,opts){
return forms.core.init_BANG_(forms.core.__GT_Form(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(forms.core.init_state(data)),validator,forms.core.with_default_opts(opts)));
});

forms.core.constructor$.cljs$lang$maxFixedArity = 3;

