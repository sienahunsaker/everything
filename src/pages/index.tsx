import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RiddleAPIResponse } from "./api/leaderboard/[...groomsmen]";
import { RiddleEntry } from "../../db/riddleentry/models/riddleentry";
import { Groomsmen } from "../../db/groomsmen/models/groomsmen";
import GroomsmenProfile from "../../components/groomsmenprofile";
import { groomsmenAttributes } from "../../data/groomsmenattributes";

export type GroomsmenAndRiddles = {
  groomsmen: Groomsmen;
  riddles: RiddleEntry[];
};
export default function Home() {
  const searchParams = useSearchParams();
  const account = searchParams.get("account");

  const [groomsmenAndRiddles, setGroomsmenAndRiddles] = useState<
    GroomsmenAndRiddles[]
  >([]);
  const [serverMessage, setServerMessage] = useState<undefined | string>(
    undefined
  );
  useEffect(() => {
    fetchLeaderBoard();
  }, [account]);
  async function fetchLeaderBoard() {
    if (account == null) {
      return;
    }

    const endpoint = `/api/leaderboard/${account}`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(endpoint, options);
    const responseData: RiddleAPIResponse = await response.json();
    setServerMessage(undefined);
    if (!responseData.success) {
      setServerMessage(responseData.message);
      return;
    }

    const tempGroomAndRiddles: GroomsmenAndRiddles[] = [];
    responseData.response.groomsmen.forEach((groomsmen) =>
      tempGroomAndRiddles.push({
        groomsmen: groomsmen,
        riddles: responseData.response.riddleEntries.filter(
          (riddle) => riddle.groomsmenName === groomsmen.name
        ),
      })
    );
    setGroomsmenAndRiddles(tempGroomAndRiddles);
    return;
  }
  return (
    <>
      <Head>
        <title>Riddles completed</title>
        <meta name="description" content="Riddles completed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.instructions}>
          <h1 className={styles.title}>Groomsmen standings</h1>
          <div className={styles.p}>
            All groomsmen puzzles must be solved in order to solve the grand
            riddle! The top groomsmen will receive an extra prize. Ties are
            decided by when you solve your first puzzle. After you solve your
            riddle, you can solve other riddles for extra points.
          </div>
        </div>
        <div className={styles.profiles}>
          {groomsmenAndRiddles
            .sort((a, b) => b.groomsmen.points - a.groomsmen.points)
            .map((gAndRiddles) => (
              <GroomsmenProfile
                imagePath="/profileS/thomas.png"
                groomsmenAndRiddles={gAndRiddles}
                groomsmenAttributes={groomsmenAttributes["thomasboyer8172"]}
              ></GroomsmenProfile>
            ))}
        </div>
        {account == null && (
          <div>You must scan your qr code to login properly</div>
        )}
        {serverMessage && <div>Server message: {serverMessage}</div>}
      </main>
    </>
  );
}
