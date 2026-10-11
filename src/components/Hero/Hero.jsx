
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import heroImage from '../../assets/images/hero/ban1.png'

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[420px] h-[70vh] max-h-[800px] w-full items-center justify-center bg-cover bg-center bg-no-repeat sm:min-h-[500px] sm:h-[75vh] lg:h-[85vh]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 text-center text-white sm:px-6 md:px-8">

        {/* Heading */}
        <h1 className="mb-3 text-3xl font-bold leading-tight tracking-wide sm:text-4xl md:text-5xl lg:text-7xl">
          Explore The World
        </h1>

        {/* Subtitle */}
        <p className="mb-6 text-sm font-medium sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
          Make Your Journey Memorable
        </p>

        {/* Responsive Search Bar */}
        <div className="mx-auto w-full max-w-4xl">
          <SearchBar />
        </div>

      </div>
    </section>
  )
}

export default Hero
