import { Grid } from "./grid";

export class AI {
    public grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    public bestMove(): number {
        return 0;
    }

}