import { AI } from "./ai";
import { Grid } from "./grid";
import { PlayerType, Difficulty } from "./types";


export class ConnectFour {
    public grid: Grid;
    public difficulty: Difficulty;
    public player: PlayerType;

    constructor(difficulty: Difficulty) {
        this.grid = new Grid();
        this.player = PlayerType.Player;
        this.difficulty = difficulty;
    }

    public move(y?: number): PlayerType {
        const winner: PlayerType = this.grid.isWinner(this.player);
        if (winner !== PlayerType.Empty) {
            return winner;
        }

        if (this.player === PlayerType.Player && y!) {
            this.grid.move(y, this.player);
        } else {
            const ai = new AI(this.grid);
            this.grid.move(ai.move(this.difficulty), this.player);
        }

        this.switchPlayer();

        return PlayerType.Empty;
    }

    private switchPlayer(): PlayerType {
        return this.player === PlayerType.Player ? PlayerType.Computer : PlayerType.Player;
    }
}
