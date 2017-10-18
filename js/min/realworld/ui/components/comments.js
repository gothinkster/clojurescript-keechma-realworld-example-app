// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.ui.components.comments');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('realworld.util');
realworld.ui.components.comments.render_comment = (function realworld$ui$components$comments$render_comment(ctx,c){
var author = (function (){var fexpr__26146 = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(c);
return (fexpr__26146.cljs$core$IFn$_invoke$arity$0 ? fexpr__26146.cljs$core$IFn$_invoke$arity$0() : fexpr__26146.call(null));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block_GT_p$card_DASH_text,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"profile",cljs.core.cst$kw$subpage,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,keechma.ui_component.url(ctx,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,"profile",cljs.core.cst$kw$subpage,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null))], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date_DASH_posted,realworld.util.format_date.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$createdAt.cljs$core$IFn$_invoke$arity$1(c))], null)], null)], null);
});
realworld.ui.components.comments.render = (function realworld$ui$components$comments$render(ctx){
var comments = keechma.toolbox.ui.sub_GT_(ctx,cljs.core.cst$kw$current_DASH_article_DASH_comments);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (comments){
return (function (c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [realworld.ui.components.comments.render_comment,ctx,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c)], null));
});})(comments))
,comments))], null);
});
realworld.ui.components.comments.component = keechma.ui_component.constructor$(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$renderer,realworld.ui.components.comments.render,cljs.core.cst$kw$subscription_DASH_deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_article_DASH_comments], null)], null));
