import React, { useEffect, useState } from 'react';
import './App.css';

const socket = new WebSocket('ws://localhost:3001');

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.send(input);
      setMessages((prev) => [...prev, "Me: " + input]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <h2>Real-Time Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;