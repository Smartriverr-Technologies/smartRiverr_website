import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import websteimage1 from '../../../public/Images/websitedevelopment1.png';
import websteimage2 from '../../../public/Images/websitedevelopmen2.png';
import { Link } from 'react-router-dom';

// --- SVG Icon Components ---
const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
    </svg>
);

const TrophyIcon = () => (
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 11v-1"></path>
        <path d="M12 15a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"></path>
    </svg>
);

// --- Data for the background image slider ---
const backgroundImages = [
    { imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070&auto=format&fit=crop' },
    { imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop' },
    { imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop' },
    { imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop' }
];

// --- Main Hero Section Component ---
export default function HeroSection() {
    const [currentBg, setCurrentBg] = useState(0);

    // Effect for the automatic background slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg(prev => (prev + 1) % backgroundImages.length);
        }, 5000); // Change background every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-container1">
            {/* Background Image Slider */}
            <div className="hero-background-slider">
                {backgroundImages.map((bg, index) => (
                    <div
                        key={index}
                        className={`hero-background-slide ${index === currentBg ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${bg.imageUrl})` }}
                    ></div>
                ))}
            </div>
            <div className="hero-background-overlay"></div>

            <div className="hero-content-grid">
                {/* Left Column: Text Content */}
                <div className="hero-text-content">
                    <h1 className="hero-headline">
                        <span>Smart Web Development, </span> Powered by Innovation
                    </h1>
                    <p className="hero-subheadline">
                        Combining creativity with code, we build websites that are robust, intuitive, and built to scale.


                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact"><button className="btn btn-primary">LET'S DISCUSS YOUR PROJECT</button></Link>
                        {/* <button className="btn btn-secondary">
                            <PlayIcon /> Watch Demo
                        </button> */}
                    </div>
                </div>

                {/* Right Column: Image Composition */}
                <div className="hero-image-composition">
                    <img 
                        src={websteimage2} 
                        alt="Laptop showing a web application" 
                        className="laptop-image laptop-back"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
                    />
                    <img 
                        src={websteimage1} 
                        alt="Laptop showing a dashboard" 
                        className="laptop-image laptop-front"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x300/cccccc/333333?text=Image+Not+Found'; }}
                    />
                    {/* <div className="stat-card">
                        <div className="stat-icon-wrapper">
                            <TrophyIcon />
                        </div>
                        <div className="stat-text">
                            <strong>35K+</strong>
                            <span>Cases Solved with Satisfaction</span>
                        </div>
                    </div> */}
                     {/* <div className="chart-card">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                        <div className="bar bar4"></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
