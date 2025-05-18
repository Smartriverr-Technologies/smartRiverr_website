import React from "react";
import "./Ourprocess1.css";

const steps = [
  {
    title: "Discovery Call & Design",
    description:
      "The initial step before jumping into the development stage is sitting together and analyzing your requirements and needs. And start designing the prototypes and UI designs.",
    image: "/Images/img1.png",
  },
  {
    title: "Development",
    description:
      "Once this is done, the project manager prepares a plan for the next steps of development and makes sure there is transparency in communication with the client.",
    image: "/Images/img1.png",
  },
  {
    title: "Testing & Launch",
    description:
      "Before launching, the product goes through quality checks, testing and then it's deployed to the live environment.",
    image: "/Images/img1.png",
  },
  {
    title: "Support & Maintenance",
    description:
      "Post-launch, we provide continuous support, fix issues and ensure the product stays updated and performs well.",
    image: "/Images/img1.png",
  },
];

const Ourprocess1 = () => {
  return (
    <section className="our-process-section">
      <h2 className="section-title">Our Process</h2>
      {steps.map((step, index) => (
        <div
          className={`process-card ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
            <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
          <div className="card-image">
            <img src={step.image} alt={step.title} />
          </div>
          <div className="card-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Ourprocess1;
