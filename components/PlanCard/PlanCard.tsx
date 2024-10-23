'use client';

import { FC, memo, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { subscriptionPlans } from '@/data/mock-data';
import { Label } from '../ui/label';

const PlanCard: FC = memo(() => {
  const [selectedPlan, setSelectedPlan] = useState<string>(
    subscriptionPlans[0].title
  );

  return (
    <RadioGroup
      className="flex justify-between w-full cursor-pointer"
      value={selectedPlan}
      onValueChange={(value) => setSelectedPlan(value)}
    >
      {subscriptionPlans?.map(({ title, subtitle, price, highlight, id }) => (
        <div
          key={id}
          onClick={() => setSelectedPlan(title)}
          className={`relative flex flex-col items-center w-full justify-between p-4 border-2 rounded-2xl cursor-pointer transition hover:shadow-md
          ${
            selectedPlan === title
              ? 'border-[#0E7726] bg-[#EDF3EC]'
              : 'border-gray-300 bg-white'
          }
        `}
        >
          <RadioGroupItem
            id={`plan-${id}`}
            value={title}
            className={`mb-4 border-2 ${
              selectedPlan === title
                ? 'text-[#0E7726] border-[#0E7726]'
                : 'text-gray-400 border-gray-400'
            }`}
          />
          <div className="mb-2">
            <Label
              htmlFor={`plan-${id}`}
              className={`md:text-md sm:text-sm ${
                selectedPlan === title ? 'text-[#0E7726]' : 'text-[#929994]'
              }`}
            >
              {title}
            </Label>
          </div>
          <div className="text-xl font-bold text-[#040C0C] mb-2">{price}</div>
          <p
            className={`md:text-md sm:text-sm ${
              selectedPlan === title ? 'text-[#0E7726]' : 'text-[#929994]'
            }`}
          >
            {subtitle}
          </p>
        </div>
      ))}
    </RadioGroup>
  );
});

export default PlanCard;
