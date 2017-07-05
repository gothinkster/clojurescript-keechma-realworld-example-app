// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('com.stuartsierra.dependency');
goog.require('cljs.core');
goog.require('clojure.set');

/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraph = function(){};

/**
 * Returns the set of immediate dependencies of node.
 */
com.stuartsierra.dependency.immediate_dependencies = (function com$stuartsierra$dependency$immediate_dependencies(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.immediate_dependencies[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto__.call(null,graph,node));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.immediate_dependencies["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto____$1.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependencies",graph);
}
}
}
});

/**
 * Returns the set of immediate dependents of node.
 */
com.stuartsierra.dependency.immediate_dependents = (function com$stuartsierra$dependency$immediate_dependents(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.immediate_dependents[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto__.call(null,graph,node));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.immediate_dependents["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto____$1.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependents",graph);
}
}
}
});

/**
 * Returns the set of all things which node depends on, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependencies = (function com$stuartsierra$dependency$transitive_dependencies(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.transitive_dependencies[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto__.call(null,graph,node));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto____$1.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependencies",graph);
}
}
}
});

/**
 * Returns the set of all things which any node in node-set depends
 *  on, directly or transitively.
 */
com.stuartsierra.dependency.transitive_dependencies_set = (function com$stuartsierra$dependency$transitive_dependencies_set(graph,node_set){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2(graph,node_set);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.transitive_dependencies_set[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__10706__auto__.call(null,graph,node_set));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies_set["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__10706__auto____$1.call(null,graph,node_set));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependencies-set",graph);
}
}
}
});

/**
 * Returns the set of all things which depend upon node, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependents = (function com$stuartsierra$dependency$transitive_dependents(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.transitive_dependents[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto__.call(null,graph,node));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.transitive_dependents["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto____$1.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependents",graph);
}
}
}
});

/**
 * Returns the set of all things which depend upon any node in
 *  node-set, directly or transitively.
 */
com.stuartsierra.dependency.transitive_dependents_set = (function com$stuartsierra$dependency$transitive_dependents_set(graph,node_set){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2(graph,node_set);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.transitive_dependents_set[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__10706__auto__.call(null,graph,node_set));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.transitive_dependents_set["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__10706__auto____$1.call(null,graph,node_set));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependents-set",graph);
}
}
}
});

/**
 * Returns the set of all nodes in graph.
 */
com.stuartsierra.dependency.nodes = (function com$stuartsierra$dependency$nodes(graph){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.nodes[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$1(graph) : m__10706__auto__.call(null,graph));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.nodes["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$1(graph) : m__10706__auto____$1.call(null,graph));
} else {
throw cljs.core.missing_protocol("DependencyGraph.nodes",graph);
}
}
}
});


/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraphUpdate = function(){};

/**
 * Returns a new graph with a dependency from node to dep ("node depends
 *  on dep"). Forbids circular dependencies.
 */
com.stuartsierra.dependency.depend = (function com$stuartsierra$dependency$depend(graph,node,dep){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.depend[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__10706__auto__.call(null,graph,node,dep));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.depend["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__10706__auto____$1.call(null,graph,node,dep));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.depend",graph);
}
}
}
});

/**
 * Returns a new graph with the dependency from node to dep removed.
 */
com.stuartsierra.dependency.remove_edge = (function com$stuartsierra$dependency$remove_edge(graph,node,dep){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.remove_edge[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__10706__auto__.call(null,graph,node,dep));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.remove_edge["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__10706__auto____$1.call(null,graph,node,dep));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-edge",graph);
}
}
}
});

/**
 * Returns a new dependency graph with all references to node removed.
 */
com.stuartsierra.dependency.remove_all = (function com$stuartsierra$dependency$remove_all(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.remove_all[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto__.call(null,graph,node));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.remove_all["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto____$1.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-all",graph);
}
}
}
});

/**
 * Removes the node from the dependency graph without removing it as a
 *  dependency of other nodes. That is, removes all outgoing edges from
 *  node.
 */
