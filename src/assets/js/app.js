'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(tagsGenerator());
  root.append(wrapper);
}

$( _ => {
  const root = $('.root');
  render(root);
});

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
