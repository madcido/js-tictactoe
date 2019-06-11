function Game(board, p1, p2) {
  this.board = board;
  this.p1 = p1;
  this.p2 = p2;
  this.currentPlayer = p1;
  this.winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
}

Game.prototype.isValidMove = function(index) {
  if((this.board.tiles[index] === 'X' || this.board.tiles[index] === 'O')) {
    return false;
  }
  this.board.tiles[index] = this.currentPlayer.mark;
  return true;
}

Game.prototype.isOver = function() {
  return (this.hasWinner() || this.board.isFull());
}

Game.prototype.hasWinner = function() {
  return this.winConditions.some((combin) => {
    return combin.every((index) => {
      return this.board.tiles[index] != null &&
        this.board.tiles[index] == this.board.tiles[combin[0]]
    });
  });
}

Game.prototype.over = function() {
  let message = "Tie!";
  if (this.hasWinner()) {
    this.currentPlayer.score++;
    message = "Player " + this.currentPlayer.mark + " wins!";
  }
  this.board.reset();
  return message;
}

Game.prototype.changeCurrentPlayer = function() {
  this.currentPlayer = (this.currentPlayer === p1) ? p2 : p1;
}
