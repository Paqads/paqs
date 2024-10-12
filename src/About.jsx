import React from 'react';

const About = () => {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="about-image-container">
          <img src="/path/to/your/image.jpg" alt="Samson Akintola" className="img-fluid rounded-circle" />
          <div className="image-overlay">
            <p className="h5 mb-0">Samson Akintola</p>
            <p>Cybersecurity Specialist</p>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <p className="lead">I'm Samson Akintola, a cybersecurity and infrastructure management specialist with a proven track record of enhancing system efficiency, security, and reliability.</p>
        
        <h3 className="mt-4">Core Expertise</h3>
        <ul className="list-unstyled">
          <li className="mb-2">✔️ Risk Management</li>
          <li className="mb-2">✔️ Infrastructure Design and Optimization</li>
          <li className="mb-2">✔️ Identity and Access Management (IAM)</li>
          <li className="mb-2">✔️ Cybersecurity Strategy and Implementation</li>
          <li className="mb-2">✔️ Network Architecture and Security</li>
          <li className="mb-2">✔️ Process Compliance and Automation</li>
        </ul>

        <h3 className="mt-4">Experience Highlights</h3>
        <ul className="list-unstyled">
          <li className="mb-2">🚀 Improved system efficiency by 20% and reduced downtime by 25% as a Cyber Security Analyst at Paqads Limited.</li>
          <li className="mb-2">🚀 Engineered a network with 99.9% operational efficiency and achieved 100% uptime for critical IT servers at Shamartech Limited.</li>
          <li className="mb-2">🚀 Successfully designed and implemented security protocols that increased system integrity and compliance by 20%.</li>
          <li className="mb-2">🚀 Reduced configuration errors by 40% through effective management of Puppet Open Source and Enterprise servers.</li>
        </ul>

        <h3 className="mt-4">Certifications</h3>
        <ul className="list-unstyled">
          <li className="mb-2">🏅 Certified Information Systems Security Professional (CISSP)</li>
          <li className="mb-2">🏅 Microsoft Office Specialist (MOS)</li>
          <li className="mb-2">🏅 AWS Certified Solutions Architect - Associate</li>
          <li className="mb-2">🏅 Computer Technical Support</li>
          <li className="mb-2">🏅 Scrum Master Certified (SMC)</li>
        </ul>

        <h3 className="mt-4">Passion for Technology</h3>
        <p>I'm passionate about leveraging technology to improve efficiency, security, and productivity. I thrive on finding innovative solutions to complex challenges and am committed to staying at the forefront of industry advancements.</p>
      </div>
    </div>
  );
};

export default About;