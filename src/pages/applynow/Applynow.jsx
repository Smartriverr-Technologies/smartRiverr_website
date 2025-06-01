import React from 'react'
import './Applynow.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
function Applynow() {
  return (
    <>
    <Navbar/>
   <section className="apply-now-section">
      <div className="apply-now-overlay">
        <div className="apply-now-content">
          <h4 className="highlight-text">EMPOWER YOUR FUTURE</h4>
          <h1 className="main-heading">Apply Now</h1>
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

      <form className="cv-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name*" required />
          <input type="email" placeholder="Your Email*" required />
        </div>

        <div className="form-row">
          <input type="text" placeholder="Your Phone No.*" required />
          <select required>
            <option value="">Select Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <select required>
            <option value="">Select Work Experience *</option>
            <option value="0-1">0-1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3+">3+ years</option>
          </select>
        </div>

        <div className="form-row">
          <input type="text" placeholder="Where Currently Residing ? *" required />
        </div>

        <div className="form-row">
          <textarea rows="4" placeholder="Cover letter...."></textarea>
        </div>

        <div className="form-row file-upload">
          <label>
            Upload Your Resume<span>*</span>
          </label>
          <input type="file" required />
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
