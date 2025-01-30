import React, { useContext } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import animated from '../images/animated.png';
import './MainPage.css';
import { Link } from "react-router-dom";
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const MainPage = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme
  const iconColor = theme === 'dark' ? 'white' : 'black'; // Set icon color based on theme

  const handleDownload = () => {
    try {
      const cvUrl = 'https://drive.google.com/file/d/1w9fkEnqeId-J6zvy4OT9ZePpJjHnx-QS/view?usp=sharing';
      window.open(cvUrl, '_blank');
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <div className={`d-flex flex-column min-vh-100 ${theme}`}>
      <Container fluid className="flex-grow-1 d-flex align-items-center justify-content-center main-container">
        <Row className="justify-content-center align-items-center text-center text-lg-start">
          <Col lg={5} className="mb-4">
            <img 
              src={animated} 
              alt="Kevin Raj Karki" 
              className="img-fluid floating-img" 
              style={{ width: '70%', maxWidth: '350px', marginBottom: '2rem' }} 
            />
          </Col>
          <Col lg={7}>
            <div className="hero-title fw-bold mb-2" style={{ fontSize: '2.5rem' }}>
              Hello, It&apos;s Me
            </div>
            <div className="hero-name fw-bold mb-4" style={{ fontSize: '3rem' }}>
              Kevin Raj Karki
            </div>
            <p className="hero-description mb-4">
              I am a Student. I am passionate about learning and dedicated to my work, and I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything it was created to do.
            </p>
            <Link to="/about">
              <Button variant="light" className="fw-bold mb-4 me-lg-5" style={{ backgroundColor: '#0E73DB', color: '#ffff', fontSize: '1.1rem' }}>
                Learn More About Me
              </Button>
            </Link>
            <Button variant="light" className="fw-bold mb-4 mt-lg-0" style={{ backgroundColor: '#0E73DB', color: '#ffff', fontSize: '1.1rem' }} onClick={handleDownload}>
              Click Here For My CV
            </Button>
            <div className="social-icons mt-5">
              <a href="https://github.com/Real-Kevin9" target="_blank" rel="noopener noreferrer" className="me-4">
                <FaGithub size="2.5em" color={iconColor} />
              </a>
              <a href="https://linkedin.com/in/kevinrajkarki" target="_blank" rel="noopener noreferrer" className="me-4">
                <FaLinkedin size="2.5em" color={iconColor} />
              </a>
              <a href="https://twitter.com/KevinKarki97" target="_blank" rel="noopener noreferrer">
                <FaTwitter size="2.5em" color={iconColor} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
