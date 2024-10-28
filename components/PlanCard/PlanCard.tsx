'use client';

import { FC, memo, useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { subscriptionPlans } from '@/data/mock-data';
import { Label } from '../ui/label';
import { formatDate } from '@/lib/utils';
import { PlanCardProps } from './types';

const PlanCard: FC<PlanCardProps> = memo(
  ({ setApplicationId, setProductId }) => {
    const [selectedPlan, setSelectedPlan] = useState<string>(
      subscriptionPlans[0].title
    );
    const [selectedPrice, setSelectedPrice] = useState<string>(
      subscriptionPlans[0].price
    );
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
      const plan = subscriptionPlans.find(
        ({ title }) => title === selectedPlan
      );

      if (plan) {
        setSelectedPrice(plan.price);
        setApplicationId(plan.application_id);
        setProductId(plan.title.toLowerCase());
      }
      setCurrentDate(formatDate(new Date()));
    }, [selectedPlan, setApplicationId, setProductId]);

    return (
      <>
        <div className="flex justify-between items-center gap-4 mb-6">
          <RadioGroup
            className="flex sm:flex-col md:flex-row sm:w-full md:max-w-none justify-between cursor-pointer"
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value)}
          >
            {subscriptionPlans?.map(
              ({ title, subtitle, price, product_id }) => (
                <div
                  key={product_id}
                  onClick={() => setSelectedPlan(title)}
                  className={`relative flex md:flex-col items-center md:w-full justify-between p-4 border-2 rounded-2xl cursor-pointer transition hover:shadow-md
          ${
            selectedPlan === title
              ? 'border-[#0E7726] bg-[#EDF3EC]'
              : 'border-gray-300 bg-white'
          }
        `}
                >
                  <RadioGroupItem
                    id={`plan-${product_id}`}
                    value={title}
                    className={`md:mb-4 sm:mb-0 border-2 ${
                      selectedPlan === title
                        ? 'text-[#0E7726] border-[#0E7726]'
                        : 'text-gray-400 border-gray-400'
                    }`}
                  />
                  <div className="md:mb-2 sm:mb-0">
                    <Label
                      htmlFor={`plan-${product_id}`}
                      className={`md:text-md sm:text-sm ${
                        selectedPlan === title
                          ? 'text-[#0E7726]'
                          : 'text-[#929994]'
                      }`}
                    >
                      {title}
                    </Label>
                  </div>
                  <div className="text-xl font-bold text-[#040C0C] md:mb-2 sm:mb-0">
                    {price}
                  </div>
                  <p
                    className={`md:text-md sm:text-sm ${
                      selectedPlan === title
                        ? 'text-[#0E7726]'
                        : 'text-[#929994]'
                    }`}
                  >
                    {subtitle}
                  </p>
                </div>
              )
            )}
          </RadioGroup>
        </div>
        <div className="my-4 font-bold">
          <div className="flex justify-between items-center mb-2">
            <p>Due {currentDate}</p>
            <p>{selectedPrice}</p>
          </div>
          <div className="flex justify-between items-center text-[#0E7726]">
            <p>Due Today (3 days free)</p>
            <p>$0.00</p>
          </div>
        </div>
      </>
    );
  }
);

PlanCard.displayName = 'PlanCard';

export default PlanCard;
