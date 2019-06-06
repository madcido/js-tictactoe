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
  this.move = (index) => {
    if((this.board.tiles[index] === 'X' || this.board.tiles[index] === 'O')
      && [0,1,2,3,4,5,6,7,8].includes(index)) {

      return false;
    }
    this.board.tiles[index] = this.currentPlayer.mark;
    return true;
  }
  this.isEnded = () => { return false }
  this.changeCurrentPlayer = () => { (this.currentPlayer === p1) ? this.currentPlayer = p2 : this.currentPlayer = p1 }
}
