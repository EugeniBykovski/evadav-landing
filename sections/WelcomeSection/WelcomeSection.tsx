'use client';

import { FC, memo } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Description from '@/components/Description/Description';

const WelcomeSection: FC = memo(() => {
  const t = useTranslations('welcome-section');

  return (
    <div className="flex flex-col justify-start lg:items-start gap-6 sm:mt-16 md:mt-0">
      <div className="md:max-w-[550px] flex flex-col sm:items-center md:items-start">
        <h2 className="md:text-5xl sm:text-3xl font-extrabold sm:text-center md:text-left mb-6 text-[#040C0C]">
          {t('title-1')}
          <span className="text-[#0E7726] px-2">{t('plant')}</span>
          <br />
          {t('title-2')}
        </h2>
        <div className="md:max-w-[400px] mb-2">
          <Description className="sm:text-center md:text-left">
            {t('description')}
          </Description>
        </div>
      </div>
      <Link href={'/quiz'} className="flex sm:justify-center md:justify-start">
        <Button variant={'action'} size={'lg'}>
          {t('start')}
        </Button>
      </Link>
    </div>
  );
});

export default WelcomeSection;
