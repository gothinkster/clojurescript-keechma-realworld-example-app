// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cuerdas.regexp');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.walk');
cuerdas.core.keyword_STAR_ = cljs.core.keyword;
/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
if(typeof s === 'string'){
return (cljs.core.count(s) === (0));
} else {
return null;
}
});
/**
 * Convenient helper for check emptines or if value is nil.
 */
cuerdas.core.empty_or_nil_QMARK_ = (function cuerdas$core$empty_or_nil_QMARK_(s){
var or__9992__auto__ = (s == null);
if(or__9992__auto__){
return or__9992__auto__;
} else {
return cuerdas.core.empty_QMARK_(s);
}
});
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.includes_QMARK_ = (function cuerdas$core$includes_QMARK_(s,subs){
if(typeof s === 'string'){
if((subs == null)){
return false;
} else {
return goog.string.contains(s,subs);
}
} else {
return null;
}
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var args21343 = [];
var len__11171__auto___21346 = arguments.length;
var i__11172__auto___21347 = (0);
while(true){
if((i__11172__auto___21347 < len__11171__auto___21346)){
args21343.push((arguments[i__11172__auto___21347]));

var G__21348 = (i__11172__auto___21347 + (1));
i__11172__auto___21347 = G__21348;
continue;
} else {
}
break;
}

var G__21345 = args21343.length;
switch (G__21345) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21343.length)].join('')));

}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if(typeof s === 'string'){
return s.slice(begin);
} else {
return null;
}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if(typeof s === 'string'){
return s.slice(begin,end);
} else {
return null;
}
});

cuerdas.core.slice.cljs$lang$maxFixedArity = 3;

/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
if(typeof s === 'string'){
if((prefix == null)){
return false;
} else {
if(cljs.core.truth_(cuerdas.core.empty_QMARK_(prefix))){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.lastIndexOf(prefix,(0)),(0));

}
}
} else {
return null;
}
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
if(typeof s === 'string'){
if((s == null)){
return false;
} else {
if(cljs.core.truth_(cuerdas.core.empty_QMARK_(suffix))){
return true;
} else {
var l = (cljs.core.count(s) - cljs.core.count(suffix));
return ((l >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.indexOf(suffix,l),l));

}
}
} else {
return null;
}
});
/**
 * Converts string to all lower-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-lower`
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if(typeof s === 'string'){
return s.toLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-upper`
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if(typeof s === 'string'){
return s.toUpperCase();
} else {
return null;
}
});
/**
 * Converts string to all lower-case respecting
 *   the current system locale.
 * 
 *   In the jvm you can provide a concrete locale to
 *   use as the second optional argument.
 */
cuerdas.core.locale_lower = (function cuerdas$core$locale_lower(s){
if(typeof s === 'string'){
return s.toLocaleLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case respecting
 *   the current system locale.
 * 
 *   In the jvm you can provide a concrete locale to
 *   use as the second optional argument.
 */
cuerdas.core.locale_upper = (function cuerdas$core$locale_upper(s){
if(typeof s === 'string'){
return s.toLocaleUpperCase();
} else {
return null;
}
});
/**
 * Compare strings in a case-insensitive manner.
 * 
 *   This function is locale independent.
 */
cuerdas.core.caseless_EQ_ = (function cuerdas$core$caseless_EQ_(s1,s2){
if(typeof s1 === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.lower(s1),cuerdas.core.lower(s2));
} else {
return null;
}
});
/**
 * Compare strings in a case-insensitive manner
 *   respecting the current locale.
 * 
 *   An optional locale can be passed as third
 *   argument (only on JVM).
 */
cuerdas.core.locale_caseless_EQ_ = (function cuerdas$core$locale_caseless_EQ_(s1,s2){
if(typeof s1 === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.locale_lower(s1),cuerdas.core.locale_lower(s2));
} else {
return null;
}
});
/**
 * Checks if a string is empty or contains only whitespace.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
if(typeof s === 'string'){
return ((cljs.core.count(s) === (0))) || (cljs.core.boolean$(cljs.core.re_matches(cuerdas.regexp.enhace(/^[\s\p{Z}]+$/),s)));
} else {
return null;
}
});
/**
 * Checks if a string contains only alpha characters.
 */
cuerdas.core.alpha_QMARK_ = (function cuerdas$core$alpha_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[a-zA-Z]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only digit characters.
 */
cuerdas.core.digits_QMARK_ = (function cuerdas$core$digits_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[0-9]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only alphanumeric characters.
 */
cuerdas.core.alnum_QMARK_ = (function cuerdas$core$alnum_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[a-zA-Z0-9]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only the word characters.
 *   This function will use all the unicode range.
 */
cuerdas.core.word_QMARK_ = (function cuerdas$core$word_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(cuerdas.regexp.enhace(/^[\p{N}\p{L}_-]+$/),s));
} else {
return null;
}
});
/**
 * Checks if string contains only letters.
 *   This function will use all the unicode range.
 */
cuerdas.core.letters_QMARK_ = (function cuerdas$core$letters_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(cuerdas.regexp.enhace(/^\p{L}+$/),s));
} else {
return null;
}
});
/**
 * Check if a string contains only numeric values.
 */
