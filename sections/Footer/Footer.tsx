'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials/Socials';
import Logo from '@/components/Logo/Logo';

const Footer: FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#ffffff] text-zinc-400 text-sm py-7 text-left absolute bottom-0 w-full">
      <div className="container">
        <Logo />
        <Socials />
        <p className="mt-6 w-[60%] text-xs opacity-60">
          Copyright &copy; {t('rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
