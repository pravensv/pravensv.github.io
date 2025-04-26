import React from 'react';
import './Sidebar.css';

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
    <div className="sidebar">
      <h2 className="sidebar-title">My Portfolio</h2>
      <button onClick={() => handleClick('about')} className="sidebar-btn">About</button>
      <button onClick={() => handleClick('resume')} className="sidebar-btn">Resume</button>
      <button onClick={() => handleClick('projects')} className="sidebar-btn">Projects</button>
      <button onClick={() => handleClick('education')} className="sidebar-btn">Education</button>
      <button onClick={() => handleClick('contact')} className="sidebar-btn">Contact</button>
    </div>
  );
};

export default Sidebar;
