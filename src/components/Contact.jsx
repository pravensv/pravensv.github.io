// Contact.jsx
import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <div className={styles.contactItems}>
        <a href="https://wa.me/919951478032" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
          <FaWhatsapp className={`${styles.icon} ${styles.whatsapp}`} />
          <span>WhatsApp</span>
        </a>

        <a href="tel:+919951478032" className={styles.contactItem}>
          <FaPhoneAlt className={`${styles.icon} ${styles.phone}`} />
          <span>+91 99514 78032</span>
        </a>

        <a href="mailto:praveenshetty.code@gmail.com" className={styles.contactItem}>
          <FaEnvelope className={`${styles.icon} ${styles.email}`} />
          <span>praveenshetty.code@gmail.com</span>
        </a>

        <a href="https://instagram.com/nameisrajuu" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
          <FaInstagram className={`${styles.icon} ${styles.instagram}`} />
          <span>Instagram</span>
        </a>

        <a href="https://linkedin.com/in/praveen-voruganti-90b428181" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
          <FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
          <span>LinkedIn</span>
        </a>

        <a href="https://youtube.com/@praveen8779" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
          <FaYoutube className={`${styles.icon} ${styles.youtube}`} />
          <span>YouTube</span>
        </a>
      </div>
    </div>
  );
}
