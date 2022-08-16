import type { NextPage } from 'next'
import Door from '../components/Door';
import Present from "../components/Present";

const Home: NextPage = () => {
  return (
    <>
      {/* <Present/> */}
      <div className='flex'>
        <Door selected={true}></Door>
        <Door></Door>
      </div>
    </>
  )
}

export default Home
