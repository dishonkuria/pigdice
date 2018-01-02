// business logic
var player1="";
var player2="";

 var throwdice = function () {
   return Math.floor(6*Math.random())+1;
 }

 function Player(turn) {
   this.roll = 0;
 }
