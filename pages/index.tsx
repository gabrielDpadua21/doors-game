import type { NextPage } from 'next'
import { useState } from 'react';
import Door from '../components/Door';
import { createDoors, updateDoors } from '../domains/doors';

const Home: NextPage = () => {
  const [doors, setDoors] = useState(createDoors(3, 1));

  const renderDoors = () => {
    return doors.map(door => {
      return (
        <Door key={door.number} door={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))}></Door>
      )
    })
  }

  return (
    <>
      {/* <Present/> */}
      <div className='flex'>
        {renderDoors()}
      </div>
    </>
  )
}

export default Home
