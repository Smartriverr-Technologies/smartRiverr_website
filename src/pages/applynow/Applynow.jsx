import React , { useRef, useState } from 'react'
import './Applynow.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import emailjs from '@emailjs/browser';
function Applynow() {
   const form = useRef();
  const [resumeName, setResumeName] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_usdrqzj',
      'template_fhjdgzp',
      form.current,
      'S5TYp9-UcJj5ksVxk'
    ).then(() => {
      alert('Application sent!');
      form.current.reset(); 
      setResumeName('');
    }).catch((error) => {
      alert('Failed to send: ' + error.text);
    });
  };
  return (
    <>
    <Navbar/>
   <section className="apply-now-section">
      <div className="apply-now-overlay">
        <div className="apply-now-content">
          <h4 className="highlight-text">EMPOWER YOUR FUTURE</h4>
          <h1 className="main-heading1">Apply Now</h1>
          <p className="description">
            At <strong>smartRiverr</strong>, we’re always looking for passionate, creative, and curious individuals. 
            Join us and take the first step toward building a meaningful and fulfilling career.
          </p>
          {/* <button className="apply-button">Submit Application</button> */}
        </div>
      </div>
    </section>

     <section className="cv-section">
      <div className="cv-header">
        <h4>APPLY NOW</h4>
        <h2>Leave Your CV</h2>
        <p>
          Leave your resume if you are interested in a vacancy. We will definitely contact you.
        </p>
      </div>

      <form className="cv-form" ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <input type="text" name="applicant_firstname" placeholder="Your Name*" required />
          <input type="email" name="applicant_email" placeholder="Your Email*" required />
        </div>

        <div className="form-row">
          <input type="text" name="applicant_phone" placeholder="Your Phone No.*" required />
          <select required name="applicant_gender">
            <option value="">Select Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <select required name="work_experience" >
            <option value="">Select Work Experience *</option>
            <option value="0-1">0-1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3+">3+ years</option>
          </select>
        </div>

        <div className="form-row">
          <input type="text" name="current_location" placeholder="Where Currently Residing ? *" required />
        </div>

        <div className="form-row">
          <textarea rows="4" name="cover_letter" placeholder="Cover letter...."></textarea>
        </div>

        <div className="form-row file-upload">
          <label>
            Upload Your Resume<span>*</span>
          </label>
          <input name="resume_file" type="file" onChange={(e) => setResumeName(e.target.files[0]?.name)} required />
           <input type="hidden" name="resume_filename" value={resumeName} />
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" required /> By using this form you agree with the storage and handling of your data by this website.
          </label>
        </div>

        <div className="form-row">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </section>

    
    <Footer />
    </>
  )
}

export default Applynow
