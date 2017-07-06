const Modal = () => {
  const modal = $('<div id="modal1" class="modal">');
  const modalContent = $('<div class="modal-content">');
  const title = $('<h4 id="description"></h4>');
  const close = $('<a href="#!" class="modal-action modal-close btn-flat">close</a>');

  modal.append(modalContent);
  modalContent.append(title);
  modal.append(close);

  return modal;
}
/*
overlay.on('click',(event) => {
    event.preventDefault();
    state.selectedPokemon = number;

    imagen del pin:
    pin.data.image.original.url
Tamaño:
    pin.data.image.original.width
    pin.data.image.original.height

comentario del pin:
    pin.data.note
titulo del pin:
    pin.data.metadata.article.name
descripcion del pin:    pin.data.metadata.article.description
nombre del creador:
    pin.data.creator.first_name
nombre del board:
    pin.data.board.name


Ifo de Origen externos:

logo del enlace:
    pin.data.metadata.link.favicon
nombre del enlace:
    pin.data.metadata.link.site_name
Link de LEER:
    pin.data.link
*/
