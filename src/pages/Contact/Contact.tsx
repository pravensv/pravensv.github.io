import React, { useState } from 'react';
import styles from './Contact.module.scss';
import contactData from './Contact.json';
import SEO from '../../components/SEO/SEO';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sending
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <SEO title="Contact | Praveen Voruganti" description="Get in touch with me." />

            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>Contact Me</h1>
                <p className={styles.description}>Feel free to reach out for collaborations or just a friendly hello!</p>

                <div className={styles.socialContainer}>
                    {contactData.map((item, index) => (
                        <a key={index} href={item.link} className={styles.socialCard} target="_blank" rel="noopener noreferrer">
                            <img src={item.icon} alt={item.platform} />
                            <span>{item.platform}</span>
                        </a>
                    ))}
                </div>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>

                    {sent && <p className={styles.successMsg}>Message sent successfully!</p>}
                </form>
            </div>
        </>
    );
};

export default Contact;
