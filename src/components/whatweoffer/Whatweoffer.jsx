import React from "react";
import "./WhatWeOffer.css";

const offers = [
  {
    title: "Web Design & Development",
    description:
      "We offer flexible and interactive web design & development solutions that align with your business idea & elevate your brand presence. Our customized digital solutions promote engagement, convert visitors & maximize ROI. We offer robust websites on top-tier web development platforms, namely PHP, Laravel, WordPress, and more.",
    image: "/images/web-design.png",
    bgColor: "#d8d3ff",
  },
  {
    title: "E-commerce Solutions",
    description:
      "With our reliable eCommerce solutions, we offer retail software, custom eCommerce apps, custom app integration, mobility solutions, expert consultation & more.",
    image: "/images/ecommerce.png",
    bgColor: "#ffef9f",
  },
  {
    title: "100% Responsive Website",
    description:
      "Our responsive web design solutions make your websites flexible & customized so that the content easily adapts to the screen size of your device.",
    image: "/images/responsive.png",
    bgColor: "#5cb5d8",
  },
  {
    title: "SAAS Application Development",
    description:
      "Our end-to-end SaaS solutions allow businesses to stay competitive & agile at affordable costs.",
    image: "/images/saas.png",
    bgColor: "#d6d6d6",
  },
  {
    title: "API Integrations",
    description:
      "We help your business with dedicated APIs for web applications and also integrate third-party systems.",
    image: "/images/api.png",
    bgColor: "#aee3f5",
  },
  {
    title: "Custom Application Solutions",
    description:
      "Our experts deliver high-performance custom application solutions for web, mobile, cloud, and eCommerce platforms.",
    image: "/images/custom-app.png",
    bgColor: "#f9d3a4",
  },
  {
    title: "Custom WordPress & Shopify Website Development",
    description:
      "With custom Shopify and WordPress website development services, we create a user-intuitive website that runs smoothly and provides optimal user experiences.",
    image: "/images/wordpress-shopify.png",
    bgColor: "#f1e6f9",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="offer-section">
       <div className="header-container">
      <div className="header-left">
        <p className="highlighted-subtitle">WHAT DO WE OFFER</p>
        <h2 className="main-heading">
          Discover How Amazing Our Team <br /> Can Help Your Business
        </h2>
      </div>
      <div className="header-right">
        <p className="header-description">
          With a wide range of web design and development solutions, we help businesses to
          customize their operations, add new features, allow seamless integrations and
          have an enriched digital presence.
        </p>
      </div>
    </div>
      <div className="offer-grid">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="offer-card"
            style={{ backgroundColor: offer.bgColor }}
          >
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
