(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(tagsGenerator());
  root.append(wrapper);
}

$( _ => {
  const root = $('.root');
  render(root);
  console.log('renderizando');
});

const tagsGenerator = ()=>{
  const tags = ["Inspiración","Minimalista", "Grafico", "Botones", "Fotografía", "Responsivo", "Portafolio", "Movil",
                "Colores","Arquitectura","Corporativo","Frases", "Empresarial", "Español", "Comida", "Restaurante",
                "Tienda", "Productos", "Wordpress", "Desing", "Template", "Flat", "2017", "Creativo"
                ]
  const contTag = $('<div class="row"></div>');
  const coltag = $('<div class="col s12 scroll-tags"></div>');
  for (var i = 0; i < tags.length; i++) {
    const tag = $(`<div class="btn-large scroll-tags__tags">${tags[i]}</div>`);
    coltag.append(tag);
  }
  contTag.append(coltag);
  return contTag;
}

},{}]},{},[1])