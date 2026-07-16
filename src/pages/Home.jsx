import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      
        <Hero/>
        <HomeAbout/>
        <HomeServices/>
        <Testimonials/>
    </div>
  )
}

export default Home