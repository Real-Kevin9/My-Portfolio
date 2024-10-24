import React, { useContext } from "react";
import './Projects.css';
import { FaGithub } from "react-icons/fa";
import { Card } from "react-bootstrap";
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const Projects = () => {
  const { theme } = useContext(ThemeContext); // Access the theme from context

  // Define your projects with names and image sources
  const projects = [
    {
      name: "Sales Management System",
      description: "A comprehensive system for managing sales, inventory, and customer interactions."
    },
    {
      name: "Sentiment Analysis",
      description: "A project utilizing NLP techniques to analyze sentiments from text data."
    },
    {
      name: "Solar Radiation Prediction",
      description: "A predictive model for estimating solar radiation using historical data."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme === 'light' ? '#F8F9FA' : '#343a40' }}> {/* Light or Dark background */}
      <div className="container py-5">
        <h1 className="text-center mb-4" style={{ color: '#0E73DB' }}>Projects</h1> {/* Primary color for title */}
        <p className="text-center mb-4" style={{ color: theme === 'light' ? '#333' : '#ffffff' }}>
          Here are some of my projects.
        </p>
        <div className="row">
          {projects.map((project, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <Card className="shadow-sm" style={{ border: 'none', backgroundColor: theme === 'light' ? '#fff' : '#495057' }}> {/* Light or Dark card background */}
                <Card.Body>
                  <Card.Title style={{ color: '#0E73DB' }}>{project.name}</Card.Title> {/* Primary color for titles */}
                  <Card.Text style={{ color: theme === 'light' ? '#555' : '#ffffff' }}>
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <p style={{ color: theme === 'light' ? '#555' : '#ffffff' }}>
            Checkout my Github for the projects I have done and ones I am currently working on.
          </p>
          <a href="https://github.com/Real-Kevin9" target="_blank" rel="noopener noreferrer" style={{ color: '#0E73DB' }}>
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
