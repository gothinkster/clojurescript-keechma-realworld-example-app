// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.articles');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('realworld.util');
goog.require('keechma.toolbox.util');
goog.require('realworld.settings');
realworld.ui.components.articles.render_article = (function realworld$ui$components$articles$render_article(ctx,article){
var author = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(article).call(null);
var tag_list = cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(article).call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_meta,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"profile",cljs.core.cst$kw$subpage,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"profile",cljs.core.cst$kw$subpage,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null))], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date,realworld.util.format_date.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$createdAt.cljs$core$IFn$_invoke$arity$1(article))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component(ctx,cljs.core.cst$kw$favorite_DASH_button),article], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$preview_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"article",cljs.core.cst$kw$subpage,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(article)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(article)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Read more..."], null),((cljs.core.seq(tag_list))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$tag_DASH_list,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (author,tag_list){
return (function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$tag_DASH_default$tag_DASH_pill$tag_DASH_outline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(t)], null),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(t)], null);
});})(author,tag_list))
,tag_list))], null):null)], null)], null);
});
realworld.ui.components.articles.render_pagination = (function realworld$ui$components$articles$render_pagination(ctx){
var articles_meta = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$articles_DASH_meta);
var current_route = keechma.toolbox.ui.route_GT_(ctx);
var current_page = (function (){var G__20814 = (function (){var or__9992__auto__ = cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(current_route);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "1";
}
})();
var G__20815 = (10);
return parseInt(G__20814,G__20815);
})();
var page_count = Math.ceil((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(articles_meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,cljs.core.cst$kw$count], null)) / realworld.settings.articles_per_page));
if(((1) < page_count)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav_GT_ul$pagination,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (articles_meta,current_route,current_page,page_count){
return (function (p){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$page_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,p,cljs.core.cst$kw$class,keechma.toolbox.util.class_names(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,current_page)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$page_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_route,cljs.core.cst$kw$p,p))], null),p], null)], null);
});})(articles_meta,current_route,current_page,page_count))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(page_count + (1)))))], null);
} else {
return null;
}
});
realworld.ui.components.articles.render = (function realworld$ui$components$articles$render(ctx){
var articles = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$articles);
var articles_meta = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$articles_DASH_meta);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(articles_meta))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,"Loading Articles..."], null);
} else {
if((cljs.core.count(articles) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,"No articles are here... yet."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (articles,articles_meta){
return (function (a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.articles.render_article,ctx,a], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(a)], null));
});})(articles,articles_meta))
,articles)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.articles.render_pagination,ctx], null)], null);
}
}
});
realworld.ui.components.articles.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$renderer,realworld.ui.components.articles.render,cljs.core.cst$kw$component_DASH_deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$favorite_DASH_button], null),cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,cljs.core.cst$kw$articles_DASH_meta], null)], null));
