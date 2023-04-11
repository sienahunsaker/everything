import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Riddle.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { RiddleData, riddles } from "../../data/riddledata";
import { ChangeEvent, useEffect, useState } from "react";
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

  useEffect(() => {
    hasSolvedPuzzle();
    console.log("has Solved");
  }, [riddleKey, account]);
  async function hasSolvedPuzzle() {
    const endpoint = "/api/groomsmen";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        riddleKey: riddleKey,
        name: account,
        checkHasSolved: true,
      }),
    };
    console.log("Fetcing response");
    const response = await fetch(endpoint, options);
    const responseData: GroomsmenAPIResponse = await response.json();
    if (responseData.success) {
      if (responseData.response == true) {
        router.push(`/?account=${account}`);
      }
    }
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
          riddle for you to solve. Only{" "}
          <span className={styles.embeddedName}>{riddle?.name}</span> would be
          able to solve this riddle (because of your superior intellect). Solve
          this before August 11th and your spot in the draft will be secured.
          Good luck. Godspeed.
        </div>
        <div className={styles.p2}>{riddle?.question}</div>

        <div className={styles.rules}>
          <label className={styles.label}>RULES</label>
          <ul className={styles.li}>
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

        <div className={styles.answerInstructions}>
          <label>{riddle?.answerInstructions}</label>
        </div>

        <div>{riddle?.example}</div>
        {riddleKey == "riddle1482" && (
          <div className={styles.answer}>
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
        {riddleKey == "riddle2919" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="1,3: 1: 3,4"
              type="text"
              className={styles.input}
            ></input>
          </div>
        )}
        {riddleKey == "riddle2611" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="Password from Audra"
              type="text"
              className={styles.input}
            ></input>
          </div>
        )}
        {riddleKey == "riddle9299" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="100"
              type="number"
              className={styles.input}
            ></input>
          </div>
        )}

        {riddleKey == "riddle2621" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="100"
              type="number"
              className={styles.input}
            ></input>
          </div>
        )}

        {riddleKey == "riddle1229" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="14"
              type="number"
              className={styles.input}
            ></input>
          </div>
        )}
        {riddleKey == "riddle1112" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="1,2,3,4,5"
              type="text"
              className={styles.input}
            ></input>
          </div>
        )}
        {riddleKey == "riddle9976" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="1,2,3"
              type="text"
              className={styles.input}
            ></input>
          </div>
        )}
        {riddleKey == "riddle2123" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="1345"
              type="number"
              className={styles.input}
            ></input>
          </div>
        )}
        {riddleKey == "riddle2351" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="5"
              type="number"
              className={styles.input}
            ></input>
          </div>
        )}
        {riddleKey == "riddle0291" && (
          <div className={styles.answer}>
            <input
              onChange={(event) => {
                setData(event.target.value);
              }}
              placeholder="5"
              type="number"
              className={styles.input}
            ></input>
          </div>
        )}
        <div className={styles.button}>
          {serverProblem && (
            <div className={styles.incorrect}>
              Server problem, uh oh, call Danny 281-870-3316
            </div>
          )}
          {wrongAnswer && (
            <div className={styles.incorrect}>
              That is simply not the right answer... one more wrong answer and
              you&apos;re out champ. Keep your head up, dig deep.
            </div>
          )}
          {tooManyAttempts && (
            <div className={styles.incorrect}>
              You have tried to submit too many times, wow. You thought you
              could evade this? Maybe thought you could refresh and try again?
              Shameful. Ask another groomsmen that has solved their puzzle to
              grant you another try. If they say no, too bad. It&apos;s a free
              country.
            </div>
          )}
          {alreadySolvedMessage && (
            <div className={styles.incorrect}>
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
