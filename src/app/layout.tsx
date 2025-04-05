import '@/app/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import c from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import type { ReactNode } from 'react';
import Providers from './providers';

export const metadata: Metadata = {
  title: {
    default: '7amdi',
    template: '%s'
  },
  metadataBase: new URL('https://7ub1.vercel.app'),
  creator: '7amdi',
  description:
    'ana 7amdi ana mangol ana apah ana 7amdi ana mangol ana apah  ana 7amdi ana mangol ana apah .',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: '7amdi',
    description:
      'ana 7amdi ana mangol ana apah ana 7amdi ana mangol ana apah  ana 7amdi ana mangol ana apah .',
    url: 'https://7ub1.vercel.app',
    siteName: '7amdi',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://7ub1.vercel.app/og.jpeg',
        height: 1200,
        width: 1200,
        alt: 'Black background image'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: '7amdi',
    site: '@7amdi911',
    creator: '@ana7amdi',
    card: 'summary_large_image',
    description:
      'ana 7amdi ana mangol ana apah ana 7amdi ana mangol ana apah  ana 7amdi ana mangol ana apah .'
  }
};

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader'
});

export interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={c('scroll-smooth', GeistMono.variable, GeistSans.variable, newsreader.variable)}
    >
      <body className="text-sm text-primary antialiased dark:bg-primary dark:text-primary-dark md:text-base lg:text-base">
        <Providers>
          <main className="mx-auto min-h-screen max-w-2xl pb-page-bottom-mobile pt-page-top-mobile md:pb-page-bottom md:pt-page-top">
            {children}
            <Analytics />
          </main>
        </Providers>
      </body>
    </html>
  );
}
