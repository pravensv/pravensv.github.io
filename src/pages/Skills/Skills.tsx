import { useState } from "react";
import styles from "./Skills.module.scss";
import data from "./Skills.json";
import SEO from "../../components/SEO/SEO";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allSkills = data.categories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.name }))
  );

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  const skillsKeywords = allSkills.map(s => s.name).join(", ");

  return (
    <div className={styles.container} id="skills-section">
      <SEO 
        title="Skills" 
        description="Praveen's technical skills including Java, Spring Boot, React.js, Microservices, Docker, Kubernetes, AWS, CI/CD, and more."
        keywords={`Technical Skills, ${skillsKeywords}, Java, Spring Boot, React, Microservices, DevOps, CI/CD, AWS`}
      />

      <h2 className={styles.title}>Skills</h2>

      {/* Filters */}
      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${
            activeCategory === "All" ? styles.active : ""
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>

        {data.categories.map((cat) => (
          <button
            key={cat.name}
            className={`${styles.filterButton} ${
              activeCategory === cat.name ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className={styles.skillsGrid}>
        {filteredSkills.map((skill, index) => (
          <div className={styles.card} key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p className={styles.cardName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
