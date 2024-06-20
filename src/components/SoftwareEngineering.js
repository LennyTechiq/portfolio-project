import React from 'react';
import Header from './Header';
import './SoftwareEngineering.css';

function SoftwareEngineering() {
  return (
    <div className="projects-page">
      <Header />
      <h1>Software Engineering Projects</h1>
      <div className="projects-container">
        <div className="project-card" id="project1">
          <h2>E-commerce Backend</h2>
          <p><strong>Description:</strong> Developed an e-commerce backend application.</p>
          <p><strong>Role:</strong> Lead Developer</p>
          <p><strong>Technologies:</strong> Java, Spring Boot</p>
          <p><strong>Challenges and Solutions:</strong> Integration of a payment method.</p>
          <p><strong>Outcome:</strong> Desired functionality.</p>
          <div className="project-links">
            <a href="https://github.com/LennyTechiq/ecommerce-backend" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        </div>
        <div className="project-card" id="project2">
          <h2>Fish Management System</h2>
          <p><strong>Description:</strong> Designed a desktop app for fish products management.</p>
          <p><strong>Role:</strong> Designer and Developer</p>
          <p><strong>Technologies:</strong> Swing, Java</p>
          <p><strong>Challenges and Solutions:</strong> Ensured cross-platform compatibility.</p>
          <p><strong>Outcome:</strong> 10,000+ downloads, 4.8-star rating.</p>
          <div className="project-links">
            <a href="https://github.com/LennyTechiq/YoFishSystem" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        </div>
        {/* Additional project cards can be added here */}
      </div>
    </div>
  );
}

export default SoftwareEngineering;
