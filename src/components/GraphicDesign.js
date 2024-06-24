import React from 'react';
import Header from './Header';
import './GraphicDesign.css';

function GraphicDesign() {
  return (
    <div className="graphic-design-page">
      <Header />
      <h1>Graphic Design Projects</h1>
      <div className="projects-container">
        <div className="project-card" id="logos">
          <img src='./images/logo-project.jpg' alt="Logos" />
          <h2>Logo Designs</h2>
          <p>Creating unique and memorable logo designs that represent the brand's identity. Each logo is crafted with attention to detail and creativity, ensuring it stands out in the market.</p>
          {/* You can add more content or details as needed */}
        </div>
        <div className="project-card" id="banners">
          <img src='./images/banner-project.jpg' alt="Banners" />
          <h2>Banner Designs</h2>
          <p>Designing eye-catching banners for various purposes, including digital marketing, social media, and events. These banners are designed to capture attention and convey the intended message effectively.</p>
          {/* You can add more content or details as needed */}
        </div>
        <div className="project-card" id="staff-ids">
          <img src='./images/staff-id-project.jpeg' alt="Staff IDs" />
          <h2>Staff ID Designs</h2>
          <p>Developing professional staff ID cards that include essential information and company branding. These IDs are designed to be durable and easily recognizable.</p>
          {/* You can add more content or details as needed */}
        </div>
        <div className="project-card" id="business-cards">
          <img src='./images/business-card-project.jpeg' alt="Business Cards" />
          <h2>Business Card Designs</h2>
          <p>Crafting stylish and professional business cards that make a lasting impression. Each card design is tailored to reflect the individual's or company's personality and brand.</p>
          {/* You can add more content or details as needed */}
        </div>
        <div className="project-card" id="campaign-posters">
          <img src='./images/campaign-poster-project.jpg' alt="Campaign Posters" />
          <h2>Campaign Posters</h2>
          <p>Designing impactful campaign posters that communicate messages effectively and resonate with the target audience. These posters are crafted to be visually appealing and persuasive.</p>
          {/* You can add more content or details as needed */}
        </div>
      </div>
    </div>
  );
}

export default GraphicDesign;
