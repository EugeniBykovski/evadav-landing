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
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswerSelection = useCallback(
    (answer: string) => setSelectedAnswer(answer),
    []
  );

  const handleNext = useCallback(() => {
    if (selectedAnswer) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
        router.push('/result');
      }
    }
  }, [selectedAnswer, answers, currentQuestion, router]);

  const handleCancel = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  }, [currentQuestion, answers]);

  return (
    <div className="flex flex-col justify-between h-full">
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
      <div className="flex justify-between mt-4 mb-11">
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
    </div>
  );
});

Quiz.displayName = 'Quiz';

export default Quiz;
