// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.controllers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('keechma.toolbox.forms.controller');
goog.require('keechma.toolbox.forms.mount_controller');
goog.require('realworld.datasources');
goog.require('realworld.edb');
goog.require('realworld.forms');
goog.require('realworld.controllers.redirect');
goog.require('realworld.controllers.initializer');
goog.require('realworld.controllers.logout');
goog.require('realworld.controllers.user_actions');
realworld.controllers.controllers = keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3(keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2(keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$redirect,realworld.controllers.redirect.controller,cljs.core.cst$kw$initializer,realworld.controllers.initializer.controller,cljs.core.cst$kw$logout,realworld.controllers.logout.controller,cljs.core.cst$kw$user_DASH_actions,realworld.controllers.user_actions.controller], null),realworld.forms.forms),realworld.forms.forms_ids),realworld.datasources.datasources,realworld.edb.edb_schema);
