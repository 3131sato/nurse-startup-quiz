import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function QuizScreen({ questions, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleOptionClick = (index) => {
    if (isAnswered) return; // Prevent multiple clicks

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onFinish(score + (selectedOption === question.correctIndex ? 1 : 0));
    }
  };

  return (
    <div className="screen quiz-screen">
      <div className="card">
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
        
        <h2 className="question-text">{question.question}</h2>
        
        <div className="options-container">
          {question.options.map((option, index) => {
            let optionClass = "btn option-btn";
            
            if (isAnswered) {
              if (index === question.correctIndex) {
                optionClass += " correct";
              } else if (index === selectedOption) {
                optionClass += " incorrect";
              } else {
                optionClass += " disabled";
              }
            } else if (selectedOption === index) {
              optionClass += " selected";
            }

            return (
              <button 
                key={index} 
                className={optionClass}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <div className="explanation-panel slide-up">
          <div className="result-header">
            {selectedOption === question.correctIndex ? (
              <h3 className="result-title correct-text">⭕ 正解！</h3>
            ) : (
              <h3 className="result-title incorrect-text">❌ 不正解...</h3>
            )}
          </div>
          <p className="explanation-text">{question.explanation}</p>
          <button className="btn btn-primary" onClick={handleNextClick}>
            {currentQuestionIndex < totalQuestions - 1 ? '次の問題へ' : '結果を見る'}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizScreen;
