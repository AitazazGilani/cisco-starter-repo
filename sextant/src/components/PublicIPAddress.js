import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicIPAddress = ({ ipv4 }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const ipifyURL = ipv4 ? 'https://api.ipify.org?format=json' : 'https://api64.ipify.org?format=json';

    axios
      .get(ipifyURL)
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, [ipv4]);

  return (
    <div>
      <h2>Your {ipv4 ? 'IPv4' : 'IPv6'} Address</h2>
      {ipAddress ? (
        <p>Public {ipv4 ? 'IPv4' : 'IPv6'} address is: {ipAddress}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PublicIPAddress;
