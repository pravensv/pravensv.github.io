const Projects = () => {
  return (
    <div className="content-wrapper">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h2>Cisco Reimagined</h2>
          <p className="project-description">
            Built customer-related applications using the Khoros platform for Cisco Customer Experience (CSE). This project involved creating scalable solutions for internal tech writers.
          </p>
          <h3>Role & Responsibilities:</h3>
          <ul>
            <li>Collaborated with stakeholders to gather and analyze requirements.</li>
            <li>Designed and developed frontend and backend components using JavaScript, jQuery, and Freemarker.</li>
            <li>Integrated third-party APIs and services to enhance application functionality.</li>
            <li>Conducted unit testing and debugging to ensure application integrity and performance.</li>
            <li>Maintained codebase and implemented version control using Git.</li>
            <li>Supported CI/CD processes using Jenkins.</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>Cisco Techzone</h2>
          <p className="project-description">
            Enhanced Cisco Techzone platform, allowing internal employees to write, post, and publish articles about Cisco products. The project focused on content management and publishing features.
          </p>
          <h3>Role & Responsibilities:</h3>
          <ul>
            <li>Developed frontend and backend features using Java, React.js, Freemarker, and MySQL.</li>
            <li>Implemented content management functionalities allowing employees to draft, review, and publish articles.</li>
            <li>Created shell scripts to automate deployment processes and monitored error logs using Log4j.</li>
            <li>Integrated authentication and authorization mechanisms to control access to article publishing features.</li>
            <li>Supported continuous integration and deployment (CI/CD) with Jenkins.</li>
            <li>Ensured platform scalability and optimized performance through continuous testing and updates.</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>AutoDesk</h2>
          <p className="project-description">
            Managed user information and roles within the AutoDesk platform. Developed automation scripts to remove roles and clean up inactive users, improving user management efficiency.
          </p>
          <h3>Role & Responsibilities:</h3>
          <ul>
            <li>Developed scripts to remove inactive users and roles within the AutoDesk platform using Java.</li>
            <li>Implemented Role-Based Access Control (RBAC) to manage user permissions effectively.</li>
            <li>Collaborated with stakeholders to define user management policies and improve automation scripts.</li>
            <li>Performed regular audits and ensured data integrity through reporting and system checks.</li>
            <li>Provided training and support for end-users to ensure proper usage of scripts and user management functionalities.</li>
          </ul>
        </div>

        <div className="project-card">
          <h2>Khoros to Aurora Migration</h2>
          <p className="project-description">
            Led the migration of the Khoros platform to Aurora, focusing on performance, scalability, and integration of new GraphQL APIs and React.js for the frontend.
          </p>
          <h3>Role & Responsibilities:</h3>
          <ul>
            <li>Managed the migration strategy from Khoros to Aurora, ensuring minimal disruption and data integrity.</li>
            <li>Developed and integrated GraphQL APIs for seamless data retrieval and manipulation.</li>
            <li>Worked with the frontend team to develop new features using React.js to enhance user experience.</li>
            <li>Created SDK CLI scripts to automate platform tasks and improve developer productivity.</li>
            <li>Conducted performance testing and optimization to ensure optimal platform functionality post-upgrade.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
