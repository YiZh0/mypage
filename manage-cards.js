var newN = 0;

function addCard(interestID) {
  var newID = 'card' + newN.toString();
  var tweet = $('<div class="card" id="' + newID + '"> <div class="text-right"><button type="button" class="btn btn-danger btn-circle btn-sm pull-right" onClick="deleteCard('+ "'" + newID + "'" + ')">x</button></div> <br> <br><img class="rounded mx-auto d-block" src="https://pbs.twimg.com/profile_images/880132255011586048/rlZKfFFe_400x400.jpg" alt="Tweet" height="70px" width="70px"> <br> <h5 class="text-right">Tweet &emsp;</h5> <p class="text-right">Tweet go here! &emsp;</p> </div>');
  newN++;
  var toid = '#'+interestID;
  tweet.appendTo(toid);
}

function deleteCard(cardID) {
  document.getElementById(cardID).remove();
}
