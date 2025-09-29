import React from 'react';

const QuestionComponent = ({ question, selectedAnswer, onAnswerSelect, disabled }) => {
  return (
    <div className="question-container">
      <h2 className="question-title">
        {question.question}
      </h2>

      <div className="options-container">
        {question.options.map((option, index) => {
          const buttonClass = selectedAnswer === index ? 'option-button selected' : 'option-button';

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => onAnswerSelect(index)}
              disabled={disabled}
            >
              <span style={{ marginRight: '10px', fontWeight: 'bold' }}>
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionComponent;
