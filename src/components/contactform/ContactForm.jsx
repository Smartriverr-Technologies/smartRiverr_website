// import React from 'react';
import './ContactForm.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_usdrqzj',
      'template_9dxyoom',
      form.current,
      'S5TYp9-UcJj5ksVxk'
    ).then(
      () => alert('Message sent successfully!'),
      (error) => alert('Error: ' + error.text)
    );
  };
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h5 className="section-subtitle">REACH OUT</h5>
        <h2 className="section-title">Let’s Discuss Your Project in Details</h2>
        <p className="section-description">
          Let's get started on your digital transformation journey. Submit your inquiry today, and our experts will be in touch with you soon.
        </p>

        <form ref={form} onSubmit={sendEmail} className="form-layout">
          {/* Left Side - Input Fields */}
          <div className="form-left">
            <div className="form-row">
              <input type="text" name="user_name" placeholder="Name" />
              <input type="email"  name="user_email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text"  name="user_phone" placeholder="Phone" />
              <input type="text" name="user_company" placeholder="Company or Brand Name" />
            </div>
            <textarea rows="5" name="user_message" placeholder="Message"></textarea>
          </div>

          {/* Right Side - Services */}
          <div className="form-right">
            <h4>Which Service You Need From Us?</h4>
            <div className="checkbox-list">
              <label><input type="checkbox" name="selected_services"/> Web Design & Prototyping</label>
              <label><input type="checkbox" name="selected_services"/> Web Development</label>
              <label><input type="checkbox" name="selected_services"/> Ecommerce & Multivendor</label>
              <label><input type="checkbox" name="selected_services"/> SaaS Application</label>
              <label><input type="checkbox" name="selected_services"/> Custom Application</label>
              <label><input type="checkbox" name="selected_services"/> CRM & ERP Solution</label>
              <label><input type="checkbox" name="selected_services"/> Mobile Application</label>
              <label><input type="checkbox" name="selected_services"/> Digital Marketing & Branding</label>
              <label><input type="checkbox" name="selected_services"/> Other</label>
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        
      </div>
    </section>
  );
};

export default ContactForm;
