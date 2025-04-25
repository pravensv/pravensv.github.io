import './Projects.css';

const projectData = [
  {
    title: "Cisco Reimagined",
    description: "Built customer-related apps using the Khoros platform for Cisco’s internal use.",
    responsibilities: [
      "Built UI with JavaScript, jQuery, Freemarker.",
      "Integrated APIs and handled performance tuning.",
      "Managed Git version control and CI/CD with Jenkins."
    ]
  },
  {
    title: "Cisco Techzone",
    description: "Platform where Cisco employees create and publish tech content.",
    responsibilities: [
      "Built features with Java, React.js, and MySQL.",
      "Created shell scripts and set up access control.",
      "Integrated CI/CD pipelines and managed deployments."
    ]
  },
  {
    title: "AutoDesk",
    description: "Automation of user role removal and cleanup for efficient user management.",
    responsibilities: [
      "Developed Java scripts for automated cleanup.",
      "Implemented RBAC for user access.",
      "Monitored script performance and maintained logs."
    ]
  },
  {
    title: "Khoros to Aurora Migration",
    description: "Migrated backend DB to Aurora and rebuilt frontend with React and GraphQL.",
    responsibilities: [
      "Designed GraphQL APIs and SDK CLI scripts.",
      "Handled data migration and performance optimization.",
      "Built React UI for enhanced user experience."
    ]
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h3>Role & Responsibilities:</h3>
            <p>
              {project.responsibilities.map((task, i) => (
                <p key={i}>{task}</p>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
