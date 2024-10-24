'use client';

import { FC, memo, useMemo } from 'react';
import { Progress } from '@radix-ui/react-progress';
import { IProgressBarProps } from './types';

const ProgressBar: FC<IProgressBarProps> = memo(
  ({ currentQuestion, totalQuestions }) => {
    const progressPercentage = useMemo(
      () => ((currentQuestion + 1) / totalQuestions) * 100,
      [currentQuestion, totalQuestions]
    );

    return (
      <div className="relative pt-1 mb-8">
        <div className="text-center mb-2 text-sm text-[#424844]">
          Question {currentQuestion + 1} of {totalQuestions}
        </div>
        <div className="h-[4px] bg-gray-300 rounded-lg overflow-hidden">
          <Progress
            aria-label="Progress"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${progressPercentage}%` }}
            className="h-[4px] bg-[#0E7726] transition-all rounded-lg duration-500"
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
