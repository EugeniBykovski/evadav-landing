'use client';

import { FC, memo } from 'react';
import { useTranslations } from 'next-intl';

const SupportPage: FC = memo(() => {
  const t = useTranslations('support');

  return <div className="py-40">SupportPage</div>;
});

SupportPage.displayName = 'SupportPage';

export default SupportPage;
