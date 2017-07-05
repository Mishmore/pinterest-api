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
