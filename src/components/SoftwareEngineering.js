import React from 'react';
import Header from './Header';
import './SoftwareEngineering.css';

function SoftwareEngineering() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Backend',
      description: 'Developed an e-commerce backend application.',
      role: 'Lead Developer',
      technologies: 'Java, Spring Boot',
      challenges: 'Integration of a payment method.',
      outcome: 'N/A',
      imageUrl: "./images/spring-boot.png",
      githubLink: 'https://github.com/LennyTechiq/ecommerce-backend'
    },
    {
      id: 2,
      title: 'Fish Management System',
      description: 'Designed a desktop app for fish products management.',
      role: 'Designer and Developer',
      technologies: 'Swing, Java',
      challenges: 'Ensuring cross-platform compatibility.',
      outcome: 'N/A',
      imageUrl: "./images/Fish-Management.png",
      githubLink: 'https://github.com/LennyTechiq/YoFishSystem'
    }
    // Add more projects as needed
  ];

  return (
    <div className="projects-page">
      <Header />
      <h1>Software Engineering Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card" id={`project${project.id}`}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p><strong>Challenges and Solutions:</strong> {project.challenges}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftwareEngineering;
