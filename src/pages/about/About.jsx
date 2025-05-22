import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="coming-soon">
      <div className="coming-content">
        <h1>About Us</h1>
        <p>This page is currently under development.</p>
        <span className="soon-badge">Coming Soon 🚧</span>
        <Link to="/" className="home-btn">← Back to Home</Link>
      </div>
    </div>
  );
};

export default About;
