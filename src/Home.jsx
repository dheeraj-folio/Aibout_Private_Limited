import React from 'react'
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import VisionMission from "./components/VisionMission";
import WhyChoose from "./components/WhyChoose";
const Home = () => {
  return (
    <div>
          <Hero />
          <Services />
          <VisionMission />
          <WhyChoose />
          <Contact />
    </div>
  )
}

export default Home
