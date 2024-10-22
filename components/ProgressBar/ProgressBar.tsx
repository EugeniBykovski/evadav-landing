'use client';

import { FC } from 'react';
import { Progress } from '@radix-ui/react-progress';
import { IProgressBarProps } from './types';

const ProgressBar: FC<IProgressBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="relative pt-1 mb-8">
      <div className="text-center mb-2 text-sm text-[#424844]">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
      <div className="h-[4px] bg-gray-300 rounded-lg overflow-hidden">
        <Progress
          style={{ width: `${progressPercentage}%` }}
          className="h-[4px] bg-[#5ab16f] transition-all rounded-lg duration-500"
        ></Progress>
      </div>
    </div>
  );
};

export default ProgressBar;
