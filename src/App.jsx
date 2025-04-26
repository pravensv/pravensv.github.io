import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

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
    <div className="app-container">
      <div className={`sidebar-container ${sidebarOpen ? 'open' : 'closed'}`}>
        <Sidebar setSelected={setSelected} onItemClick={() => setSidebarOpen(false)} />
      </div>

      <div className="main-content">
        <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '←' : '☰'}
        </button>
        <div className="content-wrapper">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
