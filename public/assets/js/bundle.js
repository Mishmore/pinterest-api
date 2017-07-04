(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Navbar(_ => render(root)));
  wrapper.append(Board(_ => render(root)));
  root.append(wrapper);
}

$( _ => {
  const root = $('.root');
  render(root);
  console.log('renderizando');
});


const Board=(update)=>{

  const contenedor=$('<div class="container"></div>');
  const row       =$('<div class="row"></div>');
  const board     =$('<div class="col m4"></div>');

  row.append(board);
  contenedor.append(row);
  return contenedor;

}
},{}]},{},[1])