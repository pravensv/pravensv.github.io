import styles from './About.module.scss';
import profilePic from '../assets/praveen.png'; 

const About = () => {
  return (
    <div className={styles['about-container']}>
      <div className={styles['about-text']}>
        <h1>About Me</h1>
        <p>
          I’m <strong>Voruganti Praveen</strong>, a Java Full Stack Developer with 3.5+ years of experience in building scalable, responsive web applications using Java, Spring Boot, React.js, and more.
          I’m passionate about solving real-world problems through code and continuously improving my skills.
        </p>
      </div>
      <div className={styles['about-image-wrapper']}>
        <img src={profilePic} alt="Voruganti Praveen" className={styles['about-image']} />
      </div>
    </div>
  );
};

export default About;
