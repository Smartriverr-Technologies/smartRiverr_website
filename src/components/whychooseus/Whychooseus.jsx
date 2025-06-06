import React, { useEffect } from 'react';
import './Whychooseus.css';
import Tilt from 'react-parallax-tilt';

const features = [
  {
    title: 'Expert Team',
    description: 'Our professionals bring years of experience in web, mobile, and software development.',
    // icon: '👨‍💻',
    image: "/Images/team1.svg",
  },
  {
    title: 'All-in-One Services',
    description: 'We handle design, development, deployment, and marketing — all under one roof.',
    // icon: '🧠',
    image: "/Images/allservices.svg",
  },
  {
    title: 'Tailored Solutions',
    description: 'Custom strategies and builds that match your business objectives.',
    // icon: '🛠️',
    image: "/Images/solution.svg",
  },
  {
    title: 'Modern UI/UX',
    description: 'Visually engaging and user-friendly designs that delight users.',
    // icon: '🎯',
    image: "/Images/UIUX.svg",
  },
  {
    title: 'Timely Delivery',
    description: 'Efficient workflows and agile development ensure your project is delivered on time.',
    // icon: '⏱️',
    image: "/Images/time.svg",
  },
  {
    title: 'After-launch Support',
    description: 'We stay with you post-launch with regular updates and digital marketing.',
    // icon: '🔧',
    image: "/Images/Update.svg",
  },
];

const Whychooseus = () => {
   
  return (
    <section className="why-choose">
      <h2 >Why Choose <span>smartRiverr</span>?</h2>
      <p className="why-subtitle">
        Trusted by businesses for quality, reliability, and innovation.
      </p>
      <div className="why-grid" >
        {features.map((feature, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.05}
            key={index}
          >
          <div className="why-card" key={index}>
            <img src={feature.image} alt={feature.title} className="why-icon" />
            {/* <div className="why-icon">{feature.image}</div> */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Whychooseus;
