import Head from "next/head";
import styles from "./home.module.css";
import Link from "next/link";
export type GroomsmenAndRiddles = {};
export default function Home() {
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
        <div className={styles.info}>
          <h1>SMASH BUTTON</h1>
          <p>
            Welcome to Smash Button, a place for everyone. Winners and Losers.
            Strongmen and Weakmen. Strongwomen and Weakwomen. Strongthey and
            Weakthey.
          </p>

          <p>Just kidding, fuck the weak.</p>
        </div>
        <div className={styles.buttonDiv}>
          <Link href={"/smashbutton/join"}>
            <button className={styles.join}>JOIN GAME</button>
          </Link>
          <Link href={"/smashbutton/create"}>
            <button className={styles.create}>CREATE GAME</button>
          </Link>
        </div>
      </main>
    </>
  );
}
