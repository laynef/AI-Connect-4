import { PlayerType } from "./types";

export class Grid {
    public board: number[][];
    
    constructor() {
        this.board = [
            [PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty],
            [PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty],
            [PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty],
            [PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty],
            [PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty],
            [PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty,PlayerType.Empty]
        ]
    }

    get(x: number, y: number) {
        return this.board[y][x];
    }

    set(x: number, y: number, player: PlayerType) {
        this.board[x][y] = player;
    }

    move(y: number, player: PlayerType) {
        if (this.get(0, y) !== PlayerType.Empty) throw Error("No available spaces in this column");

        for (let x = this.board.length; x >= 0; x--) {
            if (this.get(x, y) === PlayerType.Empty) {
                this.set(x, y, player);
                break;
            }
        }
    }
}