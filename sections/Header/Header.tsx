'use client';

import { FC } from 'react';
import Logo from '@/components/Logo/Logo';

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <Logo />
    </header>
  );
};

export default Header;
