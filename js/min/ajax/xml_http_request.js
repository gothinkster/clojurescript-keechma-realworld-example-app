// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__22821 = e.target.readyState;
var fexpr__22820 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__22820.cljs$core$IFn$_invoke$arity$1 ? fexpr__22820.cljs$core$IFn$_invoke$arity$1(G__22821) : fexpr__22820.call(null,G__22821));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22823,handler){
var map__22824 = p__22823;
var map__22824__$1 = ((((!((map__22824 == null)))?((((map__22824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22824):map__22824);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22824__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22824__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22824,map__22824__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22822_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__22822_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__22824,map__22824__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5278__auto___22836 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5278__auto___22836)){
var response_type_22837 = temp__5278__auto___22836;
this$__$1.responseType = cljs.core.name(response_type_22837);
} else {
}

var seq__22826_22838 = cljs.core.seq(headers);
var chunk__22827_22839 = null;
var count__22828_22840 = (0);
var i__22829_22841 = (0);
while(true){
if((i__22829_22841 < count__22828_22840)){
var vec__22830_22842 = chunk__22827_22839.cljs$core$IIndexed$_nth$arity$2(null,i__22829_22841);
var k_22843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22830_22842,(0),null);
var v_22844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22830_22842,(1),null);
this$__$1.setRequestHeader(k_22843,v_22844);

var G__22845 = seq__22826_22838;
var G__22846 = chunk__22827_22839;
var G__22847 = count__22828_22840;
var G__22848 = (i__22829_22841 + (1));
seq__22826_22838 = G__22845;
chunk__22827_22839 = G__22846;
count__22828_22840 = G__22847;
i__22829_22841 = G__22848;
continue;
} else {
var temp__5278__auto___22849 = cljs.core.seq(seq__22826_22838);
if(temp__5278__auto___22849){
var seq__22826_22850__$1 = temp__5278__auto___22849;
if(cljs.core.chunked_seq_QMARK_(seq__22826_22850__$1)){
var c__12440__auto___22851 = cljs.core.chunk_first(seq__22826_22850__$1);
var G__22852 = cljs.core.chunk_rest(seq__22826_22850__$1);
var G__22853 = c__12440__auto___22851;
var G__22854 = cljs.core.count(c__12440__auto___22851);
var G__22855 = (0);
seq__22826_22838 = G__22852;
chunk__22827_22839 = G__22853;
count__22828_22840 = G__22854;
i__22829_22841 = G__22855;
continue;
} else {
var vec__22833_22856 = cljs.core.first(seq__22826_22850__$1);
var k_22857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22833_22856,(0),null);
var v_22858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22833_22856,(1),null);
this$__$1.setRequestHeader(k_22857,v_22858);

var G__22859 = cljs.core.next(seq__22826_22850__$1);
var G__22860 = null;
var G__22861 = (0);
var G__22862 = (0);
seq__22826_22838 = G__22859;
chunk__22827_22839 = G__22860;
count__22828_22840 = G__22861;
i__22829_22841 = G__22862;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__11514__auto__ = body;
if(cljs.core.truth_(or__11514__auto__)){
return or__11514__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

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
