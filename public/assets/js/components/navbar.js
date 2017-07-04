(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const Navbar = (update) => {
  const navbar = $('<nav class="navbar white"></nav>');
  const logo = $('<a href="" class="navbar__logo"></a>');
  const search = $('<div class="navbar__search"></div>');
  const input = $('<input type="text" name="" value="" class="navbar__search__input">');
  const icon = $('<span class="navbar__search__icon" placeholder="asdsa"></span>');
  const profile = $('<a href="" class="navbar__profile"></a>');
  const menu = $('<a href="" class="navbar__menu"></a>');
  const messages = $('<a href="" class="navbar__messages"></a>');

  navbar.append(logo);
  navbar.append(search);
  search.append(input);
  search.append(icon);
  navbar.append(profile);
  navbar.append(menu);
  navbar.append(messages);

  return navbar;
}

},{}]},{},[1])