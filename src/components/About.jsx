// About.jsx
import styles from './About.module.scss';
import profilePic from '../assets/praveen.png'; 

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutText}>
        <h1>About Me</h1>
        <p>
          I’m <strong>Voruganti Praveen</strong>, a Java Full Stack Developer with 3+ years of experience building scalable web apps using Java, Spring Boot, React.js, and more.
          I’m passionate about solving real-world problems through code.
        </p>
      </div>
      <div className={styles.aboutImageWrapper}>
        <img src={profilePic} alt="Voruganti Praveen" className={styles.aboutImage} />
      </div>
    </div>
  );
};

export default About;
