'use strict';
const Navbar = (update) => {
  const parent = $('<div class="navbar-fixed"></div>');
  const navbar = $('<nav class="navbar white"></nav>');
  const logo = $('<a href="" class="navbar__logo"></a>');
  const search = $('<div class="navbar__search hide-on-small-only"></div>');
  const input = $('<input type="text" name="" value="" class="navbar__search__input"  placeholder="Buscar">');
  const icon = $('<span class="navbar__search__icon icon-search"></span>');
  const close = $('<span class="navbar__search__close icon-close"></span>');
  const lupa = $('<a href="" class="navbar__lupa navbar__lupa--hover icon-search hide-on-med-and-up"></a>');
  const profile = $('<a href="" class="navbar__profile navbar__profile--hover icon-user"></a>');
  const menu = $('<a href="" class="navbar__menu navbar__menu--hover icon-menu"></a>');
  const messages = $('<a href="" class="navbar__messages"></a>');
  const navBottom = $('<nav class="navbar__bottom hide-on-small-only"></nav>');
  const navBotCont = $('<div class="navbar__bottom__container transparent"></div>');
  const share = $('<a href="" class="navbar__bottom__share navbar__bottom__share--hover icon-share"></a>');
  const title = $('<h5 class="center-align">Web UI</h5>');
  const button = $('<button type="button" name="button" class="navbar__bottom__button navbar__bottom__button--hover btn">Seguir tablero</button>');

  parent.append(navbar)
  navbar.append(logo);
  navbar.append(search);
  search.append(icon);
  search.append(input);
  search.append(close);
  navbar.append(lupa);
  navbar.append(profile);
  navbar.append(menu);
  navbar.append(messages);
  parent.append(navBottom);
  navBottom.append(navBotCont);
  navBotCont.append(share);
  navBotCont.append(title);
  navBotCont.append(button);

  let lastScroll = 0;

  $(window).scroll(function(e) {
    const currScroll = $(window).scrollTop();
    if (currScroll > lastScroll && currScroll > 80) {
      title.css('top', '10px');
    }
    else {
      title.css('top', '-50px');
    }
    lastScroll = currScroll;
  });
  return parent;
}
