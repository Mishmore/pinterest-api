console.log('board');

'use strict';
console.log('navbar');

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

console.log('Tags');
