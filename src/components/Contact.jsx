import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles['contact-container']}>
      <h1 className={styles['contact-title']}>Contact Me</h1>
      <div className={styles['contact-items']}>
        
        {/* Image and Name */}
        {/* <div className={styles['contact-item']}>
          <img src="your-image-url.jpg" alt="Your Name" className={styles['contact-image']} />
          <span className={styles['contact-name']}>Your Name</span>
        </div> */}

        {/* WhatsApp */}
        <a href="https://wa.me/919951478032" target="_blank" rel="noopener noreferrer" className={styles['contact-item']}>
          <FaWhatsapp className={`${styles.icon} ${styles.whatsapp}`} />
          <span>WhatsApp</span>
        </a>

        {/* Phone */}
        <a href="tel:+919951478032" className={styles['contact-item']}>
          <FaPhoneAlt className={`${styles.icon} ${styles.phone}`} />
          <span>+91 99514 78032</span>
        </a>

        {/* Email */}
        <a href="mailto:praveenshetty.code@gmail.com" className={styles['contact-item']}>
          <FaEnvelope className={`${styles.icon} ${styles.email}`} />
          <span>praveenshetty.code@gmail.com</span>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/nameisrajuu" target="_blank" rel="noopener noreferrer" className={styles['contact-item']}>
          <FaInstagram className={`${styles.icon} ${styles.instagram}`} />
          <span>Instagram</span>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/praveen-voruganti-90b428181" target="_blank" rel="noopener noreferrer" className={styles['contact-item']}>
          <FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
          <span>LinkedIn</span>
        </a>

        {/* YouTube */}
        <a href="https://youtube.com/@praveen8779" target="_blank" rel="noopener noreferrer" className={styles['contact-item']}>
          <FaYoutube className={`${styles.icon} ${styles.youtube}`} />
          <span>YouTube</span>
        </a>

      </div>
    </div>
  );
}
