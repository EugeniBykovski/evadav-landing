'use client';

import { FC, useState } from 'react';
import Question from '../Question/Question';
import { quizData } from '@/data/mock-data';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import Result from '../Result/Result';
import ProgressBar from '../ProgressBar/ProgressBar';

const Quiz: FC = () => {
  const t = useTranslations('quiz');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (answer: string) => setSelectedAnswer(answer);
  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers([...answers, selectedAnswer]);
      setSelectedAnswer(null);

      currentQuestion + 1 < quizData.length
        ? setCurrentQuestion(currentQuestion + 1)
        : setShowResult(true);
    }
  };

  const handleCancel = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <section className="flex flex-col justify-center md:h-[62vh] sm:h-[80vh] md:w-[450px]">
      <ProgressBar
        currentQuestion={currentQuestion}
        totalQuestions={quizData.length}
      />
      {!showResult ? (
        <>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            onAnswerSelect={handleAnswerSelection}
            selectedAnswer={selectedAnswer}
          />
          <div className="flex justify-between mt-4">
            {currentQuestion > 0 ? (
              <Button
                className="bg-[#929994] hover:bg-[#7e8580] hover:opacity-90 transition text-white py-2 px-4 md:min-w-52 rounded-3xl"
                onClick={handleCancel}
                size={'lg'}
              >
                {t('cancel')}
              </Button>
            ) : (
              <Button className="invisible"></Button>
            )}
            <Button
              className={`${
                selectedAnswer
                  ? 'bg-green-500 hover:bg-green-600 '
                  : 'bg-green-500 cursor-not-allowed'
              } text-white rounded-3xl md:min-w-52`}
              onClick={handleNext}
              disabled={!selectedAnswer}
              variant={'action'}
              size={'lg'}
            >
              {t('next')}
            </Button>
          </div>
        </>
      ) : (
        <Result answers={answers} />
      )}
    </section>
  );
};

export default Quiz;
