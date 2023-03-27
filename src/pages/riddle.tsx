import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Riddle.module.css";
import { useSearchParams } from "next/navigation";
import { RiddleData, riddles } from "../../data/riddledata";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Riddle() {
  const searchParams = useSearchParams();
  let riddle: RiddleData | undefined = undefined;
  const passPhrase = searchParams.get("passphrase");
  if (passPhrase) {
    riddle = riddles[passPhrase];
    console.log(riddle);
  }

  return (
    <>
      <Head>
        <title>Your Riddle</title>
        <meta name="description" content="Solve this if you're strong enough" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>{riddle?.name},</div>
        <div>{riddle?.p1}</div>
        <div>
          However, this is a highly sought after draft, to prove yourself worthy
          of the draft (and all the riches if you participate) we have created a
          riddle for you to solve. Only {riddle?.name} would be able to solve
          this riddle (because of your superior intellect). Solve this before
          August 11th and your spot in the draft will be secured. Good luck.
          Godspeed.
        </div>

        <div>
          <label>RULES</label>
          <ul>
            {riddle?.rules.map((rule) => (
              <li>{rule}</li>
            ))}
          </ul>
        </div>
        {riddle?.imagePath && (
          <div>
            <Image
              src={riddle.imagePath}
              alt="Riddle Image"
              width={500}
              height={500}
            ></Image>
          </div>
        )}
      </main>
    </>
  );
}
