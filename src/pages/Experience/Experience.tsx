import React from 'react';
import styles from './Experience.module.scss';
import experienceData from './Experience.json';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Experience: React.FC = () => {
    return (
        <div className={styles.container}>
            <Helmet>
                <title>Experience | Praveen Voruganti</title>
                <meta name="description" content="Praveen's professional experience and career journey." />
            </Helmet>

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
                        <div className={styles.iconWrapper}>
                            <img src={item.icon} alt={`${item.company} logo`} />
                        </div>

                        <h3>{item.role}</h3>
                        <h4>{item.company} | {item.type}</h4>
                        <span>{item.duration}</span>

                        <p style={{ marginTop: '1rem', color: '#555' }}>{item.description}</p>

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
