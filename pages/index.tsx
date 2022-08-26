import type { NextPage } from 'next'
import Link from 'next/link';
import Card from '../components/Card'
import NumberInput from '../components/NumberInput';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const Home: NextPage = () => {
  const [doorsNumber, setDoorsNumber] = useState(1);
  const [winnerDoor, setWinnerDoor] = useState(1);

  return (
    <div className={styles.home}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput 
            text="Doors Number?" 
            value={doorsNumber} 
            onChange={newNumberDoors => setDoorsNumber(newNumberDoors)} 
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput 
            text="Winner door" 
            value={winnerDoor} 
            onChange={newWinnerDoor => setWinnerDoor(newWinnerDoor)} 
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsNumber}/${winnerDoor}`}>
            <h2 className={styles.start}>
              Iniciar
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default Home
