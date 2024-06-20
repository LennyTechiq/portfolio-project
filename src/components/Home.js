import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Leonard Rongoma</h1>
          <p>A passionate software engineer with a knack for creating stunning and user-friendly web and desktop applications.</p>
        </div>
      </section>
      <section className="projects-highlight">
        <h2>Highlighted Projects</h2>
        <ul>
          <li><Link to="/software-engineering#project1">E-commerce Backend</Link></li>
          <li><Link to="/software-engineering#project2">Fish Stock Management App</Link></li>
        </ul>
      </section>
      <section className="graphic-design-link">
        <h1>Graphic Design</h1>
        <p>In addition to software engineering, I have a passion for graphic design. I specialize in creating visually compelling designs that enhance user experience and engagement.</p>
        <p>My projects range from logo design and branding to user interface design and illustrations. Each project showcases my attention to detail and commitment to delivering high-quality work.</p>
        <p>Check out my <Link to="/graphic-design">graphic design projects</Link> to see some examples of my work.</p>
      </section>
      <section className="about-me">
        <h1>About Me</h1>
        <p>Biography: With a background in computer science, I specialize in creating intuitive and responsive web applications. I’m passionate about user-centered design and continuous learning.</p>
        <a href="/Leonard_Runya.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Contact</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:leonardrongoma3@gmail.com">leonardrongoma3@gmail.com</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://linkedin.com/in/leonard-rongoma" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/leonard-rongoma
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faFacebook} /> Facebook: <a href="https://facebook.com/LennzTech" target="_blank" rel="noopener noreferrer">
            facebook.com/leonard-rongoma
          </a>
        </p>
      </section>
    </div>
  );
}

export default Home;
