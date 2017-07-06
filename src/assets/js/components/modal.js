const Modal = () => {
  const modal = $('<div id="modal1" class="modal">');
  const modalContent = $('<div class="modal-content">');
  /*
  const share =
  const check =
  const more =
  const saveBtn =
  const img =
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
