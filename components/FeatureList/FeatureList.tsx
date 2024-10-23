'use client';

import { FC, memo } from 'react';
import { IFeatureListProps } from './types';
import { CheckIcon } from '@radix-ui/react-icons';

const FeatureList: FC<IFeatureListProps> = memo(({ features }) => (
  <ul className="space-y-2 mb-6">
    {features?.map((feature, index) => (
      <li key={feature + index} className="flex items-center space-x-2 mb-2">
        <div className="rounded-full bg-green-700 p-[2px]">
          <CheckIcon className="text-white w-3 h-3" />
        </div>
        <span className="md:text-sm sm:text-xs text-[#424844]">{feature}</span>
      </li>
    ))}
  </ul>
));

export default FeatureList;
