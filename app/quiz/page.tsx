import Quiz from '@/components/Quiz/Quiz';
import { FC } from 'react';

const QuizPage: FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Найди свое идеальное растение</h1>
      <Quiz />
    </div>
  );
};

export default QuizPage;
