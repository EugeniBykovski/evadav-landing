'use client';

import { FC, memo } from 'react';
import Socials from '@/components/Socials/Socials';
import Logo from '@/components/Logo/Logo';

const Footer: FC = memo(() => {
  return (
    <footer className="md:fixed customLandscape:md:static customLandscape:md:h-auto bottom-0 left-0 w-full bg-[#ffffff] text-zinc-400 text-sm py-16 shadow-2xl z-50">
      <div className="container">
        <div className="sm:flex sm:justify-center md:justify-start">
          <Logo />
        </div>
        <Socials />
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
