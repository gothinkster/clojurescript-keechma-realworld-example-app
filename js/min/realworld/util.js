// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.util');
goog.require('cljs.core');
realworld.util.format_date = (function realworld$util$format_date(var_args){
var args15912 = [];
var len__11171__auto___15915 = arguments.length;
var i__11172__auto___15916 = (0);
while(true){
if((i__11172__auto___15916 < len__11171__auto___15915)){
args15912.push((arguments[i__11172__auto___15916]));

var G__15917 = (i__11172__auto___15916 + (1));
i__11172__auto___15916 = G__15917;
continue;
} else {
}
break;
}

var G__15914 = args15912.length;
switch (G__15914) {
case 1:
return realworld.util.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return realworld.util.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15912.length)].join('')));

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
var G__15920 = (function (){var or__9992__auto__ = markdown;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "";
}
})();
return marked(G__15920);
});
