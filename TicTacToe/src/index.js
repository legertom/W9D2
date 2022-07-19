const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let game = new Game();
  let el = document.getElementsByClassName('ttt')[0];
  el.style.height = '100vh';
  let v = new View(game, el); 
});
