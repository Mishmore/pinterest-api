'use strict';

const boardPins=(update)=>{
    const contenedor  =$('<div></div>');
    const row         =$('<div class="row"></div>');

    const item=generatorItems(board.boardData,row,update);
    console.log(item);

    row.append(item);
    contenedor.append(row);

    return contenedor;
}

const items=(e)=>{

    const pin         =$('<div class="col s12 m3"></div>');
    const div         =$('<div class="radius"></div>');
    const img         =$('<img class="responsive-img" src="'+e.image.original.url+'">');
    const description =$('<p>'+e.note+'</p>');
    const nameBoard   =$('<p>'+e.board.name+'</p>');
    const overlay     =$('<div class="overlay"></div>');
    const divIcon     =$('<div class="icon-div btn white"></div>');
    const up          =$('<span class="icon-out"></span>');
    const btn         =$('<a class="waves-effect waves-light btn boton">Guardar</a>');

    //img.css("height",e.image.original.height+"px");
    divIcon.append(up);
    overlay.append(divIcon);
    overlay.append(btn);
    div.append(img);
    pin.append(div);
    if(e.metadata.article!=undefined) {
        const titulo = $('<h6>' + e.metadata.article.name + '</h6>');
        pin.append(titulo);
    }
    pin.append(description);
    pin.append(overlay);
    pin.append(nameBoard);

    return pin;
}

const generatorItems=(data,row,update)=>{

    data.forEach((e)=>{
        row.append(items(e));
    })
}

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar(_ => render(root)));
  wrapper.append(boardPins(_ => render(root)));
  root.append(wrapper);
}

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
      const root = $('.root');
      render(root);
      console.log('renderizando');
  });
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
