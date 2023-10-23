import React, { useState, useEffect } from 'react';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);
  
  
  
  useEffect(() => {
    const W3CWebSocket = require('websocket').w3cwebsocket;
    const client = new W3CWebSocket("ws://localhost:55455");
    client.addEventListener('message', (message) => {
      if (message.isTrusted === true) {
        const packetTimestamp = message.timeStamp; // Parse the timestamp
        const currentTimestamp = Date.now();
        const packetLatency = currentTimestamp - packetTimestamp;
        setLatency(packetLatency);
      }
      console.log(message.timeStamp)
    });

  }, []);

  return (
    <div>
      <h2>Packet Latency</h2>
      {latency !== null ? (
        <p>Packet Latency: {latency} milliseconds</p>
      ) : (
        <p>Connecting to Pylon...</p>
      )}
    </div>
  );
};

export default PacketLatency;
