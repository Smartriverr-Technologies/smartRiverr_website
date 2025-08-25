"use client"

import React, { useState } from "react"
import "./ApiDevelopment.css";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function ApiDevelopment() {
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
    <div className="api-development">
      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Animated API Icon */}
          <div className="icon-containe">
            <div className="animated-ico">
              <svg className="api-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="data-flow">
                <div className="data-packet packet-1"></div>
                <div className="data-packet packet-2"></div>
                <div className="data-packet packet-3"></div>
                <div className="data-packet packet-4"></div>
              </div>
              <div className="connection-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="main-title">
            API Development
            <span className="highlight">Coming Soon!</span>
          </h1>

          <p className="description">
            We're building a comprehensive showcase of our API development capabilities. 
            Discover how we create robust, scalable, and secure APIs that power modern applications and integrations.
          </p>

          {/* API Types Grid */}
          <div className="api-types-grid">
            <div className="api-type-card">
              <div className="api-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="api-type-title">RESTful APIs</h3>
              <p className="api-type-description">Standard HTTP-based web services</p>
            </div>

            <div className="api-type-card">
              <div className="api-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="api-type-title">GraphQL APIs</h3>
              <p className="api-type-description">Flexible query language for APIs</p>
            </div>

            <div className="api-type-card">
              <div className="api-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="api-type-title">Real-time APIs</h3>
              <p className="api-type-description">WebSocket & Server-Sent Events</p>
            </div>

            <div className="api-type-card">
              <div className="api-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </div>
              <h3 className="api-type-title">Secure APIs</h3>
              <p className="api-type-description">OAuth, JWT & API key authentication</p>
            </div>
          </div>

          {/* API Features */}
          <div className="features-section">
            <h2 className="features-title">API Development Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <span className="feature-text">Documentation</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <span className="feature-text">Testing Suite</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span className="feature-text">Rate Limiting</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Monitoring</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <span className="feature-text">Versioning</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <span className="feature-text">Security</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-card">
            <h3 className="newsletter-title">API Updates</h3>
            <p className="newsletter-description">Get notified when our API development showcase goes live!</p>

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
                <p>Perfect! We'll notify you soon.</p>
              </div>
            )}
          </div>

          {/* Contact Options */}
          <div className="contact-options">
            <p className="contact-text">Need a custom API solution?</p>
            <div className="contact-buttons">
              <Link to="/contact" className="contact-button primary">Start Project</Link>
              {/* <button className="contact-button">View Documentation</button> */}
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  )
}