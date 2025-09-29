"use client";

import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="dark-mode-toggle"
        className="toggle-checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="dark-mode-toggle" className="toggle-label">
        <span className="toggle-text"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;