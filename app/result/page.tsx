'use client';

import { FC, useEffect, useState } from 'react';
import Result from '@/components/Result/Result';

const ResultPage: FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const storedAnswers = localStorage.getItem('quizAnswers');
    if (storedAnswers) setAnswers(JSON.parse(storedAnswers));
  }, []);

  return <Result answers={answers} />;
};

export default ResultPage;
