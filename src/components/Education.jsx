import React, { useState } from 'react';
import styles from './Education.module.scss';

export default function Education() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "M.E - Embedded Systems and Computing",
      institution: "University College of Engineering, Osmania University",
      year: "2021",
      details: "Scored 78% till now. Focused on Embedded Systems, IoT, and Computing technologies."
    },
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Sree Dattha Group of Institutions",
      year: "2019",
      details: "Graduated with 6 CGPA. Learned core computer science subjects and real-time project development."
    },
    {
      degree: "Intermediate - MPC",
      institution: "Geethanjali Junior College, Nalgonda",
      year: "2015",
      details: "Secured 85.5% with focus on Mathematics, Physics, and Chemistry."
    },
    {
      degree: "SSC - High School",
      institution: "Z.P.H.S Nemmani",
      year: "2013",
      details: "Completed SSC with 6.7 GPA. Built strong foundation in basic sciences and mathematics."
    }
  ];

  return (
    <div className={styles['education-container']}>
      <h1 className={styles['education-title']}>My Education Journey</h1>
      <div className={styles['education-graph']}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={styles['graph-node']}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles['node-marker']}></div>
            <div className={styles['node-content']}>
              <h2>{edu.degree}</h2>
              <h3>{edu.institution}</h3>
              <p>{edu.year}</p>
            </div>

            {hoveredIndex === index && (
              <div className={styles['hover-dialog']}>
                {edu.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
