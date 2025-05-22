import React from 'react';
import './Careers.css';
import { Link } from 'react-router-dom';
const Careers = () => {
  return (
    <div className="coming-soon">
      <div className="coming-content">
        <h1>Careers</h1>
        <p>This page is currently under development.</p>
        <span className="soon-badge">Coming Soon 🚧</span>
        <Link to="/" className="home-btn">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Careers;