// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.cursor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
keechma.toolbox.forms.cursor.set_selection_BANG_ = (function keechma$toolbox$forms$cursor$set_selection_BANG_(el,pos){
el.selectionStart = pos;

return el.selectionEnd = pos;
});
keechma.toolbox.forms.cursor.calc_caret_pos_add = (function keechma$toolbox$forms$cursor$calc_caret_pos_add(format_chars,caret_start,old_value,new_value){
var start_pos = caret_start;
var rest_old = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(caret_start,old_value);
var rest_new = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(caret_start,new_value);
while(true){
var first_old = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),rest_old);
var first_new = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),rest_new);
var clean_old = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(format_chars,rest_old);
var clean_new = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(format_chars,rest_new);
var is_format_char_QMARK_ = cljs.core.contains_QMARK_(format_chars,cljs.core.first(first_new));
if(cljs.core.empty_QMARK_(rest_new)){
return start_pos;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clean_new,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clean_new),clean_old))){
return start_pos;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_old,first_new)) && (is_format_char_QMARK_)){
var G__24829 = (start_pos + (1));
var G__24830 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),rest_old);
var G__24831 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),rest_new);
start_pos = G__24829;
rest_old = G__24830;
rest_new = G__24831;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rest_new,rest_old)){
var G__24832 = (start_pos + (1));
var G__24833 = rest_old;
var G__24834 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),rest_new);
start_pos = G__24832;
rest_old = G__24833;
rest_new = G__24834;
continue;
} else {
return start_pos;

}
}
}
}
break;
}
});
keechma.toolbox.forms.cursor.calc_caret_pos_remove = (function keechma$toolbox$forms$cursor$calc_caret_pos_remove(format_chars,caret_start,old_value,new_value,old_length,new_length){
var diff = (old_length - new_length);
var start_pos = (caret_start - diff);
var prev_old = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(start_pos,old_value));
var prev_new = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(start_pos,new_value));
var start_pos__$1 = start_pos;
var prev_old__$1 = prev_old;
var prev_new__$1 = prev_new;
while(true){
var first_old = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),prev_old__$1);
var first_new = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),prev_new__$1);
var is_format_char_QMARK_ = cljs.core.contains_QMARK_(format_chars,cljs.core.first(first_new));
if(cljs.core.empty_QMARK_(prev_new__$1)){
return start_pos__$1;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_old,first_new)) && (is_format_char_QMARK_)){
var G__24835 = (start_pos__$1 - (1));
var G__24836 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),prev_old__$1);
var G__24837 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),prev_new__$1);
start_pos__$1 = G__24835;
prev_old__$1 = G__24836;
prev_new__$1 = G__24837;
continue;
} else {
return start_pos__$1;

}
}
break;
}
});
keechma.toolbox.forms.cursor.set_caret_pos_BANG_ = (function keechma$toolbox$forms$cursor$set_caret_pos_BANG_(el,format_chars,input_value,new_value,old_value,caret_pos){
var old_length = cljs.core.count(old_value);
var new_length = cljs.core.count(new_value);
var input_length = cljs.core.count(input_value);
var caret_start = (caret_pos - (input_length - old_length));
el.value = new_value;

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,old_value)) && ((input_length < old_length))){
return keechma.toolbox.forms.cursor.set_selection_BANG_(el,((caret_pos - (old_length - input_length)) + (1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,old_value)){
return keechma.toolbox.forms.cursor.set_selection_BANG_(el,caret_start);
} else {
if((new_length >= old_length)){
return keechma.toolbox.forms.cursor.set_selection_BANG_(el,keechma.toolbox.forms.cursor.calc_caret_pos_add(format_chars,caret_start,old_value,new_value));
} else {
if((new_length < old_length)){
return keechma.toolbox.forms.cursor.set_selection_BANG_(el,keechma.toolbox.forms.cursor.calc_caret_pos_remove(format_chars,caret_start,old_value,new_value,old_length,new_length));
} else {
return null;

}
}
}
}
});
