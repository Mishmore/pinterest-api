const Modal = () => {
  const modal = $('<div id="modal1" class="modal">');
  const modalContent = $('<div class="modal-content">');
  const title = $('<h4>soy modal</h4>');
  const close = $('<a href="#!" class="modal-action modal-close btn-flat">close</a>');

  modal.append(modalContent);
  modalContent.append(title);
  modal.append(close);

  return modal.modal();
}
