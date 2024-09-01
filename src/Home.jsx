import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Intro from './components/Intro'
import Process from './components/Process'
import Capibilities from './components/Capibilities'
import Testimonials from './components/Testimonials'
import Community from './components/Community'
import Footer from './components/Footer'


const Home = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Intro />
      <Process />
      <Capibilities />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  )
}

export default Home
