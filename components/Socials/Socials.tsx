'use client';

import { FC, memo } from 'react';
import { socialLinks } from '@/data/mock-data';
import Link from 'next/link';

const Socials: FC = memo(() => (
  <ul className="flex md:justify-start sm:flex-col md:flex-row sm:gap-1 items-center md:gap-8 mt-5">
    {socialLinks?.map(({ id, url, title }) => (
      <li key={id}>
        <Link
          href={url}
          className="text-[#040C0C] hover:opacity-85 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
));

Socials.displayName = 'Socials';

export default Socials;
