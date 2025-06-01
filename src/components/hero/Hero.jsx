import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/river2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="hero-content" >
         <motion.div
      initial={{ opacity: 0, y: 50 }}       // Start state
      animate={{ opacity: 1, y: 0 }}        // End state
      transition={{ duration: 0.8 }}        // Animation speed
    >
        <h1>We Build Digital Experiences That Grow Your Business</h1>
        <p>From idea to launch, we turn your vision into powerful digital products</p>
       <Link to="/contact"> <button><span>Get a Free Quote</span></button></Link>
        <Link><button><span>View Our Work</span></button></Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
