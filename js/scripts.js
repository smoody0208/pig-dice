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
    $("#player-one").fadeOut();
    $("#player-two").fadeIn();

  } else {
    currentPlayerId = 0 //makes player1 currentplayer
    $("#player-two").fadeOut();
    $("#player-one").fadeIn();
    
  }
}

//Random number -------
Player.prototype.roll = function() {
var randomRoll = Math.floor((Math.random() * 6) + 1);//
  if (randomRoll != 1) {
    turnPoints += randomRoll; //pushes randomRoll into turn array
    if (this.totalScore + turnPoints >= 100) {
      alert(this.name + " Congrats! You won!");
    }
  } else {
    alert(this.name + ", you rolled a 1! Your turn is over and you lose your turn points!");
    SwitchUser(); 
  }
  return randomRoll;
}

//Hold Button Function
Player.prototype.hold = function() {
this.totalScore += turnPoints;//add turnPoints to players roundscore
SwitchUser();//switch players
console.log(turnPoints);
} 

// User Interface ------

$(document).ready(function() {
  $("form#names").submit(function(event) {
    event.preventDefault();

    var playerOneInput = $("input#playerOneName").val();
    var playerTwoInput = $("input#playerTwoName").val();
    $(".player1-input").text(playerOneInput);
    $(".player2-input").text(playerTwoInput);

    $("#names").hide();
    $("#game").show();
    console.log(playerOneInput);
  })
  $("#play-one").click(function(){
    var playerOneRoll = player1.roll();
    $("#player1-roll").text(playerOneRoll);
    $("#player1-score").text(turnPoints);
  })

  $("#hold-one").click(function(){
    player1.hold();
    $("#player-one").fadeOut();
    $("#player-two").fadeIn();
    $("#player1-total-score").text(player1.totalScore);
  })

  $("#play-two").click(function(){
    var playerTwoRoll = player2.roll();
    $("#player2-roll").text(playerTwoRoll);
    $("#player2-score").text(turnPoints);
    
  })

  $("#hold-two").click(function(){
    player2.hold();
    $("#player-one").fadeIn();
    $("#player-two").fadeOut();
    $("#player2-total-score").text(player2.totalScore);
  })


}); 


