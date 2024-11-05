'use client';

import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { DescriptionProps } from './types';

const Description: FC<PropsWithChildren<DescriptionProps>> = ({
  children,
  className,
}) => {
  const descriptionClass = clsx(
    'text-left text-[#424844]',
    'md:text-lg sm:text-md',
    className
  );

  return <p className={descriptionClass}>{children}</p>;
};

Description.displayName = 'Description';

export default Description;
