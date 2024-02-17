import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the corrected import statement
import MainPage from './components/MainPage';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Blog from './components/Blog';
import NavigationBar from './components/Navigation';

const Routers = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default Routers;