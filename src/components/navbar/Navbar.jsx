
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
import Logo from '../../../public/Images/Company_logo.png'
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
                        <FaEnvelope style={{ marginLeft: "20px" }} /> <span> support@smartriverr.com</span>
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

                        <li className="dropdown mega-dropdown">
  <li><Link to="">SERVICES<MdKeyboardArrowDown /></Link></li>
  <div className="mega-menu">
    <div className="mega-left">
      <h4>Application Solution</h4>
      <p>Empowering businesses to meet their needs with innovative application solutions.</p>
      <h4>Digital Marketing</h4>
      <p>Optimize online visibility and grow business with our innovative digital solutions.</p>
      <h4>Design Solution</h4>
      <p>Transform your vision into captivating designs that engage your audience.</p>
    </div>
    <div className="mega-right">
      <div className="mega-box">
        <Link to="/web-development"><h5>Web Development</h5>
        <p>Create intuitive, engaging, and high-quality web applications.</p></Link>
      </div>
      <div className="mega-box">
        <h5>Mobile App Development</h5>
        <p>Create dynamic iOS and Android apps for large audiences.</p>
      </div>
      <div className="mega-box">
        <h5>Custom Application</h5>
        <p>Enhance functionality with powerful APIs and integrations.</p>
      </div>
      <div className="mega-box">
        <h5>Digital Marketing</h5>
        <p>Automate workflows using custom AI/ML models.</p>
      </div>
      <div className="mega-box">
        <h5>SaaS Application</h5>
        <p>Build scalable SaaS products tailored to your users.</p>
      </div>
      <div className="mega-box">
        <h5>API Development</h5>
        <p>Integrate robust APIs to optimize performance and flexibility.</p>
      </div>
    </div>
  </div>
</li>

                        <li><Link to="/blogpost">BLOGS</Link></li>
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
