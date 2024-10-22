'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials/Socials';
import Logo from '@/components/Logo/Logo';

const Footer: FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#ffffff] text-zinc-400 text-sm py-7 text-left absolute bottom-0 md:w-full sm:w-[100vw] shadow-2xl">
      <div className="container">
        <div className="sm:flex sm:justify-center md:justify-start">
          <Logo />
        </div>
        <Socials />
        <p className="mt-6 md:text-xm sm:text-xs sm:text-center md:text-left font-light text-[#929994]">
          {t('copyright')} &copy; {t('rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
