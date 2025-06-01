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
        In publishing and graphic design, is a placeholder text commonly used to demonstrate the visual
      </p>
      <div className="arrow">↓</div>

      <div className="contact-cards">
        <div className="card">
          <FaMapMarkerAlt className="icon" />
          <h4>Address</h4>
          <p>
            XYZ, Andrew street,<br />
            UM Nagar,<br />
            Chennai-600017.
          </p>
        </div>
        <div className="card">
          <FaPhoneAlt className="icon" />
          <h4>Contact Us</h4>
          <p>+91-8765432120</p>
          <p>helpsock123@gmail.com</p>
        </div>
        <div className="card">
          <FaLink className="icon" />
          <h4>Follow Us on</h4>
          <div className="social-icons1">
            <a href="www.facebook.com"><FaFacebook /></a>
            <a href="www.instagram.com"><FaInstagram /></a>
            <a href="www.twitter.com"><FaTwitter /></a>
            <a href="www.Linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <h3 className="impact-text">Let's Make Impact to your Business</h3>
      <h1 className="project-title">PROJECT DISCUSS</h1>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input type="text" name='first_name' placeholder="First Name" />
          <input type="text" name='last_name' placeholder="Last Name" />
        </div>
        <div className="form-row">
          <input type="email" name='email' placeholder="E mail" />
          <input type="text" name='contact_number' placeholder="Contact Number" />
        </div>
        <textarea name='message' placeholder="Leave Your Message here..." rows="5"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
     <Footer/>
    </>
  );
};

export default Contact;
