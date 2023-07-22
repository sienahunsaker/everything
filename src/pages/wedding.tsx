import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Information.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RiddleAPIResponse } from "./api/leaderboard/[...groomsmen]";
import { RiddleEntry } from "../../db/riddleentry/models/riddleentry";
import { Groomsmen } from "../../db/groomsmen/models/groomsmen";
import GroomsmenProfile from "../../components/groomsmenprofile";
import { groomsmenAttributes } from "../../data/groomsmenattributes";
import Link from "next/link";

export default function Wedding() {
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
        <style>
          {`
            html,
            body {
              background-color: #fee9e7;
              color: #f05252;
            }
          `}
        </style>
      </Head>
      <main className={styles.main}>
        <div className={styles.instructions}>
          <h1 className={styles.title}>
            Siena and Danny&apos;s Reception Information
          </h1>
          <div className={styles.p}>
            We are so excited to have you at our reception! Below we have a link
            that will open google/apple maps with the directions to the cabin.
          </div>

          <h2 className={styles.title}>Reception Info</h2>
          <div className={styles.p}>
            The reception will be held from 3pm - 8pm on August 12th. There will
            be dancing, food, and tom foolery. Siena might even do her famous
            jiggy.
          </div>

          <h2 className={styles.title}>Cabin Directions</h2>
          <div className={styles.p}>
            <Link
              className={styles.link}
              target="_blank"
              href={"https://goo.gl/maps/kUppKaRiHQxj7cA96"}
            >
              Link to cabin
            </Link>
          </div>

          <h2 className={styles.title}>Registry</h2>
          <div className={styles.p}>
            <Link
              className={styles.link}
              target="_blank"
              href={
                "https://www.amazon.com/wedding/daniel-boyer-siena-hunsaker--august-2023/registry/HYB30GKIMJQG"
              }
            >
              Link to registry
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
