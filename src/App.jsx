import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import styles from './App.module.scss';

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
    <div className={styles.appContainer}>
      <div className={`${styles.sidebarContainer} ${sidebarOpen ? styles.open : styles.closed}`}>
        <Sidebar setSelected={setSelected} onItemClick={() => setSidebarOpen(false)} />
      </div>

      <div className={styles.mainContent}>
        <button className={styles.toggleBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '←' : '☰'}
        </button>
        <div className={styles.contentWrapper}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
