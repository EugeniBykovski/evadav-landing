'use client';

import { FC } from 'react';
import Logo from '@/components/Logo/Logo';
import Image from 'next/image';
import { bg_welcome } from '@/assets';
import { Button } from '@/components/ui/button';

const WelcomeSection: FC = () => {
  return (
    <section className="flex">
      <div className="h-full">
        <Image src={bg_welcome} alt="bg_weclome" />
      </div>
      <div>
        <div className="p-8 pl-10">
          <Logo />
        </div>
        <div className="flex flex-col pl-10 h-full justify-start mt-[10%] items-start gap-6">
          <h2>Find Your Ideal Plant in Minutes</h2>
          <p>
            Answer a few simple questions and get personalized plant
            recommendations based on your space, lifestyle, and preferences.
          </p>
          <Button variant={'action'} size={'lg'}>
            Start the Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
