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
import Script from 'next/script';
import { ClickIdProvider } from '@/context/ClickIdContext';

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
    <ClickIdProvider>
      <html lang={locale} className="relative">
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T7HSCTHH');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7HSCTHH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
    </ClickIdProvider>
  );
}
