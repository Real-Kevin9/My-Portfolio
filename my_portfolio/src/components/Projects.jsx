import React from "react";
import { FaGithub } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #0e2038, #213a5c, #0e2038)', minHeight: '92.3vh' }}>
      <div className="container py-5">
        <h1 className="text-center text-light mb-4">Projects</h1>
        <p className="text-center text-light mb-4">
          Here are some of my projects.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="project1.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Description of Project 1
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="project2.jpg" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Description of Project 2
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src="project3.jpg" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Description of Project 3
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="text-light">
            Checkout my Github for the projects I have done and ones I am currently working on.
          </p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
