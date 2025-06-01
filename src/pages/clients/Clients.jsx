import React from 'react';
import './Clients.css';
import { Link } from 'react-router-dom';
// import Navbar from '../../components/navbar/Navbar';
const Clients = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="coming-soon">
      <div className="coming-content">
        <h1>Our Clients</h1>
        <p>This page is currently under development.</p>
        <span className="soon-badge">Coming Soon 🚧</span>
        <Link to="/" className="home-btn">← Back to Home</Link>
      </div>
    </div>
    
    
    </>
  );
};

export default Clients;
