import React, { useState } from 'react';
import './App.css';
import About from './About';
import Expertise from './Expertise';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch(activeSection) {
      case 'about': return <About />;
      case 'expertise': return <Expertise />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      case 'blog': return <Blog />;
      default: return <About />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="sidebar-header">
            <h1>Samson Akintola</h1>
            <p className="title">Cybersecurity Specialist</p>
          </div>
          <div className="nav-menu">
            {['about', 'expertise', 'projects', 'blog', 'contact'].map(section => (
              <div className="nav-item" key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => setActiveSection(section)}
                >
                  <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                </button>
              </div>
            ))}
          </div>
          <div className="social-icons">
            <a href="mailto:notifies.sam@gmail.com" aria-label="Email">📧</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2 className="mt-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default App;