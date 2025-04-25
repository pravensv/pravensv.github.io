import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setSelected, onItemClick }) => {
  const handleClick = (section) => {
    setSelected(section);
    if (onItemClick) onItemClick();
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">My Portfolio</h2>
      <button onClick={() => handleClick('about')} className="sidebar-btn">About</button>
      <button onClick={() => handleClick('resume')} className="sidebar-btn">Resume</button>
      <button onClick={() => handleClick('projects')} className="sidebar-btn">Projects</button>
    </div>
  );
};

export default Sidebar;
