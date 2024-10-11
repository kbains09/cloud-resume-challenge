//Global user counter connected to backend

import React, { useState, useEffect } from 'react';
import './Footer.scss';

function Footer() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch the current user count from the backend API
    fetch('http://localhost:4000/api/user-count') // Change this to your deployed backend URL later
      .then((response) => response.json())
      .then((data) => setUserCount(data.count)) // Update the state with the user count
      .catch((error) => console.error('Error fetching user count:', error));
  }, []); // Fetch the user count once on component mount

  return (
    <footer>
      <p>User Counter: {userCount}</p>
      <p>Made by Kirat Bains</p>
    </footer>
  );
}

export default Footer;

