console.log('board');

const Header = () => {
  const parent = $('<header class="container"></header>');
  const header = $('<div class="header"></div>');
  const col = $('<div class="col m12"></div>');
  const boardTitle = $('<h3>Web UI</h3>');
  const col2 = $('<div class="col m12"></div>');
  const cifras = $('<div></div>');
  const pines = $('<strong>30</strong><span>Pines</span><br>');
  const followers = $('<strong>84</strong><span>Seguidores</span>');
  const user = $('<img src="" alt="">');

  parent.append(header);
  header.append(col);
  col.append(boardTitle);
  header.append(col2);
  col2.append(cifras);
  cifras.append(pines);
  cifras.append(followers);
  col2.append(user);

  return parent;
}

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar(_ => render(root)));
  wrapper.append(Header(_ => render(root)));
  root.append(wrapper);
}

const hola = 'ada';
const board = {
  boardData: null
}

$( _ => {
  /*
  $.get("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYneH0AVANBioiyRpgDkY8hLv8LpFM4lRp9RIINEIt-RlsA7PgAAAAA&fields=id%2Clink%2Cimage%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Cmedia%2Cmetadata%2Cnote%2Coriginal_link%2Curl", function( data ) {
    board.boardData = data;
    console.log(board.boardData);
  });
*/
/*
(ID de pin) data.id
(Título) data.metadata.link.title
(Autor) data.attribution.author_name
(Nombre de Board) data.board.name
*/
  $.get( "https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYneH0AVANBioiyRpgDkY8hLv8LpFM4lRp9RIINEIt-RlsA7PgAAAAA&fields=id%2Clink%2Cimage%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Cmedia%2Cmetadata%2Cnote%2Coriginal_link%2Curl")
  .done(function( response ) {
    board.boardData = response.data;
    console.log(board.boardData.id);

    board.boardData.forEach(function(e) {
      if (e.attribution != null) {
        console.log(e.attribution.author_name);
      }
    })
  });

  const root = $('.root');
  render(root);
  console.log('renderizando');
});

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
    console.log(currScroll);
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

console.log('Tags');
