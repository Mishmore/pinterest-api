//Render
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar(_ => render(root)));
  root.append(wrapper);
}

$( _ => {
  const root = $('.root');
  render(root);
  console.log('mmm');
});

//Navbar

const Navbar = () => {
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
