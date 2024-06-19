import React from 'react';
import Header from './Header';
import './Projects.css';

function GraphicDesign() {
  return (
    <div className="Projects">
        <Header />
        <h1>Graphic Design Projects</h1>
      <div className="projects-container">
        <div className="project-card" id="project1">
            <img src="/images/project1.jpg" alt="Project 1" />
            <p>Project 1 Description</p>
        </div>
        <div className="project-card" id="project2">
            <img src="/images/project2.jpg" alt="Project 2" />
            <p>Project 2 Description</p>
        </div>
        <div className="project-card" id="project3">
            <img src="/images/project3.jpg" alt="Project 3" />
            <p>Project 3 Description</p>
        </div>
        <div className="project-card" id="project4">
            <img src="/images/project4.jpg" alt="Project 4" />
            <p>Project 4 Description</p>
        </div>
      </div>
    </div>
  );
}

export default GraphicDesign;
