// Sidebar.jsx
import React from 'react';
import styles from './Sidebar.module.scss';

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
      <h2 className={styles.sidebarTitle}>My Portfolio</h2>
      <button onClick={() => handleClick('about')} className={styles.sidebarBtn}>About</button>
      <button onClick={() => handleClick('resume')} className={styles.sidebarBtn}>Resume</button>
      <button onClick={() => handleClick('projects')} className={styles.sidebarBtn}>Projects</button>
      <button onClick={() => handleClick('education')} className={styles.sidebarBtn}>Education</button>
      <button onClick={() => handleClick('contact')} className={styles.sidebarBtn}>Contact</button>
    </div>
  );
};

export default Sidebar;
