'use client';

import { FC } from 'react';
import { QuestionProps } from './types';

const Question: FC<QuestionProps> = ({ question, options, onAnswerSelect }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">{question}</h2>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index}>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => onAnswerSelect(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
