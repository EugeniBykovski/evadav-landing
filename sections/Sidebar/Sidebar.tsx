'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Description from '@/components/Description/Description';
import flower_1 from '@/assets/images/flower_1.png';
import flower_2 from '@/assets/images/flower_2.png';
import flower_3 from '@/assets/images/flower_3.png';
import { useTranslations } from 'next-intl';

const Sidebar = ({ children }: { children: ReactNode }) => {
  const t = useTranslations('sidebar');

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isQuizPage = pathname === '/quiz';
  const isResultPage = pathname === '/result';
  const isSubscriptionPage = pathname === '/subscription';
  const isPaymentPage = pathname === '/payment';

  return (
    <>
      {isHomePage ? (
        <div className="flex justify-start w-full">
          <div>{children}</div>
        </div>
      ) : (
        <div
          className={`flex justify-between w-full gap-12 ${
            isSubscriptionPage || isPaymentPage ? 'h-full' : ''
          }`}
          style={
            isSubscriptionPage || isPaymentPage ? { height: 'inherit' } : {}
          }
        >
          <div
            className={`flex justify-between ${
              isSubscriptionPage || isPaymentPage
                ? 'items-center'
                : 'items-start'
            } w-[50%]`}
          >
            {isQuizPage ? (
              <div className="flex flex-col justify-center h-[90%] items-start w-[100%]">
                <Image
                  src={flower_1}
                  alt="Quiz Background"
                  className="ml-[3rem]"
                />
                <div className="flex flex-col items-center w-full">
                  <h2 className="text-2xl font-extrabold mb-3 text-[#040C0C]">
                    <span className="text-[#0E7726]">Please</span> answer the
                    questions!
                  </h2>
                  <Description>{t('description')}</Description>
                </div>
              </div>
            ) : isSubscriptionPage ? (
              <div className="flex flex-col justify-center items-start w-[100%]">
                <Image
                  src={flower_2}
                  alt="Payment Background"
                  className="ml-[3rem]"
                />
                <div className="flex flex-col items-center w-full mb-10">
                  <h2 className="text-2xl font-extrabold mb-3 text-[#040C0C]">
                    Try Plant AI Expert{' '}
                    <span className="text-[#0E7726]">for free</span>
                  </h2>
                  <div className="w-[65%]">
                    <Description className="text-center">
                      {t('description-2')}
                    </Description>
                  </div>
                </div>
              </div>
            ) : isResultPage ? (
              <div className="flex flex-col justify-center h-[90%] items-start w-[100%]">
                <Image
                  src={flower_2}
                  alt="Payment Background"
                  className="ml-[3rem]"
                />
                <div className="flex flex-col items-center w-full">
                  <h2 className="text-2xl font-extrabold mb-3 text-[#040C0C]">
                    Your <span className="text-[#0E7726]">Perfect</span> Plant
                    Match
                  </h2>
                  <div className="w-[65%]">
                    <Description className="text-center">
                      {t('description-4')}
                    </Description>
                  </div>
                </div>
              </div>
            ) : isPaymentPage ? (
              <div className="flex flex-col justify-center items-start w-[100%]">
                <Image
                  src={flower_3}
                  alt="Payment Background"
                  className="ml-[3rem]"
                />
                <div className="flex flex-col items-center w-full mb-20">
                  <h2 className="text-2xl font-extrabold mb-3 text-[#040C0C]">
                    Welcome to{' '}
                    <span className="text-[#0E7726]">Plant Expert AI</span>
                  </h2>
                  <Description>{t('description-3')}</Description>
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-[50%]">{children}</div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
