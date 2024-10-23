'use client';

import { FC, memo } from 'react';
import { LogoIcon } from '@/assets';
import Link from 'next/link';

const Logo: FC = memo(() => (
  <Link href={'/'}>
    <LogoIcon className="hover:opacity-85 transition" />
  </Link>
));

export default Logo;
