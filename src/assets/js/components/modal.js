const Modal = () => {
  const modal = $('<div id="modal1" class="modal">');
  const modalContent = $('<div class="modal-content">');
  const title = $('<h5 id="title" class="modal-content__title"></h5>');
  const topDiv = $('<div class="modal-content__top-div"></div>');
  const icons = $('<span class="modal-content__icons"></span>');
  const share = $('<a href="" class="modal-content__share modal-content__share--hover icon-share"></a>');
  const check = $('<a href="" class="modal-content__check modal-content__check--hover icon-check"></a>');
  const more = $('<a href="" class="modal-content__more"></a>');
  const saveBtn = $('<button type="button" name="button" class="modal-content__button modal-content__button--hover btn">Guardar</button>');
  const img = $('<img class="responsive-img modal-content__img" src="'+ pins.image + '">');
  const bottomImg = $('<div class="modal-content__bottom"></div>');
  const autoria = $('<div class="modal-content__autoria"></div>');
  const autorCont = $('<div class="modal-content__autoria__container"></div>');
  const articulo = $('<p>Artículo de</p>');
  const author = $('<p class="modal-content__author strong"</p>');
  const favicon = $('<img class="modal-content__favicon circle" src="">');
  const link = $('<a class="modal-content__link">Leerlo</a>');
  const description = $('<p class="modal-content__description"></p>');
  const datos = $('<div class="modal-content__datos"></div>');
  const user = $('<img src="'+ profile.image +'" alt="foto arabela" class="circle modal-content__datos__profile">');
  const div = $('<div class="modal-content__datos__div"></div>');
  const username = $('<span class="modal-content__datos__nombre strong">'+ profile.name +'</span>');
  const guardado = $('<span> lo ha guardado en </span>');
  const boardName =$('<span class="modal-content__datos__board strong">'+ profile.board_name +'</span>');
  const notes = $('<p class="modal-content__datos__notes"></p>');
  const comentarios = $('<h5 class="modal-content__comentarios strong">Comentarios</h5>');
  const close = $('<a href="#!" class="modal-action modal-close modal-content__close icon-close"></a>');

  modal.append(modalContent);
  modalContent.append(topDiv);
  topDiv.append(icons);
  icons.append(share);
  icons.append(check);
  icons.append(more);
  topDiv.append(saveBtn);
  modalContent.append(title);
  modalContent.append(img);
  modalContent.append(bottomImg);
  bottomImg.append(autoria);
  autoria.append(favicon);
  autoria.append(autorCont);
  autorCont.append(articulo);
  autorCont.append(author);
  bottomImg.append(link);
  modalContent.append(description);
  modalContent.append(datos);
  datos.append(user);
  datos.append(div);
  div.append(username);
  div.append(guardado);
  div.append(boardName);
  div.append(notes);
  modalContent.append(comentarios);
  modal.append(close);

  const clean = () => {
    $('.modal-content__img').attr('src', "");
    $('.modal-content__datos__notes').text("");
    $('.modal-content__title').text("");
    $('.modal-content__description').text("");
    $('.modal-content__author').text("");
    $('.modal-content__favicon').attr('src', "");
    $('.modal-content__link').attr('href', "");
    let pins = {
      selected: null,
      id: null,
      creator: null,
      title: null,
      description: null,
      note: null,
      fuente: {
        author: null,
        favicon: null,
        link: null
      }
    }

  }

  close.on('click', (e) => {
    clean();
  });

  $('#materialize-modal-overlay-5').on('click', (e) => {
    alert('sdfds');
  })

  return modal;
}
