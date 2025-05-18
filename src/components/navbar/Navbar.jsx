// import React from 'react'
import './Navbar.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="navbar-container">
                <div className="top-bar">
                    <div className="contact-info">
                        <FaPhoneAlt /> <span>+91-9761804590</span>
                        <FaEnvelope style={{ marginLeft: "20px" }} /> <span>info@smartriverr.com</span>
                    </div>
                    <div className="social-icons">
                        <a href=""><FaLinkedinIn /></a>
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                </div>
                <div className="main-navbar">
                    <div className="logo">
                        <img src="/logo.png" alt="logo" />
                    </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#">HOME</a></li>

                        <li className="dropdown">
                            <a href="#">ABOUT US <MdKeyboardArrowDown /></a>
                            <div className="dropdown-content">
                                <a href="#">Company</a>
                                <a href="#">Team</a>
                            </div>
                        </li>

                        <li className="dropdown">
                            <a href="#">SERVICES<MdKeyboardArrowDown /></a>
                            <div className="dropdown-content">
                                <a href="#">Web Development</a>
                                <a href="#">Mobile Apps</a>
                            </div>
                        </li>

                        <li><a href="#">CLIENTS</a></li>
                        <li><a href="#">CAREERS</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </div>
                {/* <div className="nav-buttons">
          <button className="quote-btn">GET A QUOTE</button>
          <button className="lang-btn">EN</button>
    </div> */}
            </div>
        </>
    )
}

export default Navbar;
