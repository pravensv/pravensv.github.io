import styles from './Sidebar.module.scss';
import { FaLinkedin, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ setSelected, onItemClick }) => {
  const handleClick = (section) => {
    if (section === 'resume') {
      window.open('/resume.pdf', '_self'); 
    } else {
      setSelected(section);
      if (onItemClick) onItemClick();
    }
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles['sidebar-title']}></h2>
      <button onClick={() => handleClick('about')} className={styles['sidebar-btn']}>About</button>
      <button onClick={() => handleClick('resume')} className={styles['sidebar-btn']}>Resume</button>
      <button onClick={() => handleClick('projects')} className={styles['sidebar-btn']}>Projects</button>
      <button onClick={() => handleClick('education')} className={styles['sidebar-btn']}>Education</button>
      <button onClick={() => handleClick('contact')} className={styles['sidebar-btn']}>Contact</button>

      <div className={styles.socialIcons}>
        <a href="https://linkedin.com/in/praveen-voruganti-90b428181" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com/@praveen8779" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://github.com/pravensv" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:praveenshetty.code@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
