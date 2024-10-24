import React, { useState, useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSun, FaMoon } from 'react-icons/fa'; // Ensure the import is correct
import './Navigation.css';
import { ThemeContext } from './ThemeContext'; // Updated import

const NavigationBar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext); // Get toggleTheme and theme from context
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg={theme === "dark" ? "dark" : "light"} expand="lg" className="navbar-custom">
      <Navbar.Brand
        className={`me-3 mx-5 fw-bolder fst-italic fs-4 ${theme === 'dark' ? 'text-white' : ''}`}
        href="/" // Added link to home
      >
        Kevin R Karki
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      >
        <GiHamburgerMenu />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-1" expanded={expanded}>
        <Nav className="mx-auto">
          <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
          <Nav.Link href="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
          <Nav.Link href="/skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
          <Nav.Link href="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
        </Nav>
        <button
          className="btn"
          onClick={toggleTheme}
          style={{ color: '#0E73DB', background: 'transparent', border: 'none' }}
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />} {/* Use icons instead of text */}
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
