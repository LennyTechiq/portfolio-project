import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'; // Import faLinkedin, faFacebookSquare, faEnvelope from brands package
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'; // Import faFilePdf (download icon) from solid package
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <div className="text-content">
            <h1>Hi, I'm Leonard Rongoma</h1>
            <p>A passionate software engineer with a knack for creating stunning and user-friendly web and desktop applications.</p>
          </div>
          <div className="image-container">
            <img src='/images/profile-picture.jpg' alt="Leonard Rongoma" className="profile-picture" />
          </div>
        </div>
      </section>
      <section className="projects-highlight">
        <h2>Highlighted Projects</h2>
        <ul>
          <li><Link to="/projects#project1">E-commerce Backend</Link></li>
          <li><Link to="/projects#project2">Fish Stock Management App</Link></li>
        </ul>
      </section>
      <section className="graphic-design-link">
        <h2>Graphic Design</h2>
        <p>In addition to software engineering, I have a passion for graphic design. I specialize in creating visually compelling designs that enhance user experience and engagement.</p>
        <p>My projects range from logo design and branding to user interface design and illustrations. Each project showcases my attention to detail and commitment to delivering high-quality work.</p>
        <p>Check out my <Link to="/graphic-design">graphic design projects</Link> to see some examples of my work.</p>
      </section>
      <section className="about-me">
        <h2>About Me</h2>
        <p>Biography: With a background in computer science, I specialize in creating intuitive and responsive web applications. I’m passionate about user-centered design and continuous learning.</p>
        <p>I have experience working with various programming languages and frameworks, including JavaScript, React, Node.js, and Python. My ability to adapt to new technologies quickly and efficiently has allowed me to thrive in fast-paced development environments.</p>
        <p>In my free time, I enjoy contributing to open-source projects, exploring the latest advancements in technology, and mentoring aspiring developers. I believe in the power of community and collaboration to drive innovation and achieve outstanding results.</p>
        <p>When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the kitchen, or capturing moments through photography. I strive to maintain a balanced lifestyle that fuels both my professional and personal growth.</p>
        <a href="/Leonard_Runya.pdf" className="btn" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDownload} className="fa-icon" /> Download Resume
        </a>
      </section>
      <footer className="footer">
        <div className="contact-info">
          <h3>Contact</h3>
          <p><FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> Email: <a href="mailto:leonardrongoma3@gmail.com">leonardrongoma3@gmail.com</a></p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" /> LinkedIn: <a href="https://linkedin.com/in/leonard-rongoma" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/leonard-rongoma
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-icon" /> Facebook: <a href="https://facebook.com/leonard.rongoma" target="_blank" rel="noopener noreferrer">
              facebook.com/leonard.rongoma
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
