import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/river2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="hero-content">
        <h1>We Build Digital Experiences That Grow Your Business</h1>
        <p>From idea to launch, we turn your vision into powerful digital products</p>
        <button>Get a Free Quote</button>
        <button>View Our Work</button>
      </div>
    </div>
  );
};

export default Hero;
