'use client';

import { FC, memo } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { subscriptionFeatures } from '@/data/mock-data';
import PlanCard from '../PlanCard/PlanCard';
import FeatureList from '../FeatureList/FeatureList';

const Subscription: FC = memo(() => {
  const t = useTranslations('subscription');

  return (
    <div className="flex flex-col justify-start h-[85%] relative">
      <h2 className="md:text-5xl sm:text-3xl font-extrabold mb-8 text-[#040C0C]">
        {t('title')} <span className="text-[#0E7726]">Premium</span>
      </h2>
      <FeatureList features={subscriptionFeatures} />
      <PlanCard />
      <Link href={'/payment'} className="mt-6 absolute bottom-0 w-full">
        <Button variant={'action'} size={'lg'} className="w-full">
          {t('try-free')}
        </Button>
      </Link>
    </div>
  );
});

export default Subscription;
