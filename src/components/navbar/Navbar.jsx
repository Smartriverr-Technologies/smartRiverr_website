import './Navbar.css';
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram,
  FaLinkedinIn, FaTwitter, FaBars, FaTimes
} from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../../public/Images/Company_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down (desktop)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Dropdown toggle (mobile only)
  const handleDropdownToggle = (dropdownName) => {
    if (window.innerWidth <= 992) {
      setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
    }
  };

  // Close menu on link click (mobile)
  const handleLinkClick = () => {
    if (window.innerWidth <= 992) {
      setMenuOpen(false);
      setOpenDropdown('');
    }
  };

  return (
    <div className={`navbar-container ${showNavbar ? "visible" : "hidden"}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <FaPhoneAlt /> <span>+91-9458305670</span>
          <FaEnvelope style={{ marginLeft: "20px" }} /> <span> support@smartriverr.com</span>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/smartriverr/about/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/smartriverr_tech/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}><img src={Logo} alt="logo" /></Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
          <li><Link to="/about-us" onClick={handleLinkClick}>ABOUT US</Link></li>

          {/* ABOUT US */}
          {/* <li className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
            <div className="dropdown-header">
              <Link to="/about" onClick={window.innerWidth > 992 ? handleLinkClick : (e) => e.preventDefault()}>ABOUT US</Link>
              <MdKeyboardArrowDown
                className={`dropdown-toggle ${openDropdown === 'about' ? 'rotate' : ''}`}
                onClick={() => handleDropdownToggle('about')}
              />
            </div>
            <div className="dropdown-content">
              <Link to="/company" onClick={handleLinkClick}>Company</Link>
              <Link to="/team" onClick={handleLinkClick}>Team</Link>
            </div>
          </li> */}

          {/* SERVICES (Mega Menu) */}
          <li className={`dropdown mega-dropdown ${openDropdown === 'services' ? 'open' : ''}`}>
            <div className="dropdown-header">
              <Link to="#" onClick={(e) => e.preventDefault()}>SERVICES</Link>
              <MdKeyboardArrowDown
                className={`dropdown-toggle ${openDropdown === 'services' ? 'rotate' : ''}`}
                onClick={() => handleDropdownToggle('services')}
              />
            </div>
            <div className="mega-menu">
              <div className="mega-left">
  <h3>Application Development</h3>
  <p>Delivering custom-built applications that drive efficiency and innovation.</p>

  <h3>Digital Growth</h3>
  <p>Boost your online presence and expand reach with digital strategies.</p>

  <h3>Creative Design</h3>
  <p>Turning ideas into visually stunning designs that connect your audience.</p>
</div>
              <div className="mega-right">
                <Link to="/web-development"><div className="mega-box" onClick={handleLinkClick}>
                  <h5>Web Development</h5>
                  <p>Create intuitive, engaging, and high-quality web applications.</p>
                </div></Link>
                <Link to="/mobile-app-development"><div className="mega-box">
                  <h5>Mobile App Development</h5>
                  <p>Create dynamic iOS and Android apps for large audiences.</p>
                </div></Link>
                <Link to="/custom-application"><div className="mega-box">
                  <h5>Custom Application Solutions</h5>
                  <p>Enhance functionality with powerful APIs and integrations.</p>
                </div></Link>
                <Link to="/digital-marketing"><div className="mega-box">
                  <h5>Digital Marketing</h5>
                  <p>Automate workflows using custom AI/ML models.</p>
                </div></Link>
               <Link to="/saas-applications"> <div className="mega-box">
                  <h5>SaaS Application</h5>
                  <p>Build scalable SaaS products tailored to your users.</p>
                </div></Link>
                <Link to="/api-development"><div className="mega-box">
                  <h5>API Development</h5>
                  <p>Integrate robust APIs to optimize performance and flexibility.</p>
                </div></Link>
              </div>
            </div>
          </li>

          <li><Link to="/blogpost" onClick={handleLinkClick}>BLOGS</Link></li>
          <li><Link to="/clients" onClick={handleLinkClick}>CLIENTS</Link></li>
          <li><Link to="/careers" onClick={handleLinkClick}>CAREERS</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
