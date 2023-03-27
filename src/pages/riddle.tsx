import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Riddle.module.css";
import { useSearchParams } from "next/navigation";
import { RiddleData, riddles } from "../../data/riddledata";
import { ChangeEvent, useState } from "react";
import { GroomsmenAPIResponse } from "./api/groomsmen";

type PuzzleAnswer = {
  passkey: string | null;
  data: any;
};
export default function Riddle() {
  const searchParams = useSearchParams();
  let riddle: RiddleData | undefined = undefined;
  const [data, setData] = useState<any | undefined>(undefined);
  const [isSending, setIsSending] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [serverProblem, setServerProblem] = useState(false);
  const passPhrase = searchParams.get("passphrase");
  if (passPhrase) {
    riddle = riddles[passPhrase];
  }

  async function submitPuzzleInput(puzzleAnswer: PuzzleAnswer) {
    const JSONdata = JSON.stringify(puzzleAnswer);
    setIsSending(true);
    const endpoint = "/api/groomsmen";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const responseData: GroomsmenAPIResponse = await response.json();
    setIsSending(false);
    setServerProblem(false);
    setWrongAnswer(false);
    if (!responseData.success) {
      setServerProblem(true);
      return false;
    }
    if (responseData.response == true) {
      return true;
    }

    setWrongAnswer(true);
    return false;
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
              <li key={rule}>{rule}</li>
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

        {riddle?.name == "Thomas Boyer" && (
          <div>
            <label>
              Since this riddle answer is a phrase, call Danny when you think
              you have the answer.
            </label>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="Password from Danny"
              type="text"
            ></input>
          </div>
        )}

        <button
          disabled={isSending}
          onClick={() => submitPuzzleInput({ passkey: passPhrase, data: data })}
        >
          {isSending ? "Submitting..." : "Submit"}
        </button>
        {serverProblem && (
          <div>Server problem, uh oh, call Danny 281-870-3316</div>
        )}
        {wrongAnswer && (
          <div>
            That is simply not the right answer... one more wrong answer and
            you're out champ. Keep your head up, dig deep.
          </div>
        )}
      </main>
    </>
  );
}
