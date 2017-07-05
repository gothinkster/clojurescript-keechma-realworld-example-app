// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22507,handler){
var map__22508 = p__22507;
var map__22508__$1 = ((((!((map__22508 == null)))?((((map__22508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22508):map__22508);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22508__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22508__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22508,map__22508__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22506_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__22506_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__22508,map__22508__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__6753__auto___22520 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__6753__auto___22520)){
var response_type_22521 = temp__6753__auto___22520;
this$__$1.responseType = cljs.core.name(response_type_22521);
} else {
}

var seq__22510_22522 = cljs.core.seq(headers);
var chunk__22511_22523 = null;
var count__22512_22524 = (0);
var i__22513_22525 = (0);
while(true){
if((i__22513_22525 < count__22512_22524)){
var vec__22514_22526 = chunk__22511_22523.cljs$core$IIndexed$_nth$arity$2(null,i__22513_22525);
var k_22527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22514_22526,(0),null);
var v_22528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22514_22526,(1),null);
this$__$1.setRequestHeader(k_22527,v_22528);

var G__22529 = seq__22510_22522;
var G__22530 = chunk__22511_22523;
var G__22531 = count__22512_22524;
var G__22532 = (i__22513_22525 + (1));
seq__22510_22522 = G__22529;
chunk__22511_22523 = G__22530;
count__22512_22524 = G__22531;
i__22513_22525 = G__22532;
continue;
} else {
var temp__6753__auto___22533 = cljs.core.seq(seq__22510_22522);
if(temp__6753__auto___22533){
var seq__22510_22534__$1 = temp__6753__auto___22533;
if(cljs.core.chunked_seq_QMARK_(seq__22510_22534__$1)){
var c__10895__auto___22535 = cljs.core.chunk_first(seq__22510_22534__$1);
var G__22536 = cljs.core.chunk_rest(seq__22510_22534__$1);
var G__22537 = c__10895__auto___22535;
var G__22538 = cljs.core.count(c__10895__auto___22535);
var G__22539 = (0);
seq__22510_22522 = G__22536;
chunk__22511_22523 = G__22537;
count__22512_22524 = G__22538;
i__22513_22525 = G__22539;
continue;
} else {
var vec__22517_22540 = cljs.core.first(seq__22510_22534__$1);
var k_22541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22517_22540,(0),null);
var v_22542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22517_22540,(1),null);
this$__$1.setRequestHeader(k_22541,v_22542);

var G__22543 = cljs.core.next(seq__22510_22534__$1);
var G__22544 = null;
var G__22545 = (0);
var G__22546 = (0);
seq__22510_22522 = G__22543;
chunk__22511_22523 = G__22544;
count__22512_22524 = G__22545;
i__22513_22525 = G__22546;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__9992__auto__ = body;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
