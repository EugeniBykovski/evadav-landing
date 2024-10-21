import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Footer from '@/sections/Footer/Footer';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Some App',
  description: 'App decription',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="relative">
      <body
        className={clsx(
          dmSans.className,
          `antialiased bg-[#ffffff] tracking-wide`
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <main className="gap-x-2 min-h-[calc(100vh)] pt-4 container">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
