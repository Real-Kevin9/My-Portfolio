import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'Frontend', level: '75%' },
    { name: 'Backend', level: '70%' },
    { name: 'Graphics Design', level: '85%' },
    { name: 'Photography', level: '90%' },
    { name: 'Photoshop', level: '85%' },
    { name: 'Python', level: '75%' },
  ];

  return (
    <div style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)', minHeight: '92.3vh' }}>
      <Container className="skills-container text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={6} className="skill-item" style={{ marginBottom: '4rem' }}>
              <h5 style={{ marginTop: '3rem', marginBottom: '0.25rem' }}>{skill.name}</h5>
              <div className="progress" style={{ height: '20px', position: 'relative' }}>
                <div className="progress-bar" style={{ width: skill.level, backgroundColor: '#007bff', position: 'absolute', top: 0, left: 0, height: '100%' }}>
                  <span style={{ color: 'white', position: 'absolute', top: '0', right: '0', fontSize: '0.75rem', padding: '0.25rem' }}>{skill.level}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <h2 className='mx-auto text-white '>Available For Freelancer !</h2> */}
    </div>
  );
};

export default Skills;
