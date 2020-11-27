// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs_spm.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('reagent.dom');
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.window_width !== 'undefined')){
} else {
cljs_spm.core.window_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
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
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.model_parsed !== 'undefined')){
} else {
cljs_spm.core.model_parsed = reagent.ratom.make_reaction((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parsing text"], 0));

var rows = clojure.string.split_lines(cljs.core.deref(cljs_spm.core.textarea_text));
var rows__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,",");
}),rows);
var header = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first(rows__$1)));
var rows__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs_spm.core.maybe_number),cljs.core.next(rows__$1));
var rows__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap,header),rows__$2);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rows,rows__$3,cljs.core.cst$kw$axis,header], null);
}));
}
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.view_opts !== 'undefined')){
} else {
cljs_spm.core.view_opts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enabled_DASH_axis,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$category,null], null));
}
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.active_category !== 'undefined')){
} else {
cljs_spm.core.active_category = reagent.core.cursor(cljs_spm.core.view_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$category], null));
}
cljs_spm.core.hist = (function cljs_spm$core$hist(var_args){
var G__13623 = arguments.length;
switch (G__13623) {
case 1:
return cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs),xs);
}));

(cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$3 = (function (m_,m_PLUS_,xs){
var n = (function (){var x__4217__auto__ = (10);
var y__4218__auto__ = cljs.core.count(xs);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var d = (m_PLUS_ - m_);
var w = (d / n);
var f = (function (x){
return (cljs.core.quot(((x - m_) - 1.0E-7),w) | (0));
});
var gs = cljs.core.group_by(f,xs);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,gs),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),n));
}));

(cljs_spm.core.hist.cljs$lang$maxFixedArity = 3);

