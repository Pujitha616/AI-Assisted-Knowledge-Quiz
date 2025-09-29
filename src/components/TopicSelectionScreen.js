import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { getAvailableTopics } from '../services/openaiService';

const TopicSelectionScreen = ({ quizLength, setQuizLength }) => {
  const { actions } = useQuiz();
  const topics = getAvailableTopics();

  const handleTopicSelect = (topic) => {
    actions.selectTopic(topic.name);
  };

  return (
    <div className="card">
      <h1 className="title">AI Knowledge Quiz</h1>
      <p className="subtitle">Choose a topic to test your knowledge with AI-generated questions</p>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="quiz-length" style={{ marginRight: '10px', fontWeight: '600' }}>
          Number of Questions:
        </label>
        <select
          id="quiz-length"
          value={quizLength}
          onChange={(e) => setQuizLength(Number(e.target.value))}
          style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid #ccc' }}
        >
          {[3, 5, 7, 10].map((len) => (
            <option key={len} value={len}>
              {len}
            </option>
          ))}
        </select>
      </div>

      <div className="topic-grid">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className="topic-card"
            onClick={() => handleTopicSelect(topic)}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
              {topic.id === 'Wellness' && '🏃‍♀️'}
              {topic.id === 'Tech Trends' && '💻'}
              {topic.id === 'Science' && '🔬'}
            </div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              {topic.name}
            </div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              {topic.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelectionScreen;
