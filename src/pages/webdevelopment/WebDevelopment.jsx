import React from 'react'
import DevelopmentProcess1 from '../../components/developmentprocess/DevelopmentProcess1.jsx';
import Whychooseus from '../../components/whychooseus/Whychooseus.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import WbebsiteOffer from '../../components/websiteoffer/WebsiteOffer.jsx';
import HeroSection from '../../components/herosection/HeroSection.jsx';


function WebDevelopment() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <WbebsiteOffer/>
        <DevelopmentProcess1/>
        <Whychooseus/>

      
      
      
      <Footer/>
    </div>
  )
}

export default WebDevelopment
