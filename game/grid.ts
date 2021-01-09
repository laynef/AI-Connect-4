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

    public get(x: number, y: number) {
        return this.board[y][x];
    }

    public set(x: number, y: number, player: PlayerType) {
        this.board[x][y] = player;
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
        return PlayerType.Empty;
    }

    private checkColumns(player: PlayerType): PlayerType {
        return PlayerType.Empty;
    }

    private checkDiagnials(player: PlayerType): PlayerType {
        return PlayerType.Empty;
    }
}