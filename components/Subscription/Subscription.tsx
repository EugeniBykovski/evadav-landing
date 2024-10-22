'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { subscriptionFeatures } from '@/data/mock-data';
import PlanCard from '../PlanCard/PlanCard';
import FeatureList from '../FeatureList/FeatureList';

const Subscription: FC = () => {
  const t = useTranslations('subscription');

  return (
    <section className="flex flex-col justify-center md:h-[65vh] sm:h-[80vh] md:w-[500px]">
      <h2 className="md:text-5xl sm:text-3xl font-extrabold mb-4 text-[#040C0C]">
        {t('title')}
      </h2>
      <FeatureList features={subscriptionFeatures} />
      <div className="flex justify-between items-center gap-4 mb-6">
        <PlanCard />
      </div>
      <div className="my-4 font-bold">
        <div className="flex justify-between items-center mb-2">
          <p>Due Oct 31, 2024</p>
          <p>$29.99</p>
        </div>
        <div className="flex justify-between items-center text-[#0E7726]">
          <p>Due Today (3 days free)</p>
          <p>$0.00</p>
        </div>
      </div>
      <Link href={'/payment'} className="mt-6">
        <Button variant={'action'} size={'lg'} className="w-full">
          {t('try-free')}
        </Button>
      </Link>
    </section>
  );
};

export default Subscription;
