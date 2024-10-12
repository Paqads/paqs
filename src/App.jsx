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
        <nav className="col-md-3 col-lg-2 bg-light sidebar p-3">
          <h1 className="h4 mb-3">Samson Akintola</h1>
          <p className="text-muted">Cybersecurity Specialist</p>
          <ul className="nav flex-column">
            {['about', 'expertise', 'projects', 'blog', 'contact'].map(section => (
              <li className="nav-item" key={section}>
                <button
                  className={`nav-link btn btn-link text-start p-0 ${activeSection === section ? 'active' : ''}`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <a href="mailto:notifies.sam@gmail.com" className="me-2 text-decoration-none" aria-label="Email">📧</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none" aria-label="LinkedIn">💼</a>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2 className="my-4">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default App;