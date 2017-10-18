// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.controllers.initializer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.dataloader.controller');
realworld.controllers.initializer.controller = keechma.toolbox.pipeline.controller.constructor$((function (_){
return true;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(dataloader-controller/wait-dataloader-pipeline!)",cljs.core.cst$kw$val,keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_()], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repr,"(pp/commit! (assoc-in app-db [:kv :initialized?] true))",cljs.core.cst$kw$val,keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$initialized_QMARK_], null),true))], null);
})], null)], null))], null));
