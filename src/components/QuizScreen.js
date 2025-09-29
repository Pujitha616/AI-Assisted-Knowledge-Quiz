import React from 'react';
import { useQuiz } from '../context/QuizContext';
import QuestionComponent from './QuestionComponent';

const QuizScreen = () => {
  const { state, actions } = useQuiz();

  const currentQuestion = state.questions[state.currentQuestionIndex];
  const totalQuestions = state.questions.length;
  const progress = ((state.currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex) => {
    actions.setAnswer(answerIndex);
  };

  const handleNext = () => {
    if (state.currentQuestionIndex < totalQuestions - 1) {
      actions.nextQuestion();
    } else {
      // Calculate score and generate feedback
      calculateScoreAndFeedback();
    }
  };

  const handlePrevious = () => {
    actions.previousQuestion();
  };

  const calculateScoreAndFeedback = async () => {
    try {
      actions.setLoading(true);

      // Calculate score
      let score = 0;
      state.questions.forEach((question, index) => {
        if (state.answers[index] === question.correctAnswer) {
          score++;
        }
      });

      actions.setScore(score);

      // Generate feedback
      const { generateFeedbackWithAI } = await import('../services/openaiService');
      const feedbackResult = await generateFeedbackWithAI(score, totalQuestions, state.selectedTopic, state.answers, state.questions);

      if (feedbackResult.success) {
        actions.setFeedback(feedbackResult.feedback);
      } else {
        actions.setError('Failed to generate feedback');
      }
    } catch (error) {
      actions.setError(error.message);
    }
  };

  const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1;
  const selectedAnswer = state.answers[state.currentQuestionIndex];

  return (
    <div className="card">
      <div className="progress-text">
        Question {state.currentQuestionIndex + 1} of {totalQuestions}
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <QuestionComponent
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        disabled={false}
      />

      <div className="navigation">
        <button
          className="nav-button"
          onClick={handlePrevious}
          disabled={state.currentQuestionIndex === 0}
        >
          Previous
        </button>

        <button
          className="nav-button"
          onClick={handleNext}
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;
