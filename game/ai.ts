import { Grid } from "./grid";
import { Position } from "./types";

export class AI {
    public grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    public bestMove(): number {
        return 0;
    }

}