'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import bg_main from '@/assets/images/bg.jpg';

const PageLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <section
      className={clsx(
        isHomePage
          ? 'bg-cover bg-no-repeat md:bg-center md:h-[calc(100vh-20vh-8vh)] sm:h-[77vh]'
          : 'bg-[#F1F1F0] sm:h-screen md:h-[calc(100vh-20vh-8vh)]'
      )}
      style={isHomePage ? { backgroundImage: `url(${bg_main.src})` } : {}}
    >
      {children}
    </section>
  );
};

export default PageLayout;
