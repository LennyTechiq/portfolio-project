import React from 'react';
import Header from './Header';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <Header />
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-card" id="project1">
          <h2>E-commerce Backend</h2>
          <p>Description: Developed an e-commerce backend application.</p>
          <p>Role: Lead Developer</p>
          <p>Technologies: Java, Spring Boot</p>
          <p>Challenges and Solutions: Integration of a payment method.</p>
          <p>Outcome: Desired functionality.</p>
          <a>Live Site</a>
          <a href="https://github.com/username/repository" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project-card" id="project2">
          <h2>Fish Management System</h2>
          <p>Description: Designed a desktop app for fish products management.</p>
          <p>Role: Designer and Developer</p>
          <p>Technologies: Swing, Java</p>
          <p>Challenges and Solutions: Ensured cross-platform compatibility.</p>
          <p>Outcome: 10,000+ downloads, 4.8-star rating.</p>
          <a>Live App</a>
          <a href="https://github.com/username/repository" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}

export default Projects;