cuerdas.core.numeric_QMARK_ = (function cuerdas$core$numeric_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/,s));
} else {
return null;
}
});
/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var args21350 = [];
var len__11171__auto___21353 = arguments.length;
var i__11172__auto___21354 = (0);
while(true){
if((i__11172__auto___21354 < len__11171__auto___21353)){
args21350.push((arguments[i__11172__auto___21354]));

var G__21355 = (i__11172__auto___21354 + (1));
i__11172__auto___21354 = G__21355;
continue;
} else {
}
break;
}

var G__21352 = args21350.length;
switch (G__21352) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21350.length)].join('')));

}
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2(s,"\n\t\f\r ");
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.regexp.escape(chs)),cljs.core.str("]")].join('');
var rxstr__$1 = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+|"),cljs.core.str(rxstr),cljs.core.str("+$")].join('');
var rx = cljs.core.re_pattern(rxstr__$1);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
});

cuerdas.core.trim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var args21357 = [];
var len__11171__auto___21360 = arguments.length;
var i__11172__auto___21361 = (0);
while(true){
if((i__11172__auto___21361 < len__11171__auto___21360)){
args21357.push((arguments[i__11172__auto___21361]));

var G__21362 = (i__11172__auto___21361 + (1));
i__11172__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var G__21359 = args21357.length;
switch (G__21359) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21357.length)].join('')));

}
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2(s,"\n\t\f\r ");
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.regexp.escape(chs)),cljs.core.str("]")].join('');
var rxstr__$1 = [cljs.core.str(rxstr),cljs.core.str("+$")].join('');
var rx = cljs.core.re_pattern(rxstr__$1);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
});

cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var args21364 = [];
var len__11171__auto___21367 = arguments.length;
var i__11172__auto___21368 = (0);
while(true){
if((i__11172__auto___21368 < len__11171__auto___21367)){
args21364.push((arguments[i__11172__auto___21368]));

var G__21369 = (i__11172__auto___21368 + (1));
i__11172__auto___21368 = G__21369;
continue;
} else {
}
break;
}

var G__21366 = args21364.length;
switch (G__21366) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21364.length)].join('')));

}
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2(s,"\b\t\f\r ");
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str("["),cljs.core.str(cuerdas.regexp.escape(chs)),cljs.core.str("]")].join('');
var rxstr__$1 = [cljs.core.str("^"),cljs.core.str(rxstr),cljs.core.str("+")].join('');
var rx = cljs.core.re_pattern(rxstr__$1);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
});

cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2;

/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
var G__21374 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(s);
var G__21375 = cuerdas.regexp.enhace(/[\s\p{Z}]+/);
var G__21376 = " ";
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(G__21374,G__21375,G__21376) : cuerdas.core.replace.call(null,G__21374,G__21375,G__21376));
});
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_(s,prefix))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,cljs.core.count(prefix),cljs.core.count(s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,prefix){
if(cljs.core.truth_(cuerdas.core.ends_with_QMARK_(s,prefix))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - cljs.core.count(prefix)));
} else {
return s;
}
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var args21377 = [];
var len__11171__auto___21380 = arguments.length;
var i__11172__auto___21381 = (0);
while(true){
if((i__11172__auto___21381 < len__11171__auto___21380)){
args21377.push((arguments[i__11172__auto___21381]));

var G__21382 = (i__11172__auto___21381 + (1));
i__11172__auto___21381 = G__21382;
continue;
} else {
}
break;
}

var G__21379 = args21377.length;
switch (G__21379) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21377.length)].join('')));

}
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(s,(1));
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if(typeof s === 'string'){
return goog.string.repeat(s,n);
} else {
return null;
}
});

cuerdas.core.repeat.cljs$lang$maxFixedArity = 2;

