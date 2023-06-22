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

export default function Information() {
  return (
    <>
      <Head>
        <title>Wedding information</title>
        <meta
          name="description"
          content="Daniel and Siena's wedding information"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.instructions}>
          <h1 className={styles.title}>Siena and Danny's Wedding Weekend</h1>
          <div className={styles.p}>
            We are so excited to have you at our wedding! This is a three day
            event starting thursday morning and ending saturday night. It's up
            to you to stay as long as you want, we would love to have you the
            whole weekend.
          </div>
          <div className={styles.title}>Itinerary</div>
          <div className={styles.p}>
            These times are what the main group will be following, if you want
            to go your own route or skip out on some of these activities that is
            totally ok. However we will not wait for people since there will be
            a lot of people to wait for. If you are running late, no problem
            just catch up.{" "}
          </div>
          <div className={styles.p}>
            O Thursday: 1. Meet at the front of Yellowstone at 11PM (in the
            parking lot of the IMAX theater) 2. At 11:15 am we will enter the
            park, there is no service in the park so if you want to be with the
            group make sure you get there at 11. 3. We will be going south
            towards old faithful and then come back the same way and leave. 4.
            The first place we will visit is fountain paint pots, after that we
            will be deciding where to go as a group. 5. It will be busy since
            it's summer so expect crowds and traffic. 6. After yellowstone we
            are eating at wild west pizzeria (to go) and bringing the food to
            pioneer park. If you want something else that is fine. There are
            many places to eat. 7. After eating, everyone should either head
            towards one of the cabins, their RV, or a hotel they booked. Or just
            be homeless it doesn't matter.
          </div>
          <div className={styles.p}>
            Friday: 1. 8am bachelor bowl with the groomsmen. Spectators
            welcomed. 2. 10am bachelorette spa and pool day 3. Free time at the
            cabin 4. 4pm Wedding Rehearsal 5. 5pm BBQ 6. 6pm Casino night starts
          </div>
          <div className={styles.p}>
            Saturday: 1.11:30am marriage ceremony 2. 1pm wedding Luncheon 3.
            Reception 3-8
          </div>
        </div>
      </main>
    </>
  );
}
