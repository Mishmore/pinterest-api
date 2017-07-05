'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Navbar(_ => render(root)));
  wrapper.append(Board(_ => render(root)));
  root.append(wrapper);
}

$( _ => {
  const root = $('.root');
  render(root);
  console.log('renderizando');
});

const Board=(update)=>{

  const contenedor=$('<div class="container"></div>');
  const row       =$('<div class="row"></div>');
  const pin       =$('<div class="col m4"></div>');
  const overlay   =$('<div class="overlay"></div>');
  const divIcon   =$('<div class="icon-div btn white"></div>');
  const up        =$('<span class="icon-out"></span>')
  const btn       =$('<a class="waves-effect waves-light btn boton">Guardar</a>');

  divIcon.append(up);
  overlay.append(divIcon);
  overlay.append(btn);
  pin.append(overlay);
  row.append(pin);
  contenedor.append(row);

  return contenedor;
}