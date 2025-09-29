import React from 'react';
import { useQuiz } from '../context/QuizContext';

const ResultsScreen = () => {
  const { state, actions } = useQuiz();
  const { feedback } = state;

  const handleRestart = () => {
    actions.resetQuiz();
  };

  if (!feedback) {
    return (
      <div className="card">
        <div className="loader">
          <div className="spinner"></div>
          <div className="loading-text">Generating your personalized feedback...</div>
        </div>
      </div>
    );
  }

  const getScoreEmoji = (percentage) => {
    if (percentage >= 90) return '🎉';
    if (percentage >= 70) return '👏';
    if (percentage >= 50) return '👍';
    return '💪';
  };

  return (
    <div className="card">
      <div className="results-container">
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
          {getScoreEmoji(feedback.percentage)}
        </div>

        <div className="score">
          {feedback.score}/{feedback.total}
        </div>

        <div style={{
          fontSize: '1.5rem',
          color: '#667eea',
          marginBottom: '30px',
          fontWeight: '600'
        }}>
          {feedback.percentage}% Correct
        </div>

        <div className="feedback">
          <h3 style={{
            marginBottom: '15px',
            color: '#2d3748',
            fontSize: '1.3rem'
          }}>
            AI Feedback
          </h3>
          <p>{feedback.message}</p>
        </div>

        {feedback.suggestions && feedback.suggestions.length > 0 && (
          <div style={{
            textAlign: 'left',
            marginBottom: '30px',
            padding: '20px',
            background: '#f7fafc',
            borderRadius: '12px'
          }}>
            <h4 style={{
              marginBottom: '15px',
              color: '#2d3748',
              fontSize: '1.1rem'
            }}>
              💡 Suggestions for Improvement:
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {feedback.suggestions.map((suggestion, index) => (
                <li key={index} style={{
                  marginBottom: '8px',
                  paddingLeft: '20px',
                  position: 'relative',
                  color: '#4a5568'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#667eea',
                    fontWeight: 'bold'
                  }}>
                    •
                  </span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{
          textAlign: 'left',
          marginBottom: '30px',
          padding: '20px',
          background: '#f7fafc',
          borderRadius: '12px'
        }}>
          <h4 style={{
            marginBottom: '15px',
            color: '#2d3748',
            fontSize: '1.1rem'
          }}>
            📝 Question Review:
          </h4>
          {state.questions.map((question, index) => {
            const userAnswer = state.answers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div key={index} style={{
                marginBottom: '20px',
                padding: '15px',
                background: 'white',
                borderRadius: '8px',
                border: `2px solid ${isCorrect ? '#48bb78' : '#ed8936'}`
              }}>
                <div style={{
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#2d3748'
                }}>
                  Question {index + 1}: {question.question}
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <div style={{
                    color: isCorrect ? '#2f855a' : '#c05621',
                    fontWeight: 'bold',
                    marginBottom: '5px'
                  }}>
                    Your Answer: {String.fromCharCode(65 + userAnswer)}. {question.options[userAnswer]}
                    {isCorrect ? ' ✓' : ' ✗'}
                  </div>

                  {!isCorrect && (
                    <div style={{
                      color: '#2f855a',
                      fontWeight: 'bold',
                      marginBottom: '5px'
                    }}>
                      Correct Answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                    </div>
                  )}
                </div>

                <div style={{
                  color: '#4a5568',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  {question.explanation}
                </div>
              </div>
            );
          })}
        </div>

        <button className="restart-button" onClick={handleRestart}>
          Take Another Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