if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.data_PLUS_stats !== 'undefined')){
} else {
cljs_spm.core.data_PLUS_stats = reagent.ratom.make_reaction((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Recalculating data stats and histograms"], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(cljs_spm.core.model_parsed),cljs.core.cst$kw$min,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs_spm$core$iter__13625(s__13626){
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
}
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.data !== 'undefined')){
} else {
cljs_spm.core.data = reagent.ratom.make_reaction((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Recalculate enabled axis"], 0));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs_spm.core.data_PLUS_stats),cljs.core.cst$kw$axis,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.keep,cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts))));
}));
}
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.axis_category_hist !== 'undefined')){
} else {
cljs_spm.core.axis_category_hist = reagent.ratom.make_reaction((function (){
var minimum = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data_PLUS_stats));
var maximum = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data_PLUS_stats));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13647){
var vec__13648 = p__13647;
var vec__13651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13648,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13651,(0),null);
var cat_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13651,(1),null);
var kvs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13648,(1),null);
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,cat_val], null),cljs_spm.core.hist.cljs$core$IFn$_invoke$arity$3((minimum.cljs$core$IFn$_invoke$arity$1 ? minimum.cljs$core$IFn$_invoke$arity$1(col) : minimum.call(null,col)),(maximum.cljs$core$IFn$_invoke$arity$1 ? maximum.cljs$core$IFn$_invoke$arity$1(col) : maximum.call(null,col)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,kvs)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.first,(function (){var iter__4529__auto__ = (function cljs_spm$core$iter__13654(s__13655){
return (new cljs.core.LazySeq(null,(function (){
var s__13655__$1 = s__13655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13655__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var row = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__13655__$1,row,xs__6292__auto__,temp__5735__auto__,minimum,maximum){
return (function cljs_spm$core$iter__13654_$_iter__13656(s__13657){
return (new cljs.core.LazySeq(null,((function (s__13655__$1,row,xs__6292__auto__,temp__5735__auto__,minimum,maximum){
return (function (){
var s__13657__$1 = s__13657;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13657__$1);
if(temp__5735__auto____$1){
var s__13657__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13657__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13657__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13659 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13658 = (0);
while(true){
if((i__13658 < size__4528__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13658);
cljs.core.chunk_append(b__13659,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,cljs.core.deref(cljs_spm.core.active_category))], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,a)], null));

var G__13660 = (i__13658 + (1));
i__13658 = G__13660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13659),cljs_spm$core$iter__13654_$_iter__13656(cljs.core.chunk_rest(s__13657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13659),null);
}
} else {
var a = cljs.core.first(s__13657__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,cljs.core.deref(cljs_spm.core.active_category))], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,a)], null),cljs_spm$core$iter__13654_$_iter__13656(cljs.core.rest(s__13657__$2)));
}
} else {
return null;
}
break;
}
});})(s__13655__$1,row,xs__6292__auto__,temp__5735__auto__,minimum,maximum))
,null,null));
});})(s__13655__$1,row,xs__6292__auto__,temp__5735__auto__,minimum,maximum))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,cljs_spm$core$iter__13654(cljs.core.rest(s__13655__$1)));
} else {
var G__13661 = cljs.core.rest(s__13655__$1);
s__13655__$1 = G__13661;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
})()));
}));
}
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.canvas_size !== 'undefined')){
} else {
cljs_spm.core.canvas_size = reagent.ratom.make_reaction((function (){
return (((cljs.core.deref(cljs_spm.core.window_width) - (10)) / cljs.core.count(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data)))) - (30));
}));
}
cljs_spm.core.div_with_canvas = (function cljs_spm$core$div_with_canvas(draw_canvas_contents){
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
var G__13663 = cljs.core.deref(dom_node).firstChild.getContext("2d");
var G__13664 = cljs.core.deref(cljs_spm.core.canvas_size);
var G__13665 = cljs.core.deref(cljs_spm.core.canvas_size);
return (draw_canvas_contents.cljs$core$IFn$_invoke$arity$3 ? draw_canvas_contents.cljs$core$IFn$_invoke$arity$3(G__13663,G__13664,G__13665) : draw_canvas_contents.call(null,G__13663,G__13664,G__13665));
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__13662_SHARP_){
return cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(p1__13662_SHARP_));
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
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.categories !== 'undefined')){
} else {
cljs_spm.core.categories = reagent.ratom.make_reaction((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["recalc categories"], 0));

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(row,cljs.core.deref(cljs_spm.core.active_category),cljs.core.cst$kw$none);
}),cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed)));
}));
}
if((typeof cljs_spm !== 'undefined') && (typeof cljs_spm.core !== 'undefined') && (typeof cljs_spm.core.category__GT_color !== 'undefined')){
} else {
cljs_spm.core.category__GT_color = reagent.ratom.make_reaction((function (){
return cljs.core.zipmap(cljs.core.set(cljs.core.deref(cljs_spm.core.categories)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","blue","yellow","lime","purple","pink","brown"], null));
}));
}
cljs_spm.core.render_table_fn = (function cljs_spm$core$render_table_fn(x_col,y_col,ctx,w,h){
var off_x = (function (){var G__13666 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (x_col.cljs$core$IFn$_invoke$arity$1 ? x_col.cljs$core$IFn$_invoke$arity$1(G__13666) : x_col.call(null,G__13666));
})();
var off_y = (function (){var G__13667 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (y_col.cljs$core$IFn$_invoke$arity$1 ? y_col.cljs$core$IFn$_invoke$arity$1(G__13667) : y_col.call(null,G__13667));
})();
var x_width = ((function (){var G__13668 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (x_col.cljs$core$IFn$_invoke$arity$1 ? x_col.cljs$core$IFn$_invoke$arity$1(G__13668) : x_col.call(null,G__13668));
})() - off_x);
var y_width = ((function (){var G__13669 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (y_col.cljs$core$IFn$_invoke$arity$1 ? y_col.cljs$core$IFn$_invoke$arity$1(G__13669) : y_col.call(null,G__13669));
})() - off_y);
var scale_x = (cljs.core.deref(cljs_spm.core.canvas_size) / x_width);
var scale_y = (cljs.core.deref(cljs_spm.core.canvas_size) / y_width);
var seq__13670 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(x_col,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(y_col,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_spm.core.category__GT_color),cljs.core.deref(cljs_spm.core.categories))));
var chunk__13671 = null;
var count__13672 = (0);
var i__13673 = (0);
while(true){
if((i__13673 < count__13672)){
var vec__13680 = chunk__13671.cljs$core$IIndexed$_nth$arity$2(null,i__13673);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680,(2),null);
(ctx.fillStyle = c);

ctx.fillRect((scale_x * (x - off_x)),(scale_y * (y - off_y)),(10),(10));


var G__13686 = seq__13670;
var G__13687 = chunk__13671;
var G__13688 = count__13672;
var G__13689 = (i__13673 + (1));
seq__13670 = G__13686;
chunk__13671 = G__13687;
count__13672 = G__13688;
i__13673 = G__13689;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13670);
if(temp__5735__auto__){
var seq__13670__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13670__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13670__$1);
var G__13690 = cljs.core.chunk_rest(seq__13670__$1);
var G__13691 = c__4556__auto__;
var G__13692 = cljs.core.count(c__4556__auto__);
var G__13693 = (0);
seq__13670 = G__13690;
chunk__13671 = G__13691;
count__13672 = G__13692;
i__13673 = G__13693;
continue;
} else {
var vec__13683 = cljs.core.first(seq__13670__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(2),null);
(ctx.fillStyle = c);

ctx.fillRect((scale_x * (x - off_x)),(scale_y * (y - off_y)),(10),(10));


var G__13694 = cljs.core.next(seq__13670__$1);
var G__13695 = null;
var G__13696 = (0);
var G__13697 = (0);
seq__13670 = G__13694;
chunk__13671 = G__13695;
count__13672 = G__13696;
i__13673 = G__13697;
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
if((y_col instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? y-col)"));
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Rendering histogram for ",y_col], 0));

var buckets = (function (){var G__13698 = cljs.core.cst$kw$hist.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (y_col.cljs$core$IFn$_invoke$arity$1 ? y_col.cljs$core$IFn$_invoke$arity$1(G__13698) : y_col.call(null,G__13698));
})();
var x_width = (cljs.core.deref(cljs_spm.core.canvas_size) / cljs.core.count(buckets));
var scale_y = ((cljs.core.deref(cljs_spm.core.canvas_size) - (5)) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,buckets));
(ctx.fillStyle = "silver");

var seq__13699_13823 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,buckets));
var chunk__13701_13824 = null;
var count__13702_13825 = (0);
var i__13703_13826 = (0);
while(true){
if((i__13703_13826 < count__13702_13825)){
var vec__13711_13827 = chunk__13701_13824.cljs$core$IIndexed$_nth$arity$2(null,i__13703_13826);
var i_13828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13711_13827,(0),null);
var bucket_13829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13711_13827,(1),null);
var height_13830 = (bucket_13829 * scale_y);
ctx.fillRect((x_width * i_13828),(cljs.core.deref(cljs_spm.core.canvas_size) - height_13830),x_width,height_13830);


