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
        pins.id = e.id;

        $.get('https://api.pinterest.com/v1/pins/'+ pins.id +'/?access_token=AZfXkRQCZFONB6C_L-FTMYOrNkI0FM6hzadQ7gVEIt-RlsA7PgAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmedia%2Cmetadata%2Cboard%2Ccolor%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage')
        .done(function(response) {
          pins.pin = response.data;
          pins.creator = pins.pin.creator.first_name;
          pins.description = pins.pin.metadata.article.description;
          pins.fuente.author = pins.pin.metadata.link.site_name;
          pins.fuente.favicon = pins.pin.metadata.link.favicon;
          pins.fuente.link = pins.pin.link;
          console.log(pins);
          $('#description').text(pins.description);
          $('#modal1').modal();
        });
});
    return pin;
}

const generatorItems=(data,row,update)=>{

    data.forEach((e)=>{
        row.append(items(e));
    })
}