cuerdas.core.replace_all = (function cuerdas$core$replace_all(s,re,replacement){
var flags = re.flags;
var flags__$1 = (cljs.core.truth_(cuerdas.core.includes_QMARK_(flags,"g"))?flags:[cljs.core.str(flags),cljs.core.str("g")].join(''));
var rx = (new RegExp(re.source,flags__$1));
return s.replace(rx,replacement);
});
cuerdas.core.replace_STAR_ = (function cuerdas$core$replace_STAR_(s,match,replacement){
if(typeof match === 'string'){
return clojure.string.replace(s,match,replacement);
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_(match))){
if(typeof replacement === 'string'){
return cuerdas.core.replace_all(s,match,replacement);
} else {
return cuerdas.core.replace_all(s,match,clojure.string.replace_with(replacement));
}
} else {
return null;
}
}
});
/**
 * Replaces all instance of match with replacement in s.
 * 
 *   The replacement is literal (i.e. none of its characters are treated
 *   specially) for all cases above except pattern / string.
 * 
 *   In match is pattern instance, replacement can contain $1, $2, etc.
 *   will be substituted with string that matcher the corresponding
 *   parenthesized group in pattern.
 * 
 *   If you wish your replacement string to be used literary,
 *   use `(cuerdas.regexp/escape replacement)`.
 * 
 *   Example:
 *  (replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 *  ;; => "lmostAay igPay atinLay"
 *   
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if(typeof s === 'string'){
return cuerdas.core.replace_STAR_(s,match,replacement);
} else {
return null;
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if(typeof s === 'string'){
return clojure.string.replace_first(s,match,replacement);
} else {
return null;
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var args21384 = [];
var len__11171__auto___21387 = arguments.length;
var i__11172__auto___21388 = (0);
while(true){
if((i__11172__auto___21388 < len__11171__auto___21387)){
args21384.push((arguments[i__11172__auto___21388]));

var G__21389 = (i__11172__auto___21388 + (1));
i__11172__auto___21388 = G__21389;
continue;
} else {
}
break;
}

var G__21386 = args21384.length;
switch (G__21386) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21384.length)].join('')));

}
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3(s,num,"...");
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count(s) <= num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.upper(c),cuerdas.core.lower(c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),(num + (1))),/.(?=\W*\w*$)/,tmpl);
var tmp = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(template,(cljs.core.count(template) - (2)));
var template__$1 = (cljs.core.truth_(tmp.match(/\w\w/))?cuerdas.core.replace_first(template,/\s*\S+$/,""):cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(template,(0),(cljs.core.count(template) - (1)))));
if((cljs.core.count([cljs.core.str(template__$1),cljs.core.str(subs)].join('')) > cljs.core.count(s))){
return s;
} else {
return [cljs.core.str(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),cljs.core.count(template__$1))),cljs.core.str(subs)].join('');
}
}
});

cuerdas.core.prune.cljs$lang$maxFixedArity = 3;

/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace(s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string
 *   or Pattern (clj) / RegExp (cljs) instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var args21391 = [];
var len__11171__auto___21394 = arguments.length;
var i__11172__auto___21395 = (0);
while(true){
if((i__11172__auto___21395 < len__11171__auto___21394)){
args21391.push((arguments[i__11172__auto___21395]));

var G__21396 = (i__11172__auto___21395 + (1));
i__11172__auto___21395 = G__21396;
continue;
} else {
}
break;
}

var G__21393 = args21391.length;
switch (G__21393) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21391.length)].join('')));

}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
if((s == null)){
return s;
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_(sep))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,sep);
} else {
if(typeof sep === 'string'){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sep,sep], null));

}
}
}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_(sep))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,sep,num);
} else {
if(typeof sep === 'string'){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep)),num);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sep,sep], null));

}
}
}
});

cuerdas.core.split.cljs$lang$maxFixedArity = 3;

/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if(typeof s === 'string'){
return clojure.string.reverse(s);
} else {
return null;
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if(typeof s === 'string'){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(s.split(""));
} else {
return null;
}
});
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if(cljs.core.sequential_QMARK_(s)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",s);
} else {
return null;
}
});
/**
 * Returns a vector of the words in the string.
 */
cuerdas.core.words = (function cuerdas$core$words(var_args){
var args21398 = [];
var len__11171__auto___21401 = arguments.length;
var i__11172__auto___21402 = (0);
while(true){
if((i__11172__auto___21402 < len__11171__auto___21401)){
args21398.push((arguments[i__11172__auto___21402]));

var G__21403 = (i__11172__auto___21402 + (1));
i__11172__auto___21402 = G__21403;
continue;
} else {
}
break;
}

var G__21400 = args21398.length;
switch (G__21400) {
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21398.length)].join('')));

}
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2(s,cuerdas.regexp.enhace(/[\p{N}\p{L}_-]+/));
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
if(typeof s === 'string'){
return cljs.core.vec(cljs.core.re_seq(re,s));
} else {
return null;
}
});

cuerdas.core.words.cljs$lang$maxFixedArity = 2;

