
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Door from '../../../components/Door';
import { createDoors, updateDoors } from '../../../domains/doors';
import styles from '../../../styles/Game.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Game: NextPage = () => {
  const router = useRouter();
  const [doors, setDoors] = useState(createDoors(0, 0));
      
  useEffect(() => {
    const doorsNumber = +router?.query?.doors;
    const winnerNumber = +router?.query?.winner;
    setDoors(createDoors(doorsNumber, winnerNumber));
  }, [router?.query])


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