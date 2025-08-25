import React , { useRef }from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import emailjs from '@emailjs/browser';
const Contact = () => {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_usdrqzj',     // <-- Replace this
      'template_fhjdgzp',    // <-- Replace this
      form.current,
      'S5TYp9-UcJj5ksVxk'      // <-- Replace this
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.log(error.text);
      }
    );
  };

  return (
    <>
    <Navbar/>
    <div className="contact-page">
      <h2 className="heading">CONTACT US</h2>
      <p className="subheading">
         Let’s turn your ideas into powerful digital experiences.
We’re just a message away from starting something amazing.
      </p>
      <div className="arrow">↓</div>

      <div className="contact-cards">
        <div className="card">
          <FaMapMarkerAlt className="icon" />
          <h4>Address</h4>
          <p>
           sector 73<br />
            Noida,<br />
            Uttar Pradesh.
          </p>
        </div>
        <div className="card">
          <FaPhoneAlt className="icon" />
          <h4>Contact Us</h4>
          <p>+91-9458305670</p>
          <p>support@smartriverr.com</p>
        </div>
        <div className="card">
          <FaLink className="icon" />
          <h4>Follow Us on</h4>
          <div className="social-icons1">
            <a href="www.facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/smartriverr_tech/" target="_blank"><FaInstagram /></a>
            <a href="www.twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/smartriverr/about/" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <h3 className="impact-text">Let's Make Impact to your Business</h3>
      <h1 className="project-title">PROJECT DISCUSS</h1>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input type="text" name='applicant_firstname' required placeholder="First Name" />
          <input type="text" name='applicant_lastname' placeholder="Last Name" />
        </div>
        <div className="form-row">
          <input type="email" name='applicant_email' placeholder="E mail" />
          <input type="text" name='applicant_phone' required placeholder="Contact Number" />
        </div>
        <textarea name='applicant_message' placeholder="Leave Your Message here..." rows="5"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
     <Footer/>
    </>
  );
};

export default Contact;
