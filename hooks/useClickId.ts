'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const useClickId = () => {
  const [clickId, setClickId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const cidFromUrl = searchParams.get('cid');

    if (cidFromUrl) {
      setClickId(cidFromUrl);

      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('cid', cidFromUrl);
      router.replace(`${pathname}?${newSearchParams.toString()}`);
    }
  }, [searchParams, pathname, router]);

  return clickId;
};

export default useClickId;
