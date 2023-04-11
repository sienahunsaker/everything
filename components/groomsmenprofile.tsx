import { GroomsmenAndRiddles } from "@/pages";
import Image from "next/image";
import { Attributes } from "../data/groomsmenattributes";
import styles from "./groomsmenprofile.module.css";
interface GroomsmenProfileProps {
  groomsmenAndRiddles: GroomsmenAndRiddles;
  groomsmenAttributes: Attributes;
}

const GroomsmenProfile = (props: GroomsmenProfileProps) => {
  return (
    <div className={styles.container}>
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
            <label>Endurance:</label>
            <label>{props.groomsmenAttributes.endurance}</label>
          </div>
          <div className={styles.startEnd}>
            <label>Hops:</label>
            <label>{props.groomsmenAttributes.hops}</label>
          </div>
        </div>
        <div className={styles.riddles}>
          {props.groomsmenAndRiddles.riddles.map((riddle) => (
            <div key={riddle.groomsmenName} className={styles.riddleData}>
              {!riddle.solved && riddle.tries > 0 && (
                <button className={styles.retryButton}>GRANT RETRY</button>
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
