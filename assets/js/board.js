function Board() {
    this.tiles = new Array(9).fill(null);
    this.reset = () => {
        this.tiles = new Array(9).fill(null);
    }
}
