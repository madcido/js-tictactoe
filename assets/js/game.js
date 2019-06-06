// game.move(index)  0,1,2,3..
// - return board.isValid(index) return true

// GAME
// function move(index)
// - just makes move not changes any state, not changes any display
// - interacts with board -> check board[index] is valid? -> update board[index] = currentPlayer

// BOARD isValid(index)
// - check the given index is played before? && index is in range 0..9

// BOARD update
// function update(index, mark) {
// if(this.isValid(index) {
// board[index] = mark;
// }
// }

function Game(board, p1, p2) {
    this.board = board;
    this.p1 = p1;
    this.p2 = p2;
    this.currentPlayer = p1;
    this.moveIsValid = (index) => {
        if((this.board.tiles[index] === 'X' || this.board.tiles[index] === 'O')
        && [0,1,2,3,4,5,6,7,8].includes(index)) {

            return false;
        }
        this.board.tiles[index] = this.currentPlayer.mark;
        return true;
    }
    this.isOver = () => {
        let winnerCombo = winConditions.filter((condition) => winAchieved(condition, this.board));
        if (winnerCombo.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    this.changeCurrentPlayer = () => { (this.currentPlayer === p1) ? this.currentPlayer = p2 : this.currentPlayer = p1 }
}


const winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
function winAchieved(array, board) {
    return (board.tiles[array[0]] == board.tiles[array[1]] && board.tiles[array[1]] == board.tiles[array[2]]);
}
