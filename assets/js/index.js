const tiles = [...document.getElementById("board").children];
const p1 = new Player('X');
const p2 = new Player('O');
const board = new Board();
const game = new Game(board, p1, p2);

// remove onclick event after tile is played
// remove class active
(() => tiles.forEach((tile, index) => tile.setAttribute("onclick", "playerMove(" + index + ")")))();

function playerMove(index) {
  if(game.move(index)) {
    tiles[index].innerHTML = game.currentPlayer.mark;
    if(game.isEnded()) {
      alert("player X wins");
    } else {
      game.changeCurrentPlayer(); }
  };
}
