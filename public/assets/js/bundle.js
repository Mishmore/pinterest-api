console.log('board');

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(tagsGenerator());
  root.append(wrapper);
}

const hola = 'ada';
const board = {
  boardData: null,
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
    console.log(board.boardData);

    board.boardData.forEach(function(e) {
      if (e.attribution != null) {
        console.log(e.attribution.author_name);
      }
    })
  });

  const root = $('.root');
  render(root);
});

<<<<<<< HEAD
const tagsGenerator = ()=>{
  const tags = ["Inspiración","Minimalista", "Grafico", "Botones", "Fotografía", "Responsivo", "Portafolio", "Movil",
                "Colores","Arquitectura","Corporativo","Frases", "Empresarial", "Español", "Comida", "Restaurante",
                "Tienda", "Productos", "Wordpress", "Desing", "Template", "Flat", "2017", "Creativo"
                ]

  const contTag = $('<div class="row tagScroll"></div>');
  const coltag = $('<div class="col s12 scroll-tags"></div>');
  for (var i = 0; i < tags.length; i++) {
    const tag = $(`<div class="btn-large scroll-tags__tags">${tags[i]}</div>`);
    tag.addClass(`scroll-tags-${[i]}`);

    coltag.append(tag);
  }
  contTag.append(coltag);
  return contTag;
}

},{}]},{},[1])
=======
'use strict';
const Navbar = (update) => {
  const parent = $('<div class="navbar-fixed"></div>');
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

console.log('Tags');
>>>>>>> 6b27aa663efb9e5ddc1a2dd1704648ecf140d8fc
