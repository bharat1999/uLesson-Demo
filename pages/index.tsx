import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Benefits from '../components/Benefits'
import Categories from '../components/Categories'
import Challenge from '../components/Challenge'
import Register from '../components/Register'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Benefits/>
      <Categories/>
      <Challenge/>
      <Register/>
    </div>
  )
}

export default Home