var G__13831 = seq__13699_13823;
var G__13832 = chunk__13701_13824;
var G__13833 = count__13702_13825;
var G__13834 = (i__13703_13826 + (1));
seq__13699_13823 = G__13831;
chunk__13701_13824 = G__13832;
count__13702_13825 = G__13833;
i__13703_13826 = G__13834;
continue;
} else {
var temp__5735__auto___13835 = cljs.core.seq(seq__13699_13823);
if(temp__5735__auto___13835){
var seq__13699_13836__$1 = temp__5735__auto___13835;
if(cljs.core.chunked_seq_QMARK_(seq__13699_13836__$1)){
var c__4556__auto___13837 = cljs.core.chunk_first(seq__13699_13836__$1);
var G__13838 = cljs.core.chunk_rest(seq__13699_13836__$1);
var G__13839 = c__4556__auto___13837;
var G__13840 = cljs.core.count(c__4556__auto___13837);
var G__13841 = (0);
seq__13699_13823 = G__13838;
chunk__13701_13824 = G__13839;
count__13702_13825 = G__13840;
i__13703_13826 = G__13841;
continue;
} else {
var vec__13714_13842 = cljs.core.first(seq__13699_13836__$1);
var i_13843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13714_13842,(0),null);
var bucket_13844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13714_13842,(1),null);
var height_13845 = (bucket_13844 * scale_y);
ctx.fillRect((x_width * i_13843),(cljs.core.deref(cljs_spm.core.canvas_size) - height_13845),x_width,height_13845);


var G__13846 = cljs.core.next(seq__13699_13836__$1);
var G__13847 = null;
var G__13848 = (0);
var G__13849 = (0);
seq__13699_13823 = G__13846;
chunk__13701_13824 = G__13847;
count__13702_13825 = G__13848;
i__13703_13826 = G__13849;
continue;
}
} else {
}
}
break;
}

