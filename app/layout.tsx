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
          <div className="flex min-h-[100vh] flex-col">
            <Header />
            <main className="flex-1">
              <PageLayout>
                <div className="container mx-auto">
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
