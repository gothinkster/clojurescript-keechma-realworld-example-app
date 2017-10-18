// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('com.stuartsierra.dependency');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.immediate_dependencies[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto__.call(null,graph,node));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.immediate_dependencies["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto____$1.call(null,graph,node));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.immediate_dependents[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto__.call(null,graph,node));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.immediate_dependents["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto____$1.call(null,graph,node));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.transitive_dependencies[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto__.call(null,graph,node));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto____$1.call(null,graph,node));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.transitive_dependencies_set[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__12248__auto__.call(null,graph,node_set));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies_set["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__12248__auto____$1.call(null,graph,node_set));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.transitive_dependents[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto__.call(null,graph,node));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.transitive_dependents["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto____$1.call(null,graph,node));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.transitive_dependents_set[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__12248__auto__.call(null,graph,node_set));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.transitive_dependents_set["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node_set) : m__12248__auto____$1.call(null,graph,node_set));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.nodes[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$1(graph) : m__12248__auto__.call(null,graph));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.nodes["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$1(graph) : m__12248__auto____$1.call(null,graph));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.depend[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__12248__auto__.call(null,graph,node,dep));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.depend["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__12248__auto____$1.call(null,graph,node,dep));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.remove_edge[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__12248__auto__.call(null,graph,node,dep));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.remove_edge["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__12248__auto____$1.call(null,graph,node,dep));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.remove_all[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto__.call(null,graph,node));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.remove_all["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto____$1.call(null,graph,node));
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
var x__12247__auto__ = (((graph == null))?null:graph);
var m__12248__auto__ = (com.stuartsierra.dependency.remove_node[goog.typeOf(x__12247__auto__)]);
if(!((m__12248__auto__ == null))){
return (m__12248__auto__.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto__.call(null,graph,node));
} else {
var m__12248__auto____$1 = (com.stuartsierra.dependency.remove_node["_"]);
if(!((m__12248__auto____$1 == null))){
return (m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__12248__auto____$1.cljs$core$IFn$_invoke$arity$2(graph,node) : m__12248__auto____$1.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-node",graph);
}
}
}
});

