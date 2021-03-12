import Head from "next/head";
import { GetServerSideProps } from "next";
import { ExperienceBar } from "../scr/components/ExperienceBar";
import { Profile } from "../scr/components/Profile";
import styles from "../scr/styles/pages/Home.module.css";
import { CompletedChallenges } from "../scr/components/CompletedChallenges";
import { CountDown } from "../scr/components/CountDown";
import { ChallengeBox } from "../scr/components/ChallengeBox";
import { CountDownProvider } from "../scr/contexts/CountDownContext";
import { ChallengesProvider } from "../scr/contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | ArticulAction</title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted) },
  };
};
