import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Photo from '../images/Photo.png';

function AboutMe() {
  return (
    <Container fluid style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)', minHeight: '92.3vh' }}>
      <Container className="text-white">
        <Row>
          <Col md={8} className="offset-md-2">
            <div>
              <img src={Photo} alt="Portfolio" className="img-fluid rounded-start mb-3 mt-1 mx-auto d-block" style={{ width: '35%' }} />
            </div>
            <h1 className="text-center mb-4">About Me</h1>
            <p className="lead text-center">My name is Kevin Raj Karki.</p>
            <p className="lead text-center">
              I am a Student. I am passionate about learning and dedicated to my work, and I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything it was created to do.
            </p>
            <hr className="my-4" />
            <Row>
              <Col md={6}>
                <h5>Country:</h5>
                <p>Nepal</p>
              </Col>
              <Col md={6}>
                <h5>Phone:</h5>
                <p>+977-981-8546347</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h5>Email:</h5>
                <p>kevinrajkarki97@gmail.com</p>
              </Col>
              <Col md={6}>
                <h5>Education:</h5>
                <p>Bachelor`s in Data Science, Birmingham City University</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutMe;
