import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import Photo from '../images/Photo.jpg';

function AboutMe() {
  return (
    <Container fluid style={{ background: 'linear-gradient(to right, #213a5c, #0e2038, #213a5c)', minHeight: '92.3vh' }}>
    <div className="container text-white" >
      <div className="row">
        <div className="col-md-8 offset-md-2 mt-5">
        {/* <img src={Photo} alt="Portfolio" className="img-fluid rounded-start mb-4" /> */}
          <h1 className="text-center mb-4">Kevin Raj Karki</h1>
          <p className="lead text-center">
            I am a Professional Graphic Designer. I am passionate and dedicated to my work, and I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything it was created to do.
          </p>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-6">
              <h5>Country:</h5>
              <p>Nepal</p>
            </div>
            <div className="col-md-6">
              <h5>Phone:</h5>
              <p>+977-981-8546347</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>Email:</h5>
              <p>kevinrajkarki97@gmail.com</p>
            </div>
            <div className="col-md-6">
              <h5>Education:</h5>
              <p>Bachelor`s in Data Science, Birmingham City University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default AboutMe;