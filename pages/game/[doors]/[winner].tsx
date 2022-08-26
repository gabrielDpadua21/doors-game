
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Door from '../../../components/Door';
import { createDoors, updateDoors } from '../../../domains/doors';
import styles from '../../../styles/Game.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Game: NextPage = () => {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState(createDoors(0, 0));

  useEffect(() => {
    const doorsNumber = (router.query.doors && !Array.isArray(router.query.doors)) ? parseInt(router.query.doors) : 0;
    const winnerNumber = (router.query.winner && !Array.isArray(router.query.winner)) ? parseInt(router.query.winner) : 0;
    const quantityValidDoors = doorsNumber >= 3 && doorsNumber <= 100;
    const validWinnerDoor = winnerNumber > 0 && winnerNumber <= doorsNumber;
    setValid(quantityValidDoors && validWinnerDoor);
  }, [doors])
      
  useEffect(() => {
    const doorsNumber = (router.query.doors && !Array.isArray(router.query.doors)) ? parseInt(router.query.doors) : 0;
    const winnerNumber = (router.query.winner && !Array.isArray(router.query.winner)) ? parseInt(router.query.winner) : 0;
    setDoors(createDoors(doorsNumber, winnerNumber));
  }, [router?.query])


  const renderDoors = () => {
    return valid && doors.map(door => {
      return (
        <Door key={door.number} door={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))}></Door>
      )
    })
  }

  return (
    <>
      <div className={styles.game}>
        <div className={styles.doors}>
            { valid ? renderDoors() : <h2>Invalid values</h2>}
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