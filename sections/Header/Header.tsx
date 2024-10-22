'use client';

import { FC } from 'react';
import Logo from '@/components/Logo/Logo';

const Header: FC = () => {
  return (
    <header className="flex justify-center items-center py-6 px-6 bg-[#F1F1F0]">
      <Logo />
    </header>
  );
};

export default Header;
