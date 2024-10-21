'use client';

import { FC, useState } from 'react';
import Question from './Question';
import Result from './Result';
import { quizData } from '@/data/mock-data';

const Quiz: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (answer: string) => {
    setAnswers([...answers, answer]);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section className="flex flex-col justify-center h-[70vh]">
      {!showResult ? (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          onAnswerSelect={handleAnswerSelection}
        />
      ) : (
        <Result answers={answers} />
      )}
    </section>
  );
};

export default Quiz;