com.stuartsierra.dependency.remove_node = (function com$stuartsierra$dependency$remove_node(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
var x__10705__auto__ = (((graph == null))?null:graph);
var m__10706__auto__ = (com.stuartsierra.dependency.remove_node[goog.typeOf(x__10705__auto__)]);
if(!((m__10706__auto__ == null))){
return (m__10706__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto__.call(null,graph,node));
} else {
var m__10706__auto____$1 = (com.stuartsierra.dependency.remove_node["_"]);
if(!((m__10706__auto____$1 == null))){
return (m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10706__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__10706__auto____$1.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-node",graph);
}
}
}
});

com.stuartsierra.dependency.remove_from_map = (function com$stuartsierra$dependency$remove_from_map(amap,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20677){
var vec__20678 = p__20677;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20678,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20678,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get neighbors x), for each x in node-set
 */
com.stuartsierra.dependency.transitive = (function com$stuartsierra$dependency$transitive(neighbors,node_set){
var unexpanded = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(neighbors,cljs.core.array_seq([node_set], 0));
var expanded = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__6751__auto__ = cljs.core.seq(unexpanded);
if(temp__6751__auto__){
var vec__20684 = temp__6751__auto__;
var seq__20685 = cljs.core.seq(vec__20684);
var first__20686 = cljs.core.first(seq__20685);
var seq__20685__$1 = cljs.core.next(seq__20685);
var node = first__20686;
var more = seq__20685__$1;
if(cljs.core.contains_QMARK_(expanded,node)){
var G__20687 = more;
var G__20688 = expanded;
unexpanded = G__20687;
expanded = G__20688;
continue;
} else {
var G__20689 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,(neighbors.cljs$core$IFn$_invoke$arity$1 ? neighbors.cljs$core$IFn$_invoke$arity$1(node) : neighbors.call(null,node)));
var G__20690 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded,node);
unexpanded = G__20689;
expanded = G__20690;
continue;
}
} else {
return expanded;
}
break;
}
});
com.stuartsierra.dependency.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.stuartsierra.dependency.DependencyGraph}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {com.stuartsierra.dependency.DependencyGraphUpdate}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.stuartsierra.dependency.MapDependencyGraph = (function (dependencies,dependents,__meta,__extmap,__hash){
this.dependencies = dependencies;
this.dependents = dependents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10662__auto__,k__10663__auto__){
var self__ = this;
var this__10662__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10662__auto____$1,k__10663__auto__,null);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10664__auto__,k20692,else__10665__auto__){
var self__ = this;
var this__10664__auto____$1 = this;
var G__20694 = (((k20692 instanceof cljs.core.Keyword))?k20692.fqn:null);
switch (G__20694) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20692,else__10665__auto__);

}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10676__auto__,writer__10677__auto__,opts__10678__auto__){
var self__ = this;
var this__10676__auto____$1 = this;
var pr_pair__10679__auto__ = ((function (this__10676__auto____$1){
return (function (keyval__10680__auto__){
return cljs.core.pr_sequential_writer(writer__10677__auto__,cljs.core.pr_writer,""," ","",opts__10678__auto__,keyval__10680__auto__);
});})(this__10676__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10677__auto__,pr_pair__10679__auto__,"#com.stuartsierra.dependency.MapDependencyGraph{",", ","}",opts__10678__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependencies,self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependents,self__.dependents],null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$ = true;

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20691){
var self__ = this;
var G__20691__$1 = this;
return (new cljs.core.RecordIter((0),G__20691__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependencies,cljs.core.cst$kw$dependents], null),cljs.core._iterator(self__.__extmap)));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10660__auto__){
var self__ = this;
var this__10660__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10656__auto__){
var self__ = this;
var this__10656__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10666__auto__){
var self__ = this;
var this__10666__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10657__auto__){
var self__ = this;
var this__10657__auto____$1 = this;
var h__10429__auto__ = self__.__hash;
if(!((h__10429__auto__ == null))){
return h__10429__auto__;
} else {
var h__10429__auto____$1 = cljs.core.hash_imap(this__10657__auto____$1);
self__.__hash = h__10429__auto____$1;

return h__10429__auto____$1;
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10658__auto__,other__10659__auto__){
var self__ = this;
var this__10658__auto____$1 = this;
if(cljs.core.truth_((function (){var and__9980__auto__ = other__10659__auto__;
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = (this__10658__auto____$1.constructor === other__10659__auto__.constructor);
if(and__9980__auto____$1){
return cljs.core.equiv_map(this__10658__auto____$1,other__10659__auto__);
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10671__auto__,k__10672__auto__){
var self__ = this;
var this__10671__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dependents,null,cljs.core.cst$kw$dependencies,null], null), null),k__10672__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10671__auto____$1),self__.__meta),k__10672__auto__);
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10672__auto__)),null));
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10669__auto__,k__10670__auto__,G__20691){
var self__ = this;
var this__10669__auto____$1 = this;
var pred__20695 = cljs.core.keyword_identical_QMARK_;
var expr__20696 = k__10670__auto__;
if(cljs.core.truth_((function (){var G__20698 = cljs.core.cst$kw$dependencies;
var G__20699 = expr__20696;
return (pred__20695.cljs$core$IFn$_invoke$arity$2 ? pred__20695.cljs$core$IFn$_invoke$arity$2(G__20698,G__20699) : pred__20695.call(null,G__20698,G__20699));
})())){
return (new com.stuartsierra.dependency.MapDependencyGraph(G__20691,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20700 = cljs.core.cst$kw$dependents;
var G__20701 = expr__20696;
return (pred__20695.cljs$core$IFn$_invoke$arity$2 ? pred__20695.cljs$core$IFn$_invoke$arity$2(G__20700,G__20701) : pred__20695.call(null,G__20700,G__20701));
})())){
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,G__20691,self__.__meta,self__.__extmap,null));
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10670__auto__,G__20691),null));
}
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10674__auto__){
var self__ = this;
var this__10674__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependencies,self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependents,self__.dependents],null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$ = true;

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependencies,cljs.core.PersistentHashSet.fromArray([node], true));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependencies,node_set);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependents,cljs.core.PersistentHashSet.fromArray([node], true));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependents,node_set);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(self__.dependencies)),cljs.core.set(cljs.core.keys(self__.dependents)));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10661__auto__,G__20691){
var self__ = this;
var this__10661__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__20691,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10667__auto__,entry__10668__auto__){
var self__ = this;
var this__10667__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10668__auto__)){
return cljs.core._assoc(this__10667__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10668__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10667__auto____$1,entry__10668__auto__);
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$ = true;

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__9992__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,dep);
if(or__9992__auto__){
return or__9992__auto__;
} else {
return (com.stuartsierra.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3 ? com.stuartsierra.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3(graph__$1,dep,node) : com.stuartsierra.dependency.depends_QMARK_.call(null,graph__$1,dep,node));
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Circular dependency between "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node], 0))),cljs.core.str(" and "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([dep], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$dependency_SLASH_circular_DASH_dependency,cljs.core.cst$kw$node,node,cljs.core.cst$kw$dependency,dep], null));
} else {
}

