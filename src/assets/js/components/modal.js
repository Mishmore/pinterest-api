const Modal = () => {
  const modal = $('<div id="modal1" class="modal">');
  const modalContent = $('<div class="modal-content">');

  const share = $('<a href="" class="modal-content__share modal-content__share--hover icon-share"></a>');
  /*
  const check =
  */
  const more = $('<a href="" class="modal-content__more"></a>');
  const saveBtn = $('<button type="button" name="button" class="modal-content__button modal-content__button--hover btn">Guardar</button>');
  const img = $('<img class="responsive-img" src="'+ pins.image + '">');
  /*
  const author =
  const favicon =
  const link =
*/
  const title = $('<h4 id="title"></h4>');
  const close = $('<a href="#!" class="modal-action modal-close btn-flat">close</a>');

  modal.append(modalContent);
  modalContent.append(title);
  modal.append(close);

  close.on('click', (e) => {

  })

  return modal;
}
