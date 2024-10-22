'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import bg_result from '@/assets/images/bg_result.png';
import bg_welcome from '@/assets/images/bg_welcome.jpg';
import { usePathname } from 'next/navigation';

const Sidebar = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isQuizPage = pathname === '/quiz';
  const isSubscriptionPage = pathname === '/subscription';
  const isPaymentPage = pathname === '/payment';

  return (
    <section
      className={`flex h-full ${
        isHomePage ? '' : 'sm:flex-col-reverse md:flex-row'
      }`}
    >
      {!isHomePage && (
        <div className="relative h-[81vh] lg:w-[46%] md:w-[80%] sm:w-full sm:mb-64 md:mb-0 flex-col-reverse flex">
          {isQuizPage ? (
            <Image
              src={bg_result}
              alt="Quiz Background"
              layout="fill"
              objectFit="contain"
            />
          ) : isSubscriptionPage || isPaymentPage ? (
            <Image
              src={bg_welcome}
              alt="Subscription Background"
              layout="fill"
              objectFit="contain"
            />
          ) : null}
        </div>
      )}
      <div className="pt-8 md:ml-10 lg:ml-0">{children}</div>
    </section>
  );
};

export default Sidebar;
