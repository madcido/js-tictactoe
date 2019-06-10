function Board() {
    this.tiles = new Array(9).fill(null);
    this.reset = () => {
        this.tiles = new Array(9).fill(null);
    }
    this.isFull = () => {
        return !this.tiles.some((tile) => tile == null );
    }
}
