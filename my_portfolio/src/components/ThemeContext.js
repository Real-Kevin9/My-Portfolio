import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load theme from local storage or default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Save theme to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>{children}</div> {/* Apply theme class to the app */}
    </ThemeContext.Provider>
  );
};

// Add prop types for ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required
};
