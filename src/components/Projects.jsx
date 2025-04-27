// Projects.jsx
import styles from './Projects.module.scss';

const projectData = [
  {
    title: "Cisco Reimagined",
    description: "Built customer apps on Khoros platform for Cisco’s internal use.",
    responsibilities: [
      "Built UI with JavaScript, jQuery, Freemarker.",
      "Integrated APIs, tuned performance.",
      "Handled Git, Jenkins CI/CD."
    ]
  },
  {
    title: "Cisco Techzone",
    description: "Platform for Cisco employees to publish tech content.",
    responsibilities: [
      "Built with Java, React.js, MySQL.",
      "Set up access control and CI/CD pipelines."
    ]
  },
  {
    title: "AutoDesk Automation",
    description: "Automated user role removal and management.",
    responsibilities: [
      "Java scripts for automated cleanup.",
      "Implemented RBAC.",
      "Maintained logs and monitoring."
    ]
  },
  {
    title: "Migration to Aurora",
    description: "Migrated backend to Aurora and rebuilt frontend in React & GraphQL.",
    responsibilities: [
      "Built GraphQL APIs, React UI.",
      "Optimized data migration performance."
    ]
  }
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h3>Role & Responsibilities:</h3>
            <ul>
              {project.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
