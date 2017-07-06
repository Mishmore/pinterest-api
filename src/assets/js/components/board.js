'use strict';

const boardPins=(update)=>{
    // const contenedor  =$('<div></div>');
    const row =$('<div class="row grid"></div>');

    const item=generatorItems(board.boardData,row,update);
    console.log(item);

    row.append(item);
    // contenedor.append(row);

    // return contenedor;
    return row;
}

const items=(e)=>{

    const pin         =$('<div class="col s12 m3 xl3 grid__pin"></div>');
    const div         =$('<div class="grid__pin-radius"></div>');
    const img         =$('<img class="responsive-img" src="'+e.image.original.url+'">');
    const info        =$('<div class="col s12"></div>');
    const userCont    =$('<div class="col s12"></div>');
    const user        =$('<div class="col s3 m4 xl4"><img src="'+ profile.image +'" alt="foto arabela" class="circle responsive-img"></div>');
    const nameBoard   =$('<div class="col s8">'+e.board.name+'<br>'+profile.first_name+'</div>');
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

    return pin;
}

const generatorItems=(data,row,update)=>{

    data.forEach((e)=>{
        row.append(items(e));
    });
}
