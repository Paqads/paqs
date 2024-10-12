import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'System Efficiency Improvement',
      description: 'Improved system efficiency by 20% and reduced downtime by 25% at Paqads Limited.'
    },
    {
      name: 'High-Efficiency Network Engineering',
      description: 'Engineered a network with 99.9% operational efficiency and 100% uptime for critical IT servers at Shamartech Limited.'
    },
    {
      name: 'Security Protocol Implementation',
      description: 'Designed and implemented security protocols that increased system integrity and compliance by 20%.'
    }
  ];

  return (
    <div className="projects-grid project-card">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;