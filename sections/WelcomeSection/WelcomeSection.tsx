'use client';

import { FC, memo } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Description from '@/components/Description/Description';

const WelcomeSection: FC = memo(() => {
  const t = useTranslations('welcome-section');

  return (
    <div className="flex flex-col justify-start lg:items-start gap-6">
      <div className="max-w-[550px]">
        <h2 className="text-5xl font-extrabold mb-6 text-[#040C0C]">
          {t('title-1')}
          <span className="text-[#0E7726] px-2">{t('plant')}</span>
          <br />
          {t('title-2')}
        </h2>
        <div className="max-w-[400px] mb-2">
          <Description>{t('description')}</Description>
        </div>
      </div>
      <Link href={'/quiz'}>
        <Button variant={'action'} size={'lg'}>
          {t('start')}
        </Button>
      </Link>
    </div>
  );
});

export default WelcomeSection;
