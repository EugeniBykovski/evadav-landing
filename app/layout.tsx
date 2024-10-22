import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Footer from '@/sections/Footer/Footer';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '@/sections/Sidebar/Sidebar';

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
      <body className={clsx(dmSans.className, `antialiased bg-[#F1F1F0]`)}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-[100vh]">
            <main className="flex-1">
              <div className="container mx-auto">
                <Sidebar children={children} />
              </div>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
