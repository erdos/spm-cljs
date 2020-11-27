// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs_spm.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('reagent.dom');
cljs_spm.core.window_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.core.enable_console_print_BANG_();
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.textarea_text !== 'undefined')){
} else {
cljs_spm.core.textarea_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
cljs_spm.core.maybe_number = (function cljs_spm$core$maybe_number(s){
var p = Number.parseFloat(s);
if(cljs.core.truth_(Number.isNaN(p))){
return s;
} else {
return p;
}
});
cljs_spm.core.model_parsed = reagent.ratom.make_reaction((function (){
var rows = clojure.string.split_lines(cljs.core.deref(cljs_spm.core.textarea_text));
var rows__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,",");
}),rows);
var header = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first(rows__$1)));
var rows__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs_spm.core.maybe_number),cljs.core.next(rows__$1));
var rows__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap,header),rows__$2);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rows,rows__$3,cljs.core.cst$kw$axis,header], null);
}));
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.view_opts !== 'undefined')){
} else {
cljs_spm.core.view_opts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enabled_DASH_axis,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$category,null], null));
}
cljs_spm.core.hist = (function cljs_spm$core$hist(var_args){
var G__13623 = arguments.length;
switch (G__13623) {
case 1:
return cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$2((function (){var x__4217__auto__ = (10);
var y__4218__auto__ = cljs.core.count(xs);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),xs);
}));

(cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$2 = (function (n,xs){
var m_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs);
var m_PLUS_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs);
var d = (m_PLUS_ - m_);
var w = (d / n);
var f = (function (x){
return (cljs.core.quot(((x - m_) - 1.0E-7),w) | (0));
});
var gs = cljs.core.group_by(f,xs);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,gs),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),n));
}));

(cljs_spm.core.hist.cljs$lang$maxFixedArity = 2);

