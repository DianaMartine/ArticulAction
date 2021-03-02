import Head from "next/head";

import { ExperienceBar } from "../scr/components/ExperienceBar";

import { Profile } from "../scr/components/Profile";

import styles from "../scr/styles/pages/Home.module.css";

import { CompletedChallenges } from "../scr/components/CompletedChallenges";

import { CountDown } from "../scr/components/CountDown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | ArticulAction</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
