import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Blog from './components/Blog';

const Routes = () => (
  <Router>
    <Routes>
      <Route exact path="/" component={MainPage} />
      <Route path="/About" component={About} />
      <Route path="/Contacts" component={Contacts} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Blog" component={Blog} />
    </Routes>
  </Router>
);

export default Routes;