cljs_spm.core.data = reagent.ratom.make_reaction((function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs_spm.core.model_parsed),cljs.core.cst$kw$axis,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.keep,cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts)))),cljs.core.cst$kw$min,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs_spm$core$iter__13625(s__13626){
return (new cljs.core.LazySeq(null,(function (){
var s__13626__$1 = s__13626;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13626__$1);
if(temp__5735__auto__){
var s__13626__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13626__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13626__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13628 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13627 = (0);
while(true){
if((i__13627 < size__4528__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13627);
cljs.core.chunk_append(b__13628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))], null));

var G__13643 = (i__13627 + (1));
i__13627 = G__13643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13628),cljs_spm$core$iter__13625(cljs.core.chunk_rest(s__13626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13628),null);
}
} else {
var a = cljs.core.first(s__13626__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))], null),cljs_spm$core$iter__13625(cljs.core.rest(s__13626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs_spm$core$iter__13629(s__13630){
return (new cljs.core.LazySeq(null,(function (){
var s__13630__$1 = s__13630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13630__$1);
if(temp__5735__auto__){
var s__13630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13630__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13630__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13632 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13631 = (0);
while(true){
if((i__13631 < size__4528__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13631);
cljs.core.chunk_append(b__13632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))], null));

var G__13644 = (i__13631 + (1));
i__13631 = G__13644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13632),cljs_spm$core$iter__13629(cljs.core.chunk_rest(s__13630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13632),null);
}
} else {
var a = cljs.core.first(s__13630__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))], null),cljs_spm$core$iter__13629(cljs.core.rest(s__13630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
})()),cljs.core.cst$kw$type,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs_spm$core$iter__13633(s__13634){
return (new cljs.core.LazySeq(null,(function (){
var s__13634__$1 = s__13634;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13634__$1);
if(temp__5735__auto__){
var s__13634__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13634__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13634__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13636 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13635 = (0);
while(true){
if((i__13635 < size__4528__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13635);
cljs.core.chunk_append(b__13636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((typeof (function (){var G__13637 = cljs.core.first(cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__13637) : a.call(null,G__13637));
})() === 'number')?cljs.core.cst$kw$numeric:cljs.core.cst$kw$scalar
)], null));

var G__13645 = (i__13635 + (1));
i__13635 = G__13645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13636),cljs_spm$core$iter__13633(cljs.core.chunk_rest(s__13634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13636),null);
}
} else {
var a = cljs.core.first(s__13634__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((typeof (function (){var G__13638 = cljs.core.first(cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__13638) : a.call(null,G__13638));
})() === 'number')?cljs.core.cst$kw$numeric:cljs.core.cst$kw$scalar
)], null),cljs_spm$core$iter__13633(cljs.core.rest(s__13634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
})()),cljs.core.cst$kw$hist,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs_spm$core$iter__13639(s__13640){
return (new cljs.core.LazySeq(null,(function (){
var s__13640__$1 = s__13640;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13640__$1);
if(temp__5735__auto__){
var s__13640__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13640__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13640__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13642 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13641 = (0);
while(true){
if((i__13641 < size__4528__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13641);
cljs.core.chunk_append(b__13642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))], null));

var G__13646 = (i__13641 + (1));
i__13641 = G__13646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13642),cljs_spm$core$iter__13639(cljs.core.chunk_rest(s__13640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13642),null);
}
} else {
var a = cljs.core.first(s__13640__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))], null),cljs_spm$core$iter__13639(cljs.core.rest(s__13640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
})())], 0));
}));
cljs_spm.core.canvas_size = reagent.ratom.make_reaction((function (){
return (((cljs.core.deref(cljs_spm.core.window_width) - (10)) / cljs.core.count(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data)))) - (30));
}));
cljs_spm.core.div_with_canvas = (function cljs_spm$core$div_with_canvas(draw_canvas_contents){
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _width = reagent.ratom.make_reaction((function (){
return cljs.core.deref(dom_node).firstChild.clientWidth;
}));
var _height = reagent.ratom.make_reaction((function (){
return cljs.core.deref(dom_node).firstChild.clientHeight;
}));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
var G__13648 = cljs.core.deref(dom_node).firstChild.getContext("2d");
var G__13649 = cljs.core.deref(cljs_spm.core.canvas_size);
var G__13650 = cljs.core.deref(cljs_spm.core.canvas_size);
return (draw_canvas_contents.cljs$core$IFn$_invoke$arity$3 ? draw_canvas_contents.cljs$core$IFn$_invoke$arity$3(G__13648,G__13649,G__13650) : draw_canvas_contents.call(null,G__13648,G__13649,G__13650));
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__13647_SHARP_){
return cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(p1__13647_SHARP_));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
cljs.core.deref(cljs_spm.core.canvas_size);

cljs.core.deref(cljs_spm.core.view_opts);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$with_DASH_canvas,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,(function (){var temp__5735__auto__ = cljs.core.deref(dom_node);
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.deref(cljs_spm.core.canvas_size),cljs.core.cst$kw$height,cljs.core.deref(cljs_spm.core.canvas_size)], null);
} else {
return null;
}
})()], null)], null);
})], null));
});
cljs_spm.core.on_window_resize = (function cljs_spm$core$on_window_resize(evt){
return cljs.core.reset_BANG_(cljs_spm.core.window_width,window.innerWidth);
});
cljs_spm.core.colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","red","blue","yellow","lime","purple","pink","brown"], null);
cljs_spm.core.render_table_fn = (function cljs_spm$core$render_table_fn(x_col,y_col,ctx,w,h){
var off_x = (function (){var G__13651 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (x_col.cljs$core$IFn$_invoke$arity$1 ? x_col.cljs$core$IFn$_invoke$arity$1(G__13651) : x_col.call(null,G__13651));
})();
var off_y = (function (){var G__13652 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (y_col.cljs$core$IFn$_invoke$arity$1 ? y_col.cljs$core$IFn$_invoke$arity$1(G__13652) : y_col.call(null,G__13652));
})();
var x_width = ((function (){var G__13653 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (x_col.cljs$core$IFn$_invoke$arity$1 ? x_col.cljs$core$IFn$_invoke$arity$1(G__13653) : x_col.call(null,G__13653));
})() - off_x);
var y_width = ((function (){var G__13654 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (y_col.cljs$core$IFn$_invoke$arity$1 ? y_col.cljs$core$IFn$_invoke$arity$1(G__13654) : y_col.call(null,G__13654));
})() - off_y);
var scale_x = (cljs.core.deref(cljs_spm.core.canvas_size) / x_width);
var scale_y = (cljs.core.deref(cljs_spm.core.canvas_size) / y_width);
var colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_spm.core.colors);
var colors__$1 = cljs.core.memoize((function (c){
return cljs.core.first(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(colors,cljs.core.next));
}));
var seq__13655 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(x_col,y_col,((function (off_x,off_y,x_width,y_width,scale_x,scale_y,colors,colors__$1){
return (function (row){
var G__13666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts)));
return (colors__$1.cljs$core$IFn$_invoke$arity$1 ? colors__$1.cljs$core$IFn$_invoke$arity$1(G__13666) : colors__$1.call(null,G__13666));
});})(off_x,off_y,x_width,y_width,scale_x,scale_y,colors,colors__$1))
),cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))));
var chunk__13656 = null;
var count__13657 = (0);
var i__13658 = (0);
while(true){
if((i__13658 < count__13657)){
var vec__13667 = chunk__13656.cljs$core$IIndexed$_nth$arity$2(null,i__13658);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13667,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13667,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13667,(2),null);
(ctx.fillStyle = c);

ctx.fillRect((scale_x * (x - off_x)),(scale_y * (y - off_y)),(10),(10));


var G__13673 = seq__13655;
var G__13674 = chunk__13656;
var G__13675 = count__13657;
var G__13676 = (i__13658 + (1));
seq__13655 = G__13673;
chunk__13656 = G__13674;
count__13657 = G__13675;
i__13658 = G__13676;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13655);
if(temp__5735__auto__){
var seq__13655__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13655__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13655__$1);
var G__13677 = cljs.core.chunk_rest(seq__13655__$1);
var G__13678 = c__4556__auto__;
var G__13679 = cljs.core.count(c__4556__auto__);
var G__13680 = (0);
seq__13655 = G__13677;
chunk__13656 = G__13678;
count__13657 = G__13679;
i__13658 = G__13680;
continue;
} else {
var vec__13670 = cljs.core.first(seq__13655__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(2),null);
(ctx.fillStyle = c);

ctx.fillRect((scale_x * (x - off_x)),(scale_y * (y - off_y)),(10),(10));


var G__13681 = cljs.core.next(seq__13655__$1);
var G__13682 = null;
var G__13683 = (0);
var G__13684 = (0);
seq__13655 = G__13681;
chunk__13656 = G__13682;
count__13657 = G__13683;
i__13658 = G__13684;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_spm.core.render_table_histogram = (function cljs_spm$core$render_table_histogram(y_col,ctx,w,h){
var buckets = (function (){var G__13685 = cljs.core.cst$kw$hist.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (y_col.cljs$core$IFn$_invoke$arity$1 ? y_col.cljs$core$IFn$_invoke$arity$1(G__13685) : y_col.call(null,G__13685));
})();
var x_width = (cljs.core.deref(cljs_spm.core.canvas_size) / cljs.core.count(buckets));
var off_y = (0);
var scale_y = ((cljs.core.deref(cljs_spm.core.canvas_size) - (5)) / (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,buckets) - off_y));
(ctx.fillStyle = "silver");

var seq__13686 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,buckets));
var chunk__13688 = null;
var count__13689 = (0);
var i__13690 = (0);
while(true){
if((i__13690 < count__13689)){
var vec__13698 = chunk__13688.cljs$core$IIndexed$_nth$arity$2(null,i__13690);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(0),null);
var bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(1),null);
var height_13704 = (scale_y * (bucket - off_y));
ctx.fillRect((x_width * i),(cljs.core.deref(cljs_spm.core.canvas_size) - height_13704),x_width,height_13704);


