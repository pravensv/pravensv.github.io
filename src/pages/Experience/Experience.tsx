import React from 'react';
import styles from './Experience.module.scss';
import experienceData from './Experience.json';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';

const Experience: React.FC = () => {
    return (
        <div className={styles.container}>
            <SEO 
                title="Experience" 
                description="Praveen's professional experience including roles at Lloyds Banking Group and Cisco. Java Full Stack Developer with expertise in Spring Boot, React, Microservices, CI/CD pipelines, and service operations."
                keywords="Experience, Java Development, Spring Boot, Microservices, CI/CD, Lloyds Banking Group, Cisco, Software Engineering, Release Automation, Service Operations"
            />

            <h1 className={styles.sectionTitle}>Experience</h1>

            <div className={styles.timeline}>
                <div className={styles.progressLine}></div>

                {experienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.timelineCard}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.companyBadge}>
                                <img src={item.icon} alt={`${item.company} logo`} />
                            </div>
                            <div className={styles.headerTitles}>
                                <h3>{item.role}</h3>
                                <h4>{item.company} • {item.type}</h4>
                                <span className={styles.duration}>{item.duration}</span>
                            </div>
                        </div>

                        <p className={styles.descriptionText}>{item.description}</p>

                        <ul>
                            {item.responsibilities.map((resp, idx) => (
                                <li key={idx}>{resp}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
