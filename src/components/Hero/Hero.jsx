import React from 'react'
import './Hero.css'
import SearchBar from '../SearchBar/SearchBar'

const Hero = () => {
  return (
    <div>
      
 <section className="hero">

      <div className="hero-overlay">
        <div className="hero-content">

          <h1>Explore The World</h1>

          <p>Make Your Journey Memorable</p>
          <SearchBar/>
        

        </div>
      </div>
</section>

    </div>
  )
}

export default Hero
