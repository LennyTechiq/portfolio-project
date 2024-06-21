import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      id: 1,
      imageUrl: '/images/logo-project.jpg',
      alt: 'Logo Design'
    },
    {
      id: 2,
      imageUrl: '/images/business-card-project.jpeg',
      alt: 'Business Card Design'
    },
    {
      id: 3,
      imageUrl: '/images/staff-id-project.jpeg',
      alt: 'Staff Id Design'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds (5000ms)

    return () => clearInterval(interval);
  }, [slides.length]);

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
          <li><Link to="/software-engineering#project1">E-commerce Backend</Link></li>
          <li><Link to="/software-engineering#project2">Fish Stock Management App</Link></li>
        </ul>
      </section>
      <section className="skills-and-design">
        <div className="skills-section">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="graphic-design-link">
          <h2>Graphic Design</h2>
          <div className="graphic-design-slideshow">
            {slides.map((slide, index) => (
              <div key={slide.id} className={index === currentSlide ? 'slide active' : 'slide'}>
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="graphic-design-image"
                />
                <div className="label">{slide.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-me">
        <h2>About Me</h2>
        <p>Biography: With a background in computer science, I specialize in creating intuitive and responsive web applications. I’m passionate about user-centered design and continuous learning.</p>
        <p>I have experience working with various programming languages and frameworks, including Java, JavaScript, React, Node.js, and Spring Boot. My ability to adapt to new technologies quickly and efficiently has allowed me to thrive in fast-paced development environments.</p>
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
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-icon" /> Facebook: <a href="https://facebook.com/LennzTech" target="_blank" rel="noopener noreferrer">
              facebook.com/leonard.rongoma
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
