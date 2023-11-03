import Head from "next/head";
import styles from "./join.module.css";
import Link from "next/link";
export type GroomsmenAndRiddles = {};
export default function Join() {
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
        <label className={styles.label}>Game Code</label>
        <input type="number" placeholder="731921" title="Code"></input>
        <label className={styles.label}>Nickname</label>
        <input type="text" placeholder="Jack's ass" title="Code"></input>
        <Link href={""}>
          <button>ENTER</button>
        </Link>
      </main>
    </>
  );
}
