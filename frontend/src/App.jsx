import './App.css'
import { useState, useEffect } from 'react';
import { useSocket, useSocketEvent } from 'socket.io-react-hook';

function App() {
  const [text, setText] = useState('');
  const { socket, error } = useSocket('http://localhost:8080');  
  const { lastMessage } = useSocketEvent(socket, 'message');

  useEffect(function() {
    if (lastMessage && lastMessage !== text) {
      setText(lastMessage);
    }
  }, [lastMessage]);

  if (error) {
    return <p>{String(error)}</p>
  }

  function handleChange(e) {
    setText(e.target.value);
    socket.emit('message', e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Last message = {lastMessage}</p>
    </div>
  );
}

export default App
