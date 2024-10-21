'use client';

import { FC } from 'react';
import Logo from '@/components/Logo/Logo';
import { useTranslations } from 'next-intl';

const WelcomeSection: FC = () => {
  const t = useTranslations('welcome-section');

  return (
    <section className="p-8 flex flex-col items-center">
      <Logo />
      <div className="flex justify-around gap-10 items-center">
        <p>Image</p>
        {t('title')}
      </div>
    </section>
  );
};

export default WelcomeSection;