com.stuartsierra.dependency.remove_from_map = (function com$stuartsierra$dependency$remove_from_map(amap,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__21140){
var vec__21141 = p__21140;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21141,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21141,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get neighbors x), for each x in node-set
 */
com.stuartsierra.dependency.transitive = (function com$stuartsierra$dependency$transitive(neighbors,node_set){
var unexpanded = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(neighbors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_set], 0));
var expanded = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5276__auto__ = cljs.core.seq(unexpanded);
if(temp__5276__auto__){
var vec__21144 = temp__5276__auto__;
var seq__21145 = cljs.core.seq(vec__21144);
var first__21146 = cljs.core.first(seq__21145);
var seq__21145__$1 = cljs.core.next(seq__21145);
var node = first__21146;
var more = seq__21145__$1;
if(cljs.core.contains_QMARK_(expanded,node)){
var G__21147 = more;
var G__21148 = expanded;
unexpanded = G__21147;
expanded = G__21148;
continue;
} else {
var G__21149 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,(neighbors.cljs$core$IFn$_invoke$arity$1 ? neighbors.cljs$core$IFn$_invoke$arity$1(node) : neighbors.call(null,node)));
var G__21150 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded,node);
unexpanded = G__21149;
expanded = G__21150;
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
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12202__auto__,k__12203__auto__){
var self__ = this;
var this__12202__auto____$1 = this;
return this__12202__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__12203__auto__,null);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12204__auto__,k21152,else__12205__auto__){
var self__ = this;
var this__12204__auto____$1 = this;
var G__21156 = k21152;
var G__21156__$1 = (((G__21156 instanceof cljs.core.Keyword))?G__21156.fqn:null);
switch (G__21156__$1) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21152,else__12205__auto__);

}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12216__auto__,writer__12217__auto__,opts__12218__auto__){
var self__ = this;
var this__12216__auto____$1 = this;
var pr_pair__12219__auto__ = ((function (this__12216__auto____$1){
return (function (keyval__12220__auto__){
return cljs.core.pr_sequential_writer(writer__12217__auto__,cljs.core.pr_writer,""," ","",opts__12218__auto__,keyval__12220__auto__);
});})(this__12216__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12217__auto__,pr_pair__12219__auto__,"#com.stuartsierra.dependency.MapDependencyGraph{",", ","}",opts__12218__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependencies,self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependents,self__.dependents],null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21151){
var self__ = this;
var G__21151__$1 = this;
return (new cljs.core.RecordIter((0),G__21151__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependencies,cljs.core.cst$kw$dependents], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12200__auto__){
var self__ = this;
var this__12200__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12197__auto__){
var self__ = this;
var this__12197__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12206__auto__){
var self__ = this;
var this__12206__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12198__auto__){
var self__ = this;
var this__12198__auto____$1 = this;
var h__11970__auto__ = self__.__hash;
if(!((h__11970__auto__ == null))){
return h__11970__auto__;
} else {
var h__11970__auto____$1 = (function (){var fexpr__21157 = ((function (h__11970__auto__,this__12198__auto____$1){
return (function (coll__12199__auto__){
return (1526449397 ^ cljs.core.hash_unordered_coll(coll__12199__auto__));
});})(h__11970__auto__,this__12198__auto____$1))
;
return fexpr__21157(this__12198__auto____$1);
})();
self__.__hash = h__11970__auto____$1;

return h__11970__auto____$1;
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21153,other21154){
var self__ = this;
var this21153__$1 = this;
return (!((other21154 == null))) && ((this21153__$1.constructor === other21154.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21153__$1.dependencies,other21154.dependencies)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21153__$1.dependents,other21154.dependents)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21153__$1.__extmap,other21154.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12211__auto__,k__12212__auto__){
var self__ = this;
var this__12211__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dependents,null,cljs.core.cst$kw$dependencies,null], null), null),k__12212__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12211__auto____$1),self__.__meta),k__12212__auto__);
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12212__auto__)),null));
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12209__auto__,k__12210__auto__,G__21151){
var self__ = this;
var this__12209__auto____$1 = this;
var pred__21158 = cljs.core.keyword_identical_QMARK_;
var expr__21159 = k__12210__auto__;
if(cljs.core.truth_((function (){var G__21161 = cljs.core.cst$kw$dependencies;
var G__21162 = expr__21159;
return (pred__21158.cljs$core$IFn$_invoke$arity$2 ? pred__21158.cljs$core$IFn$_invoke$arity$2(G__21161,G__21162) : pred__21158.call(null,G__21161,G__21162));
})())){
return (new com.stuartsierra.dependency.MapDependencyGraph(G__21151,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21163 = cljs.core.cst$kw$dependents;
var G__21164 = expr__21159;
return (pred__21158.cljs$core$IFn$_invoke$arity$2 ? pred__21158.cljs$core$IFn$_invoke$arity$2(G__21163,G__21164) : pred__21158.call(null,G__21163,G__21164));
})())){
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,G__21151,self__.__meta,self__.__extmap,null));
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12210__auto__,G__21151),null));
}
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12214__auto__){
var self__ = this;
var this__12214__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependencies,self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dependents,self__.dependents],null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$ = cljs.core.PROTOCOL_SENTINEL;

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
return com.stuartsierra.dependency.transitive(self__.dependencies,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependencies,node_set);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependents,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
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

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12201__auto__,G__21151){
var self__ = this;
var this__12201__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__21151,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12207__auto__,entry__12208__auto__){
var self__ = this;
var this__12207__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12208__auto__)){
return this__12207__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12208__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12207__auto____$1,entry__12208__auto__);
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__11514__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,dep);
if(or__11514__auto__){
return or__11514__auto__;
} else {
return (com.stuartsierra.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3 ? com.stuartsierra.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3(graph__$1,dep,node) : com.stuartsierra.dependency.depends_QMARK_.call(null,graph__$1,dep,node));
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Circular dependency between "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dep], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$dependency_SLASH_circular_DASH_dependency,cljs.core.cst$kw$node,node,cljs.core.cst$kw$dependency,dep], null));
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

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__12240__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__12240__auto__,writer__12241__auto__){
return cljs.core._write(writer__12241__auto__,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.__GT_MapDependencyGraph = (function com$stuartsierra$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new com.stuartsierra.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

com.stuartsierra.dependency.map__GT_MapDependencyGraph = (function com$stuartsierra$dependency$map__GT_MapDependencyGraph(G__21155){
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.cst$kw$dependencies.cljs$core$IFn$_invoke$arity$1(G__21155),cljs.core.cst$kw$dependents.cljs$core$IFn$_invoke$arity$1(G__21155),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21155,cljs.core.cst$kw$dependencies,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dependents], 0))),null));
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
return (function (p1__21166_SHARP_){
return cljs.core.empty_QMARK_(com.stuartsierra.dependency.immediate_dependents(graph,p1__21166_SHARP_));
});})(sorted,g))
,com.stuartsierra.dependency.nodes(graph)));
while(true){
if(cljs.core.empty_QMARK_(todo)){
return sorted;
} else {
var vec__21167 = cljs.core.seq(todo);
var seq__21168 = cljs.core.seq(vec__21167);
var first__21169 = cljs.core.first(seq__21168);
var seq__21168__$1 = cljs.core.next(seq__21168);
var node = first__21169;
var more = seq__21168__$1;
var deps = com.stuartsierra.dependency.immediate_dependencies(g,node);
var vec__21170 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(deps__$1)){
var d = cljs.core.first(deps__$1);
var g_SINGLEQUOTE_ = com.stuartsierra.dependency.remove_edge(g__$1,node,d);
if(cljs.core.empty_QMARK_(com.stuartsierra.dependency.immediate_dependents(g_SINGLEQUOTE_,d))){
var G__21173 = cljs.core.rest(deps__$1);
var G__21174 = g_SINGLEQUOTE_;
var G__21175 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(add,d);
deps__$1 = G__21173;
g__$1 = G__21174;
add = G__21175;
continue;
} else {
var G__21176 = cljs.core.rest(deps__$1);
var G__21177 = g_SINGLEQUOTE_;
var G__21178 = add;
deps__$1 = G__21176;
g__$1 = G__21177;
add = G__21178;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21170,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21170,(1),null);
var G__21179 = cljs.core.cons(node,sorted);
var G__21180 = com.stuartsierra.dependency.remove_node(g_SINGLEQUOTE_,node);
var G__21181 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(more),cljs.core.set(add));
sorted = G__21179;
g = G__21180;
todo = G__21181;
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
