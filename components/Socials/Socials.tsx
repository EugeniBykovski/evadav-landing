'use client';

import { FC } from 'react';
import { socialLinks } from '@/data/mock-data';
import Link from 'next/link';

const Socials: FC = () => {
  return (
    <ul className="flex justify-center items-center gap-6 step7">
      {socialLinks.map(({ id, url, icon }) => (
        <li key={id}>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
