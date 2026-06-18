import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [healthStatus, setHealthStatus] = useState('');

  useEffect(() => {
    fetch('/api/healthz')
      .then(response => response.json())
      .then(data => setHealthStatus(data.status));
  }, []);

  return <footer>Health Status: {healthStatus}</footer>;
};

export default Footer;