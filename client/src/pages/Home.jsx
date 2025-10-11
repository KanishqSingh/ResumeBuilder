import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Hero></Hero>
        <Features></Features>
        <Testimonial/>
        <CallToAction/>
        <Footer></Footer>
    </div>
  )
}

export default Home