import React, { useState, useEffect } from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import TopicSelectionScreen from './components/TopicSelectionScreen';
import LoadingScreen from './components/LoadingScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

const AppContent = () => {
  const { state } = useQuiz();
  const [darkMode, setDarkMode] = useState(false);
  const [quizLength, setQuizLength] = useState(5);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const renderScreen = () => {
    switch (state.currentScreen) {
      case 'topic-selection':
        return <TopicSelectionScreen quizLength={quizLength} setQuizLength={setQuizLength} />;
      case 'loading':
        return <LoadingScreen quizLength={quizLength} />;
      case 'quiz':
        return <QuizScreen />;
      case 'results':
        return <ResultsScreen />;
      default:
        return <TopicSelectionScreen quizLength={quizLength} setQuizLength={setQuizLength} />;
    }
  };

  return (
    <div className="container">
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 12px',
            background: darkMode ? '#333' : '#f0f0f0',
            color: darkMode ? '#fff' : '#000',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      {state.error && (
        <div className="error-message" role="alert">
          <strong>Error:</strong> {state.error}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            aria-label="Retry"
          >
            Retry
          </button>
        </div>
      )}
      <div className="screen-transition">
        {renderScreen()}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
};

export default App;
