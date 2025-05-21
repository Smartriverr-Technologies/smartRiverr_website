
import './OurProcess.css';

const processSteps = [
  {
    id: 1,
    title: 'Discovery Call & Design',
    description:
      'We start by sitting down together to understand your requirements thoroughly, then proceed to create prototypes and design the UI.',
    image: '/Images/img1.jpg',
  },
  {
    id: 2,
    title: 'Development',
    description:
    'After this, the project manager outlines a detailed development plan and ensures clear, transparent communication with the client.' ,
    image: '/Images/img2.jpg',
  },
  {
    id: 3,
    title: 'Testing',
    description:
      'As an essential part of our development cycle, we conduct various testing procedures, including manual and automated tests, to deliver a flawless end solution.',
    image: '/Images/img3.jpg',
  },
  {
    id: 4,
    title: 'Deployment',
    description:
      'Once all key milestones are cleared, our smartRiverr server team supports you in deploying the application to the target environment.',
    image: '/Images/img4.jpg',
  },
  {
    id: 5,
    title: 'Support & Maintenance',
    description:
      'To guarantee your satisfaction, we deliver a solution that meets every requirement—and our team is available 24/7 for support and maintenance.',
    image: '/Images/img5.jpg',
  },
];

const OurProcess = () => {
  return (
    <section className="our-process">
      <h2>
        Our <span>Process...</span>
      </h2>
      <p className="process-subtext">
        Our process speaks volumes, earning us recognition as a top-tier development agency by several respected listing platforms.
      </p>
      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div
            className={`process-card ${index % 2 === 0 ? 'left' : 'right'}`}
            key={step.id}
          >
            <div className="step-number">{`0${step.id}`}</div>
            <div className="step-content">
              <img src={step.image} alt={step.title} className="step-image" />
              <div className="step-text">
                <h3>{step.title}</h3>
                <div className="title-underline" />
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;