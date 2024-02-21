import React from "react";
import "./MainPage.css";
import { Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  return (
    <Container fluid style={{ background: 'linear-gradient(to right, #213a5c, #0e2038, #213a5c)', minHeight: '92.3vh' }}>
      {/* <div style={{ 
        position: 'absolute', 
        top: 750,
        transform: 'rotate(-30deg)', 
        transformOrigin: 'left bottom', 
        width: '140%', 
        fontSize: '12rem', 
        color: 'transparent',
        textAlign: 'left', 
        pointerEvents: 'none', 
        lineHeight: '',
        textShadow: '0 0 0 #FFFFFF80'
      }}>
        GRAPHICS DESIGNER
      </div> */}
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="hero_title1 fw-bold mt-5" style={{color: '#0e2038', fontSize: '3rem'}}>
            I`m a
          </div>
          <div className="hero_title2 fw-bold text-white" style={{ fontSize: '4rem' }}>
            GRAPHICS DESIGNER
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;