var seq__13717 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_spm.core.axis_category_hist),y_col));
var chunk__13719 = null;
var count__13720 = (0);
var i__13721 = (0);
while(true){
if((i__13721 < count__13720)){
var vec__13773 = chunk__13719.cljs$core$IIndexed$_nth$arity$2(null,i__13721);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13773,(0),null);
var buckets__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13773,(1),null);
if(cljs.core.truth_(k)){
var seq__13776_13850 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,buckets__$1));
var chunk__13778_13851 = null;
var count__13779_13852 = (0);
var i__13780_13853 = (0);
while(true){
if((i__13780_13853 < count__13779_13852)){
var vec__13790_13854 = chunk__13778_13851.cljs$core$IIndexed$_nth$arity$2(null,i__13780_13853);
var i_13855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790_13854,(0),null);
var bucket_13856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790_13854,(1),null);
var height_13857 = (bucket_13856 * scale_y);
(ctx.fillStyle = (function (){var fexpr__13793 = cljs.core.deref(cljs_spm.core.category__GT_color);
return (fexpr__13793.cljs$core$IFn$_invoke$arity$1 ? fexpr__13793.cljs$core$IFn$_invoke$arity$1(k) : fexpr__13793.call(null,k));
})());

ctx.fillRect((x_width * i_13855),((cljs.core.deref(cljs_spm.core.canvas_size) - height_13857) - (1)),x_width,(1));


var G__13858 = seq__13776_13850;
var G__13859 = chunk__13778_13851;
var G__13860 = count__13779_13852;
var G__13861 = (i__13780_13853 + (1));
seq__13776_13850 = G__13858;
chunk__13778_13851 = G__13859;
count__13779_13852 = G__13860;
i__13780_13853 = G__13861;
continue;
} else {
var temp__5735__auto___13862 = cljs.core.seq(seq__13776_13850);
if(temp__5735__auto___13862){
var seq__13776_13863__$1 = temp__5735__auto___13862;
if(cljs.core.chunked_seq_QMARK_(seq__13776_13863__$1)){
var c__4556__auto___13864 = cljs.core.chunk_first(seq__13776_13863__$1);
var G__13865 = cljs.core.chunk_rest(seq__13776_13863__$1);
var G__13866 = c__4556__auto___13864;
var G__13867 = cljs.core.count(c__4556__auto___13864);
var G__13868 = (0);
seq__13776_13850 = G__13865;
chunk__13778_13851 = G__13866;
count__13779_13852 = G__13867;
i__13780_13853 = G__13868;
continue;
} else {
var vec__13794_13869 = cljs.core.first(seq__13776_13863__$1);
var i_13870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794_13869,(0),null);
var bucket_13871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794_13869,(1),null);
var height_13872 = (bucket_13871 * scale_y);
(ctx.fillStyle = (function (){var fexpr__13797 = cljs.core.deref(cljs_spm.core.category__GT_color);
return (fexpr__13797.cljs$core$IFn$_invoke$arity$1 ? fexpr__13797.cljs$core$IFn$_invoke$arity$1(k) : fexpr__13797.call(null,k));
})());

ctx.fillRect((x_width * i_13870),((cljs.core.deref(cljs_spm.core.canvas_size) - height_13872) - (1)),x_width,(1));


var G__13873 = cljs.core.next(seq__13776_13863__$1);
var G__13874 = null;
var G__13875 = (0);
var G__13876 = (0);
seq__13776_13850 = G__13873;
chunk__13778_13851 = G__13874;
count__13779_13852 = G__13875;
i__13780_13853 = G__13876;
continue;
}
} else {
}
}
break;
}


