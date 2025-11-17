import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Projects.module.scss";
import projectsData from "./Projects.json";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Praveen Voruganti</title>
        <meta name="description" content="Praveen's portfolio projects with detailed descriptions." />
      </Helmet>

      <h1 className={styles.sectionTitle}>Projects</h1>

      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <img src={project.icon} alt={project.title} />
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link
              to={`/projects/${project.title.replace(/\s+/g, "-").toLowerCase()}`}
              className={styles.viewMore}
            >
              View Details
            </Link>
          </motion.div>

        ))}
      </div>
    </>
  );
}
