import * as React from "react";
import { ConnectFour } from "../game/connectFour";
import { Difficulty } from "../game/types";


export function useStartGame(difficulty: Difficulty): ConnectFour {
    const game = new ConnectFour(difficulty);
    return game; 
}

export function useMakeMove(game: ConnectFour, y?: number): ConnectFour {
    game.move(y);
    return game;
}

