import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Collapse className="flex-grow-1">
        <Navbar.Brand href="/" className="me-3 mx-4">
          Kevin Raj Karki
        </Navbar.Brand>
        <Nav className="me-4 ms-auto">
          <Nav.Link href="/mainpage">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;