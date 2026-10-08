import React from 'react'
import Hero from '../components/Hero/Hero'
import Destination from './Destination'
import DestinationCard from '../components/DestinationCard/DestinationCard'

const Home = () => {
  return (
    <div>
    <Hero/>
    <DestinationCard limit={4} />
    </div>
  )
}

export default Home
