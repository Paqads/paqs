import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const content = {
    about: {
      title: 'About',
      text: 'Solution Architect with a passion for creating elegant, efficient systems. I transform complex problems into streamlined architectures.'
    },
    expertise: {
      title: 'Expertise',
      items: ['Cloud Architecture', 'System Design', 'API Development', 'Microservices', 'DevOps', 'Security']
    },
    projects: {
      title: 'Projects',
      items: [
        'Enterprise Data Platform: Scalable solution handling petabytes',
        'Microservices Migration: Modernizing legacy systems',
        'Cloud Strategy: Secure, compliant healthcare solutions'
      ]
    }
  };

  return (
    <div className="app">
      <header>
        <h1>John Doe</h1>
        <p>Solution Architect</p>
      </header>
      <nav>
        {Object.keys(content).map(section => (
          <button
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => setActiveSection(section)}
          >
            {content[section].title}
          </button>
        ))}
      </nav>
      <main>
        <h2>{content[activeSection].title}</h2>
        {activeSection === 'about' ? (
          <p>{content[activeSection].text}</p>
        ) : (
          <ul>
            {content[activeSection].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default App;