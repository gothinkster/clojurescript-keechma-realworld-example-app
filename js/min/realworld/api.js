// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.api');
goog.require('cljs.core');
goog.require('keechma.toolbox.ajax');
goog.require('realworld.settings');
goog.require('promesa.core');
realworld.api.default_request_config = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$format,cljs.core.cst$kw$json], null);
realworld.api.add_auth_header = (function realworld$api$add_auth_header(req_params,jwt){
if(cljs.core.truth_(jwt)){
return cljs.core.assoc_in(req_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,cljs.core.cst$kw$authorization], null),[cljs.core.str("Token "),cljs.core.str(jwt)].join(''));
} else {
return req_params;
}
});
realworld.api.add_params = (function realworld$api$add_params(req_params,params){
if(cljs.core.truth_(params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req_params,cljs.core.cst$kw$params,params);
} else {
return req_params;
}
});
realworld.api.req_params = (function realworld$api$req_params(var_args){
var args__11178__auto__ = [];
var len__11171__auto___23268 = arguments.length;
var i__11172__auto___23269 = (0);
while(true){
if((i__11172__auto___23269 < len__11171__auto___23268)){
args__11178__auto__.push((arguments[i__11172__auto___23269]));

var G__23270 = (i__11172__auto___23269 + (1));
i__11172__auto___23269 = G__23270;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((0) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((0)),(0),null)):null);
return realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(argseq__11179__auto__);
});

realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic = (function (p__23265){
var map__23266 = p__23265;
var map__23266__$1 = ((((!((map__23266 == null)))?((((map__23266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23266):map__23266);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23266__$1,cljs.core.cst$kw$jwt);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23266__$1,cljs.core.cst$kw$data);
return realworld.api.add_params(realworld.api.add_auth_header(realworld.api.default_request_config,jwt),data);
});

realworld.api.req_params.cljs$lang$maxFixedArity = (0);

realworld.api.req_params.cljs$lang$applyTo = (function (seq23264){
return realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23264));
});

realworld.api.tag__GT_entity = (function realworld$api$tag__GT_entity(tag){
if(typeof tag === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag], null);
} else {
return tag;
}
});
realworld.api.process_articles = (function realworld$api$process_articles(data){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (article){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(article,cljs.core.cst$kw$tagList,cljs.core.map.cljs$core$IFn$_invoke$arity$2(realworld.api.tag__GT_entity,cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(article)));
}),cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(data)),cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$count,cljs.core.cst$kw$articlesCount.cljs$core$IFn$_invoke$arity$1(data)], null)], null);
});
realworld.api.process_article = (function realworld$api$process_article(data){
var article = cljs.core.cst$kw$article.cljs$core$IFn$_invoke$arity$1(data);
var tag_list = cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(article);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(article,cljs.core.cst$kw$tagList,cljs.core.map.cljs$core$IFn$_invoke$arity$2(realworld.api.tag__GT_entity,((cljs.core.fn_QMARK_(tag_list))?(tag_list.cljs$core$IFn$_invoke$arity$0 ? tag_list.cljs$core$IFn$_invoke$arity$0() : tag_list.call(null)):tag_list)));
});
realworld.api.process_tags = (function realworld$api$process_tags(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(realworld.api.tag__GT_entity,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(data));
});
realworld.api.process_author = (function realworld$api$process_author(data){
return cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(data);
});
realworld.api.process_comments = (function realworld$api$process_comments(data){
return cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(data);
});
realworld.api.process_user = (function realworld$api$process_user(data){
return cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(data);
});
realworld.api.comment_create = (function realworld$api$comment_create(jwt,article_slug,comment){
return promesa.core.map(cljs.core.cst$kw$comment,(function (){var G__23273 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/articles/"),cljs.core.str(article_slug),cljs.core.str("/comments")].join('');
var G__23274 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$comment,comment], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23273,G__23274) : keechma.toolbox.ajax.POST.call(null,G__23273,G__23274));
})());
});
realworld.api.article_create = (function realworld$api$article_create(jwt,article){
return promesa.core.map(realworld.api.process_article,(function (){var G__23277 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/articles")].join('');
var G__23278 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$article,article], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23277,G__23278) : keechma.toolbox.ajax.POST.call(null,G__23277,G__23278));
})());
});
realworld.api.article_update = (function realworld$api$article_update(jwt,article_slug,article){
return promesa.core.map(realworld.api.process_article,(function (){var G__23281 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/articles/"),cljs.core.str(article_slug)].join('');
var G__23282 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$article,article], null)], 0));
return (keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2(G__23281,G__23282) : keechma.toolbox.ajax.PUT.call(null,G__23281,G__23282));
})());
});
realworld.api.article_delete = (function realworld$api$article_delete(jwt,article_slug){
var G__23285 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/articles/"),cljs.core.str(article_slug)].join('');
var G__23286 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2(G__23285,G__23286) : keechma.toolbox.ajax.DELETE.call(null,G__23285,G__23286));
});
realworld.api.login = (function realworld$api$login(user){
return promesa.core.map(realworld.api.process_user,(function (){var G__23289 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/users/login")].join('');
var G__23290 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23289,G__23290) : keechma.toolbox.ajax.POST.call(null,G__23289,G__23290));
})());
});
realworld.api.register = (function realworld$api$register(user){
return promesa.core.map(realworld.api.process_user,(function (){var G__23293 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/users")].join('');
var G__23294 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23293,G__23294) : keechma.toolbox.ajax.POST.call(null,G__23293,G__23294));
})());
});
realworld.api.user_update = (function realworld$api$user_update(jwt,user){
return promesa.core.map(realworld.api.process_user,(function (){var G__23297 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/user")].join('');
var G__23298 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null)], 0));
return (keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2(G__23297,G__23298) : keechma.toolbox.ajax.PUT.call(null,G__23297,G__23298));
})());
});
realworld.api.follow_create = (function realworld$api$follow_create(jwt,username){
return promesa.core.map(realworld.api.process_author,(function (){var G__23301 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/profiles/"),cljs.core.str(username),cljs.core.str("/follow")].join('');
var G__23302 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23301,G__23302) : keechma.toolbox.ajax.POST.call(null,G__23301,G__23302));
})());
});
realworld.api.follow_delete = (function realworld$api$follow_delete(jwt,username){
return promesa.core.map(realworld.api.process_author,(function (){var G__23305 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/profiles/"),cljs.core.str(username),cljs.core.str("/follow")].join('');
var G__23306 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2(G__23305,G__23306) : keechma.toolbox.ajax.DELETE.call(null,G__23305,G__23306));
})());
});
realworld.api.favorite_create = (function realworld$api$favorite_create(jwt,article_slug){
return promesa.core.map(realworld.api.process_article,(function (){var G__23309 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/articles/"),cljs.core.str(article_slug),cljs.core.str("/favorite")].join('');
var G__23310 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23309,G__23310) : keechma.toolbox.ajax.POST.call(null,G__23309,G__23310));
})());
});
realworld.api.favorite_delete = (function realworld$api$favorite_delete(jwt,article_slug){
return promesa.core.map(realworld.api.process_article,(function (){var G__23313 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str("/articles/"),cljs.core.str(article_slug),cljs.core.str("/favorite")].join('');
var G__23314 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2(G__23313,G__23314) : keechma.toolbox.ajax.DELETE.call(null,G__23313,G__23314));
})());
});
realworld.api.dataloader_req = (function realworld$api$dataloader_req(req_params){
var headers = cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(req_params);
var url = cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req_params);
var params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(req_params,cljs.core.cst$kw$url,cljs.core.array_seq([cljs.core.cst$kw$headers,cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db], 0));
var G__23317 = [cljs.core.str(realworld.settings.api_endpoint),cljs.core.str(url)].join('');
var G__23318 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(realworld.api.default_request_config,cljs.core.cst$kw$params,params,cljs.core.array_seq([cljs.core.cst$kw$headers,headers], 0));
return (keechma.toolbox.ajax.GET.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.GET.cljs$core$IFn$_invoke$arity$2(G__23317,G__23318) : keechma.toolbox.ajax.GET.call(null,G__23317,G__23318));
});
