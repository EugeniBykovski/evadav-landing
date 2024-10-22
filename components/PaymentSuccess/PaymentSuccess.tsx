'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import Link from 'next/link';

const PaymentSuccess: FC = () => {
  const t = useTranslations('payment-success');

  return (
    <section className="flex flex-col justify-center md:h-[70vh] sm:h-[35vh] md:w-[500px]">
      <h1 className="md:text-5xl sm:text-4xl font-extrabold mb-4 text-[#040C0C]">
        {t('title')}
      </h1>
      <p className='md:text-md sm:text-sm text-[#424844] mb-4"'>
        {t('description')}
      </p>
      <Link href={''} className="mt-6">
        <Button
          variant={'action'}
          size={'lg'}
          className="sm:w-[100%] md:w-full"
        >
          {t('go')}
        </Button>
      </Link>
    </section>
  );
};

export default PaymentSuccess;
