'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface ClickIdContextType {
  clickId: string | null;
}

const ClickIdContext = createContext<ClickIdContextType | undefined>(undefined);

export const ClickIdProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clickId, setClickId] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const cidFromUrl = searchParams.get('cid');
    if (cidFromUrl) {
      setClickId(cidFromUrl);
    }
  }, [searchParams]);

  return (
    <ClickIdContext.Provider value={{ clickId }}>
      {children}
    </ClickIdContext.Provider>
  );
};

export const useClickId = () => {
  const context = useContext(ClickIdContext);
  if (!context) {
    throw new Error('useClickId must be used within a ClickIdProvider');
  }
  return context.clickId;
};
