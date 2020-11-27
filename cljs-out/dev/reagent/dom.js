// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__13566 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__13567 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__13567);

try{var G__13568 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__13569 = container;
var G__13570 = (function (){
var _STAR_always_update_STAR__orig_val__13571 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__13572 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__13572);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__13571);
}});
return reagent.dom.global$module$react_dom.render(G__13568,G__13569,G__13570);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__13566);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__13574 = arguments.length;
switch (G__13574) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__13575 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__13579_13595 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__13580_13596 = null;
var count__13581_13597 = (0);
var i__13582_13598 = (0);
while(true){
if((i__13582_13598 < count__13581_13597)){
var vec__13589_13599 = chunk__13580_13596.cljs$core$IIndexed$_nth$arity$2(null,i__13582_13598);
var container_13600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13589_13599,(0),null);
var comp_13601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13589_13599,(1),null);
reagent.dom.re_render_component(comp_13601,container_13600);


var G__13602 = seq__13579_13595;
var G__13603 = chunk__13580_13596;
var G__13604 = count__13581_13597;
var G__13605 = (i__13582_13598 + (1));
seq__13579_13595 = G__13602;
chunk__13580_13596 = G__13603;
count__13581_13597 = G__13604;
i__13582_13598 = G__13605;
continue;
} else {
var temp__5735__auto___13606 = cljs.core.seq(seq__13579_13595);
if(temp__5735__auto___13606){
var seq__13579_13607__$1 = temp__5735__auto___13606;
if(cljs.core.chunked_seq_QMARK_(seq__13579_13607__$1)){
var c__4556__auto___13608 = cljs.core.chunk_first(seq__13579_13607__$1);
var G__13609 = cljs.core.chunk_rest(seq__13579_13607__$1);
var G__13610 = c__4556__auto___13608;
var G__13611 = cljs.core.count(c__4556__auto___13608);
var G__13612 = (0);
seq__13579_13595 = G__13609;
chunk__13580_13596 = G__13610;
count__13581_13597 = G__13611;
i__13582_13598 = G__13612;
continue;
} else {
var vec__13592_13613 = cljs.core.first(seq__13579_13607__$1);
var container_13614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13592_13613,(0),null);
var comp_13615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13592_13613,(1),null);
reagent.dom.re_render_component(comp_13615,container_13614);


var G__13616 = cljs.core.next(seq__13579_13607__$1);
var G__13617 = null;
var G__13618 = (0);
var G__13619 = (0);
seq__13579_13595 = G__13616;
chunk__13580_13596 = G__13617;
count__13581_13597 = G__13618;
i__13582_13598 = G__13619;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
