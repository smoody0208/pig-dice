// Buisiness Logic --------
var turn = [];
var total = [];

var player1 = new Player("player1")
var player2 = new Player("player2")

function Player(name) {
  this.name = name;
  this.diceRoll = 0;
  this.roundScore = 0;
  
}

// Random number -------

Player.prototype.roll = function() {
var randomRoll = Math.floor((Math.random() * 6) + 1);

  if (randomRoll != 1) {
    turn.push(randomRoll); //need to determine when turn ends
  } else {
    turn = [0];
    return "Rolled a 1!"
    
  }
  return roll;
}