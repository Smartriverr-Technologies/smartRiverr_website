import React, { useState, useEffect, useRef } from 'react';
import './DevelopmentProcess1.css';

// --- SVG Icon Components for a luxurious feel ---
const DiscoveryIcon = ({ isActive }) => (
    <svg className={`dev-icon ${isActive ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
);
const DesignIcon = ({ isActive }) => (
    <svg className={`dev-icon ${isActive ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path><path d="M12 4v16"></path><path d="m12 4-3 3"></path><path d="m12 4 3 3"></path><path d="m19 12-3-3"></path><path d="m19 12 3-3"></path>
    </svg>
);
const DevelopmentIcon = ({ isActive }) => (
    <svg className={`dev-icon ${isActive ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);
const DeploymentIcon = ({ isActive }) => (
    <svg className={`dev-icon ${isActive ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>
    </svg>
);

// --- Main Development Process Component ---
export default function DevelopmentProcess1() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);
    const stepRefs = useRef([]);

    const processSteps = [
        { num: '01', title: 'Discovery & Strategy', description: 'We begin by diving deep into your vision, goals, and target audience to lay a strategic foundation for success.', icon: DiscoveryIcon },
        { num: '02', title: 'UX/UI Design', description: 'Our team crafts pixel-perfect, intuitive designs that not only look stunning but also provide a seamless user experience.', icon: DesignIcon },
        { num: '03', title: 'Agile Development', description: 'Using cutting-edge technologies, we build your product with clean, scalable code in iterative sprints for maximum transparency.', icon: DevelopmentIcon },
        { num: '04', title: 'Launch & Deployment', description: 'We handle the entire deployment process, ensuring a smooth, flawless launch with post-launch support.', icon: DeploymentIcon }
    ];

    stepRefs.current = processSteps.map((_, i) => stepRefs.current[i] ?? React.createRef());

    // Scroll handler to calculate and set progress
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top, height } = containerRef.current.getBoundingClientRect();
                // The total scrollable distance for this specific section
                const scrollableHeight = height - window.innerHeight;
                
                // Calculate progress from 0 to 1 based on how much of the section has been scrolled past
                const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
                
                setScrollProgress(progress * 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer for individual step animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.4 }
        );

        const currentStepRefs = stepRefs.current;
        currentStepRefs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            currentStepRefs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <div className="dev-process-section" ref={containerRef}>
            <div className="dev-process-sticky-container">
                <div className="dev-process-header">
                    <h2 className="dev-process-title">Our Development Process</h2>
                    <p className="dev-process-subtitle">A Blueprint for Excellence</p>
                </div>

                <div className="dev-timeline">
                    <div className="dev-timeline-progress">
                        <div className="dev-timeline-progress-bar" style={{ height: `${scrollProgress}%` }}></div>
                    </div>
                    <div className="dev-timeline-steps">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            // The icon becomes active slightly before the progress bar reaches it
                            const isActive = scrollProgress > (index / processSteps.length) * 100 - 5;
                            return (
                                <div className="dev-timeline-step" key={index} ref={stepRefs.current[index]}>
                                    <div className={`dev-timeline-icon-wrapper ${isActive ? 'active' : ''}`}>
                                        <Icon isActive={isActive} />
                                    </div>
                                    <div className="dev-timeline-content">
                                        <span className="dev-step-number">{step.num}</span>
                                        <h3 className="dev-step-title">{step.title}</h3>
                                        <p className="dev-step-description">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
