import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css';
const Services = () => {
  return (
    <div className="coming-soon">
      <div className="coming-content">
        <h1>Our Services</h1>
        <p>This page is currently under development.</p>
        <span className="soon-badge">Coming Soon 🚧</span>
        <Link to="/" className="home-btn">← Back to Home</Link>
      </div>
    </div>
  )
}

export default Services
