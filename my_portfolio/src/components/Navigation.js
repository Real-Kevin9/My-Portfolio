import { NavLink } from "react-router-dom";

// In App.js or in your Navigation component
<nav>
  <NavLink to="/" exact activeClassName="active">
    Home
  </NavLink>
  <NavLink to="/projects" activeClassName="active">
    Projects
  </NavLink>
  <NavLink to="/blog" activeClassName="active">
    Blog
  </NavLink>
  <NavLink to="/contacts" activeClassName="active">
    Contacts
  </NavLink>
  <NavLink to="/about" activeClassName="active">
    About
  </NavLink>
</nav>