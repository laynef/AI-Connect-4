import * as React from "react";
import { Difficulty, PlayerType } from "../game/types";
import { useStartGame } from "../hooks";
import styles from "../styles/Board.module.css";


interface BoardProps {
    difficulty: Difficulty;
}

export default function Board({ difficulty }: BoardProps) {
    const [game, makeMove] = useStartGame(difficulty);

    return (
        <div className={styles.container}>
            {game.grid.board.map((row, rowIdx) => {
                return (
                    <div key={rowIdx} className={styles.row}>
                        {row.map((piece, colIdx) => (
                            <div onClick={() => makeMove(colIdx)} className={styles.pieceContainer} key={`${rowIdx}-${colIdx}`}>
                                <div className={
                                    piece === PlayerType.Empty ? styles.emptyPiece : 
                                    piece === PlayerType.Player ? styles.playerPiece : styles.computerPiece
                                } />
                            </div>
                        ))}
                    </div>
                )}
            )}
        </div>
    )
}