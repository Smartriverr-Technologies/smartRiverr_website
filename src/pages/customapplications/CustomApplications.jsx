"use client"

import React, { useState } from "react"
import "./CustomApplications.css";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function CustomApplications() {
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
    <div className="custom-applications">
     

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Animated Code Icon */}
          <div className="icon-container">
            <div className="animated-icon">
              <svg className="code-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <div className="code-lines">
                <div className="code-line line-1"></div>
                <div className="code-line line-2"></div>
                <div className="code-line line-3"></div>
                <div className="code-line line-4"></div>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="main-title">
            Custom Applications
            <span className="highlight">In Development!</span>
          </h1>

          <p className="description">
            Our detailed showcase of custom application development services is currently under development. Stay tuned to explore how we craft tailored software solutions for your business.
          </p>

          {/* Application Types Grid */}
          <div className="app-types-grid">
            <div className="app-type-card">
              <div className="app-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
                </svg>
              </div>
              <h3 className="app-type-title">Desktop Applications</h3>
              <p className="app-type-description">Cross-platform desktop solutions</p>
            </div>

            <div className="app-type-card">
              <div className="app-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="app-type-title">Enterprise Software</h3>
              <p className="app-type-description">Scalable business solutions</p>
            </div>

            <div className="app-type-card">
              <div className="app-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="app-type-title">SaaS Platforms</h3>
              <p className="app-type-description">Cloud-based software services</p>
            </div>

            <div className="app-type-card">
              <div className="app-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v6zm0-6h3v2H9V5z"/>
                </svg>
              </div>
              <h3 className="app-type-title">API Development</h3>
              <p className="app-type-description">RESTful & GraphQL APIs</p>
            </div>
          </div>

          {/* Technology Stack */}
          {/* <div className="tech-section">
            <h2 className="tech-title">Technologies We Use</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <span className="tech-text">React</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🟢</span>
                <span className="tech-text">Node.js</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🐍</span>
                <span className="tech-text">Python</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">☕</span>
                <span className="tech-text">Java</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">💎</span>
                <span className="tech-text">Ruby</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🔷</span>
                <span className="tech-text">C#</span>
              </div>
            </div>
          </div> */}

          {/* Newsletter Signup */}
          <div className="newsletter-card">
            <h3 className="newsletter-title">Stay in the Loop</h3>
            <p className="newsletter-description">Get notified when our custom applications showcase goes live!</p>

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
            <p className="contact-text">Have a custom application idea?</p>
            <div className="contact-buttons">
              <Link to="/contact"><button className="contact-button primary">Start Project</button></Link>
              {/* <button className="contact-button">View Case Studies</button> */}
            </div>
          </div>
        </div>
      </main>

      
    </div>
    <Footer/>
    </>
  )
}