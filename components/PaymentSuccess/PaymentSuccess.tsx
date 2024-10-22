'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import Link from 'next/link';

const PaymentSuccess: FC = () => {
  const t = useTranslations('payment-success');

  return (
    <section className="flex flex-col justify-center h-[70vh] md:w-[500px]">
      <h1 className="text-5xl font-extrabold mb-4 text-[#040C0C]">
        {t('title')}
      </h1>
      <p className='text-md text-[#424844] mb-4"'>{t('description')}</p>
      <Link href={''} className="mt-6">
        <Button variant={'action'} size={'lg'}>
          {t('go')}
        </Button>
      </Link>
    </section>
  );
};

export default PaymentSuccess;
