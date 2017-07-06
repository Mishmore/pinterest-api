const Header = () => {
  const parent = $('<header class="container"></header>');
  const header = $('<div class="header"></div>');
  const col = $('<div class="col m12"></div>');
  const boardTitle = $('<h3 class="title">'+ profile.board_name +'</h3>');
  const col2 = $('<div class="col m12 header__info"></div>');
  const cifras = $('<div></div>');
  const pines = $('<strong>'+ profile.pins +'</strong><span>Pines</span><br>');
  const followers = $('<strong>'+ profile.followers +'</strong><span>Seguidores</span>');
  const user = $('<img src="'+ profile.image +'" alt="foto arabela" class="circle">');

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
