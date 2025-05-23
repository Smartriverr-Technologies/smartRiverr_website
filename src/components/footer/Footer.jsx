import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col about">
          <img src="/path-to-your-logo.png" alt="Smartriverr Logo" className="footer-logo" />
          <p>
            smartRiverr is a cutting-edge tech company providing web, mobile, and custom software
            solutions to help businesses grow online.
          </p>
        </div>

        <div className="footer-col">
          <h3>Pages</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@smartriverr.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123 Innovation Street, Pune, India</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
             <a href="#"><FaFacebookF /></a>
  <a href="#"><FaInstagram /></a>
  <a href="#"><FaTwitter /></a>
  <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} smartRiverr. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/legal">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
