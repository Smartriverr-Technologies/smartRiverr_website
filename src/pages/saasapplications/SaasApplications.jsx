"use client"

import React, { useState } from "react"
import "./SaasApplications.css"
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function SaasApplications() {
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
    <div className="saas-applications">
      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Animated SaaS Icon */}
          <div className="icon-container">
            <div className="animated-icon">
              <svg className="saas-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"
                />
              </svg>
              <div className="floating-icons">
                <div className="floating-icon icon-1">⚡</div>
                <div className="floating-icon icon-2">🔒</div>
                <div className="floating-icon icon-3">📊</div>
                <div className="floating-icon icon-4">🚀</div>
                <div className="floating-icon icon-5">💼</div>
                <div className="floating-icon icon-6">🌐</div>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="main-title">
            SaaS Applications
            <span className="highlight">Under Construction!</span>
          </h1>

          <p className="description">
            We're developing an impressive showcase of our SaaS application development expertise. 
            Get ready to explore how we build scalable, secure, and user-friendly software-as-a-service solutions.
          </p>

          {/* SaaS Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="feature-title">Multi-Tenant Architecture</h3>
              <p className="feature-description">Scalable infrastructure for multiple clients</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </div>
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">Advanced security and compliance features</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="feature-title">Analytics Dashboard</h3>
              <p className="feature-description">Real-time insights and reporting tools</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="feature-title">API Integration</h3>
              <p className="feature-description">Seamless third-party integrations</p>
            </div>
          </div>

          {/* SaaS Benefits */}
          <div className="benefits-section">
            <h2 className="benefits-title">Why Choose Our SaaS Solutions</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">☁️</span>
                <span className="benefit-text">Cloud Native</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📈</span>
                <span className="benefit-text">Auto Scaling</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💳</span>
                <span className="benefit-text">Subscription Billing</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🔄</span>
                <span className="benefit-text">Continuous Updates</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🛠️</span>
                <span className="benefit-text">Easy Maintenance</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🌍</span>
                <span className="benefit-text">Global Access</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-card">
            <h3 className="newsletter-title">SaaS Updates</h3>
            <p className="newsletter-description">Be the first to see our SaaS application development showcase!</p>

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
                <p>Great! We'll keep you informed.</p>
              </div>
            )}
          </div>

          {/* Contact Options */}
          <div className="contact-options">
            <p className="contact-text">Ready to build your SaaS platform?</p>
            <div className="contact-buttons">
              <Link to="/contact" className="contact-button primary">Start Building</Link>
              {/* <button className="contact-button">View Demos</button> */}
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  )
}