'use client';

import { FC, PropsWithChildren } from 'react';

const Description: FC<PropsWithChildren> = ({ children }) => (
  <p className="md:text-lg sm:text-sm text-center tracking-tight text-zinc-600">
    {children}
  </p>
);

export default Description;
