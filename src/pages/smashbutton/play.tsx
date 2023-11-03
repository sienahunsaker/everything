import Head from "next/head";
import styles from "./play.module.css";
import Link from "next/link";
export default function Play() {
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
        <Link href={"/smashbutton/host"}>
          <button>SMASH ME (;</button>
        </Link>

        <div>
          <div className={styles.playerName}>
            <label>SCORE</label>
            <label className={styles.points}>2</label>
          </div>
          <h2>LEADER BOARD</h2>
          <div className={styles.playerName}>
            <label>1: ITS A WEB APP</label>
            <label className={styles.points}>5</label>
          </div>
          <div className={styles.playerName}>
            <label>2: ITS A WEB APP</label>
            <label className={styles.points}>2</label>
          </div>
        </div>
      </main>
    </>
  );
}
