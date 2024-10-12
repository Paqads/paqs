import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <div className="about-content">
      <div className="about-image-container">
        <img src="/Users/manager/staticwebsite/public/images/samson-akintola.jpg" alt="Samson Akintola" className="about-image" />
        <div className="image-overlay">
          <p>Samson Akintola</p>
          <p>Cybersecurity Specialist</p>
        </div>
      </div>
      
      <div className="about-text">
        <p>I'm Samson Akintola, a cybersecurity and infrastructure management specialist with a proven track record of enhancing system efficiency, security, and reliability.</p>
        
        <h3>Core Expertise</h3>
        <ul>
          <li>Risk Management</li>
          <li>Infrastructure Design and Optimization</li>
          <li>Identity and Access Management (IAM)</li>
          <li>Cybersecurity Strategy and Implementation</li>
          <li>Network Architecture and Security</li>
          <li>Process Compliance and Automation</li>
        </ul>

        <h3>Experience Highlights</h3>
        <ul>
          <li>Improved system efficiency by 20% and reduced downtime by 25% as a Cyber Security Analyst at Paqads Limited.</li>
          <li>Engineered a network with 99.9% operational efficiency and achieved 100% uptime for critical IT servers at Shamartech Limited.</li>
          <li>Successfully designed and implemented security protocols that increased system integrity and compliance by 20%.</li>
          <li>Reduced configuration errors by 40% through effective management of Puppet Open Source and Enterprise servers.</li>
        </ul>

        <h3>Certifications</h3>
        <ul>
          <li>Certified Information Systems Security Professional (CISSP)</li>
          <li>Microsoft Office Specialist (MOS)</li>
          <li>AWS Certified Solutions Architect - Associate</li>
          <li>Computer Technical Support</li>
          <li>Scrum Master Certified (SMC)</li>
        </ul>

        <h3>Passion for Technology</h3>
        <p>I'm passionate about leveraging technology to improve efficiency, security, and productivity. I thrive on finding innovative solutions to complex challenges and am committed to staying at the forefront of industry advancements.</p>
      </div>
    </div>
  );
};

export default About;