'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials/Socials';
import Logo from '@/components/Logo/Logo';

const Footer: FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#ffffff] text-zinc-400 text-sm py-7 text-left absolute bottom-0 w-full shadow-2xl">
      <div className="container">
        <Logo />
        <Socials />
        <p className="mt-6 text-xs font-light text-[#929994]">
          {t('copyright')} &copy; {t('rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