var G__13705 = seq__13686;
var G__13706 = chunk__13688;
var G__13707 = count__13689;
var G__13708 = (i__13690 + (1));
seq__13686 = G__13705;
chunk__13688 = G__13706;
count__13689 = G__13707;
i__13690 = G__13708;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13686);
if(temp__5735__auto__){
var seq__13686__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13686__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13686__$1);
var G__13709 = cljs.core.chunk_rest(seq__13686__$1);
var G__13710 = c__4556__auto__;
var G__13711 = cljs.core.count(c__4556__auto__);
var G__13712 = (0);
seq__13686 = G__13709;
chunk__13688 = G__13710;
count__13689 = G__13711;
i__13690 = G__13712;
continue;
} else {
var vec__13701 = cljs.core.first(seq__13686__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(0),null);
var bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(1),null);
var height_13713 = (scale_y * (bucket - off_y));
ctx.fillRect((x_width * i),(cljs.core.deref(cljs_spm.core.canvas_size) - height_13713),x_width,height_13713);


var G__13714 = cljs.core.next(seq__13686__$1);
var G__13715 = null;
var G__13716 = (0);
var G__13717 = (0);
seq__13686 = G__13714;
chunk__13688 = G__13715;
count__13689 = G__13716;
i__13690 = G__13717;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_spm.core.render_table = (function cljs_spm$core$render_table(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$render_table_$_iter__13718(s__13719){
return (new cljs.core.LazySeq(null,(function (){
var s__13719__$1 = s__13719;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13719__$1);
if(temp__5735__auto__){
var s__13719__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13719__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13719__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13721 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13720 = (0);
while(true){
if((i__13720 < size__4528__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13720);
cljs.core.chunk_append(b__13721,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,col], null),cljs.core.name(col),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small,"(",(function (){var G__13722 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13722) : col.call(null,G__13722));
})(),"-",(function (){var G__13723 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13723) : col.call(null,G__13723));
})(),")"], null)], null)], null));

