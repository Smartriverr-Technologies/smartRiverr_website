import React from "react";
import "./FloatingButton.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";  // install react-icons if not already

export default function FloatingButton() {
  return (
    <div className="floating-buttons">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9458305670" // replace with your WhatsApp number
        className="float-btn whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="icon" />
      </a>

      {/* Call Button */}
      <a href="tel:+919458305670" className="float-btn call">
        <FaPhoneAlt className="icon" />
      </a>
    </div>
  );
}
