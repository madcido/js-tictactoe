function Game(board, p1, p2) {
    this.board = board;
    this.p1 = p1;
    this.p2 = p2;
    this.currentPlayer = p1;

    this.isValidMove = (index) => {
        if((this.board.tiles[index] === 'X' || this.board.tiles[index] === 'O')) {
            return false;
        }
        this.board.tiles[index] = this.currentPlayer.mark;
        return true;
    }

    this.hasWinner = () => {
        return Game.prototype.winConditions.some((combin) => {
            return combin.every((index) => {
                return this.board.tiles[index] != null &&
                this.board.tiles[index] == this.board.tiles[combin[0]]
            });
        });
    }

    this.isOver = () => {
        if (this.hasWinner() || this.isTied()) {
            this.message = "Tie!"
            if (this.hasWinner()) {
                this.currentPlayer.score++;
                this.message = "Player " + this.currentPlayer.mark + " wins!"
            }
            this.board.reset();
            return true;
        } else {
            return false;
        }
    }

    this.isTied = () => {
        return !this.board.tiles.some((tile) => tile == null );
    }

    this.changeCurrentPlayer = () => {
        this.currentPlayer = (this.currentPlayer === p1) ? p2 : p1;
    }
}

Game.prototype.winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