var G__13877 = seq__13717;
var G__13878 = chunk__13719;
var G__13879 = count__13720;
var G__13880 = (i__13721 + (1));
seq__13717 = G__13877;
chunk__13719 = G__13878;
count__13720 = G__13879;
i__13721 = G__13880;
continue;
} else {
var G__13881 = seq__13717;
var G__13882 = chunk__13719;
var G__13883 = count__13720;
var G__13884 = (i__13721 + (1));
seq__13717 = G__13881;
chunk__13719 = G__13882;
count__13720 = G__13883;
i__13721 = G__13884;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13717);
if(temp__5735__auto__){
var seq__13717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13717__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13717__$1);
var G__13885 = cljs.core.chunk_rest(seq__13717__$1);
var G__13886 = c__4556__auto__;
var G__13887 = cljs.core.count(c__4556__auto__);
var G__13888 = (0);
seq__13717 = G__13885;
chunk__13719 = G__13886;
count__13720 = G__13887;
i__13721 = G__13888;
continue;
} else {
var vec__13798 = cljs.core.first(seq__13717__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13798,(0),null);
var buckets__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13798,(1),null);
if(cljs.core.truth_(k)){
var seq__13801_13889 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,buckets__$1));
var chunk__13803_13890 = null;
var count__13804_13891 = (0);
var i__13805_13892 = (0);
while(true){
if((i__13805_13892 < count__13804_13891)){
var vec__13815_13893 = chunk__13803_13890.cljs$core$IIndexed$_nth$arity$2(null,i__13805_13892);
var i_13894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815_13893,(0),null);
var bucket_13895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815_13893,(1),null);
var height_13896 = (bucket_13895 * scale_y);
(ctx.fillStyle = (function (){var fexpr__13818 = cljs.core.deref(cljs_spm.core.category__GT_color);
return (fexpr__13818.cljs$core$IFn$_invoke$arity$1 ? fexpr__13818.cljs$core$IFn$_invoke$arity$1(k) : fexpr__13818.call(null,k));
})());

ctx.fillRect((x_width * i_13894),((cljs.core.deref(cljs_spm.core.canvas_size) - height_13896) - (1)),x_width,(1));


var G__13897 = seq__13801_13889;
var G__13898 = chunk__13803_13890;
var G__13899 = count__13804_13891;
var G__13900 = (i__13805_13892 + (1));
seq__13801_13889 = G__13897;
chunk__13803_13890 = G__13898;
count__13804_13891 = G__13899;
i__13805_13892 = G__13900;
continue;
} else {
var temp__5735__auto___13901__$1 = cljs.core.seq(seq__13801_13889);
if(temp__5735__auto___13901__$1){
var seq__13801_13902__$1 = temp__5735__auto___13901__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13801_13902__$1)){
var c__4556__auto___13903 = cljs.core.chunk_first(seq__13801_13902__$1);
var G__13904 = cljs.core.chunk_rest(seq__13801_13902__$1);
var G__13905 = c__4556__auto___13903;
var G__13906 = cljs.core.count(c__4556__auto___13903);
var G__13907 = (0);
seq__13801_13889 = G__13904;
chunk__13803_13890 = G__13905;
count__13804_13891 = G__13906;
i__13805_13892 = G__13907;
continue;
} else {
var vec__13819_13908 = cljs.core.first(seq__13801_13902__$1);
var i_13909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819_13908,(0),null);
var bucket_13910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819_13908,(1),null);
var height_13911 = (bucket_13910 * scale_y);
(ctx.fillStyle = (function (){var fexpr__13822 = cljs.core.deref(cljs_spm.core.category__GT_color);
return (fexpr__13822.cljs$core$IFn$_invoke$arity$1 ? fexpr__13822.cljs$core$IFn$_invoke$arity$1(k) : fexpr__13822.call(null,k));
})());

ctx.fillRect((x_width * i_13909),((cljs.core.deref(cljs_spm.core.canvas_size) - height_13911) - (1)),x_width,(1));


var G__13912 = cljs.core.next(seq__13801_13902__$1);
var G__13913 = null;
var G__13914 = (0);
var G__13915 = (0);
seq__13801_13889 = G__13912;
chunk__13803_13890 = G__13913;
count__13804_13891 = G__13914;
i__13805_13892 = G__13915;
continue;
}
} else {
}
}
break;
}


