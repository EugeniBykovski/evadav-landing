'use client';

import { FC, memo } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import QRCode from 'react-qr-code';
import Link from 'next/link';
import Image from 'next/image';
import flower from '@/assets/images/flower_3.png';

const PaymentSuccess: FC = memo(() => {
  const t = useTranslations('payment-success');

  return (
    <section className="flex flex-col justify-center lg:w-[500px] h-full">
      <div>
        <h1 className="md:text-5xl sm:text-4xl font-extrabold md:text-center lg:text-left tracking-tight mb-4 text-[#040C0C]">
          {t('title')}
        </h1>
        <p className="md:block sm:hidden md:text-md sm:text-sm md:text-center lg:text-left text-[#424844] lg:w-[75%] md:my-8 lg:my-0">
          {t('subtitle')}
          <br />
          {t('description')}
        </p>
        <p className="md:hidden sm:block md:text-md sm:text-sm text-[#424844] md:w-[75%]">
          {t('description-1')}
        </p>

        <div className="sm:flex justify-center flex-col pl-10 mt-4 md:hidden">
          <Image src={flower} width={512} height={512} alt="heart" />
        </div>

        <div className="mb-8 sm:block md:hidden">
          <h3 className="text-[22px] text-center font-extrabold sm:mb-4 text-[#040C0C]">
            Welcome to <span className="text-[#0E7726]">Plant Expert AI</span>
          </h3>
          <p className="text-md text-center text-[#424844]">
            {t('mobile-description')}
          </p>
        </div>

        <div className="my-10 mx-auto sm:hidden md:flex justify-center">
          <div
            style={{
              height: 'auto',
              margin: '0 auto',
              maxWidth: 128,
              width: '100%',
            }}
          >
            <QRCode
              style={{
                height: 'auto',
                maxWidth: '100%',
                width: '100%',
              }}
              bgColor={'transparent'}
              value={'link'}
            />
          </div>
        </div>
      </div>
      <Link href={''}>
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
});

PaymentSuccess.displayName = 'PaymentSuccess';

export default PaymentSuccess;
