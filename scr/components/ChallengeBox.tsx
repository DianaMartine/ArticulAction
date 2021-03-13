import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountDownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountDownContext);

  function handelChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handelChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>+ {activeChallenge.amount}</header>
          <main>
            <img src= {`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailButton} onClick={handelChallengeFailed}>
              Abandonar
            </button>
            <button type="button" className={styles.challengeSucceededButton} onClick={handelChallengeSucceeded}>
              Completar
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo de contagem para receber novos desafios
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Complete desafios para avançar.
          </p>
        </div>
      )}
    </div>
  );
}
