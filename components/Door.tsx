import { NextPage } from "next";
import DoorModel from "../model/Door";
import styles from "../styles/Door.module.css";

interface Idoors {
    door: DoorModel
}

const Door: NextPage<Idoors> = (props: Idoors) => {
    const { door } = props;
    const selected = door.selected ? styles.selected : '';

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>
                        {door.number}
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