var G__13916 = cljs.core.next(seq__13717__$1);
var G__13917 = null;
var G__13918 = (0);
var G__13919 = (0);
seq__13717 = G__13916;
chunk__13719 = G__13917;
count__13720 = G__13918;
i__13721 = G__13919;
continue;
} else {
var G__13920 = cljs.core.next(seq__13717__$1);
var G__13921 = null;
var G__13922 = (0);
var G__13923 = (0);
seq__13717 = G__13920;
chunk__13719 = G__13921;
count__13720 = G__13922;
i__13721 = G__13923;
continue;
}
}
} else {
return null;
}
}
break;
}
});
cljs_spm.core.render_table = (function cljs_spm$core$render_table(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$render_table_$_iter__13924(s__13925){
return (new cljs.core.LazySeq(null,(function (){
var s__13925__$1 = s__13925;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13925__$1);
if(temp__5735__auto__){
var s__13925__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13925__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13925__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13927 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13926 = (0);
while(true){
if((i__13926 < size__4528__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13926);
cljs.core.chunk_append(b__13927,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,col], null),cljs.core.name(col),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small,"(",(function (){var G__13928 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13928) : col.call(null,G__13928));
})(),"-",(function (){var G__13929 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13929) : col.call(null,G__13929));
})(),")"], null)], null)], null));

var G__13962 = (i__13926 + (1));
i__13926 = G__13962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13927),cljs_spm$core$render_table_$_iter__13924(cljs.core.chunk_rest(s__13925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13927),null);
}
} else {
var col = cljs.core.first(s__13925__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,col], null),cljs.core.name(col),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small,"(",(function (){var G__13930 = cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13930) : col.call(null,G__13930));
})(),"-",(function (){var G__13931 = cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data));
return (col.cljs$core$IFn$_invoke$arity$1 ? col.cljs$core$IFn$_invoke$arity$1(G__13931) : col.call(null,G__13931));
})(),")"], null)], null)], null),cljs_spm$core$render_table_$_iter__13924(cljs.core.rest(s__13925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data)));
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$render_table_$_iter__13932(s__13933){
return (new cljs.core.LazySeq(null,(function (){
var s__13933__$1 = s__13933;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13933__$1);
if(temp__5735__auto__){
var s__13933__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13933__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13933__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13935 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13934 = (0);
while(true){
if((i__13934 < size__4528__auto__)){
var vec__13936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13934);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13936,(0),null);
var x_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13936,(1),null);
cljs.core.chunk_append(b__13935,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["col",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col)].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__13934,vec__13936,i,x_col,c__4527__auto__,size__4528__auto__,b__13935,s__13933__$2,temp__5735__auto__){
return (function cljs_spm$core$render_table_$_iter__13932_$_iter__13939(s__13940){
return (new cljs.core.LazySeq(null,((function (i__13934,vec__13936,i,x_col,c__4527__auto__,size__4528__auto__,b__13935,s__13933__$2,temp__5735__auto__){
return (function (){
var s__13940__$1 = s__13940;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13940__$1);
if(temp__5735__auto____$1){
var s__13940__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13940__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__13940__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__13942 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__13941 = (0);
while(true){
if((i__13941 < size__4528__auto____$1)){
var vec__13943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__13941);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13943,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13943,(1),null);
cljs.core.chunk_append(b__13942,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null));

var G__13963 = (i__13941 + (1));
i__13941 = G__13963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13942),cljs_spm$core$render_table_$_iter__13932_$_iter__13939(cljs.core.chunk_rest(s__13940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13942),null);
}
} else {
var vec__13946 = cljs.core.first(s__13940__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13946,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13946,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null),cljs_spm$core$render_table_$_iter__13932_$_iter__13939(cljs.core.rest(s__13940__$2)));
}
} else {
return null;
}
break;
}
});})(i__13934,vec__13936,i,x_col,c__4527__auto__,size__4528__auto__,b__13935,s__13933__$2,temp__5735__auto__))
,null,null));
});})(i__13934,vec__13936,i,x_col,c__4527__auto__,size__4528__auto__,b__13935,s__13933__$2,temp__5735__auto__))
;
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))));
})())], null));

