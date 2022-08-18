import { NextPage } from "next";
import DoorModel from "../model/Door";
import styles from "../styles/Door.module.css";

interface Idoors {
    door: DoorModel
    onChange: (newDoor: DoorModel) => void
}

const Door: NextPage<Idoors> = (props: Idoors) => {
    const { door } = props;
    const selected = door.selected && !door.open ? styles.selected : '';

    const changeSeleted = _ => props.onChange(door.changeSeleted())

    const openDoor = (e) => {
        e.stopPropagation()
        props.onChange(door.openDoor())
    }

    const doorRender = () => {
        return (
            <div className={styles.door}>
                <div className={styles.number}>
                    {door.number}
                </div>
                <div className={styles.key} onClick={openDoor}></div>
                <div className={styles.handle} onClick={openDoor}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={changeSeleted}>
            <div className={`${styles.frame} ${selected}`}>
                { door.open ? false : doorRender() }
            </div>
            <div className={styles.floor}></div>
        </div>
    );
}

export default Door;