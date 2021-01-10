import { AI } from "./ai";
import { Grid } from "./grid";
import { PlayerType } from "./types";


export class ConnectFour {
    public grid: Grid;
    public player: PlayerType;

    constructor() {
        this.grid = new Grid();
        this.player = PlayerType.Player;
    }

    move(y?: number): PlayerType {
        if (this.player === PlayerType.Player && y!) {
            this.grid.move(y, this.player);
        } else {
            const ai = new AI(this.grid);
            this.grid.move(ai.bestMove(), this.player);
        }

        const winner: PlayerType = this.grid.isWinner(this.player);
        if (winner !== PlayerType.Empty) {
            return winner;
        } else {
            this.player = this.switchPlayer();
        }

        return PlayerType.Empty;
    }

    switchPlayer() {
        return this.player === PlayerType.Player ? PlayerType.Computer : PlayerType.Player;
    }
}
