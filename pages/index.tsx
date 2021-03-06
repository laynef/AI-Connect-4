import * as React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "../components/board";
import { Difficulty } from "../game/types";


export default function Home(): React.ReactNode {
  const [difficulty, setDifficulty] = React.useState(Difficulty.Beatable);

  return (
    <div className={styles.container}>
      <Head>
        <title>Connect 4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Connect 4</h1>
        <Board difficulty={difficulty} />
      </main>
    </div>
  )
}
