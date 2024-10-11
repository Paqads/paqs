import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const content = {
    about: {
      title: 'About',
      text: 'As a Solution Architect, I specialize in designing elegant, efficient systems that solve complex problems. With a keen eye for detail and a passion for innovation, I transform intricate challenges into streamlined architectures that drive business success.'
    },
    expertise: {
      title: 'Expertise',
      items: ['Cloud Architecture', 'System Design', 'API Development', 'Microservices', 'DevOps Practices', 'Security Architecture', 'Scalable Solutions', 'Data Management']
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Enterprise Data Platform',
          description: 'Designed a scalable platform handling petabytes of data, improving data accessibility and analysis capabilities.'
        },
        {
          name: 'Microservices Migration',
          description: 'Led the architecture for transitioning a monolithic application to a flexible, scalable microservices architecture.'
        },
        {
          name: 'Cloud Migration Strategy',
          description: 'Developed a comprehensive cloud migration plan for a healthcare provider, ensuring data security and regulatory compliance.'
        }
      ]
    }
  };

  return (
    <div className="app">
      <nav>
        <div className="nav-content">
          <h1>John Doe</h1>
          <p className="title">Solution Architect</p>
          {Object.keys(content).map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {content[section].title}
            </button>
          ))}
        </div>
      </nav>
      <main>
        <h2>{content[activeSection].title}</h2>
        {activeSection === 'about' && <p>{content[activeSection].text}</p>}
        {activeSection === 'expertise' && (
          <ul className="expertise-list">
            {content[activeSection].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {activeSection === 'projects' && (
          <div className="projects-grid">
            {content[activeSection].items.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;