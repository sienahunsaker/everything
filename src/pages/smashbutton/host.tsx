import Head from "next/head";
import styles from "./host.module.css";
import Link from "next/link";
export type GroomsmenAndRiddles = {};
export default function Host() {
  return (
    <>
      <Head>
        <title>Smash Button</title>
        <meta
          name="description"
          content="Create or Join a game and start Smashing that big ass button"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            html,
            body {
              background-color: #ffebf4;
              color: black;
            }
          `}
        </style>
      </Head>
      <main className={styles.main}>
        <h1>SMASH BUTTON</h1>
        <div>
          <label className={styles.label}>Game Code:</label>
          <span className={styles.code}>7CF9SF</span>
        </div>
        <h2>BUZZ QUEUE</h2>
        <div className={styles.buzzdiv}>
          <label className={styles.firstBuzz}>1: ITS A WEB APP</label>
          <label className={styles.secondBuzz}>2:SAMBINO</label>
          <label className={styles.secondBuzz}>3:GERTRUDE</label>

          <div className={styles.buttonDiv}>
            <button className={styles.green}>CORRECT</button>
            <button className={styles.red}>INCORRECT</button>
            <button className={styles.blue}>NO PENALTY</button>
            <button className={styles.clear}>CLEAR BUZZER</button>
          </div>
        </div>
        <h2>PLAYERS</h2>
        <div className={styles.firstBuzz}>ITS A WEB APP: -48</div>
      </main>
    </>
  );
}
