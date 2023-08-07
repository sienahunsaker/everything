import Head from "next/head";
import styles from "@/styles/Information.module.css";
import Link from "next/link";

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
            Siena and Danny&apos;s Weekend Wedding
          </h1>
          <div className={styles.p}>
            We are so excited to have you at our wedding! This is a three day
            event starting thursday morning and ending saturday night. It&apos;s
            up to you to stay as long as you want, we would love to have you the
            whole weekend.
          </div>
          <h2 className={styles.title}>
            Im about to pack, what do I pack? (not exhaustive)
          </h2>
          <div className={styles.p}>
            <ol className={styles.ol}>
              <li>Swimsuit (for swimming)</li>
              <li>
                Golf clubs, if you are golfing. If you are golfing and you do
                not have clubs you will have to rent. or ask if someone has an
                extra set. The scramble teams will be completely and utterly
                fair.
                <h3 className={styles.h3}>
                  Who is golfing? Here is the list so far.
                </h3>
                <ol className={styles.ol}>
                  <li>Kyle Rohmer</li>
                  <li>Jackson Boyer</li>
                  <li>Jamo Boyer</li>
                  <li>Sam Berry</li>
                  <li>Ryan Quinlan</li>
                  <li>Thomas Boyer</li>
                  <li>Jan Boermann</li>
                  <li>Ty Siepert</li>
                  <li>Jaden Hunsaker</li>
                  <li>Sagin Hunsaker</li>
                  <li>Lance Boyer</li>
                  <li>Danny Boyer</li>
                  <li>Harry Melon</li>
                  <li>Arturo aceves</li>
                  <li>Livy Boyer</li>
                  <li>Jerry Boyer</li>
                </ol>
              </li>
              <li>
                If groomsmen: Black shoes, black socks, black pants, white
                shirt, black belt. I have a tie for you.
              </li>
              <li>Denim pants and Denim shirt for casino night.</li>
              <li>
                Sports wear if you want to play sports Friday Morning, also
                cleats.
              </li>
              <li>Sunscreen.</li>
            </ol>
          </div>
          <h2 className={styles.title}>Lodging Arrangements</h2>
          <div className={styles.p}>
            Some people will be staying in the cabin, you know who you are, if
            you have an air mattress please bring it, with pillow and blanket
            too. For those not in the Cabin, there are 3 options for you
            <ul className={styles.ol}>
              <li>Rent an Airbnb or VRBO near the Cabin.</li>
              <li>
                Bring your camper or a tent and stay the night on the beautiful
                cabin grounds.
              </li>
              <li>
                Book a hotel room. There is a SpringHill Suites 33 minutes away
                (
                <Link
                  className={styles.link}
                  target="_blank"
                  href={"https://goo.gl/maps/LeMSGvBYcnZEAdC7A"}
                >
                  map link here
                </Link>
                ).{" "}
              </li>
            </ul>
          </div>
          <h2 className={styles.title}>Cabin Directions</h2>
          <div className={styles.p}>
            <Link
              className={styles.link}
              target="_blank"
              href={"https://goo.gl/maps/FxggWzvfFz5rETmY8"}
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
          <h2 className={styles.title}>Itinerary</h2>
          <div className={styles.p}>
            These times are what the main group will be following, if you want
            to go your own route or skip out on some of these activities that is
            totally ok. However we will not wait for people since there will be
            a lot of people to wait for. If you are running late, no problem
            just catch up.{" "}
          </div>
          <div className={styles.p}>
            <h3 className={styles.h3}>Thursday:</h3>
            <ol className={styles.ol}>
              <li>
                Meet at the front of Yellowstone at 11 AM (in the parking lot of
                the{" "}
                <Link
                  className={styles.link}
                  target="_blank"
                  href={"https://goo.gl/maps/Y2yvyRybKme6dQYD7"}
                >
                  IMAX theater - click here for address
                </Link>
                ).
              </li>
              <li>
                {" "}
                At 11:15 AM we will enter the park, there is no service in the
                park so if you want to be with the group make sure you get there
                at 11.
              </li>
              <li>
                We will be going south towards Old Faithful and then come back
                the same way and leave.
              </li>
              <li>
                The first place we will visit is Fountain Paint Pots, after that
                we will be deciding where to go as a group.
              </li>
              <li>
                It will be busy since it&apos;s summer so expect crowds and
                traffic.
              </li>
              <li>
                After Yellowstone we are eating at wild west pizzeria (to go)
                and bringing the food to pioneer park. If you want something
                else that is fine. There are many places to eat.
              </li>
              <li>
                After eating everyone should either head towards one of the
                cabins, their RV, or a hotel they booked. Or just be homeless it
                doesn&apos;t matter.
              </li>
            </ol>
          </div>
          <div className={styles.p}>
            <h3 className={styles.h3}>Friday:</h3>
            <ol className={styles.ol}>
              <li>
                8:30 AM bachelor bowl with the groomsmen. Spectators welcomed.
                We will be playing ultimate, baseball, and soccer.
              </li>
              <li>1pm golf tournament</li>
              <li>10 AM bachelorette spa and pool day.</li>
              <li>Free time at the cabin.</li>
              <li>4 PM Wedding Rehearsal.</li>
              <li>5 PM BBQ.</li>
              <li>
                7 PM Casino night starts. The theme is denim on denim. You must
                wear denim on denim or Siena will KILL YOU.
              </li>
            </ol>
          </div>
          <div className={styles.p}>
            <h3 className={styles.h3}>Saturday:</h3>
            <ol className={styles.ol}>
              <li>11 AM marriage ceremony.</li>
              <li>2 PM wedding Luncheon.</li>
              <li>Reception 3-8 PM.</li>
            </ol>
          </div>

          <div className={styles.footer}>
            All times and plans are subject to change, we will keep this link
            updated with the latest details.
          </div>
        </div>
      </main>
    </>
  );
}
