import { PlayerType } from "./types";


export class Grid {
    public board: PlayerType[][];
    public winningAmount: number = 4;
    
    constructor() {
        this.board = [
            [PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty],
            [PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty],
            [PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty],
            [PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty],
            [PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty],
            [PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty, PlayerType.Empty]
        ]
    }

    public get(x: number, y: number) {
        return this.board[y][x];
    }

    public set(x: number, y: number, player: PlayerType) {
        this.board[y][x] = player;
    }

    public move(y: number, player: PlayerType) {
        if (this.get(0, y) !== PlayerType.Empty) throw Error("No available spaces in this column");

        for (let x = this.board.length; x >= 0; x--) {
            if (this.get(x, y) === PlayerType.Empty) {
                this.set(x, y, player);
                break;
            }
        }
    }

    public isWinner(player: PlayerType): PlayerType {
        let won: PlayerType = this.checkRows(player);
        if (won !== PlayerType.Empty) return won;

        won = this.checkColumns(player);
        if (won !== PlayerType.Empty) return won;

        won = this.checkDiagnials(player);
        if (won !== PlayerType.Empty) return won;

        return won;
    }

    private checkRows(player: PlayerType): PlayerType {
        for (let y = 0; y < this.board.length; y++) {
            if (this.inRow(y, player) !== PlayerType.Empty) return player;
        }

        return PlayerType.Empty;
    }

    private checkColumns(player: PlayerType): PlayerType {
        for (let x = 0; x < this.board[0].length; x++) {
            if (this.inColumn(x, player) !== PlayerType.Empty) return player;
        }

        return PlayerType.Empty;
    }

    private checkDiagnials(player: PlayerType): PlayerType {
        for (let y = 0; y < this.board.length; y++) {
            for (let x = 0; x < this.board[y].length; x++) {
                if (this.get(x, y) === player && this.get(x + 1, y + 1) === player && this.get(x + 2, y + 2) === player && this.get(x + 3, y + 3) === player) return player;
                if (this.get(x, y) === player && this.get(x + 1, y - 1) === player && this.get(x + 2, y - 2) === player && this.get(x + 3, y - 3) === player) return player;
            }
        }

        return PlayerType.Empty;
    }

    private inRow(x: number, player: PlayerType): PlayerType {
        return this.isIn(this.board[x], player, this.board[0].length - this.winningAmount);
    }

    private inColumn(x: number, player: PlayerType): PlayerType {
        const column: PlayerType[] = [];

        for (let y = 0; y < this.board.length; y++) {
            column.push(this.get(x, y));
        }

        return this.isIn(column, player, this.board.length - this.winningAmount);
    }

    private isIn(array: PlayerType[], player: PlayerType, offset: number): PlayerType {
        for (let i = 0; i < offset; i++) {
            const temp = array.slice(i, i + 4);
            if (temp.every(position => position === player)) return player;
        }

        return PlayerType.Empty;
    }
}
