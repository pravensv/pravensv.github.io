import styles from "./Education.module.scss";
import educationData from "./Education.json";
import { motion } from "framer-motion";
import SEO from "../../components/SEO/SEO";

export default function Education() {
  return (
    <div className={styles.container}>
      <SEO 
        title="Education" 
        description="Praveen's educational background and academic qualifications in computer science and technology."
        keywords="Education, Academic Background, Computer Science, Technology, Learning, Certifications"
      />

      <h1 className={styles.sectionTitle}>Education</h1>

      <div className={styles.treeContainer}>
        {educationData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`${styles.treeNode} ${isLeft ? styles.left : styles.right
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.nodeContent}>
                <img
                  src={item.logo}
                  alt={item.institution + " logo"}
                  className={styles.logo}
                />

                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <span className={styles.year}>{item.year}</span>
                <p>{item.details}</p>
              </div>

              <div className={styles.nodeCircle}></div>
              <div className={styles.connector}></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

