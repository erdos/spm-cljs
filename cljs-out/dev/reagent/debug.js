// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12974__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12975__i = 0, G__12975__a = new Array(arguments.length -  0);
while (G__12975__i < G__12975__a.length) {G__12975__a[G__12975__i] = arguments[G__12975__i + 0]; ++G__12975__i;}
  args = new cljs.core.IndexedSeq(G__12975__a,0,null);
} 
return G__12974__delegate.call(this,args);};
G__12974.cljs$lang$maxFixedArity = 0;
G__12974.cljs$lang$applyTo = (function (arglist__12976){
var args = cljs.core.seq(arglist__12976);
return G__12974__delegate(args);
});
G__12974.cljs$core$IFn$_invoke$arity$variadic = G__12974__delegate;
return G__12974;
})()
);

(o.error = (function() { 
var G__12977__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12978__i = 0, G__12978__a = new Array(arguments.length -  0);
while (G__12978__i < G__12978__a.length) {G__12978__a[G__12978__i] = arguments[G__12978__i + 0]; ++G__12978__i;}
  args = new cljs.core.IndexedSeq(G__12978__a,0,null);
} 
return G__12977__delegate.call(this,args);};
G__12977.cljs$lang$maxFixedArity = 0;
G__12977.cljs$lang$applyTo = (function (arglist__12979){
var args = cljs.core.seq(arglist__12979);
return G__12977__delegate(args);
});
G__12977.cljs$core$IFn$_invoke$arity$variadic = G__12977__delegate;
return G__12977;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
