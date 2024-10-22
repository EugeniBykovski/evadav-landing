'use client';

import { FC, PropsWithChildren } from 'react';

const Description: FC<PropsWithChildren> = ({ children }) => (
  <p className="md:text-lg sm:text-sm text-left text-[#424844]">{children}</p>
);

export default Description;
