import React from 'react';
import './Whychooseus.css';

const features = [
  {
    title: 'Expert Team',
    description: 'Our professionals bring years of experience in web, mobile, and software development.',
    icon: '👨‍💻',
  },
  {
    title: 'All-in-One Services',
    description: 'We handle design, development, deployment, and marketing — all under one roof.',
    icon: '🧠',
  },
  {
    title: 'Tailored Solutions',
    description: 'Custom strategies and builds that match your business objectives.',
    icon: '🛠️',
  },
  {
    title: 'Modern UI/UX',
    description: 'Visually engaging and user-friendly designs that delight users.',
    icon: '🎯',
  },
  {
    title: 'Timely Delivery',
    description: 'Efficient workflows and agile development ensure your project is delivered on time.',
    icon: '⏱️',
  },
  {
    title: 'After-launch Support',
    description: 'We stay with you post-launch with regular updates and digital marketing.',
    icon: '🔧',
  },
];

const Whychooseus = () => {
  return (
    <section className="why-choose">
      <h2>Why Choose <span>smartRiverr</span>?</h2>
      <p className="why-subtitle">
        Trusted by businesses for quality, reliability, and innovation.
      </p>
      <div className="why-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychooseus;
