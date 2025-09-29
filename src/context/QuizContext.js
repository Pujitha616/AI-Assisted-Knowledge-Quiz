import React, { createContext, useContext, useReducer, useMemo } from 'react';

// Initial state
const initialState = {
  currentScreen: 'topic-selection', // 'topic-selection', 'loading', 'quiz', 'results'
  selectedTopic: null,
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  score: 0,
  isLoading: false,
  error: null,
  feedback: null
};

// Action types
const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SELECT_TOPIC: 'SELECT_TOPIC',
  SET_QUESTIONS: 'SET_QUESTIONS',
  SET_CURRENT_QUESTION: 'SET_CURRENT_QUESTION',
  SET_ANSWER: 'SET_ANSWER',
  SET_SCORE: 'SET_SCORE',
  SET_FEEDBACK: 'SET_FEEDBACK',
  RESET_QUIZ: 'RESET_QUIZ',
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREVIOUS_QUESTION: 'PREVIOUS_QUESTION'
};

// Reducer function
const quizReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: null
      };
    
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    
    case ACTIONS.SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload,
        currentScreen: 'loading'
      };
    
    case ACTIONS.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        currentScreen: 'quiz',
        currentQuestionIndex: 0,
        answers: new Array(action.payload.length).fill(null),
        isLoading: false
      };
    
    case ACTIONS.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: action.payload
      };
    
    case ACTIONS.SET_ANSWER:
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestionIndex] = action.payload;
      return {
        ...state,
        answers: newAnswers
      };
    
    case ACTIONS.SET_SCORE:
      return {
        ...state,
        score: action.payload
      };
    
    case ACTIONS.SET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
        currentScreen: 'results',
        isLoading: false
      };
    
    case ACTIONS.RESET_QUIZ:
      return {
        ...initialState
      };
    
    case ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          state.questions.length - 1
        )
      };
    
    case ACTIONS.PREVIOUS_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
      };
    
    default:
      return state;
  }
};

// Create context
const QuizContext = createContext();

// Provider component
export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const actions = useMemo(() => ({
    setLoading: (loading) => dispatch({ type: ACTIONS.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ACTIONS.SET_ERROR, payload: error }),
    clearError: () => dispatch({ type: ACTIONS.CLEAR_ERROR }),
    selectTopic: (topic) => dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topic }),
    setQuestions: (questions) => dispatch({ type: ACTIONS.SET_QUESTIONS, payload: questions }),
    setCurrentQuestion: (index) => dispatch({ type: ACTIONS.SET_CURRENT_QUESTION, payload: index }),
    setAnswer: (answer) => dispatch({ type: ACTIONS.SET_ANSWER, payload: answer }),
    setScore: (score) => dispatch({ type: ACTIONS.SET_SCORE, payload: score }),
    setFeedback: (feedback) => dispatch({ type: ACTIONS.SET_FEEDBACK, payload: feedback }),
    resetQuiz: () => dispatch({ type: ACTIONS.RESET_QUIZ }),
    nextQuestion: () => dispatch({ type: ACTIONS.NEXT_QUESTION }),
    previousQuestion: () => dispatch({ type: ACTIONS.PREVIOUS_QUESTION })
  }), []);

  return (
    <QuizContext.Provider value={{ state, actions }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
