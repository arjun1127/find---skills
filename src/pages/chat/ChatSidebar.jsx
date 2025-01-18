import { useState, useEffect } from 'react';
import './ChatSidebar.css'; // You can keep any custom styles here
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatSidebar = () => {
  const [messages, setMessages] = useState([
    { user: 'User 1', text: 'Hello!' },
    { user: 'User 2', text: 'Hi there!' },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState(['User 1', 'User 2']);
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 2000); // Simulate typing indicator
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      if (currentMessage.startsWith('/')) {
        handleCommand(currentMessage);
      } else {
        setMessages([...messages, { user: 'You', text: currentMessage }]);
      }
      setCurrentMessage('');
    }
  };

  const handleCommand = (command) => {
    if (command === '/clear') {
      setMessages([]);
    }
    // Add more commands as needed
  };

  useEffect(() => {
    // Simulate fetching online users
    const fetchOnlineUsers = () => {
      setOnlineUsers(['User 1', 'User 2', 'User 3']);
    };
    fetchOnlineUsers();
  }, []);

  return (
    <div className="chat-sidebar bg-light p-3 rounded">
      <h3 className="text-center">Chat</h3>
      <div className="online-users mb-3">
        <h5>Online Users</h5>
        <ul className="list-unstyled">
          {onlineUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="chat-messages mb-3">
        <ul className="list-unstyled">
          {messages.map((message, index) => (
            <li key={index}>
              <strong>{message.user}:</strong> {message.text}
            </li>
          ))}
        </ul>
      </div>
      {isTyping && <p>Someone is typing...</p>}
      <form onSubmit={handleSendMessage}>
        <div className="input-wrapper d-flex">
          <input
            type="text"
            className="form-control me-2"
            value={currentMessage}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ChatSidebar;
