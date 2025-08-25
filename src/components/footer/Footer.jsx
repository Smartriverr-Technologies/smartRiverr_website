
import { Link } from 'react-router-dom';
import Logo from '../../../public/Images/newLogo1.png';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col about">
          <img src={Logo} alt="Smartriverr Logo" className="footer-logo" />
          <p>
            smartRiverr is a cutting-edge tech company providing web, mobile, and custom software
            solutions to help businesses grow online.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/web-development">Web Development</Link></li>
            {/* <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/testimonials">Testimonials</a></li> */}
            <li><Link to="/blogpost">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@smartriverr.com</li>
            <li>Phone: +91 94583 05670</li>
            <li>Address: sector 73 , Noida , Uttar Pradesh</li>
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

      <div className="footer-bottom" style={{color: "#aaa;"}}>
        <p>© {new Date().getFullYear()} smartRiverr Technologies. All rights reserved.</p>
        <div className="footer-links">
          {/* <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Legal</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
