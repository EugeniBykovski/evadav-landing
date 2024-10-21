'use client';

import { FC } from 'react';
import { LogoIcon } from '@/assets';
import Link from 'next/link';

const Logo: FC = () => (
  <Link href={'/'}>
    <LogoIcon className="hover:opacity-85 transition" />
  </Link>
);

export default Logo;
