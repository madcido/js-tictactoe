const p1 = new Player('X');
const p2 = new Player('O');
const board = new Board();
const game = new Game(board, p1, p2);

function playerMove(index) {
    if(game.isValidMove(index)) {
        display.handleMove(index, game.currentPlayer.mark);
        if(game.isOver()) {
            alert(game.message);
            display.resetBoard();
            display.updateScores(p1, p2);
        }
        game.changeCurrentPlayer();
        display.activePlayer(game.currentPlayer.mark);
    }
}

display.resetBoard();
