import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'quiz', 'result'
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setScore(0);
    setCurrentScreen('quiz');
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setCurrentScreen('result');
  };

  const restartQuiz = () => {
    setCurrentScreen('start');
  };

  return (
    <div className="app-container">
      {currentScreen === 'start' && <StartScreen onStart={startQuiz} />}
      {currentScreen === 'quiz' && (
        <QuizScreen questions={questions} onFinish={finishQuiz} />
      )}
      {currentScreen === 'result' && (
        <ResultScreen score={score} totalQuestions={questions.length} onRestart={restartQuiz} />
      )}
    </div>
  );
}

export default App;
