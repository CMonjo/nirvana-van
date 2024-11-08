import type { Metadata } from 'next';
import { acorn, kobe11 } from '../../fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import '../../globals.scss';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${kobe11.variable} ${acorn.variable} font-kobe11 antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            {children}
            <Analytics />
            <SpeedInsights />
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Nirvana Van',
  description: 'Explore the nirvana',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nirvana-van.com/',
    siteName: 'Nirvana Van',
    images: [
      {
        url: 'TODO BANNER',
        width: 1600,
        height: 1200,
        alt: 'Nirvana Van',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'TODO BANNER',
        width: 1600,
        height: 1200,
        alt: 'Nirvana Van',
      },
    ],
  },
  authors: [{ name: 'Camille MONJO', url: 'https://cmonjo.com/' }],
  keywords: ['Nirvana Van', 'CMonjo'],
};
