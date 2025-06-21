
import './Navbar.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState , useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../../public/Images/Company_Logo.png'
// import Footer from '../footer/Footer';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
   
    return (
        <>  
        <div className={`navbar-container ${showNavbar ? "visible" : "hidden"}`}>
            <div className="navbar-container">
                <div className="top-bar">
                    <div className="contact-info">
                        <FaPhoneAlt /> <span>+91-9458305670</span>
                        <FaEnvelope style={{ marginLeft: "20px" }} /> <span>support@smartriverr.com</span>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/smartriverr/about/" target="_blank"><FaLinkedinIn /></a>
                        <a href="" target="_blank"><FaFacebookF /></a>
                        <a href="" target="_blank"><FaTwitter /></a>
                        <a href="https://www.instagram.com/smartriverr_tech/" target="_blank"><FaInstagram /></a>
                    </div>
                </div>
                <div className="main-navbar">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><Link to="/">HOME</Link></li>

                        <li className="dropdown">
                            <Link to="/about">ABOUT US <MdKeyboardArrowDown /></Link>
                            <div className="dropdown-content">
                                <a href="#">Company</a>
                                <a href="#">Team</a>
                            </div>
                        </li>

                        <li className="dropdown">
                            <Link to="/services">SERVICES<MdKeyboardArrowDown /></Link>
                            <div className="dropdown-content">
                                <a href="#">Web Development</a>
                                <a href="#">Mobile Apps</a>
                            </div>
                        </li>

                        <li><Link to="/clients">CLIENTS</Link></li>
                        <li><Link to="/careers">CAREERS</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>
               
            </div>
            </div>
           
        </>
    )
}

export default Navbar;
