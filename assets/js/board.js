function Board() {
  this.tiles = new Array(9).fill(null);
}

Board.prototype.reset = function() {
  this.tiles = new Array(9).fill(null);
}

Board.prototype.isFull = function() {
  return !this.tiles.some((tile) => tile == null);
}
