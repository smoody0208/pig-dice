// Buisiness Logic --------
function Player(name) {
  this.name = name;
  this.roundScore = 0;
}

var turnPoints = [];
var total = [];

var player1 = new Player("player1")
var player2 = new Player("player2")
var currentPlayerId = 0
var players =  [player1, player2]


// Random number -------
Player.prototype.roll = function() {
var randomRoll = Math.floor((Math.random() * 6) + 1);
  if (randomRoll != 1) {
    turnPoints.push(randomRoll); //pushes randomRoll into turn array
  } else {
    turnPoints = [0]; //if they do roll a 1 it will set turn "points" to zero
    if (currentPlayerId === 0) { //if 1st index (player1) rolled 1 this changes players (index)
      currentPlayerId = 1 //makes player2 currentPLayerId
    } else {
      currentPlayerId = 0 //makes player1 currentplayer
    }}
  return randomRoll;
}

Player.prototype.hold = function() {
//add up turnpoints
//add turnPoints to players roundscore
//switch players
}


// User Interface ------

$(document).ready(function() {
  $("form#names").submit(function(event) {
    event.preventDefault();

    var playerOneInput = $("input#playerOneName").val();
    var playerTwoInput = $("input#playerTwoName").val();
    $(".player1-input").text(playerOneInput);
    $(".player2-input").text(playerTwoInput);
    console.log(playerOneInput);
  })
}); 

