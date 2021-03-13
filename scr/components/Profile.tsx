import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/DianaMartine.png" alt="Diana Martine"/>
            <div>
                <strong>Diana Martine</strong>
                <p><img src="icons/level.svg" alt="level"/>
                    Level {level}</p>
                    <textarea id='bio'></textarea>
            </div>
        </div>
    );
}