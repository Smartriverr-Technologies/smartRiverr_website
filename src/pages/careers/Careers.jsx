import React from 'react';
import './Careers.css';
import { Link } from 'react-router-dom';
import img from '../../../public/Images/careerbanner.jpg'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const benefits = [
  {
    title: "Remote Work Allowed & Flexible Timing",
    description: "Enjoy true work-life harmony with the flexibility to work remotely and set a schedule that fits your life.",
    icon: "👨‍💻", 
    bgColor: "#d8d3ff",// Replace with actual icons or images as needed
  },
  {
    title: "Friendly and Dynamic Work Environment",
    description: "Be part of a dynamic, inclusive team where creativity thrives and collaboration drives everything we do",
    icon: "🤝",
    bgColor: "#ffef9f",
  },
  {
    title: "Training Opportunity to Fresh Start",
    description: "Unlock new skills with training programs crafted to fuel your professional growth and career journey.",
    icon: "📊",
    bgColor: "#5cb5d8",
  },
];

const coreValues = [
  {
    icon: '/Images/teamwork.svg',
    title: 'Team Work',
    description: 'Working together to accomplish common objectives and a unified vision.',
  },
  {
    icon: '/Images/Innovation.svg',
    title: 'Innovation',
    description: 'Nurturing a way of thinking that encourages innovation and inquisitiveness.',
  },
  {
    icon: '/Images/adaptability.svg',
    title: 'Adaptability',
    description: 'Adapting to change in order to succeed in dynamic surroundings.',
  },
  {
    icon: '/Images/selfgrowth.svg',
    title: 'Self Growth',
    description: 'Encouraging an environment of ongoing learning and personal development.',
  },
  {
    icon: '/Images/communication.svg',
    title: 'Transparency',
    description: 'Promoting transparency by sharing information openly and fully.',
  },
  {
    icon: '/Images/ethical.svg',
    title: 'Ethical Conduct',
    description: 'Earning trust by being truthful and acting reliably over time.',
  },
];

const Careers = () => {

  return (
    <>
    <Navbar />
     <section
      className="career-hero"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="career-overlay">
        <div className="career-text">
          <h4 className="highlight">EMPOWERING CAREERS</h4>
          <h1>Grow with Us</h1>
          <p>
            At smartRiverr , we are dedicated to creating an environment that inspires and empowers each individual, encouraging a spirit of curiosity to explore, learn, and contribute something truly original and impactful.
          </p>
          <button>Join Our Team</button>
        </div>
      </div>
    </section>
     <section className="core-values-section">
      <div className="container">
        
        <div className="core-values-right">
          <span className="subtitle">OUR CORE VALUES</span>
          <h2>Values We Believe In</h2>
          <p>
            Our core values serve as the guiding principles of our company, driving innovation, nurturing meaningful connections, and ensuring impactful outcomes.
          </p>
        </div>
        <div className="core-values-left">
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <img src={value.icon} alt={value.title} />
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    


     <div className="benefits-container">
      <div className="benefits-text">
        <h2>Benefits of Working With Us</h2>
        <p>
          Discover a world of benefits when you join us — from exceptional expertise to steadfast support, we’re here to inspire and elevate your professional journey.
        </p>
      </div>
      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index} style={{ backgroundColor: benefit.bgColor }}>
            {/* <div className="benefit-icon">{benefit.icon}</div> */}
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
    <section className="dropcv-section">
      <div className="dropcv-content">
        <p className="dropcv-text">
          "The perfect role might be just around the corner. Send us your CV and step into our talent universe — we’ll reach out when the stars align!"
        </p>
        <Link to="/apply-now"><button className="dropcv-button">Drop Your CV</button></Link>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Careers;