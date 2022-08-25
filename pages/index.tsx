import type { NextPage } from 'next'
import { useState } from 'react';
import Door from '../components/Door';
import Present from "../components/Present";
import DoorModel from '../model/Door';
import { createDoors } from '../domains/doors';

const Home: NextPage = () => {
  const [door, setDoor] = useState(new DoorModel(1));

  console.log(createDoors(3, 1));

  return (
    <>
      {/* <Present/> */}
      <div className='flex'>
        <Door door={door} onChange={newDoor => setDoor(newDoor)}></Door>
      </div>
    </>
  )
}

export default Home
