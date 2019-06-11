const p1 = new Player('X');
const p2 = new Player('O');
const board = new Board();
const game = new Game(board, p1, p2);
let mode = "";

if(document.getElementById) {
  window.alert = (message) => {
    customAlert = document.createElement('div');
    customAlert.innerHTML = message;
    customAlert.setAttribute('class', 'custom-alert');
    closeBtn = customAlert.appendChild(document.createElement('a'));
    closeBtn.appendChild(document.createTextNode("Play Again!"));
    closeBtn.href = "#";
    closeBtn.focus();
    closeBtn.onclick = () => {
      display.resetBoard();
      document.getElementById('board').removeChild(document.getElementsByClassName('custom-alert')[0]);
      return false;
    };
    document.getElementById('board').appendChild(customAlert);
  }
}

function playerMove(index) {
    if (game.isValidMove(index)) {
        game.move(index);
        display.handleMove(index, game.currentPlayer.mark);
        if (game.isOver()) {
            alert(game.over());
            display.updateScores(p1, p2);
        } else {
            game.changeCurrentPlayer();
            display.activePlayer(game.currentPlayer.mark);
            if (mode == "AI") {
                aiMove();
            }
        }
    }
}

function changeMode() {
    if (document.getElementById("AI").checked) {
        mode = "AI";
    } else {
        mode = "PVP";
    }
}

function aiMove() {
    let aiMove = randomMove();
    game.move(aiMove);
    display.handleMove(aiMove, game.currentPlayer.mark);
    if (game.isOver()) {
        alert(game.over());
        display.updateScores(p1, p2);
    }
    game.changeCurrentPlayer();
    display.activePlayer(game.currentPlayer.mark);
}

function randomMove() {
    let move;
    do {
        move = Math.floor(Math.random()*9);
    } while (!game.isValidMove(move));
    return move;
}

function smartMove() {
    //someday...
}

changeMode();
display.resetBoard();
