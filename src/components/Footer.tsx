import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [health, setHealth] = useState('');

  useEffect(() => {
    fetch('/api/healthz')
      .then(response => response.json())
      .then(data => setHealth(data.status));
  }, []);

  return (
    <footer>
      <p>Health Status: {health}</p>
    </footer>
  );
};

export default Footer;