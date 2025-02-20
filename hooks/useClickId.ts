'use client';

import { useEffect, useState } from 'react';

const useClickId = () => {
  const [clickId, setClickId] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const cidFromUrl = searchParams.get('cid');

    if (cidFromUrl) {
      setClickId(cidFromUrl);
      localStorage.setItem('clickId', cidFromUrl);
    }
  }, []);

  useEffect(() => {
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
