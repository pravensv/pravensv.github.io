import React from 'react';
import styles from './Projects.module.scss';
import projectsData from './Projects.json';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';

const Projects: React.FC = () => {
    return (
        <>
            <SEO title="Projects | Praveen Voruganti" description="A showcase of my projects and technical achievements." />

            <h1 className={styles.sectionTitle}>Projects</h1>

            <div className={styles.projectsGrid}>
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.projectCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.iconWrapper}>
                            <img src={project.icon} alt={`${project.title} icon`} />
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <a href="#" className={styles.viewMore}>View More</a>

                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Projects;
