import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon from React Icons
import ".//Navigation.css"

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false); // State for managing collapse/expand

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Brand className="me-3 mx-5 fw-bolder fst-italic fs-4">
        K
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(!expanded)} // Toggle collapse/expand on click
      >
        <GiHamburgerMenu /> {/* Hamburger icon */}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-1" expanded={expanded}>
        <Nav className="mx-auto">
          <Nav.Link href="/mainpage">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand className="me-3">
        Rate Me
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBar;
