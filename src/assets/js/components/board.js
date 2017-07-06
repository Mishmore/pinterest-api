'use strict';

const boardPins=(update)=>{
    const contenedor  =$('<div></div>');
    const row         =$('<div class="row"></div>');

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
    const overlay     =$('<div class="overlay"></div>');
    const divIcon     =$('<div class="icon-div btn white"></div>');
    const up          =$('<span class="icon-out"></span>');
    const btn         =$('<a class="waves-effect waves-light btn boton">Guardar</a>');

    //img.css("height",e.image.original.height+"px");
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

    return pin;
}

const generatorItems=(data,row,update)=>{

    data.forEach((e)=>{
        row.append(items(e));
    })
}