var G__13964 = (i__13934 + (1));
i__13934 = G__13964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13935),cljs_spm$core$render_table_$_iter__13932(cljs.core.chunk_rest(s__13933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13935),null);
}
} else {
var vec__13949 = cljs.core.first(s__13933__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13949,(0),null);
var x_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13949,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["col",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col)].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__13949,i,x_col,s__13933__$2,temp__5735__auto__){
return (function cljs_spm$core$render_table_$_iter__13932_$_iter__13952(s__13953){
return (new cljs.core.LazySeq(null,(function (){
var s__13953__$1 = s__13953;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13953__$1);
if(temp__5735__auto____$1){
var s__13953__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13953__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13953__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13955 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13954 = (0);
while(true){
if((i__13954 < size__4528__auto__)){
var vec__13956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13954);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13956,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13956,(1),null);
cljs.core.chunk_append(b__13955,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null));

var G__13965 = (i__13954 + (1));
i__13954 = G__13965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13955),cljs_spm$core$render_table_$_iter__13932_$_iter__13952(cljs.core.chunk_rest(s__13953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13955),null);
}
} else {
var vec__13959 = cljs.core.first(s__13953__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13959,(0),null);
var y_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13959,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_col)].join(''),cljs.core.cst$kw$class,(((i > j))?"empty":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_spm.core.render_table_histogram,x_col)], null):(((i < j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_spm.core.div_with_canvas,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs_spm.core.render_table_fn,y_col,x_col)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$empty], null)
))], null),cljs_spm$core$render_table_$_iter__13932_$_iter__13952(cljs.core.rest(s__13953__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__13949,i,x_col,s__13933__$2,temp__5735__auto__))
;
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.data))));
})())], null),cljs_spm$core$render_table_$_iter__13932(cljs.core.rest(s__13933__$2)));
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
})], null),"Load Wheat Seeds dataset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(11),cljs.core.cst$kw$on_DASH_change,(function (p1__13966_SHARP_){
return cljs.core.reset_BANG_(cljs_spm.core.textarea_text,p1__13966_SHARP_.target.value);
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$resize,"none",cljs.core.cst$kw$width,"90%",cljs.core.cst$kw$display,"block",cljs.core.cst$kw$overflow,"auto"], null),cljs.core.cst$kw$value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.textarea_text))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.model_parsed))))," rows"], null)], null);
});
cljs_spm.core.opts_box = (function cljs_spm$core$opts_box(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"2. Display options"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Dimensions:"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$opts_box_$_iter__13967(s__13968){
return (new cljs.core.LazySeq(null,(function (){
var s__13968__$1 = s__13968;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13968__$1);
if(temp__5735__auto__){
var s__13968__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13968__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13968__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13970 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13969 = (0);
while(true){
if((i__13969 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13969);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$numeric,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_spm.core.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,i], null)))){
cljs.core.chunk_append(b__13970,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0.2em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$defaultChecked,cljs.core.boolean$((function (){var G__13971 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13971) : i.call(null,G__13971));
})()),cljs.core.cst$kw$on_DASH_change,((function (i__13969,s__13968__$1,i,c__4527__auto__,size__4528__auto__,b__13970,s__13968__$2,temp__5735__auto__){
return (function (e){
if(cljs.core.truth_(e.target.checked)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
}
});})(i__13969,s__13968__$1,i,c__4527__auto__,size__4528__auto__,b__13970,s__13968__$2,temp__5735__auto__))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.name(i)], null)], null));

