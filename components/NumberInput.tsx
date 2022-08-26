import { NextPage } from "next";
import styles from '../styles/NumberInput.module.css';

interface INumberInputProps {
    text: string;
    value: number;
    onChange: (newValue: number) => void
}

const NumberInput: NextPage<INumberInputProps> = (props: INumberInputProps) => {

    const decrement = () => props.onChange(props.value - 1);
    const increment = () => props.onChange(props.value + 1);

    return (
        <div className={styles.input}>
            <span className={styles.text}>
                {props.text}
            </span>
            <span className={styles.value}>
                {props.value}                
            </span>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={decrement}>
                    -
                </button>
                <button className={styles.button} onClick={increment}>
                    +
                </button>
            </div>
        </div>
    )
}

export default NumberInput;