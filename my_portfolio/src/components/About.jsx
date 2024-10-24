import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Photo from '../images/Photo.png';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

function AboutMe() {
  const { theme } = useContext(ThemeContext); // Access the theme from context

  return (
    <Container fluid style={{ minHeight: '100vh', backgroundColor: theme === 'light' ? '#F5F5F5' : '#343a40' }}> {/* Light Gray or Dark background */}
      <Container>
        <Row>
          <Col md={8} className="offset-md-2">
            <div>
              <img src={Photo} alt="Portfolio" className="img-fluid rounded-start mb-3 mt-1 mx-auto d-block" style={{ width: '35%', border: '2px solid #0E73DB' }} /> {/* Deep Blue border around the image */}
            </div>
            <h1 className="text-center mb-4" style={{ color: theme === 'light' ? '#333333' : '#ffffff' }}>About Me</h1> {/* Dark Gray or White for heading */}
            <p className="lead text-center" style={{ color: theme === 'light' ? '#333333' : '#ffffff' }}>My name is Kevin Raj Karki.</p>
            <p className="lead text-center" style={{ color: theme === 'light' ? '#333333' : '#ffffff' }}>
            I am a motivated aspiring Data Scientist with a solid foundation in data analysis and programming. I have honed my skills in Python, PHP, SQL, and various data visualization tools. I am eager to secure an internship where I can apply my technical expertise in a real-world setting, contribute to innovative projects, and learn from experienced professionals. I am ready to leverage my academic knowledge to gain practical experience and help drive data-driven solutions.
            </p>
            <hr className="my-4" style={{ borderColor: '#0E73DB' }} /> {/* Deep Blue for horizontal line */}
            <Row>
              <Col md={6}>
                <h5 style={{ color: theme === 'light' ? '#333333' : '#ffffff' }}>Country:</h5>
                <p style={{ color: '#0E73DB' }}>Nepal</p> {/* Deep Blue for text */}
              </Col>
              <Col md={6}>
                <h5 style={{ color: theme === 'light' ? '#333333' : '#ffffff' }}>Phone:</h5>
                <p style={{ color: '#0E73DB' }}>+977-981-8546347</p> {/* Deep Blue for text */}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h5 style={{ color: theme === 'light' ? '#333333' : '#ffffff' }}>Email:</h5>
                <p style={{ color: '#0E73DB' }}>kevinrajkarki97@gmail.com</p> {/* Deep Blue for text */}
              </Col>
              <Col md={6}>
                <h5 style={{ color: theme === 'light' ? '#333333' : '#ffffff' }}>Education:</h5>
                <p style={{ color: '#0E73DB' }}>Bachelor&apos;s in Data Science, Birmingham City University</p> {/* Escaping the single quote */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutMe;
