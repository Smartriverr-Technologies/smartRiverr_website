
"use client"

import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
export default function About() {
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
    <div className="under-developmen">
      {/* Header */}
      {/* <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">
              <span>ST</span>
            </div>
            <span className="company-name">
              Smartriverr Technologies
            </span>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="main-conten">
        <div className="content-containe">
          {/* Animated Icon */}
          {/* <div className="icon-containe">
            <div className="animated-ico">
              <svg className="ico" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z"
                />
              </svg>
            </div>
          </div> */}

          {/* Main Message */}
          <h1 className="main-titl">
            We're Building Something
            <span className="highligh">Amazing!</span>
          </h1>

          <p className="descriptio" style={{ textAlign: "center", maxWidth: "600px", margin: "20px auto" , color: "#003366" , fontWeight: "500"}}>
            Our About Us page is currently under development. We're crafting something special that truly represents who
            we are and what we do at Smartriverr Technologies.
          </p>

          {/* Services Preview */}
          <div className="services-gri">
            <div className="service-car">
              <div className="service-ico">🌐</div>
              <p className="service-labe">Websites</p>
            </div>
            <div className="service-car">
              <div className="service-ico">💻</div>
              <p className="service-labe">Software</p>
            </div>
            <div className="service-car">
              <div className="service-ico">📱</div>
              <p className="service-labe">Mobile Apps</p>
            </div>
            <div className="service-car">
              <div className="service-ico">📈</div>
              <p className="service-labe">Digital Marketing</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-car">
            <h3 className="newsletter-titl">Stay Updated</h3>
            <p className="newsletter-descriptio">Be the first to know when our About Us page goes live!</p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="newsletter-for">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="email-inpu"
                  required
                />
                <button type="submit" className="submit-butto">
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="success-messag">
                <div className="success-icon">✓</div>
                <p>Thanks! We'll keep you posted.</p>
              </div>
            )}
          </div>

          {/* Contact Options */}
          <div className="contact-option">
            <p className="contact-tex">Need immediate assistance?</p>
            <div className="contact-button">
              <Link to="/contact" className="contact-butto">Contact Us</Link>
              <Link to="/web-development" className="contact-butto">View Services</Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-container">
          <p className="copyright">© 2024 Smartriverr Technologies. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </footer> */}
    </div>
    <Footer/>
    </>
  )
}