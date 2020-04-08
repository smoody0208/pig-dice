// Buisiness Logic --------
function Player(name) {
  this.name = name;
  this.totalScore = 0;
}

var turnPoints = 0;

var player1 = new Player("player1")
var player2 = new Player("player2")
var currentPlayerId = 0
var players =  [player1, player2]

//Player Switch Function
function SwitchUser() {
  turnPoints = 0; //this will clear turn points when players switch
  if (currentPlayerId === 0) { // checking to see if current player is index 0
    currentPlayerId = 1 //makes player2 currentPLayerId
  } else {
    currentPlayerId = 0 //makes player1 currentplayer
  }
}

//Random number -------
Player.prototype.roll = function() {
var randomRoll = Math.floor((Math.random() * 6) + 1);//
  if (randomRoll != 1) {
    turnPoints += randomRoll; //pushes randomRoll into turn array
  } else {
    SwitchUser(); 
  }
  return randomRoll;
}

//Hold Button Function
Player.prototype.hold = function() {
this.totalScore += this.turnPoints;//add turnPoints to players roundscore
SwitchUser();//switch players
} 

// Check if Winner
Player.prototype.checkIfWinner = function() {
  if (this.totalScore >= 100) {
    alert(this.name + " Congrats! You won!");
  }
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
  $("#play-one").click(function(){
    var playerOneRoll = player1.roll();
    $("#player1-roll").text(playerOneRoll);
  
  })

  $("#hold-one").click(function(){
    var playerOneScore = player1.hold();
    $("#player1-total-score").text(playerOneScore);
  })

  $("#play-two").click(function(){
    var playerTwoRoll = player2.roll();
    $("#player2-roll").text(playerTwoRoll);
  })

  $("#hold-two").click(function(){
    var playerTwoScore = player2.hold();
    $("#player2-total-score").text(playerTwoScore);
    console.log(playerTwoScore);
  })


}); 


