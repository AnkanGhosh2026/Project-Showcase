import { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hi! I'm Ankan's AI assistant. Ask me anything about his work, skills, or projects!", isBot: true }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const history = messages.slice(1).map(msg => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text
      }));

      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      });

      const data = await res.json();
      
      if (data.error) {
        setMessages(prev => [...prev, { text: `Error: ${data.error}`, isBot: true }]);
      } else {
        setMessages(prev => [...prev, { text: data.response, isBot: true }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { text: "Sorry, I couldn't reach the backend. Ensure it is running on port 8000.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <span className="chatbot-bot-icon">🤖</span>
              <h3>AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close">✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message-wrapper ${msg.isBot ? 'bot' : 'user'}`}>
                <div className="chatbot-message">
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message-wrapper bot">
                <div className="chatbot-message typing">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="chatbot-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn" disabled={isLoading || !input.trim()}>
              <span className="send-icon">➤</span>
            </button>
          </form>
        </div>
      )}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chatbot-fab" aria-label="Open AI Chat">
          <span className="chat-icon">💬</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