cuerdas.core.interpolate_format = (function cuerdas$core$interpolate_format(s,params){
var on_match = (function cuerdas$core$interpolate_format_$_on_match(match){
var val = cljs.reader.read_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),(1)),"$"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,(1)):cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(match,(2),(-2))));
var val__$1 = (((val instanceof cljs.core.Symbol))?(cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1(val) : cuerdas.core.keyword_STAR_.call(null,val)):val);
return [cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,val__$1,""))].join('');
});
var $ = /(?:%\([\d\w\:\_\-]+\)s|\$[\w\d\:\_\-]+)/;
return cuerdas.core.replace(s,$,on_match);
});
cuerdas.core.indexed_format = (function cuerdas$core$indexed_format(s,params){
var params__$1 = cljs.core.clj__GT_js((function (){var or__9992__auto__ = params;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var rx = (new RegExp("%s","g"));
return cuerdas.core.replace(s,rx,((function (params__$1,rx){
return (function (_){
return [cljs.core.str((((cljs.core.count(params__$1) === (0)))?"%s":params__$1.shift()))].join('');
});})(params__$1,rx))
);
});
/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__11178__auto__ = [];
var len__11171__auto___21407 = arguments.length;
var i__11172__auto___21408 = (0);
while(true){
if((i__11172__auto___21408 < len__11171__auto___21407)){
args__11178__auto__.push((arguments[i__11172__auto___21408]));

var G__21409 = (i__11172__auto___21408 + (1));
i__11172__auto___21408 = G__21409;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((1) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((1)),(0),null)):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11179__auto__);
});

cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,more){
if(typeof s === 'string'){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(more),(1))) && (cljs.core.associative_QMARK_(cljs.core.first(more)))){
return cuerdas.core.interpolate_format(s,cljs.core.first(more));
} else {
return cuerdas.core.indexed_format(s,more);
}
} else {
return null;
}
});

cuerdas.core.format.cljs$lang$maxFixedArity = (1);

cuerdas.core.format.cljs$lang$applyTo = (function (seq21405){
var G__21406 = cljs.core.first(seq21405);
var seq21405__$1 = cljs.core.next(seq21405);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(G__21406,seq21405__$1);
});

/**
 * A shorter alias to `format` function.
 */
cuerdas.core.fmt = cuerdas.core.format;
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var args21410 = [];
var len__11171__auto___21413 = arguments.length;
var i__11172__auto___21414 = (0);
while(true){
if((i__11172__auto___21414 < len__11171__auto___21413)){
args21410.push((arguments[i__11172__auto___21414]));

var G__21415 = (i__11172__auto___21414 + (1));
i__11172__auto___21414 = G__21415;
continue;
} else {
}
break;
}

var G__21412 = args21410.length;
switch (G__21412) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21410.length)].join('')));

}
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,coll);
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,coll));
});

cuerdas.core.join.cljs$lang$maxFixedArity = 2;

