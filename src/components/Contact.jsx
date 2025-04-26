import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-items">
        
        <a href="https://wa.me/919951478032" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaWhatsapp className="icon whatsapp" />
          <span>WhatsApp</span>
        </a>

        <a href="tel:+919951478032" className="contact-item">
          <FaPhoneAlt className="icon phone" />
          <span>+91 99514 78032</span>
        </a>

        <a href="mailto:praveenshetty.code@gmail.com" className="contact-item">
          <FaEnvelope className="icon email" />
          <span>praveenshetty.code@gmail.com</span>
        </a>

        <a href="https://instagram.com/nameisrajuu" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaInstagram className="icon instagram" />
          <span>Instagram</span>
        </a>

        <a href="https://linkedin.com/in/praveen-voruganti-90b428181" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin className="icon linkedin" />
          <span>LinkedIn</span>
        </a>

        <a href="https://youtube.com/@praveen8779" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaYoutube className="icon youtube" />
          <span>YouTube</span>
        </a>

      </div>
    </div>
  );
}
