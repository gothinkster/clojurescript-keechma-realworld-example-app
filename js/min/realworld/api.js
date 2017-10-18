// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.ajax');
goog.require('realworld.settings');
goog.require('promesa.core');
realworld.api.default_request_config = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$format,cljs.core.cst$kw$json], null);
realworld.api.add_auth_header = (function realworld$api$add_auth_header(req_params,jwt){
if(cljs.core.truth_(jwt)){
return cljs.core.assoc_in(req_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,cljs.core.cst$kw$authorization], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Token "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(jwt)].join(''));
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
var args__12782__auto__ = [];
var len__12775__auto___23487 = arguments.length;
var i__12776__auto___23488 = (0);
while(true){
if((i__12776__auto___23488 < len__12775__auto___23487)){
args__12782__auto__.push((arguments[i__12776__auto___23488]));

var G__23489 = (i__12776__auto___23488 + (1));
i__12776__auto___23488 = G__23489;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic = (function (p__23484){
var map__23485 = p__23484;
var map__23485__$1 = ((((!((map__23485 == null)))?((((map__23485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23485):map__23485);
var jwt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23485__$1,cljs.core.cst$kw$jwt);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23485__$1,cljs.core.cst$kw$data);
return realworld.api.add_params(realworld.api.add_auth_header(realworld.api.default_request_config,jwt),data);
});

realworld.api.req_params.cljs$lang$maxFixedArity = (0);

realworld.api.req_params.cljs$lang$applyTo = (function (seq23483){
return realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23483));
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
return promesa.core.map(cljs.core.cst$kw$comment,(function (){var G__23490 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(article_slug),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/comments")].join('');
var G__23491 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$comment,comment], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23490,G__23491) : keechma.toolbox.ajax.POST.call(null,G__23490,G__23491));
})());
});
realworld.api.article_create = (function realworld$api$article_create(jwt,article){
return promesa.core.map(realworld.api.process_article,(function (){var G__23492 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles")].join('');
var G__23493 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$article,article], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23492,G__23493) : keechma.toolbox.ajax.POST.call(null,G__23492,G__23493));
})());
});
realworld.api.article_update = (function realworld$api$article_update(jwt,article_slug,article){
return promesa.core.map(realworld.api.process_article,(function (){var G__23494 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(article_slug)].join('');
var G__23495 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$article,article], null)], 0));
return (keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2(G__23494,G__23495) : keechma.toolbox.ajax.PUT.call(null,G__23494,G__23495));
})());
});
realworld.api.article_delete = (function realworld$api$article_delete(jwt,article_slug){
var G__23496 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(article_slug)].join('');
var G__23497 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2(G__23496,G__23497) : keechma.toolbox.ajax.DELETE.call(null,G__23496,G__23497));
});
realworld.api.login = (function realworld$api$login(user){
return promesa.core.map(realworld.api.process_user,(function (){var G__23498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/users/login")].join('');
var G__23499 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23498,G__23499) : keechma.toolbox.ajax.POST.call(null,G__23498,G__23499));
})());
});
realworld.api.register = (function realworld$api$register(user){
return promesa.core.map(realworld.api.process_user,(function (){var G__23500 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/users")].join('');
var G__23501 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null)], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23500,G__23501) : keechma.toolbox.ajax.POST.call(null,G__23500,G__23501));
})());
});
realworld.api.user_update = (function realworld$api$user_update(jwt,user){
return promesa.core.map(realworld.api.process_user,(function (){var G__23502 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/user")].join('');
var G__23503 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt,cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null)], 0));
return (keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.PUT.cljs$core$IFn$_invoke$arity$2(G__23502,G__23503) : keechma.toolbox.ajax.PUT.call(null,G__23502,G__23503));
})());
});
realworld.api.follow_create = (function realworld$api$follow_create(jwt,username){
return promesa.core.map(realworld.api.process_author,(function (){var G__23504 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/profiles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/follow")].join('');
var G__23505 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23504,G__23505) : keechma.toolbox.ajax.POST.call(null,G__23504,G__23505));
})());
});
realworld.api.follow_delete = (function realworld$api$follow_delete(jwt,username){
return promesa.core.map(realworld.api.process_author,(function (){var G__23506 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/profiles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/follow")].join('');
var G__23507 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2(G__23506,G__23507) : keechma.toolbox.ajax.DELETE.call(null,G__23506,G__23507));
})());
});
realworld.api.favorite_create = (function realworld$api$favorite_create(jwt,article_slug){
return promesa.core.map(realworld.api.process_article,(function (){var G__23508 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(article_slug),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/favorite")].join('');
var G__23509 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.POST.cljs$core$IFn$_invoke$arity$2(G__23508,G__23509) : keechma.toolbox.ajax.POST.call(null,G__23508,G__23509));
})());
});
realworld.api.favorite_delete = (function realworld$api$favorite_delete(jwt,article_slug){
return promesa.core.map(realworld.api.process_article,(function (){var G__23510 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/articles/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(article_slug),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/favorite")].join('');
var G__23511 = realworld.api.req_params.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$jwt,jwt], 0));
return (keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.DELETE.cljs$core$IFn$_invoke$arity$2(G__23510,G__23511) : keechma.toolbox.ajax.DELETE.call(null,G__23510,G__23511));
})());
});
realworld.api.dataloader_req = (function realworld$api$dataloader_req(req_params){
var headers = cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(req_params);
var url = cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req_params);
var params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(req_params,cljs.core.cst$kw$url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,cljs.core.cst$kw$get_DASH_from_DASH_app_DASH_db], 0));
var G__23512 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(realworld.settings.api_endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var G__23513 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(realworld.api.default_request_config,cljs.core.cst$kw$params,params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,headers], 0));
return (keechma.toolbox.ajax.GET.cljs$core$IFn$_invoke$arity$2 ? keechma.toolbox.ajax.GET.cljs$core$IFn$_invoke$arity$2(G__23512,G__23513) : keechma.toolbox.ajax.GET.call(null,G__23512,G__23513));
});
