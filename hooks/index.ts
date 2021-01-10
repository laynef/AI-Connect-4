import * as React from "react";
import { ConnectFour } from "../game/connectFour";
import { Difficulty, PlayerType } from "../game/types";


export function useStartGame(difficulty: Difficulty): [ConnectFour, (y?: number) => PlayerType] {
    const Game = new ConnectFour(difficulty);
    const [game, setGame] = React.useState(Game);

    function handleMakeMove (y?: number) {
        const player = game.move(y);
        setGame(game);
        return player;
    }

    return [game, (y?: number) => handleMakeMove(y)]; 
}

