// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import About from "./components/About";

const RoutesComponent = () => {
  return (
    <>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
};

export default AppRoutes;