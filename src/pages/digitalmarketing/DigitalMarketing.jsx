"use client"

import React, { useState } from "react"
import "./DigitalMarketing.css";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function DigitalMarketing() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <>
    <Navbar/>
    <div className="digital-marketing">
    
      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Animated Marketing Icon */}
          <div className="icon-container">
            <div className="animated-icon">
              <svg className="marketing-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h8m-8 0a2 2 0 00-2 2v2m10-4a2 2 0 012 2v2M5 8v10a2 2 0 002 2h6a2 2 0 002-2V8"
                />
              </svg>
              <div className="orbit-elements">
                <div className="orbit-dot dot-1">📊</div>
                <div className="orbit-dot dot-2">📈</div>
                <div className="orbit-dot dot-3">🎯</div>
                <div className="orbit-dot dot-4">💡</div>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="main-title">
            Digital Marketing
            <span className="highlight">Launching Soon!</span>
          </h1>

          <p className="description">
            We're creating an impressive showcase of our digital marketing expertise. Get ready to discover 
            how we help businesses grow their online presence and drive measurable results.
          </p>

          {/* Services Grid */}
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <h3 className="service-title">SEO Optimization</h3>
              <p className="service-description">Boost your search rankings</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              <h3 className="service-title">Social Media</h3>
              <p className="service-description">Engage your audience effectively</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="service-title">Email Marketing</h3>
              <p className="service-description">Nurture leads and customers</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="service-title">PPC Advertising</h3>
              <p className="service-description">Maximize your ad spend ROI</p>
            </div>
          </div>

          {/* Metrics Preview */}
          <div className="metrics-section">
            <h2 className="metrics-title">What We Track</h2>
            <div className="metrics-grid">
              <div className="metric-item">
                <span className="metric-icon">👥</span>
                <span className="metric-text">Traffic Growth</span>
              </div>
              <div className="metric-item">
                <span className="metric-icon">🔄</span>
                <span className="metric-text">Conversion Rate</span>
              </div>
              <div className="metric-item">
                <span className="metric-icon">💰</span>
                <span className="metric-text">Revenue Impact</span>
              </div>
              <div className="metric-item">
                <span className="metric-icon">📱</span>
                <span className="metric-text">Engagement</span>
              </div>
              <div className="metric-item">
                <span className="metric-icon">🎯</span>
                <span className="metric-text">Lead Quality</span>
              </div>
              <div className="metric-item">
                <span className="metric-icon">📊</span>
                <span className="metric-text">Brand Awareness</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-card">
            <h3 className="newsletter-title">Marketing Insights</h3>
            <p className="newsletter-description">Get notified when our digital marketing showcase launches!</p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="email-input"
                  required
                />
                <button type="submit" className="submit-button">
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <p>Awesome! We'll share updates soon.</p>
              </div>
            )}
          </div>

          {/* Contact Options */}
          <div className="contact-options">
            <p className="contact-text">Ready to grow your business online?</p>
            <div className="contact-buttons">
              <Link to="/contact" className="contact-button primary">Get Strategy</Link>
              {/* <button className="contact-button">View Results</button> */}
            </div>
          </div>
        </div>
      </main>

     
    </div>
    <Footer/>
    </>
  )
}