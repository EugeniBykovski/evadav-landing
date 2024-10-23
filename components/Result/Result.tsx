'use client';

import { FC, memo } from 'react';
import { ResultProps } from '@/types/quiz-types';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { plantImages } from './ result-images';
import { getResults } from '@/lib/utils';

const Result: FC<ResultProps> = memo(({ answers }) => {
  const t = useTranslations('result');
  const resultPlants = getResults(answers);

  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2 text-[#040C0C]">
        {t('thank-you')}
      </h2>
      <p className="text-md text-[#424844]">{t('plan')}</p>
      <div className="list-disc my-7 flex justify-between items-center gap-3">
        {resultPlants.map((plant, index) => (
          <Image src={plantImages[plant]} alt={plant} width={250} key={index} />
        ))}
      </div>
      <p className="text-md text-[#424844] mb-5">{t('description')}</p>
      <Link href={'/subscription'}>
        <Button variant={'action'} className="w-full" size={'lg'}>
          {t('get-now')}
        </Button>
      </Link>
    </>
  );
});

export default Result;
