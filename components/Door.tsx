import { NextPage } from "next";
import styles from "../styles/Door.module.css";

interface Idoors {
    selected?: boolean
}

const Door: NextPage<Idoors> = (props: Idoors) => {
    const selected = props.selected ? styles.selected : '';

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>
                        3
                    </div>
                    <div className={styles.key}></div>
                    <div className={styles.handle}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    );
}

export default Door;