return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),com.stuartsierra.dependency.set_conj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),com.stuartsierra.dependency.set_conj,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(com.stuartsierra.dependency.remove_from_map(self__.dependencies,node),com.stuartsierra.dependency.remove_from_map(self__.dependents,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.dependencies,node),self__.dependents,null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$dependencies,cljs.core.cst$sym$dependents], null);
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$type = true;

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__10698__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__10698__auto__,writer__10699__auto__){
return cljs.core._write(writer__10699__auto__,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.__GT_MapDependencyGraph = (function com$stuartsierra$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new com.stuartsierra.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

com.stuartsierra.dependency.map__GT_MapDependencyGraph = (function com$stuartsierra$dependency$map__GT_MapDependencyGraph(G__20693){
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.cst$kw$dependencies.cljs$core$IFn$_invoke$arity$1(G__20693),cljs.core.cst$kw$dependents.cljs$core$IFn$_invoke$arity$1(G__20693),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20693,cljs.core.cst$kw$dependencies,cljs.core.array_seq([cljs.core.cst$kw$dependents], 0)),null));
});

/**
 * Returns a new, empty, dependency graph.
 */
com.stuartsierra.dependency.graph = (function com$stuartsierra$dependency$graph(){
return com.stuartsierra.dependency.__GT_MapDependencyGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * True if x is directly or transitively dependent on y.
 */
com.stuartsierra.dependency.depends_QMARK_ = (function com$stuartsierra$dependency$depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(com.stuartsierra.dependency.transitive_dependencies(graph,x),y);
});
/**
 * True if y is a dependent of x.
 */
com.stuartsierra.dependency.dependent_QMARK_ = (function com$stuartsierra$dependency$dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(com.stuartsierra.dependency.transitive_dependents(graph,x),y);
});
/**
 * Returns a topologically-sorted list of nodes in graph.
 */
