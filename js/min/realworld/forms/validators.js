// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.forms.validators');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
realworld.forms.validators.email_regex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
realworld.forms.validators.url_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;
realworld.forms.validators.zero_count_QMARK_ = (function realworld$forms$validators$zero_count_QMARK_(v){
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$ICounted$)))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,v):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,v))){
return (cljs.core.count(v) === (0));
} else {
return false;
}
});
realworld.forms.validators.not_empty_QMARK_ = (function realworld$forms$validators$not_empty_QMARK_(v,_,___$1){
if((v == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)){
return false;
} else {
if(cljs.core.truth_(realworld.forms.validators.zero_count_QMARK_(v))){
return false;
} else {
return true;

}
}
}
});
realworld.forms.validators.url_QMARK_ = (function realworld$forms$validators$url_QMARK_(v,_,___$1){
if(((v == null)) || (cljs.core.empty_QMARK_(v))){
return true;
} else {
return !((cljs.core.re_matches(realworld.forms.validators.url_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
}
});
realworld.forms.validators.email_QMARK_ = (function realworld$forms$validators$email_QMARK_(v,_,___$1){
return !((cljs.core.re_matches(realworld.forms.validators.email_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
});
realworld.forms.validators.number0_GT_100_QMARK_ = (function realworld$forms$validators$number0_GT_100_QMARK_(v,_,___$1){
if(cljs.core.not(realworld.forms.validators.not_empty_QMARK_(v,null,null))){
return true;
} else {
var n = parseFloat(v,(10));
return (((0) < n)) && (((100) >= n));
}
});
realworld.forms.validators.bool_QMARK_ = (function realworld$forms$validators$bool_QMARK_(v,_,___$1){
if((v == null)){
return true;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v));
}
});
realworld.forms.validators.numeric_QMARK_ = (function realworld$forms$validators$numeric_QMARK_(v,_,___$1){
if((v == null)){
return true;
} else {
return cljs.core.re_matches(/^\d+$/,v);
}
});
realworld.forms.validators.ok_password_QMARK_ = (function realworld$forms$validators$ok_password_QMARK_(v,_,___$1){
if(cljs.core.seq(v)){
return ((7) < cljs.core.count(v));
} else {
return true;
}
});
realworld.forms.validators.types = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$not_DASH_empty,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Value can't be empty",cljs.core.cst$kw$validator,realworld.forms.validators.not_empty_QMARK_], null),cljs.core.cst$kw$bool,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Value must be true or false",cljs.core.cst$kw$validator,realworld.forms.validators.bool_QMARK_], null),cljs.core.cst$kw$url,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Value is not a valid URL",cljs.core.cst$kw$validator,realworld.forms.validators.url_QMARK_], null),cljs.core.cst$kw$email,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Value is not a valid email",cljs.core.cst$kw$validator,realworld.forms.validators.email_QMARK_], null),cljs.core.cst$kw$email_DASH_confirmation,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Email doesn't match email confirmation",cljs.core.cst$kw$validator,(function (_,data,___$1){
var email = cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(data);
var email_confirmation = cljs.core.cst$kw$email_DASH_confirmation.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [email,email_confirmation], null)))){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(email,email_confirmation);
}
})], null),cljs.core.cst$kw$ok_DASH_password,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Password must have at least 8 characters",cljs.core.cst$kw$validator,realworld.forms.validators.ok_password_QMARK_], null),cljs.core.cst$kw$numeric,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Value is not a number",cljs.core.cst$kw$validator,realworld.forms.validators.numeric_QMARK_], null)], null);
realworld.forms.validators.get_validator_message = (function realworld$forms$validators$get_validator_message(type){
var or__11514__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(realworld.forms.validators.types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.cst$kw$message], null));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "Value failed validation.";
}
});
/**
 * Helper function that extracts the validator definitions.
 */
realworld.forms.validators.to_validator = (function realworld$forms$validators$to_validator(validations,config){
return cljs.core.reduce_kv((function (m,attr,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,attr,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(validations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$validator], null))], null);
}),v));
}),cljs.core.PersistentArrayMap.EMPTY,config);
});
