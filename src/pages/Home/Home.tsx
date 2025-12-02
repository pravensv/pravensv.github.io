import React from 'react';
import styles from './Home.module.scss';
import homeData from './Home.json';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';

const Home: React.FC = () => {
    return (
        <>
            <SEO title={homeData.title} description={homeData.description} />
            <div className={styles.container}>
                <motion.div
                    className={styles.imageSection}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/praveen.jpeg" alt="Praveen Voruganti" />
                </motion.div>

                <motion.div
                    className={styles.textSection}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.name}>
                        Hi, I'm <span>Praveen</span> 👋
                    </h1>
                    <h2 className={styles.role}>{homeData.role}</h2>
                    <p className={styles.description}>{homeData.description}</p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.resumeBtn}>Resume</button>
                        <button className={styles.hireBtn}>Hire Me</button>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Home;
