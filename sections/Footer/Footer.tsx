'use client';

import { FC, memo } from 'react';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials/Socials';
import Logo from '@/components/Logo/Logo';

const Footer: FC = memo(() => {
  const t = useTranslations('footer');

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[19vh] bg-[#ffffff] text-zinc-400 text-sm py-7 shadow-2xl z-50">
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
});

export default Footer;
