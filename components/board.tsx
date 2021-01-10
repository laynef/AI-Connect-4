import * as React from "react";
import { Difficulty } from "../game/types";
import { useStartGame } from "../hooks";


interface BoardProps {
    difficulty: Difficulty;
}

export default function Board({ difficulty }: BoardProps) {
    const [game, makeMove] = useStartGame(difficulty);

    return (
        <div>
            {game.grid.board.map((row, rowIdx) => {
                return (
                    <div key={rowIdx}>
                        {row.map((piece, colIdx) => (
                            <div key={`${rowIdx}-${colIdx}`}>

                            </div>
                        ))}
                    </div>
                )}
            )}
        </div>
    )
}