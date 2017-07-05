'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar(_ => render(root)));
  wrapper.append(Header(_ => render(root)));
  root.append(wrapper);
}

const board = {
  boardData: null
}

$( _ => {
  $.get( "https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYneH0AVANBioiyRpgDkY8hLv8LpFM4lRp9RIINEIt-RlsA7PgAAAAA&fields=id%2Clink%2Cimage%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Cmedia%2Cmetadata%2Cnote%2Coriginal_link%2Curl")
  .done(function( response ) {
    board.boardData = response.data;
    console.log(board.boardData.id);

    board.boardData.forEach(function(e) {
      if (e.attribution != null) {
        console.log(e.attribution.author_name);
      }
    })
  });

  const root = $('.root');
  render(root);
  console.log('renderizando');
});
