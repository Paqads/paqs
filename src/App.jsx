import React, { useState } from 'react';
import './App.css';
import About from './About';
import Expertise from './Expertise';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'expertise':
        return <Expertise />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app">
      <nav>
        <div className="nav-content">
          <h1>Samson Akintola</h1>
          <p className="title">Cybersecurity Specialist</p>
          {['about', 'expertise', 'projects', 'contact'].map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <div className="social-icons">
            <a href="mailto:notifies.sam@gmail.com" aria-label="Email">📧</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </nav>
      <main>
        <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;