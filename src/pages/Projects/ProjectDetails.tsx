import { useParams, useNavigate } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import projectsData from "./Projects.json";
import styles from "./ProjectDetails.module.scss";
import { useEffect } from "react";

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Find project by ID (converted to lowercase hyphen format)
  const project = projectsData.find(
    (p) => p.title.replace(/\s+/g, "-").toLowerCase() === projectId
  );

  if (!project) return <div className={styles.container}><p style={{ color: '#ffffff' }}>Project not found</p></div>;

  return (
    <div className={styles.container}>
      <SEO
        title={`${project.title} | Praveen Voruganti`}
        description={project.description}
        image={project.icon}
        url={`https://pravensv.github.io/projects/${projectId}`}
        type="article"
      />
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>

      <div className={styles.headerBox}>
        <div className={styles.projectImage}>
          <img src={project.icon} alt={project.title} />
        </div>
        <h1>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.detailsContent}>
        <h3>Key Responsibilities & Highlights:</h3>
        <ul>
          {project.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>

        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoBtn}
          >
            🚀 View Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}
