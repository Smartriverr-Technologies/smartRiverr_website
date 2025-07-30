import React, { useRef, useEffect } from 'react';
import './WebsiteOffer.css';
import WebApplication from '../../../public/Images/WebApplication.svg'; 
import Ecommerce from '../../../public/Images/Ecommerce.svg'
import CRM1 from '../../../public/Images/CRM1.svg'; 
import WebsiteMaintenance from '../../../public/Images/WebsiteMaintenance.svg';
// import { image } from 'framer-motion/client';

// --- SVG Icons for each website type ---
const EcommerceIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);
const PortfolioIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
);
const CorporateIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
);
const WebAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect><line x1="2" y1="8" x2="22" y2="8"></line><line x1="7" y1="13" x2="7.01" y2="13"></line><line x1="12" y1="13" x2="12.01" y2="13"></line><line x1="17" y1="13" x2="17.01" y2="13"></line></svg>
);


// --- Data for the offer cards ---
const offers = [
    {
        icon: <EcommerceIcon />,
        title: 'Web Application Development',
        description: 'Bespoke online stores designed to maximize conversions, featuring secure payments and intuitive inventory management.',
        image: WebApplication
    },
    {
        icon: <PortfolioIcon />,
        title: 'E-commerce Website',
        description: 'Visually stunning digital showcases for artists, photographers, and creatives to display their work with elegance and impact.',
        image: Ecommerce 
    },
    {
        icon: <CorporateIcon />,
        title: 'Wordpress and shopify website ',
        description: 'Professional, scalable websites that build brand credibility, generate leads, and communicate your company’s value.'
    },
    {
        icon: <WebAppIcon />,
        title: 'Custom Web Applications',
        description: 'Powerful, data-driven web applications with complex functionality, tailored to solve your unique business challenges.',
        image: WebApplication
    },
    {
        icon: <WebAppIcon />,
        title: 'CRM Development',
        description: 'Powerful, data-driven web applications with complex functionality, tailored to solve your unique business challenges.',
        image: CRM1
    },
    {
        icon: <WebAppIcon />,
        title: 'Website Maintenance',
        description: 'Powerful, data-driven web applications with complex functionality, tailored to solve your unique business challenges.',
        image: WebsiteMaintenance 
    }
];

// --- Main Component ---
export default function WebsiteOffer() {
    const gridRef = useRef(null);

    // Effect for the 3D tilt interaction
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const handleMouseMove = (e) => {
            const { width, height, left, top } = grid.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            const rotateX = -1 * ((y / height) * 2 - 1) * 8; // Max rotation 8 degrees
            const rotateY = ((x / width) * 2 - 1) * 8; // Max rotation 8 degrees

            grid.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            grid.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        };

        grid.addEventListener('mousemove', handleMouseMove);
        grid.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            grid.removeEventListener('mousemove', handleMouseMove);
            grid.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="offers-section">
            <div className="offers-header">
                <h2 className="offers-title">Explore the Perfect Website for Your Business</h2>
                <p className="offers-subtitle">From E-Commerce to corporate sites — we design every type of website tailored to your goals and audience.</p>
            </div>
            <div className="offers-grid-container">
                <div className="offers-grid" ref={gridRef}>
                    {offers.map((offer, index) => (
                        <div className="offer-card" key={index}>
                            <div className="offer-card-icon"><img src={offer.image} alt={offer.title} /></div>
                            <h3 className="offer-card-title">{offer.title}</h3>
                            <p className="offer-card-description">{offer.description}</p>
                            {/* <a href="#" className="offer-card-link">Learn More</a> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
