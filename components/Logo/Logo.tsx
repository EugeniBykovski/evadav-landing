'use client';

import { FC } from 'react';
import { LogoIcon } from '@/assets';
import Link from 'next/link';

const Logo: FC = () => (
  <Link href={'/'}>
    <LogoIcon className="w-8 h-8 fill-green-500 hover:opacity-85 transition" />
  </Link>
);

export default Logo;
