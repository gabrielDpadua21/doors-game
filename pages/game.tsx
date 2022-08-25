
import { NextPage } from 'next';
import { useState } from 'react';
import Door from '../components/Door';
import { createDoors, updateDoors } from '../domains/doors';
import styles from '../styles/Game.module.css';
import Link from 'next/link';

const Game: NextPage = () => {
    const [doors, setDoors] = useState(createDoors(5, 1));

  const renderDoors = () => {
    return doors.map(door => {
      return (
        <Door key={door.number} door={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))}></Door>
      )
    })
  }

  return (
    <>
      <div className={styles.game}>
        <div className={styles.doors}>
            {renderDoors()}
        </div>
        <div className={styles.buttons}>
            <Link href="/">
                <button>Restart Game</button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Game;