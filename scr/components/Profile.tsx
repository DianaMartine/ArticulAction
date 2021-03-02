import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/DianaMartine.png" alt="Diana Martine"/>
            <div>
                <strong>Diana Martine</strong>
                <p><img src="icons/level.svg" alt="leval"/>
                    Level 1</p>
            </div>
        </div>
    );
}