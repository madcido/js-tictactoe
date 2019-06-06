const p1 = new Player('X');
const p2 = new Player('O');
const board = new Board();
const game = new Game(board, p1, p2);

function playerMove(index) {
  if(game.isValidMove(index)) {
    display.handleMove(index, game.currentPlayer.mark);
    if(game.isOver()) {
      alert("Player " + game.currentPlayer.mark + " wins");
      game.board.reset();
      game.currentPlayer.score++;
      display.resetBoard();
      display.updateScores(p1, p2);
    } else {
      if(game.isTied()) {
        alert("Game is tied!");
        game.board.reset();
        display.resetBoard();
      }
      game.changeCurrentPlayer();
    };
  }
}

display.resetBoard();
