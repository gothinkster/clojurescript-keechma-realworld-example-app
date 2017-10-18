// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
realworld.util.format_date = (function realworld$util$format_date(var_args){
var G__22489 = arguments.length;
switch (G__22489) {
case 1:
return realworld.util.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return realworld.util.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

realworld.util.format_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return realworld.util.format_date.cljs$core$IFn$_invoke$arity$2(date,"MMMM D, YYYY");
});

realworld.util.format_date.cljs$core$IFn$_invoke$arity$2 = (function (date,format){
return moment(date).format(format);
});

realworld.util.format_date.cljs$lang$maxFixedArity = 2;

realworld.util.render_markdown = (function realworld$util$render_markdown(markdown){
var G__22491 = (function (){var or__11514__auto__ = markdown;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})();
return marked(G__22491);
});
