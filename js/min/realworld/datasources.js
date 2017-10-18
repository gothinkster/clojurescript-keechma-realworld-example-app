// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.datasources');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.ajax');
goog.require('keechma.toolbox.dataloader.subscriptions');
goog.require('realworld.edb');
goog.require('hodgepodge.core');
goog.require('realworld.settings');
goog.require('realworld.api');
realworld.datasources.api_loader = keechma.toolbox.dataloader.subscriptions.map_loader((function (req){
var temp__5278__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5278__auto__)){
var params = temp__5278__auto__;
var app_db = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(req);
var get_from_app_db = (function (){var or__11514__auto__ = cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return ((function (or__11514__auto__,app_db,params,temp__5278__auto__){
return (function (_){
return null;
});
;})(or__11514__auto__,app_db,params,temp__5278__auto__))
}
})();
var or__11514__auto__ = (get_from_app_db.cljs$core$IFn$_invoke$arity$1 ? get_from_app_db.cljs$core$IFn$_invoke$arity$1(app_db) : get_from_app_db.call(null,app_db));
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return realworld.api.dataloader_req(params);
}
} else {
return null;
}
}));
realworld.datasources.add_articles_tag_param = (function realworld$datasources$add_articles_tag_param(params,p__24518){
var map__24519 = p__24518;
var map__24519__$1 = ((((!((map__24519 == null)))?((((map__24519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24519):map__24519);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24519__$1,cljs.core.cst$kw$subpage);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24519__$1,cljs.core.cst$kw$detail);
var tag = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",subpage))?detail:null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$tag,tag);
} else {
return params;
}
});
realworld.datasources.add_articles_pagination_param = (function realworld$datasources$add_articles_pagination_param(params,p__24521){
var map__24522 = p__24521;
var map__24522__$1 = ((((!((map__24522 == null)))?((((map__24522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24522):map__24522);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24522__$1,cljs.core.cst$kw$p);
if(cljs.core.truth_(p)){
var offset = ((parseInt(p,(10)) - (1)) * realworld.settings.articles_per_page);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$offset,offset);
} else {
return params;
}
});
realworld.datasources.add_articles_author_param = (function realworld$datasources$add_articles_author_param(params,p__24524){
var map__24525 = p__24524;
var map__24525__$1 = ((((!((map__24525 == null)))?((((map__24525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24525):map__24525);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24525__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24525__$1,cljs.core.cst$kw$subpage);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24525__$1,cljs.core.cst$kw$detail);
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("profile",page);
if(and__11502__auto__){
return subpage;
} else {
return and__11502__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("favorites",detail)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$favorited,subpage);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$author,subpage);
}
} else {
return params;
}
});
realworld.datasources.auth_header = (function realworld$datasources$auth_header(var_args){
var G__24528 = arguments.length;
switch (G__24528) {
case 1:
return realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1 = (function (jwt){
return realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,jwt);
});

realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$2 = (function (headers,jwt){
if(cljs.core.truth_(jwt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,cljs.core.cst$kw$authorization,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Token "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(jwt)].join(''));
} else {
return headers;
}
});

realworld.datasources.auth_header.cljs$lang$maxFixedArity = 2;

realworld.datasources.ignore_datasource_check = cljs.core.cst$kw$keechma$toolbox$dataloader$core_SLASH_ignore;
realworld.datasources.jwt_datasource = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$loader,keechma.toolbox.dataloader.subscriptions.map_loader((function (){
return hodgepodge.core.get_item.cljs$core$IFn$_invoke$arity$2(hodgepodge.core.local_storage,"conduit-jwt-token");
})),cljs.core.cst$kw$params,(function (prev,_,___$1){
if(cljs.core.truth_(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(prev))){
return realworld.datasources.ignore_datasource_check;
} else {
return null;
}
})], null);
realworld.datasources.current_user_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_named_DASH_item,cljs.core.cst$kw$user_SLASH_current], null),cljs.core.cst$kw$loader,realworld.datasources.api_loader,cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$processor,realworld.api.process_user,cljs.core.cst$kw$params,(function (prev,_,p__24530){
var map__24531 = p__24530;
var map__24531__$1 = ((((!((map__24531 == null)))?((((map__24531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24531):map__24531);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24531__$1,cljs.core.cst$kw$jwt);
if(cljs.core.truth_(jwt)){
if(cljs.core.truth_(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(prev))){
return realworld.datasources.ignore_datasource_check;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,"/user",cljs.core.cst$kw$headers,realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1(jwt)], null);
}
} else {
return null;
}
})], null);
realworld.datasources.articles_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_collection,cljs.core.cst$kw$article_SLASH_list], null),cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$params,(function (_,route,p__24533){
var map__24534 = p__24533;
var map__24534__$1 = ((((!((map__24534 == null)))?((((map__24534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24534):map__24534);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24534__$1,cljs.core.cst$kw$jwt);
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(route);
var subpage = cljs.core.cst$kw$subpage.cljs$core$IFn$_invoke$arity$1(route);
var personal_feed_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("home",page)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("personal",subpage));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("home",page)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("profile",page))){
return realworld.datasources.add_articles_tag_param(realworld.datasources.add_articles_pagination_param(realworld.datasources.add_articles_author_param(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,((personal_feed_QMARK_)?"/articles/feed":"/articles")], null),cljs.core.cst$kw$headers,realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1(jwt)),route),route),route);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_articles,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.current_article_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_named_DASH_item,cljs.core.cst$kw$article_SLASH_current], null),cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$params,(function (_,p__24536,p__24537){
var map__24538 = p__24536;
var map__24538__$1 = ((((!((map__24538 == null)))?((((map__24538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24538):map__24538);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24538__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24538__$1,cljs.core.cst$kw$subpage);
var map__24539 = p__24537;
var map__24539__$1 = ((((!((map__24539 == null)))?((((map__24539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24539):map__24539);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24539__$1,cljs.core.cst$kw$jwt);
if(cljs.core.truth_((function (){var and__11502__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("editor",page)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("article",page));
if(and__11502__auto__){
return subpage;
} else {
return and__11502__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subpage)].join(''),cljs.core.cst$kw$headers,realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1(jwt),cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db,((function (map__24538,map__24538__$1,page,subpage,map__24539,map__24539__$1,jwt){
return (function (app_db){
var temp__5278__auto__ = realworld.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$article,subpage], 0));
if(cljs.core.truth_(temp__5278__auto__)){
var article = temp__5278__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$article,article], null);
} else {
return null;
}
});})(map__24538,map__24538__$1,page,subpage,map__24539,map__24539__$1,jwt))
], null);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_article,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.current_article_comments_datasource = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_collection,cljs.core.cst$kw$comment_SLASH_list], null),cljs.core.cst$kw$params,(function (_,p__24542,___$1){
var map__24543 = p__24542;
var map__24543__$1 = ((((!((map__24543 == null)))?((((map__24543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24543):map__24543);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24543__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24543__$1,cljs.core.cst$kw$subpage);
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("article",page);
if(and__11502__auto__){
return subpage;
} else {
return and__11502__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subpage),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/comments")].join('')], null);
} else {
return null;
}
}),cljs.core.cst$kw$loader,realworld.datasources.api_loader,cljs.core.cst$kw$processor,realworld.api.process_comments], null);
realworld.datasources.profile_user_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_named_DASH_item,cljs.core.cst$kw$user_SLASH_profile_DASH_user], null),cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$params,(function (_,p__24545,p__24546){
var map__24547 = p__24545;
var map__24547__$1 = ((((!((map__24547 == null)))?((((map__24547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24547):map__24547);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24547__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24547__$1,cljs.core.cst$kw$subpage);
var map__24548 = p__24546;
var map__24548__$1 = ((((!((map__24548 == null)))?((((map__24548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24548):map__24548);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548__$1,cljs.core.cst$kw$jwt);
if(cljs.core.truth_((function (){var and__11502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("profile",page);
if(and__11502__auto__){
return subpage;
} else {
return and__11502__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/profiles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subpage)].join(''),cljs.core.cst$kw$headers,realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1(jwt),cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db,((function (map__24547,map__24547__$1,page,subpage,map__24548,map__24548__$1,jwt){
return (function (app_db){
var temp__5278__auto__ = realworld.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$user,subpage], 0));
if(cljs.core.truth_(temp__5278__auto__)){
var user = temp__5278__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,user], null);
} else {
return null;
}
});})(map__24547,map__24547__$1,page,subpage,map__24548,map__24548__$1,jwt))
], null);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_author,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.tags_datasource = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_collection,cljs.core.cst$kw$tag_SLASH_list], null),cljs.core.cst$kw$params,(function (_,p__24551,___$1){
var map__24552 = p__24551;
var map__24552__$1 = ((((!((map__24552 == null)))?((((map__24552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24552):map__24552);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24552__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("home",page)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/tags"], null);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_tags,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.datasources = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$jwt,realworld.datasources.jwt_datasource,cljs.core.cst$kw$current_DASH_user,realworld.datasources.current_user_datasource,cljs.core.cst$kw$articles,realworld.datasources.articles_datasource,cljs.core.cst$kw$current_DASH_article,realworld.datasources.current_article_datasource,cljs.core.cst$kw$current_DASH_article_DASH_comments,realworld.datasources.current_article_comments_datasource,cljs.core.cst$kw$profile_DASH_user,realworld.datasources.profile_user_datasource,cljs.core.cst$kw$tags,realworld.datasources.tags_datasource], null);
