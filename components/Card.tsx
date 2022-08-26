import { NextPage } from "next";
import styles from '../styles/Card.module.css';

interface ICard {
    bgcolor?: string;
    children?: any
}

const Card: NextPage<ICard> = (props: ICard) => {
  return (
    <div className={styles.card} style={{
        backgroundColor: props.bgcolor ?? '#fff'
    }}>
      {props.children ?? null}
    </div>
  )
}

export default Card;