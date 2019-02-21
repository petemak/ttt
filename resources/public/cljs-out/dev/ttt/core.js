// Compiled by ClojureScript 1.10.339 {}
goog.provide('ttt.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"====> Starting TocTacToe app.");
ttt.core.multiply = (function ttt$core$multiply(a,b){
return (a * b);
});
if((typeof ttt !== 'undefined') && (typeof ttt.core !== 'undefined') && (typeof ttt.core.app_state !== 'undefined')){
} else {
ttt.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
ttt.core.get_app_element = (function ttt$core$get_app_element(){
return goog.dom.getElement("app");
});
ttt.core.tictactoe = (function ttt$core$tictactoe(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.core.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),(100)], null)], null)], null)], null);
});
ttt.core.mount = (function ttt$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.core.tictactoe], null),el);
});
ttt.core.mount_app_element = (function ttt$core$mount_app_element(){
var temp__5457__auto__ = ttt.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return ttt.core.mount.call(null,el);
} else {
return null;
}
});
ttt.core.mount_app_element.call(null);
ttt.core.on_reload = (function ttt$core$on_reload(){
ttt.core.mount_app_element.call(null);

return cljs.core.swap_BANG_.call(null,ttt.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),"Tica Tac Toe");
});

//# sourceMappingURL=core.js.map
