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
  const board     =$('<div class="col m4"></div>');

  row.append(board);
  contenedor.append(row);
  return contenedor;

}