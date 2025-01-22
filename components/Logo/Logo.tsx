'use client';

import { FC, memo } from 'react';
import { LogoIcon } from '@/assets';
import Link from 'next/link';

const Logo: FC = memo(() => (
  <Link href={'/'} className="flex items-center gap-2 justify-start">
    <LogoIcon className="hover:opacity-85 transition" />
    <h2 className="text-2xl font-bold text-[#0E7726]">Plant AI Expert</h2>
  </Link>
));

Logo.displayName = 'Logo';

export default Logo;
