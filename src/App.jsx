import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = {
    about: {
      title: 'About Me',
      content: 'I am a seasoned Solution Architect with expertise in designing scalable and efficient systems. My approach combines technical knowledge with strategic thinking to deliver robust architectural solutions.'
    },
    skills: {
      title: 'Skills',
      content: ['Cloud Architecture', 'System Design', 'API Design', 'Microservices', 'DevOps', 'Security Architecture']
    },
    projects: {
      title: 'Projects',
      content: [
        { name: 'Enterprise Data Platform', description: 'Designed a scalable data platform handling petabytes of data for a Fortune 500 company.' },
        { name: 'Microservices Migration', description: 'Led the architecture for migrating a monolithic application to a microservices-based architecture.' },
        { name: 'Cloud Migration Strategy', description: 'Developed a comprehensive cloud migration strategy for a healthcare provider, ensuring data security and compliance.' }
      ]
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Solution Architect Portfolio</h1>
      </header>
      <nav>
        {Object.keys(tabs).map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tabs[tab].title}
          </button>
        ))}
      </nav>
      <main>
        {activeTab === 'about' && <p>{tabs.about.content}</p>}
        {activeTab === 'skills' && (
          <ul>
            {tabs.skills.content.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
        {activeTab === 'projects' && (
          <div>
            {tabs.projects.content.map((project, index) => (
              <div key={index} className="project">
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