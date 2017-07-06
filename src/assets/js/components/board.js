'use strict';

const boardPins=(update)=>{
    const row =$('<div class="row grid"></div>');

    const item=generatorItems(board.boardData,row,update);
    console.log(item);

    row.append(item);

    return row;
}

const items=(e)=>{

    const pin         =$('<div class="col s12 m3 xl3 grid__pin"></div>');
    const div         =$('<div class="grid__pin-radius"></div>');
    const img         =$('<img class="responsive-img" src="'+e.image.original.url+'">');
    const info        =$('<div class="col s12 padding-14-bot"></div>');
    const userCont    =$('<div class="col s12"></div>');
    const user        =$('<div class="col s3 m4 xl4"><img src="'+ profile.image +'" alt="foto arabela" class="circle responsive-img"></div>');
    const nameBoard   =$('<div class="col s8">'+e.board.name+'<br>'+profile.name+'</div>');
    const description =$('<div class="note col s8">'+e.note+'</div>');
    const overlay     =$('<div class="grid__pin-overlay" data-target="modal1"></div>');
    const divIcon     =$('<div class="button-share btn white"></div>');
    const up          =$('<span class="icon-share"></span>');
    const btn         =$('<a class="waves-effect waves-light btn button-save button-save--hover">Guardar</a>');


    userCont.append(user);
    userCont.append(nameBoard);

    divIcon.append(up);
    overlay.append(divIcon);
    overlay.append(btn);
    div.append(img);
    pin.append(div);
    if(e.metadata.article!=undefined) {
        const titulo = $('<h6>' + e.metadata.article.name + '</h6>');
        info.append(titulo);
    }
    info.append(description);
    info.append(userCont);
    pin.append(info);
    pin.append(overlay);

//Abrir modal y almacenar data
    overlay.on('click',(event) => {
        event.preventDefault();
        pins.selected = e;
        pins.image = pins.selected.image.original.url;
        $('.modal-content__img').attr('src', pins.image);

        pins.note = pins.selected.note;
        $('.modal-content__datos__notes').text(pins.note);

        if(pins.selected.metadata.article!=undefined) {
          pins.title = pins.selected.metadata.article.name;
          pins.description = pins.selected.metadata.article.description;
          $('.modal-content__title').text(pins.title);
          $('.modal-content__description').text(pins.description);
        }
        if(pins.selected.metadata.link!=undefined) {
          pins.fuente.author = pins.selected.metadata.link.site_name;
          pins.fuente.favicon = pins.selected.metadata.link.favicon;
          pins.fuente.link = pins.selected.link;
          $('.modal-content__author').text(pins.fuente.author);
          $('.modal-content__favicon').attr('src', pins.fuente.favicon);
          $('.modal-content__link').attr('href', pins.fuente.link);
        }

        $('#modal1').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%', // Ending top style attribute
            ready: function(modal, trigger) {},
            complete: function() { clean(); } // Callback for Modal close
          }
        );

});
    return pin;
}

const generatorItems=(data,row,update)=>{

    data.forEach((e)=>{
        row.append(items(e));
    })
}

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