/**
 * Surround a string with another string.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if(typeof s === 'string'){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
} else {
return null;
}
});
/**
 * Unsurround a string surrounded by another.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var length = cljs.core.count(surrounding);
var fstr = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),length);
var slength = cljs.core.count(s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,rightend,slength);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fstr,surrounding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lstr,surrounding))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var args21417 = [];
var len__11171__auto___21420 = arguments.length;
var i__11172__auto___21421 = (0);
while(true){
if((i__11172__auto___21421 < len__11171__auto___21420)){
args21417.push((arguments[i__11172__auto___21421]));

var G__21422 = (i__11172__auto___21421 + (1));
i__11172__auto___21421 = G__21422;
continue;
} else {
}
break;
}

var G__21419 = args21417.length;
switch (G__21419) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21417.length)].join('')));

}
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround(s,"\"");
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround(s,qchar);
});

cuerdas.core.quote.cljs$lang$maxFixedArity = 2;

/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var args21424 = [];
var len__11171__auto___21427 = arguments.length;
var i__11172__auto___21428 = (0);
while(true){
if((i__11172__auto___21428 < len__11171__auto___21427)){
args21424.push((arguments[i__11172__auto___21428]));

var G__21429 = (i__11172__auto___21428 + (1));
i__11172__auto___21428 = G__21429;
continue;
} else {
}
break;
}

var G__21426 = args21424.length;
switch (G__21426) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21424.length)].join('')));

}
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround(s,"\"");
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround(s,qchar);
});

cuerdas.core.unquote.cljs$lang$maxFixedArity = 2;

cuerdas.core.stylize_split = (function cuerdas$core$stylize_split(s){
var re1 = cuerdas.regexp.enhace(/(\p{Lu}+[\p{Ll}\u0027\p{Ps}\p{Pe}]*)/);
var re2 = cuerdas.regexp.enhace(/[^\p{L}\p{N}\u0027\p{Ps}\p{Pe}]+/);
var G__21432 = s;
var G__21432__$1 = (((G__21432 == null))?null:cljs.core.name(G__21432));
var G__21432__$2 = (((G__21432__$1 == null))?null:cuerdas.core.replace(G__21432__$1,re1,"-$1"));
var G__21432__$3 = (((G__21432__$2 == null))?null:cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(G__21432__$2,re2));
if((G__21432__$3 == null)){
return null;
} else {
return cljs.core.seq(G__21432__$3);
}
});
cuerdas.core.stylize_join = (function cuerdas$core$stylize_join(var_args){
var args21433 = [];
var len__11171__auto___21440 = arguments.length;
var i__11172__auto___21441 = (0);
while(true){
if((i__11172__auto___21441 < len__11171__auto___21440)){
args21433.push((arguments[i__11172__auto___21441]));

var G__21442 = (i__11172__auto___21441 + (1));
i__11172__auto___21441 = G__21442;
continue;
} else {
}
break;
}

var G__21435 = args21433.length;
switch (G__21435) {
case 3:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21433.length)].join('')));

}
});

cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3 = (function (coll,every_fn,join_with){
if(cljs.core.seq(coll)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(join_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(every_fn,coll));
} else {
return null;
}
});

cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4 = (function (p__21436,first_fn,rest_fn,join_with){
var vec__21437 = p__21436;
var seq__21438 = cljs.core.seq(vec__21437);
var first__21439 = cljs.core.first(seq__21438);
var seq__21438__$1 = cljs.core.next(seq__21438);
var fst = first__21439;
var rst = seq__21438__$1;
if(typeof fst === 'string'){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(join_with,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(fst) : first_fn.call(null,fst)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rst)));
} else {
return null;
}
});

cuerdas.core.stylize_join.cljs$lang$maxFixedArity = 4;

cuerdas.core.stylize = (function cuerdas$core$stylize(var_args){
var args21445 = [];
var len__11171__auto___21449 = arguments.length;
var i__11172__auto___21450 = (0);
while(true){
if((i__11172__auto___21450 < len__11171__auto___21449)){
args21445.push((arguments[i__11172__auto___21450]));

var G__21451 = (i__11172__auto___21450 + (1));
i__11172__auto___21450 = G__21451;
continue;
} else {
}
break;
}

var G__21447 = args21445.length;
switch (G__21447) {
case 3:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21445.length)].join('')));

}
});

cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3 = (function (s,every_fn,join_with){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,every_fn,every_fn,join_with);
});

cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4 = (function (s,first_fn,rest_fn,join_with){
var remove_empty = (function (p1__21444_SHARP_){
return cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.empty_QMARK_,p1__21444_SHARP_));
});
var G__21448 = cuerdas.core.stylize_split(s);
var G__21448__$1 = (((G__21448 == null))?null:remove_empty(G__21448));
if((G__21448__$1 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4(G__21448__$1,first_fn,rest_fn,join_with);
}
});

cuerdas.core.stylize.cljs$lang$maxFixedArity = 4;

/**
 * Uppercases the first character of a string or keyword
 */
cuerdas.core.capital = (function cuerdas$core$capital(s){
if(cljs.core.truth_((function (){var and__9980__auto__ = typeof s === 'string';
if(and__9980__auto__){
return cljs.core.not_empty(s);
} else {
return and__9980__auto__;
}
})())){
return [cljs.core.str(cuerdas.core.upper(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s)))].join('');
} else {
return null;
}
});
/**
 * Output will be: lowerUpperUpperNoSpaces
 *   accepts strings and keywords
 */
cuerdas.core.camel = (function cuerdas$core$camel(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,cuerdas.core.lower,cuerdas.core.capital,"");
});
/**
 * Output will be: lower_cased_and_underscore_separated
 *   accepts strings and keywords
 */
cuerdas.core.snake = (function cuerdas$core$snake(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.lower,"_");
});
/**
 * Output will be: Space separated with the first letter capitalized.
 *   accepts strings and keywords
 */
cuerdas.core.phrase = (function cuerdas$core$phrase(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,cuerdas.core.capital,cuerdas.core.lower," ");
});
/**
 * Output will be: lower cased and space separated
 *   accepts strings and keywords
 */
cuerdas.core.human = (function cuerdas$core$human(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.lower," ");
});
/**
 * Output will be: Each Word Capitalized And Separated With Spaces
 *   accepts strings and keywords
 */
