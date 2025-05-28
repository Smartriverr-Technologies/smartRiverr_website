import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="coming-soon">
      <div className="coming-content">
        <h1>Contact us</h1>
        <p>This page is currently under development.</p>
        <span className="soon-badge">Coming Soon 🚧</span>
        <Link to="/" className="home-btn">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;
