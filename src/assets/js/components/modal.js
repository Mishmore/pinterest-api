const Modal = () => {
  const modal = $('<div id="modal1" class="modal">');
  const modalContent = $('<div class="modal-content">');
  const title = $('<h4 id="title"></h4>');
  const share = $('<a href="" class="modal-content__share modal-content__share--hover icon-share"></a>');
  /*
  const check =
  */
  const more = $('<a href="" class="modal-content__more"></a>');
  const saveBtn = $('<button type="button" name="button" class="modal-content__button modal-content__button--hover btn">Guardar</button>');
  const img = $('<img class="responsive-img modal-content__img" src="'+ pins.image + '">');
  const author = $('<p class="modal-content__author"></p>');
  const favicon = $('<img class="round modal-content__favicon" src="">');
  const link = $('<p class="modal-content__link"></p>');
  const description = $('<p class="modal-content__description"></p>');
  const close = $('<a href="#!" class="modal-action modal-close btn-flat modal-content__close">close</a>');

  modal.append(modalContent);
  modalContent.append(title);
  modalContent.append(share);
  modalContent.append(more);
  modalContent.append(saveBtn);
  modalContent.append(img);
  modalContent.append(author);
  modalContent.append(favicon);
  modalContent.append(link);
  modalContent.append(description);
  modal.append(close);

  close.on('click', (e) => {

  })

  return modal;
}
