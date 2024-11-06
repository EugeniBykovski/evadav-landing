'use client';

import { FC, memo, useCallback, useState } from 'react';
import Question from '../Question/Question';
import { quizData } from '@/data/mock-data';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useRouter } from 'next/navigation';

const Quiz: FC = memo(() => {
  const t = useTranslations('quiz');
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(quizData.length).fill(null)
  );
  const selectedAnswer = answers[currentQuestion];

  const handleAnswerSelection = useCallback(
    (answer: string) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answer;
      setAnswers(newAnswers);
    },
    [answers, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (selectedAnswer) {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
        router.push('/result');
      }
    }
  }, [selectedAnswer, currentQuestion, answers, router]);

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }, [currentQuestion]);

  return (
    <div className="flex flex-col justify-between lg:h-full sm:h-[71vh] md:h-[40vh]">
      <div className="flex-grow">
        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={quizData.length}
        />
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          onAnswerSelect={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
      </div>
      <div className="flex justify-between lg:mt-4 sm:mt-10 md:mb-10 lg:mb-11 sm:mb-2">
        {currentQuestion > 0 ? (
          <Button
            className="bg-[#929994] hover:bg-[#7e8580] hover:opacity-90 transition text-white py-2 px-4 md:min-w-52 rounded-3xl sm:py-1 sm:px-12 sm:text-md"
            onClick={handleBack}
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
          } text-white rounded-3xl md:min-w-52 sm:py-1 sm:px-12 sm:text-md`}
          onClick={handleNext}
          disabled={!selectedAnswer}
          variant={'action'}
          size={'lg'}
        >
          {t('next')}
        </Button>
      </div>
    </div>
  );
});

Quiz.displayName = 'Quiz';

export default Quiz;
