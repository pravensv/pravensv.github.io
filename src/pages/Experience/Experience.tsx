import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import styles from "./Experience.module.scss";
import experienceData from "./Experience.json";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Praveen Voruganti</title>
        <meta name="description" content="Praveen's professional experience." />
      </Helmet>

      <h1 className={styles.sectionTitle}>Experience</h1>

      <div className={styles.timeline}>
        <div className={styles.progressLine}></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.timelineCard}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className={styles.iconWrapper}>
              <img src={exp.icon} alt={exp.company} />
            </div>
            <div className={styles.cardContent}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
              <ul>
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
