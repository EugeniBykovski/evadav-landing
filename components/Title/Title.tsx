'use client';

import { FC } from 'react';
import { TitleProps } from './types';

const Title: FC<TitleProps> = ({
  title,
  highlighted,
  highlightPosition = 'start',
  className,
}) => {
  const splitTitle = highlighted ? title.split(highlighted) : [title];

  return (
    <h1
      className={`text-4xl lg:text-5xl font-bold bg-gradient-to-b from-[#666666] to-[#424242] dark:from-[#dad8d8] dark:to-[#918f8f] text-transparent bg-clip-text mt-6 text-center h-[100%] ${className}`}
    >
      {highlightPosition === 'start' && highlighted && (
        <span className="text-gradient bg-gradient-to-r from-[#5dd38a] to-[#5dd38a] text-transparent bg-clip-text mx-3">
          {highlighted}
        </span>
      )}
      {splitTitle[0]}
      {highlightPosition === 'end' && highlighted && (
        <span className="text-gradient bg-gradient-to-r from-[#5dd38a] to-[#5dd38a] text-transparent bg-clip-text mx-3">
          {highlighted}
        </span>
      )}
      {splitTitle[1] && splitTitle[1]}
    </h1>
  );
};

export default Title;
