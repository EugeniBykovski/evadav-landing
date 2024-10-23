import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Footer from '@/sections/Footer/Footer';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '@/sections/Sidebar/Sidebar';
import Header from '@/sections/Header/Header';
import PageLayout from '@/components/PageLayout/PageLayout';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Some App',
  description: 'App decription',
  icons: {
    icon: '/assets/icons/Icon.svg',
    shortcut: '/assets/icons/Icon.svg',
  },
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
      <body className={clsx(dmSans.className, 'antialiased')}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="fixed top-[10vh] w-[100%] h-[71vh]">
              <PageLayout>
                <div className="container mx-auto h-full flex items-center">
                  <Sidebar>{children}</Sidebar>
                </div>
              </PageLayout>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
