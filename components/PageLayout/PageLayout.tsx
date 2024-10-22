'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import bg_main from '@/assets/images/bg.jpg';

const PageLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div
      className={clsx(
        isHomePage ? 'bg-cover bg-no-repeat bg-center' : 'bg-[#F1F1F0]'
      )}
      style={isHomePage ? { backgroundImage: `url(${bg_main.src})` } : {}}
    >
      {children}
    </div>
  );
};

export default PageLayout;
