//might want to change header options

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Apply the theme on initial load
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleClick = (label) => {
    console.log(`Clicked on ${label}`);
  };

  return (
    <nav>
      <Link 
        to="about" 
        spy={true} 
        smooth={true} 
        duration={500} 
        onClick={() => handleClick('About')}
      >
        About
      </Link> | 
      <Link 
        to="projects" 
        spy={true} 
        smooth={true} 
        duration={500} 
        onClick={() => handleClick('Projects')}
      >
        Projects
      </Link> | 
      <Link 
        to="contact" 
        spy={true} 
        smooth={true} 
        duration={500} 
        onClick={() => handleClick('Contact')}
      >
        Contact
      </Link>

      {/* Toggle Button with Icons */}
      <button onClick={toggleTheme} className="theme-toggle-btn">
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
    </nav>
  );
}

export default Header;
