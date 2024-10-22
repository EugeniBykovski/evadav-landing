'use client';

import { FC } from 'react';
import { socialLinks } from '@/data/mock-data';
import Link from 'next/link';

const Socials: FC = () => {
  return (
    <ul className="flex justify-start items-center gap-8 mt-5">
      {socialLinks.map(({ id, url, title }) => (
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
  );
};

export default Socials;
