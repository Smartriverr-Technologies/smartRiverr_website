// ClientsUnderConstruction.js
import React, { useState, useEffect } from 'react';
import './Clients.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

const Clients = () => {
  // --- SET YOUR LAUNCH DATE HERE ---
  const launchDate = new Date('2025-09-15T09:00:00');

  const calculateTimeLeft = () => {
    const difference = +launchDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div className="timer-segment" key={interval}>
        <span className="time-value">{timeLeft[interval]}</span>
        <span className="time-label">{interval}</span>
      </div>
    );
  });

  return (
    <>
    <Navbar/>
    <div className="construction-container">
      <div className="construction-content">
        <div className="icon-container">
          {/* Simple SVG illustration for a professional look */}
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M12 11l-4-2-4 2"></path>
            <path d="M12 11l4-2 4 2"></path>
            <path d="M12 11v4"></path>
            <path d="M8 13v-2"></path>
            <path d="M16 13v-2"></path>
          </svg>
        </div>
        <h1 className="construction-h1">We're Polishing Our Success Stories</h1>
        <p className="subtitle">
          Our new clients page is currently under construction. We are working hard to bring you a showcase of the amazing partnerships we've built. Stay tuned!
        </p>

        {timerComponents.length ? (
          <div className="countdown-timer">
            {timerComponents}
          </div>
        ) : (
          <div className="launched-message">This section is launching soon!</div>
        )}

        <div className="notification-form">
          <h3>Get Notified on Launch</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Notify Me</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Clients;
