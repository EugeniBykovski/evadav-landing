import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'en';

  return {
    locale,
    messages: (await import(`../i18n/translations/${locale}.json`)).default,
  };
});
