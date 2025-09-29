import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { generateQuizQuestionsWithAI } from '../services/openaiService';

const LoadingScreen = ({ quizLength }) => {
  const { state, actions } = useQuiz();

  React.useEffect(() => {
    const loadQuestions = async () => {
      try {
        actions.setLoading(true);

        const result = await generateQuizQuestionsWithAI(state.selectedTopic, quizLength);

        if (result && result.success) {
          actions.setQuestions(result.questions);
        } else {
          actions.setError('Failed to generate quiz questions');
        }
      } catch (error) {
        actions.setError(error.message);
      }
    };

    loadQuestions();
  }, [state.selectedTopic, quizLength, actions]);

  return (
    <div className="card">
      <div className="loader">
        <div className="spinner"></div>
        <div className="loading-text">
          AI is generating your {state.selectedTopic} quiz questions...
        </div>
        <div style={{ fontSize: '0.9rem', color: '#a0aec0', marginTop: '10px' }}>
          This may take a few seconds
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
