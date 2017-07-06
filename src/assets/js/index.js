'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar(_ => render(root)));
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Modal(_ => render(root)));
  root.append(wrapper);
}
const board = {
  boardData: null
}
const profile = {
  userData: null,
  board_name: null,
  name: null,
  image: null,
  pins: null,
  followers: null
}
$( _ => {
  $.get( "https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYneH0AVANBioiyRpgDkY8hLv8LpFM4lRp9RIINEIt-RlsA7PgAAAAA&fields=id%2Clink%2Cimage%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Cmedia%2Cmetadata%2Cnote%2Coriginal_link%2Curl")
  .done(function( response ) {
    board.boardData = response.data;
    board.boardData.forEach(function(e) {
      if (e.attribution != null) {
        console.log(e.attribution.author_name);
      }
    })
  });

  $.get('https://api.pinterest.com/v1/users/arabelyuska/?access_token=AdYPEVg00YQcQqsem5eglmzv-LRYFM6ZHmEFGwZEIt-RlsA7PgAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cbio%2Cusername%2Caccount_type%2Ccounts%2Ccreated_at%2Cimage')
  .done(function(response) {
    profile.userData = response.data;
    profile.name = profile.userData.first_name;
    profile.image = profile.userData.image["60x60"].url;
    
    $.get('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=AdYPEVg00YQcQqsem5eglmzv-LRYFM6ZHmEFGwZEIt-RlsA7PgAAAAA&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Ccreator%2Cimage')
    .done(function(response) {
      profile.board_name = response.data.name;
      profile.pins = response.data.counts.pins;
      profile.followers = response.data.counts.followers;

      const root = $('.root');
      render(root);
    })
  });


});
