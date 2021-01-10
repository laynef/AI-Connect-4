import { Grid } from "./grid";
import { Difficulty, PlayerType } from "./types";


export class AI {
    public grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    public move(difficulty: Difficulty): number {
        if (difficulty === Difficulty.Beatable) return this.randomMove();
        else return this.bestMove();
    }

    public bestMove(): number {
        return 0;
    }

    public randomMove(): number {
        const possibilites = this.allPossibleLocations();
        const index = Math.floor(Math.random() * possibilites.length);
        return possibilites[index];
    }

    private getEmptyColumn(x: number): number {
        for (let y = 0; y < this.grid.board.length; y++) {
            if (this.grid.get(x, y) === PlayerType.Empty) {
                return y;
            }
        }

        return -1;
    }

    private allPossibleLocations(): number[] {
        const possibilites = [];
        for (let x = 0; x < this.grid.board[0].length; x++) {
            const position = this.getEmptyColumn(x);
            if (position >= 0) possibilites.push(position);
        }
        return possibilites;
    }
}
