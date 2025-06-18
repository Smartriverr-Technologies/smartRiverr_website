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
            {/* <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/testimonials">Testimonials</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@smartriverr.com</li>
            <li>Phone: +91 97618 04590</li>
            <li>Address: 123 example Street, example, India</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
             <a href="www.facebook.com" target="_blank"><FaFacebookF /></a>
  <a href="https://www.instagram.com/smartriverr_tech/" target="_blank"><FaInstagram /></a>
  <a href="www.twitter.com" target="_blank"><FaTwitter /></a>
  <a href="https://www.linkedin.com/company/smartriverr/about/" target="_blank"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} smartRiverr Technologies. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