var G__13756 = (i__13720 + (1));
i__13720 = G__13756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13721),cljs_spm$core$render_table_$_iter__13718(cljs.core.chunk_rest(s__13719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13721),null);
}
} else {
var col = cljs.core.first(s__13719__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,col], null),cljs.core.name(col),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small,"(",(function (){var G__13724 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13724) : col.call(null,G__13724));
})(),"-",(function (){var G__13725 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13725) : col.call(null,G__13725));
})(),")"], null)], null)], null),cljs_spm$core$render_table_$_iter__13718(cljs.core.rest(s__13719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data)));
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$render_table_$_iter__13726(s__13727){
return (new cljs.core.LazySeq(null,(function (){
var s__13727__$1 = s__13727;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13727__$1);
if(temp__5735__auto__){
var s__13727__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13727__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13727__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13729 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13728 = (0);
while(true){
if((i__13728 < size__4528__auto__)){
var vec__13730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13728);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(0),null);
var x_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(1),null);
cljs.core.chunk_append(b__13729,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["col",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col)].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__13728,vec__13730,i,x_col,c__4527__auto__,size__4528__auto__,b__13729,s__13727__$2,temp__5735__auto__){
return (function cljs_spm$core$render_table_$_iter__13726_$_iter__13733(s__13734){
return (new cljs.core.LazySeq(null,((function (i__13728,vec__13730,i,x_col,c__4527__auto__,size__4528__auto__,b__13729,s__13727__$2,temp__5735__auto__){
return (function (){
var s__13734__$1 = s__13734;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13734__$1);
if(temp__5735__auto____$1){
var s__13734__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13734__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__13734__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__13736 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__13735 = (0);
while(true){
if((i__13735 < size__4528__auto____$1)){
var vec__13737 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__13735);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13737,(1),null);
cljs.core.chunk_append(b__13736,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null));

var G__13757 = (i__13735 + (1));
i__13735 = G__13757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13736),cljs_spm$core$render_table_$_iter__13726_$_iter__13733(cljs.core.chunk_rest(s__13734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13736),null);
}
} else {
var vec__13740 = cljs.core.first(s__13734__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13740,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13740,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null),cljs_spm$core$render_table_$_iter__13726_$_iter__13733(cljs.core.rest(s__13734__$2)));
}
} else {
return null;
}
break;
}
});})(i__13728,vec__13730,i,x_col,c__4527__auto__,size__4528__auto__,b__13729,s__13727__$2,temp__5735__auto__))
,null,null));
});})(i__13728,vec__13730,i,x_col,c__4527__auto__,size__4528__auto__,b__13729,s__13727__$2,temp__5735__auto__))
;
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))));
})())], null));