var G__13990 = (i__13969 + (1));
i__13969 = G__13990;
continue;
} else {
var G__13991 = (i__13969 + (1));
i__13969 = G__13991;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13970),cljs_spm$core$opts_box_$_iter__13967(cljs.core.chunk_rest(s__13968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13970),null);
}
} else {
var i = cljs.core.first(s__13968__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$numeric,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs_spm.core.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,i], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0.2em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$defaultChecked,cljs.core.boolean$((function (){var G__13972 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13972) : i.call(null,G__13972));
})()),cljs.core.cst$kw$on_DASH_change,((function (s__13968__$1,i,s__13968__$2,temp__5735__auto__){
return (function (e){
if(cljs.core.truth_(e.target.checked)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_spm.core.view_opts,cljs.core.update,cljs.core.cst$kw$enabled_DASH_axis,cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));
}
});})(s__13968__$1,i,s__13968__$2,temp__5735__auto__))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.name(i)], null)], null),cljs_spm$core$opts_box_$_iter__13967(cljs.core.rest(s__13968__$2)));
} else {
var G__13992 = cljs.core.rest(s__13968__$2);
s__13968__$1 = G__13992;
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_spm.core.view_opts,cljs.core.assoc,cljs.core.cst$kw$category,(function (){var G__13973 = e;
var G__13973__$1 = (((G__13973 == null))?null:G__13973.target);
var G__13973__$2 = (((G__13973__$1 == null))?null:G__13973__$1.value);
var G__13973__$3 = (((G__13973__$2 == null))?null:cljs.core.not_empty(G__13973__$2));
if((G__13973__$3 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__13973__$3);
}
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,""], null),"No Category"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$opts_box_$_iter__13974(s__13975){
return (new cljs.core.LazySeq(null,(function (){
var s__13975__$1 = s__13975;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13975__$1);
if(temp__5735__auto__){
var s__13975__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13975__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13975__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13977 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13976 = (0);
while(true){
if((i__13976 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13976);
if(cljs.core.not((function (){var G__13978 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13978) : i.call(null,G__13978));
})())){
cljs.core.chunk_append(b__13977,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$value,cljs.core.name(i)], null),cljs.core.name(i)], null));

var G__13993 = (i__13976 + (1));
i__13976 = G__13993;
continue;
} else {
var G__13994 = (i__13976 + (1));
i__13976 = G__13994;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13977),cljs_spm$core$opts_box_$_iter__13974(cljs.core.chunk_rest(s__13975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13977),null);
}
} else {
var i = cljs.core.first(s__13975__$2);
if(cljs.core.not((function (){var G__13979 = cljs.core.cst$kw$enabled_DASH_axis.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_spm.core.view_opts));
return (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(G__13979) : i.call(null,G__13979));
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$value,cljs.core.name(i)], null),cljs.core.name(i)], null),cljs_spm$core$opts_box_$_iter__13974(cljs.core.rest(s__13975__$2)));
} else {
var G__13995 = cljs.core.rest(s__13975__$2);
s__13975__$1 = G__13995;
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
})())], null)], null),(cljs.core.truth_(cljs.core.deref(cljs_spm.core.active_category))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function cljs_spm$core$opts_box_$_iter__13980(s__13981){
return (new cljs.core.LazySeq(null,(function (){
var s__13981__$1 = s__13981;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13981__$1);
if(temp__5735__auto__){
var s__13981__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13981__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__13981__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__13983 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__13982 = (0);
while(true){
if((i__13982 < size__4528__auto__)){
var vec__13984 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__13982);
var cat_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13984,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13984,(1),null);
cljs.core.chunk_append(b__13983,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cat_val,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0.2em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$width,"1em",cljs.core.cst$kw$height,"1em",cljs.core.cst$kw$margin_DASH_right,"0.2em",cljs.core.cst$kw$background,color], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cat_val)], null)], null)], null));

var G__13996 = (i__13982 + (1));
i__13982 = G__13996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13983),cljs_spm$core$opts_box_$_iter__13980(cljs.core.chunk_rest(s__13981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13983),null);
}
} else {
var vec__13987 = cljs.core.first(s__13981__$2);
var cat_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13987,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13987,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cat_val,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0.2em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$width,"1em",cljs.core.cst$kw$height,"1em",cljs.core.cst$kw$margin_DASH_right,"0.2em",cljs.core.cst$kw$background,color], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cat_val)], null)], null)], null),cljs_spm$core$opts_box_$_iter__13980(cljs.core.rest(s__13981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(cljs_spm.core.category__GT_color));
})()):null)], null);
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