com.stuartsierra.dependency.topo_sort = (function com$stuartsierra$dependency$topo_sort(graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sorted,g){
return (function (p1__20703_SHARP_){
return cljs.core.empty_QMARK_(com.stuartsierra.dependency.immediate_dependents(graph,p1__20703_SHARP_));
});})(sorted,g))
,com.stuartsierra.dependency.nodes(graph)));
while(true){
if(cljs.core.empty_QMARK_(todo)){
return sorted;
} else {
var vec__20710 = cljs.core.seq(todo);
var seq__20711 = cljs.core.seq(vec__20710);
var first__20712 = cljs.core.first(seq__20711);
var seq__20711__$1 = cljs.core.next(seq__20711);
var node = first__20712;
var more = seq__20711__$1;
var deps = com.stuartsierra.dependency.immediate_dependencies(g,node);
var vec__20713 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(deps__$1)){
var d = cljs.core.first(deps__$1);
var g_SINGLEQUOTE_ = com.stuartsierra.dependency.remove_edge(g__$1,node,d);
if(cljs.core.empty_QMARK_(com.stuartsierra.dependency.immediate_dependents(g_SINGLEQUOTE_,d))){
var G__20716 = cljs.core.rest(deps__$1);
var G__20717 = g_SINGLEQUOTE_;
var G__20718 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(add,d);
deps__$1 = G__20716;
g__$1 = G__20717;
add = G__20718;
continue;
} else {
var G__20719 = cljs.core.rest(deps__$1);
var G__20720 = g_SINGLEQUOTE_;
var G__20721 = add;
deps__$1 = G__20719;
g__$1 = G__20720;
add = G__20721;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20713,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20713,(1),null);
var G__20722 = cljs.core.cons(node,sorted);
var G__20723 = com.stuartsierra.dependency.remove_node(g_SINGLEQUOTE_,node);
var G__20724 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(more),cljs.core.set(add));
sorted = G__20722;
g = G__20723;
todo = G__20724;
continue;
}
break;
}
});
com.stuartsierra.dependency.max_number = Number.MAX_VALUE;
/**
 * Returns a comparator fn which produces a topological sort based on
 *   the dependencies in graph. Nodes not present in the graph will sort
 *   after nodes in the graph.
 */
com.stuartsierra.dependency.topo_comparator = (function com$stuartsierra$dependency$topo_comparator(graph){
var pos = cljs.core.zipmap(com.stuartsierra.dependency.topo_sort(graph),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return ((function (pos){
return (function (a,b){
return cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$3(pos,a,com.stuartsierra.dependency.max_number),cljs.core.get.cljs$core$IFn$_invoke$arity$3(pos,b,com.stuartsierra.dependency.max_number));
});
;})(pos))
});
