import { FC } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <Logo />
      <nav>
        <Link
          href="/quiz"
          className="text-lg font-bold text-gray-700 hover:text-green-600"
        >
          Quiz
        </Link>
      </nav>
    </header>
  );
};

export default Header;
