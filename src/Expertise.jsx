import React from 'react';

const Expertise = () => {
  const content = {
    intro: "I'm passionate about leveraging technology to improve efficiency, security, and productivity. I thrive on finding innovative solutions to complex challenges and am committed to staying at the forefront of industry advancements. Here are some of the areas where I excel:",
    areas: [
      {
        title: "AWS Solution Architecture",
        skills: [
          {
            title: "Cloud-Native Design",
            description: "I specialize in architecting solutions that leverage the full potential of AWS services. This means designing systems that are scalable, resilient, and cost-optimized from the ground up. I can help you migrate existing infrastructure to the cloud or build new, cloud-native applications that take advantage of the latest AWS technologies."
          },
          {
            title: "Infrastructure Optimization",
            description: "I have a proven track record of improving system efficiency and reducing downtime through effective infrastructure management. At Paqads Limited, I spearheaded initiatives that led to a 20% improvement in system efficiency and a 25% reduction in downtime. I can bring this same expertise to your organization, helping you optimize your AWS infrastructure for performance, reliability, and cost-effectiveness."
          },
          {
            title: "AWS Certified",
            description: "I am an AWS Certified Solutions Architect - Associate, demonstrating my comprehensive understanding of AWS architectural principles and best practices. This certification validates my ability to design and deploy well-architected solutions on the AWS platform."
          }
        ]
      },
      {
        title: "Cybersecurity",
        skills: [
          {
            title: "Risk Management",
            description: "I take a proactive approach to cybersecurity, identifying and mitigating potential threats before they can impact your business. I have a deep understanding of security best practices and can help you develop a comprehensive risk management strategy."
          },
          {
            title: "Security Protocols",
            description: "I have extensive experience in designing and enforcing robust security protocols that enhance system integrity and compliance. At Shamartech Limited, I designed and implemented security protocols that elevated system integrity and compliance ratings by 20%. I can help you implement similar security measures to protect your critical data and systems."
          },
          {
            title: "Vulnerability Management",
            description: "I am adept at conducting thorough security assessments to identify and address vulnerabilities, minimizing security risks. I have a keen eye for detail and can help you identify and address potential security gaps in your systems."
          }
        ]
      }
    ],
    combination: {
      title: "The Power of Combined Expertise",
      description: "My combined expertise in AWS solution architecture and cybersecurity allows me to:",
      points: [
        "Develop and deploy secure cloud infrastructure on AWS, ensuring your applications and data are protected from threats.",
        "Implement robust access controls and identity management solutions, safeguarding your sensitive information.",
        "Ensure compliance with industry security standards, such as ISO 27001 and SOC 2, protecting your organization from potential legal and financial liabilities.",
        "Optimize system performance while maintaining a strong security posture, ensuring your systems are both efficient and secure."
      ],
      conclusion: "I am committed to staying at the forefront of both AWS advancements and evolving cybersecurity threats to deliver cutting-edge solutions that meet the highest standards of security and efficiency."
    }
  };

  return (
    <div className="expertise-content expertise-card">
      <p className="expertise-intro">{content.intro}</p>
      {content.areas.map((area, index) => (
        <div key={index} className="expertise-area">
          <h3>{area.title}</h3>
          <ul className="expertise-list">
            {area.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                <strong>{skill.title}</strong>
                <p>{skill.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="expertise-combination">
        <h3>{content.combination.title}</h3>
        <p>{content.combination.description}</p>
        <ul>
          {content.combination.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p>{content.combination.conclusion}</p>
      </div>
    </div>
  );
};

export default Expertise;