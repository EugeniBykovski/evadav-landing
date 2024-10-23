'use client';

import { FC } from 'react';
import Logo from '@/components/Logo/Logo';

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[10vh] bg-[#F1F1F0] flex justify-center items-center z-50">
      <Logo />
    </header>
  );
};

export default Header;
