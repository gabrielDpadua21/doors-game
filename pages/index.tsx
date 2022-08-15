import type { NextPage } from 'next'
import Door from '../components/Door';
import Present from "../components/Present";

const Home: NextPage = () => {
  return (
    <>
      {/* <Present/> */}
      <Door selected={true}></Door>
      <Door></Door>
    </>
  )
}

export default Home
