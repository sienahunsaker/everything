import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Riddle.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { RiddleData, riddles } from "../../data/riddledata";
import { ChangeEvent, useState } from "react";
import { GroomsmenAPIResponse } from "./api/groomsmen";

type PuzzleAnswer = {
  name: string | null;
  riddleKey: string | null;
  data: any;
};
export default function Riddle() {
  const searchParams = useSearchParams();
  const router = useRouter();
  let riddle: RiddleData | undefined = undefined;
  const [data, setData] = useState<any | undefined>(undefined);
  const [isSending, setIsSending] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [alreadySolvedMessage, setAlreadySolvedMessage] = useState(false);
  const [serverProblem, setServerProblem] = useState(false);
  const [tooManyAttempts, setTooManyAttempts] = useState(false);
  const account = searchParams.get("account");
  const riddleKey = searchParams.get("riddlekey");
  if (riddleKey) {
    riddle = riddles[riddleKey];
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
    setTooManyAttempts(false);
    if (!responseData.success) {
      setServerProblem(true);
      return false;
    }
    if (responseData.response === true) {
      router.push(`/?account=${account}`);
      return true;
    } else if (responseData.response === "ALREADYSOLVED") {
      setAlreadySolvedMessage(true);
    } else {
      if (responseData.toManyFailedAttempts) {
        setTooManyAttempts(true);
      } else {
        setWrongAnswer(true);
      }
    }

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
        <h1 className={styles.riddleNumber}>{riddleKey}</h1>
        <div className={styles.name}>{riddle?.name},</div>
        <div className={styles.p1}>{riddle?.p1}</div>
        <div className={styles.p2}>
          However, this is a highly sought after draft, to prove yourself worthy
          of the draft (and all the riches if you participate) we have created a
          riddle for you to solve. Only {riddle?.name} would be able to solve
          this riddle (because of your superior intellect). Solve this before
          August 11th and your spot in the draft will be secured. Good luck.
          Godspeed.
        </div>

        <div className={styles.rules}>
          <label className={styles.label}>RULES</label>
          <ul>
            {riddle?.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
        {riddle?.imagePath && (
          <div className={styles.image}>
            <Image
              src={riddle.imagePath}
              alt="Riddle Image"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
        )}

        {riddle?.name == "Thomas Boyer" && (
          <div className={styles.answer}>
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
              className={styles.input}
            ></input>
          </div>
        )}
        <div className={styles.button}>
          {serverProblem && (
            <div>Server problem, uh oh, call Danny 281-870-3316</div>
          )}
          {wrongAnswer && (
            <div>
              That is simply not the right answer... one more wrong answer and
              you're out champ. Keep your head up, dig deep.
            </div>
          )}
          {tooManyAttempts && (
            <div>
              You have tried to submit too many times, wow. You thought you
              could evade this? Maybe thought you could refresh and try again?
              Shameful. Ask another groomsmen that has solved their puzzle to
              grant you another try. If they say no, too bad. It's a free
              country.
            </div>
          )}
          {alreadySolvedMessage && (
            <div>
              Already solved this puzzle. Not giving any more points, actually
              might take away points. Keep it up I swear to god.
            </div>
          )}
          <button
            disabled={isSending}
            onClick={() =>
              submitPuzzleInput({
                name: account,
                riddleKey: riddleKey,
                data: data,
              })
            }
            className={styles.submit}
          >
            {isSending ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </div>
      </main>
    </>
  );
}
