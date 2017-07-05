// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.datasources');
goog.require('cljs.core');
goog.require('keechma.toolbox.ajax');
goog.require('keechma.toolbox.dataloader.subscriptions');
goog.require('realworld.edb');
goog.require('hodgepodge.core');
goog.require('realworld.settings');
goog.require('realworld.api');
realworld.datasources.api_loader = keechma.toolbox.dataloader.subscriptions.map_loader((function (req){
var temp__6753__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6753__auto__)){
var params = temp__6753__auto__;
var app_db = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(req);
var get_from_app_db = (function (){var or__9992__auto__ = cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return ((function (or__9992__auto__,app_db,params,temp__6753__auto__){
return (function (_){
return null;
});
;})(or__9992__auto__,app_db,params,temp__6753__auto__))
}
})();
var or__9992__auto__ = (get_from_app_db.cljs$core$IFn$_invoke$arity$1 ? get_from_app_db.cljs$core$IFn$_invoke$arity$1(app_db) : get_from_app_db.call(null,app_db));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return realworld.api.dataloader_req(params);
}
} else {
return null;
}
}));
realworld.datasources.add_articles_tag_param = (function realworld$datasources$add_articles_tag_param(params,p__24677){
var map__24680 = p__24677;
var map__24680__$1 = ((((!((map__24680 == null)))?((((map__24680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24680):map__24680);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,cljs.core.cst$kw$subpage);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,cljs.core.cst$kw$detail);
var tag = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tag",subpage))?detail:null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$tag,tag);
} else {
return params;
}
});
realworld.datasources.add_articles_pagination_param = (function realworld$datasources$add_articles_pagination_param(params,p__24682){
var map__24685 = p__24682;
var map__24685__$1 = ((((!((map__24685 == null)))?((((map__24685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24685):map__24685);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24685__$1,cljs.core.cst$kw$p);
if(cljs.core.truth_(p)){
var offset = ((parseInt(p,(10)) - (1)) * realworld.settings.articles_per_page);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$offset,offset);
} else {
return params;
}
});
realworld.datasources.add_articles_author_param = (function realworld$datasources$add_articles_author_param(params,p__24687){
var map__24690 = p__24687;
var map__24690__$1 = ((((!((map__24690 == null)))?((((map__24690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24690):map__24690);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,cljs.core.cst$kw$subpage);
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,cljs.core.cst$kw$detail);
if(cljs.core.truth_((function (){var and__9980__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("profile",page);
if(and__9980__auto__){
return subpage;
} else {
return and__9980__auto__;
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
var args24692 = [];
var len__11171__auto___24695 = arguments.length;
var i__11172__auto___24696 = (0);
while(true){
if((i__11172__auto___24696 < len__11171__auto___24695)){
args24692.push((arguments[i__11172__auto___24696]));

var G__24697 = (i__11172__auto___24696 + (1));
i__11172__auto___24696 = G__24697;
continue;
} else {
}
break;
}

var G__24694 = args24692.length;
switch (G__24694) {
case 1:
return realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24692.length)].join('')));

}
});

realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1 = (function (jwt){
return realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,jwt);
});

realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$2 = (function (headers,jwt){
if(cljs.core.truth_(jwt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,cljs.core.cst$kw$authorization,[cljs.core.str("Token "),cljs.core.str(jwt)].join(''));
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
realworld.datasources.current_user_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_named_DASH_item,cljs.core.cst$kw$user_SLASH_current], null),cljs.core.cst$kw$loader,realworld.datasources.api_loader,cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$processor,realworld.api.process_user,cljs.core.cst$kw$params,(function (prev,_,p__24699){
var map__24700 = p__24699;
var map__24700__$1 = ((((!((map__24700 == null)))?((((map__24700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24700):map__24700);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24700__$1,cljs.core.cst$kw$jwt);
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
realworld.datasources.articles_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_collection,cljs.core.cst$kw$article_SLASH_list], null),cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$params,(function (_,route,p__24702){
var map__24703 = p__24702;
var map__24703__$1 = ((((!((map__24703 == null)))?((((map__24703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24703):map__24703);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24703__$1,cljs.core.cst$kw$jwt);
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(route);
var subpage = cljs.core.cst$kw$subpage.cljs$core$IFn$_invoke$arity$1(route);
var personal_feed_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("home",page)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("personal",subpage));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("home",page)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("profile",page))){
return realworld.datasources.add_articles_tag_param(realworld.datasources.add_articles_pagination_param(realworld.datasources.add_articles_author_param(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,((personal_feed_QMARK_)?"/articles/feed":"/articles")], null),cljs.core.cst$kw$headers,realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1(jwt)),route),route),route);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_articles,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.current_article_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_named_DASH_item,cljs.core.cst$kw$article_SLASH_current], null),cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$params,(function (_,p__24705,p__24706){
var map__24707 = p__24705;
var map__24707__$1 = ((((!((map__24707 == null)))?((((map__24707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24707):map__24707);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24707__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24707__$1,cljs.core.cst$kw$subpage);
var map__24708 = p__24706;
var map__24708__$1 = ((((!((map__24708 == null)))?((((map__24708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24708):map__24708);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,cljs.core.cst$kw$jwt);
if(cljs.core.truth_((function (){var and__9980__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("editor",page)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("article",page));
if(and__9980__auto__){
return subpage;
} else {
return and__9980__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,[cljs.core.str("/articles/"),cljs.core.str(subpage)].join(''),cljs.core.cst$kw$headers,realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1(jwt),cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db,((function (map__24707,map__24707__$1,page,subpage,map__24708,map__24708__$1,jwt){
return (function (app_db){
var temp__6753__auto__ = realworld.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.array_seq([cljs.core.cst$kw$article,subpage], 0));
if(cljs.core.truth_(temp__6753__auto__)){
var article = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$article,article], null);
} else {
return null;
}
});})(map__24707,map__24707__$1,page,subpage,map__24708,map__24708__$1,jwt))
], null);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_article,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.current_article_comments_datasource = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_collection,cljs.core.cst$kw$comment_SLASH_list], null),cljs.core.cst$kw$params,(function (_,p__24711,___$1){
var map__24712 = p__24711;
var map__24712__$1 = ((((!((map__24712 == null)))?((((map__24712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24712):map__24712);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24712__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24712__$1,cljs.core.cst$kw$subpage);
if(cljs.core.truth_((function (){var and__9980__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("article",page);
if(and__9980__auto__){
return subpage;
} else {
return and__9980__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,[cljs.core.str("/articles/"),cljs.core.str(subpage),cljs.core.str("/comments")].join('')], null);
} else {
return null;
}
}),cljs.core.cst$kw$loader,realworld.datasources.api_loader,cljs.core.cst$kw$processor,realworld.api.process_comments], null);
realworld.datasources.profile_user_datasource = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_named_DASH_item,cljs.core.cst$kw$user_SLASH_profile_DASH_user], null),cljs.core.cst$kw$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jwt], null),cljs.core.cst$kw$params,(function (_,p__24714,p__24715){
var map__24716 = p__24714;
var map__24716__$1 = ((((!((map__24716 == null)))?((((map__24716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24716):map__24716);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24716__$1,cljs.core.cst$kw$page);
var subpage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24716__$1,cljs.core.cst$kw$subpage);
var map__24717 = p__24715;
var map__24717__$1 = ((((!((map__24717 == null)))?((((map__24717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24717):map__24717);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,cljs.core.cst$kw$jwt);
if(cljs.core.truth_((function (){var and__9980__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("profile",page);
if(and__9980__auto__){
return subpage;
} else {
return and__9980__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,[cljs.core.str("/profiles/"),cljs.core.str(subpage)].join(''),cljs.core.cst$kw$headers,realworld.datasources.auth_header.cljs$core$IFn$_invoke$arity$1(jwt),cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db,((function (map__24716,map__24716__$1,page,subpage,map__24717,map__24717__$1,jwt){
return (function (app_db){
var temp__6753__auto__ = realworld.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.array_seq([cljs.core.cst$kw$user,subpage], 0));
if(cljs.core.truth_(temp__6753__auto__)){
var user = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,user], null);
} else {
return null;
}
});})(map__24716,map__24716__$1,page,subpage,map__24717,map__24717__$1,jwt))
], null);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_author,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.tags_datasource = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edb_SLASH_collection,cljs.core.cst$kw$tag_SLASH_list], null),cljs.core.cst$kw$params,(function (_,p__24720,___$1){
var map__24721 = p__24720;
var map__24721__$1 = ((((!((map__24721 == null)))?((((map__24721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24721):map__24721);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24721__$1,cljs.core.cst$kw$page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("home",page)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/tags"], null);
} else {
return null;
}
}),cljs.core.cst$kw$processor,realworld.api.process_tags,cljs.core.cst$kw$loader,realworld.datasources.api_loader], null);
realworld.datasources.datasources = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$jwt,realworld.datasources.jwt_datasource,cljs.core.cst$kw$current_DASH_user,realworld.datasources.current_user_datasource,cljs.core.cst$kw$articles,realworld.datasources.articles_datasource,cljs.core.cst$kw$current_DASH_article,realworld.datasources.current_article_datasource,cljs.core.cst$kw$current_DASH_article_DASH_comments,realworld.datasources.current_article_comments_datasource,cljs.core.cst$kw$profile_DASH_user,realworld.datasources.profile_user_datasource,cljs.core.cst$kw$tags,realworld.datasources.tags_datasource], null);
