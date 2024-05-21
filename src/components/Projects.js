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
          <h2>E-commerce Website</h2>
          <p>Description: Developed a full-stack e-commerce application.</p>
          <p>Role: Lead Developer</p>
          <p>Technologies: React, Node.js, MongoDB</p>
          <p>Challenges and Solutions: Integrated a secure payment system; optimized site speed.</p>
          <p>Outcome: Increased client sales by 30%.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">Live Site</a>
          <a href="https://github.com/username/repository" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project-card" id="project2">
          <h2>Task Management App</h2>
          <p>Description: Designed a mobile app for task management.</p>
          <p>Role: UX/UI Designer and Developer</p>
          <p>Technologies: Flutter, Firebase</p>
          <p>Challenges and Solutions: Ensured cross-platform compatibility.</p>
          <p>Outcome: 10,000+ downloads, 4.8-star rating.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">Live App</a>
          <a href="https://example.com/case-study" target="_blank" rel="noopener noreferrer">Case Study</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}

export default Projects;