var G__13758 = (i__13728 + (1));
i__13728 = G__13758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13729),cljs_spm$core$render_table_$_iter__13726(cljs.core.chunk_rest(s__13727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13729),null);
}
} else {
var vec__13743 = cljs.core.first(s__13727__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13743,(0),null);
var x_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13743,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["col",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col)].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__13743,i,x_col,s__13727__$2,temp__5735__auto__){
return (function cljs_spm$core$render_table_$_iter__13726_$_iter__13746(s__13747){
return (new cljs.core.LazySeq(null,(function (){
var s__13747__$1 = s__13747;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13747__$1);
if(temp__5735__auto____$1){
var s__13747__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13747__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13747__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13749 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13748 = (0);
while(true){
if((i__13748 < size__4528__auto__)){
var vec__13750 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13748);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13750,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13750,(1),null);
cljs.core.chunk_append(b__13749,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null));

var G__13759 = (i__13748 + (1));
i__13748 = G__13759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13749),cljs_spm$core$render_table_$_iter__13726_$_iter__13746(cljs.core.chunk_rest(s__13747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13749),null);
}
} else {
var vec__13753 = cljs.core.first(s__13747__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13753,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13753,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null),cljs_spm$core$render_table_$_iter__13726_$_iter__13746(cljs.core.rest(s__13747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__13743,i,x_col,s__13727__$2,temp__5735__auto__))
;
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))));
})())], null),cljs_spm$core$render_table_$_iter__13726(cljs.core.rest(s__13727__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))));
})())], null)], null);
});
cljs_spm.core.load_url = (function cljs_spm$core$load_url(url){
return fetch(url).then((function (response){
return response.text();
})).then((function (txt){
return cljs.core.reset_BANG_(cljs_spm.core.textarea_text,txt);
})).then((function (_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success loaded",url], 0));
}));
});
cljs_spm.core.csv_box = (function cljs_spm$core$csv_box(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"1. Data Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Enter the dataset CSV in the text box or load an example dataset:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"1em",cljs.core.cst$kw$background,"#fff3f9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs_spm.core.load_url("https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv");
})], null),"Load Iris dataset"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs_spm.core.load_url("https://raw.githubusercontent.com/selva86/datasets/master/seeds.csv");
})], null),"Load Wheat Seeds dataset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(11),cljs.core.cst$kw$on_DASH_change,(function (p1__13760_SHARP_){
return cljs.core.reset_BANG_(cljs_spm.core.textarea_text,p1__13760_SHARP_.target.value);
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$resize,"none",cljs.core.cst$kw$width,"90%",cljs.core.cst$kw$display,"block",cljs.core.cst$kw$overflow,"auto"], null),cljs.core.cst$kw$value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.textarea_text))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))," rows"], null)], null);
});
cljs_spm.core.opts_box = (function cljs_spm$core$opts_box(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"2. Display options"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Dimensions:"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$opts_box_$_iter__13761(s__13762){
return (new cljs.core.LazySeq(null,(function (){
var s__13762__$1 = s__13762;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13762__$1);
if(temp__5735__auto__){
var s__13762__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13762__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13762__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13764 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13763 = (0);
while(true){
if((i__13763 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13763);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$numeric,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_spm.core.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,i], null)))){
cljs.core.chunk_append(b__13764,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0.2em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$defaultChecked,cljs.core.boolean$((function (){var G__13765 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13765) : i.call(null,G__13765));
})()),cljs.core.cst$kw$on_DASH_change,((function (i__13763,s__13762__$1,i,c__4527__auto__,size__4528__auto__,b__13764,s__13762__$2,temp__5735__auto__){
return (function (e){
if(cljs.core.truth_(e.target.checked)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
}
});})(i__13763,s__13762__$1,i,c__4527__auto__,size__4528__auto__,b__13764,s__13762__$2,temp__5735__auto__))
], null)], null),cljs.core.name(i)], null));

