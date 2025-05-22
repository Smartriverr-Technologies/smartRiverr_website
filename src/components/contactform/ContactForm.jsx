import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h5 className="section-subtitle">REACH OUT</h5>
        <h2 className="section-title">Let’s Discuss Your Project in Details</h2>
        <p className="section-description">
          Let's get started on your digital transformation journey. Submit your inquiry today, and our experts will be in touch with you soon.
        </p>

        <form className="form-layout">
          {/* Left Side - Input Fields */}
          <div className="form-left">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Company or Brand Name" />
            </div>
            <textarea rows="5" placeholder="Message"></textarea>
          </div>

          {/* Right Side - Services */}
          <div className="form-right">
            <h4>Which Service You Need From Us?</h4>
            <div className="checkbox-list">
              <label><input type="checkbox" /> Web Design & Prototyping</label>
              <label><input type="checkbox" /> Web Development</label>
              <label><input type="checkbox" /> Ecommerce & Multivendor</label>
              <label><input type="checkbox" /> SaaS Application</label>
              <label><input type="checkbox" /> Custom Application</label>
              <label><input type="checkbox" /> CRM & ERP Solution</label>
              <label><input type="checkbox" /> Mobile Application</label>
              <label><input type="checkbox" /> Digital Marketing & Branding</label>
              <label><input type="checkbox" /> Other</label>
            </div>
          </div>
        </form>

        <button type="submit" className="submit-btn">Submit</button>
      </div>
    </section>
  );
};

export default ContactForm;