cuerdas.core.title = (function cuerdas$core$title(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.capital," ");
});
/**
 * Output will be: CapitalizedAndTouchingTheNext
 *   accepts strings and keywords
 */
cuerdas.core.pascal = (function cuerdas$core$pascal(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.capital,"");
});
/**
 * Output will be: lower-cased-and-separated-with-dashes
 *   accepts strings and keywords
 */
cuerdas.core.kebab = (function cuerdas$core$kebab(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.lower,"-");
});
/**
 * Output will be either:
 *   (js-selector "-pascal-case-me") ;; => PascalCaseMe
 *   (js-selector "camel-case-me") ;; => camelCaseMe
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.js_selector = (function cuerdas$core$js_selector(s){
var G__21454 = cuerdas.core.stylize_split(s);
if((G__21454 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4(G__21454,cljs.core.identity,cuerdas.core.capital,"");
}
});
/**
 * Output will be either:
 *   (js-selector "LeadingDash") ;; => -leading-dash
 *   (js-selector "noLeadingDash") ;; => no-leading-dash
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.css_selector = (function cuerdas$core$css_selector(s){
var G__21456 = cuerdas.core.stylize_split(s);
if((G__21456 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3(G__21456,cuerdas.core.lower,"-");
}
});
cuerdas.core._PLUS_slug_tr_map_PLUS_ = cljs.core.zipmap("\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E","aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz");
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slug = (function cuerdas$core$slug(s){
var G__21458 = cuerdas.core.lower(s);
var G__21458__$1 = (((G__21458 == null))?null:clojure.string.escape(G__21458,cuerdas.core._PLUS_slug_tr_map_PLUS_));
var G__21458__$2 = (((G__21458__$1 == null))?null:cuerdas.core.replace(G__21458__$1,/[^\w\s]+/,""));
if((G__21458__$2 == null)){
return null;
} else {
return cuerdas.core.replace(G__21458__$2,/\s+/,"-");
}
});
/**
 * Unicode friendly version of `slug` function.
 */
cuerdas.core.uslug = (function cuerdas$core$uslug(s){
var G__21460 = cuerdas.core.lower(s);
var G__21460__$1 = (((G__21460 == null))?null:cuerdas.core.replace(G__21460,cuerdas.regexp.enhace(/[^\p{L}\p{N}]+/)," "));
if((G__21460__$1 == null)){
return null;
} else {
return cuerdas.core.replace(G__21460__$1,cuerdas.regexp.enhace(/[\p{Z}\s]+/),"-");
}
});
/**
 * Safer version of clojure keyword, accepting a
 *   symbol for the namespace and kebab-casing the key
 */
cuerdas.core.keyword = (function cuerdas$core$keyword(var_args){
var args21461 = [];
var len__11171__auto___21467 = arguments.length;
var i__11172__auto___21468 = (0);
while(true){
if((i__11172__auto___21468 < len__11171__auto___21467)){
args21461.push((arguments[i__11172__auto___21468]));

var G__21469 = (i__11172__auto___21468 + (1));
i__11172__auto___21468 = G__21469;
continue;
} else {
}
break;
}

var G__21463 = args21461.length;
switch (G__21463) {
case 1:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21461.length)].join('')));

}
});

cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1 = (function (k){
var G__21464 = cuerdas.core.kebab(k);
return (cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1(G__21464) : cuerdas.core.keyword_STAR_.call(null,G__21464));
});

cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2 = (function (n,k){
var G__21465 = [cljs.core.str(n)].join('');
var G__21466 = cuerdas.core.kebab(k);
return (cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$2(G__21465,G__21466) : cuerdas.core.keyword_STAR_.call(null,G__21465,G__21466));
});

cuerdas.core.keyword.cljs$lang$maxFixedArity = 2;

/**
 * General purpose function for parse number like
 *   string to number. It works with both integers
 *   and floats.
 */
cuerdas.core.parse_number = (function cuerdas$core$parse_number(s){
if((s == null)){
return NaN;
} else {
if(cljs.core.truth_(cuerdas.core.numeric_QMARK_(s))){
return cljs.reader.read_string(s);
} else {
return NaN;
}
}
});
/**
 * Return the double value from string.
 */
cuerdas.core.parse_double = (function cuerdas$core$parse_double(s){
return parseFloat(s);
});
/**
 * Return the number value in integer form.
 */
cuerdas.core.parse_int = (function cuerdas$core$parse_int(s){
if(cljs.core.truth_((function (){var and__9980__auto__ = typeof s === 'string';
if(and__9980__auto__){
return cljs.core.re_matches(/-?\d+(\.\d+)?/,s);
} else {
return and__9980__auto__;
}
})())){
return parseInt(s,(10));
} else {
return NaN;
}
});
/**
 * Returns true if s can be found in coll.
 */
