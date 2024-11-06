import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';
import PageLayout from '@/components/PageLayout/PageLayout';
import Header from '@/sections/Header/Header';
import Footer from '@/sections/Footer/Footer';
import Sidebar from '@/sections/Sidebar/Sidebar';
import Head from 'next/head';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plant Ai',
  description: 'Plant AI Expert',
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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <body className={clsx(dmSans.className, 'antialiased')}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="md:fixed customLandscape:md:static top-[8vh] w-[100%]">
              <PageLayout>
                <div className="container mx-auto lg:h-full md:h-[57vh] customLandscape:md:h-auto customLandscape:py-4 flex items-center scale-95">
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
