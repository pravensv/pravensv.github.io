import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import styles from './App.module.scss'; // Importing SCSS module

function App() {
  const [selected, setSelected] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (selected) {
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div className={styles['app-container']}>
      <div className={`${styles['sidebar-container']} ${sidebarOpen ? styles['open'] : styles['closed']}`}>
        <Sidebar setSelected={(section) => { 
          setSelected(section); 
          setSidebarOpen(false); // close sidebar after click
        }} />
      </div>

      <div className={styles['main-content']}>
        <button className={styles['toggle-btn']} onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '←' : '☰'}
        </button>
        <div className={styles['content-wrapper']}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
