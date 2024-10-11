import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const content = {
    about: {
      title: 'About Me',
      text: `I'm Samson Akintola, a cybersecurity and infrastructure management specialist with a proven track record of enhancing system efficiency, security, and reliability.`,
      coreExpertise: [
        'Risk Management',
        'Infrastructure Design and Optimization',
        'Identity and Access Management (IAM)',
        'Cybersecurity Strategy and Implementation',
        'Network Architecture and Security',
        'Process Compliance and Automation'
      ],
      experienceHighlights: [
        'Improved system efficiency by 20% and reduced downtime by 25% as a Cyber Security Analyst at Paqads Limited.',
        'Engineered a network with 99.9% operational efficiency and achieved 100% uptime for critical IT servers at Shamartech Limited.',
        'Successfully designed and implemented security protocols that increased system integrity and compliance by 20%.',
        'Reduced configuration errors by 40% through effective management of Puppet Open Source and Enterprise servers.'
      ],
      certifications: [
        'Certified Information Systems Security Professional (CISSP)',
        'Microsoft Office Specialist (MOS)',
        'AWS Certified Solutions Architect - Associate',
        'Computer Technical Support',
        'Scrum Master Certified (SMC)'
      ],
      passion: `I'm passionate about leveraging technology to improve efficiency, security, and productivity. I thrive on finding innovative solutions to complex challenges and am committed to staying at the forefront of industry advancements.`
    },
    expertise: {
      title: 'Expertise',
      items: ['Cybersecurity', 'Infrastructure Management', 'Risk Management', 'Network Architecture', 'IAM', 'Process Automation']
    },
    projects: {
      title: 'Projects',
      items: [
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
      ]
    },
    contact: {
      title: 'Contact Me',
      text: 'Feel free to reach out if you have any questions or would like to discuss potential opportunities.'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message. I will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      <nav>
        <div className="nav-content">
          <h1>Samson Akintola</h1>
          <p className="title">Cybersecurity Specialist</p>
          {Object.keys(content).map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {content[section].title}
            </button>
          ))}
          <div className="social-icons">
            <a href="mailto:notifies.sam@gmail.com" aria-label="Email">📧</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </nav>
      <main>
        <h2>{content[activeSection].title}</h2>
        {activeSection === 'about' && (
          <div className="about-content">
            <p>{content.about.text}</p>
            <h3>Core Expertise</h3>
            <ul>
              {content.about.coreExpertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Experience Highlights</h3>
            <ul>
              {content.about.experienceHighlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Certifications</h3>
            <ul>
              {content.about.certifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Passion for Technology</h3>
            <p>{content.about.passion}</p>
          </div>
        )}
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
        {activeSection === 'contact' && (
          <div className="contact-content">
            <p>{content.contact.text}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;