var G__13774 = (i__13763 + (1));
i__13763 = G__13774;
continue;
} else {
var G__13775 = (i__13763 + (1));
i__13763 = G__13775;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13764),cljs_spm$core$opts_box_$_iter__13761(cljs.core.chunk_rest(s__13762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13764),null);
}
} else {
var i = cljs.core.first(s__13762__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$numeric,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_spm.core.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,i], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0.2em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$defaultChecked,cljs.core.boolean$((function (){var G__13766 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13766) : i.call(null,G__13766));
})()),cljs.core.cst$kw$on_DASH_change,((function (s__13762__$1,i,s__13762__$2,temp__5735__auto__){
return (function (e){
if(cljs.core.truth_(e.target.checked)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
}
});})(s__13762__$1,i,s__13762__$2,temp__5735__auto__))
], null)], null),cljs.core.name(i)], null),cljs_spm$core$opts_box_$_iter__13761(cljs.core.rest(s__13762__$2)));
} else {
var G__13776 = cljs.core.rest(s__13762__$2);
s__13762__$1 = G__13776;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Category: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_spm.core.view_opts,cljs.core.assoc,cljs.core.cst$kw$category,(function (){var G__13767 = e;
var G__13767__$1 = (((G__13767 == null))?null:G__13767.target);
var G__13767__$2 = (((G__13767__$1 == null))?null:G__13767__$1.value);
var G__13767__$3 = (((G__13767__$2 == null))?null:cljs.core.not_empty(G__13767__$2));
if((G__13767__$3 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__13767__$3);
}
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,""], null),"No Category"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$opts_box_$_iter__13768(s__13769){
return (new cljs.core.LazySeq(null,(function (){
var s__13769__$1 = s__13769;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13769__$1);
if(temp__5735__auto__){
var s__13769__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13769__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13769__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13771 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13770 = (0);
while(true){
if((i__13770 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13770);
if(cljs.core.not((function (){var G__13772 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13772) : i.call(null,G__13772));
})())){
cljs.core.chunk_append(b__13771,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$value,cljs.core.name(i)], null),cljs.core.name(i)], null));

var G__13777 = (i__13770 + (1));
i__13770 = G__13777;
continue;
} else {
var G__13778 = (i__13770 + (1));
i__13770 = G__13778;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13771),cljs_spm$core$opts_box_$_iter__13768(cljs.core.chunk_rest(s__13769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13771),null);
}
} else {
var i = cljs.core.first(s__13769__$2);
if(cljs.core.not((function (){var G__13773 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13773) : i.call(null,G__13773));
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$value,cljs.core.name(i)], null),cljs.core.name(i)], null),cljs_spm$core$opts_box_$_iter__13768(cljs.core.rest(s__13769__$2)));
} else {
var G__13779 = cljs.core.rest(s__13769__$2);
s__13769__$1 = G__13779;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
})())], null)], null)], null);
});
cljs_spm.core.application = (function cljs_spm$core$application(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.csv_box], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.opts_box], null):null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.render_table], null):null)], null);
});
cljs_spm.core.on_window_load = (function cljs_spm$core$on_window_load(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.application], null),document.getElementById("app"));

window.addEventListener("resize",cljs_spm.core.on_window_resize);

return cljs_spm.core.on_window_resize(null);
});
goog.exportSymbol('cljs_spm.core.on_window_load', cljs_spm.core.on_window_load);
(window.onload = cljs_spm.core.on_window_load);
cljs_spm.core.on_js_reload = (function cljs_spm$core$on_js_reload(){
return null;
});
