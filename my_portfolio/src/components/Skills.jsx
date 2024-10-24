import React, { useEffect, useContext } from 'react';
import 'animate.css/animate.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const Skills = () => {
  const { theme } = useContext(ThemeContext); // Access the theme from context

  const skills = [
    { name: 'HTML/CSS', level: '85%' },
    { name: 'R', level: '80%' },
    { name: 'Python', level: '80%' },
    { name: 'PHP', level: '80%' },
    { name: 'Figma', level: '85%' },
    { name: 'React', level: '75%' },
    { name: 'Canva', level: '85%' },
    { name: 'Latex', level: '90%' },
  ];

  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item) => {
      item.classList.add('animate__animated', 'animate__fadeInUp');
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme === 'light' ? '#F8F9FA' : '#343a40' }}> {/* Light or Dark background */}
      <Container className="skills-container py-5">
        <h1 className="text-center mb-4" style={{ color: '#0E73DB' }}>Skills</h1> {/* Primary color for title */}
        <Row>
          {skills.map((skill) => (
            <Col xs={12} sm={6} md={4} lg={3} className="skill-item mb-4" key={skill.name}>
              <h5 style={{ color: theme === 'light' ? '#333' : '#ffffff', marginTop: '1.5rem' }}>{skill.name}</h5> {/* Subtle dark grey or White for skill names */}
              <div className="progress" style={{ height: '20px', backgroundColor: theme === 'light' ? '#e9ecef' : '#495057', borderRadius: '10px' }}> {/* Light or Dark progress background */}
                <div className="progress-bar" style={{
                  width: skill.level,
                  backgroundColor: '#0E73DB',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  padding: '0 10px',
                  color: '#fff',
                  fontSize: '0.75rem',
                }}>
                  {skill.level}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
