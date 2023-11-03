import Head from "next/head";
import styles from "./create.module.css";
import Link from "next/link";
export type GroomsmenAndRiddles = {};
export default function Create() {
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
        <label className={styles.label}>Correct answer award:</label>
        <input placeholder="2"></input>

        <label className={styles.label}>Incorrect answer penalty:</label>
        <input placeholder="-1"></input>
        <div className={styles.buzz}>
          <label className={styles.label}>Buzz cooldown</label>

          <label className={styles.desc}>
            (Time before buzz is allowed again)
          </label>
          <input placeholder="10"></input>
        </div>
        <Link href={"/smashbutton/host"}>
          <button>START</button>
        </Link>
      </main>
    </>
  );
}
