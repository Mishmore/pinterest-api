'use strict';
const Navbar = (update) => {
  const parent = $('<div class="navbar-fixed green"></div>');
  const navbar = $('<nav class="navbar white"></nav>');
  const logo = $('<a href="" class="navbar__logo"></a>');
  const search = $('<div class="navbar__search hide-on-small-only"></div>');
  const input = $('<input type="text" name="" value="" class="navbar__search__input"  placeholder="Buscar">');
  const icon = $('<span class="navbar__search__icon icon-search"></span>');
  const close = $('<span class="navbar__search__close icon-close"></span>');
  const profile = $('<a href="" class="navbar__profile navbar__profile--hover icon-user"></a>');
  const menu = $('<a href="" class="navbar__menu navbar__menu--hover icon-menu"></a>');
  const messages = $('<a href="" class="navbar__messages"></a>');

  navbar.append(logo);
  navbar.append(search);
  search.append(icon);
  search.append(input);
  search.append(close);
  navbar.append(profile);
  navbar.append(menu);
  navbar.append(messages);

  return navbar;
}
