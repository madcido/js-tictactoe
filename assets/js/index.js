const tiles = [...document.getElementById("board").children];
const p1Score = document.getElementById("p1");
const p2Score = document.getElementById("p2");
const p1 = new Player('X');
const p2 = new Player('O');
const board = new Board();
const game = new Game(board, p1, p2);

// remove onclick event after tile is played
// remove class active
// (() => tiles.forEach((tile, index) => tile.setAttribute("onclick", "playerMove(" + index + ")")))();
// resetBoard();

function playerMove(index) {
    if(game.moveIsValid(index)) {
        tiles[index].innerHTML = game.currentPlayer.mark;
        tiles[index].removeAttribute("onclick");
        tiles[index].removeAttribute("class");
        let winner;
        if(winner = game.isOver()) {
            alert("Player " + game.currentPlayer.mark + " wins");
            game.currentPlayer.score++;
            game.board.reset();
            resetBoard();
            updateScores();
        } else {
            game.changeCurrentPlayer();
        };
    }
}

function resetBoard() {
    tiles.forEach((tile, index) => {
        tile.innerHTML = index + 1;
        tile.setAttribute("onclick", "playerMove(" + index + ")");
        tile.setAttribute("class", "clickable");
    })
}

function updateScores() {
    p1Score.innerHTML = p1.score;
    p2Score.innerHTML = p2.score;
}

resetBoard();
