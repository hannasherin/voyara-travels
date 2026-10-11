import React from 'react'
import Hero from '../components/Hero/Hero'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import PopularDestination from '../components/PopularDestination/PopularDestination'
import PopularPackage from '../components/PopularPackage/PopularPackage'
import CustomerReview from '../components/CustomerReview/CustomerReview'

const Home = () => {
  return (
    <div>
    <Hero/>
    <section>
    <PopularDestination/>
    </section>
    <section>
    <PopularPackage/>
    </section>
    <section>
      <WhyChoose/>
    </section>
    <section>
    <CustomerReview/>
    </section>
    </div>
  )
}

export default Home
