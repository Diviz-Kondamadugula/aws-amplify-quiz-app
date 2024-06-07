import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
      .then(response => {
        const formattedData = response.data.results.map((item) => {
          const incorrectAnswers = item.incorrect_answers;
          const options = [...incorrectAnswers, item.correct_answer].sort(() => Math.random() - 0.5);
          return {
            question: item.question,
            options: options,
            answer: item.correct_answer
          };
        });
        setQuizData(formattedData);
      })
      .catch(error => {
        console.error("Error fetching quiz data: ", error);
      });
  }, []);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  if (quizData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='quiz-container'>
      {showScore ? (
        <div className='score-section'>
          <h2>You scored {score} out of {quizData.length}</h2>
        </div>
      ) : (
        <div className='quiz-content'>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className='question-text' dangerouslySetInnerHTML={{ __html: quizData[currentQuestion].question }} />
          </div>
          <div className='answer-section'>
            {quizData[currentQuestion].options.map((option) => (
              <button 
                onClick={() => handleAnswerOptionClick(option)} 
                key={option}
                className={`answer-button ${selectedAnswer === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                dangerouslySetInnerHTML={{ __html: option }} 
              />
            ))}
          </div>
          {selectedAnswer && (
            <div className={`feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
              {isCorrect ? 'Correct! 🎉' : 'Sorry, that’s not right. 😢'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
