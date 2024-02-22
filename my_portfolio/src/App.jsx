import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import NavigationBar from './components/Navigation';
import Footer from './components/Footer';

const Routers = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;