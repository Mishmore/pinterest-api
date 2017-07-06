'use strict';

const boardPins=(update)=>{
    const contenedor  =$('<div></div>');
    const row         =$('<div class="grid row"></div>');

    const item=generatorItems(board.boardData,row,update);
    console.log(item);

    row.append(item);
    contenedor.append(row);

    return contenedor;
}

const items=(e)=>{

    const pin         =$('<div class="col s12 m3"></div>');
    const div         =$('<div class="radius"></div>');
    const img         =$('<img class="responsive-img" src="'+e.image.original.url+'">');
    const description =$('<p>'+e.note+'</p>');
    const nameBoard   =$('<p>'+e.board.name+'</p>');
    const overlay     =$('<div class="overlay" data-target="modal1"></div>');
    const divIcon     =$('<div class="icon-div btn white"></div>');
    const up          =$('<span class="icon-share"></span>');
    const btn         =$('<a class="waves-effect waves-light btn boton">Guardar</a>');

    divIcon.append(up);
    overlay.append(divIcon);
    overlay.append(btn);
    div.append(img);
    pin.append(div);
    if(e.metadata.article!=undefined) {
        const titulo = $('<h6>' + e.metadata.article.name + '</h6>');
        pin.append(titulo);
    }

    pin.append(description);
    pin.append(overlay);
    pin.append(nameBoard);

//Abrir modal y almacenar data
    overlay.on('click',(event) => {
        event.preventDefault();
        pins.selected = e;
        console.log(pins);
        pins.image = pins.selected.image.original.url

        if(pins.selected.metadata.article!=undefined) {
          pins.title = pins.selected.metadata.article.name;
          pins.description = pins.selected.metadata.article.description;
          $('#title').text(pins.title);
        }
        if(pins.selected.metadata.link!=undefined) {
          pins.fuente.author = pins.selected.metadata.link.site_name;
          pins.fuente.favicon = pins.selected.metadata.link.favicon;
          pins.fuente.link = pins.selected.link;
        }
          $('#modal1').modal();

});
    return pin;
}

const generatorItems=(data,row,update)=>{

    data.forEach((e)=>{
        row.append(items(e));
    })
}
