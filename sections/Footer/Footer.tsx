'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Socials from '@/components/Socials/Socials';

const Footer: FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#313332] text-[#ffffff] text-sm py-8 text-center absolute bottom-0 w-full">
      <Socials />
      <p className="mt-6 text-xs opacity-60">&copy; {t('rights')}</p>
    </footer>
  );
};

export default Footer;