cuerdas.core.one_of_QMARK_ = (function cuerdas$core$one_of_QMARK_(coll,s){
return cljs.core.boolean$(cljs.core.some((function (p1__21471_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21471_SHARP_,s);
}),coll));
});
/**
 * Returns true for 1/on/true/yes string values (case-insensitive),
 *   false otherwise.
 */
cuerdas.core.to_bool = (function cuerdas$core$to_bool(s){
return cuerdas.core.one_of_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","on","true","yes"], null),cuerdas.core.lower(s));
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var args__11178__auto__ = [];
var len__11171__auto___21491 = arguments.length;
var i__11172__auto___21492 = (0);
while(true){
if((i__11172__auto___21492 < len__11171__auto___21491)){
args__11178__auto__.push((arguments[i__11172__auto___21492]));

var G__21493 = (i__11172__auto___21492 + (1));
i__11172__auto___21492 = G__21493;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((1) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((1)),(0),null)):null);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11179__auto__);
});

cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21474){
var vec__21475 = p__21474;
var map__21478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21475,(0),null);
var map__21478__$1 = ((((!((map__21478 == null)))?((((map__21478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21478):map__21478);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21478__$1,cljs.core.cst$kw$length,(0));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21478__$1,cljs.core.cst$kw$padding," ");
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21478__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$left);
if(typeof s === 'string'){
var padding__$1 = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(padding,(0),(1));
var padlen = (length - cljs.core.count(s));
var pred__21480 = cljs.core._EQ_;
var expr__21481 = type;
if(cljs.core.truth_((function (){var G__21483 = cljs.core.cst$kw$right;
var G__21484 = expr__21481;
return (pred__21480.cljs$core$IFn$_invoke$arity$2 ? pred__21480.cljs$core$IFn$_invoke$arity$2(G__21483,G__21484) : pred__21480.call(null,G__21483,G__21484));
})())){
return [cljs.core.str(s),cljs.core.str(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_((function (){var G__21485 = cljs.core.cst$kw$both;
var G__21486 = expr__21481;
return (pred__21480.cljs$core$IFn$_invoke$arity$2 ? pred__21480.cljs$core$IFn$_invoke$arity$2(G__21485,G__21486) : pred__21480.call(null,G__21485,G__21486));
})())){
var first = cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,(function (){var G__21487 = (padlen / (2));
return Math.ceil(G__21487);
})());
var second = cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,(function (){var G__21488 = (padlen / (2));
return Math.floor(G__21488);
})());
return [cljs.core.str(first),cljs.core.str(s),cljs.core.str(second)].join('');
} else {
if(cljs.core.truth_((function (){var G__21489 = cljs.core.cst$kw$left;
var G__21490 = expr__21481;
return (pred__21480.cljs$core$IFn$_invoke$arity$2 ? pred__21480.cljs$core$IFn$_invoke$arity$2(G__21489,G__21490) : pred__21480.call(null,G__21489,G__21490));
})())){
return [cljs.core.str(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,padlen)),cljs.core.str(s)].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21481)].join('')));
}
}
}
} else {
return null;
}
});

cuerdas.core.pad.cljs$lang$maxFixedArity = (1);

cuerdas.core.pad.cljs$lang$applyTo = (function (seq21472){
var G__21473 = cljs.core.first(seq21472);
var seq21472__$1 = cljs.core.next(seq21472);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic(G__21473,seq21472__$1);
});

/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__21495 = s;
var G__21495__$1 = (((G__21495 == null))?null:cuerdas.core.replace(G__21495,cuerdas.regexp.enhace(/[\p{Z}\s]+/)," "));
if((G__21495__$1 == null)){
return null;
} else {
return cuerdas.core.replace(G__21495__$1,/^\s+|\s+$/,"");
}
});
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

