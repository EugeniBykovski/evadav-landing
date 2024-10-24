'use client';

import { FC, memo } from 'react';
import { QuestionProps } from '@/types/quiz-types';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const Question: FC<QuestionProps> = memo(
  ({ question, options, onAnswerSelect, selectedAnswer }) => (
    <div className="mb-4">
      <h2 className="text-3xl font-extrabold mb-4 text-[#040C0C]">
        {question}
      </h2>
      <RadioGroup
        className="space-y-1"
        value={selectedAnswer || ''}
        onValueChange={(value) => onAnswerSelect(value)}
      >
        {options?.map((option, index) => (
          <div
            key={index}
            onClick={() => onAnswerSelect(option)}
            className={`flex items-center space-x-4 px-4 py-3 border-[1.5px] rounded-3xl cursor-pointer transition 
              ${
                selectedAnswer === option
                  ? 'border-[#0E7726] bg-white'
                  : 'border-[#DBDBDB] bg-white'
              } hover:bg-zinc-50`}
          >
            <RadioGroupItem
              value={option}
              id={`option-${index}`}
              className={`h-4 w-4 text-[#0E7726] font-bold border-[1.5px] ${
                selectedAnswer === option
                  ? 'border-[#0E7726]'
                  : 'border-[#DBDBDB]'
              }`}
            />
            <Label
              htmlFor={`option-${index}`}
              className="text-md text-[#040C0C] cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
);

Question.displayName = 'Question';

export default Question;
