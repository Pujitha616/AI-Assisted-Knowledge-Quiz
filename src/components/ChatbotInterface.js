import React, { useState } from 'react';
import { chatWithAI } from '../services/openaiService';
import { chatWithIntelligentAI, getLearningProgress, getTopicSuggestions } from '../services/intelligentChatbot';

const ChatbotInterface = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await chatWithAI(input);
    setResponse(res);
  };

  return (
    <div>
      <h2>Chatbot Interface</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleSend}>Send</button>
      <div>{response}</div>
    </div>
  );
};

export default ChatbotInterface;
