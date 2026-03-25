import React, { useState, useRef } from 'react';
import ProgressBar from './ProgressBar';

function QuizScreen({ questions, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  // useRef で常に最新スコアを同期管理（stale closure 回避）
  const scoreRef = useRef(0);

  const question = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleOptionClick = (index) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === question.correctIndex) {
      // functional update で常に最新値を参照
      setScore(prev => {
        const newScore = prev + 1;
        scoreRef.current = newScore;
        return newScore;
      });
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // scoreRef.current は最新の確定済みスコアを持つ（二重加算なし）
      onFinish(scoreRef.current);
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
