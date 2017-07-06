const Modal = () => {
  const modal = $('<div id="modal1" class="modal">');
  const modalContent = $('<div class="modal-content">');
  const title = $('<h5 id="title" class="modal-content__title"></h5>');
  const topDiv = $('<div class="modal-content__top-div"></div>');
  const icons = $('<span class="modal-content__icons"></span>');
  const share = $('<a href="" class="modal-content__share modal-content__share--hover icon-share"></a>');
  /*
  const check =
  */
  const more = $('<a href="" class="modal-content__more"></a>');
  const saveBtn = $('<button type="button" name="button" class="modal-content__button modal-content__button--hover btn">Guardar</button>');
  const img = $('<img class="responsive-img modal-content__img" src="'+ pins.image + '">');
  const bottomImg = $('<div class="modal-content__bottom"></div>');
  const autoria = $('<div class="modal-content__autoria"></div>');
  const author = $('<p class="modal-content__author"></p>');
  const favicon = $('<img class="modal-content__favicon circle" src="">');
  const link = $('<a class="modal-content__link">leer</a>');
  const description = $('<p class="modal-content__description"></p>');
  const close = $('<a href="#!" class="modal-action modal-close modal-content__close icon-close"></a>');

  modal.append(modalContent);
  modalContent.append(topDiv);
  topDiv.append(icons);
  icons.append(share);
  icons.append(more);
  topDiv.append(saveBtn);
  modalContent.append(title);
  modalContent.append(img);
  modalContent.append(bottomImg);
  bottomImg.append(autoria);
  autoria.append(author);
  autoria.append(favicon);
  bottomImg.append(link);
  modalContent.append(description);
  modal.append(close);

  close.on('click', (e) => {

  })

  return modal;
}
