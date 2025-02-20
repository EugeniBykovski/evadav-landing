'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const useClickId = () => {
  const searchParams = useSearchParams();
  const [clickId, setClickId] = useState<string | null>(null);

  useEffect(() => {
    // get `cid` from URL
    const cidFromUrl = searchParams.get('cid');
    if (cidFromUrl) {
      setClickId(cidFromUrl);
      localStorage.setItem('clickId', cidFromUrl); // save in local storage
    }
  }, [searchParams]);

  useEffect(() => {
    // replace `{clickid}`
    const replaceClickIdInLinks = () => {
      const storedClickId = localStorage.getItem('clickId');
      if (!storedClickId) return;

      document.querySelectorAll('a[href*="{clickid}"]').forEach((link) => {
        const anchor = link as HTMLAnchorElement;
        anchor.href = anchor.href.replace('{clickid}', storedClickId);
      });
    };

    replaceClickIdInLinks();
  }, []);

  return clickId;
};

export default useClickId;
