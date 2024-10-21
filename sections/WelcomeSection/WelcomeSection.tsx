'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WelcomeSection: FC = () => {
  return (
    <section className="flex flex-col justify-center h-[70vh]">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="max-w-[500px]">
          <h2 className="text-3xl font-bold">
            Find Your Ideal Plant in Minutes
          </h2>
          <p className="text-lg">
            Answer a few simple questions and get personalized plant
            recommendations based on your space, lifestyle, and preferences.
          </p>
        </div>
        <Link href={'/quiz'}>
          <Button variant={'action'} size={'lg'}>
            Start the Quiz
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WelcomeSection;
