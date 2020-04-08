// Buisiness Logic --------

var player1 = Player()
var player2 = Player()

function Player(name) {
  this.name = name;
  this.diceRoll = 0;
  this.totalScore = 0;
  
}

Player.prototype.roll = function()
 var roll = Math.floor((Math.random() * 6) + 1) ;
console.log(roll)