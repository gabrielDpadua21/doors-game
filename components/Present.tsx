import styles from "../styles/Present.module.css";

const Present = () => {
    return (
        <div className={styles.present}>
            <div className={styles.top}></div>
            <div className={styles.body}></div>
            <div className={styles.vertical}></div>
            <div className={styles.horizontal}></div>
        </div>
    )
}

export default Present;