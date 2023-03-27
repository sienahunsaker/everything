import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Riddle.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Riddle() {
    const name = "Danny";
  return (
    <>
      <Head>
        <title>Your Riddle</title>
        <meta name="description" content="Solve this if you're strong enough" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <div>Riddle page for {name}</div>

      </main>
    </>
  )
}
