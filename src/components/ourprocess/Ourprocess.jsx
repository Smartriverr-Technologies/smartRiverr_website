import React from "react";
import "./Ourprocess.css";

const processSteps = [
  {
    id: "01",
    title: "Discovery Call & Design",
    desc: "The initial step before jumping into the development stage is sitting together and analyzing your requirements and needs. And start designing the prototypes and UI designs.",
    image: "/Images/img1.png",
  },
  {
    id: "02",
    title: "Development",
    desc: "Once this is done, the project manager prepares a plan for the next steps of development and ensures transparency in communication.",
    image: "/Images/img1.png",
  },
  {
    id: "03",
    title: "Testing",
    desc: "We run thorough tests to identify and fix bugs and polish the product before launch.",
    image: "/images/step3.png",
  },
  {
    id: "04",
    title: "Deployment",
    desc: "Once tested and approved, we deploy your product to the live environment securely.",
    image: "/images/step4.png",
  },
  {
    id: "05",
    title: "Support & Maintenance",
    desc: "We monitor performance and are available for updates, enhancements, and ongoing support.",
    image: "/images/step5.png",
  },
];

const Ourprocess = () => {
  return (
    <section className="our-process">
      <h2 className="process-heading">Our <strong>Process</strong>...</h2>
      <p className="process-subtitle">
        We have been recognized as the supreme development agency by several listing platforms.
        And our process proves the same.
      </p>
      {processSteps.map((step, index) => (
        <div className={`process-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
          <div className="step-number">{step.id}</div>
          <div className="step-content">
            <img src={step.image} alt={step.title} className="step-image" />
            <div className="step-text">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Ourprocess;