if(cljs.core.truth_(s)){
return cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
} else {
return null;
}
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
if(cljs.core.truth_(s)){
return cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(s,"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\"");
} else {
return null;
}
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cuerdas.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.fromArray([(kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tags) : kwdize.call(null,tags))],true):((cljs.core.sequential_QMARK_(tags))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(kwdize,tags)):null)));
var rx = cljs.core.re_pattern("<\\/?([^<>]*)>");
return cuerdas.core.replace(s,rx,(((tags__$1 == null))?((function (kwdize,tags__$1,rx){
return (function (p__21504){
var vec__21505 = p__21504;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21505,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21505,(1),null);
var tag__$1 = (kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tag) : kwdize.call(null,tag));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mappings,tag__$1,"");
});})(kwdize,tags__$1,rx))
:((function (kwdize,tags__$1,rx){
return (function (p__21508){
var vec__21509 = p__21508;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21509,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21509,(1),null);
var tag__$1 = (kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tag) : kwdize.call(null,tag));
if(cljs.core.truth_((tags__$1.cljs$core$IFn$_invoke$arity$1 ? tags__$1.cljs$core$IFn$_invoke$arity$1(tag__$1) : tags__$1.call(null,tag__$1)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mappings,tag__$1,"");
} else {
return match;
}
});})(kwdize,tags__$1,rx))
));
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var args21512 = [];
var len__11171__auto___21515 = arguments.length;
var i__11172__auto___21516 = (0);
while(true){
if((i__11172__auto___21516 < len__11171__auto___21515)){
args21512.push((arguments[i__11172__auto___21516]));

var G__21517 = (i__11172__auto___21516 + (1));
i__11172__auto___21516 = G__21517;
continue;
} else {
}
break;
}

var G__21514 = args21512.length;
switch (G__21514) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21512.length)].join('')));

}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl(s,null,cljs.core.PersistentArrayMap.EMPTY);
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_(tags)){
return cuerdas.core.strip_tags_impl(s,null,tags);
} else {
return cuerdas.core.strip_tags_impl(s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl(s,tags,mapping);
});

cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3;

/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if((s == null)){
return null;
} else {
if((prefix == null)){
return null;
} else {
if((suffix == null)){
return null;
} else {
if(cljs.core.not(cuerdas.core.includes_QMARK_(s,prefix))){
return null;
} else {
if(cljs.core.not(cuerdas.core.includes_QMARK_(s,suffix))){
return null;
} else {
var G__21520 = s;
var G__21520__$1 = (((G__21520 == null))?null:cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(G__21520,prefix));
var G__21520__$2 = (((G__21520__$1 == null))?null:cljs.core.second(G__21520__$1));
var G__21520__$3 = (((G__21520__$2 == null))?null:cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(G__21520__$2,suffix));
if((G__21520__$3 == null)){
return null;
} else {
return cljs.core.first(G__21520__$3);
}

}
}
}
}
}
});
/**
 * Unindent multiline text.
 *   Uses either a supplied regex or the shortest
 *   beginning-of-line to non-whitespace distance
 */
cuerdas.core._LT__LT__ = (function cuerdas$core$_LT__LT__(var_args){
var args21523 = [];
var len__11171__auto___21526 = arguments.length;
var i__11172__auto___21527 = (0);
while(true){
if((i__11172__auto___21527 < len__11171__auto___21526)){
args21523.push((arguments[i__11172__auto___21527]));

var G__21528 = (i__11172__auto___21527 + (1));
i__11172__auto___21527 = G__21528;
continue;
} else {
}
break;
}

var G__21525 = args21523.length;
switch (G__21525) {
case 1:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21523.length)].join('')));

}
});

cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1 = (function (s){
var all_indents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21521_SHARP_){
return cljs.core.count(cljs.core.second(cljs.core.re_find(/^( +)/,p1__21521_SHARP_)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(cuerdas.core.lines(s))], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.blank_QMARK_,cljs.core.rest(cuerdas.core.lines(s)))));
var min_indent = cljs.core.re_pattern(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("^ {%s}",cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,all_indents)], 0)));
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2(min_indent,s);
});

cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2 = (function (r,s){
return cuerdas.core.unlines(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21522_SHARP_){
return cuerdas.core.replace(p1__21522_SHARP_,r,"");
}),cuerdas.core.lines(s)));
});

cuerdas.core._LT__LT__.cljs$lang$maxFixedArity = 2;

cuerdas.core.slugify = cuerdas.core.slug;
cuerdas.core.dasherize = cuerdas.core.kebab;
cuerdas.core.underscore = cuerdas.core.snake;
cuerdas.core.underscored = cuerdas.core.snake;
cuerdas.core.classify = cuerdas.core.pascal;
cuerdas.core.humanize = cuerdas.core.human;
cuerdas.core.titleize = cuerdas.core.title;
cuerdas.core.capitalize = cuerdas.core.capital;
cuerdas.core.alpha_numeric_QMARK_ = cuerdas.core.alnum_QMARK_;
cuerdas.core.parse_long = cuerdas.core.parse_int;
cuerdas.core.parse_float = cuerdas.core.parse_double;
cuerdas.core.contains_QMARK_ = cuerdas.core.includes_QMARK_;
cuerdas.core.startswith_QMARK_ = cuerdas.core.starts_with_QMARK_;
cuerdas.core.endswith_QMARK_ = cuerdas.core.ends_with_QMARK_;
