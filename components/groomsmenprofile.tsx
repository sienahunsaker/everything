import { GroomsmenAndRiddles } from "@/pages";
import { RiddleAPIResponse } from "@/pages/api/leaderboard/[...groomsmen]";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Attributes } from "../data/groomsmenattributes";
import { riddles } from "../data/riddledata";
import styles from "./groomsmenprofile.module.css";
interface GroomsmenProfileProps {
  groomsmenAndRiddles: GroomsmenAndRiddles;
  groomsmenAttributes: Attributes;
  noRetry: boolean;
  currentAccount: string;
}

const GroomsmenProfile = (props: GroomsmenProfileProps) => {
  const [serverMessage, setServerMessage] = useState<undefined | string>(
    undefined
  );
  const riddlekey = (Object.keys(riddles) as Array<string>).find(
    (key) => riddles[key].name === props.groomsmenAndRiddles.groomsmen.fullname
  );
  async function grantRetry(riddlekey: string) {
    const endpoint = `/api/leaderboard/${props.groomsmenAndRiddles.groomsmen.name}/${riddlekey}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(endpoint, options);
    const responseData: RiddleAPIResponse = await response.json();
    setServerMessage(responseData.message);
    if (!responseData.success) {
      return;
    }
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.riddletitle}>
        <Link
          href={`/riddle?account=${props.currentAccount}&riddlekey=${riddlekey}`}
        >
          {riddlekey}
        </Link>
      </div>
      <div className={styles.image}>
        <Image
          src={props.groomsmenAttributes.imagePath}
          alt="Profile picture"
          fill={true}
          style={{ objectFit: "contain" }}
          className={styles.imageProfile}
        ></Image>
      </div>
      <div>
        {serverMessage && <div>{serverMessage}</div>}
        <div className={[styles.startEnd, styles.nameAndPoints].join(" ")}>
          <label>{props.groomsmenAndRiddles.groomsmen.fullname}</label>
          <label>Points: {props.groomsmenAndRiddles.groomsmen.points}</label>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.attributeData}>
          <div className={styles.startEnd}>
            <label>Speed:</label>
            <label>{props.groomsmenAttributes.speed}</label>
          </div>
          <div className={styles.startEnd}>
            <label>Strength:</label>
            <label>{props.groomsmenAttributes.strength}</label>
          </div>
          <div className={styles.startEnd}>
            <label>Accuracy:</label>
            <label>{props.groomsmenAttributes.accuracy}</label>
          </div>
          <div className={styles.startEnd}>
            <label>Clutch:</label>
            <label>{props.groomsmenAttributes.clutch}</label>
          </div>
          <div className={styles.startEnd}>
            <label className={styles.endurance}>Endurance: </label>
            <label>{props.groomsmenAttributes.endurance}</label>
          </div>
          <div className={styles.startEnd}>
            <label>Hops:</label>
            <label>{props.groomsmenAttributes.hops}</label>
          </div>
        </div>
        <div className={styles.riddles}>
          {props.groomsmenAndRiddles.riddles.map((riddle) => (
            <div key={riddle.riddleKey} className={styles.riddleData}>
              {!riddle.solved &&
                riddle.tries > 1 &&
                !props.noRetry &&
                !serverMessage && (
                  <button
                    className={styles.retryButton}
                    onClick={() => {
                      grantRetry(riddle.riddleKey);
                    }}
                  >
                    GRANT RETRY
                  </button>
                )}
              <label>{riddle.riddleKey}</label>
              <div className={styles.iconImage}>
                {riddle.solved && (
                  <Image
                    src={"/checkmark.svg"}
                    alt="Solved puzzle"
                    fill={true}
                    style={{ objectFit: "contain" }}
                  ></Image>
                )}
                {riddle.tries > 0 && !riddle.solved && (
                  <Image
                    src={"/xmark.svg"}
                    alt="Failed puzzle"
                    fill={true}
                    style={{ objectFit: "contain" }}
                  ></Image>
                )}
                {!riddle.solved && riddle.tries === 0 && (
                  <Image
                    src={"/emptycircle.svg"}
                    alt="Solved puzzle"
                    fill={true}
                    style={{ objectFit: "contain" }}
                  ></Image>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroomsmenProfile;
