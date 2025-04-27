// Education.jsx
import styles from './Education.module.scss';

const educationData = [
  {
    degree: "M.E - Embedded Systems",
    institution: "University College of Engineering, OU",
    year: "2021",
    details: "Focused on Embedded, IoT, and Computing."
  },
  {
    degree: "B.Tech - CSE",
    institution: "Sree Dattha Group of Institutions",
    year: "2019",
    details: "Core computer science and real-time projects."
  },
  {
    degree: "Intermediate - MPC",
    institution: "Geethanjali Junior College",
    year: "2015",
    details: "Maths, Physics, Chemistry with 85.5%."
  },
  {
    degree: "SSC",
    institution: "ZPHS Nemmani",
    year: "2013",
    details: "Completed SSC with strong science foundation."
  }
];

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <h1 className={styles.educationTitle}>My Education Journey</h1>
      <div className={styles.educationTimeline}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.timelineStep}>
            <div className={styles.stepMarker}></div>
            <div className={styles.stepContent}>
              <h2>{edu.degree}</h2>
              <h3>{edu.institution}</h3>
              <p>{edu.year}</p>
              <div className={styles.hoverDetails}>
                {edu.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
